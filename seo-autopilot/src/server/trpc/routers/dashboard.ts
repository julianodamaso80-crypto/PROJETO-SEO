import { router, protectedProcedure } from "../init";
import {
  workspaces,
  sites,
  clientOnboarding,
  contentPlans,
  contentPages,
} from "@/lib/schema";
import { eq, sql, desc, and, inArray } from "drizzle-orm";

export const dashboardRouter = router({
  getStats: protectedProcedure.query(async ({ ctx }) => {
    // Find workspace for the user
    const [workspace] = await ctx.db
      .select()
      .from(workspaces)
      .where(eq(workspaces.ownerId, ctx.userId))
      .limit(1);

    if (!workspace) {
      return null;
    }

    // Find all sites for this workspace
    const userSites = await ctx.db
      .select({ id: sites.id })
      .from(sites)
      .where(eq(sites.workspaceId, workspace.id));

    const siteIds = userSites.map((s) => s.id);

    const empty = {
      totalClients: 0,
      totalPlans: 0,
      activePlans: 0,
      completedPlans: 0,
      totalPages: 0,
      pagesGenerated: 0,
      pagesApproved: 0,
      pagesPublished: 0,
      pagesPending: 0,
      pagesFailed: 0,
      totalCost: 0,
      recentActivity: [] as {
        id: string;
        title: string;
        type: string;
        status: string;
        updatedAt: Date;
        publishedAt: Date | null;
        wpUrl: string | null;
      }[],
      weeklyProduction: [] as { week: string; count: number }[],
    };

    if (!siteIds.length) return empty;

    // Count clients (onboardings linked to user's sites)
    const totalClientsResult = await ctx.db
      .select({ count: sql<number>`count(*)::int` })
      .from(clientOnboarding)
      .where(
        inArray(
          clientOnboarding.createdBy,
          ctx.db
            .select({ id: sql<number>`id` })
            .from(
              sql`(SELECT unnest(ARRAY[${sql.raw(ctx.userId)}])::int AS id) AS u`
            )
        )
      )
      .catch(() => [{ count: 0 }]);

    // Fallback: count by createdBy = userId (integer)
    const clientCount = await ctx.db
      .select({ count: sql<number>`count(*)::int` })
      .from(clientOnboarding)
      .where(eq(clientOnboarding.createdBy, Number(ctx.userId)));

    // Get all plans for user's sites
    const plans = siteIds.length
      ? await ctx.db
          .select()
          .from(contentPlans)
          .where(inArray(contentPlans.siteId, siteIds))
      : [];

    // Also get plans linked by onboardingIds from user's onboardings
    const userOnboardings = await ctx.db
      .select({ id: clientOnboarding.id })
      .from(clientOnboarding)
      .where(eq(clientOnboarding.createdBy, Number(ctx.userId)));

    const onboardingIds = userOnboardings.map((o) => o.id);

    const plansByOnboarding =
      onboardingIds.length > 0
        ? await ctx.db
            .select()
            .from(contentPlans)
            .where(inArray(contentPlans.onboardingId, onboardingIds))
        : [];

    // Merge plans, deduplicate by id
    const allPlansMap = new Map<string, (typeof plans)[0]>();
    for (const p of [...plans, ...plansByOnboarding]) {
      allPlansMap.set(p.id, p);
    }
    const allPlans = Array.from(allPlansMap.values());
    const planIds = allPlans.map((p) => p.id);

    // Page stats
    let pageStats = { total: 0, generated: 0, approved: 0, published: 0, pending: 0, failed: 0 };

    if (planIds.length > 0) {
      const [stats] = await ctx.db
        .select({
          total: sql<number>`count(*)::int`,
          generated: sql<number>`count(*) filter (where ${contentPages.status} in ('review', 'approved', 'publishing', 'published'))::int`,
          approved: sql<number>`count(*) filter (where ${contentPages.status} in ('approved', 'publishing', 'published'))::int`,
          published: sql<number>`count(*) filter (where ${contentPages.status} = 'published')::int`,
          pending: sql<number>`count(*) filter (where ${contentPages.status} = 'pending')::int`,
          failed: sql<number>`count(*) filter (where ${contentPages.status} = 'failed')::int`,
        })
        .from(contentPages)
        .where(inArray(contentPages.planId, planIds));

      if (stats) pageStats = stats;
    }

    // Total AI cost
    let totalCost = 0;
    if (planIds.length > 0) {
      const [costResult] = await ctx.db
        .select({
          totalCost: sql<number>`coalesce(sum(${contentPages.generationCost}::numeric), 0)::float`,
        })
        .from(contentPages)
        .where(inArray(contentPages.planId, planIds));

      totalCost = costResult?.totalCost ?? 0;
    }

    // Recent activity (last 10 updated pages)
    let recentActivity: typeof empty.recentActivity = [];
    if (planIds.length > 0) {
      recentActivity = await ctx.db
        .select({
          id: contentPages.id,
          title: contentPages.title,
          type: contentPages.type,
          status: contentPages.status,
          updatedAt: contentPages.updatedAt,
          publishedAt: contentPages.publishedAt,
          wpUrl: contentPages.wpUrl,
        })
        .from(contentPages)
        .where(inArray(contentPages.planId, planIds))
        .orderBy(desc(contentPages.updatedAt))
        .limit(10);
    }

    // Weekly production (last 4 weeks)
    let weeklyProduction: typeof empty.weeklyProduction = [];
    if (planIds.length > 0) {
      const weeks = await ctx.db
        .select({
          week: sql<string>`to_char(date_trunc('week', ${contentPages.createdAt}), 'YYYY-MM-DD')`,
          count: sql<number>`count(*)::int`,
        })
        .from(contentPages)
        .where(
          and(
            inArray(contentPages.planId, planIds),
            sql`${contentPages.createdAt} > now() - interval '4 weeks'`
          )
        )
        .groupBy(sql`date_trunc('week', ${contentPages.createdAt})`)
        .orderBy(sql`date_trunc('week', ${contentPages.createdAt})`);

      weeklyProduction = weeks;
    }

    return {
      totalClients: clientCount[0]?.count ?? 0,
      totalPlans: allPlans.length,
      activePlans: allPlans.filter((p) =>
        ["approved", "in_production"].includes(p.status)
      ).length,
      completedPlans: allPlans.filter((p) => p.status === "completed").length,
      totalPages: pageStats.total,
      pagesGenerated: pageStats.generated,
      pagesApproved: pageStats.approved,
      pagesPublished: pageStats.published,
      pagesPending: pageStats.pending,
      pagesFailed: pageStats.failed,
      totalCost,
      recentActivity,
      weeklyProduction,
    };
  }),
});
