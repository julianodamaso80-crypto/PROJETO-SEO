import { z } from "zod";
import { router, protectedProcedure } from "../init";
import { wpConnections } from "@/lib/schema";
import { eq } from "drizzle-orm";
import {
  testConnection,
  checkSeoPlugin,
} from "@/server/services/wordpressService";

export const wpConnectionRouter = router({
  save: protectedProcedure
    .input(
      z.object({
        siteId: z.string().uuid(),
        wpUrl: z.string().url(),
        wpUser: z.string().min(1),
        wpAppPassword: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Upsert: check if connection exists for this site
      const [existing] = await ctx.db
        .select()
        .from(wpConnections)
        .where(eq(wpConnections.siteId, input.siteId))
        .limit(1);

      if (existing) {
        const [conn] = await ctx.db
          .update(wpConnections)
          .set({
            wpUrl: input.wpUrl,
            wpUser: input.wpUser,
            wpAppPassword: input.wpAppPassword,
            connectionStatus: "untested",
            updatedAt: new Date(),
          })
          .where(eq(wpConnections.siteId, input.siteId))
          .returning();
        return conn;
      }

      const [conn] = await ctx.db
        .insert(wpConnections)
        .values({
          siteId: input.siteId,
          wpUrl: input.wpUrl,
          wpUser: input.wpUser,
          wpAppPassword: input.wpAppPassword,
        })
        .returning();
      return conn;
    }),

  test: protectedProcedure
    .input(z.object({ siteId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [conn] = await ctx.db
        .select()
        .from(wpConnections)
        .where(eq(wpConnections.siteId, input.siteId))
        .limit(1);

      if (!conn) {
        return { success: false, error: "Nenhuma conexão WordPress configurada", seoPlugin: null };
      }

      // Test connection using the service
      const result = await testConnection(conn.wpUrl, conn.wpUser, conn.wpAppPassword);

      // Update status in DB
      await ctx.db
        .update(wpConnections)
        .set({
          connectionStatus: result.success ? "connected" : "failed",
          wpVersion: result.wpVersion || null,
          lastTestedAt: new Date(),
          updatedAt: new Date(),
        })
        .where(eq(wpConnections.id, conn.id));

      // Check for SEO plugins if connected
      let seoPlugin: { hasYoast: boolean; hasRankMath: boolean } | null = null;
      if (result.success) {
        seoPlugin = await checkSeoPlugin(conn.wpUrl, conn.wpUser, conn.wpAppPassword);
      }

      return { ...result, seoPlugin };
    }),

  getBySite: protectedProcedure
    .input(z.object({ siteId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [conn] = await ctx.db
        .select({
          id: wpConnections.id,
          siteId: wpConnections.siteId,
          wpUrl: wpConnections.wpUrl,
          wpUser: wpConnections.wpUser,
          wpVersion: wpConnections.wpVersion,
          connectionStatus: wpConnections.connectionStatus,
          lastTestedAt: wpConnections.lastTestedAt,
        })
        .from(wpConnections)
        .where(eq(wpConnections.siteId, input.siteId))
        .limit(1);
      return conn ?? null;
    }),

  // Get connection with credentials (internal use for publishing)
  getFullBySite: protectedProcedure
    .input(z.object({ siteId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [conn] = await ctx.db
        .select()
        .from(wpConnections)
        .where(eq(wpConnections.siteId, input.siteId))
        .limit(1);
      return conn ?? null;
    }),

  // List all WP connections (for settings page)
  listAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select({
        id: wpConnections.id,
        siteId: wpConnections.siteId,
        wpUrl: wpConnections.wpUrl,
        wpUser: wpConnections.wpUser,
        wpVersion: wpConnections.wpVersion,
        connectionStatus: wpConnections.connectionStatus,
        lastTestedAt: wpConnections.lastTestedAt,
        createdAt: wpConnections.createdAt,
      })
      .from(wpConnections)
      .orderBy(wpConnections.createdAt);
  }),
});
