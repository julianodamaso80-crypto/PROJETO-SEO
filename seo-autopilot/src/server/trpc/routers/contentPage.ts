import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, protectedProcedure } from "../init";
import { contentPages, keywordResearch, clientOnboarding, operatorNotes, contentPlans, wpConnections, users } from "@/lib/schema";
import { eq, desc, and, inArray } from "drizzle-orm";
import { producePages } from "@/server/services/contentGenerationService";
import { publishPage, faqToHtml, uploadImage } from "@/server/services/wordpressService";
import { sendPublicationCompleteEmail } from "@/server/services/emailService";

export const contentPageRouter = router({
  listByPlan: protectedProcedure
    .input(
      z.object({
        planId: z.string().uuid(),
        status: z.string().optional(),
        type: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const conditions = [eq(contentPages.planId, input.planId)];
      if (input.status) conditions.push(eq(contentPages.status, input.status));
      if (input.type) conditions.push(eq(contentPages.type, input.type));

      return ctx.db
        .select()
        .from(contentPages)
        .where(and(...conditions))
        .orderBy(contentPages.displayOrder);
    }),

  getById: protectedProcedure
    .input(z.object({ pageId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [page] = await ctx.db
        .select()
        .from(contentPages)
        .where(eq(contentPages.id, input.pageId))
        .limit(1);
      return page ?? null;
    }),

  updateStatus: protectedProcedure
    .input(
      z.object({
        pageId: z.string().uuid(),
        status: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const [page] = await ctx.db
        .update(contentPages)
        .set({ status: input.status, updatedAt: new Date() })
        .where(eq(contentPages.id, input.pageId))
        .returning();
      return page;
    }),

  // Full update for page editing
  update: protectedProcedure
    .input(
      z.object({
        pageId: z.string().uuid(),
        title: z.string().optional(),
        slug: z.string().optional(),
        targetKeyword: z.string().optional(),
        secondaryKeywords: z.array(z.string()).optional(),
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
        contentHtml: z.string().optional(),
        contentMarkdown: z.string().optional(),
        type: z.string().optional(),
        clusterId: z.string().optional(),
        wordCount: z.number().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { pageId, ...data } = input;
      const updateData: Record<string, unknown> = { updatedAt: new Date() };
      for (const [key, val] of Object.entries(data)) {
        if (val !== undefined) updateData[key] = val;
      }

      const [page] = await ctx.db
        .update(contentPages)
        .set(updateData)
        .where(eq(contentPages.id, pageId))
        .returning();
      return page;
    }),

  // Delete a page from the plan
  delete: protectedProcedure
    .input(z.object({ pageId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(contentPages)
        .where(eq(contentPages.id, input.pageId));
      return { success: true };
    }),

  // Get keywords for a plan
  getKeywords: protectedProcedure
    .input(z.object({ planId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      return ctx.db
        .select()
        .from(keywordResearch)
        .where(eq(keywordResearch.planId, input.planId))
        .orderBy(desc(keywordResearch.isSelected));
    }),

  // Generate content for a single page
  generateSingle: protectedProcedure
    .input(z.object({ pageId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [page] = await ctx.db
        .select()
        .from(contentPages)
        .where(eq(contentPages.id, input.pageId))
        .limit(1);

      if (!page) throw new Error("Page not found");

      const [plan] = await ctx.db
        .select()
        .from(contentPlans)
        .where(eq(contentPlans.id, page.planId))
        .limit(1);

      if (!plan || !plan.onboardingId) throw new Error("Plan not found");

      const results = await producePages({
        planId: page.planId,
        siteId: page.siteId,
        pageIds: [input.pageId],
        onboardingId: plan.onboardingId,
      });

      return results[0] || { pageId: input.pageId, status: "failed", error: "No result" };
    }),

  // Approve a page's generated content
  approvePage: protectedProcedure
    .input(z.object({ pageId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [page] = await ctx.db
        .update(contentPages)
        .set({ status: "approved", updatedAt: new Date() })
        .where(eq(contentPages.id, input.pageId))
        .returning();
      return page;
    }),

  // Reject page content (reset to pending, clear content)
  rejectPage: protectedProcedure
    .input(z.object({ pageId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [page] = await ctx.db
        .update(contentPages)
        .set({
          status: "pending",
          contentHtml: null,
          contentMarkdown: null,
          faqJson: null,
          schemaJson: null,
          errorMessage: null,
          updatedAt: new Date(),
        })
        .where(eq(contentPages.id, input.pageId))
        .returning();
      return page;
    }),

  // ─── WordPress Publishing ─────────────────────────────────

  // Publish a single page to WordPress
  publish: protectedProcedure
    .input(
      z.object({
        pageId: z.string().uuid(),
        publishStatus: z.enum(["draft", "publish"]).default("draft"),
        pageType: z.enum(["page", "post"]).default("page"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // 1. Fetch the page
      const [page] = await ctx.db
        .select()
        .from(contentPages)
        .where(eq(contentPages.id, input.pageId))
        .limit(1);

      if (!page) throw new TRPCError({ code: "NOT_FOUND", message: "Página não encontrada" });

      if (page.status !== "approved") {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Página precisa estar aprovada para publicar" });
      }

      // 2. Get WP connection
      if (!page.siteId) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Página sem site associado" });
      }

      const [conn] = await ctx.db
        .select()
        .from(wpConnections)
        .where(eq(wpConnections.siteId, page.siteId))
        .limit(1);

      if (!conn) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Conexão WordPress não configurada" });
      }
      if (conn.connectionStatus !== "connected") {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Conexão WordPress não testada ou com falha" });
      }

      // 3. Mark as publishing
      await ctx.db
        .update(contentPages)
        .set({ status: "publishing", updatedAt: new Date() })
        .where(eq(contentPages.id, input.pageId));

      // 4. Build content
      const contentHtml = page.contentHtml || page.contentMarkdown || "";
      const faqs = Array.isArray(page.faqJson)
        ? (page.faqJson as { question: string; answer: string }[])
        : [];
      const faqHtmlStr = faqToHtml(faqs);

      // 4.5 Upload featured image if available
      let featuredMediaId: number | undefined;
      if (page.featuredImageUrl && !page.featuredImageUrl.startsWith("data:")) {
        try {
          const imgResponse = await fetch(page.featuredImageUrl, { signal: AbortSignal.timeout(30000) });
          if (imgResponse.ok) {
            const imgBuffer = Buffer.from(await imgResponse.arrayBuffer());
            const upload = await uploadImage({
              wpUrl: conn.wpUrl, wpUser: conn.wpUser, wpAppPassword: conn.wpAppPassword,
              imageBuffer: imgBuffer, filename: `${page.slug}-featured.jpg`, mimeType: "image/jpeg",
            });
            if (upload.success && upload.mediaId) featuredMediaId = upload.mediaId;
          }
        } catch {
          // Non-critical, continue without featured image
        }
      }

      // 5. Publish to WP
      const result = await publishPage({
        wpUrl: conn.wpUrl,
        wpUser: conn.wpUser,
        wpAppPassword: conn.wpAppPassword,
        title: page.title,
        slug: page.slug,
        contentHtml,
        metaTitle: page.metaTitle || undefined,
        metaDescription: page.metaDescription || undefined,
        schemaJson: page.schemaJson || undefined,
        faqHtml: faqHtmlStr || undefined,
        status: input.publishStatus,
        type: input.pageType,
        featuredMediaId,
      });

      if (result.success) {
        // 6. Update DB with WP data
        await ctx.db
          .update(contentPages)
          .set({
            status: "published",
            wpPostId: result.wpPostId!,
            wpUrl: result.wpUrl!,
            publishedAt: new Date(),
            updatedAt: new Date(),
          })
          .where(eq(contentPages.id, input.pageId));

        return { success: true, wpPostId: result.wpPostId, wpUrl: result.wpUrl };
      } else {
        // Revert status
        await ctx.db
          .update(contentPages)
          .set({ status: "approved", errorMessage: result.error, updatedAt: new Date() })
          .where(eq(contentPages.id, input.pageId));

        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: result.error || "Erro ao publicar" });
      }
    }),

  // Publish a batch of pages to WordPress
  publishBatch: protectedProcedure
    .input(
      z.object({
        planId: z.string().uuid(),
        pageIds: z.array(z.string().uuid()).optional(),
        publishStatus: z.enum(["draft", "publish"]).default("draft"),
        pageType: z.enum(["page", "post"]).default("page"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Get approved pages
      const conditions = [
        eq(contentPages.planId, input.planId),
        eq(contentPages.status, "approved"),
      ];

      let pages;
      if (input.pageIds?.length) {
        pages = await ctx.db
          .select()
          .from(contentPages)
          .where(and(...conditions, inArray(contentPages.id, input.pageIds)));
      } else {
        pages = await ctx.db
          .select()
          .from(contentPages)
          .where(and(...conditions))
          .orderBy(contentPages.displayOrder);
      }

      if (pages.length === 0) {
        return { published: 0, failed: 0, results: [] };
      }

      // Get WP connection
      const [plan] = await ctx.db
        .select()
        .from(contentPlans)
        .where(eq(contentPlans.id, input.planId))
        .limit(1);

      if (!plan?.siteId) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Plano sem site associado" });
      }

      const [conn] = await ctx.db
        .select()
        .from(wpConnections)
        .where(eq(wpConnections.siteId, plan.siteId))
        .limit(1);

      if (!conn || conn.connectionStatus !== "connected") {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Conexão WordPress não disponível" });
      }

      // Publish sequentially with delay
      const results: { pageId: string; status: string; wpUrl?: string; error?: string }[] = [];

      for (const page of pages) {
        try {
          // Mark as publishing
          await ctx.db
            .update(contentPages)
            .set({ status: "publishing", updatedAt: new Date() })
            .where(eq(contentPages.id, page.id));

          const contentHtml = page.contentHtml || page.contentMarkdown || "";
          const faqs = Array.isArray(page.faqJson)
            ? (page.faqJson as { question: string; answer: string }[])
            : [];
          const faqHtmlStr = faqToHtml(faqs);

          // Upload featured image if available
          let batchFeaturedMediaId: number | undefined;
          if (page.featuredImageUrl && !page.featuredImageUrl.startsWith("data:")) {
            try {
              const imgRes = await fetch(page.featuredImageUrl, { signal: AbortSignal.timeout(30000) });
              if (imgRes.ok) {
                const imgBuf = Buffer.from(await imgRes.arrayBuffer());
                const upload = await uploadImage({
                  wpUrl: conn.wpUrl, wpUser: conn.wpUser, wpAppPassword: conn.wpAppPassword,
                  imageBuffer: imgBuf, filename: `${page.slug}-featured.jpg`, mimeType: "image/jpeg",
                });
                if (upload.success && upload.mediaId) batchFeaturedMediaId = upload.mediaId;
              }
            } catch { /* continue */ }
          }

          const result = await publishPage({
            wpUrl: conn.wpUrl,
            wpUser: conn.wpUser,
            wpAppPassword: conn.wpAppPassword,
            title: page.title,
            slug: page.slug,
            contentHtml,
            metaTitle: page.metaTitle || undefined,
            metaDescription: page.metaDescription || undefined,
            schemaJson: page.schemaJson || undefined,
            faqHtml: faqHtmlStr || undefined,
            status: input.publishStatus,
            type: input.pageType,
            featuredMediaId: batchFeaturedMediaId,
          });

          if (result.success) {
            await ctx.db
              .update(contentPages)
              .set({
                status: "published",
                wpPostId: result.wpPostId!,
                wpUrl: result.wpUrl!,
                publishedAt: new Date(),
                updatedAt: new Date(),
              })
              .where(eq(contentPages.id, page.id));
            results.push({ pageId: page.id, status: "published", wpUrl: result.wpUrl });
          } else {
            await ctx.db
              .update(contentPages)
              .set({ status: "approved", errorMessage: result.error, updatedAt: new Date() })
              .where(eq(contentPages.id, page.id));
            results.push({ pageId: page.id, status: "failed", error: result.error });
          }

          // Delay between publications to avoid WP rate limiting
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } catch (error) {
          const errMsg = error instanceof Error ? error.message : "Erro desconhecido";
          await ctx.db
            .update(contentPages)
            .set({ status: "approved", errorMessage: errMsg, updatedAt: new Date() })
            .where(eq(contentPages.id, page.id));
          results.push({ pageId: page.id, status: "failed", error: errMsg });
        }
      }

      // Check if all pages in the plan are now published → mark plan as completed
      const allPlanPages = await ctx.db
        .select({ status: contentPages.status })
        .from(contentPages)
        .where(eq(contentPages.planId, input.planId));

      const allPublished = allPlanPages.every((p) => p.status === "published");
      if (allPublished && allPlanPages.length > 0) {
        await ctx.db
          .update(contentPlans)
          .set({ status: "completed", updatedAt: new Date() })
          .where(eq(contentPlans.id, input.planId));
      }

      const publishedCount = results.filter((r) => r.status === "published").length;

      // Send publication email (non-blocking)
      if (publishedCount > 0) {
        (async () => {
          try {
            const [planData] = await ctx.db
              .select({ onboardingId: contentPlans.onboardingId })
              .from(contentPlans)
              .where(eq(contentPlans.id, input.planId))
              .limit(1);
            if (planData?.onboardingId) {
              const [onboarding] = await ctx.db
                .select({ clientName: clientOnboarding.clientName, businessName: clientOnboarding.businessName, createdBy: clientOnboarding.createdBy })
                .from(clientOnboarding)
                .where(eq(clientOnboarding.id, planData.onboardingId))
                .limit(1);
              if (onboarding?.createdBy) {
                const [user] = await ctx.db
                  .select({ email: users.email })
                  .from(users)
                  .where(eq(users.id, onboarding.createdBy))
                  .limit(1);
                if (user?.email) {
                  await sendPublicationCompleteEmail(
                    user.email,
                    onboarding.clientName || onboarding.businessName || "Cliente",
                    publishedCount,
                  );
                }
              }
            }
          } catch {}
        })();
      }

      return {
        published: publishedCount,
        failed: results.filter((r) => r.status === "failed").length,
        results,
      };
    }),

  // Get publishing stats for a plan
  getPublishStats: protectedProcedure
    .input(z.object({ planId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const pages = await ctx.db
        .select({ status: contentPages.status })
        .from(contentPages)
        .where(eq(contentPages.planId, input.planId));

      const total = pages.length;
      const published = pages.filter((p) => p.status === "published").length;
      const publishing = pages.filter((p) => p.status === "publishing").length;
      const approved = pages.filter((p) => p.status === "approved").length;

      return { total, published, publishing, approved };
    }),
});
