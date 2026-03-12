"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Save, Rocket, Plus, Trash2, MessageSquare, Check, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc/client";

interface OnboardingData {
  id: number;
  clientName: string | null;
  clientEmail: string | null;
  status: string;
  createdAt: string;
  completedAt: string | null;
  // Step 1
  businessName: string | null; businessDescription: string | null;
  b2bOrB2c: string | null; yearsInBusiness: string | null; clientsServed: string | null;
  segment: string | null; subNiche: string | null; mainCity: string | null; state: string | null;
  serviceAreas: string | null; hasPhysicalLocation: boolean; fullAddress: string | null; businessHours: string | null;
  // Step 2
  mainProduct: string | null; targetAudience: string | null; highestRevenueService: string | null;
  clientProblem: string | null; clientQuestions: string | null; averageTicket: string | null; competitors: string | null;
  // Step 3
  hasSite: boolean; siteUrl: string | null;
  hasGoogleBusinessProfile: boolean; googleBusinessUrl: string | null;
  socialMediaUrls: string | null; currentSeoInvestment: string | null;
  hasBlog: boolean; blogPostCount: string | null;
  usesWordPress: boolean; wordPressVersion: string | null; hasWpAdminAccess: boolean;
  hasSearchConsole: boolean; hasGoogleAnalytics: boolean;
  // Step 4
  tone: string | null; styleReference: string | null;
  hasCaseStudies: boolean; caseStudiesDetails: string | null;
  hasTestimonials: boolean; hasTeamPhotos: boolean;
  hasOwnData: boolean; ownDataDetails: string | null;
  sensitiveTopics: string | null; certifications: string | null;
  // Step 5
  contentGoal: string | null; priorityRegions: string | null; priorityServices: string | null;
  timeline: string | null; monthlyBudget: string | null;
  // Step 6
  competitorSitesAdmired: string | null; referenceSites: string | null;
  contentConsumption: string | null; desiredKeywords: string | null; additionalNotes: string | null;
  // Step 7
  wpAdminUrl: string | null; wpUsername: string | null; wpAppPassword: string | null;
  gscAuthorizedEmail: string | null; gaAuthorizedEmail: string | null;
  domainRegistrar: string | null; hostingProvider: string | null;
  // Legacy
  location: string | null; differentials: string | null;
  contactMethod: string | null; seasonality: string | null; extraInfo: string | null;
}

interface Note {
  id: string;
  fieldPath: string | null;
  noteType: string;
  content: string;
  createdAt: string;
}

interface ProductionConfig {
  totalPages: number;
  pillarPages: number;
  clusterPages: number;
  serviceAreaPages: number;
  blogPages: number;
  faqPages: number;
  targetCities: string;
  priorityClusters: string;
  publishSchedule: string;
}

const SECTIONS = [
  { key: "business", label: "Sobre o Negócio", icon: "🏢" },
  { key: "audience", label: "Público e Mercado", icon: "👥" },
  { key: "digital", label: "Presença Digital", icon: "🌐" },
  { key: "voice", label: "Conteúdo e Voz", icon: "🎤" },
  { key: "goals", label: "Objetivos", icon: "🎯" },
  { key: "references", label: "Referências", icon: "🔗" },
  { key: "access", label: "Acesso Técnico", icon: "🔑" },
];

