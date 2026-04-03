import Link from "next/link";
import { SERVICES, CATEGORIES, type ServiceCategory } from "./content/services";
import { REGIONS } from "./content/regions";
import { blogPosts } from "./content/posts";

const WA_LINK = "https://wa.me/5521999999999";

/* ── category card descriptions + icons ──────────────── */
const CATEGORY_META: Record<
  ServiceCategory,
  { icon: string; description: string }
> = {
  construcao: {
    icon: "🏗️",
    description:
      "Obras completas do zero, estruturas em concreto, galpões e steel frame.",
  },
  reformas: {
    icon: "🔨",
    description:
      "Reforma residencial, comercial, fachadas, retrofit e ampliações.",
  },
  manutencao: {
    icon: "🔧",
    description:
      "Manutenção preventiva, corretiva, elétrica, hidráulica e reparos gerais.",
  },
  instalacoes: {
    icon: "⚡",
    description:
      "Instalações elétricas, hidráulicas e sistemas de drywall completos.",
  },
  revestimentos: {
    icon: "🧱",
    description:
      "Pisos, paredes, pintura, impermeabilização e alvenaria especializada.",
  },
  infraestrutura: {
    icon: "🛤️",
    description:
      "Pavimentação, drenagem, adequações normativas e infraestrutura urbana.",
  },
  tecnicos: {
    icon: "📋",
    description:
      "Vistorias, laudos técnicos, projetos executivos e acompanhamento de obra.",
  },
};

/* ── featured regions for homepage ───────────────────── */
const FEATURED_REGION_SLUGS = [
  "zona-sul",
  "barra-da-tijuca",
  "tijuca-e-regiao",
  "centro",
  "niteroi",
  "baixada-fluminense",
];

export default function HomePage() {
  /* group services by category, pick first of each */
  const categoryKeys = Object.keys(CATEGORIES) as ServiceCategory[];
  const firstServiceByCategory = categoryKeys.map((cat) => {
    const service = SERVICES.find((s) => s.category === cat)!;
    return { category: cat, service };
  });

  const featuredRegions = FEATURED_REGION_SLUGS.map(
    (slug) => REGIONS.find((r) => r.slug === slug)!
  );

  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════ */}
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
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginTop: 24,
              maxWidth: 800,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Engenharia Civil, Reformas e Manutenção no Rio de Janeiro
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.75)",
              maxWidth: 620,
              margin: "24px auto 0",
              lineHeight: 1.7,
            }}
          >
            Mais de 5 anos de experiência, 25+ serviços especializados e
            credencial CREA. Atendemos todo o Rio de Janeiro e Região
            Metropolitana com qualidade técnica e transparência.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 40,
            }}
          >
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn-primary">
              Solicitar Orçamento
            </a>
            <a href="#servicos" className="btn-outline">
              Nossos Serviços
            </a>
          </div>

          {/* Trust bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px 32px",
              marginTop: 56,
              paddingTop: 32,
              borderTop: "1px solid rgba(255,255,255,0.12)",
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.6)",
              fontWeight: 500,
            }}
          >
            <span>CREA Registrado</span>
            <span>·</span>
            <span>5+ Anos</span>
            <span>·</span>
            <span>60+ Bairros</span>
            <span>·</span>
            <span>Atendemos Todo RJ</span>
          </div>
        </div>
      </section>

      {/* ═══ SERVIÇOS ═══════════════════════════════════ */}
      <section id="servicos" className="section" style={{ background: "var(--concrete)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              O que fazemos
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--navy)",
                marginTop: 12,
              }}
            >
              Nossos Serviços
            </h2>
            <hr className="rule" style={{ margin: "16px auto 0" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {firstServiceByCategory.map(({ category, service }) => {
              const meta = CATEGORY_META[category];
              return (
                <Link
                  key={category}
                  href={`/servicos/${service.slug}`}
                  className="card"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span style={{ fontSize: "2.5rem" }}>{meta.icon}</span>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginTop: 16,
                    }}
                  >
                    {CATEGORIES[category].label}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-muted)",
                      marginTop: 8,
                      lineHeight: 1.6,
                    }}
                  >
                    {meta.description}
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
                    Ver serviços &rarr;
                  </span>
                </Link>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/servicos" className="btn-primary">
              Ver todos os 28 serviços
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ NÚMEROS ════════════════════════════════════ */}
      <section
        className="section"
        style={{ background: "var(--navy)", color: "var(--white)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 32,
              textAlign: "center",
            }}
          >
            {[
              { value: "5+", label: "Anos de Experiência" },
              { value: "25+", label: "Serviços Especializados" },
              { value: "60+", label: "Bairros Atendidos" },
              { value: "100%", label: "Credenciado CREA" },
            ].map((stat) => (
              <div key={stat.label}>
                <span
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    fontWeight: 800,
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <p
                  style={{
                    fontSize: "1rem",
                    marginTop: 8,
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REGIÕES ════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Cobertura
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--navy)",
                marginTop: 12,
              }}
            >
              Onde Atuamos
            </h2>
            <hr className="rule" style={{ margin: "16px auto 0" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {featuredRegions.map((region) => (
              <Link
                key={region.slug}
                href={`/regioes/${region.slug}`}
                className="card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                  }}
                >
                  {region.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    marginTop: 8,
                  }}
                >
                  {region.neighborhoods.length} bairros atendidos
                </p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: 12,
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                  }}
                >
                  Ver região &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/regioes" className="btn-primary">
              Ver todas as regiões
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ POR QUE A WSSJ ════════════════════════════ */}
      <section className="section" style={{ background: "var(--concrete)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Diferenciais
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--navy)",
                marginTop: 12,
              }}
            >
              Por Que a WSSJ
            </h2>
            <hr className="rule" style={{ margin: "16px auto 0" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                icon: "🏛️",
                title: "Equipe Técnica CREA",
                desc: "Engenheiros e técnicos registrados no CREA-RJ. Toda obra com ART e responsabilidade técnica.",
              },
              {
                icon: "🤝",
                title: "Atendimento Personalizado",
                desc: "Cada projeto é único. Ouvimos suas necessidades e propomos a melhor solução técnica e financeira.",
              },
              {
                icon: "📊",
                title: "Transparência Total",
                desc: "Orçamento detalhado, cronograma claro e relatórios de acompanhamento em cada etapa da obra.",
              },
              {
                icon: "✅",
                title: "Prazo e Qualidade",
                desc: "Compromisso com prazos acordados e materiais de primeira linha. Entregamos o que prometemos.",
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "2.5rem" }}>{item.icon}</span>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginTop: 16,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-muted)",
                    marginTop: 8,
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOG PREVIEW ══════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Blog
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--navy)",
                marginTop: 12,
              }}
            >
              Conteúdo Técnico
            </h2>
            <hr className="rule" style={{ margin: "16px auto 0" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {post.category}
                </span>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginTop: 8,
                    lineHeight: 1.4,
                  }}
                >
                  {post.title}
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
                  {post.excerpt}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 16,
                    fontSize: "0.8125rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {post.readTime} de leitura
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═════════════════════════════════ */}
      <section
        className="section"
        style={{
          background: "var(--steel)",
          color: "var(--white)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: 640 }}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Precisa de um orçamento?
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.7)",
              marginTop: 16,
              lineHeight: 1.7,
            }}
          >
            Fale diretamente com nossa equipe técnica pelo WhatsApp. Atendimento
            rápido, orçamento sem compromisso e visita técnica gratuita.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="btn-primary"
            style={{ marginTop: 32 }}
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
