import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, protectedProcedure } from "../init";
import { workspaces } from "@/lib/schema";
import { eq } from "drizzle-orm";
import {
  createCheckoutSession,
  createPortalSession,
  isStripeConfigured,
  PLANS,
} from "@/server/services/stripeService";

export const billingRouter = router({
  getPlans: protectedProcedure.query(() => {
    return {
      plans: PLANS,
      stripeConfigured: isStripeConfigured(),
    };
  }),

  getCurrentPlan: protectedProcedure.query(async ({ ctx }) => {
    const [workspace] = await ctx.db
      .select()
      .from(workspaces)
      .where(eq(workspaces.ownerId, ctx.userId))
      .limit(1);

    return {
      plan: workspace?.plan || "free",
      status: workspace?.subscriptionStatus || "none",
      stripeConfigured: isStripeConfigured(),
    };
  }),

  createCheckout: protectedProcedure
    .input(z.object({ planKey: z.string() }))
    .mutation(async ({ ctx, input }) => {
      if (!isStripeConfigured()) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Stripe não está configurado",
        });
      }

      // Get user email from the users table
      const { users } = await import("@/lib/schema");
      const [user] = await ctx.db
        .select({ email: users.email })
        .from(users)
        .where(eq(users.id, Number(ctx.userId)))
        .limit(1);

      if (!user) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Usuário não encontrado" });
      }

      const baseUrl = process.env.NEXTAUTH_URL || "https://seointeligente.site";

      const url = await createCheckoutSession({
        userId: ctx.userId,
        email: user.email,
        planKey: input.planKey,
        successUrl: `${baseUrl}/billing?success=true`,
        cancelUrl: `${baseUrl}/billing?canceled=true`,
      });

      return { url };
    }),

  createPortal: protectedProcedure.mutation(async ({ ctx }) => {
    if (!isStripeConfigured()) {
      throw new TRPCError({
        code: "PRECONDITION_FAILED",
        message: "Stripe não está configurado",
      });
    }

    const [workspace] = await ctx.db
      .select()
      .from(workspaces)
      .where(eq(workspaces.ownerId, ctx.userId))
      .limit(1);

    if (!workspace?.stripeCustomerId) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Sem assinatura ativa",
      });
    }

    const baseUrl = process.env.NEXTAUTH_URL || "https://seointeligente.site";

    const url = await createPortalSession(
      workspace.stripeCustomerId,
      `${baseUrl}/billing`
    );

    return { url };
  }),
});
