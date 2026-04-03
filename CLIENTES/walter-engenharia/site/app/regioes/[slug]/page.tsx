import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { REGIONS } from "../../content/regions";
import { SERVICES } from "../../content/services";

const WA_LINK = "https://wa.me/5521999999999";

/* ── Static params ───────────────────────────────────── */
export function generateStaticParams() {
  return REGIONS.map((r) => ({ slug: r.slug }));
}

/* ── Dynamic metadata ────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const region = REGIONS.find((r) => r.slug === slug);
  if (!region) return {};

  return {
    title: region.title,
    description: `${region.name}: serviços de engenharia civil, reformas e manutenção. ${region.neighborhoods.length} bairros atendidos. WSSJ Engenharia — CREA registrado.`,
  };
}

/* ── Page ─────────────────────────────────────────────── */
export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = REGIONS.find((r) => r.slug === slug);
  if (!region) notFound();

  /* Match mainServices names to service slugs */
  const matchedServices = region.mainServices
    .map((name) => SERVICES.find((s) => s.title === name))
    .filter(Boolean);

  /* Split description into paragraphs */
  const paragraphs = region.description
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
          <p className="eyebrow">Regiões de Atendimento</p>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginTop: 20,
            }}
          >
            {region.title}
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.7)",
              marginTop: 16,
              lineHeight: 1.7,
            }}
          >
            {region.neighborhoods.length} bairros atendidos na{" "}
            {region.name}. Serviços completos de engenharia civil com equipe
            técnica CREA.
          </p>
        </div>
      </section>

      {/* ── Description ────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--navy)",
              marginBottom: 24,
            }}
          >
            Engenharia Civil na {region.name}
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
      </section>

      {/* ── Neighborhoods ──────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--concrete)" }}
      >
        <div className="container" style={{ maxWidth: 800 }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--navy)",
              marginBottom: 8,
            }}
          >
            Bairros Atendidos
          </h2>
          <hr className="rule" style={{ marginBottom: 24 }} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 12,
            }}
          >
            {region.neighborhoods.map((bairro) => (
              <div
                key={bairro}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "12px 16px",
                  fontSize: "0.9375rem",
                  color: "var(--text-body)",
                  fontWeight: 500,
                }}
              >
                {bairro}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────── */}
      {matchedServices.length > 0 && (
        <section className="section">
          <div className="container" style={{ maxWidth: 800 }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "var(--navy)",
                marginBottom: 8,
              }}
            >
              Serviços na {region.name}
            </h2>
            <hr className="rule" style={{ marginBottom: 24 }} />

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(240px, 1fr))",
                gap: 20,
              }}
            >
              {matchedServices.map((service) => (
                <Link
                  key={service!.slug}
                  href={`/servicos/${service!.slug}`}
                  className="card"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{service!.icon}</span>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginTop: 8,
                    }}
                  >
                    {service!.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                      marginTop: 6,
                      lineHeight: 1.5,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {service!.shortDesc}
                  </p>
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
            Precisa de engenharia na {region.name}?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              marginTop: 12,
              lineHeight: 1.7,
            }}
          >
            Solicite um orçamento sem compromisso. Visita técnica gratuita em
            toda a região.
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