function getSectionFields(key: string, data: OnboardingData): { label: string; value: string | null; fieldPath: string }[] {
  switch (key) {
    case "business": return [
      { label: "Empresa", value: data.businessName, fieldPath: "businessName" },
      { label: "Descrição", value: data.businessDescription, fieldPath: "businessDescription" },
      { label: "Segmento", value: data.segment, fieldPath: "segment" },
      { label: "Especialidade", value: data.subNiche, fieldPath: "subNiche" },
      { label: "B2B ou B2C", value: data.b2bOrB2c, fieldPath: "b2bOrB2c" },
      { label: "Anos no mercado", value: data.yearsInBusiness, fieldPath: "yearsInBusiness" },
      { label: "Clientes atendidos", value: data.clientsServed, fieldPath: "clientsServed" },
      { label: "Cidade principal", value: data.mainCity, fieldPath: "mainCity" },
      { label: "Estado", value: data.state, fieldPath: "state" },
      { label: "Áreas de atendimento", value: data.serviceAreas, fieldPath: "serviceAreas" },
      { label: "Local físico", value: data.hasPhysicalLocation ? "Sim" : "Não", fieldPath: "hasPhysicalLocation" },
      { label: "Endereço", value: data.fullAddress, fieldPath: "fullAddress" },
      { label: "Horário", value: data.businessHours, fieldPath: "businessHours" },
      { label: "Diferenciais", value: data.differentials, fieldPath: "differentials" },
    ];
    case "audience": return [
      { label: "Serviços principais", value: data.mainProduct, fieldPath: "mainProduct" },
      { label: "Maior receita", value: data.highestRevenueService, fieldPath: "highestRevenueService" },
      { label: "Cliente ideal", value: data.targetAudience, fieldPath: "targetAudience" },
      { label: "Problema principal", value: data.clientProblem, fieldPath: "clientProblem" },
      { label: "Perguntas frequentes", value: data.clientQuestions, fieldPath: "clientQuestions" },
      { label: "Ticket médio", value: data.averageTicket, fieldPath: "averageTicket" },
      { label: "Concorrentes", value: data.competitors, fieldPath: "competitors" },
    ];
    case "digital": return [
      { label: "Tem site", value: data.hasSite ? "Sim" : "Não", fieldPath: "hasSite" },
      { label: "URL do site", value: data.siteUrl, fieldPath: "siteUrl" },
      { label: "Google Business", value: data.hasGoogleBusinessProfile ? "Sim" : "Não", fieldPath: "hasGoogleBusinessProfile" },
      { label: "URL Google Business", value: data.googleBusinessUrl, fieldPath: "googleBusinessUrl" },
      { label: "Redes sociais", value: data.socialMediaUrls, fieldPath: "socialMediaUrls" },
      { label: "Investimento SEO/Ads", value: data.currentSeoInvestment, fieldPath: "currentSeoInvestment" },
      { label: "Blog ativo", value: data.hasBlog ? "Sim" : "Não", fieldPath: "hasBlog" },
      { label: "Posts no blog", value: data.blogPostCount, fieldPath: "blogPostCount" },
      { label: "WordPress", value: data.usesWordPress ? "Sim" : "Não", fieldPath: "usesWordPress" },
      { label: "Versão WP", value: data.wordPressVersion, fieldPath: "wordPressVersion" },
      { label: "Admin WP", value: data.hasWpAdminAccess ? "Sim" : "Não", fieldPath: "hasWpAdminAccess" },
      { label: "Search Console", value: data.hasSearchConsole ? "Sim" : "Não", fieldPath: "hasSearchConsole" },
      { label: "Analytics", value: data.hasGoogleAnalytics ? "Sim" : "Não", fieldPath: "hasGoogleAnalytics" },
    ];
    case "voice": return [
      { label: "Tom de voz", value: data.tone, fieldPath: "tone" },
      { label: "Referência de estilo", value: data.styleReference, fieldPath: "styleReference" },
      { label: "Cases de sucesso", value: data.hasCaseStudies ? "Sim" : "Não", fieldPath: "hasCaseStudies" },
      { label: "Detalhes dos cases", value: data.caseStudiesDetails, fieldPath: "caseStudiesDetails" },
      { label: "Depoimentos", value: data.hasTestimonials ? "Sim" : "Não", fieldPath: "hasTestimonials" },
      { label: "Fotos profissionais", value: data.hasTeamPhotos ? "Sim" : "Não", fieldPath: "hasTeamPhotos" },
      { label: "Dados próprios", value: data.hasOwnData ? "Sim" : "Não", fieldPath: "hasOwnData" },
      { label: "Detalhes dos dados", value: data.ownDataDetails, fieldPath: "ownDataDetails" },
      { label: "Temas sensíveis", value: data.sensitiveTopics, fieldPath: "sensitiveTopics" },
      { label: "Credenciais", value: data.certifications, fieldPath: "certifications" },
    ];
    case "goals": return [
      { label: "Objetivo principal", value: data.contentGoal, fieldPath: "contentGoal" },
      { label: "Regiões prioritárias", value: data.priorityRegions, fieldPath: "priorityRegions" },
      { label: "Serviços prioritários", value: data.priorityServices, fieldPath: "priorityServices" },
      { label: "Timeline", value: data.timeline, fieldPath: "timeline" },
      { label: "Orçamento mensal", value: data.monthlyBudget, fieldPath: "monthlyBudget" },
      { label: "Método de contato", value: data.contactMethod, fieldPath: "contactMethod" },
      { label: "Sazonalidade", value: data.seasonality, fieldPath: "seasonality" },
    ];
    case "references": return [
      { label: "Sites de concorrentes admirados", value: data.competitorSitesAdmired, fieldPath: "competitorSitesAdmired" },
      { label: "Sites de referência", value: data.referenceSites, fieldPath: "referenceSites" },
      { label: "Tipo de conteúdo consumido", value: data.contentConsumption, fieldPath: "contentConsumption" },
      { label: "Keywords desejadas", value: data.desiredKeywords, fieldPath: "desiredKeywords" },
      { label: "Notas adicionais", value: data.additionalNotes ?? data.extraInfo, fieldPath: "additionalNotes" },
    ];
    case "access": return [
      { label: "URL WP Admin", value: data.wpAdminUrl, fieldPath: "wpAdminUrl" },
      { label: "Usuário WP", value: data.wpUsername, fieldPath: "wpUsername" },
      { label: "App Password WP", value: data.wpAppPassword ? "••••••••" : null, fieldPath: "wpAppPassword" },
      { label: "Email Search Console", value: data.gscAuthorizedEmail, fieldPath: "gscAuthorizedEmail" },
      { label: "Email Analytics", value: data.gaAuthorizedEmail, fieldPath: "gaAuthorizedEmail" },
      { label: "Registrador domínio", value: data.domainRegistrar, fieldPath: "domainRegistrar" },
      { label: "Hospedagem", value: data.hostingProvider, fieldPath: "hostingProvider" },
    ];
    default: return [];
  }
}

