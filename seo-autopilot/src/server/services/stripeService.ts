import Stripe from "stripe";
import { db } from "@/lib/db";
import { workspaces } from "@/lib/schema";
import { eq } from "drizzle-orm";

function getStripe(): Stripe | null {
  if (!process.env.STRIPE_SECRET_KEY) return null;
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-02-25.clover",
  });
}

export const PLANS = {
  starter: {
    name: "Starter",
    price: 39900,
    priceId: process.env.STRIPE_PRICE_STARTER || "",
    clients: 5,
    pagesPerMonth: 500,
    features: [
      "5 clientes",
      "500 páginas/mês",
      "Publicação WordPress",
      "Suporte por email",
    ],
  },
  professional: {
    name: "Professional",
    price: 59900,
    priceId: process.env.STRIPE_PRICE_PROFESSIONAL || "",
    clients: 10,
    pagesPerMonth: 2000,
    features: [
      "10 clientes",
      "2.000 páginas/mês",
      "Publicação WordPress",
      "Suporte prioritário",
      "DataForSEO",
    ],
    popular: true,
  },
  enterprise: {
    name: "Enterprise",
    price: 79900,
    priceId: process.env.STRIPE_PRICE_ENTERPRISE || "",
    clients: -1,
    pagesPerMonth: -1,
    features: [
      "Clientes ilimitados",
      "Páginas ilimitadas",
      "Publicação WordPress",
      "Suporte dedicado",
      "DataForSEO",
      "Acesso API",
    ],
  },
} as const;

export type PlanKey = keyof typeof PLANS;

export function isStripeConfigured(): boolean {
  return !!process.env.STRIPE_SECRET_KEY;
}

export async function createCheckoutSession(input: {
  userId: string;
  email: string;
  planKey: string;
  successUrl: string;
  cancelUrl: string;
}): Promise<string> {
  const stripe = getStripe();
  if (!stripe) throw new Error("Stripe não configurado");

  const plan = PLANS[input.planKey as PlanKey];
  if (!plan) throw new Error("Plano inválido");
  if (!plan.priceId) throw new Error("Price ID não configurado para este plano");

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: input.email,
    line_items: [
      {
        price: plan.priceId,
        quantity: 1,
      },
    ],
    success_url: input.successUrl,
    cancel_url: input.cancelUrl,
    metadata: {
      userId: input.userId,
      planKey: input.planKey,
    },
  });

  return session.url!;
}

export async function createPortalSession(
  customerId: string,
  returnUrl: string
): Promise<string> {
  const stripe = getStripe();
  if (!stripe) throw new Error("Stripe não configurado");

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });
  return session.url;
}

export async function handleWebhook(
  body: string,
  signature: string
): Promise<void> {
  const stripe = getStripe();
  if (!stripe) throw new Error("Stripe não configurado");

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) throw new Error("Webhook secret não configurado");

  const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const planKey = session.metadata?.planKey;

      if (userId && planKey) {
        await db
          .update(workspaces)
          .set({
            plan: planKey,
            stripeCustomerId: session.customer as string,
            stripeSubscriptionId: session.subscription as string,
            subscriptionStatus: "active",
            updatedAt: new Date(),
          })
          .where(eq(workspaces.ownerId, userId));
      }
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      await db
        .update(workspaces)
        .set({
          subscriptionStatus: subscription.status,
          updatedAt: new Date(),
        })
        .where(eq(workspaces.stripeSubscriptionId, subscription.id));
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      await db
        .update(workspaces)
        .set({
          plan: "free",
          subscriptionStatus: "canceled",
          updatedAt: new Date(),
        })
        .where(eq(workspaces.stripeSubscriptionId, subscription.id));
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      await db
        .update(workspaces)
        .set({
          subscriptionStatus: "past_due",
          updatedAt: new Date(),
        })
        .where(eq(workspaces.stripeCustomerId, invoice.customer as string));
      break;
    }

    default:
      console.log(`[Stripe] Unhandled event type: ${event.type}`);
  }
}
