import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { clientOnboarding } from "@/lib/schema";
import { eq, desc } from "drizzle-orm";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = parseInt(session.user.id, 10);

  const entries = await db
    .select()
    .from(clientOnboarding)
    .where(eq(clientOnboarding.createdBy, userId))
    .orderBy(desc(clientOnboarding.createdAt));

  return NextResponse.json(entries);
}
