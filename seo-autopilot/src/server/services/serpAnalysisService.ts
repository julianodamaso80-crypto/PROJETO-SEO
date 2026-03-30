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
  hookAnalysis?: {
    dominantHookType: string;
    hookOpportunity: string;
    suggestedHookTypes: string[];
  };
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
  "competitiveInsights": "Insights sobre o que fazer para se diferenciar",
  "hookAnalysis": {
    "dominantHookType": "generic|result|question|contrarian|curiosity|pain|number",
    "hookOpportunity": "Análise de oportunidade de diferenciação via hooks",
    "suggestedHookTypes": ["question", "pain"]
  }
}

ANÁLISE DE HOOKS DOS CONCORRENTES:
Para cada resultado do top 5, classifique o TIPO de título/hook usado:
- "generic": título genérico sem gancho (ex: "Advogado Criminal | Guia Completo")
- "result": promete resultado específico (ex: "Como Reduzir Sua Pena em Até 50%")
- "question": faz uma pergunta (ex: "Preso em Flagrante? Saiba O Que Fazer")
- "contrarian": desafia uma crença (ex: "Por Que 90% das Defesas Criminais Falham")
- "curiosity": abre um loop de curiosidade (ex: "O Artigo do Código Penal Que Ninguém Usa")
- "pain": aponta uma dor (ex: "Se Você Foi Acusado Injustamente, Leia Isto")
- "number": usa número específico (ex: "7 Direitos Que Todo Réu Tem e Desconhece")

No hookAnalysis, identifique o tipo dominante e sugira hooks diferenciadores.`;

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
  "competitiveInsights": "Insight em 2-3 frases sobre o que fazer para se diferenciar",
  "hookAnalysis": {
    "dominantHookType": "generic|result|question|contrarian|curiosity|pain|number",
    "hookOpportunity": "Análise de oportunidade de diferenciação via hooks",
    "suggestedHookTypes": ["question", "pain"]
  }
}

ANÁLISE DE HOOKS:
Classifique o tipo de título/hook que os concorrentes provavelmente usam:
- "generic": sem gancho / "result": promete resultado / "question": pergunta / "contrarian": desafia crença / "curiosity": loop de curiosidade / "pain": aponta dor / "number": número específico
No hookAnalysis, identifique o dominante e sugira 2 tipos de hook diferenciadores.

Gere APENAS o JSON.`;

  return generateJSON<SerpAnalysis>(prompt, MODELS.fast, 4000);
}
