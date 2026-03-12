import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { operatorNotes } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const notes = await db
    .select()
    .from(operatorNotes)
    .where(eq(operatorNotes.onboardingId, parseInt(id, 10)));

  return NextResponse.json(notes);
}

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

  const [note] = await db
    .insert(operatorNotes)
    .values({
      onboardingId: parseInt(id, 10),
      fieldPath: body.fieldPath,
      noteType: body.noteType || "info",
      content: body.content,
    })
    .returning();

  return NextResponse.json(note);
}
