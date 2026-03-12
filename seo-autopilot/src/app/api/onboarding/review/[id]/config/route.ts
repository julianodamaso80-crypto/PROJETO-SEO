import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { contentPlans } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const onboardingId = parseInt(id, 10);

  // Check if plan already exists for this onboarding
  const [existing] = await db
    .select()
    .from(contentPlans)
    .where(eq(contentPlans.onboardingId, onboardingId))
    .limit(1);

  const planData = {
    onboardingId,
    status: "draft" as const,
    totalPages: body.totalPages || 0,
    pillarPages: body.pillarPages || 0,
    clusterPages: body.clusterPages || 0,
    serviceAreaPages: body.serviceAreaPages || 0,
    blogPages: body.blogPages || 0,
    faqPages: body.faqPages || 0,
    operatorConfig: {
      targetCities: body.targetCities || "",
      priorityClusters: body.priorityClusters || "",
      publishSchedule: body.publishSchedule || "10/semana",
    },
  };

  if (existing) {
    const [plan] = await db
      .update(contentPlans)
      .set({ ...planData, updatedAt: new Date() })
      .where(eq(contentPlans.id, existing.id))
      .returning();
    return NextResponse.json(plan);
  }

  const [plan] = await db
    .insert(contentPlans)
    .values(planData)
    .returning();

  return NextResponse.json(plan);
}
