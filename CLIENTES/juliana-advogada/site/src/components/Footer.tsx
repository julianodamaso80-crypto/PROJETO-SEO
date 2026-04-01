import Link from "next/link";

const WA_LINK = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20uma%20consulta%20gratuita";

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-blue)", borderTop: "3px solid var(--accent)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "48px",
          marginBottom: "56px",
        }}>

          {/* Brand */}
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "15px",
                color: "#fff",
              }}>
                JD
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text-on-dark)",
                }}>
                  Dra. Juliana Darin
                </div>
                <div style={{
                  fontSize: "10px",
                  color: "var(--bg-sand)",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}>
                  Advocacia
                </div>
              </div>
            </div>
            <p style={{ fontSize: "14px", color: "var(--text-on-dark-dim)", lineHeight: 1.75 }}>
              Advocacia especializada em Direito do Trabalho e Previdenciário. Atendimento humanizado e transparente.
            </p>
          </div>

          {/* Áreas */}
          <div>
            <h4 style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--bg-sand)",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              Áreas de Atuação
            </h4>
            {[
              { href: "/trabalhista", label: "Direito Trabalhista" },
              { href: "/previdenciario", label: "Direito Previdenciário" },
              { href: "/blog", label: "Blog Jurídico" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  fontSize: "14px",
                  color: "var(--text-on-dark-dim)",
                  textDecoration: "none",
                  marginBottom: "10px",
                  transition: "color 0.2s",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Institucional */}
          <div>
            <h4 style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--bg-sand)",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              Institucional
            </h4>
            {[
              { href: "/sobre", label: "Sobre a Dra. Juliana" },
              { href: "#contato", label: "Contato" },
              { href: "#", label: "Política de Privacidade" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  display: "block",
                  fontSize: "14px",
                  color: "var(--text-on-dark-dim)",
                  textDecoration: "none",
                  marginBottom: "10px",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contato */}
          <div id="contato">
            <h4 style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--bg-sand)",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              Contato
            </h4>
            <p style={{ fontSize: "14px", color: "var(--text-on-dark-dim)", marginBottom: "6px" }}>
              Atendimento presencial e online
            </p>
            <p style={{ fontSize: "14px", color: "var(--text-on-dark-dim)", marginBottom: "20px" }}>
              Consulta inicial <strong style={{ color: "var(--bg-sand)" }}>gratuita</strong>
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                background: "#25D366",
                color: "#fff",
                borderRadius: "99px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(211,199,173,0.15)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(250,248,245,0.4)" }}>
            © {new Date().getFullYear()} Dra. Juliana Darin da Cunha — OAB [número]. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: "11px", color: "rgba(250,248,245,0.3)" }}>
            Este site não constitui consultoria jurídica. Cada caso requer análise individual.
          </p>
        </div>
      </div>
    </footer>
  );
}
