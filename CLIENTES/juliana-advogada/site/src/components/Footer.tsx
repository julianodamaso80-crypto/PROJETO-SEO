import Link from "next/link";

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

export function Footer() {
  return (
    <footer style={{ background: "var(--navy)", borderTop: "2px solid var(--blue)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 32px" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "48px",
          marginBottom: "56px",
        }}>

          {/* Brand */}
          <div>
            <img src="/brand/logo-light.png" alt="DDC LAW" style={{ height: "24px", width: "auto", marginBottom: "8px", opacity: 0.7 }} />
            <div style={{
              fontSize: "11px",
              color: "var(--text-on-dark-muted)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}>
              Law
            </div>
            <p style={{ fontSize: "14px", color: "var(--text-on-dark-muted)", lineHeight: 1.7 }}>
              Direito do Trabalho e Previdenciário. Atendimento humanizado e transparente.
            </p>
          </div>

          {/* Áreas */}
          <div>
            <div style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--text-on-dark-muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              Áreas de Atuação
            </div>
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
                  color: "var(--text-on-dark-muted)",
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
            <div style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--text-on-dark-muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              Institucional
            </div>
            {[
              { href: "/sobre", label: "Sobre" },
              { href: "#contato", label: "Contato" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  display: "block",
                  fontSize: "14px",
                  color: "var(--text-on-dark-muted)",
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
            <div style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--text-on-dark-muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              Contato
            </div>
            <p style={{ fontSize: "14px", color: "var(--text-on-dark-muted)", marginBottom: "16px", lineHeight: 1.6 }}>
              Atendimento presencial e online<br />
              Consulta inicial gratuita
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                background: "rgba(247,245,240,0.08)",
                border: "1px solid rgba(247,245,240,0.15)",
                color: "var(--text-on-dark)",
                borderRadius: "99px",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid rgba(247,245,240,0.08)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ fontSize: "12px", color: "rgba(247,245,240,0.35)" }}>
            © {new Date().getFullYear()} DDC LAW — OAB [número]
          </p>
          <p style={{ fontSize: "11px", color: "rgba(247,245,240,0.25)" }}>
            Este site não constitui consultoria jurídica. Cada caso requer análise individual.
          </p>
        </div>
      </div>
    </footer>
  );
}
