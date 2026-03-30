import { db } from "@/lib/db";
import { generateJSON, generateText, MODELS } from "@/lib/ai";
import { contentPages, clientOnboarding, operatorNotes } from "@/lib/schema";
import { eq, and } from "drizzle-orm";
import { analyzeSERP, type SerpAnalysis } from "./serpAnalysisService";
import { generateImageForPage, type ImageResult } from "./imageService";

// ─── Types ──────────────────────────────────────────────────────

interface PageInput {
  pageId: string;
  planId: string;
  siteId: string | null;
  title: string;
  slug: string;
  type: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  clusterId: string | null;
  parentPillarId: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  briefDescription?: string;
}

interface GenerationContext {
  businessData: typeof clientOnboarding.$inferSelect;
  notes: (typeof operatorNotes.$inferSelect)[];
  pillarPage: typeof contentPages.$inferSelect | null;
  relatedPages: (typeof contentPages.$inferSelect)[];
  existingServiceAreaPages: (typeof contentPages.$inferSelect)[];
  allPlanPages: (typeof contentPages.$inferSelect)[];
  siteUrl: string;
}

interface Outline {
  h1: string;
  sections: {
    h2: string;
    subsections?: { h3: string; keyPoints: string[] }[];
    keyPoints: string[];
    estimatedWords: number;
  }[];
  totalEstimatedWords: number;
  uniqueAngle: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface GeneratedContent {
  contentHtml: string;
  contentMarkdown: string;
  wordCount: number;
  faqJson: FAQ[];
  schemaJson: unknown[];
  internalLinks: { targetPageId: string; anchorText: string; url: string }[];
  metaTitle: string;
  metaDescription: string;
  qualityScore: number;
  featuredImage: ImageResult | null;
}

// ─── Main Pipeline ──────────────────────────────────────────────

export async function generatePageContent(
  page: PageInput,
  context: GenerationContext,
): Promise<GeneratedContent> {
  const toneOfVoice = context.businessData.tone || "profissional e acessível";
  const niche = context.businessData.segment || context.businessData.businessName || "";

  // STEP 1: SERP Analysis
  const serpAnalysis = await analyzeSERP({
    keyword: page.targetKeyword,
    niche,
    pageType: page.type,
    existingPages: context.existingServiceAreaPages.map((p) => p.title),
  });

  // STEP 2: Generate Outline (Gemini Flash - cheap)
  const outline = await generateOutline(page, context, serpAnalysis, toneOfVoice, niche);

  // STEP 3: Generate Full Content (Claude - quality)
  const content = await generateFullContent(page, context, serpAnalysis, outline, toneOfVoice, niche);

  // STEP 4: Generate FAQ
  const faqs = await generateFAQs(page, niche, content.markdown);

  // STEP 5: Generate Schema JSON-LD (programmatic)
  const schemas = generateSchemaJsonLd(page, context, faqs);

  // STEP 6: Resolve Internal Links (programmatic)
  const internalLinks = resolveInternalLinks(page, context);

  // STEP 7: Refine Meta Tags
  const metaTags = await refineMetaTags(page, content.markdown);

  // STEP 8: Featured Image (Unsplash first, Pollinations fallback)
  let featuredImage: ImageResult | null = null;
  try {
    featuredImage = await generateImageForPage({
      title: page.title,
      type: page.type,
      targetKeyword: page.targetKeyword,
      businessData: {
        segment: context.businessData.segment,
        businessName: context.businessData.businessName,
      },
    });
  } catch {
    // Non-critical, continue without image
  }

  // Prepend featured image to content HTML
  let finalHtml = markdownToHtml(content.markdown);
  if (featuredImage) {
    const imageHtml = `<figure class="featured-image">
  <img src="${featuredImage.url}" alt="${featuredImage.alt}" width="1200" height="630" loading="eager" />
  ${featuredImage.source === "unsplash" ? `<figcaption>Foto: <a href="${featuredImage.photographerUrl}">${featuredImage.photographer}</a> / Unsplash</figcaption>` : ""}
</figure>\n\n`;
    finalHtml = imageHtml + finalHtml;
  }

  // Calculate quality
  const qualityScore = calculateQualityScore(page.type, content.wordCount, faqs, schemas, internalLinks, metaTags);

  return {
    contentHtml: finalHtml,
    contentMarkdown: content.markdown,
    wordCount: content.wordCount,
    faqJson: faqs,
    schemaJson: schemas,
    internalLinks,
    metaTitle: metaTags.title,
    metaDescription: metaTags.description,
    qualityScore,
    featuredImage,
  };
}

// ─── STEP 2: Outline (Gemini Flash) ────────────────────────────

async function generateOutline(
  page: PageInput,
  context: GenerationContext,
  serpAnalysis: SerpAnalysis,
  toneOfVoice: string,
  niche: string,
): Promise<Outline> {
  const wordRange =
    page.type === "pillar"
      ? "3000-5000 palavras"
      : page.type === "service_area"
        ? "800-1200 palavras"
        : "800-1500 palavras";

  const existingPagesInfo =
    page.type === "service_area" && context.existingServiceAreaPages.length > 0
      ? `\nDIFERENCIAÇÃO OBRIGATÓRIA:
Páginas similares já criadas: ${context.existingServiceAreaPages.map((p) => p.title).join(", ")}
Use um ângulo ÚNICO para esta cidade/região.`
      : "";

  const hookSuggestion = serpAnalysis.hookAnalysis
    ? `- Hooks sugeridos: ${serpAnalysis.hookAnalysis.suggestedHookTypes.join(", ")} (oportunidade: ${serpAnalysis.hookAnalysis.hookOpportunity})`
    : "";

  const prompt = `Crie a estrutura (outline) para um artigo SEO.

TIPO: ${page.type} (${wordRange})
TÍTULO: ${page.title}
KEYWORD: ${page.targetKeyword}
KEYWORDS SECUNDÁRIAS: ${page.secondaryKeywords.join(", ")}
NICHO: ${niche}
TOM: ${toneOfVoice}

ANÁLISE DA CONCORRÊNCIA:
- Word count recomendado: ${serpAnalysis.recommendedWordCount}
- Headings dos concorrentes: ${serpAnalysis.recommendedHeadings.join(", ")}
- Gaps de conteúdo: ${serpAnalysis.contentGaps.join(", ")}
${hookSuggestion}
${existingPagesInfo}

═══ ESTRUTURA BASEADA NO TIPO DE PÁGINA ═══

Se o tipo é "pillar" ou "blog" com intent informacional:
→ Estrutura EDUCACIONAL: Começar pelo problema, educar, apresentar soluções, aprofundar
→ H2s devem seguir progressão: "O que é → Por que importa → Como funciona → Como escolher → Próximos passos"

Se o tipo é "service_area" ou "landing":
→ Estrutura AIDA: Attention (H1 com hook) → Interest (benefícios) → Desire (prova/cases) → Action (CTA)
→ Primeiro H2 deve ser um benefício, NÃO uma definição

Se o tipo é "cluster" com intent comparativo:
→ Estrutura COMPARATIVA: Apresentar opções → Critérios de decisão → Comparação honesta → Recomendação fundamentada

═══ REGRA DO GANCHO (Hook) ═══
O H1 NUNCA deve ser "[Keyword]: Guia Completo" ou "[Keyword] — Tudo Que Você Precisa Saber".
Use uma destas fórmulas:
- Result: "Como [resultado desejado] [sem objeção comum]"
- Question: "[Pergunta que o público faz]? [Promessa de resposta]"
- Pain: "Se Você [situação dolorosa], [solução inesperada]"
- Number: "[N] [coisas] Que [resultado] (E [N] Que [erro comum])"
- Contrarian: "Por Que [crença comum] [está errado/não funciona]"

FORMATO (JSON puro):
{
  "h1": "Heading 1 com hook (NUNCA genérico)",
  "sections": [
    {
      "h2": "Heading 2",
      "subsections": [{ "h3": "Heading 3", "keyPoints": ["ponto 1"] }],
      "keyPoints": ["ponto a cobrir"],
      "estimatedWords": 300
    }
  ],
  "totalEstimatedWords": 1200,
  "uniqueAngle": "O que torna este conteúdo diferente"
}

Gere APENAS o JSON.`;

  return generateJSON<Outline>(prompt, MODELS.fast, 4000);
}

// ─── STEP 3: Full Content (Claude) ─────────────────────────────

async function generateFullContent(
  page: PageInput,
  context: GenerationContext,
  serpAnalysis: SerpAnalysis,
  outline: Outline,
  toneOfVoice: string,
  niche: string,
): Promise<{ markdown: string; wordCount: number }> {
  const biz = context.businessData;
  const minWords = page.type === "pillar" ? 3000 : 800;
  const maxWords = page.type === "pillar" ? 5000 : page.type === "service_area" ? 1200 : 1500;

  const serviceAreaBlock =
    page.type === "service_area"
      ? `
═══ DIFERENCIAÇÃO (OBRIGATÓRIO) ═══
Esta é uma página para uma localidade específica.
- Mencione dados ESPECÍFICOS desta localidade
- Cite fórum/tribunal/vara/delegacia específica (se aplicável)
- Mencione bairros e características locais
- O conteúdo deve ser 60%+ DIFERENTE de outras pages de localidade
- NÃO use o mesmo padrão de texto trocando só o nome da cidade

Páginas de localidade já criadas:
${context.existingServiceAreaPages.map((p) => `- ${p.title}`).join("\n") || "Nenhuma ainda"}`
      : "";

  const clusterBlock = context.pillarPage
    ? `
═══ CONTEXTO DO CLUSTER ═══
- Pilar pai: ${context.pillarPage.title} (${context.pillarPage.targetKeyword})
- Clusters relacionados: ${context.relatedPages.map((p) => p.title).join(", ")}
- Complementar o pilar, não repetir conteúdo`
    : "";

  const notesBlock =
    context.notes.length > 0
      ? context.notes.map((n) => `- ${n.content}`).join("\n")
      : "Nenhuma nota adicional";

  const prompt = `Você é um redator SEO especialista em ${niche}. Escreva o conteúdo completo.

═══ DADOS DO NEGÓCIO ═══
- Empresa: ${biz.businessName || biz.clientName || "N/A"}
- Segmento: ${biz.segment || "N/A"} / ${biz.subNiche || "N/A"}
- Diferenciais: ${biz.differentials || "N/A"}
- Credenciais: ${biz.certifications || "N/A"}
- Localização: ${biz.mainCity || "N/A"}, ${biz.state || "N/A"}
- Serviços: ${biz.mainProduct || "N/A"}

═══ DADOS DA PÁGINA ═══
- Título: ${page.title}
- Keyword alvo: ${page.targetKeyword}
- Keywords secundárias: ${page.secondaryKeywords.join(", ")}
- Tipo: ${page.type}
- Tom de voz: ${toneOfVoice}

═══ OUTLINE APROVADO ═══
${JSON.stringify(outline, null, 2)}

═══ ANÁLISE SERP ═══
- Gaps dos concorrentes: ${serpAnalysis.contentGaps.join(", ")}
- Ângulo único: ${outline.uniqueAngle}
${serviceAreaBlock}
${clusterBlock}

═══ NOTAS DO OPERADOR ═══
${notesBlock}

═══ REGRAS INEGOCIÁVEIS ═══
1. MÍNIMO ${minWords} palavras, MÁXIMO ${maxWords} palavras
2. NÃO comece com "Neste artigo vamos explorar..." ou similar
3. NÃO use linguagem genérica de IA. Escreva como especialista humano
4. Use dados concretos, exemplos práticos, números quando possível
5. Inclua CTAs naturais no meio e no final
6. Use a keyword alvo no primeiro parágrafo e 2-3 vezes no corpo
7. Use keywords secundárias nos H2s quando natural
8. Formato: Markdown com ## para H2 e ### para H3
9. NÃO invente estatísticas — use informações plausíveis do nicho
10. O H1 já será o título da página — NÃO repita como # no markdown

═══ REGRAS DE ESCRITA AVANÇADAS (OBRIGATÓRIAS) ═══

REGRA 1 — TOBOGÃ DE LEITURA (Slippery Slide):
Cada parágrafo DEVE criar curiosidade para o próximo. O leitor não pode ter "pontos de saída".
- Primeiro parágrafo: MÁXIMO 2 frases. Curto, impactante, impossível de não ler.
- Abrir "loops" de curiosidade: "Mas o que poucos sabem é que..." / "Isso muda tudo quando você descobre que..." / "Antes de explicar como, preciso te contar..."
- Fechar loops DEPOIS — não na mesma seção onde abriu.
- NUNCA comece uma seção com definição de dicionário ("X é definido como..."). Comece com impacto.
- Transições entre H2s devem criar ponte: "Agora que você sabe [anterior], o próximo passo é crucial..."

REGRA 2 — HOOK NO PRIMEIRO PARÁGRAFO:
O parágrafo de abertura (logo após o H1) deve usar UMA destas estruturas:
a) Dor + Promessa: "Se você [situação dolorosa], este artigo vai [promessa concreta]."
b) Estatística chocante: "[Número impactante] de [grupo] [consequência]. E a maioria nem sabe."
c) Contra-intuitivo: "Tudo que você ouviu sobre [tema] está errado. E isso está custando [consequência]."
d) História: "Na semana passada, um cliente ligou desesperado porque [situação]. O que fizemos mudou tudo."
NÃO USE: "Neste artigo, vamos abordar..." / "Bem-vindo ao nosso guia sobre..." / "Você sabia que..."

REGRA 3 — DADOS CONCRETOS, NÃO GENÉRICOS:
- Substituir "muitas pessoas" por números: "67% dos brasileiros"
- Substituir "pode economizar dinheiro" por "economia média de R$2.400/ano"
- Substituir "é importante" por "reduz o risco em 43%"
- Se não tiver dados reais, use estimativas plausíveis com qualificadores: "Estudos indicam que cerca de..."

REGRA 4 — SEM LINGUAGEM DE IA:
NUNCA use estas expressões:
- "No mundo atual/moderno/de hoje"
- "É fundamental/crucial/essencial notar que"
- "Neste artigo/guia, vamos explorar"
- "Em conclusão/Para concluir"
- "Com isso em mente"
- "Vale ressaltar/destacar que"
- "Não é de surpreender que"
- "É importante mencionar que"
- "Diante disso/Diante desse cenário"
Escreva como um especialista conversando com um colega, não como um robô.

REGRA 5 — CTA CONTEXTUAL:
Insira CTAs naturais ao longo do texto (1 a cada 300-400 palavras), não só na conclusão.
Formato: dentro do fluxo, como recomendação natural do especialista.

═══ GEO — OTIMIZAÇÃO PARA IAs (Google AI Overview, ChatGPT, Perplexity) ═══

Em 2026, 60%+ das buscas não geram clique. Para que o conteúdo seja CITADO por IAs:

1. RESPOSTA DIRETA: O primeiro parágrafo após cada H2 deve responder a pergunta do H2 em 1-2 frases diretas e objetivas. IAs extraem essa resposta.
2. LISTAS E TABELAS: Incluir pelo menos 1 lista ou tabela por seção. IAs preferem dados estruturados.
3. LINGUAGEM PRECISA: Usar "67% dos casos" ao invés de "a maioria". IAs priorizam precisão.
4. DEFINIÇÕES CLARAS: Na primeira menção de um termo técnico, definir entre parênteses ou em frase curta.
5. DADOS CITÁVEIS: Incluir pelo menos 3 dados numéricos no artigo que IAs possam extrair e citar.
6. FORMATO "PERGUNTA-RESPOSTA" NATURAL: Escrever H2s como perguntas reais e respondê-las diretamente.

Retorne APENAS o conteúdo em Markdown. Sem JSON, sem explicações, sem backticks.`;

  const maxTokens = page.type === "pillar" ? 8000 : 4000;
  const markdown = await generateText(prompt, MODELS.smart, maxTokens, 0.6);
  const wordCount = markdown.split(/\s+/).filter(Boolean).length;

  return { markdown, wordCount };
}

// ─── STEP 4: FAQ Generation ────────────────────────────────────

async function generateFAQs(
  page: PageInput,
  niche: string,
  contentMarkdown: string,
): Promise<FAQ[]> {
  const prompt = `Gere 5-8 perguntas frequentes (FAQ) para esta página SEO.

PÁGINA: ${page.title}
KEYWORD: ${page.targetKeyword}
NICHO: ${niche}
CONTEÚDO RESUMIDO: ${contentMarkdown.slice(0, 800)}...

REGRAS:
1. Perguntas devem ser EXATAMENTE como o público pesquisa no Google
   ❌ "Quais são os benefícios da proteção veicular?"
   ✅ "Proteção veicular vale a pena?" (é assim que a pessoa digita)
2. Cada resposta deve começar com a RESPOSTA DIRETA em 1 frase, depois expandir
   ❌ "A proteção veicular é um serviço que oferece diversos benefícios..."
   ✅ "Sim, vale a pena para quem quer proteger o carro gastando 40-60% menos que seguro tradicional."
3. Inclua pelo menos 2 perguntas de "objeção" (dúvidas que impedem a compra):
   - "É seguro?" / "Funciona mesmo?" / "Qual a pegadinha?" / "E se [medo]?"
4. Inclua pelo menos 1 pergunta de "comparação":
   - "[Solução A] ou [Solução B], qual melhor?"
5. As respostas devem ter 40-80 palavras (ideal para featured snippets e AI overviews)
6. NÃO gere perguntas que ninguém pesquisa:
   ❌ "Qual é a importância de contratar um profissional qualificado?"
   ❌ "Como a empresa se diferencia no mercado?"
7. Use a keyword alvo em pelo menos 2 perguntas
8. Inclua pelo menos 1 pergunta com "quanto custa" ou "qual o valor" (se aplicável)

FORMATO (JSON puro):
{
  "faqs": [
    { "question": "Pergunta aqui?", "answer": "Resposta direta e útil aqui." }
  ]
}`;

  const result = await generateJSON<{ faqs: FAQ[] }>(prompt, MODELS.fast, 4000);
  return result.faqs || [];
}

// ─── STEP 5: Schema JSON-LD (programmatic) ─────────────────────

function generateSchemaJsonLd(
  page: PageInput,
  context: GenerationContext,
  faqs: FAQ[],
): unknown[] {
  const biz = context.businessData;
  const siteUrl = context.siteUrl || biz.siteUrl || "https://example.com";
  const schemas: unknown[] = [];

  // BreadcrumbList (all pages)
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: page.title },
    ],
  });

  // FAQPage
  if (faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  // Article types
  if (["pillar", "cluster", "blog"].includes(page.type)) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.title,
      author: {
        "@type": biz.certifications ? "Person" : "Organization",
        name: biz.businessName || biz.clientName || "",
      },
      datePublished: new Date().toISOString().split("T")[0],
      publisher: {
        "@type": "Organization",
        name: biz.businessName || biz.clientName || "",
        ...(biz.logoUrl && !biz.logoUrl.startsWith("data:") ? { logo: biz.logoUrl } : {}),
      },
    });
  }

  // LocalBusiness for service_area / landing
  if (["service_area", "landing"].includes(page.type)) {
    const localBiz: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": getSchemaType(biz.segment || ""),
      name: biz.businessName || biz.clientName || "",
      description: `${biz.subNiche || biz.segment || ""} em ${biz.mainCity || ""}`,
      url: `${siteUrl}/${page.slug}`,
    };

    if (biz.hasPhysicalLocation && biz.fullAddress) {
      localBiz.address = {
        "@type": "PostalAddress",
        streetAddress: biz.fullAddress,
        addressLocality: biz.mainCity || "",
        addressRegion: biz.state || "",
        addressCountry: "BR",
      };
    }

    if (biz.businessHours) {
      localBiz.openingHours = biz.businessHours;
    }

    if (biz.mainProduct) {
      const services = biz.mainProduct
        .split(/[,;\n]+/)
        .map((s) => s.trim())
        .filter(Boolean);
      localBiz.hasOfferCatalog = {
        "@type": "OfferCatalog",
        name: "Serviços",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s },
        })),
      };
    }

    schemas.push(localBiz);
  }

  return schemas;
}

