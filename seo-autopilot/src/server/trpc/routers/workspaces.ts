import { z } from "zod";
import { router, protectedProcedure } from "../init";
import { workspaces, users } from "@/lib/schema";
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

  getMine: protectedProcedure.query(async ({ ctx }) => {
    const [workspace] = await ctx.db
      .select()
      .from(workspaces)
      .where(eq(workspaces.ownerId, ctx.userId))
      .limit(1);
    return workspace ?? null;
  }),

  updateNotificationPrefs: protectedProcedure
    .input(
      z.object({
        emailOnOnboardingComplete: z.boolean().optional(),
        emailOnPlanGenerated: z.boolean().optional(),
        emailOnProductionComplete: z.boolean().optional(),
        emailOnPublicationComplete: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const [workspace] = await ctx.db
        .select()
        .from(workspaces)
        .where(eq(workspaces.ownerId, ctx.userId))
        .limit(1);

      if (!workspace) return null;

      const currentPrefs = (workspace.notificationPrefs || {}) as Record<string, boolean>;
      const newPrefs = { ...currentPrefs, ...input };

      const [updated] = await ctx.db
        .update(workspaces)
        .set({ notificationPrefs: newPrefs, updatedAt: new Date() })
        .where(eq(workspaces.id, workspace.id))
        .returning();

      return updated;
    }),

  getProfile: protectedProcedure.query(async ({ ctx }) => {
    const [user] = await ctx.db
      .select({ id: users.id, name: users.name, email: users.email, whatsapp: users.whatsapp })
      .from(users)
      .where(eq(users.id, Number(ctx.userId)))
      .limit(1);
    return user ?? null;
  }),

  updateProfile: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).max(255).optional(),
        whatsapp: z.string().max(20).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const updateData: Record<string, unknown> = {};
      if (input.name !== undefined) updateData.name = input.name;
      if (input.whatsapp !== undefined) updateData.whatsapp = input.whatsapp;

      if (Object.keys(updateData).length === 0) return null;

      const [user] = await ctx.db
        .update(users)
        .set(updateData)
        .where(eq(users.id, Number(ctx.userId)))
        .returning({ id: users.id, name: users.name, email: users.email });
      return user;
    }),

  updateWorkspaceName: protectedProcedure
    .input(z.object({ name: z.string().min(1).max(100) }))
    .mutation(async ({ ctx, input }) => {
      const [updated] = await ctx.db
        .update(workspaces)
        .set({ name: input.name, updatedAt: new Date() })
        .where(eq(workspaces.ownerId, ctx.userId))
        .returning();
      return updated;
    }),
});
