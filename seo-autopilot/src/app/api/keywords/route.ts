import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // TODO: Buscar keywords do workspace do usuario
  const keywords: unknown[] = [];

  return NextResponse.json({ keywords });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { seedKeyword, siteId } = body;

  if (!seedKeyword || !siteId) {
    return NextResponse.json(
      { error: "seedKeyword and siteId are required" },
      { status: 400 }
    );
  }

  // TODO: Chamar DataForSEO para descobrir keywords relacionadas
  // TODO: Salvar keywords na tabela keywords

  return NextResponse.json({
    message: "Keyword discovery started",
    seedKeyword,
  });
}
