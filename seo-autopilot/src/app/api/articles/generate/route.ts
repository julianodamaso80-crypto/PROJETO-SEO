import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { generateText, MODELS } from "@/lib/ai";

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
  // Exemplo de uso:
  // const content = await generateText("Escreva um artigo sobre...", MODELS.smart);

  return NextResponse.json({
    message: "Article generation queued",
    keywordId,
    siteId,
  });
}
