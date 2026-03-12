import { generateJSON, MODELS } from "@/lib/ai";

export interface SerpAnalysis {
  topResults: {
    position: number;
    title: string;
    estimatedWordCount: number;
    headings: string[];
    hasSchema: boolean;
    hasFaq: boolean;
  }[];
  contentGaps: string[];
  recommendedWordCount: number;
  recommendedHeadings: string[];
  recommendedSchema: string[];
  competitiveInsights: string;
}

export async function analyzeSERP(input: {
  keyword: string;
  niche: string;
  pageType: string;
  existingPages?: string[];
}): Promise<SerpAnalysis> {
  const hasJina = !!process.env.JINA_API_KEY;

  if (hasJina) {
    try {
      return await analyzeWithJina(input);
    } catch {
      // Fallback to AI
    }
  }

  return analyzeWithAI(input);
}

// ─── Jina Reader SERP (if key available) ────────────────────────

async function analyzeWithJina(input: {
  keyword: string;
  niche: string;
  pageType: string;
  existingPages?: string[];
}): Promise<SerpAnalysis> {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(input.keyword)}&hl=pt-BR&gl=br`;
  const response = await fetch(`https://r.jina.ai/${searchUrl}`, {
    headers: {
      Authorization: `Bearer ${process.env.JINA_API_KEY}`,
      Accept: "text/plain",
    },
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) throw new Error("Jina fetch failed");

  const serpContent = await response.text();

  // Use AI to parse the SERP markdown into structured data
  const prompt = `Analise esta SERP (página de resultados do Google) para a keyword "${input.keyword}" no nicho "${input.niche}".

SERP CONTENT:
${serpContent.slice(0, 4000)}

FORMATO (JSON puro):
{
  "topResults": [
    {
      "position": 1,
      "title": "Título do resultado",
      "estimatedWordCount": 2500,
      "headings": ["H2 identificado"],
      "hasSchema": true,
      "hasFaq": true
    }
  ],
  "contentGaps": ["Gap que ninguém cobre"],
  "recommendedWordCount": 1500,
  "recommendedHeadings": ["H2 recomendado"],
  "recommendedSchema": ["Article", "FAQPage"],
  "competitiveInsights": "Insights sobre o que fazer para se diferenciar"
}`;

  return generateJSON<SerpAnalysis>(prompt, MODELS.fast, 4000);
}

// ─── AI-based SERP Analysis (fallback) ──────────────────────────

async function analyzeWithAI(input: {
  keyword: string;
  niche: string;
  pageType: string;
  existingPages?: string[];
}): Promise<SerpAnalysis> {
  const prompt = `Você é um analista de SEO expert no mercado brasileiro.

KEYWORD: "${input.keyword}"
NICHO: ${input.niche}
TIPO DE PÁGINA: ${input.pageType}

Analise esta keyword e me diga:
1. Que tipo de conteúdo provavelmente rankeia no top 5 do Google Brasil
2. Qual o word count ideal para competir
3. Quais headings (H2) os concorrentes provavelmente usam
4. Quais GAPS de conteúdo existem (o que ninguém cobre bem)
5. Quais schema markups são esperados
6. Insights competitivos específicos

${input.existingPages?.length ? `Páginas já criadas (evitar repetição): ${input.existingPages.join(", ")}` : ""}

FORMATO (JSON puro):
{
  "topResults": [
    {
      "position": 1,
      "title": "Título provável do resultado #1",
      "estimatedWordCount": 2500,
      "headings": ["H2 provável 1", "H2 provável 2"],
      "hasSchema": true,
      "hasFaq": true
    }
  ],
  "contentGaps": ["Gap 1 que ninguém cobre", "Gap 2"],
  "recommendedWordCount": 1500,
  "recommendedHeadings": ["H2 recomendado 1", "H2 recomendado 2", "H2 recomendado 3"],
  "recommendedSchema": ["Article", "FAQPage"],
  "competitiveInsights": "Insight em 2-3 frases sobre o que fazer para se diferenciar"
}

Gere APENAS o JSON.`;

  return generateJSON<SerpAnalysis>(prompt, MODELS.fast, 4000);
}
