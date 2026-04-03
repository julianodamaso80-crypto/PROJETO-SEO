import type { Metadata } from "next";
import Link from "next/link";
import {
  SERVICES,
  CATEGORIES,
  type ServiceCategory,
} from "../content/services";

const WA_LINK = "https://wa.me/5521999999999";

export const metadata: Metadata = {
  title: "Nossos Serviços de Engenharia Civil no RJ",
  description:
    "Conheça os 28 serviços de engenharia civil da WSSJ no Rio de Janeiro: construção, reformas, manutenção, instalações, revestimentos, infraestrutura e serviços técnicos. Solicite orçamento.",
};

export default function ServicosPage() {
  /* group services by category */
  const categoryKeys = Object.keys(CATEGORIES) as ServiceCategory[];
  const grouped = categoryKeys.map((cat) => ({
    key: cat,
    label: CATEGORIES[cat].label,
    services: SERVICES.filter((s) => s.category === cat),
  }));

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--navy)", color: "var(--white)" }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            WSSJ Engenharia
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginTop: 24,
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Nossos Serviços de Engenharia Civil
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.7)",
              maxWidth: 560,
              margin: "20px auto 0",
              lineHeight: 1.7,
            }}
          >
            28 serviços especializados para construção, reforma e manutenção no
            Rio de Janeiro e Região Metropolitana.
          </p>
        </div>
      </section>

      {/* ── Service groups ───────────────────────────── */}
      <section className="section" style={{ background: "var(--concrete)" }}>
        <div className="container">
          {grouped.map((group) => (
            <div key={group.key} style={{ marginBottom: 64 }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "var(--navy)",
                  marginBottom: 8,
                }}
              >
                {group.label}
              </h2>
              <hr className="rule" style={{ marginBottom: 24 }} />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 20,
                }}
              >
                {group.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/servicos/${service.slug}`}
                    className="card"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <span style={{ fontSize: "2rem" }}>{service.icon}</span>
                    <h3
                      style={{
                        fontSize: "1.0625rem",
                        fontWeight: 700,
                        color: "var(--navy)",
                        marginTop: 12,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        marginTop: 8,
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {service.shortDesc}
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: 12,
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--accent)",
                      }}
                    >
                      Saiba mais &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        className="section"
        style={{
          background: "var(--steel)",
          color: "var(--white)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: 640 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800 }}>
            Não encontrou o que procura?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              marginTop: 12,
              lineHeight: 1.7,
            }}
          >
            Fale com nossa equipe. Atendemos demandas personalizadas com a mesma
            qualidade técnica e compromisso.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="btn-primary"
            style={{ marginTop: 28 }}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
