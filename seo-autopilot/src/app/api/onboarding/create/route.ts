import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { clientOnboarding } from "@/lib/schema";

export async function POST() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized", debug: { session: !!session, user: !!session?.user } },
        { status: 401 }
      );
    }

    const token = randomBytes(32).toString("hex");
    const userId = parseInt(session.user.id, 10);

    await db.insert(clientOnboarding).values({
      token,
      createdBy: userId,
    });

    const url = `https://seointeligente.site/onboarding/${token}`;

    return NextResponse.json({ token, url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