function getSchemaType(segment: string): string {
  const map: Record<string, string> = {
    advocacia: "LegalService",
    direito: "LegalService",
    odontologia: "Dentist",
    medicina: "MedicalBusiness",
    contabilidade: "AccountingService",
    arquitetura: "Architect",
    engenharia: "ProfessionalService",
    "imobiliária": "RealEstateAgent",
    marketing: "ProfessionalService",
    tecnologia: "ProfessionalService",
    "educação": "EducationalOrganization",
    "saúde": "MedicalBusiness",
    beleza: "BeautySalon",
    fitness: "SportsActivityLocation",
    restaurante: "Restaurant",
    "construção": "GeneralContractor",
    limpeza: "ProfessionalService",
    "segurança": "ProfessionalService",
  };
  const lower = segment.toLowerCase();
  const key = Object.keys(map).find((k) => lower.includes(k));
  return key ? map[key] : "LocalBusiness";
}

// ─── STEP 6: Internal Links (programmatic) ─────────────────────

function resolveInternalLinks(
  page: PageInput,
  context: GenerationContext,
): { targetPageId: string; anchorText: string; url: string }[] {
  const links: { targetPageId: string; anchorText: string; url: string }[] = [];

  // Link to parent pillar
  if (context.pillarPage) {
    links.push({
      targetPageId: context.pillarPage.id,
      anchorText: context.pillarPage.targetKeyword,
      url: `/${context.pillarPage.slug}`,
    });
  }

  // Links to 2-3 same-cluster pages
  const sameCluster = context.allPlanPages
    .filter((p) => p.clusterId === page.clusterId && p.id !== page.pageId)
    .slice(0, 3);

  for (const p of sameCluster) {
    links.push({
      targetPageId: p.id,
      anchorText: p.targetKeyword || p.title,
      url: `/${p.slug}`,
    });
  }

  // Cross-cluster pillar links
  const otherPillars = context.allPlanPages
    .filter((p) => p.clusterId !== page.clusterId && p.type === "pillar")
    .slice(0, 2);

  for (const p of otherPillars) {
    links.push({
      targetPageId: p.id,
      anchorText: p.targetKeyword || p.title,
      url: `/${p.slug}`,
    });
  }

  return links.slice(0, 6);
}

