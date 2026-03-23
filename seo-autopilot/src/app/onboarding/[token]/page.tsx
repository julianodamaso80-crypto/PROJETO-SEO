"use client";

import { useEffect, useState, useRef, useCallback, type DragEvent, type ChangeEvent } from "react";
import { useParams } from "next/navigation";

// ─── Constants ──────────────────────────────────────────────────

const steps = ["Negócio", "Público", "Digital", "Voz", "Objetivos", "Referências", "Acesso"];

const COLOR_PALETTES = [
  { id: "professional-blue", name: "Profissional", description: "Confiança e seriedade", primary: "#1e40af", secondary: "#3b82f6", accent: "#60a5fa", background: "#f8fafc", text: "#1e293b" },
  { id: "elegant-gold", name: "Elegante", description: "Sofisticação e premium", primary: "#92400e", secondary: "#d97706", accent: "#fbbf24", background: "#fffbeb", text: "#1c1917" },
  { id: "modern-green", name: "Moderno", description: "Crescimento e inovação", primary: "#065f46", secondary: "#10b981", accent: "#34d399", background: "#f0fdf4", text: "#1e293b" },
  { id: "medical-clean", name: "Saúde/Médico", description: "Limpeza e confiança", primary: "#0e7490", secondary: "#06b6d4", accent: "#22d3ee", background: "#f0f9ff", text: "#0f172a" },
  { id: "legal-dark", name: "Jurídico", description: "Autoridade e tradição", primary: "#1e1b4b", secondary: "#4338ca", accent: "#818cf8", background: "#fafaf9", text: "#1c1917" },
  { id: "tech-purple", name: "Tecnologia", description: "Inovação e futuro", primary: "#6b21a8", secondary: "#a855f7", accent: "#c084fc", background: "#faf5ff", text: "#1e293b" },
  { id: "warm-orange", name: "Acolhedor", description: "Proximidade e energia", primary: "#c2410c", secondary: "#f97316", accent: "#fb923c", background: "#fff7ed", text: "#1c1917" },
  { id: "minimal-mono", name: "Minimalista", description: "Simplicidade e foco", primary: "#18181b", secondary: "#52525b", accent: "#a1a1aa", background: "#ffffff", text: "#18181b" },
];

const NICHE_QUESTIONS: Record<string, { field: string; label: string; type: string; step: number; required: boolean }[]> = {
  advocacia: [
    { field: "oabNumber", label: "Número da OAB", type: "text", step: 0, required: true },
    { field: "legalSpecialties", label: "Áreas de atuação (criminal, família, trabalhista...)", type: "textarea", step: 1, required: true },
    { field: "courtRegions", label: "Comarcas/Tribunais onde atua", type: "textarea", step: 1, required: false },
    { field: "urgencyService", label: "Oferece atendimento de urgência/plantão?", type: "boolean", step: 1, required: false },
    { field: "casesHandled", label: "Quantos casos já atendeu (aproximado)?", type: "text", step: 3, required: false },
  ],
  odontologia: [
    { field: "croNumber", label: "Número do CRO", type: "text", step: 0, required: true },
    { field: "dentalSpecialties", label: "Especialidades (implante, ortodontia, estética...)", type: "textarea", step: 1, required: true },
    { field: "equipmentHighlights", label: "Equipamentos diferenciados (scanner 3D, laser...)", type: "textarea", step: 1, required: false },
    { field: "insurancesAccepted", label: "Aceita convênios? Quais?", type: "textarea", step: 1, required: false },
    { field: "beforeAfterPhotos", label: "Tem fotos de antes/depois?", type: "boolean", step: 3, required: false },
  ],
  contabilidade: [
    { field: "crcNumber", label: "Número do CRC", type: "text", step: 0, required: true },
    { field: "accountingSpecialties", label: "Especialidades (MEI, Lucro Real, Terceiro Setor...)", type: "textarea", step: 1, required: true },
    { field: "softwareUsed", label: "Softwares que utiliza", type: "textarea", step: 2, required: false },
  ],
  medicina: [
    { field: "crmNumber", label: "Número do CRM", type: "text", step: 0, required: true },
    { field: "medicalSpecialty", label: "Especialidade médica", type: "text", step: 1, required: true },
    { field: "hospitalAffiliations", label: "Hospitais/clínicas afiliados", type: "textarea", step: 1, required: false },
    { field: "procedures", label: "Principais procedimentos", type: "textarea", step: 1, required: true },
    { field: "insurancesAccepted", label: "Aceita convênios? Quais?", type: "textarea", step: 1, required: false },
  ],
  imobiliaria: [
    { field: "creciNumber", label: "Número do CRECI", type: "text", step: 0, required: true },
    { field: "propertyTypes", label: "Tipos de imóvel (residencial, comercial, terrenos)", type: "textarea", step: 1, required: true },
    { field: "neighborhoods", label: "Bairros/regiões de atuação forte", type: "textarea", step: 1, required: true },
  ],
  construcao: [
    { field: "creaNumber", label: "Número do CREA/CAU", type: "text", step: 0, required: false },
    { field: "constructionTypes", label: "Tipos de obra (residencial, comercial, reforma)", type: "textarea", step: 1, required: true },
    { field: "certifications", label: "Certificações (ISO, PBQP-H...)", type: "textarea", step: 3, required: false },
  ],
};

