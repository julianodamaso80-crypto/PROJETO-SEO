import { generateJSON } from "@/lib/ai";
import { MODELS } from "@/lib/ai";

export interface KeywordSuggestion {
  keyword: string;
  searchVolume: number | null;
  difficulty: number | null;
  cpc: number | null;
  intent: "informational" | "navigational" | "commercial" | "transactional";
  source: "ai_suggested" | "dataforseo";
  isEstimated: boolean;
  category?: string;
  suggestedPageType?: string;
  awarenessLevel?: "unaware" | "problem_aware" | "solution_aware" | "product_aware" | "most_aware";
}

interface KeywordInput {
  niche: string;
  subNiche: string;
  services: string[];
  locations: string[];
  competitors: string[];
  language: string;
  country: string;
}

interface AIKeywordResponse {
  keywords: {
    keyword: string;
    estimatedVolume: number;
    estimatedDifficulty: number;
    intent: "informational" | "navigational" | "commercial" | "transactional";
    awarenessLevel: "unaware" | "problem_aware" | "solution_aware" | "product_aware" | "most_aware";
    category: string;
    suggestedPageType: string;
  }[];
}

interface DataForSEOResult {
  keyword: string;
  searchVolume: number;
  competition: number;
  cpc: number;
}

// ─── Main function ──────────────────────────────────────────────

export async function researchKeywords(input: KeywordInput): Promise<KeywordSuggestion[]> {
  // 1. Always get AI suggestions
  const aiKeywords = await getAIKeywords(input);

  // 2. If DataForSEO is configured, enrich with real data
  const hasDataForSEO = !!(process.env.DATAFORSEO_LOGIN && process.env.DATAFORSEO_PASSWORD);

  if (hasDataForSEO) {
    const kwList = aiKeywords.map((k) => k.keyword);
    const realData = await getDataForSEOVolumes(kwList, input.country, input.language);

    if (realData.length > 0) {
      const dataMap = new Map(realData.map((d) => [d.keyword.toLowerCase(), d]));

      return aiKeywords.map((kw) => {
        const real = dataMap.get(kw.keyword.toLowerCase());
        if (real) {
          return {
            ...kw,
            searchVolume: real.searchVolume,
            difficulty: Math.round(real.competition * 100),
            cpc: real.cpc,
            source: "dataforseo" as const,
            isEstimated: false,
          };
        }
        return kw;
      });
    }
  }

  return aiKeywords;
}

// ─── AI Keywords ────────────────────────────────────────────────

async function getAIKeywords(input: KeywordInput): Promise<KeywordSuggestion[]> {
  const prompt = `Você é um especialista em SEO para o mercado brasileiro.

DADOS DO NEGÓCIO:
- Nicho: ${input.niche}
- Especialidade: ${input.subNiche}
- Serviços principais: ${input.services.join(", ")}
- Localidades: ${input.locations.join(", ")}
- Concorrentes: ${input.competitors.join(", ")}

TAREFA:
Gere uma lista de 80-120 keywords estratégicas para este negócio, organizadas por intenção de busca.

REGRAS:
1. Inclua keywords de cauda longa (3-6 palavras)
2. Inclua variações por localidade para cada serviço principal
3. Inclua perguntas que o público-alvo faria (formato "como...", "quanto custa...", "qual...")
4. Priorize keywords com intenção comercial e transacional
5. Inclua keywords informacionais para conteúdo de blog
6. Para cada keyword, estime: volume de busca mensal, dificuldade (0-100), e intenção

CLASSIFICAÇÃO POR NÍVEL DE CONSCIÊNCIA DO PÚBLICO:
Para cada keyword, além do intent, classifique o "awarenessLevel":
- "unaware": pessoa não sabe que tem o problema (ex: "dores nas costas ao acordar" — não sabe que precisa de quiropraxia)
- "problem_aware": sabe que tem o problema, não conhece soluções (ex: "o que fazer quando tem dor nas costas")
- "solution_aware": sabe que soluções existem, não escolheu uma (ex: "quiropraxia vs fisioterapia")
- "product_aware": conhece o tipo de solução, precisa de prova (ex: "quiropraxia funciona mesmo")
- "most_aware": pronto para agir, precisa da oferta (ex: "quiropraxia zona sul SP agendar")

Isso afeta COMO o conteúdo será escrito:
- unaware/problem_aware → conteúdo educacional longo, storytelling, dados
- solution_aware → conteúdo comparativo, diferenciação
- product_aware → cases, depoimentos, prova social
- most_aware → landing page com CTA direto, benefícios, garantias

FORMATO DE RESPOSTA (JSON puro, sem markdown):
{
  "keywords": [
    {
      "keyword": "advogado criminal curitiba",
      "estimatedVolume": 720,
      "estimatedDifficulty": 45,
      "intent": "commercial",
      "awarenessLevel": "most_aware",
      "category": "service_location",
      "suggestedPageType": "service_area"
    }
  ]
}

Gere APENAS o JSON, sem explicações.`;

  const result = await generateJSON<AIKeywordResponse>(prompt, MODELS.fast, 8000);

  return result.keywords.map((kw) => ({
    keyword: kw.keyword,
    searchVolume: kw.estimatedVolume,
    difficulty: kw.estimatedDifficulty,
    cpc: null,
    intent: kw.intent,
    source: "ai_suggested" as const,
    isEstimated: true,
    category: kw.category,
    suggestedPageType: kw.suggestedPageType,
    awarenessLevel: kw.awarenessLevel,
  }));
}

// ─── DataForSEO (optional) ─────────────────────────────────────

async function getDataForSEOVolumes(
  keywords: string[],
  country: string = "BR",
  language: string = "pt-BR",
): Promise<DataForSEOResult[]> {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;

  if (!login || !password) return [];

  const locationName = country === "BR" ? "Brazil" : country;
  const languageName = language.startsWith("pt") ? "Portuguese" : "English";

  try {
    const response = await fetch(
      "https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${login}:${password}`).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            keywords: keywords.slice(0, 1000), // API limit
            location_name: locationName,
            language_name: languageName,
          },
        ]),
      },
    );

    if (!response.ok) return [];

    const data = await response.json();
    const results: DataForSEOResult[] = [];

    for (const task of data.tasks ?? []) {
      for (const item of task.result ?? []) {
        results.push({
          keyword: item.keyword,
          searchVolume: item.search_volume ?? 0,
          competition: item.competition ?? 0,
          cpc: item.cpc ?? 0,
        });
      }
    }

    return results;
  } catch {
    console.error("[DataForSEO] Failed to fetch keyword volumes");
    return [];
  }
}
