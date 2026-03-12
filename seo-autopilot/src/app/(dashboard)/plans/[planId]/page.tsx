"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc/client";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import {
  ArrowLeft,
  Map,
  List,
  Search,
  Link2,
  ChevronDown,
  ChevronRight,
  Pencil,
  Trash2,
  Check,
  X,
  Loader2,
  AlertTriangle,
  Rocket,
  Play,
  Eye,
  RefreshCw,
  RotateCcw,
  Zap,
  Upload,
  ExternalLink,
  Download,
  Settings,
  Globe,
  Plug,
} from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────

interface Cluster {
  id: string;
  name: string;
  description: string;
  pillarKeyword: string;
  estimatedTotalVolume: number;
  priority: number;
}

interface CrossClusterLink {
  from: string;
  to: string;
  reason: string;
}

// ─── Config ─────────────────────────────────────────────────────

const typeConfig: Record<string, { label: string; color: string; emoji: string }> = {
  pillar: { label: "Pillar", color: "#00ff88", emoji: "🏛️" },
  cluster: { label: "Cluster", color: "#3b82f6", emoji: "🔗" },
  service_area: { label: "Local", color: "#f59e0b", emoji: "📍" },
  blog: { label: "Blog", color: "#8b5cf6", emoji: "📝" },
  faq: { label: "FAQ", color: "#ec4899", emoji: "❓" },
  landing: { label: "Landing", color: "#06b6d4", emoji: "🎯" },
};

const intentColors: Record<string, { label: string; color: string }> = {
  commercial: { label: "Comercial", color: "#00ff88" },
  transactional: { label: "Transacional", color: "#3b82f6" },
  informational: { label: "Informacional", color: "#facc15" },
  navigational: { label: "Navegacional", color: "#94a3b8" },
};

const statusConfig: Record<string, { label: string; color: string; emoji: string }> = {
  pending: { label: "Pendente", color: "#94a3b8", emoji: "⏸️" },
  generating: { label: "Gerando...", color: "#facc15", emoji: "⏳" },
  review: { label: "Em revisão", color: "#3b82f6", emoji: "📝" },
  approved: { label: "Aprovada", color: "#00ff88", emoji: "✅" },
  publishing: { label: "Publicando...", color: "#a78bfa", emoji: "⏳" },
  published: { label: "Publicada", color: "#00ff88", emoji: "🌐" },
  failed: { label: "Falha", color: "#ef4444", emoji: "❌" },
  draft: { label: "Rascunho", color: "#94a3b8", emoji: "📄" },
  ready: { label: "Pronta", color: "#00ff88", emoji: "✅" },
};

const wpStatusConfig: Record<string, { label: string; color: string; emoji: string }> = {
  none: { label: "—", color: "#94a3b8", emoji: "⏸️" },
  publishing: { label: "Publicando", color: "#a78bfa", emoji: "⏳" },
  draft: { label: "Rascunho WP", color: "#facc15", emoji: "📝" },
  live: { label: "Publicada", color: "#00ff88", emoji: "✅" },
  error: { label: "Erro", color: "#ef4444", emoji: "❌" },
};

const TABS = [
  { key: "map", label: "Mapa Visual", icon: Map },
  { key: "pages", label: "Lista de Páginas", icon: List },
  { key: "keywords", label: "Keywords", icon: Search },
  { key: "links", label: "Links", icon: Link2 },
] as const;

type TabKey = (typeof TABS)[number]["key"];

// ─── Main Component ─────────────────────────────────────────────