const DEFAULT_NICHE_QUESTIONS = [
  { field: "industryLicense", label: "Registro profissional (se aplicável)", type: "text", step: 0, required: false },
  { field: "specializations", label: "Especializações ou certificações", type: "textarea", step: 1, required: false },
];

// ─── Types ──────────────────────────────────────────────────────

interface FormData {
  // Step 1
  clientName: string; clientEmail: string; businessName: string; businessDescription: string;
  b2bOrB2c: string; yearsInBusiness: string; clientsServed: string;
  segment: string; subNiche: string; mainCity: string; state: string; serviceAreas: string;
  hasPhysicalLocation: boolean; fullAddress: string; businessHours: string;
  // Step 2
  mainProduct: string; targetAudience: string; highestRevenueService: string;
  clientProblem: string; clientQuestions: string; averageTicket: string; competitors: string;
  // Step 3
  hasSite: boolean; siteUrl: string; hasGoogleBusinessProfile: boolean; googleBusinessUrl: string;
  socialMediaUrls: string; currentSeoInvestment: string; hasBlog: boolean; blogPostCount: string;
  usesWordPress: boolean; wordPressVersion: string; hasWpAdminAccess: boolean;
  hasSearchConsole: boolean; hasGoogleAnalytics: boolean;
  // Step 4
  tone: string; styleReference: string; hasCaseStudies: boolean; caseStudiesDetails: string;
  hasTestimonials: boolean; hasTeamPhotos: boolean; hasOwnData: boolean; ownDataDetails: string;
  sensitiveTopics: string; certifications: string;
  // Step 4: Colors + Images
  colorPaletteId: string; colorPrimary: string; colorSecondary: string; colorAccent: string;
  logoUrl: string; teamPhotos: { url: string; filename: string }[];
  // Step 5
  contentGoal: string; priorityRegions: string; priorityServices: string;
  timeline: string;
  // Step 6
  competitorSitesAdmired: string; referenceSites: string; contentConsumption: string;
  desiredKeywords: string; additionalNotes: string;
  referenceImages: { url: string; filename: string }[];
  // Step 7
  wpAdminUrl: string; wpUsername: string; wpAppPassword: string;
  gscAuthorizedEmail: string; gaAuthorizedEmail: string;
  domainRegistrar: string; hostingProvider: string;
  // Niche-specific
  nicheSpecificData: Record<string, string | boolean>;
  // Legacy compat
  location: string; differentials: string; contactMethod: string; seasonality: string; extraInfo: string;
}

const initialData: FormData = {
  clientName: "", clientEmail: "", businessName: "", businessDescription: "",
  b2bOrB2c: "", yearsInBusiness: "", clientsServed: "",
  segment: "", subNiche: "", mainCity: "", state: "", serviceAreas: "",
  hasPhysicalLocation: false, fullAddress: "", businessHours: "",
  mainProduct: "", targetAudience: "", highestRevenueService: "",
  clientProblem: "", clientQuestions: "", averageTicket: "", competitors: "",
  hasSite: false, siteUrl: "", hasGoogleBusinessProfile: false, googleBusinessUrl: "",
  socialMediaUrls: "", currentSeoInvestment: "", hasBlog: false, blogPostCount: "",
  usesWordPress: false, wordPressVersion: "", hasWpAdminAccess: false,
  hasSearchConsole: false, hasGoogleAnalytics: false,
  tone: "", styleReference: "", hasCaseStudies: false, caseStudiesDetails: "",
  hasTestimonials: false, hasTeamPhotos: false, hasOwnData: false, ownDataDetails: "",
  sensitiveTopics: "", certifications: "",
  colorPaletteId: "", colorPrimary: "", colorSecondary: "", colorAccent: "",
  logoUrl: "", teamPhotos: [], referenceImages: [],
  contentGoal: "", priorityRegions: "", priorityServices: "", timeline: "",
  competitorSitesAdmired: "", referenceSites: "", contentConsumption: "",
  desiredKeywords: "", additionalNotes: "",
  wpAdminUrl: "", wpUsername: "", wpAppPassword: "",
  gscAuthorizedEmail: "", gaAuthorizedEmail: "", domainRegistrar: "", hostingProvider: "",
  nicheSpecificData: {},
  location: "", differentials: "", contactMethod: "", seasonality: "", extraInfo: "",
};

// ─── Main Component ─────────────────────────────────────────────

