import { z } from "zod";
import { router, protectedProcedure } from "../init";
import { workspaces } from "@/lib/schema";
import { eq } from "drizzle-orm";

export const workspacesRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(workspaces)
      .where(eq(workspaces.ownerId, ctx.userId));
  }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [workspace] = await ctx.db
        .select()
        .from(workspaces)
        .where(eq(workspaces.id, input.id))
        .limit(1);
      return workspace ?? null;
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1).max(100) }))
    .mutation(async ({ ctx, input }) => {
      const [workspace] = await ctx.db
        .insert(workspaces)
        .values({
          name: input.name,
          ownerId: ctx.userId,
        })
        .returning();
      return workspace;
    }),
});