function getSectionCompleteness(key: string, data: OnboardingData): "complete" | "partial" | "empty" {
  const fields = getSectionFields(key, data);
  const filled = fields.filter(f => f.value && f.value !== "Não" && f.value !== "—").length;
  if (filled === 0) return "empty";
  if (filled >= fields.length * 0.6) return "complete";
  return "partial";
}

const defaultConfig: ProductionConfig = {
  totalPages: 0, pillarPages: 0, clusterPages: 0,
  serviceAreaPages: 0, blogPages: 0, faqPages: 0,
  targetCities: "", priorityClusters: "", publishSchedule: "10/semana",
};

export default function ReviewPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [data, setData] = useState<OnboardingData | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeSection, setActiveSection] = useState("business");
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState<ProductionConfig>(defaultConfig);
  const [savingConfig, setSavingConfig] = useState(false);
  const [configSaved, setConfigSaved] = useState(false);
  const [addingNote, setAddingNote] = useState<string | null>(null);
  const [noteText, setNoteText] = useState("");
  const [savingNote, setSavingNote] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateProgress, setGenerateProgress] = useState("");
  const [generateError, setGenerateError] = useState("");

  const generatePlan = trpc.contentPlan.generate.useMutation();

  const fetchData = useCallback(async () => {
    try {
      const [obRes, notesRes] = await Promise.all([
        fetch(`/api/onboarding/review/${id}`),
        fetch(`/api/onboarding/review/${id}/notes`),
      ]);
      if (obRes.ok) {
        const ob = await obRes.json();
        setData(ob);
      }
      if (notesRes.ok) {
        const n = await notesRes.json();
        setNotes(n);
      }
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => { fetchData(); }, [fetchData]);

  async function saveNote(fieldPath: string) {
    if (!noteText.trim()) return;
    setSavingNote(true);
    try {
      const res = await fetch(`/api/onboarding/review/${id}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fieldPath, noteType: "enrichment", content: noteText.trim() }),
      });
      if (res.ok) {
        setNoteText("");
        setAddingNote(null);
        fetchData();
      }
    } finally { setSavingNote(false); }
  }

  async function deleteNote(noteId: string) {
    await fetch(`/api/onboarding/review/${id}/notes/${noteId}`, { method: "DELETE" });
    fetchData();
  }

  async function saveConfig() {
    setSavingConfig(true);
    try {
      const res = await fetch(`/api/onboarding/review/${id}/config`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });
      if (res.ok) {
        setConfigSaved(true);
        setTimeout(() => setConfigSaved(false), 3000);
      }
    } finally { setSavingConfig(false); }
  }

  async function handleGeneratePlan() {
    if (!data) return;
    setIsGenerating(true);
    setGenerateError("");
    setGenerateProgress("Salvando configuração...");

    try {
      // 1. Save config first
      const configRes = await fetch(`/api/onboarding/review/${id}/config`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });
      if (!configRes.ok) throw new Error("Falha ao salvar configuração");
      const plan = await configRes.json();

      setGenerateProgress("Pesquisando keywords e gerando plano com IA... isso pode levar 1-2 minutos");

      // 2. Generate plan
      await generatePlan.mutateAsync({
        planId: plan.id,
        onboardingId: data.id,
      });

      setGenerateProgress("Plano gerado com sucesso!");

      // 3. Redirect to plan page
      setTimeout(() => {
        router.push(`/plans/${plan.id}`);
      }, 1000);
    } catch (error) {
      console.error("Generate plan error:", error);
      setGenerateError(error instanceof Error ? error.message : "Erro ao gerar plano. Tente novamente.");
      setIsGenerating(false);
    }
  }

  if (loading) return (
    <div style={{ padding: "40px", textAlign: "center", color: "var(--text-secondary)" }}>Carregando...</div>
  );

  if (!data) return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <p style={{ color: "var(--text-secondary)" }}>Cliente não encontrado.</p>
      <button className="btn-ghost" onClick={() => router.push("/clients")} style={{ marginTop: "16px" }}>Voltar</button>
    </div>
  );

  const sum = config.pillarPages + config.clusterPages + config.serviceAreaPages + config.blogPages + config.faqPages;

  return (
    <div className="animate-fade-up">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
        <button onClick={() => router.push("/clients")} style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "10px", padding: "8px", cursor: "pointer", color: "var(--text-secondary)", display: "flex", transition: "all 0.2s" }}>
          <ArrowLeft size={18} />
        </button>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, color: "var(--text-primary)" }}>
            {data.clientName || "Cliente"}
          </h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "2px" }}>
            {data.clientEmail} · {data.status === "completed" ? "Completo" : "Pendente"} · {new Date(data.createdAt).toLocaleDateString("pt-BR")}
          </p>
        </div>
        <span style={{
          padding: "6px 14px", borderRadius: "99px", fontSize: "12px", fontWeight: 600,
          background: data.status === "completed" ? "rgba(0,255,136,0.1)" : "rgba(250,204,21,0.1)",
          color: data.status === "completed" ? "#00ff88" : "#facc15",
          border: `1px solid ${data.status === "completed" ? "rgba(0,255,136,0.2)" : "rgba(250,204,21,0.2)"}`,
        }}>
          {data.status === "completed" ? "Completo" : "Pendente"}
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "24px" }}>
        {/* Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {SECTIONS.map((s) => {
            const status = getSectionCompleteness(s.key, data);
            const isActive = activeSection === s.key;
            return (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "10px 14px", borderRadius: "10px", border: "none",
                  cursor: "pointer", textAlign: "left", transition: "all 0.2s",
                  fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: isActive ? 600 : 400,
                  background: isActive ? "var(--bg-glass-hover)" : "transparent",
                  color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                  borderLeft: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                }}
              >
                <span style={{ fontSize: "14px" }}>{s.icon}</span>
                <span style={{ flex: 1 }}>{s.label}</span>
                <span style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: status === "complete" ? "#00ff88" : status === "partial" ? "#facc15" : "#ef4444",
                }} />
              </button>
            );
          })}

          <div style={{ borderTop: "1px solid var(--border)", marginTop: "8px", paddingTop: "8px" }}>
            <button
              onClick={() => setActiveSection("production")}
              style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "10px 14px", borderRadius: "10px", border: "none",
                cursor: "pointer", textAlign: "left", transition: "all 0.2s",
                fontFamily: "var(--font-body)", fontSize: "13px",
                fontWeight: activeSection === "production" ? 600 : 400,
                background: activeSection === "production" ? "var(--bg-glass-hover)" : "transparent",
                color: activeSection === "production" ? "var(--accent)" : "var(--text-secondary)",
                borderLeft: activeSection === "production" ? "2px solid var(--accent)" : "2px solid transparent",
              }}
            >
              <span style={{ fontSize: "14px" }}>⚙️</span>
              <span>Config. Produção</span>
            </button>
          </div>
        </div>

        {/* Main content */}
        <div>
          {activeSection !== "production" ? (
            <div style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "20px" }}>
                {SECTIONS.find(s => s.key === activeSection)?.icon}{" "}
                {SECTIONS.find(s => s.key === activeSection)?.label}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {getSectionFields(activeSection, data).map((field) => {
                  const fieldNotes = notes.filter(n => n.fieldPath === field.fieldPath);
                  return (
                    <div key={field.fieldPath} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "14px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                            {field.label}
                          </span>
                          <p style={{ fontSize: "14px", color: field.value ? "var(--text-primary)" : "var(--text-muted)", marginTop: "4px", whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
                            {field.value || "Não preenchido"}
                          </p>
                        </div>
                        <button
                          onClick={() => { setAddingNote(addingNote === field.fieldPath ? null : field.fieldPath); setNoteText(""); }}
                          title="Adicionar nota"
                          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", color: addingNote === field.fieldPath ? "var(--accent)" : "var(--text-muted)", display: "flex", transition: "color 0.2s" }}
                        >
                          <MessageSquare size={14} />
                        </button>
                      </div>

                      {/* Existing notes */}
                      {fieldNotes.map(note => (
                        <div key={note.id} style={{ marginTop: "8px", padding: "10px 12px", background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.1)", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                          <p style={{ fontSize: "13px", color: "var(--accent)", lineHeight: 1.5, flex: 1 }}>{note.content}</p>
                          <button onClick={() => deleteNote(note.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", padding: "2px", display: "flex" }}>
                            <Trash2 size={12} />
                          </button>
                        </div>
                      ))}

                      {/* Add note inline */}
                      {addingNote === field.fieldPath && (
                        <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
                          <textarea
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            placeholder="Adicionar nota de enriquecimento..."
                            rows={2}
                            autoFocus
                            style={{ flex: 1, background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "10px 12px", fontSize: "13px", color: "var(--text-primary)", fontFamily: "var(--font-body)", resize: "none", outline: "none" }}
                          />
                          <button
                            onClick={() => saveNote(field.fieldPath)}
                            disabled={savingNote || !noteText.trim()}
                            style={{ background: "var(--accent)", color: "#000", border: "none", borderRadius: "8px", padding: "0 14px", cursor: "pointer", fontWeight: 600, fontSize: "12px", opacity: savingNote || !noteText.trim() ? 0.5 : 1 }}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Production Config */
            <div style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "20px" }}>
                ⚙️ Configuração de Produção
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Total */}
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "6px" }}>Total de páginas</label>
                  <input type="number" min={0} value={config.totalPages} onChange={(e) => setConfig(c => ({ ...c, totalPages: +e.target.value }))}
                    style={{ width: "120px", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "10px 14px", fontSize: "14px", color: "var(--text-primary)", fontFamily: "var(--font-body)", outline: "none" }} />
                </div>

                {/* Breakdown */}
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "10px" }}>Breakdown por tipo</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 100px", gap: "8px", alignItems: "center" }}>
                    {([
                      ["Pillar Pages (pilar)", "pillarPages"],
                      ["Cluster Pages", "clusterPages"],
                      ["Service Area Pages", "serviceAreaPages"],
                      ["Blog Posts", "blogPages"],
                      ["FAQ Pages", "faqPages"],
                    ] as const).map(([label, key]) => (
                      <div key={key} style={{ display: "contents" }}>
                        <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{label}</span>
                        <input type="number" min={0} value={config[key]}
                          onChange={(e) => setConfig(c => ({ ...c, [key]: +e.target.value }))}
                          style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "8px 12px", fontSize: "14px", color: "var(--text-primary)", fontFamily: "var(--font-body)", outline: "none", textAlign: "center" }} />
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: "12px", color: sum === config.totalPages ? "var(--accent)" : "#ef4444", marginTop: "8px" }}>
                    Soma: {sum} / {config.totalPages} {sum === config.totalPages ? "✓" : "(não bate com total)"}
                  </p>
                </div>

                {/* Cities */}
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "6px" }}>Cidades/Regiões alvo (para service area pages)</label>
                  <textarea value={config.targetCities} onChange={(e) => setConfig(c => ({ ...c, targetCities: e.target.value }))}
                    placeholder="Uma cidade por linha" rows={4}
                    style={{ width: "100%", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "10px 14px", fontSize: "13px", color: "var(--text-primary)", fontFamily: "var(--font-body)", resize: "none", outline: "none" }} />
                </div>

                {/* Priority clusters */}
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "6px" }}>Clusters prioritários</label>
                  <textarea value={config.priorityClusters} onChange={(e) => setConfig(c => ({ ...c, priorityClusters: e.target.value }))}
                    placeholder="Um tema/cluster por linha, em ordem de prioridade" rows={4}
                    style={{ width: "100%", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "10px 14px", fontSize: "13px", color: "var(--text-primary)", fontFamily: "var(--font-body)", resize: "none", outline: "none" }} />
                </div>

                {/* Schedule */}
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "6px" }}>Cronograma de publicação</label>
                  <select value={config.publishSchedule} onChange={(e) => setConfig(c => ({ ...c, publishSchedule: e.target.value }))}
                    style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "10px 14px", fontSize: "14px", color: "var(--text-primary)", fontFamily: "var(--font-body)", outline: "none" }}>
                    <option value="5/semana">5 páginas/semana</option>
                    <option value="10/semana">10 páginas/semana</option>
                    <option value="20/semana">20 páginas/semana</option>
                    <option value="50/semana">50 páginas/semana</option>
                  </select>
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                  <button onClick={saveConfig} disabled={savingConfig || isGenerating} className="btn-ghost" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {configSaved ? <Check size={16} /> : <Save size={16} />}
                    {savingConfig ? "Salvando..." : configSaved ? "Salvo!" : "Salvar Configuração"}
                  </button>
                  <button
                    onClick={handleGeneratePlan}
                    disabled={isGenerating || sum === 0 || sum !== config.totalPages}
                    className="btn-accent"
                    style={{
                      display: "flex", alignItems: "center", gap: "8px",
                      opacity: isGenerating || sum === 0 || sum !== config.totalPages ? 0.6 : 1,
                      cursor: isGenerating || sum === 0 || sum !== config.totalPages ? "not-allowed" : "pointer",
                    }}
                  >
                    {isGenerating ? <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> : <Rocket size={16} />}
                    {isGenerating ? "Gerando..." : "Gerar Plano de Conteúdo"}
                  </button>
                </div>
                {isGenerating && generateProgress && (
                  <div style={{ marginTop: "12px", padding: "12px 16px", background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.15)", borderRadius: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Loader2 size={14} style={{ color: "var(--accent)", animation: "spin 1s linear infinite" }} />
                      <span style={{ fontSize: "13px", color: "var(--accent)" }}>{generateProgress}</span>
                    </div>
                    <div style={{ marginTop: "8px", height: "3px", background: "var(--border)", borderRadius: "99px", overflow: "hidden" }}>
                      <div style={{ height: "100%", background: "var(--accent)", borderRadius: "99px", animation: "indeterminate 1.5s ease-in-out infinite", width: "40%" }} />
                    </div>
                  </div>
                )}
                {generateError && (
                  <p style={{ fontSize: "13px", color: "#ef4444", marginTop: "8px" }}>{generateError}</p>
                )}
                {!isGenerating && sum !== config.totalPages && sum > 0 && (
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "4px" }}>
                    Ajuste o breakdown para que a soma bata com o total antes de gerar.
                  </p>
                )}
                <style>{`
                  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                  @keyframes indeterminate { 0% { margin-left: 0%; } 50% { margin-left: 60%; } 100% { margin-left: 0%; } }
                `}</style>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
