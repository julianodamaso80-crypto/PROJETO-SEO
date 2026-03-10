import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { clientOnboarding } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const [entry] = await db
    .select()
    .from(clientOnboarding)
    .where(eq(clientOnboarding.token, token))
    .limit(1);

  if (!entry) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(entry);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const body = await req.json();

  const [entry] = await db
    .select()
    .from(clientOnboarding)
    .where(eq(clientOnboarding.token, token))
    .limit(1);

  if (!entry) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (entry.status === "completed") {
    return NextResponse.json({ error: "Already completed" }, { status: 400 });
  }

  await db
    .update(clientOnboarding)
    .set({
      clientName: body.clientName,
      clientEmail: body.clientEmail,
      businessName: body.businessName,
      businessDescription: body.businessDescription,
      mainProduct: body.mainProduct,
      targetAudience: body.targetAudience,
      location: body.location,
      hasSite: body.hasSite,
      siteUrl: body.siteUrl,
      competitors: body.competitors,
      competitorUrls: body.competitorUrls,
      keywords: body.keywords,
      contentGoal: body.contentGoal,
      tone: body.tone,
      differentials: body.differentials,
      monthlyBudget: body.monthlyBudget,
      extraInfo: body.extraInfo,
      status: "completed",
      completedAt: new Date(),
    })
    .where(eq(clientOnboarding.token, token));

  return NextResponse.json({ success: true });
}
