import type { Metadata } from "next";
import Link from "next/link";
import { REGIONS } from "../content/regions";

export const metadata: Metadata = {
  title: "Regiões de Atendimento",
  description:
    "A WSSJ Engenharia atende 12 regiões do Rio de Janeiro e Região Metropolitana: Zona Sul, Barra, Tijuca, Centro, Niterói, Baixada Fluminense e mais. Veja bairros atendidos e solicite orçamento.",
};

export default function RegioesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--navy)", color: "var(--white)" }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Cobertura
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
            Regiões de Atendimento
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
            Atendemos todo o Rio de Janeiro e Região Metropolitana. Selecione
            sua região para ver bairros e serviços disponíveis.
          </p>
        </div>
      </section>

      {/* ── Region grid ──────────────────────────────── */}
      <section className="section" style={{ background: "var(--concrete)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {REGIONS.map((region) => (
              <Link
                key={region.slug}
                href={`/regioes/${region.slug}`}
                className="card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                  }}
                >
                  {region.name}
                </h2>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    marginTop: 8,
                  }}
                >
                  {region.neighborhoods.length} bairros atendidos
                </p>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-muted)",
                    marginTop: 4,
                    lineHeight: 1.5,
                  }}
                >
                  {region.neighborhoods.slice(0, 5).join(", ")}
                  {region.neighborhoods.length > 5 && " e mais..."}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: 16,
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                  }}
                >
                  Ver detalhes &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
