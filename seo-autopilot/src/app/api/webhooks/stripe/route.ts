import { NextRequest, NextResponse } from "next/server";
import { handleWebhook } from "@/server/services/stripeService";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  try {
    await handleWebhook(body, signature);
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[Stripe webhook error]", error);
    const message = error instanceof Error ? error.message : "Webhook error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
