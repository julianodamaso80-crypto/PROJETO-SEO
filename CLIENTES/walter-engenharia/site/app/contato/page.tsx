import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a WSSJ Engenharia. Solicite orçamento para construção, reformas e manutenção no Rio de Janeiro pelo WhatsApp, e-mail ou formulário.",
};

const COVERAGE = [
  "Zona Sul",
  "Zona Norte",
  "Zona Oeste",
  "Barra da Tijuca",
  "Recreio dos Bandeirantes",
  "Tijuca e Região",
  "Centro",
  "Niterói",
  "São Gonçalo",
  "Duque de Caxias",
  "Nova Iguaçu",
  "Baixada Fluminense",
];

export default function ContatoPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        style={{ background: "var(--navy)", color: "var(--white)" }}
        className="section"
      >
        <div className="container" style={{ maxWidth: 800, textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Atendimento
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
            Fale Conosco
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.7)",
              fontSize: "1.125rem",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Solicite um orçamento sem compromisso ou tire suas dúvidas. Estamos
            prontos para atender você.
          </p>
        </div>
      </section>

      {/* ── Two columns: info + form ──────────────────── */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
          }}
        >
          {/* Left: Contact Info */}
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 28,
              }}
            >
              Informações de Contato
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* WhatsApp */}
              <div>
                <h3
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    marginBottom: 6,
                  }}
                >
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/5521999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none", fontSize: "1.0625rem" }}
                >
                  (21) 99999-9999
                </a>
              </div>

              {/* Email */}
              <div>
                <h3
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    marginBottom: 6,
                  }}
                >
                  E-mail
                </h3>
                <a
                  href="mailto:wr.serv@hotmail.com"
                  style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none", fontSize: "1.0625rem" }}
                >
                  wr.serv@hotmail.com
                </a>
              </div>

              {/* Instagram */}
              <div>
                <h3
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    marginBottom: 6,
                  }}
                >
                  Instagram
                </h3>
                <a
                  href="https://instagram.com/wssjengenharia"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none", fontSize: "1.0625rem" }}
                >
                  @wssjengenharia
                </a>
              </div>

              {/* Hours */}
              <div>
                <h3
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    marginBottom: 6,
                  }}
                >
                  Horário de Atendimento
                </h3>
                <p style={{ fontSize: "1.0625rem", color: "var(--text-body)" }}>
                  Segunda a Sexta: 08:00 &ndash; 18:00
                </p>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)" }}>
                  Sábados: 08:00 &ndash; 12:00 (sob agendamento)
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 28,
              }}
            >
              Envie sua Mensagem
            </h2>

            <form
              action="#"
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 6,
                  }}
                >
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "1rem",
                    color: "var(--text-body)",
                    background: "var(--white)",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 6,
                  }}
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "1rem",
                    color: "var(--text-body)",
                    background: "var(--white)",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 6,
                  }}
                >
                  Telefone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(21) 99999-9999"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "1rem",
                    color: "var(--text-body)",
                    background: "var(--white)",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 6,
                  }}
                >
                  Tipo de serviço
                </label>
                <select
                  id="service"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "1rem",
                    color: "var(--text-body)",
                    background: "var(--white)",
                    outline: "none",
                  }}
                >
                  <option value="">Selecione um serviço</option>
                  <option value="construcao">Construção</option>
                  <option value="reforma-residencial">Reforma Residencial</option>
                  <option value="reforma-comercial">Reforma Comercial</option>
                  <option value="manutencao">Manutenção Predial</option>
                  <option value="impermeabilizacao">Impermeabilização</option>
                  <option value="instalacoes">Instalações Elétricas/Hidráulicas</option>
                  <option value="pintura">Pintura</option>
                  <option value="laudos">Laudos e Vistorias</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 6,
                  }}
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Descreva seu projeto ou dúvida..."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "1rem",
                    color: "var(--text-body)",
                    background: "var(--white)",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ───────────────────────────── */}
      <section
        className="section"
        style={{
          background: "var(--concrete)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <div
            style={{
              background: "var(--white)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              padding: "64px 32px",
              marginBottom: 40,
            }}
          >
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: 8,
              }}
            >
              Atendemos todo o Rio de Janeiro e região metropolitana
            </p>
            <p style={{ color: "var(--text-muted)" }}>
              Visitas técnicas e orçamentos em toda a área de cobertura abaixo.
            </p>
          </div>

          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 24,
            }}
          >
            Regiões de Atendimento
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {COVERAGE.map((r) => (
              <span
                key={r}
                style={{
                  padding: "8px 20px",
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "var(--text-body)",
                }}
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
