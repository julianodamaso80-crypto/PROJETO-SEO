import { auth } from "@/lib/auth";
import { generateArticle } from "@/lib/pipeline";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { keyword, siteUrl, tone } = await req.json();

  if (!keyword) {
    return Response.json({ error: "keyword é obrigatório" }, { status: 400 });
  }

  try {
    const result = await generateArticle(keyword, siteUrl ?? "", tone ?? "profissional");
    return Response.json({ success: true, article: result });
  } catch (error: any) {
    console.error("[generate] Erro:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
