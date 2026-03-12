import { db } from "@/lib/db";
import { generateJSON, MODELS } from "@/lib/ai";
import { contentPlans, contentPages, keywordResearch, clientOnboarding, operatorNotes } from "@/lib/schema";
import { eq, and } from "drizzle-orm";
import { researchKeywords, type KeywordSuggestion } from "./keywordService";

// ─── Types ──────────────────────────────────────────────────────

interface GeneratePlanInput {
  planId: string;
  onboardingId: number;
}

interface PlanPage {
  tempId: string;
  type: "pillar" | "cluster" | "service_area" | "blog" | "faq";
  clusterId: string;
  parentPillarTempId: string | null;
  title: string;
  slug: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  briefDescription: string;
  estimatedWordCount: number;
  internalLinksTo: string[];
  schemaTypes: string[];
  order: number;
  differentiationNotes: string;
}

interface PlanCluster {
  id: string;
  name: string;
  description: string;
  pillarKeyword: string;
  estimatedTotalVolume: number;
  priority: number;
}

interface GeneratedPlan {
  topicalMap: {
    coreTopic: string;
    clusters: PlanCluster[];
  };
  pages: PlanPage[];
  internalLinkingStrategy: {
    description: string;
    crossClusterLinks: { from: string; to: string; reason: string }[];
  };
  executionNotes: string;
}

// ─── Main function ──────────────────────────────────────────────

export async function generateContentPlan(input: GeneratePlanInput) {
  const { planId, onboardingId } = input;

  // 1. Fetch all data
  const [onboarding] = await db
    .select()
    .from(clientOnboarding)
    .where(eq(clientOnboarding.id, onboardingId))
    .limit(1);

  if (!onboarding) throw new Error("Onboarding not found");

  const notes = await db
    .select()
    .from(operatorNotes)
    .where(eq(operatorNotes.onboardingId, onboardingId));

  const [plan] = await db
    .select()
    .from(contentPlans)
    .where(eq(contentPlans.id, planId))
    .limit(1);

  if (!plan) throw new Error("Plan not found");

  // 2. Update status to generating
  await db
    .update(contentPlans)
    .set({ status: "generating", updatedAt: new Date() })
    .where(eq(contentPlans.id, planId));

  try {
    // 3. Research keywords
    const services = splitText(onboarding.mainProduct);
    const locations = splitText(onboarding.serviceAreas);
    const competitors = splitText(onboarding.competitors);

    const keywords = await researchKeywords({
      niche: onboarding.segment || onboarding.businessName || "",
      subNiche: onboarding.subNiche || "",
      services,
      locations,
      competitors,
      language: "pt-BR",
      country: "BR",
    });

    // 4. Save keywords
    if (keywords.length > 0 && plan.siteId) {
      await db.insert(keywordResearch).values(
        keywords.map((kw) => ({
          siteId: plan.siteId!,
          planId: planId,
          keyword: kw.keyword,
          searchVolume: kw.searchVolume,
          difficulty: kw.difficulty,
          cpc: kw.cpc?.toString() ?? null,
          intent: kw.intent,
          source: kw.source,
          clusterId: null,
          isSelected: false,
        })),
      );
    }

    // 5. Generate plan via AI
    const config = (plan.operatorConfig as Record<string, string>) || {};
    const generatedPlan = await callAIForPlan(onboarding, notes, plan, keywords, config);

    // 6. Save plan data
    await db
      .update(contentPlans)
      .set({
        status: "review",
        topicalMap: generatedPlan.topicalMap,
        clusters: generatedPlan.topicalMap.clusters,
        internalLinkingPlan: generatedPlan.internalLinkingStrategy,
        updatedAt: new Date(),
      })
      .where(eq(contentPlans.id, planId));

    // 7. Create content pages
    if (generatedPlan.pages.length > 0) {
      const pagesToInsert = generatedPlan.pages.map((page, index) => ({
        planId: planId,
        siteId: plan.siteId,
        type: page.type,
        clusterId: page.clusterId,
        parentPillarId: null as string | null,
        title: page.title,
        slug: page.slug,
        targetKeyword: page.targetKeyword,
        secondaryKeywords: page.secondaryKeywords,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        wordCount: page.estimatedWordCount,
        internalLinks: page.internalLinksTo,
        status: "pending",
        displayOrder: page.order || index,
      }));

      const inserted = await db.insert(contentPages).values(pagesToInsert).returning();

      // 8. Resolve parentPillarId and internalLinks with real IDs
      const tempIdMap: Record<string, string> = {};
      generatedPlan.pages.forEach((planPage, index) => {
        if (inserted[index]) {
          tempIdMap[planPage.tempId] = inserted[index].id;
        }
      });

      for (const planPage of generatedPlan.pages) {
        const realId = tempIdMap[planPage.tempId];
        if (!realId) continue;

        const updates: Record<string, unknown> = {};

        if (planPage.parentPillarTempId && tempIdMap[planPage.parentPillarTempId]) {
          updates.parentPillarId = tempIdMap[planPage.parentPillarTempId];
        }

        if (planPage.internalLinksTo?.length > 0) {
          updates.internalLinks = planPage.internalLinksTo
            .map((tid) => tempIdMap[tid])
            .filter(Boolean);
        }

        if (Object.keys(updates).length > 0) {
          await db
            .update(contentPages)
            .set(updates)
            .where(eq(contentPages.id, realId));
        }
      }

      // 9. Update keyword_research with clusterId for selected keywords
      if (plan.siteId) {
        for (const page of generatedPlan.pages) {
          await db
            .update(keywordResearch)
            .set({ clusterId: page.clusterId, isSelected: true })
            .where(
              and(
                eq(keywordResearch.planId, planId),
                eq(keywordResearch.keyword, page.targetKeyword),
              ),
            );
        }
      }
    }

    return { success: true, planId };
  } catch (error) {
    // Mark plan as failed
    await db
      .update(contentPlans)
      .set({
        status: "draft",
        updatedAt: new Date(),
      })
      .where(eq(contentPlans.id, planId));

    throw error;
  }
}