export default function PlanDetailPage() {
  const { planId } = useParams<{ planId: string }>();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>("map");
  const [editingPage, setEditingPage] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>("all");
  const [filterCluster, setFilterCluster] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewPageId, setPreviewPageId] = useState<string | null>(null);
  const [isProducing, setIsProducing] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishAs, setPublishAs] = useState<"draft" | "publish">("draft");
  const [wpPageType, setWpPageType] = useState<"page" | "post">("page");

  const utils = trpc.useUtils();
  const { data: plan, isLoading: planLoading } = trpc.contentPlan.getById.useQuery({ planId });
  const { data: pages, isLoading: pagesLoading } = trpc.contentPage.listByPlan.useQuery({ planId });
  const { data: keywords } = trpc.contentPage.getKeywords.useQuery({ planId });
  const { data: stats } = trpc.contentPlan.getProductionStats.useQuery(
    { planId },
    { refetchInterval: isProducing || isPublishing ? 5000 : false },
  );

  // Fetch WP connection for the plan's site
  const siteId = plan?.siteId;
  const { data: wpConnection } = trpc.wpConnection.getBySite.useQuery(
    { siteId: siteId! },
    { enabled: !!siteId },
  );

  const approveMutation = trpc.contentPlan.approve.useMutation({
    onSuccess: () => utils.contentPlan.getById.invalidate({ planId }),
  });
  const discardMutation = trpc.contentPlan.discard.useMutation({
    onSuccess: () => router.push("/plans"),
  });
  const deletePageMutation = trpc.contentPage.delete.useMutation({
    onSuccess: () => utils.contentPage.listByPlan.invalidate({ planId }),
  });
  const updatePageMutation = trpc.contentPage.update.useMutation({
    onSuccess: () => {
      utils.contentPage.listByPlan.invalidate({ planId });
      setEditingPage(null);
    },
  });
  const startProductionMutation = trpc.contentPlan.startProduction.useMutation({
    onSuccess: () => {
      utils.contentPage.listByPlan.invalidate({ planId });
      utils.contentPlan.getProductionStats.invalidate({ planId });
      utils.contentPlan.getById.invalidate({ planId });
      setIsProducing(false);
    },
    onError: () => setIsProducing(false),
  });
  const generateSingleMutation = trpc.contentPage.generateSingle.useMutation({
    onSuccess: () => {
      utils.contentPage.listByPlan.invalidate({ planId });
      utils.contentPlan.getProductionStats.invalidate({ planId });
    },
  });
  const approvePageMutation = trpc.contentPage.approvePage.useMutation({
    onSuccess: () => {
      utils.contentPage.listByPlan.invalidate({ planId });
      utils.contentPlan.getProductionStats.invalidate({ planId });
    },
  });
  const rejectPageMutation = trpc.contentPage.rejectPage.useMutation({
    onSuccess: () => {
      utils.contentPage.listByPlan.invalidate({ planId });
      utils.contentPlan.getProductionStats.invalidate({ planId });
    },
  });

  // Publishing mutations
  const publishSingleMutation = trpc.contentPage.publish.useMutation({
    onSuccess: () => {
      utils.contentPage.listByPlan.invalidate({ planId });
      utils.contentPlan.getProductionStats.invalidate({ planId });
    },
  });
  const publishBatchMutation = trpc.contentPage.publishBatch.useMutation({
    onSuccess: () => {
      utils.contentPage.listByPlan.invalidate({ planId });
      utils.contentPlan.getProductionStats.invalidate({ planId });
      utils.contentPlan.getById.invalidate({ planId });
      setIsPublishing(false);
    },
    onError: () => setIsPublishing(false),
  });
  const exportHtmlMutation = trpc.contentPlan.exportHtml.useMutation();

  // Poll during production/publishing
  useEffect(() => {
    if (stats?.generating && stats.generating > 0) {
      setIsProducing(true);
    } else if (isProducing && stats?.generating === 0) {
      setIsProducing(false);
    }
    if (stats?.publishing && stats.publishing > 0) {
      setIsPublishing(true);
    } else if (isPublishing && stats?.publishing === 0) {
      setIsPublishing(false);
    }
  }, [stats?.generating, stats?.publishing, isProducing, isPublishing]);

  const handleExportZip = useCallback(async () => {
    const result = await exportHtmlMutation.mutateAsync({ planId });
    if (result.pages.length === 0) return;

    const zip = new JSZip();
    for (const page of result.pages) {
      zip.file(page.filename, page.html);
    }
    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, `seo-pages-${planId.slice(0, 8)}.zip`);
  }, [planId, exportHtmlMutation]);

  if (planLoading || pagesLoading) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "var(--text-secondary)" }}>
        <Loader2 size={24} style={{ animation: "spin 1s linear infinite", margin: "0 auto 12px" }} />
        Carregando plano...
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!plan) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <p style={{ color: "var(--text-secondary)" }}>Plano não encontrado.</p>
        <button className="btn-ghost" onClick={() => router.push("/plans")} style={{ marginTop: "16px" }}>Voltar</button>
      </div>
    );
  }

  const clusters: Cluster[] = Array.isArray(plan.clusters) ? (plan.clusters as Cluster[]) : [];
  const allPages = pages ?? [];
  const allKeywords = keywords ?? [];
  const linkingPlan = plan.internalLinkingPlan as { description?: string; crossClusterLinks?: CrossClusterLink[] } | null;

  const typeCounts = {
    pillar: allPages.filter((p) => p.type === "pillar").length,
    cluster: allPages.filter((p) => p.type === "cluster").length,
    service_area: allPages.filter((p) => p.type === "service_area").length,
    blog: allPages.filter((p) => p.type === "blog").length,
    faq: allPages.filter((p) => p.type === "faq").length,
  };

  const filteredPages = allPages.filter((p) => {
    if (filterType !== "all" && p.type !== filterType) return false;
    if (filterCluster !== "all" && p.clusterId !== filterCluster) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return p.title.toLowerCase().includes(q) || p.targetKeyword.toLowerCase().includes(q);
    }
    return true;
  });

  function handleApprove() {
    if (confirm("Tem certeza? Após aprovação, o plano será enviado para produção.")) {
      approveMutation.mutate({ planId });
    }
  }

  function handleDiscard() {
    if (confirm("Tem certeza? Isso vai apagar o plano e todas as páginas planejadas.")) {
      discardMutation.mutate({ planId });
    }
  }

  function handleStartProduction(batchSize: number) {
    setIsProducing(true);
    startProductionMutation.mutate({ planId, batchSize });
  }

  function handleRetryFailed() {
    const failedIds = allPages.filter((p) => p.status === "failed").map((p) => p.id);
    if (failedIds.length > 0) {
      setIsProducing(true);
      startProductionMutation.mutate({ planId, pageIds: failedIds });
    }
  }

  function handlePublishBatch(pageIds?: string[]) {
    setIsPublishing(true);
    publishBatchMutation.mutate({
      planId,
      pageIds,
      publishStatus: publishAs,
      pageType: wpPageType,
    });
  }

  const planStatusLabel: Record<string, string> = {
    draft: "Rascunho", generating: "Gerando...", review: "Em Revisão",
    approved: "Aprovado", in_production: "Em Produção", completed: "Concluído",
  };

  const showProductionUI = plan.status === "approved" || plan.status === "in_production" || plan.status === "completed";
  const previewPage = previewPageId ? allPages.find((p) => p.id === previewPageId) : null;
  const approvedCount = allPages.filter((p) => p.status === "approved").length;
  const publishedCount = allPages.filter((p) => p.status === "published").length;
  const hasWpConnection = wpConnection?.connectionStatus === "connected";

  return (
    <div className="animate-fade-up">
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
        <button onClick={() => router.push("/plans")} style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "10px", padding: "8px", cursor: "pointer", color: "var(--text-secondary)", display: "flex" }}>
          <ArrowLeft size={18} />
        </button>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, color: "var(--text-primary)" }}>
            Plano de Conteúdo
          </h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "2px" }}>
            Status: {planStatusLabel[plan.status] || plan.status} · {allPages.length} páginas · {clusters.length} clusters
          </p>
        </div>
        <span style={{ padding: "6px 14px", borderRadius: "99px", fontSize: "12px", fontWeight: 600, background: plan.status === "approved" || plan.status === "in_production" || plan.status === "completed" ? "rgba(0,255,136,0.1)" : "rgba(59,130,246,0.1)", color: plan.status === "approved" || plan.status === "in_production" || plan.status === "completed" ? "#00ff88" : "#3b82f6", border: `1px solid ${plan.status === "approved" || plan.status === "in_production" || plan.status === "completed" ? "rgba(0,255,136,0.2)" : "rgba(59,130,246,0.2)"}` }}>
          {planStatusLabel[plan.status] || plan.status}
        </span>
      </div>

      {/* Production Progress Bar */}
      {showProductionUI && stats && (
        <div style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "20px 24px", marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Rocket size={18} style={{ color: "var(--accent)" }} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "var(--text-primary)" }}>
                Produção de Conteúdo
              </span>
            </div>
            <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--accent)", fontFamily: "var(--font-display)" }}>
              {stats.progress}%
            </span>
          </div>

          {/* Progress bar */}
          <div style={{ height: "6px", background: "var(--border)", borderRadius: "99px", overflow: "hidden", marginBottom: "14px" }}>
            <div style={{ height: "100%", background: "linear-gradient(90deg, var(--accent), var(--accent-2))", borderRadius: "99px", width: `${stats.progress}%`, transition: "width 0.5s ease" }} />
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", fontSize: "13px", marginBottom: "14px" }}>
            <span style={{ color: "var(--accent)" }}>✅ Concluídas: {stats.done}</span>
            {stats.generating > 0 && <span style={{ color: "#facc15" }}>⏳ Gerando: {stats.generating}</span>}
            <span style={{ color: "var(--text-muted)" }}>⏸️ Pendentes: {stats.pending}</span>
            {stats.published > 0 && <span style={{ color: "#00ff88" }}>🌐 Publicadas: {stats.published}</span>}
            {stats.failed > 0 && <span style={{ color: "#ef4444" }}>❌ Falhas: {stats.failed}</span>}
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => handleStartProduction(5)}
              disabled={isProducing || stats.pending === 0}
              className="btn-accent"
              style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", opacity: isProducing || stats.pending === 0 ? 0.5 : 1, cursor: isProducing || stats.pending === 0 ? "not-allowed" : "pointer" }}
            >
              {isProducing ? <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} /> : <Play size={14} />}
              {isProducing ? "Produzindo..." : "Produzir próximas 5"}
            </button>
            <button
              onClick={() => handleStartProduction(stats.pending)}
              disabled={isProducing || stats.pending === 0}
              className="btn-ghost"
              style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", opacity: isProducing || stats.pending === 0 ? 0.5 : 1, cursor: isProducing || stats.pending === 0 ? "not-allowed" : "pointer" }}
            >
              <Zap size={14} />
              Produzir todas ({stats.pending})
            </button>
            {stats.failed > 0 && (
              <button onClick={handleRetryFailed} disabled={isProducing} className="btn-ghost" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#ef4444" }}>
                <RefreshCw size={14} />
                Reprocessar falhas ({stats.failed})
              </button>
            )}
          </div>
        </div>
      )}

      {/* WordPress Publishing Section */}
      {showProductionUI && (approvedCount > 0 || publishedCount > 0) && (
        <div style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "20px 24px", marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <Upload size={18} style={{ color: "var(--accent)" }} />
            <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "var(--text-primary)" }}>
              Publicação WordPress
            </span>
          </div>

          {hasWpConnection ? (
            <>
              {/* Connection info */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", fontSize: "13px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Plug size={14} style={{ color: "#00ff88" }} />
                  <span style={{ color: "var(--text-secondary)" }}>Conectado a</span>
                  <strong style={{ color: "var(--text-primary)" }}>{wpConnection?.wpUrl?.replace(/https?:\/\//, "")}</strong>
                </span>
                {wpConnection?.wpVersion && (
                  <span style={{ color: "var(--text-muted)" }}>· WP {wpConnection.wpVersion}</span>
                )}
              </div>

              {/* Publish options */}
              <div style={{ display: "flex", gap: "24px", marginBottom: "16px", fontSize: "13px" }}>
                <div>
                  <span style={{ color: "var(--text-muted)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.04em", display: "block", marginBottom: "6px" }}>Publicar como</span>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", color: publishAs === "draft" ? "var(--accent)" : "var(--text-secondary)" }}>
                      <input type="radio" name="publishAs" checked={publishAs === "draft"} onChange={() => setPublishAs("draft")} style={{ accentColor: "var(--accent)" }} />
                      Rascunho (recomendado)
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", color: publishAs === "publish" ? "var(--accent)" : "var(--text-secondary)" }}>
                      <input type="radio" name="publishAs" checked={publishAs === "publish"} onChange={() => setPublishAs("publish")} style={{ accentColor: "var(--accent)" }} />
                      Publicado
                    </label>
                  </div>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.04em", display: "block", marginBottom: "6px" }}>Tipo no WP</span>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", color: wpPageType === "page" ? "var(--accent)" : "var(--text-secondary)" }}>
                      <input type="radio" name="wpType" checked={wpPageType === "page"} onChange={() => setWpPageType("page")} style={{ accentColor: "var(--accent)" }} />
                      Páginas
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", color: wpPageType === "post" ? "var(--accent)" : "var(--text-secondary)" }}>
                      <input type="radio" name="wpType" checked={wpPageType === "post"} onChange={() => setWpPageType("post")} style={{ accentColor: "var(--accent)" }} />
                      Posts
                    </label>
                  </div>
                </div>
              </div>

              {/* Publishing progress */}
              {publishedCount > 0 && (
                <div style={{ marginBottom: "14px" }}>
                  <div style={{ height: "4px", background: "var(--border)", borderRadius: "99px", overflow: "hidden", marginBottom: "8px" }}>
                    <div style={{ height: "100%", background: "linear-gradient(90deg, #a78bfa, #00ff88)", borderRadius: "99px", width: `${allPages.length > 0 ? Math.round((publishedCount / allPages.length) * 100) : 0}%`, transition: "width 0.5s ease" }} />
                  </div>
                  <div style={{ display: "flex", gap: "16px", fontSize: "12px" }}>
                    <span style={{ color: "#00ff88" }}>🌐 Publicadas: {publishedCount}</span>
                    {stats?.publishing && stats.publishing > 0 ? <span style={{ color: "#a78bfa" }}>⏳ Publicando: {stats.publishing}</span> : null}
                    <span style={{ color: "var(--text-muted)" }}>⏸️ Aguardando: {approvedCount}</span>
                  </div>
                </div>
              )}

              {/* Publish action buttons */}
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => handlePublishBatch()}
                  disabled={isPublishing || approvedCount === 0}
                  className="btn-accent"
                  style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", opacity: isPublishing || approvedCount === 0 ? 0.5 : 1, cursor: isPublishing || approvedCount === 0 ? "not-allowed" : "pointer" }}
                >
                  {isPublishing ? <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} /> : <Upload size={14} />}
                  {isPublishing ? "Publicando..." : `Publicar todas aprovadas (${approvedCount})`}
                </button>
                <button
                  onClick={handleExportZip}
                  disabled={exportHtmlMutation.isPending || approvedCount === 0}
                  className="btn-ghost"
                  style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", opacity: approvedCount === 0 ? 0.5 : 1, cursor: approvedCount === 0 ? "not-allowed" : "pointer" }}
                >
                  <Download size={14} />
                  {exportHtmlMutation.isPending ? "Exportando..." : "Exportar HTML/ZIP"}
                </button>
              </div>
            </>
          ) : (
            /* No WP connection */
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 18px", background: "rgba(250,204,21,0.06)", border: "1px solid rgba(250,204,21,0.15)", borderRadius: "10px", marginBottom: "14px" }}>
                <AlertTriangle size={16} style={{ color: "#facc15", flexShrink: 0 }} />
                <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                  Sem conexão WordPress configurada para este site.
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => router.push("/settings")}
                  className="btn-ghost"
                  style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}
                >
                  <Settings size={14} />
                  Configurar WordPress
                </button>
                <button
                  onClick={handleExportZip}
                  disabled={exportHtmlMutation.isPending || approvedCount === 0}
                  className="btn-accent"
                  style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", opacity: approvedCount === 0 ? 0.5 : 1, cursor: approvedCount === 0 ? "not-allowed" : "pointer" }}
                >
                  <Download size={14} />
                  {exportHtmlMutation.isPending ? "Exportando..." : `Exportar HTML/ZIP (${approvedCount})`}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Type summary cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px", marginBottom: "24px" }}>
        {(["pillar", "cluster", "service_area", "blog", "faq"] as const).map((type) => {
          const tc = typeConfig[type];
          return (
            <div key={type} style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "16px", textAlign: "center" }}>
              <div style={{ fontSize: "20px", marginBottom: "4px" }}>{tc.emoji}</div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: tc.color, fontFamily: "var(--font-display)" }}>{typeCounts[type]}</div>
              <div style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{tc.label}</div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "0", borderBottom: "1px solid var(--border)", marginBottom: "24px" }}>
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 20px", background: "none", border: "none", borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent", cursor: "pointer", fontSize: "13px", fontWeight: isActive ? 600 : 400, color: isActive ? "var(--accent)" : "var(--text-secondary)", transition: "all 0.2s", fontFamily: "var(--font-body)" }}>
              <tab.icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div style={{ minHeight: "400px" }}>
        {activeTab === "map" && <TopicalMapTab clusters={clusters} pages={allPages} />}
        {activeTab === "pages" && (
          <PagesListTab
            pages={filteredPages}
            clusters={clusters}
            allPages={allPages}
            filterType={filterType}
            setFilterType={setFilterType}
            filterCluster={filterCluster}
            setFilterCluster={setFilterCluster}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            editingPage={editingPage}
            setEditingPage={setEditingPage}
            onDeletePage={(id) => { if (confirm("Remover esta página?")) deletePageMutation.mutate({ pageId: id }); }}
            onUpdatePage={(id, data) => updatePageMutation.mutate({ pageId: id, ...data })}
            onPreview={setPreviewPageId}
            onGenerate={(id) => generateSingleMutation.mutate({ pageId: id })}
            onApprove={(id) => approvePageMutation.mutate({ pageId: id })}
            onReject={(id) => rejectPageMutation.mutate({ pageId: id })}
            onPublish={(id) => publishSingleMutation.mutate({ pageId: id, publishStatus: publishAs, pageType: wpPageType })}
            generatingIds={generateSingleMutation.isPending ? [] : []}
            showProduction={showProductionUI}
            hasWpConnection={hasWpConnection}
          />
        )}
        {activeTab === "keywords" && <KeywordsTab keywords={allKeywords} />}
        {activeTab === "links" && <LinksTab linkingPlan={linkingPlan} pages={allPages} clusters={clusters} />}
      </div>

      {/* Action Buttons */}
      <div style={{ marginTop: "32px", padding: "20px 24px", background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", display: "flex", gap: "12px", alignItems: "center" }}>
        {plan.status === "review" && (
          <>
            <button onClick={handleApprove} className="btn-accent" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Check size={16} /> Aprovar Plano
            </button>
            <button onClick={handleDiscard} className="btn-ghost" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#ef4444" }}>
              <Trash2 size={16} /> Descartar
            </button>
          </>
        )}
        {plan.status === "approved" && !showProductionUI && (
          <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>
            Plano aprovado! Use os botões de produção acima para gerar conteúdo.
          </span>
        )}
        {plan.status === "completed" && (
          <span style={{ fontSize: "13px", color: "var(--accent)", display: "flex", alignItems: "center", gap: "8px" }}>
            <Check size={16} /> Plano concluído! Todas as páginas foram publicadas.
          </span>
        )}
      </div>

      {/* Preview Modal */}
      {previewPage && (
        <PreviewModal
          page={previewPage}
          allPages={allPages}
          onClose={() => setPreviewPageId(null)}
          onApprove={() => { approvePageMutation.mutate({ pageId: previewPage.id }); setPreviewPageId(null); }}
          onReject={() => { rejectPageMutation.mutate({ pageId: previewPage.id }); setPreviewPageId(null); }}
        />
      )}
    </div>
  );
}

