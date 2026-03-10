import { openrouter, MODELS } from "@/lib/ai";

export const maxDuration = 120;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const step = url.searchParams.get("step") ?? "ai";

  try {
    // Teste 1: só a API de IA
    if (step === "ai") {
      console.log("[test] Testando OpenRouter...");
      const start = Date.now();
      const client = openrouter();
      const response = await client.chat.completions.create({
        model: MODELS.fast,
        messages: [{ role: "user", content: "Diga 'ok' em uma palavra" }],
        max_tokens: 10,
      });
      const elapsed = Date.now() - start;
      return Response.json({
        success: true,
        step: "ai",
        elapsed_ms: elapsed,
        response: response.choices[0].message.content,
        model: MODELS.fast,
      });
    }

    // Teste 2: pipeline completo
    if (step === "full") {
      const { generateArticle } = await import("@/lib/pipeline");
      const result = await generateArticle(
        "marketing digital para restaurantes",
        "https://meusite.com.br"
      );
      return Response.json({
        success: true,
        title: result.title,
        meta: result.meta_description,
        image: result.featured_image,
        image_source: result.image_source,
        content_length: result.content.length,
        content_preview: result.content.slice(0, 500),
      });
    }

    return Response.json({ error: "Use ?step=ai ou ?step=full" });
  } catch (error: any) {
    console.error("[test-generate] ERRO:", error);
    return Response.json(
      {
        success: false,
        error: error.message ?? "Erro desconhecido",
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
