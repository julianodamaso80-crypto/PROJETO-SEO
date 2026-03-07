import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { keywordId, siteId } = body;

  if (!keywordId || !siteId) {
    return NextResponse.json(
      { error: "keywordId and siteId are required" },
      { status: 400 }
    );
  }

  // TODO: Criar job no Trigger.dev para gerar artigo
  // TODO: Criar registro na tabela articles com status 'generating'
  // TODO: Criar registro na tabela generation_jobs

  return NextResponse.json({
    message: "Article generation queued",
    keywordId,
    siteId,
  });
}
