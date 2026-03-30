"use client";

import { useSession } from "next-auth/react";
import { trpc } from "@/lib/trpc/client";
import {
  Users,
  FileText,
  LayoutList,
  Upload,
  Clock,
  AlertTriangle,
  DollarSign,
  BarChart3,
} from "lucide-react";
import { StatCardSkeleton } from "@/components/ui/Skeletons";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { timeAgo } from "@/lib/utils";

export default function DashboardPage() {
  const { data: session } = useSession();
  const firstName = session?.user?.name?.split(" ")[0] || "Usuário";
  const { data: stats, isLoading } = trpc.dashboard.getStats.useQuery();

  if (isLoading) {
    return (
      <div>
        <div className="animate-fade-up" style={{ marginBottom: "32px" }}>
          <div className="shimmer" style={{ height: "28px", width: "200px", borderRadius: "6px", marginBottom: "8px" }} />
          <div className="shimmer" style={{ height: "14px", width: "300px", borderRadius: "4px" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "32px" }} className="dashboard-grid">
          {Array.from({ length: 8 }).map((_, i) => <StatCardSkeleton key={i} />)}
        </div>
      </div>
    );
  }

  const publishRate =
    stats && stats.totalPages > 0
      ? Math.round((stats.pagesPublished / stats.totalPages) * 100)
      : 0;

  const statCards = [
    { label: "Clientes", value: stats?.totalClients ?? 0, sublabel: `${stats?.totalPlans ?? 0} planos`, icon: Users, color: "#28374A" },
    { label: "Planos", value: stats?.totalPlans ?? 0, sublabel: `${stats?.activePlans ?? 0} ativos`, icon: LayoutList, color: "#28374A" },
    { label: "Páginas", value: stats?.totalPages ?? 0, sublabel: `${stats?.pagesGenerated ?? 0} geradas`, icon: FileText, color: "#754437" },
    { label: "Publicadas", value: stats?.pagesPublished ?? 0, sublabel: `${publishRate}% do total`, icon: Upload, color: "#6B6751" },
    { label: "Pendentes", value: stats?.pagesPending ?? 0, sublabel: "aguardando", icon: Clock, color: "#C4B697" },
    { label: "Falhas", value: stats?.pagesFailed ?? 0, sublabel: "necessitam atenção", icon: AlertTriangle, color: "#dc2626" },
    { label: "Custo IA", value: `R$ ${(stats?.totalCost ?? 0).toFixed(2)}`, sublabel: "total gasto", icon: DollarSign, color: "#754437" },
    { label: "Taxa Publicação", value: `${publishRate}%`, sublabel: `${stats?.pagesPublished ?? 0} de ${stats?.totalPages ?? 0}`, icon: BarChart3, color: "#28374A" },
  ];

  const weeklyData = stats?.weeklyProduction ?? [];
  const maxCount = Math.max(...weeklyData.map((w) => w.count), 1);

  return (
    <div style={{ position: "relative" }}>
      {/* Header */}
      <div className="animate-fade-up" style={{ marginBottom: "32px" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "28px",
            fontWeight: 700,
            color: "var(--text-primary)",
          }}
        >
          Bom dia, {firstName}
        </h1>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "4px" }}>
          Aqui esta o resumo da sua operacao SEO
        </p>
      </div>

      {/* Stats Grid */}
      <div
        className="dashboard-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        {statCards.map((stat, i) => (
          <div
            key={stat.label}
            className={`glass animate-fade-up delay-${Math.min(i + 1, 8)}`}
            style={{ padding: "20px", cursor: "default" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: `${stat.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: stat.color,
                }}
              >
                <stat.icon size={18} />
              </div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>
              {stat.label}
            </div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
              {stat.sublabel}
            </div>
          </div>
        ))}
      </div>

      {/* Two columns: Activity + Weekly chart */}
      <div
        className="dashboard-two-col"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        {/* Recent Activity */}
        <div className="animate-fade-up delay-4">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "14px",
            }}
          >
            Atividade Recente
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {(!stats?.recentActivity || stats.recentActivity.length === 0) && (
              <div
                className="glass"
                style={{
                  padding: "32px 20px",
                  textAlign: "center",
                  color: "var(--text-muted)",
                  fontSize: "13px",
                }}
              >
                Nenhuma atividade ainda. Gere seu primeiro plano de conteudo!
              </div>
            )}
            {stats?.recentActivity?.map((item) => (
              <div
                key={item.id}
                className="glass"
                style={{
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <StatusBadge status={item.status} />
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "var(--text-primary)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </div>
                    {item.wpUrl && (
                      <a
                        href={item.wpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--accent)",
                          fontSize: "11px",
                          textDecoration: "none",
                        }}
                      >
                        ver no site
                      </a>
                    )}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    whiteSpace: "nowrap",
                    marginLeft: "12px",
                    flexShrink: 0,
                  }}
                >
                  {timeAgo(item.updatedAt)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Production Chart */}
        <div className="animate-fade-up delay-5">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "14px",
            }}
          >
            Producao Semanal
          </h2>
          <div className="glass" style={{ padding: "24px", minHeight: "220px" }}>
            {weeklyData.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "180px",
                  color: "var(--text-muted)",
                  fontSize: "13px",
                }}
              >
                Sem dados de producao nas ultimas 4 semanas
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  gap: "16px",
                  height: "180px",
                  paddingTop: "10px",
                }}
              >
                {weeklyData.map((week, i) => {
                  const heightPx = Math.max((week.count / maxCount) * 140, 4);
                  return (
                    <div
                      key={week.week}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                        }}
                      >
                        {week.count}
                      </span>
                      <div
                        style={{
                          width: "48px",
                          height: `${heightPx}px`,
                          background: "linear-gradient(to top, #754437, #28374A)",
                          borderRadius: "6px 6px 2px 2px",
                          transition: "height 0.5s ease",
                        }}
                      />
                      <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                        Sem {i + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .dashboard-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .dashboard-two-col { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 639px) {
          .dashboard-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