// ─── STEP 7: Refine Meta Tags ──────────────────────────────────

async function refineMetaTags(
  page: PageInput,
  contentMarkdown: string,
): Promise<{ title: string; description: string }> {
  // If existing meta tags are good, keep them
  const existingTitle = page.metaTitle || "";
  const existingDesc = page.metaDescription || "";

  if (existingTitle.length > 0 && existingTitle.length <= 60 && existingDesc.length > 0 && existingDesc.length <= 155) {
    return { title: existingTitle, description: existingDesc };
  }

  const prompt = `Refine as meta tags SEO para esta página.

TÍTULO DA PÁGINA: ${page.title}
KEYWORD: ${page.targetKeyword}
META TITLE ATUAL: ${existingTitle || "vazio"}
META DESCRIPTION ATUAL: ${existingDesc || "vazio"}
RESUMO DO CONTEÚDO: ${contentMarkdown.slice(0, 300)}...

═══ META TITLE (máx 60 caracteres, keyword na primeira metade) ═══

NÃO gere títulos genéricos como "[Keyword] | Guia Completo" ou "[Keyword] — Tudo Sobre".
O meta title é o HOOK do Google — é o que faz alguém clicar no resultado ao invés dos outros 9.

Use UMA destas fórmulas de gancho:
1. RESULTADO: "Como [Resultado Desejado] em [Tempo/Sem Obstáculo]"
2. PERGUNTA + PROMESSA: "[Pergunta]? [Resposta Curta]"
3. NÚMERO + BENEFÍCIO: "[N] [Coisas] Para [Resultado]"
4. DOR + SOLUÇÃO: "Se [Dor], [Solução]"
5. CONTRA-INTUITIVO: "Por Que [Crença] [Está Errado]"

A keyword alvo DEVE aparecer na primeira metade do título.
Cada título deve ser único — nunca repetir a fórmula entre páginas do mesmo site.

═══ META DESCRIPTION (máx 155 caracteres, framework PAS) ═══

Use o framework PAS (Problem-Agitate-Solve) em 155 caracteres:
- Problem (20-30 chars): Identificar a dor em poucas palavras
- Agitate (40-60 chars): Intensificar — consequência de não agir
- Solve + CTA (40-60 chars): Solução + chamada para ação

Fórmula: [Dor]? [Consequência/Agitação]. [Solução/Benefício]. [CTA]

❌ "Saiba tudo sobre advogado criminal em São Paulo. Neste guia completo, abordamos os principais aspectos."
✅ "Preso em flagrante em SP? Cada hora sem advogado reduz suas chances de defesa. Fale agora com um criminalista."

NUNCA comece com "Saiba tudo sobre", "Confira nosso", "Neste artigo", "Descubra como".
DEVE conter um CTA (verbo de ação no final).

FORMATO (JSON puro):
{ "title": "Meta title aqui", "description": "Meta description aqui" }`;

  try {
    const result = await generateJSON<{ title: string; description: string }>(prompt, MODELS.fast, 1000);
    return {
      title: result.title.slice(0, 60),
      description: result.description.slice(0, 155),
    };
  } catch {
    return {
      title: existingTitle || page.title.slice(0, 60),
      description: existingDesc || `${page.targetKeyword} - Saiba mais.`,
    };
  }
}

