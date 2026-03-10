"use client";

import { useSession } from "next-auth/react";
import { FileText, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Artigos gerados",
    value: "24",
    icon: FileText,
    trend: "+12%",
  },
  {
    label: "Clientes ativos",
    value: "8",
    icon: Users,
    trend: "+3",
  },
  {
    label: "Keywords ranqueando",
    value: "142",
    icon: TrendingUp,
    trend: "+28%",
  },
];

const recentActivity = [
  { text: "Artigo publicado: \"Como escolher o melhor CRM\"", time: "Há 2h" },
  { text: "Novo cliente completou onboarding: Acme Corp", time: "Há 5h" },
  { text: "12 keywords subiram de posição", time: "Há 8h" },
  { text: "Artigo publicado: \"Guia de Marketing Digital 2026\"", time: "Há 1d" },
];

export default function DashboardPage() {
  const { data: session } = useSession();
  const firstName = session?.user?.name?.split(" ")[0] || "Usuário";

  return (
    <div style={{ position: "relative" }}>
      {/* Background orb */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "#00ff88",
          opacity: 0.03,
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

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
          Bom dia, {firstName} 👋
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            marginTop: "4px",
          }}
        >
          Aqui está o resumo da sua performance de SEO
        </p>
      </div>

      {/* Stats Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`glass animate-fade-up delay-${i + 1}`}
            style={{ padding: "24px", cursor: "default" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "var(--accent-dim)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                }}
              >
                <stat.icon size={20} />
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  background: "var(--accent-dim)",
                  padding: "4px 10px",
                  borderRadius: "99px",
                }}
              >
                {stat.trend}
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "36px",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "var(--text-secondary)",
                marginTop: "6px",
              }}
            >
              {stat.label}
            </div>
            {/* Fake trend line */}
            <svg
              viewBox="0 0 200 40"
              style={{ width: "100%", height: "32px", marginTop: "16px" }}
            >
              <polyline
                points="0,35 30,28 60,30 90,18 120,22 150,10 180,14 200,5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
              <polyline
                points="0,35 30,28 60,30 90,18 120,22 150,10 180,14 200,5"
                fill="url(#greenGradient)"
                stroke="none"
                opacity="0.1"
              />
              <defs>
                <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="animate-fade-up delay-4">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "16px",
          }}
        >
          Atividade recente
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {recentActivity.map((item, i) => (
            <div
              key={i}
              className={`glass animate-fade-up delay-${Math.min(i + 3, 5)}`}
              style={{
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "default",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: "14px", color: "var(--text-primary)" }}>
                  {item.text}
                </span>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                  marginLeft: "16px",
                }}
              >
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