export default function OnboardingPage() {
  const { token } = useParams<{ token: string }>();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialData);
  const [status, setStatus] = useState<"loading" | "form" | "completed" | "not_found" | "already_completed">("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch(`/api/onboarding/${token}`)
      .then((res) => { if (!res.ok) throw new Error("not_found"); return res.json(); })
      .then((data) => { setStatus(data.status === "completed" ? "already_completed" : "form"); })
      .catch(() => setStatus("not_found"));
  }, [token]);

  function update(field: keyof FormData, value: string | boolean | { url: string; filename: string }[] | Record<string, string | boolean>) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }
  function updateNiche(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, nicheSpecificData: { ...prev.nicheSpecificData, [field]: value } }));
  }
  function goNext() { setStep((s) => Math.min(s + 1, steps.length - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function goPrev() { setStep((s) => Math.max(s - 1, 0)); window.scrollTo({ top: 0, behavior: "smooth" }); }

  const [submitError, setSubmitError] = useState("");

  async function handleSubmit() {
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch(`/api/onboarding/${token}`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("completed");
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data.error || `Erro ao enviar (${res.status}). Tente novamente.`);
      }
    } catch {
      setSubmitError("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally { setSubmitting(false); }
  }

  // Get niche questions for current step
  const segmentKey = form.segment.toLowerCase().trim();
  const nicheQuestions = NICHE_QUESTIONS[segmentKey] || DEFAULT_NICHE_QUESTIONS;
  const nicheQuestionsForStep = nicheQuestions.filter((q) => q.step === step);

  if (status === "loading") return <Shell><p style={{ textAlign: "center", color: "#94a3b8", padding: "80px 0" }}>Carregando...</p></Shell>;
  if (status === "not_found") return (
    <Shell>
      <div style={{ textAlign: "center", padding: "80px 0" }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "22px", fontWeight: 700, color: "#1e293b" }}>Link inválido</h2>
        <p style={{ color: "#94a3b8", marginTop: "8px" }}>Este link de onboarding não existe ou expirou.</p>
      </div>
    </Shell>
  );
  if (status === "already_completed" || status === "completed") return (
    <Shell>
      <div style={{ textAlign: "center", padding: "80px 0" }}>
        <div style={{ margin: "0 auto 24px", width: "80px", height: "80px" }}>
          <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#00c96b" strokeWidth="3" strokeDasharray="283" strokeDashoffset="0" style={{ animation: "drawCircle 0.8s ease-out forwards" }} />
            <polyline points="30,52 44,66 70,38" fill="none" stroke="#00c96b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="100" strokeDashoffset="0" style={{ animation: "drawCheck 0.5s ease-out 0.5s forwards" }} />
          </svg>
        </div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 700, color: "#1e293b" }}>Respostas enviadas!</h2>
        <p style={{ color: "#94a3b8", marginTop: "12px", maxWidth: "400px", margin: "12px auto 0", lineHeight: 1.6 }}>
          Nossa equipe vai entrar em contato em breve para dar início ao seu projeto de SEO.
        </p>
      </div>
    </Shell>
  );

  return (
    <Shell>
      {/* Progress bar */}
      <div style={{ position: "relative", marginBottom: "36px" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#e5e7eb", borderRadius: "99px" }}>
          <div style={{ height: "3px", borderRadius: "99px", background: "#00c96b", transition: "width 0.4s cubic-bezier(0.23, 1, 0.32, 1)", width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
          {steps.map((label, i) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "13px", fontWeight: 600, transition: "all 0.3s ease",
                ...(i < step ? { background: "#00c96b", color: "#fff" } : i === step ? { background: "#00c96b", color: "#fff", boxShadow: "0 0 0 4px rgba(0,201,107,0.2)" } : { background: "#e5e7eb", color: "#94a3b8" }),
              }}>
                {i < step ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> : i + 1}
              </div>
              <span style={{ fontSize: "11px", fontWeight: i <= step ? 600 : 400, color: i <= step ? "#1e293b" : "#94a3b8" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div key={step} style={{ animation: "slideStep 0.35s cubic-bezier(0.23, 1, 0.32, 1) forwards" }}>
        {step === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <StepTitle>Sobre o Negócio</StepTitle>
            <Input label="Seu nome completo *" value={form.clientName} onChange={(v) => update("clientName", v)} />
            <Input label="Seu email *" type="email" value={form.clientEmail} onChange={(v) => update("clientEmail", v)} />
            <Input label="Nome da empresa *" value={form.businessName} onChange={(v) => update("businessName", v)} />
            <Textarea label="Descreva seu negócio em 2 linhas *" value={form.businessDescription} onChange={(v) => update("businessDescription", v)} />
            <Select label="Segmento/nicho *" value={form.segment} onChange={(v) => update("segment", v)} options={[
              { value: "", label: "Selecione..." },
              { value: "advocacia", label: "Advocacia / Direito" },
              { value: "odontologia", label: "Odontologia" },
              { value: "medicina", label: "Medicina / Saúde" },
              { value: "contabilidade", label: "Contabilidade" },
              { value: "imobiliaria", label: "Imobiliária" },
              { value: "construcao", label: "Construção / Engenharia" },
              { value: "marketing", label: "Marketing / Comunicação" },
              { value: "tecnologia", label: "Tecnologia" },
              { value: "educacao", label: "Educação" },
              { value: "beleza", label: "Beleza / Estética" },
              { value: "restaurante", label: "Restaurante / Alimentação" },
              { value: "outro", label: "Outro" },
            ]} />
            <Input label="Especialidade (ex: direito criminal, implantes)" value={form.subNiche} onChange={(v) => update("subNiche", v)} />
            <Select label="Você atende empresas ou pessoas físicas?" value={form.b2bOrB2c} onChange={(v) => update("b2bOrB2c", v)} options={[
              { value: "", label: "Selecione..." }, { value: "B2C", label: "Pessoas físicas (B2C)" }, { value: "B2B", label: "Empresas (B2B)" }, { value: "Ambos", label: "Os dois" },
            ]} />
            <Select label="Há quantos anos está no mercado?" value={form.yearsInBusiness} onChange={(v) => update("yearsInBusiness", v)} options={[
              { value: "", label: "Selecione..." }, { value: "Menos de 1 ano", label: "Menos de 1 ano" }, { value: "1 a 3 anos", label: "1 a 3 anos" }, { value: "3 a 5 anos", label: "3 a 5 anos" }, { value: "Mais de 5 anos", label: "Mais de 5 anos" },
            ]} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <Input label="Cidade principal *" value={form.mainCity} onChange={(v) => update("mainCity", v)} />
              <Input label="Estado *" value={form.state} onChange={(v) => update("state", v)} />
            </div>
            <Textarea label="Cidades/bairros que atende (separados por vírgula)" value={form.serviceAreas} onChange={(v) => update("serviceAreas", v)} placeholder="Ex: Curitiba, São José dos Pinhais, Colombo" />
            <Toggle label="Tem escritório/loja física?" value={form.hasPhysicalLocation} onChange={(v) => { update("hasPhysicalLocation", v); if (!v) update("fullAddress", ""); }} />
            {form.hasPhysicalLocation && <Input label="Endereço completo" value={form.fullAddress} onChange={(v) => update("fullAddress", v)} placeholder="Rua, número, bairro, CEP" />}
            <Input label="Horário de funcionamento" value={form.businessHours} onChange={(v) => update("businessHours", v)} placeholder="Ex: Seg-Sex 08:00-18:00" />
            <NicheQuestions questions={nicheQuestionsForStep} data={form.nicheSpecificData} onUpdate={updateNiche} segment={form.segment} />
          </div>
        )}

        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <StepTitle>Público e Mercado</StepTitle>
            <Textarea label="Principais serviços ou produtos (um por linha) *" value={form.mainProduct} onChange={(v) => update("mainProduct", v)} placeholder={"Ex:\nConsultoria de marketing\nGestão de redes sociais"} rows={5} />
            <Input label="Qual serviço gera mais receita?" value={form.highestRevenueService} onChange={(v) => update("highestRevenueService", v)} />
            <Textarea label="Quem é seu cliente ideal? *" value={form.targetAudience} onChange={(v) => update("targetAudience", v)} />
            <Textarea label="Problemas dos clientes antes de te procurar *" value={form.clientProblem} onChange={(v) => update("clientProblem", v)} />
            <Textarea label="5 perguntas mais frequentes antes de contratar *" value={form.clientQuestions} onChange={(v) => update("clientQuestions", v)} placeholder="Uma por linha" rows={5} />
            <Input label="Ticket médio dos serviços" value={form.averageTicket} onChange={(v) => update("averageTicket", v)} placeholder="Ex: R$500 - R$2.000" />
            <Textarea label="Concorrentes diretos (nomes e URLs)" value={form.competitors} onChange={(v) => update("competitors", v)} placeholder="Um por linha" />
            <NicheQuestions questions={nicheQuestionsForStep} data={form.nicheSpecificData} onUpdate={updateNiche} segment={form.segment} />
          </div>
        )}

        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <StepTitle>Presença Digital</StepTitle>
            <Toggle label="Você já tem um site?" value={form.hasSite} onChange={(v) => { update("hasSite", v); if (!v) update("siteUrl", ""); }} />
            {form.hasSite && <Input label="URL do site" value={form.siteUrl} onChange={(v) => update("siteUrl", v)} placeholder="https://..." />}
            <Toggle label="Tem Google Meu Negócio?" value={form.hasGoogleBusinessProfile} onChange={(v) => { update("hasGoogleBusinessProfile", v); if (!v) update("googleBusinessUrl", ""); }} />
            {form.hasGoogleBusinessProfile && <Input label="URL do perfil" value={form.googleBusinessUrl} onChange={(v) => update("googleBusinessUrl", v)} />}
            <Textarea label="Redes sociais ativas (URLs)" value={form.socialMediaUrls} onChange={(v) => update("socialMediaUrls", v)} placeholder="Uma URL por linha" />
            <Input label="Já investe em SEO ou tráfego pago? Quanto/mês?" value={form.currentSeoInvestment} onChange={(v) => update("currentSeoInvestment", v)} />
            <Toggle label="Tem blog ativo?" value={form.hasBlog} onChange={(v) => { update("hasBlog", v); if (!v) update("blogPostCount", ""); }} />
            {form.hasBlog && <Input label="Quantos posts aproximadamente?" value={form.blogPostCount} onChange={(v) => update("blogPostCount", v)} />}
            <Toggle label="Usa WordPress?" value={form.usesWordPress} onChange={(v) => update("usesWordPress", v)} />
            {form.usesWordPress && (
              <>
                <Input label="Versão do WordPress" value={form.wordPressVersion} onChange={(v) => update("wordPressVersion", v)} placeholder="Ex: 6.4" />
                <Toggle label="Tem acesso admin ao WordPress?" value={form.hasWpAdminAccess} onChange={(v) => update("hasWpAdminAccess", v)} />
              </>
            )}
            <Toggle label="Google Search Console configurado?" value={form.hasSearchConsole} onChange={(v) => update("hasSearchConsole", v)} />
            <Toggle label="Google Analytics configurado?" value={form.hasGoogleAnalytics} onChange={(v) => update("hasGoogleAnalytics", v)} />
            <NicheQuestions questions={nicheQuestionsForStep} data={form.nicheSpecificData} onUpdate={updateNiche} segment={form.segment} />
          </div>
        )}

        {step === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <StepTitle>Conteúdo e Voz da Marca</StepTitle>
            <Select label="Tom de voz da marca *" value={form.tone} onChange={(v) => update("tone", v)} options={[
              { value: "", label: "Selecione..." }, { value: "Profissional e formal", label: "Profissional e formal" },
              { value: "Descontraído e próximo", label: "Descontraído e próximo" }, { value: "Técnico e especialista", label: "Técnico e especialista" },
              { value: "Profissional-amigável", label: "Profissional e amigável" }, { value: "Inspiracional e motivador", label: "Inspiracional e motivador" },
            ]} />
            <Textarea label="Exemplo de texto ou site que gosta do estilo" value={form.styleReference} onChange={(v) => update("styleReference", v)} placeholder="Cole uma URL ou descreva o estilo" />

            {/* Color Palette Selector */}
            <ColorPaletteSelector
              selectedId={form.colorPaletteId}
              customPrimary={form.colorPrimary}
              customSecondary={form.colorSecondary}
              customAccent={form.colorAccent}
              onSelectPalette={(id) => {
                const palette = COLOR_PALETTES.find((p) => p.id === id);
                if (palette) {
                  update("colorPaletteId", id);
                  update("colorPrimary", palette.primary);
                  update("colorSecondary", palette.secondary);
                  update("colorAccent", palette.accent);
                }
              }}
              onCustomChange={(field, value) => {
                update("colorPaletteId", "custom");
                update(field as keyof FormData, value);
              }}
            />

            {/* Logo Upload */}
            <ImageUpload
              label="Logo da empresa"
              accept="image/png,image/jpeg,image/svg+xml,image/webp"
              value={form.logoUrl ? [{ url: form.logoUrl, filename: "logo" }] : []}
              maxFiles={1}
              onChange={(files) => update("logoUrl", files[0]?.url || "")}
              category="logo"
            />

            {/* Team Photos */}
            <ImageUpload
              label="Fotos do escritório/equipe (até 5)"
              accept="image/png,image/jpeg,image/webp"
              value={form.teamPhotos}
              maxFiles={5}
              onChange={(files) => update("teamPhotos", files)}
              category="team"
            />

            <Toggle label="Tem cases de sucesso?" value={form.hasCaseStudies} onChange={(v) => { update("hasCaseStudies", v); if (!v) update("caseStudiesDetails", ""); }} />
            {form.hasCaseStudies && <Textarea label="Descreva brevemente seus cases" value={form.caseStudiesDetails} onChange={(v) => update("caseStudiesDetails", v)} />}
            <Toggle label="Tem depoimentos de clientes?" value={form.hasTestimonials} onChange={(v) => update("hasTestimonials", v)} />
            <Toggle label="Tem dados ou estatísticas próprias?" value={form.hasOwnData} onChange={(v) => { update("hasOwnData", v); if (!v) update("ownDataDetails", ""); }} />
            {form.hasOwnData && <Textarea label="Descreva os dados" value={form.ownDataDetails} onChange={(v) => update("ownDataDetails", v)} placeholder="Ex: 95% dos clientes recomendam" />}
            <Textarea label="Temas que NÃO devem ser abordados" value={form.sensitiveTopics} onChange={(v) => update("sensitiveTopics", v)} placeholder="Ex: concorrentes específicos, preços" />
            <Input label="Credenciais profissionais (OAB, CRM, etc.)" value={form.certifications} onChange={(v) => update("certifications", v)} />
            <NicheQuestions questions={nicheQuestionsForStep} data={form.nicheSpecificData} onUpdate={updateNiche} segment={form.segment} />
          </div>
        )}

        {step === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <StepTitle>Objetivos</StepTitle>
            <Select label="Objetivo principal *" value={form.contentGoal} onChange={(v) => update("contentGoal", v)} options={[
              { value: "", label: "Selecione..." }, { value: "Gerar leads", label: "Gerar mais leads/contatos" },
              { value: "Mais ligações", label: "Receber mais ligações" }, { value: "Vendas online", label: "Vender produtos online" },
              { value: "Autoridade", label: "Construir autoridade" }, { value: "Branding", label: "Fortalecer a marca" },
            ]} />
            <Textarea label="Regiões prioritárias para aparecer no Google" value={form.priorityRegions} onChange={(v) => update("priorityRegions", v)} placeholder="Ex: Curitiba centro, Batel" />
            <Textarea label="Serviços prioritários para divulgar" value={form.priorityServices} onChange={(v) => update("priorityServices", v)} placeholder="Ex: Implante dentário, lente de contato" />
            <Select label="Expectativa de timeline *" value={form.timeline} onChange={(v) => update("timeline", v)} options={[
              { value: "", label: "Selecione..." }, { value: "Curto prazo (3 meses)", label: "Curto prazo (3 meses)" },
              { value: "Médio prazo (6 meses)", label: "Médio prazo (6 meses)" }, { value: "Longo prazo (12+ meses)", label: "Longo prazo (12+ meses)" },
            ]} />
          </div>
        )}

        {step === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <StepTitle>Referências e Inspiração</StepTitle>
            <Textarea label="3 sites de concorrentes que admira (URLs)" value={form.competitorSitesAdmired} onChange={(v) => update("competitorSitesAdmired", v)} placeholder="Uma URL por linha" rows={4} />
            <Textarea label="3 sites de referência (mesmo de outro segmento)" value={form.referenceSites} onChange={(v) => update("referenceSites", v)} placeholder="Uma URL por linha" rows={4} />
            <Select label="Que tipo de conteúdo consome?" value={form.contentConsumption} onChange={(v) => update("contentConsumption", v)} options={[
              { value: "", label: "Selecione..." }, { value: "Artigos e blogs", label: "Artigos e blogs" },
              { value: "Vídeos no YouTube", label: "Vídeos no YouTube" }, { value: "Podcasts", label: "Podcasts" },
              { value: "Redes sociais", label: "Redes sociais" }, { value: "Tudo um pouco", label: "Um pouco de tudo" },
            ]} />
            <Textarea label="Palavras-chave que gostaria de rankear" value={form.desiredKeywords} onChange={(v) => update("desiredKeywords", v)} placeholder="Uma por linha" rows={4} />

            {/* Reference Images */}
            <ImageUpload
              label="Imagens de referência (até 5)"
              accept="image/png,image/jpeg,image/webp"
              value={form.referenceImages}
              maxFiles={5}
              onChange={(files) => update("referenceImages", files)}
              category="reference"
            />

            <Textarea label="Algo mais que quer nos contar?" value={form.additionalNotes} onChange={(v) => update("additionalNotes", v)} />
          </div>
        )}

        {step === 6 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <StepTitle>Acesso Técnico</StepTitle>
            <div style={{ padding: "14px 16px", background: "rgba(0,201,107,0.06)", border: "1px solid rgba(0,201,107,0.15)", borderRadius: "12px", display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13px", color: "#475569", lineHeight: 1.5 }}>
              <span style={{ fontSize: "18px", flexShrink: 0 }}>&#128274;</span>
              <span>Estas informações são <strong>opcionais</strong> e armazenadas com segurança. Só serão usadas para conectar e publicar conteúdo no seu site.</span>
            </div>
            <Input label="URL do painel WordPress" value={form.wpAdminUrl} onChange={(v) => update("wpAdminUrl", v)} placeholder="https://seusite.com.br/wp-admin" />
            <Input label="Usuário WordPress" value={form.wpUsername} onChange={(v) => update("wpUsername", v)} />
            <Input label="Application Password do WordPress" type="password" value={form.wpAppPassword} onChange={(v) => update("wpAppPassword", v)} placeholder="Senhas de Aplicação no perfil do WP" />
            <Input label="Email com acesso ao Search Console" type="email" value={form.gscAuthorizedEmail} onChange={(v) => update("gscAuthorizedEmail", v)} />
            <Input label="Email com acesso ao Analytics" type="email" value={form.gaAuthorizedEmail} onChange={(v) => update("gaAuthorizedEmail", v)} />
            <Input label="Onde o domínio está registrado?" value={form.domainRegistrar} onChange={(v) => update("domainRegistrar", v)} placeholder="Ex: Registro.br, GoDaddy" />
            <Input label="Empresa de hospedagem" value={form.hostingProvider} onChange={(v) => update("hostingProvider", v)} placeholder="Ex: Hostinger, Locaweb" />
          </div>
        )}
      </div>

      {/* Error message */}
      {submitError && (
        <div style={{ marginTop: "16px", padding: "12px 16px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "8px", color: "#dc2626", fontSize: "14px" }}>
          {submitError}
        </div>
      )}

      {/* Navigation */}
      <div style={{ marginTop: "36px", display: "flex", justifyContent: "space-between" }}>
        {step > 0 ? <button onClick={goPrev} className="ob-btn-ghost">Anterior</button> : <div />}
        {step < steps.length - 1 ? (
          <button onClick={goNext} className="ob-btn-primary">Próximo</button>
        ) : (
          <button onClick={handleSubmit} disabled={submitting} className="ob-btn-primary" style={{ opacity: submitting ? 0.6 : 1 }}>
            {submitting ? "Enviando..." : "Enviar Respostas"}
          </button>
        )}
      </div>

      <style>{`
        .ob-btn-primary { background:#00c96b;color:#fff;font-family:'Syne',sans-serif;font-weight:600;font-size:14px;padding:12px 28px;border-radius:99px;border:none;cursor:pointer;transition:all .2s ease }
        .ob-btn-primary:hover { background:#00b35e;transform:translateY(-1px);box-shadow:0 4px 16px rgba(0,201,107,.3) }
        .ob-btn-primary:disabled { cursor:not-allowed;transform:none }
        .ob-btn-ghost { background:transparent;color:#64748b;font-family:'DM Sans',sans-serif;font-size:14px;padding:12px 28px;border-radius:99px;border:1px solid #e5e7eb;cursor:pointer;transition:all .2s ease }
        .ob-btn-ghost:hover { border-color:#cbd5e1;color:#1e293b;background:#f8fafc }
        .ob-input { width:100%;border:1.5px solid #e5e7eb;border-radius:12px;background:#fff;padding:12px 16px;font-family:'DM Sans',sans-serif;font-size:14px;color:#1e293b;outline:none;transition:all .2s ease }
        .ob-input:focus { border-color:#00c96b;box-shadow:0 0 0 3px rgba(0,201,107,.12) }
        .ob-input::placeholder { color:#94a3b8 }
        .ob-select { width:100%;border:1.5px solid #e5e7eb;border-radius:12px;background:#fff;padding:12px 16px;font-family:'DM Sans',sans-serif;font-size:14px;color:#1e293b;outline:none;transition:all .2s ease;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%2394a3b8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 16px center;padding-right:40px }
        .ob-select:focus { border-color:#00c96b;box-shadow:0 0 0 3px rgba(0,201,107,.12) }
        .ob-textarea { width:100%;border:1.5px solid #e5e7eb;border-radius:12px;background:#fff;padding:12px 16px;font-family:'DM Sans',sans-serif;font-size:14px;color:#1e293b;outline:none;transition:all .2s ease;resize:none }
        .ob-textarea:focus { border-color:#00c96b;box-shadow:0 0 0 3px rgba(0,201,107,.12) }
        .ob-textarea::placeholder { color:#94a3b8 }
        @media(max-width:640px){ .ob-shell-card{padding:24px 20px!important} .ob-shell-container{padding:16px!important} .ob-color-grid{grid-template-columns:repeat(2,1fr)!important} }
      `}</style>
    </Shell>
  );
}

// ─── Color Palette Selector ─────────────────────────────────────

function ColorPaletteSelector({ selectedId, customPrimary, customSecondary, customAccent, onSelectPalette, onCustomChange }: {
  selectedId: string;
  customPrimary: string;
  customSecondary: string;
  customAccent: string;
  onSelectPalette: (id: string) => void;
  onCustomChange: (field: string, value: string) => void;
}) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#475569", marginBottom: "10px" }}>
        Paleta de cores do site
      </label>
      <div className="ob-color-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "16px" }}>
        {COLOR_PALETTES.map((palette) => (
          <button
            key={palette.id}
            type="button"
            onClick={() => onSelectPalette(palette.id)}
            style={{
              background: "#fff",
              border: selectedId === palette.id ? "2px solid #00c96b" : "1.5px solid #e5e7eb",
              borderRadius: "12px",
              padding: "12px",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s ease",
              boxShadow: selectedId === palette.id ? "0 0 0 3px rgba(0,201,107,0.12)" : "none",
            }}
          >
            <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
              {[palette.primary, palette.secondary, palette.accent, palette.background].map((color, i) => (
                <div key={i} style={{ width: "20px", height: "20px", borderRadius: "50%", background: color, border: "1px solid #e5e7eb" }} />
              ))}
            </div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#1e293b" }}>{palette.name}</div>
            <div style={{ fontSize: "11px", color: "#94a3b8" }}>{palette.description}</div>
          </button>
        ))}
      </div>
      <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "14px" }}>
        <label style={{ display: "block", fontSize: "12px", color: "#94a3b8", marginBottom: "10px" }}>Ou defina cores personalizadas:</label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          <ColorInput label="Primária" value={customPrimary} onChange={(v) => onCustomChange("colorPrimary", v)} />
          <ColorInput label="Secundária" value={customSecondary} onChange={(v) => onCustomChange("colorSecondary", v)} />
          <ColorInput label="Destaque" value={customAccent} onChange={(v) => onCustomChange("colorAccent", v)} />
        </div>
      </div>
    </div>
  );
}

function ColorInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "11px", color: "#94a3b8", marginBottom: "4px" }}>{label}</label>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <input
          type="color"
          value={value || "#000000"}
          onChange={(e) => onChange(e.target.value)}
          style={{ width: "32px", height: "32px", border: "1.5px solid #e5e7eb", borderRadius: "8px", cursor: "pointer", padding: "2px", background: "#fff" }}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#000000"
          className="ob-input"
          style={{ flex: 1, padding: "8px 10px", fontSize: "12px" }}
        />
      </div>
    </div>
  );
}

// ─── Image Upload ───────────────────────────────────────────────

function ImageUpload({ label, accept, value, maxFiles, onChange, category }: {
  label: string;
  accept: string;
  value: { url: string; filename: string }[];
  maxFiles: number;
  onChange: (files: { url: string; filename: string }[]) => void;
  category: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(async (fileList: FileList) => {
    const remaining = maxFiles - value.length;
    if (remaining <= 0) return;

    const filesToUpload = Array.from(fileList).slice(0, remaining);
    setUploading(true);

    const newFiles: { url: string; filename: string }[] = [];
    for (const file of filesToUpload) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("category", category);

      try {
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        if (res.ok) {
          const data = await res.json();
          newFiles.push({ url: data.url, filename: data.filename });
        }
      } catch { /* skip failed */ }
    }

    onChange([...value, ...newFiles]);
    setUploading(false);
  }, [value, maxFiles, onChange, category]);

  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const removeFile = useCallback((index: number) => {
    onChange(value.filter((_, i) => i !== index));
  }, [value, onChange]);

  return (
    <div>
      <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#475569", marginBottom: "8px" }}>{label}</label>
      {/* Previews */}
      {value.length > 0 && (
        <div style={{ display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
          {value.map((file, i) => (
            <div key={i} style={{ position: "relative", width: "80px", height: "80px", borderRadius: "10px", overflow: "hidden", border: "1.5px solid #e5e7eb" }}>
              <img src={file.url} alt={file.filename} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <button
                type="button"
                onClick={() => removeFile(i)}
                style={{
                  position: "absolute", top: "2px", right: "2px", width: "20px", height: "20px",
                  borderRadius: "50%", background: "rgba(0,0,0,0.6)", color: "#fff", border: "none",
                  cursor: "pointer", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Drop zone */}
      {value.length < maxFiles && (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          style={{
            border: `2px dashed ${dragOver ? "#00c96b" : "#e5e7eb"}`,
            borderRadius: "12px",
            padding: "24px",
            textAlign: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            background: dragOver ? "rgba(0,201,107,0.04)" : "#fafafa",
          }}
        >
          <div style={{ fontSize: "24px", marginBottom: "6px" }}>{uploading ? "..." : "\uD83D\uDCC1"}</div>
          <div style={{ fontSize: "13px", color: "#64748b" }}>
            {uploading ? "Enviando..." : "Arraste aqui ou clique para selecionar"}
          </div>
          <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "4px" }}>
            PNG, JPG ou SVG &bull; Max 5MB
          </div>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={maxFiles > 1}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.files?.length) handleFiles(e.target.files);
              e.target.value = "";
            }}
            style={{ display: "none" }}
          />
        </div>
      )}
    </div>
  );
}

// ─── Niche-Specific Questions ───────────────────────────────────

function NicheQuestions({ questions, data, onUpdate, segment }: {
  questions: { field: string; label: string; type: string; required: boolean }[];
  data: Record<string, string | boolean>;
  onUpdate: (field: string, value: string | boolean) => void;
  segment: string;
}) {
  if (questions.length === 0 || !segment) return null;

  const nicheLabel = segment.charAt(0).toUpperCase() + segment.slice(1);

  return (
    <>
      <div style={{ borderTop: "1px solid #e5e7eb", marginTop: "8px", paddingTop: "16px" }}>
        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#00c96b", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          Perguntas específicas para {nicheLabel}
        </label>
      </div>
      {questions.map((q) => {
        if (q.type === "boolean") {
          return (
            <Toggle
              key={q.field}
              label={`${q.label}${q.required ? " *" : ""}`}
              value={!!data[q.field]}
              onChange={(v) => onUpdate(q.field, v)}
            />
          );
        }
        if (q.type === "textarea") {
          return (
            <Textarea
              key={q.field}
              label={`${q.label}${q.required ? " *" : ""}`}
              value={(data[q.field] as string) || ""}
              onChange={(v) => onUpdate(q.field, v)}
            />
          );
        }
        return (
          <Input
            key={q.field}
            label={`${q.label}${q.required ? " *" : ""}`}
            value={(data[q.field] as string) || ""}
            onChange={(v) => onUpdate(q.field, v)}
          />
        );
      })}
    </>
  );
}

// ─── Shell & Primitives ─────────────────────────────────────────

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fafafa", fontFamily: "'DM Sans', sans-serif" }}>
      <div className="ob-shell-container" style={{ maxWidth: "680px", margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#00c96b", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "14px", color: "#fff" }}>S</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1e293b" }}>SEO Inteligente</span>
          </div>
          <p style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px" }}>Questionário de Onboarding</p>
        </div>
        <div className="ob-shell-card" style={{ background: "#fff", borderRadius: "20px", padding: "36px 32px", boxShadow: "0 24px 80px rgba(0,0,0,0.08)" }}>
          {children}
        </div>
        <p style={{ textAlign: "center", fontSize: "12px", color: "#94a3b8", marginTop: "24px" }}>SEO Inteligente &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

function StepTitle({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "24px", fontWeight: 700, color: "#1e293b", marginBottom: "4px" }}>{children}</h2>;
}

function Input({ label, value, onChange, type = "text", placeholder }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#475569", marginBottom: "6px" }}>{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="ob-input" />
    </div>
  );
}

function Textarea({ label, value, onChange, placeholder, rows = 3 }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#475569", marginBottom: "6px" }}>{label}</label>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className="ob-textarea" />
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#475569", marginBottom: "6px" }}>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="ob-select">
        {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    </div>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  const active = { background: "#00c96b", color: "#fff", border: "1.5px solid #00c96b" };
  const inactive = { background: "#fff", color: "#64748b", border: "1.5px solid #e5e7eb" };
  return (
    <div>
      <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#475569", marginBottom: "8px" }}>{label}</label>
      <div style={{ display: "flex", gap: "12px" }}>
        <button type="button" onClick={() => onChange(true)} style={{ padding: "10px 28px", borderRadius: "99px", fontSize: "14px", fontWeight: 500, cursor: "pointer", transition: "all .2s ease", fontFamily: "'DM Sans', sans-serif", ...(value ? active : inactive) }}>Sim</button>
        <button type="button" onClick={() => onChange(false)} style={{ padding: "10px 28px", borderRadius: "99px", fontSize: "14px", fontWeight: 500, cursor: "pointer", transition: "all .2s ease", fontFamily: "'DM Sans', sans-serif", ...(!value ? active : inactive) }}>Não</button>
      </div>
    </div>
  );
}
