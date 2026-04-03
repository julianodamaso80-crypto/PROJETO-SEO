import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "../../content/services";

const WA_LINK = "https://wa.me/5521999999999";

/* ── Static params ───────────────────────────────────── */
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/* ── Dynamic metadata ────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} no RJ`,
    description: service.shortDesc,
    keywords: service.keywords,
  };
}

/* ── Page ─────────────────────────────────────────────── */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  /* related services from same category (excluding current) */
  const related = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  ).slice(0, 5);

  /* split fullDesc into paragraphs */
  const paragraphs = service.fullDesc
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--navy)", color: "var(--white)" }}
      >
        <div className="container" style={{ maxWidth: 800 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              background: "rgba(232,113,43,0.12)",
              padding: "6px 14px",
              borderRadius: "var(--radius-full)",
            }}
          >
            {service.categoryLabel}
          </span>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginTop: 20,
            }}
          >
            {service.title}
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.7)",
              marginTop: 16,
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            {service.shortDesc}
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="btn-primary"
            style={{ marginTop: 32 }}
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* ── Content ────────────────────────────────── */}
      <section className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 64,
            maxWidth: 900,
          }}
        >
          {/* Full description */}
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "var(--navy)",
                marginBottom: 24,
              }}
            >
              Sobre o Serviço
            </h2>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "var(--text-body)",
                  marginBottom: 20,
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* FAQ */}
          {service.faq.length > 0 && (
            <div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "var(--navy)",
                  marginBottom: 24,
                }}
              >
                Perguntas Frequentes
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {service.faq.map((item, i) => (
                  <details
                    key={i}
                    className="card"
                    style={{ cursor: "pointer" }}
                  >
                    <summary
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--navy)",
                        listStyle: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      {item.q}
                      <span
                        style={{
                          flexShrink: 0,
                          fontSize: "1.25rem",
                          color: "var(--accent)",
                        }}
                      >
                        +
                      </span>
                    </summary>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.7,
                        color: "var(--text-body)",
                        marginTop: 16,
                      }}
                    >
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Related services ───────────────────────── */}
      {related.length > 0 && (
        <section
          className="section"
          style={{ background: "var(--concrete)" }}
        >
          <div className="container">
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "var(--navy)",
                marginBottom: 8,
                textAlign: "center",
              }}
            >
              Outros Serviços de {service.categoryLabel}
            </h2>
            <hr className="rule" style={{ margin: "0 auto 32px" }} />

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 20,
              }}
            >
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/servicos/${rel.slug}`}
                  className="card"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: "1.75rem" }}>{rel.icon}</span>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginTop: 12,
                    }}
                  >
                    {rel.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ────────────────────────────────────── */}
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
            Precisa de {service.title.toLowerCase()}?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              marginTop: 12,
              lineHeight: 1.7,
            }}
          >
            Solicite um orçamento sem compromisso. Atendemos todo o Rio de
            Janeiro e Região Metropolitana com equipe técnica CREA.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="btn-primary"
            style={{ marginTop: 28 }}
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