// ─── Tab 1: Topical Map ─────────────────────────────────────────

function TopicalMapTab({ clusters, pages }: { clusters: Cluster[]; pages: { id: string; type: string; clusterId: string | null; title: string; targetKeyword: string; wordCount: number | null; status: string }[] }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => Object.fromEntries(clusters.map((c) => [c.id, true])));

  if (clusters.length === 0) {
    return <div style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)" }}><AlertTriangle size={24} style={{ marginBottom: "8px" }} /><p>Nenhum cluster encontrado.</p></div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {clusters.sort((a, b) => a.priority - b.priority).map((cluster) => {
        const cp = pages.filter((p) => p.clusterId === cluster.id);
        const isExp = expanded[cluster.id] ?? true;
        const groups = [
          { label: "Pilar", type: "pillar", items: cp.filter((p) => p.type === "pillar") },
          { label: "Cluster Pages", type: "cluster", items: cp.filter((p) => p.type === "cluster") },
          { label: "Localidades", type: "service_area", items: cp.filter((p) => p.type === "service_area") },
          { label: "Blog", type: "blog", items: cp.filter((p) => p.type === "blog") },
          { label: "FAQ", type: "faq", items: cp.filter((p) => p.type === "faq") },
        ].filter((g) => g.items.length > 0);

        return (
          <div key={cluster.id} style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <button onClick={() => setExpanded((p) => ({ ...p, [cluster.id]: !p[cluster.id] }))} style={{ width: "100%", padding: "18px 24px", display: "flex", alignItems: "center", gap: "12px", background: "none", border: "none", borderBottom: isExp ? "1px solid var(--border)" : "none", cursor: "pointer", textAlign: "left" }}>
              {isExp ? <ChevronDown size={18} style={{ color: "var(--accent)" }} /> : <ChevronRight size={18} style={{ color: "var(--text-muted)" }} />}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, color: "var(--text-primary)" }}>{cluster.name}</span>
                  <span style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "99px", background: "var(--accent-dim)", color: "var(--accent)", fontWeight: 600 }}>Prioridade {cluster.priority}</span>
                </div>
                <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{cluster.description} · {(cluster.estimatedTotalVolume ?? 0).toLocaleString()}/mês · {cp.length} páginas</span>
              </div>
            </button>
            {isExp && (
              <div style={{ padding: "16px 24px" }}>
                {groups.map((g) => (
                  <div key={g.type} style={{ marginBottom: "12px" }}>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>{g.label} ({g.items.length})</div>
                    {g.items.map((p) => {
                      const tc = typeConfig[g.type];
                      const sc = statusConfig[p.status] || statusConfig.pending;
                      return (
                        <div key={p.id} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderLeft: `3px solid ${tc.color}`, marginBottom: "6px", borderRadius: "0 8px 8px 0", background: "rgba(255,255,255,0.02)" }}>
                          <span style={{ fontSize: "13px" }}>{tc.emoji}</span>
                          <span style={{ flex: 1, fontSize: "13px", color: "var(--text-primary)" }}>{p.title}</span>
                          <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{p.targetKeyword}</span>
                          <span style={{ fontSize: "10px", padding: "1px 6px", borderRadius: "99px", background: `${sc.color}15`, color: sc.color }}>{sc.emoji}</span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Tab 2: Pages List ──────────────────────────────────────────

function PagesListTab({
  pages, clusters, allPages, filterType, setFilterType, filterCluster, setFilterCluster,
  searchQuery, setSearchQuery, editingPage, setEditingPage, onDeletePage, onUpdatePage,
  onPreview, onGenerate, onApprove, onReject, onPublish, generatingIds, showProduction, hasWpConnection,
}: {
  pages: any[]; clusters: Cluster[]; allPages: any[];
  filterType: string; setFilterType: (v: string) => void;
  filterCluster: string; setFilterCluster: (v: string) => void;
  searchQuery: string; setSearchQuery: (v: string) => void;
  editingPage: string | null; setEditingPage: (v: string | null) => void;
  onDeletePage: (id: string) => void; onUpdatePage: (id: string, data: any) => void;
  onPreview: (id: string) => void; onGenerate: (id: string) => void;
  onApprove: (id: string) => void; onReject: (id: string) => void;
  onPublish: (id: string) => void;
  generatingIds: string[]; showProduction: boolean; hasWpConnection: boolean;
}) {
  const inputStyle: React.CSSProperties = { background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "8px 12px", fontSize: "13px", color: "var(--text-primary)", fontFamily: "var(--font-body)" };
  const showWpCol = showProduction && hasWpConnection;
  const gridCols = showWpCol
    ? "40px 50px 1fr 140px 70px 80px 70px 150px"
    : showProduction
      ? "40px 50px 1fr 160px 70px 80px 140px"
      : "50px 60px 1fr 200px 80px 80px 80px";

  function getWpStatus(page: any): string {
    if (page.status === "published" && page.wpUrl) return "live";
    if (page.status === "published" && page.wpPostId && !page.wpUrl) return "draft";
    if (page.status === "publishing") return "publishing";
    if (page.status === "approved" && page.errorMessage) return "error";
    return "none";
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} style={inputStyle}>
          <option value="all">Todos os tipos</option>
          <option value="pillar">Pillar</option><option value="cluster">Cluster</option>
          <option value="service_area">Service Area</option><option value="blog">Blog</option><option value="faq">FAQ</option>
        </select>
        <select value={filterCluster} onChange={(e) => setFilterCluster(e.target.value)} style={inputStyle}>
          <option value="all">Todos os clusters</option>
          {clusters.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <input type="text" placeholder="Buscar..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ ...inputStyle, flex: 1, minWidth: "200px", outline: "none" }} />
        <span style={{ fontSize: "13px", color: "var(--text-muted)", alignSelf: "center" }}>{pages.length}/{allPages.length}</span>
      </div>

      <div style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: gridCols, padding: "12px 16px", borderBottom: "1px solid var(--border)", fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          <span>#</span><span>Tipo</span><span>Título</span><span>Keyword</span>
          <span>{showProduction ? "Words" : "Vol."}</span>
          <span>Status</span>
          {showWpCol && <span>WP</span>}
          <span>Ações</span>
        </div>

        {pages.map((page, idx) => {
          const tc = typeConfig[page.type] || typeConfig.cluster;
          const sc = statusConfig[page.status] || statusConfig.pending;
          const wp = showWpCol ? wpStatusConfig[getWpStatus(page)] || wpStatusConfig.none : null;

          if (editingPage === page.id) {
            return <EditPageRow key={page.id} page={page} onCancel={() => setEditingPage(null)} onSave={(data) => onUpdatePage(page.id, data)} />;
          }

          return (
            <div key={page.id} style={{ display: "grid", gridTemplateColumns: gridCols, padding: "10px 16px", borderBottom: "1px solid var(--border)", alignItems: "center", fontSize: "13px", transition: "background 0.15s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
              <span style={{ color: "var(--text-muted)" }}>{idx + 1}</span>
              <span title={tc.label}>{tc.emoji}</span>
              <span style={{ color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{page.title}</span>
              <span style={{ color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{page.targetKeyword}</span>
              <span style={{ color: "var(--text-muted)" }}>{page.wordCount || "—"}</span>
              <span style={{ fontSize: "11px", padding: "2px 6px", borderRadius: "99px", background: `${sc.color}15`, color: sc.color, width: "fit-content" }}>{sc.emoji} {sc.label}</span>
              {showWpCol && wp && (
                <span style={{ fontSize: "11px", padding: "2px 6px", borderRadius: "99px", background: `${wp.color}15`, color: wp.color, width: "fit-content" }}>{wp.emoji}</span>
              )}
              <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                {/* Actions based on status */}
                {page.status === "pending" && showProduction && (
                  <IconBtn title="Gerar" onClick={() => onGenerate(page.id)}><Play size={13} /></IconBtn>
                )}
                {page.status === "generating" && (
                  <Loader2 size={13} style={{ color: "#facc15", animation: "spin 1s linear infinite" }} />
                )}
                {(page.status === "review" || page.status === "ready") && (
                  <>
                    <IconBtn title="Preview" onClick={() => onPreview(page.id)}><Eye size={13} /></IconBtn>
                    <IconBtn title="Aprovar" onClick={() => onApprove(page.id)} color="#00ff88"><Check size={13} /></IconBtn>
                    <IconBtn title="Rejeitar" onClick={() => onReject(page.id)} color="#ef4444"><RotateCcw size={13} /></IconBtn>
                  </>
                )}
                {page.status === "approved" && (
                  <>
                    <IconBtn title="Preview" onClick={() => onPreview(page.id)}><Eye size={13} /></IconBtn>
                    {hasWpConnection && (
                      <IconBtn title="Publicar" onClick={() => onPublish(page.id)} color="#a78bfa"><Upload size={13} /></IconBtn>
                    )}
                  </>
                )}
                {page.status === "publishing" && (
                  <Loader2 size={13} style={{ color: "#a78bfa", animation: "spin 1s linear infinite" }} />
                )}
                {page.status === "published" && (
                  <>
                    <IconBtn title="Preview" onClick={() => onPreview(page.id)}><Eye size={13} /></IconBtn>
                    {page.wpUrl && (
                      <a href={page.wpUrl} target="_blank" rel="noopener noreferrer" title="Ver no WP" style={{ color: "var(--accent)", display: "flex", padding: "3px" }}>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </>
                )}
                {page.status === "failed" && (
                  <>
                    <IconBtn title="Retry" onClick={() => onGenerate(page.id)}><RefreshCw size={13} /></IconBtn>
                    <span title={page.errorMessage || "Erro"} style={{ color: "#ef4444", cursor: "help", fontSize: "11px" }}>!</span>
                  </>
                )}
                <IconBtn title="Editar" onClick={() => setEditingPage(page.id)}><Pencil size={13} /></IconBtn>
                <IconBtn title="Remover" onClick={() => onDeletePage(page.id)} color="#ef4444"><Trash2 size={13} /></IconBtn>
              </div>
            </div>
          );
        })}
        {pages.length === 0 && <div style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)", fontSize: "13px" }}>Nenhuma página encontrada.</div>}
      </div>
    </div>
  );
}

function IconBtn({ title, onClick, color, children }: { title: string; onClick: () => void; color?: string; children: React.ReactNode }) {
  return (
    <button title={title} onClick={onClick} style={{ background: "none", border: "none", cursor: "pointer", color: color || "var(--text-muted)", padding: "3px", display: "flex", borderRadius: "4px", transition: "background 0.15s" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
    >
      {children}
    </button>
  );
}

// ─── Edit Page Row ──────────────────────────────────────────────

function EditPageRow({ page, onCancel, onSave }: { page: any; onCancel: () => void; onSave: (data: any) => void }) {
  const [title, setTitle] = useState(page.title);
  const [slug, setSlug] = useState(page.slug);
  const [targetKeyword, setTargetKeyword] = useState(page.targetKeyword);
  const [secondaryKw, setSecondaryKw] = useState(Array.isArray(page.secondaryKeywords) ? (page.secondaryKeywords as string[]).join(", ") : "");
  const [metaTitle, setMetaTitle] = useState(page.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(page.metaDescription || "");

  function handleSave() {
    onSave({ title, slug, targetKeyword, secondaryKeywords: secondaryKw.split(",").map((s: string) => s.trim()).filter(Boolean), metaTitle, metaDescription });
  }

  const inp: React.CSSProperties = { width: "100%", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "8px 12px", fontSize: "13px", color: "var(--text-primary)", fontFamily: "var(--font-body)", outline: "none" };

  return (
    <div style={{ padding: "20px 16px", borderBottom: "1px solid var(--border)", background: "rgba(0,255,136,0.02)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
        <div>
          <label style={{ fontSize: "11px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Título</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} style={inp} />
        </div>
        <div>
          <label style={{ fontSize: "11px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Slug</label>
          <input value={slug} onChange={(e) => setSlug(e.target.value)} style={inp} />
        </div>
        <div>
          <label style={{ fontSize: "11px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Keyword alvo</label>
          <input value={targetKeyword} onChange={(e) => setTargetKeyword(e.target.value)} style={inp} />
        </div>
        <div>
          <label style={{ fontSize: "11px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Keywords secundárias</label>
          <input value={secondaryKw} onChange={(e) => setSecondaryKw(e.target.value)} style={inp} />
        </div>
        <div>
          <label style={{ fontSize: "11px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Meta Title ({metaTitle.length}/60)</label>
          <input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} style={inp} />
          <div style={{ marginTop: "4px", height: "3px", borderRadius: "99px", background: "var(--border)" }}>
            <div style={{ height: "100%", borderRadius: "99px", width: `${Math.min((metaTitle.length / 60) * 100, 100)}%`, background: metaTitle.length > 60 ? "#ef4444" : "var(--accent)", transition: "width 0.2s" }} />
          </div>
        </div>
        <div>
          <label style={{ fontSize: "11px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Meta Description ({metaDescription.length}/155)</label>
          <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} rows={2} style={{ ...inp, resize: "none" }} />
          <div style={{ marginTop: "4px", height: "3px", borderRadius: "99px", background: "var(--border)" }}>
            <div style={{ height: "100%", borderRadius: "99px", width: `${Math.min((metaDescription.length / 155) * 100, 100)}%`, background: metaDescription.length > 155 ? "#ef4444" : "var(--accent)", transition: "width 0.2s" }} />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
        <button onClick={onCancel} className="btn-ghost" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}><X size={14} /> Cancelar</button>
        <button onClick={handleSave} className="btn-accent" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}><Check size={14} /> Salvar</button>
      </div>
    </div>
  );
}

// ─── Tab 3: Keywords ────────────────────────────────────────────

function KeywordsTab({ keywords }: { keywords: any[] }) {
  const selected = keywords.filter((k) => k.isSelected);
  const totalVolume = keywords.reduce((sum, k) => sum + (k.searchVolume ?? 0), 0);
  const isEstimated = keywords.length > 0 && keywords[0].source === "ai_suggested";

  return (
    <div>
      <div style={{ display: "flex", gap: "24px", marginBottom: "16px", padding: "14px 20px", background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", fontSize: "13px" }}>
        <span style={{ color: "var(--text-secondary)" }}><strong style={{ color: "var(--text-primary)" }}>{keywords.length}</strong> keywords</span>
        <span style={{ color: "var(--text-secondary)" }}><strong style={{ color: "var(--accent)" }}>{selected.length}</strong> selecionadas</span>
        <span style={{ color: "var(--text-secondary)" }}>Vol. total: <strong style={{ color: "var(--text-primary)" }}>{totalVolume.toLocaleString()}/mês</strong></span>
        <span style={{ marginLeft: "auto", padding: "2px 10px", borderRadius: "99px", fontSize: "11px", background: isEstimated ? "rgba(250,204,21,0.1)" : "rgba(0,255,136,0.1)", color: isEstimated ? "#facc15" : "#00ff88", border: `1px solid ${isEstimated ? "rgba(250,204,21,0.2)" : "rgba(0,255,136,0.2)"}` }}>
          Fonte: {isEstimated ? "IA Estimado" : "DataForSEO"}
        </span>
      </div>

      <div style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 90px 70px 80px 120px 80px", padding: "12px 16px", borderBottom: "1px solid var(--border)", fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          <span>Keyword</span><span>Volume</span><span>Diff</span><span>CPC</span><span>Intenção</span><span>Usada?</span>
        </div>
        {keywords.map((kw) => {
          const ic = kw.intent ? intentColors[kw.intent] || intentColors.informational : intentColors.informational;
          return (
            <div key={kw.id} style={{ display: "grid", gridTemplateColumns: "1fr 90px 70px 80px 120px 80px", padding: "10px 16px", borderBottom: "1px solid var(--border)", alignItems: "center", fontSize: "13px" }}>
              <span style={{ color: "var(--text-primary)" }}>{kw.keyword}</span>
              <span style={{ color: "var(--text-secondary)" }}>{kw.searchVolume?.toLocaleString() ?? "—"}</span>
              <span style={{ color: "var(--text-secondary)" }}>{kw.difficulty ?? "—"}</span>
              <span style={{ color: "var(--text-secondary)" }}>{kw.cpc ? `R$${kw.cpc}` : "—"}</span>
              <span style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "99px", background: `${ic.color}15`, color: ic.color, width: "fit-content" }}>{ic.label}</span>
              <span style={{ color: kw.isSelected ? "var(--accent)" : "var(--text-muted)" }}>{kw.isSelected ? "Sim" : "Não"}</span>
            </div>
          );
        })}
        {keywords.length === 0 && <div style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)", fontSize: "13px" }}>Nenhuma keyword encontrada.</div>}
      </div>
    </div>
  );
}

// ─── Tab 4: Links ───────────────────────────────────────────────

function LinksTab({ linkingPlan, pages, clusters }: {
  linkingPlan: { description?: string; crossClusterLinks?: CrossClusterLink[] } | null;
  pages: { id: string; title: string; type: string; internalLinks: unknown }[];
  clusters: Cluster[];
}) {
  const clusterMap: Record<string, string> = {};
  clusters.forEach((c) => { clusterMap[c.id] = c.name; });
  const pageMap: Record<string, string> = {};
  pages.forEach((p) => { pageMap[p.id] = p.title; });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {linkingPlan?.description && (
        <div style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "20px 24px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "10px" }}>Estratégia de Linking</h3>
          <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{linkingPlan.description}</p>
        </div>
      )}

      {linkingPlan?.crossClusterLinks && linkingPlan.crossClusterLinks.length > 0 && (
        <div style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "20px 24px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>Links entre Clusters</h3>
          {linkingPlan.crossClusterLinks.map((link, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderBottom: i < linkingPlan.crossClusterLinks!.length - 1 ? "1px solid var(--border)" : "none", fontSize: "13px" }}>
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>{clusterMap[link.from] || link.from}</span>
              <span style={{ color: "var(--text-muted)" }}>↔</span>
              <span style={{ color: "#3b82f6", fontWeight: 600 }}>{clusterMap[link.to] || link.to}</span>
              <span style={{ color: "var(--text-muted)", marginLeft: "auto" }}>{link.reason}</span>
            </div>
          ))}
        </div>
      )}

      <div style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "12px 16px", borderBottom: "1px solid var(--border)", fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          <span>Página</span><span>Links para</span>
        </div>
        {pages.filter((p) => Array.isArray(p.internalLinks) && (p.internalLinks as string[]).length > 0).map((page) => {
          const tc = typeConfig[page.type] || typeConfig.cluster;
          return (
            <div key={page.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "10px 16px", borderBottom: "1px solid var(--border)", alignItems: "center", fontSize: "13px" }}>
              <span style={{ color: "var(--text-primary)" }}>{tc.emoji} {page.title}</span>
              <span style={{ color: "var(--text-secondary)" }}>
                {(page.internalLinks as string[]).map((lid, i) => <span key={i}>{i > 0 && ", "}→ {pageMap[lid] || lid}</span>)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Preview Modal ──────────────────────────────────────────────

function PreviewModal({ page, allPages, onClose, onApprove, onReject }: {
  page: any;
  allPages: any[];
  onClose: () => void;
  onApprove: () => void;
  onReject: () => void;
}) {
  const [showSchema, setShowSchema] = useState(false);
  const faqs: { question: string; answer: string }[] = Array.isArray(page.faqJson) ? page.faqJson : [];
  const schemas: unknown[] = Array.isArray(page.schemaJson) ? page.schemaJson : [];
  const links: { targetPageId: string; anchorText: string; url: string }[] = Array.isArray(page.internalLinks) ? page.internalLinks : [];
  const pageMap: Record<string, string> = {};
  allPages.forEach((p) => { pageMap[p.id] = p.title; });

  // Quality metrics
  const minWords: Record<string, number> = { pillar: 3000, cluster: 800, service_area: 800, blog: 800, faq: 500, landing: 1500 };
  const wordCountOk = (page.wordCount || 0) >= (minWords[page.type] || 800);
  const metaTitleOk = page.metaTitle && page.metaTitle.length <= 60;
  const metaDescOk = page.metaDescription && page.metaDescription.length <= 155;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }} />

      {/* Modal */}
      <div style={{ position: "relative", width: "900px", maxHeight: "90vh", overflow: "auto", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "0" }}>
        {/* Header */}
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "var(--bg-surface)", zIndex: 1 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
              Preview — {page.title}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "2px" }}>
              <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                {typeConfig[page.type]?.emoji} {typeConfig[page.type]?.label} · /{page.slug}
              </p>
              {page.wpUrl && (
                <a href={page.wpUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "var(--accent)", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}>
                  <ExternalLink size={11} /> Ver no WP
                </a>
              )}
            </div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", padding: "8px", display: "flex" }}>
            <X size={20} />
          </button>
        </div>

        {/* Meta Tags */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--border)", background: "rgba(0,255,136,0.02)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "13px" }}>
            <div>
              <span style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase" }}>Meta Title</span>
              <p style={{ color: "var(--text-primary)", marginTop: "2px" }}>{page.metaTitle || "—"}</p>
              <span style={{ fontSize: "11px", color: metaTitleOk ? "var(--accent)" : "#ef4444" }}>{page.metaTitle?.length || 0}/60 {metaTitleOk ? "✅" : "⚠️"}</span>
            </div>
            <div>
              <span style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase" }}>Meta Description</span>
              <p style={{ color: "var(--text-primary)", marginTop: "2px" }}>{page.metaDescription || "—"}</p>
              <span style={{ fontSize: "11px", color: metaDescOk ? "var(--accent)" : "#ef4444" }}>{page.metaDescription?.length || 0}/155 {metaDescOk ? "✅" : "⚠️"}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", marginTop: "10px", fontSize: "12px" }}>
            <span style={{ color: wordCountOk ? "var(--accent)" : "#ef4444" }}>Words: {page.wordCount || 0} {wordCountOk ? "✅" : "⚠️"}</span>
            <span style={{ color: faqs.length >= 5 ? "var(--accent)" : "#facc15" }}>FAQ: {faqs.length} {faqs.length >= 5 ? "✅" : "⚠️"}</span>
            <span style={{ color: schemas.length >= 2 ? "var(--accent)" : "#facc15" }}>Schema: {schemas.length} tipos {schemas.length >= 2 ? "✅" : "⚠️"}</span>
            <span style={{ color: links.length >= 3 ? "var(--accent)" : "#facc15" }}>Links: {links.length} {links.length >= 3 ? "✅" : "⚠️"}</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "24px" }}>
          {page.contentHtml ? (
            <div
              style={{
                background: "#fff",
                color: "#1a1a2e",
                padding: "32px",
                borderRadius: "12px",
                fontSize: "15px",
                lineHeight: 1.7,
                maxHeight: "400px",
                overflow: "auto",
              }}
              dangerouslySetInnerHTML={{ __html: page.contentHtml }}
            />
          ) : (
            <div style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}>
              Nenhum conteúdo gerado ainda.
            </div>
          )}
        </div>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <div style={{ padding: "0 24px 16px" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "10px" }}>FAQ ({faqs.length})</h3>
            {faqs.map((faq, i) => (
              <div key={i} style={{ padding: "10px 14px", marginBottom: "6px", background: "var(--bg-glass)", borderRadius: "8px", border: "1px solid var(--border)" }}>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>{faq.question}</p>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        )}

        {/* Internal Links */}
        {links.length > 0 && (
          <div style={{ padding: "0 24px 16px" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "10px" }}>Internal Links ({links.length})</h3>
            {links.map((link, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", fontSize: "13px", padding: "6px 0" }}>
                <span style={{ color: "var(--accent)" }}>→</span>
                <span style={{ color: "var(--text-primary)" }}>{pageMap[link.targetPageId] || link.anchorText}</span>
                <span style={{ color: "var(--text-muted)" }}>({link.url})</span>
              </div>
            ))}
          </div>
        )}

        {/* Schema */}
        {schemas.length > 0 && (
          <div style={{ padding: "0 24px 16px" }}>
            <button onClick={() => setShowSchema(!showSchema)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", fontFamily: "var(--font-display)", display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
              {showSchema ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              Schema JSON-LD ({schemas.length} tipos)
            </button>
            {showSchema && (
              <pre style={{ background: "var(--bg-deep)", padding: "16px", borderRadius: "8px", fontSize: "11px", color: "var(--text-secondary)", overflow: "auto", maxHeight: "200px", border: "1px solid var(--border)" }}>
                {JSON.stringify(schemas, null, 2)}
              </pre>
            )}
          </div>
        )}

        {/* Actions */}
        <div style={{ padding: "16px 24px", borderTop: "1px solid var(--border)", display: "flex", gap: "10px", justifyContent: "flex-end", position: "sticky", bottom: 0, background: "var(--bg-surface)" }}>
          {page.status === "review" && (
            <>
              <button onClick={onReject} className="btn-ghost" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#ef4444" }}>
                <RotateCcw size={14} /> Rejeitar
              </button>
              <button onClick={onApprove} className="btn-accent" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Check size={14} /> Aprovar
              </button>
            </>
          )}
          <button onClick={onClose} className="btn-ghost">Fechar</button>
        </div>
      </div>
    </div>
  );
}
