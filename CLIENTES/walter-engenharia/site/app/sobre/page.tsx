import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a WSSJ Engenharia",
  description:
    "Conheça a WSSJ Engenharia: mais de 5 anos de experiência em construção civil, reformas e manutenção no Rio de Janeiro. Equipe técnica com credencial CREA.",
};

const VALUES = [
  {
    title: "Qualidade",
    text: "Utilizamos materiais de primeira linha e técnicas atualizadas para garantir durabilidade e acabamento impecável em cada projeto.",
  },
  {
    title: "Transparência",
    text: "Orçamentos detalhados, cronograma claro e comunicação aberta durante toda a obra. Sem surpresas no final.",
  },
  {
    title: "Compromisso",
    text: "Cumprimos prazos e assumimos responsabilidade técnica por cada obra, com ART registrada no CREA.",
  },
  {
    title: "Atendimento Personalizado",
    text: "Cada projeto é único. Ouvimos suas necessidades e desenvolvemos soluções sob medida para seu imóvel.",
  },
];

const DIFFERENTIALS = [
  {
    icon: "👷",
    title: "Equipe Técnica Qualificada",
    text: "Profissionais experientes, supervisionados por engenheiro civil registrado no CREA-RJ.",
  },
  {
    icon: "📋",
    title: "Atendimento Personalizado",
    text: "Visita técnica, orçamento detalhado e acompanhamento dedicado do início ao fim da obra.",
  },
  {
    icon: "🔍",
    title: "Transparência Total",
    text: "Relatórios de progresso, prestação de contas e comunicação direta com o responsável técnico.",
  },
  {
    icon: "✅",
    title: "Garantia de Qualidade",
    text: "Materiais de primeira linha, técnicas atualizadas e garantia em todos os serviços executados.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        style={{ background: "var(--navy)", color: "var(--white)" }}
        className="section"
      >
        <div className="container" style={{ maxWidth: 800, textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Quem Somos
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
            Sobre a WSSJ Engenharia
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.7)",
              fontSize: "1.125rem",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Construção, reformas e manutenção com responsabilidade técnica no Rio
            de Janeiro e região metropolitana.
          </p>
        </div>
      </section>

      {/* ── Company Story ─────────────────────────────── */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <hr className="rule" style={{ marginBottom: 32 }} />
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 20,
            }}
          >
            Nossa História
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--text-body)", marginBottom: 16 }}>
            A <strong>WSSJ Serviços LTDA</strong> nasceu da paixão pela engenharia
            civil e da vontade de levar serviços técnicos de qualidade a todos os
            cantos do Rio de Janeiro. Fundada há mais de 5 anos, a empresa
            construiu uma trajetória sólida atuando em obras de construção,
            reforma e manutenção predial e residencial.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--text-body)", marginBottom: 16 }}>
            Desde o início, nosso compromisso foi unir conhecimento técnico,
            materiais de qualidade e atendimento humanizado. Atendemos desde
            pequenos reparos até obras completas de construção civil, sempre com
            engenheiro responsável e documentação em dia.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--text-body)" }}>
            Hoje, a WSSJ Engenharia é referência em engenharia civil no Rio de
            Janeiro, atendendo a Zona Sul, Zona Norte, Zona Oeste, Barra da
            Tijuca, Niterói e toda a região metropolitana. Nosso portfólio inclui
            reformas residenciais, reformas comerciais, construções do zero,
            manutenção preventiva e corretiva, impermeabilização, instalações
            elétricas e hidráulicas, e muito mais.
          </p>
        </div>
      </section>

      {/* ── Mission / Vision / Values ─────────────────── */}
      <section className="section" style={{ background: "var(--concrete)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
              marginBottom: 56,
            }}
          >
            {/* Mission */}
            <div className="card">
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  marginBottom: 12,
                }}
              >
                Missão
              </h3>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7 }}>
                Oferecer serviços de engenharia civil com excelência técnica, preço
                justo e compromisso com prazos, contribuindo para a valorização e
                segurança dos imóveis dos nossos clientes no Rio de Janeiro.
              </p>
            </div>

            {/* Vision */}
            <div className="card">
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  marginBottom: 12,
                }}
              >
                Visão
              </h3>
              <p style={{ color: "var(--text-body)", lineHeight: 1.7 }}>
                Ser a empresa de engenharia civil mais confiável do Rio de Janeiro,
                reconhecida pela qualidade, transparência e compromisso em cada
                obra executada.
              </p>
            </div>

            {/* Values */}
            <div className="card">
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  marginBottom: 12,
                }}
              >
                Valores
              </h3>
              <ul style={{ paddingLeft: 20, color: "var(--text-body)", lineHeight: 1.8 }}>
                {VALUES.map((v) => (
                  <li key={v.title}>
                    <strong>{v.title}:</strong> {v.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREA Credential ───────────────────────────── */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--white)" }}>
        <div
          className="container"
          style={{
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Credencial CREA-RJ
          </h2>
          <hr className="rule" style={{ margin: "0 auto 24px" }} />
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,.75)",
              maxWidth: 640,
              margin: "0 auto 16px",
            }}
          >
            Todas as nossas obras contam com <strong style={{ color: "var(--white)" }}>Anotação de Responsabilidade Técnica
            (ART)</strong> registrada no CREA-RJ, garantindo que cada projeto é
            executado sob supervisão de engenheiro civil habilitado.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,.75)",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Isso significa segurança jurídica, conformidade com as normas técnicas
            da ABNT e responsabilidade profissional em cada etapa da sua obra.
          </p>
        </div>
      </section>

      {/* ── Differentials ─────────────────────────────── */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Por Que Escolher a WSSJ
            </span>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginTop: 12,
              }}
            >
              Nossos Diferenciais
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 28,
            }}
          >
            {DIFFERENTIALS.map((d) => (
              <div key={d.title} className="card" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "2.5rem", display: "block", marginBottom: 16 }}>
                  {d.icon}
                </span>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                  }}
                >
                  {d.title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.65 }}>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--concrete)", textAlign: "center" }}
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
            Vamos conversar sobre o seu projeto?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: 28, lineHeight: 1.7 }}>
            Entre em contato para uma visita técnica e orçamento sem compromisso.
            Atendemos todo o Rio de Janeiro e região metropolitana.
          </p>
          <a
            href="https://wa.me/5521999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </>
  );
}