// ─── Quality Score ──────────────────────────────────────────────

export function calculateQualityScore(
  type: string,
  wordCount: number,
  faqs: FAQ[],
  schemas: unknown[],
  links: { targetPageId: string }[],
  metaTags: { title: string; description: string },
): number {
  const minWords: Record<string, number> = {
    pillar: 3000,
    cluster: 800,
    service_area: 800,
    blog: 800,
    faq: 500,
    landing: 1500,
  };

  let score = 0;
  if (wordCount >= (minWords[type] || 800)) score += 25;
  if (faqs.length >= 5) score += 20;
  if (schemas.length >= 2) score += 20;
  if (metaTags.title.length > 0 && metaTags.title.length <= 60) score += 10;
  if (metaTags.description.length > 0 && metaTags.description.length <= 155) score += 10;
  if (links.length >= 3) score += 15;

  return score;
}

// ─── Markdown to HTML ───────────────────────────────────────────

function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Lists
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);

  // Numbered lists
  html = html.replace(/^\d+\. (.+)$/gm, "<li>$1</li>");

  // Paragraphs - wrap text blocks that aren't already wrapped in tags
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (/^<[a-z]/.test(trimmed)) return trimmed;
      return `<p>${trimmed}</p>`;
    })
    .join("\n\n");

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  return html;
}

