import { z } from "zod";
import { router, protectedProcedure } from "../init";
import { sites } from "@/lib/schema";
import { eq } from "drizzle-orm";

export const sitesRouter = router({
  list: protectedProcedure
    .input(z.object({ workspaceId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      return ctx.db
        .select()
        .from(sites)
        .where(eq(sites.workspaceId, input.workspaceId));
    }),

  create: protectedProcedure
    .input(
      z.object({
        workspaceId: z.string().uuid(),
        name: z.string().min(1),
        url: z.string().url(),
        platform: z.enum(["wordpress", "custom"]).default("wordpress"),
        language: z.string().default("pt-BR"),
        tone: z.string().default("conversational"),
        niche: z.string().optional(),
        targetAudience: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const [site] = await ctx.db.insert(sites).values(input).returning();
      return site;
    }),
});
