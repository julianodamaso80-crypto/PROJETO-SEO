import { z } from "zod";
import { router, protectedProcedure } from "../init";
import { articles } from "@/lib/schema";
import { eq, desc } from "drizzle-orm";

export const articlesRouter = router({
  list: protectedProcedure
    .input(z.object({ workspaceId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      return ctx.db
        .select()
        .from(articles)
        .where(eq(articles.workspaceId, input.workspaceId))
        .orderBy(desc(articles.createdAt));
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [article] = await ctx.db
        .select()
        .from(articles)
        .where(eq(articles.id, input.id))
        .limit(1);
      return article ?? null;
    }),
});
