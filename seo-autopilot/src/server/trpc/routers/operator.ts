import { z } from "zod";
import { router, protectedProcedure } from "../init";
import { operatorNotes, clientOnboarding } from "@/lib/schema";
import { eq } from "drizzle-orm";

export const operatorRouter = router({
  addNote: protectedProcedure
    .input(
      z.object({
        onboardingId: z.number(),
        fieldPath: z.string().optional(),
        noteType: z.enum(["info", "correction", "addition", "enrichment"]).default("info"),
        content: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const [note] = await ctx.db
        .insert(operatorNotes)
        .values({
          onboardingId: input.onboardingId,
          fieldPath: input.fieldPath,
          noteType: input.noteType,
          content: input.content,
        })
        .returning();
      return note;
    }),

  listNotes: protectedProcedure
    .input(z.object({ onboardingId: z.number() }))
    .query(async ({ ctx, input }) => {
      return ctx.db
        .select()
        .from(operatorNotes)
        .where(eq(operatorNotes.onboardingId, input.onboardingId));
    }),

  updateNote: protectedProcedure
    .input(
      z.object({
        noteId: z.string().uuid(),
        content: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const [note] = await ctx.db
        .update(operatorNotes)
        .set({ content: input.content, updatedAt: new Date() })
        .where(eq(operatorNotes.id, input.noteId))
        .returning();
      return note;
    }),

  deleteNote: protectedProcedure
    .input(z.object({ noteId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(operatorNotes)
        .where(eq(operatorNotes.id, input.noteId));
      return { success: true };
    }),

  getOnboardingById: protectedProcedure
    .input(z.object({ onboardingId: z.number() }))
    .query(async ({ ctx, input }) => {
      const [entry] = await ctx.db
        .select()
        .from(clientOnboarding)
        .where(eq(clientOnboarding.id, input.onboardingId))
        .limit(1);
      return entry ?? null;
    }),
});