// ─── Batch Production ───────────────────────────────────────────

export async function producePages(input: {
  planId: string;
  siteId: string | null;
  pageIds: string[];
  onboardingId: number;
}): Promise<{ pageId: string; status: "success" | "failed"; error?: string }[]> {
  // Fetch context once for all pages
  const [onboarding] = await db
    .select()
    .from(clientOnboarding)
    .where(eq(clientOnboarding.id, input.onboardingId))
    .limit(1);

  if (!onboarding) throw new Error("Onboarding not found");

  const notes = await db
    .select()
    .from(operatorNotes)
    .where(eq(operatorNotes.onboardingId, input.onboardingId));

  const allPages = await db
    .select()
    .from(contentPages)
    .where(eq(contentPages.planId, input.planId))
    .orderBy(contentPages.displayOrder);

  const siteUrl = onboarding.siteUrl || "https://example.com";

  const results: { pageId: string; status: "success" | "failed"; error?: string }[] = [];

  // Sort pages for optimal generation order: pillar → cluster → blog → service_area → faq
  const typeOrder: Record<string, number> = { pillar: 0, cluster: 1, blog: 2, service_area: 3, faq: 4, landing: 1 };
  const sortedPageIds = [...input.pageIds].sort((a, b) => {
    const pageA = allPages.find((p) => p.id === a);
    const pageB = allPages.find((p) => p.id === b);
    return (typeOrder[pageA?.type || ""] ?? 5) - (typeOrder[pageB?.type || ""] ?? 5);
  });

  for (const pageId of sortedPageIds) {
    const page = allPages.find((p) => p.id === pageId);
    if (!page) {
      results.push({ pageId, status: "failed", error: "Page not found" });
      continue;
    }

    try {
      // Mark as generating
      await db
        .update(contentPages)
        .set({ status: "generating", updatedAt: new Date() })
        .where(eq(contentPages.id, pageId));

      // Build context for this page
      const pillarPage = page.parentPillarId
        ? allPages.find((p) => p.id === page.parentPillarId) ?? null
        : null;

      const relatedPages = allPages.filter(
        (p) => p.clusterId === page.clusterId && p.id !== pageId,
      );

      // For service_area, get other SA pages that already have content
      const existingServiceAreaPages =
        page.type === "service_area"
          ? allPages.filter((p) => p.type === "service_area" && p.id !== pageId && p.contentHtml)
          : [];

      const generationContext: GenerationContext = {
        businessData: onboarding,
        notes,
        pillarPage,
        relatedPages,
        existingServiceAreaPages,
        allPlanPages: allPages,
        siteUrl,
      };

      const secondaryKw = Array.isArray(page.secondaryKeywords)
        ? (page.secondaryKeywords as string[])
        : [];

      const result = await generatePageContent(
        {
          pageId: page.id,
          planId: input.planId,
          siteId: input.siteId,
          title: page.title,
          slug: page.slug,
          type: page.type,
          targetKeyword: page.targetKeyword,
          secondaryKeywords: secondaryKw,
          clusterId: page.clusterId,
          parentPillarId: page.parentPillarId,
          metaTitle: page.metaTitle,
          metaDescription: page.metaDescription,
        },
        generationContext,
      );

      // Save to database
      await db
        .update(contentPages)
        .set({
          contentHtml: result.contentHtml,
          contentMarkdown: result.contentMarkdown,
          wordCount: result.wordCount,
          faqJson: result.faqJson,
          schemaJson: result.schemaJson,
          internalLinks: result.internalLinks,
          metaTitle: result.metaTitle,
          metaDescription: result.metaDescription,
          featuredImageUrl: result.featuredImage?.url || null,
          featuredImageAlt: result.featuredImage?.alt || null,
          featuredImageSource: result.featuredImage?.source || null,
          generationModel: MODELS.smart,
          status: "review",
          updatedAt: new Date(),
        })
        .where(eq(contentPages.id, pageId));

      // Update allPages array for subsequent pages (for differentiation context)
      const idx = allPages.findIndex((p) => p.id === pageId);
      if (idx >= 0) {
        allPages[idx] = { ...allPages[idx], contentHtml: result.contentHtml, status: "review" };
      }

      results.push({ pageId, status: "success" });
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : "Erro desconhecido";
      await db
        .update(contentPages)
        .set({ status: "failed", errorMessage: errMsg, updatedAt: new Date() })
        .where(eq(contentPages.id, pageId));

      results.push({ pageId, status: "failed", error: errMsg });
    }
  }

  return results;
}
