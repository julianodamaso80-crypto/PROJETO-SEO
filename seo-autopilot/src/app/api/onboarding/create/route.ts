import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { clientOnboarding } from "@/lib/schema";
import { eq } from "drizzle-orm";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const clientName = body.clientName?.trim();

    if (!clientName) {
      return NextResponse.json({ error: "Nome do cliente é obrigatório" }, { status: 400 });
    }

    let slug = slugify(clientName);

    // Check if slug already exists, append number if needed
    const existing = await db
      .select({ token: clientOnboarding.token })
      .from(clientOnboarding)
      .where(eq(clientOnboarding.token, slug))
      .limit(1);

    if (existing.length > 0) {
      slug = `${slug}-${Date.now().toString(36)}`;
    }

    const userId = parseInt(session.user.id, 10);

    await db.insert(clientOnboarding).values({
      token: slug,
      createdBy: userId,
      clientName,
    });

    const url = `https://seointeligente.site/onboarding/${slug}`;

    return NextResponse.json({ token: slug, url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erro desconhecido";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
