import { openrouter, MODELS } from "./ai";
import { getArticleImage } from "./images";

// ETAPA 1: Pesquisa SERP via Jina Reader
async function researchKeyword(keyword: string, siteUrl: string) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    // Usa Jina Reader para ler artigos sobre o tema
    const jinaUrl = `https://r.jina.ai/https://www.google.com/search?q=${encodeURIComponent(keyword)}`;
    const res = await fetch(jinaUrl, {
      headers: { Accept: "text/plain" },
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      console.log(`[pipeline] Jina retornou ${res.status}, usando fallback`);
      return `Keyword: ${keyword}. Sem dados de pesquisa disponíveis.`;
    }

    const text = await res.text();
    console.log(`[pipeline] Pesquisa OK (${text.length} chars)`);
    return text;
  } catch (e: any) {
    console.log(`[pipeline] Pesquisa falhou (${e.message}), usando fallback`);
    return `Keyword: ${keyword}. Sem dados de pesquisa disponíveis.`;
  }
}

// ETAPA 2: Gera outline com Gemini Flash (barato)
async function generateOutline(keyword: string, research: string) {
  const prompt = `
Você é um especialista em SEO. Crie um outline detalhado para um artigo sobre "${keyword}".

PESQUISA DOS CONCORRENTES:
${research.slice(0, 3000)}

REQUISITOS:
- H1 otimizado com a keyword (max 60 chars)
- 5-7 seções H2
- 2-3 subtópicos H3 por seção
- Seção de FAQ com 5 perguntas
- Meta description com CTA (max 160 chars)

Responda em JSON:
{
  "h1": "...",
  "meta_description": "...",
  "slug": "...",
  "sections": [
    { "h2": "...", "h3s": ["...", "..."], "key_points": ["..."] }
  ],
  "faq": [{ "question": "...", "answer": "..." }]
}`;

  const client = openrouter();
  const response = await client.chat.completions.create({
    model: MODELS.fast,
    messages: [{ role: "user", content: prompt }],
    max_tokens: 2000,
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0].message.content ?? "{}");
}

// ETAPA 3: Escreve cada seção com Claude Sonnet (qualidade)
async function writeSection(
  keyword: string,
  section: any,
  previousSections: string
) {
  const prompt = `
Escreva a seção "${section.h2}" para um artigo sobre "${keyword}".

CONTEXTO DAS SEÇÕES ANTERIORES:
${previousSections.slice(0, 1000)}

SUBTÓPICOS A COBRIR: ${section.h3s.join(", ")}
PONTOS-CHAVE: ${section.key_points.join(", ")}

REGRAS:
- Mínimo 300 palavras
- Use dados reais, não invente estatísticas
- Parágrafos curtos (2-3 frases)
- Inclua os subtópicos como H3
- Tom: profissional mas acessível
- Escreva em português BR

Retorne apenas o HTML da seção (h2, h3, p tags).`;

  const client = openrouter();
  const response = await client.chat.completions.create({
    model: MODELS.smart,
    messages: [{ role: "user", content: prompt }],
    max_tokens: 1500,
  });

  return response.choices[0].message.content ?? "";
}

// ETAPA 4: Gera FAQ em HTML
async function writeFAQ(faqs: any[]) {
  return `<h2>Perguntas Frequentes</h2>` +
    faqs.map(f => `
      <div>
        <h3>${f.question}</h3>
        <p>${f.answer}</p>
      </div>
    `).join("");
}

// PIPELINE PRINCIPAL
export async function generateArticle(
  keyword: string,
  siteUrl: string,
  tone: string = "profissional"
) {
  console.log(`[pipeline] Iniciando geração para: ${keyword}`);

  // Step 1: Pesquisa
  console.log(`[pipeline] Pesquisando SERP...`);
  const research = await researchKeyword(keyword, siteUrl);

  // Step 2: Outline
  console.log(`[pipeline] Gerando outline...`);
  const outline = await generateOutline(keyword, research);

  // Step 3: Escreve seções em paralelo (batches de 3)
  console.log(`[pipeline] Escrevendo ${outline.sections?.length ?? 0} seções...`);
  const sections = outline.sections ?? [];
  const sectionResults: string[] = [];

  // Processa em batches de 3 para não sobrecarregar
  for (let i = 0; i < sections.length; i += 3) {
    const batch = sections.slice(i, i + 3);
    const context = sectionResults.join(" ").replace(/<[^>]*>/g, " ").slice(0, 500);
    const results = await Promise.all(
      batch.map((section: any) => writeSection(keyword, section, context))
    );
    sectionResults.push(...results);
    console.log(`[pipeline] Batch ${Math.floor(i / 3) + 1} concluído`);
  }

  let fullContent = sectionResults.join("\n");

  // Step 4: FAQ
  const faqHtml = await writeFAQ(outline.faq ?? []);
  fullContent += faqHtml;

  // Step 5: Imagem
  console.log(`[pipeline] Buscando imagem...`);
  const image = await getArticleImage(keyword);

  // Step 6: Schema markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": outline.h1,
    "description": outline.meta_description,
    "image": image.url,
  };

  return {
    title: outline.h1,
    slug: outline.slug,
    content: fullContent,
    meta_title: outline.h1,
    meta_description: outline.meta_description,
    featured_image: image.url,
    image_source: image.source,
    schema_markup: JSON.stringify(schema),
    status: "draft",
  };
}
