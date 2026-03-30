"use client";

import { trpc } from "@/lib/trpc/client";
import Link from "next/link";
import { FileStack, ArrowRight, CheckCircle, Clock, Loader2, FileEdit } from "lucide-react";

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  draft: { label: "Rascunho", color: "#94a3b8", bg: "rgba(148,163,184,0.1)" },
  generating: { label: "Gerando...", color: "#facc15", bg: "rgba(250,204,21,0.1)" },
  review: { label: "Em Revisão", color: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
  approved: { label: "Aprovado", color: "var(--accent)", bg: "var(--accent-dim)" },
  in_production: { label: "Em Produção", color: "#a78bfa", bg: "rgba(167,139,250,0.1)" },
  completed: { label: "Concluído", color: "var(--accent)", bg: "var(--accent-dim)" },
};

export default function PlansListPage() {
  const { data: plans, isLoading } = trpc.contentPlan.list.useQuery();

  if (isLoading) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "var(--text-secondary)" }}>
        <Loader2 size={24} style={{ animation: "spin 1s linear infinite", margin: "0 auto 12px" }} />
        Carregando planos...
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const activePlans = plans?.filter((p) => p.status !== "draft") ?? [];

  return (
    <div className="animate-fade-up">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, color: "var(--text-primary)" }}>
            Planos de Conteúdo
          </h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>
            {activePlans.length} plano{activePlans.length !== 1 ? "s" : ""} gerado{activePlans.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {activePlans.length === 0 ? (
        <div
          style={{
            padding: "60px 40px",
            textAlign: "center",
            background: "var(--bg-glass)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <FileStack size={40} style={{ color: "var(--text-muted)", marginBottom: "16px" }} />
          <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "8px" }}>
            Nenhum plano gerado ainda.
          </p>
          <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
            Acesse um cliente, configure a produção e clique em &quot;Gerar Plano de Conteúdo&quot;.
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {activePlans.map((plan) => {
            const status = statusConfig[plan.status] || statusConfig.draft;
            const clusters = Array.isArray(plan.clusters) ? plan.clusters : [];
            const name = plan.businessName || plan.clientName || "Cliente";

            return (
              <Link
                key={plan.id}
                href={`/plans/${plan.id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="glass"
                  style={{
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: status.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {plan.status === "approved" ? (
                      <CheckCircle size={20} style={{ color: status.color }} />
                    ) : plan.status === "generating" ? (
                      <Loader2 size={20} style={{ color: status.color, animation: "spin 1s linear infinite" }} />
                    ) : plan.status === "review" ? (
                      <FileEdit size={20} style={{ color: status.color }} />
                    ) : (
                      <Clock size={20} style={{ color: status.color }} />
                    )}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                      <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)" }}>
                        {name}
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          padding: "2px 10px",
                          borderRadius: "99px",
                          background: status.bg,
                          color: status.color,
                          border: `1px solid ${status.color}22`,
                        }}
                      >
                        {status.label}
                      </span>
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--text-muted)", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                      <span>{plan.totalPages || 0} páginas</span>
                      <span>{clusters.length} clusters</span>
                      <span>Gerado em {new Date(plan.createdAt).toLocaleDateString("pt-BR")}</span>
                    </div>
                  </div>

                  <ArrowRight size={18} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
