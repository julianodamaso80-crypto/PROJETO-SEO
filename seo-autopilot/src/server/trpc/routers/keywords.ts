import { z } from "zod";
import { router, protectedProcedure } from "../init";
import { keywords } from "@/lib/schema";
import { eq, desc } from "drizzle-orm";

export const keywordsRouter = router({
  list: protectedProcedure
    .input(z.object({ workspaceId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      return ctx.db
        .select()
        .from(keywords)
        .where(eq(keywords.workspaceId, input.workspaceId))
        .orderBy(desc(keywords.createdAt));
    }),

  toggleSaved: protectedProcedure
    .input(z.object({ id: z.string().uuid(), saved: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      const [keyword] = await ctx.db
        .update(keywords)
        .set({ saved: input.saved })
        .where(eq(keywords.id, input.id))
        .returning();
      return keyword;
    }),
});
