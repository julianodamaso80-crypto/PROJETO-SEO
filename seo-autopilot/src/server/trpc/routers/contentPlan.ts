import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, protectedProcedure } from "../init";
import { contentPlans, contentPages, keywordResearch, clientOnboarding, users } from "@/lib/schema";
import { eq, desc, and } from "drizzle-orm";
import { faqToHtml } from "@/server/services/wordpressService";
import { generateContentPlan } from "@/server/services/contentPlanService";
import { producePages } from "@/server/services/contentGenerationService";
import { sendPlanGeneratedEmail } from "@/server/services/emailService";

export const contentPlanRouter = router({
  createDraft: protectedProcedure
    .input(
      z.object({
        siteId: z.string().uuid().optional(),
        onboardingId: z.number(),
        totalPages: z.number().min(0).default(0),
        pillarPages: z.number().min(0).default(0),
        clusterPages: z.number().min(0).default(0),
        serviceAreaPages: z.number().min(0).default(0),
        blogPages: z.number().min(0).default(0),
        faqPages: z.number().min(0).default(0),
        operatorConfig: z
          .object({
            targetCities: z.string().optional(),
            priorityClusters: z.string().optional(),
            publishSchedule: z.string().optional(),
          })
          .optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const [plan] = await ctx.db
        .insert(contentPlans)
        .values({
          siteId: input.siteId,
          onboardingId: input.onboardingId,
          status: "draft",
          totalPages: input.totalPages,
          pillarPages: input.pillarPages,
          clusterPages: input.clusterPages,
          serviceAreaPages: input.serviceAreaPages,
          blogPages: input.blogPages,
          faqPages: input.faqPages,
          operatorConfig: input.operatorConfig,
        })
        .returning();
      return plan;
    }),

  getByOnboarding: protectedProcedure
    .input(z.object({ onboardingId: z.number() }))
    .query(async ({ ctx, input }) => {
      const [plan] = await ctx.db
        .select()
        .from(contentPlans)
        .where(eq(contentPlans.onboardingId, input.onboardingId))
        .orderBy(desc(contentPlans.createdAt))
        .limit(1);
      return plan ?? null;
    }),

  update: protectedProcedure
    .input(
      z.object({
        planId: z.string().uuid(),
        totalPages: z.number().min(0).optional(),
        pillarPages: z.number().min(0).optional(),
        clusterPages: z.number().min(0).optional(),
        serviceAreaPages: z.number().min(0).optional(),
        blogPages: z.number().min(0).optional(),
        faqPages: z.number().min(0).optional(),
        operatorConfig: z.any().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { planId, ...data } = input;
      const updateData: Record<string, unknown> = { updatedAt: new Date() };
      if (data.totalPages !== undefined) updateData.totalPages = data.totalPages;
      if (data.pillarPages !== undefined) updateData.pillarPages = data.pillarPages;
      if (data.clusterPages !== undefined) updateData.clusterPages = data.clusterPages;
      if (data.serviceAreaPages !== undefined) updateData.serviceAreaPages = data.serviceAreaPages;
      if (data.blogPages !== undefined) updateData.blogPages = data.blogPages;
      if (data.faqPages !== undefined) updateData.faqPages = data.faqPages;
      if (data.operatorConfig !== undefined) updateData.operatorConfig = data.operatorConfig;

      const [plan] = await ctx.db
        .update(contentPlans)
        .set(updateData)
        .where(eq(contentPlans.id, planId))
        .returning();
      return plan;
    }),

  approve: protectedProcedure
    .input(z.object({ planId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [plan] = await ctx.db
        .update(contentPlans)
        .set({
          status: "approved",
          approvedAt: new Date(),
          approvedBy: ctx.userId,
          updatedAt: new Date(),
        })
        .where(eq(contentPlans.id, input.planId))
        .returning();
      return plan;
    }),

  getById: protectedProcedure
    .input(z.object({ planId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [plan] = await ctx.db
        .select()
        .from(contentPlans)
        .where(eq(contentPlans.id, input.planId))
        .limit(1);
      return plan ?? null;
    }),

  // List all plans with client name
  list: protectedProcedure.query(async ({ ctx }) => {
    const plans = await ctx.db
      .select({
        id: contentPlans.id,
        siteId: contentPlans.siteId,
        onboardingId: contentPlans.onboardingId,
        status: contentPlans.status,
        totalPages: contentPlans.totalPages,
        pillarPages: contentPlans.pillarPages,
        clusterPages: contentPlans.clusterPages,
        serviceAreaPages: contentPlans.serviceAreaPages,
        blogPages: contentPlans.blogPages,
        faqPages: contentPlans.faqPages,
        clusters: contentPlans.clusters,
        createdAt: contentPlans.createdAt,
        updatedAt: contentPlans.updatedAt,
        approvedAt: contentPlans.approvedAt,
        clientName: clientOnboarding.clientName,
        businessName: clientOnboarding.businessName,
      })
      .from(contentPlans)
      .leftJoin(clientOnboarding, eq(contentPlans.onboardingId, clientOnboarding.id))
      .orderBy(desc(contentPlans.createdAt));
    return plans;
  }),

  // Generate content plan via AI
  generate: protectedProcedure
    .input(
      z.object({
        planId: z.string().uuid(),
        onboardingId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const result = await generateContentPlan({
        planId: input.planId,
        onboardingId: input.onboardingId,
      });

      // Send email notification (non-blocking)
      (async () => {
        try {
          const [onboarding] = await ctx.db
            .select({ clientName: clientOnboarding.clientName, businessName: clientOnboarding.businessName, createdBy: clientOnboarding.createdBy })
            .from(clientOnboarding)
            .where(eq(clientOnboarding.id, input.onboardingId))
            .limit(1);
          const [plan] = await ctx.db
            .select({ totalPages: contentPlans.totalPages })
            .from(contentPlans)
            .where(eq(contentPlans.id, input.planId))
            .limit(1);
          if (onboarding?.createdBy) {
            const [user] = await ctx.db
              .select({ email: users.email })
              .from(users)
              .where(eq(users.id, onboarding.createdBy))
              .limit(1);
            if (user?.email) {
              await sendPlanGeneratedEmail(
                user.email,
                onboarding.clientName || onboarding.businessName || "Cliente",
                plan?.totalPages || 0,
                input.planId,
              );
            }
          }
        } catch {}
      })();

      return result;
    }),

  // Discard plan and its pages
  discard: protectedProcedure
    .input(z.object({ planId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(contentPages)
        .where(eq(contentPages.planId, input.planId));

      await ctx.db
        .delete(keywordResearch)
        .where(eq(keywordResearch.planId, input.planId));

      await ctx.db
        .delete(contentPlans)
        .where(eq(contentPlans.id, input.planId));

      return { success: true };
    }),

  // Start content production for a batch of pages
  startProduction: protectedProcedure
    .input(
      z.object({
        planId: z.string().uuid(),
        pageIds: z.array(z.string().uuid()).optional(),
        batchSize: z.number().min(1).max(10).default(5),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const [plan] = await ctx.db
        .select()
        .from(contentPlans)
        .where(eq(contentPlans.id, input.planId))
        .limit(1);

      if (!plan) throw new TRPCError({ code: "NOT_FOUND", message: "Plano não encontrado" });

      if (plan.status !== "approved" && plan.status !== "in_production") {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Plano precisa estar aprovado" });
      }

      // Update plan status
      await ctx.db
        .update(contentPlans)
        .set({ status: "in_production", updatedAt: new Date() })
        .where(eq(contentPlans.id, input.planId));

      // Get page IDs to produce
      let pageIds: string[];
      if (input.pageIds?.length) {
        pageIds = input.pageIds;
      } else {
        const pendingPages = await ctx.db
          .select({ id: contentPages.id })
          .from(contentPages)
          .where(
            and(
              eq(contentPages.planId, input.planId),
              eq(contentPages.status, "pending"),
            )
          )
          .orderBy(contentPages.displayOrder)
          .limit(input.batchSize);
        pageIds = pendingPages.map((p) => p.id);
      }

      if (pageIds.length === 0) {
        return { produced: 0, failed: 0, results: [] };
      }

      const results = await producePages({
        planId: input.planId,
        siteId: plan.siteId,
        pageIds,
        onboardingId: plan.onboardingId!,
      });

      return {
        produced: results.filter((r) => r.status === "success").length,
        failed: results.filter((r) => r.status === "failed").length,
        results,
      };
    }),

  // Get production progress stats for a plan
  getProductionStats: protectedProcedure
    .input(z.object({ planId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const pages = await ctx.db
        .select({ status: contentPages.status })
        .from(contentPages)
        .where(eq(contentPages.planId, input.planId));

      const total = pages.length;
      const pending = pages.filter((p) => p.status === "pending").length;
      const generating = pages.filter((p) => p.status === "generating").length;
      const review = pages.filter((p) => p.status === "review").length;
      const approved = pages.filter((p) => p.status === "approved").length;
      const published = pages.filter((p) => p.status === "published").length;
      const publishing = pages.filter((p) => p.status === "publishing").length;
      const failed = pages.filter((p) => p.status === "failed").length;
      const done = review + approved + published;

      return {
        total,
        pending,
        generating,
        review,
        approved,
        published,
        publishing,
        failed,
        done,
        progress: total > 0 ? Math.round((done / total) * 100) : 0,
      };
    }),

  // Export approved pages as HTML (alternative to WP publishing)
  exportHtml: protectedProcedure
    .input(
      z.object({
        planId: z.string().uuid(),
        pageIds: z.array(z.string().uuid()).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      let pages;
      if (input.pageIds?.length) {
        const allPages = await ctx.db
          .select()
          .from(contentPages)
          .where(eq(contentPages.planId, input.planId));
        pages = allPages.filter((p) => input.pageIds!.includes(p.id));
      } else {
        pages = await ctx.db
          .select()
          .from(contentPages)
          .where(
            and(
              eq(contentPages.planId, input.planId),
              eq(contentPages.status, "approved"),
            )
          )
          .orderBy(contentPages.displayOrder);
      }

      const htmlPages = pages.map((page) => {
        const contentHtml = page.contentHtml || page.contentMarkdown || "";
        const faqs = Array.isArray(page.faqJson)
          ? (page.faqJson as { question: string; answer: string }[])
          : [];
        const faqHtmlStr = faqToHtml(faqs);
        const schemaItems = Array.isArray(page.schemaJson) ? page.schemaJson : page.schemaJson ? [page.schemaJson] : [];
        const schemaScripts = schemaItems
          .map((s) => `<script type="application/ld+json">${JSON.stringify(s, null, 2)}</script>`)
          .join("\n  ");

        return {
          filename: `${page.slug}.html`,
          title: page.title,
          html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.metaTitle || page.title}</title>
  <meta name="description" content="${(page.metaDescription || "").replace(/"/g, "&quot;")}">
  ${schemaScripts}
</head>
<body>
  <article>
    <h1>${page.title}</h1>
    ${contentHtml}
    ${faqHtmlStr}
  </article>
</body>
</html>`,
        };
      });

      return { pages: htmlPages, count: htmlPages.length };
    }),
});
