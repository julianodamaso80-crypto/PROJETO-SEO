import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio — Obras Realizadas",
  description:
    "Confira as obras realizadas pela WSSJ Engenharia no Rio de Janeiro: construção, reformas residenciais e comerciais, manutenção predial e muito mais.",
};

const PLACEHOLDER_PROJECTS = [
  { category: "Construção", description: "Construções do zero com projeto personalizado e acompanhamento técnico completo." },
  { category: "Reforma Residencial", description: "Reformas de apartamentos e casas com qualidade de acabamento e cumprimento de prazos." },
  { category: "Reforma de Fachada", description: "Recuperação e modernização de fachadas prediais com materiais adequados ao clima carioca." },
  { category: "Manutenção Predial", description: "Manutenção preventiva e corretiva em edifícios residenciais e comerciais." },
  { category: "Pavimentação", description: "Pavimentação em concreto, asfalto e intertravado para áreas internas e externas." },
  { category: "Reforma Comercial", description: "Reformas de lojas, escritórios e estabelecimentos comerciais com adequação normativa." },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        style={{ background: "var(--navy)", color: "var(--white)" }}
        className="section"
      >
        <div className="container" style={{ maxWidth: 800, textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Nossos Trabalhos
          </span>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              marginTop: 16,
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Obras Realizadas
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.7)",
              fontSize: "1.125rem",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Conheça alguns dos projetos executados pela WSSJ Engenharia no Rio de
            Janeiro e região metropolitana.
          </p>
        </div>
      </section>

      {/* ── Coming soon message ───────────────────────── */}
      <section className="section" style={{ background: "var(--concrete)" }}>
        <div className="container" style={{ maxWidth: 720, textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              background: "var(--white)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              padding: "48px 32px",
            }}
          >
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: 12,
              }}
            >
              Estamos preparando nosso portfólio digital.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
              Em breve, você poderá ver fotos e detalhes das nossas obras
              realizadas no Rio de Janeiro. Acompanhe nossas redes sociais para
              novidades.
            </p>
          </div>
        </div>

        {/* ── Placeholder cards ─────────────────────────── */}
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {PLACEHOLDER_PROJECTS.map((project) => (
            <div key={project.category} className="card">
              <div
                style={{
                  background: "var(--surface)",
                  borderRadius: "var(--radius-sm)",
                  height: 180,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  Foto em breve
                </span>
              </div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--accent)",
                  marginBottom: 8,
                }}
              >
                {project.category}
              </span>
              <p style={{ color: "var(--text-body)", lineHeight: 1.65 }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--white)", textAlign: "center" }}
      >
        <div className="container" style={{ maxWidth: 640 }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 16,
            }}
          >
            Enquanto isso, entre em contato para referências
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: 28, lineHeight: 1.7 }}>
            Podemos fornecer fotos de obras realizadas, contatos de clientes
            anteriores e detalhes sobre projetos semelhantes ao seu.
          </p>
          <a
            href="https://wa.me/5521999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar Referências
          </a>
        </div>
      </section>
    </>
  );
}
