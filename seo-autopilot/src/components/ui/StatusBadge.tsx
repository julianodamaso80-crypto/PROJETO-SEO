"use client";

const statusStyles: Record<string, { bg: string; color: string; label: string }> = {
  pending: { bg: "rgba(113,113,122,0.2)", color: "#a1a1aa", label: "Pendente" },
  generating: { bg: "rgba(96,165,250,0.2)", color: "#60a5fa", label: "Gerando" },
  review: { bg: "rgba(250,204,21,0.2)", color: "#facc15", label: "Revisão" },
  approved: { bg: "var(--accent-dim)", color: "var(--accent)", label: "Aprovado" },
  published: { bg: "var(--accent-dim)", color: "var(--accent)", label: "Publicado" },
  publishing: { bg: "rgba(96,165,250,0.2)", color: "#60a5fa", label: "Publicando" },
  failed: { bg: "rgba(239,68,68,0.2)", color: "#f87171", label: "Falha" },
  completed: { bg: "var(--accent-dim)", color: "var(--accent)", label: "Completo" },
  draft: { bg: "rgba(113,113,122,0.2)", color: "#a1a1aa", label: "Rascunho" },
  in_production: { bg: "rgba(96,165,250,0.2)", color: "#60a5fa", label: "Em produção" },
};

export function StatusBadge({ status }: { status: string }) {
  const style = statusStyles[status] || statusStyles.pending;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 12px",
        borderRadius: "99px",
        fontSize: "12px",
        fontWeight: 600,
        background: style.bg,
        color: style.color,
        border: `1px solid ${style.color}33`,
      }}
    >
      {style.label}
    </span>
  );
}
