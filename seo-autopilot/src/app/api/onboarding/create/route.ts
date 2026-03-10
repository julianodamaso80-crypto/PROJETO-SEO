import { NextResponse } from "next/server";
import crypto from "crypto";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { clientOnboarding } from "@/lib/schema";

export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = crypto.randomBytes(32).toString("hex");
  const userId = parseInt(session.user.id, 10);

  await db.insert(clientOnboarding).values({
    token,
    createdBy: userId,
  });

  const url = `https://seointeligente.site/onboarding/${token}`;

  return NextResponse.json({ token, url });
}