// ─── AI Plan Generation ─────────────────────────────────────────

async function callAIForPlan(
  data: typeof clientOnboarding.$inferSelect,
  notes: (typeof operatorNotes.$inferSelect)[],
  plan: typeof contentPlans.$inferSelect,
  keywords: KeywordSuggestion[],
  config: Record<string, string>,
): Promise<GeneratedPlan> {
  const notesText =
    notes.length > 0
      ? notes.map((n) => `- [${n.noteType}] ${n.fieldPath}: ${n.content}`).join("\n")
      : "Nenhuma nota adicionada.";

  const keywordsText =
    keywords.length > 0
      ? keywords
          .slice(0, 100) // Limit to avoid token overflow
          .map((k) => `- "${k.keyword}" (vol: ${k.searchVolume ?? "?"}, diff: ${k.difficulty ?? "?"}, intent: ${k.intent})`)
          .join("\n")
      : "Nenhuma keyword pesquisada ainda. Gere keywords adequadas para o plano.";

  const targetCities = config.targetCities
    ? config.targetCities.split("\n").filter(Boolean).join(", ")
    : data.serviceAreas || data.mainCity || "";

  const priorityClusters = config.priorityClusters
    ? config.priorityClusters.split("\n").filter(Boolean).join(", ")
    : "";

  const prompt = `Você é um estrategista de SEO sênior especializado no mercado brasileiro. Sua tarefa é criar um plano de conteúdo completo para um site.

═══════════════════════════════════════
DADOS DO CLIENTE
═══════════════════════════════════════

NEGÓCIO:
- Empresa: ${data.businessName || data.clientName || "N/A"}
- Segmento: ${data.segment || "N/A"}
- Especialidade: ${data.subNiche || "N/A"}
- Tempo de mercado: ${data.yearsInBusiness || "N/A"}
- Diferenciais: ${data.differentials || "N/A"}
- Credenciais: ${data.certifications || "N/A"}

LOCALIZAÇÃO:
- Cidade principal: ${data.mainCity || "N/A"}, ${data.state || "N/A"}
- Áreas de atendimento: ${data.serviceAreas || "N/A"}
- Tem local físico: ${data.hasPhysicalLocation ? "Sim - " + (data.fullAddress || "") : "Não"}

SERVIÇOS:
- Principais: ${data.mainProduct || "N/A"}
- Maior receita: ${data.highestRevenueService || "N/A"}
- Ticket médio: ${data.averageTicket || "N/A"}

PÚBLICO:
- Cliente ideal: ${data.targetAudience || "N/A"}
- Dores do cliente: ${data.clientProblem || "N/A"}
- Perguntas frequentes: ${data.clientQuestions || "N/A"}

PRESENÇA DIGITAL:
- Site atual: ${data.siteUrl || "Não tem"}
- Blog: ${data.hasBlog ? (data.blogPostCount || "?") + " posts" : "Não tem"}
- Google Business: ${data.hasGoogleBusinessProfile ? "Sim" : "Não"}

VOZ DA MARCA:
- Tom: ${data.tone || "N/A"}
- Referências de estilo: ${data.styleReference || "N/A"}
- Temas sensíveis (NÃO abordar): ${data.sensitiveTopics || "Nenhum"}

OBJETIVOS:
- Meta principal: ${data.contentGoal || "N/A"}
- Regiões prioritárias: ${data.priorityRegions || "N/A"}
- Serviços prioritários: ${data.priorityServices || "N/A"}

CONCORRENTES:
${data.competitors || "N/A"}

NOTAS DO OPERADOR:
${notesText}

═══════════════════════════════════════
KEYWORDS PESQUISADAS
═══════════════════════════════════════
${keywordsText}

═══════════════════════════════════════
CONFIGURAÇÃO DE PRODUÇÃO
═══════════════════════════════════════
- Total de páginas: ${plan.totalPages}
- Pillar Pages: ${plan.pillarPages}
- Cluster Pages: ${plan.clusterPages}
- Service Area Pages: ${plan.serviceAreaPages}
- Blog Posts: ${plan.blogPages}
- FAQ Pages: ${plan.faqPages}
- Cidades alvo: ${targetCities}
- Clusters prioritários: ${priorityClusters || "Definir com base nos dados"}
- Cronograma: ${config.publishSchedule || "10/semana"}

═══════════════════════════════════════
TAREFA
═══════════════════════════════════════

Crie um plano de conteúdo SEO completo seguindo estas regras:

REGRAS DE ESTRUTURA:
1. Organize em TOPIC CLUSTERS. Cada cluster tem 1 Pillar Page + Cluster Pages relacionadas
2. O número total de páginas deve respeitar a configuração acima
3. Pillar Pages: conteúdo abrangente (3000-5000 palavras quando escrito), keyword principal do cluster
4. Cluster Pages: conteúdo específico (800-1500 palavras), subtópicos do pilar
5. Service Area Pages: uma por cidade/região, com ângulo DIFERENTE para cada cidade
6. Blog Posts: conteúdo editorial, perguntas frequentes, guias práticos
7. FAQ Pages: compilação de perguntas por tema

REGRAS DE QUALIDADE:
1. NUNCA repita o mesmo ângulo em cidades diferentes. Cada service area page deve ter um subtema diferente como foco e referências locais específicas
2. Cada página deve ter uma keyword alvo DIFERENTE (sem canibalização)
3. Distribua keywords por intenção: 30% comercial, 30% informacional, 25% transacional, 15% navegacional
4. Planeje internal links: cada cluster page linka para seu pilar e para 2-3 clusters relacionados

REGRAS DE NOMEAÇÃO:
1. Títulos devem ser naturais, não robóticos
2. Slugs devem ser curtos e descritivos (max 5 palavras separadas por hífen)
3. Meta titles: max 60 caracteres, keyword no início
4. Meta descriptions: max 155 caracteres, com CTA natural

═══════════════════════════════════════
FORMATO DE RESPOSTA (JSON puro, sem markdown)
═══════════════════════════════════════

{
  "topicalMap": {
    "coreTopic": "tema central do site",
    "clusters": [
      {
        "id": "cluster-1",
        "name": "Nome do Cluster",
        "description": "Descrição breve",
        "pillarKeyword": "keyword principal",
        "estimatedTotalVolume": 5000,
        "priority": 1
      }
    ]
  },
  "pages": [
    {
      "tempId": "page-1",
      "type": "pillar",
      "clusterId": "cluster-1",
      "parentPillarTempId": null,
      "title": "Título da Página",
      "slug": "slug-da-pagina",
      "targetKeyword": "keyword alvo",
      "secondaryKeywords": ["kw2", "kw3"],
      "metaTitle": "Meta Title | Marca",
      "metaDescription": "Meta description em até 155 chars.",
      "briefDescription": "O que esta página deve cobrir.",
      "estimatedWordCount": 3500,
      "internalLinksTo": ["page-2", "page-3"],
      "schemaTypes": ["Article"],
      "order": 1,
      "differentiationNotes": ""
    }
  ],
  "internalLinkingStrategy": {
    "description": "Estratégia de linking entre clusters",
    "crossClusterLinks": [
      { "from": "cluster-1", "to": "cluster-2", "reason": "Temas complementares" }
    ]
  },
  "executionNotes": "Notas sobre ordem de execução"
}

IMPORTANTE: Gere APENAS o JSON válido. Sem explicações. Sem markdown. Sem backticks.`;

  return generateJSON<GeneratedPlan>(prompt, MODELS.smart, 16000, 2);
}

// ─── Helpers ────────────────────────────────────────────────────

function splitText(text: string | null | undefined): string[] {
  if (!text) return [];
  return text
    .split(/[,;\n]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}
