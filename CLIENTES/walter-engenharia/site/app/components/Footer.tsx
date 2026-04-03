"use client";

import Link from "next/link";

const FOOTER_SERVICES = [
  { label: "Construção do Zero", href: "/servicos/construcao-do-zero" },
  { label: "Reforma Residencial", href: "/servicos/reforma-residencial" },
  { label: "Reforma Comercial", href: "/servicos/reforma-comercial" },
  { label: "Manutenção Preventiva", href: "/servicos/manutencao-preventiva" },
  { label: "Pintura Predial", href: "/servicos/pintura-predial-e-residencial" },
  { label: "Impermeabilização", href: "/servicos/impermeabilizacao" },
  { label: "Instalações Elétricas", href: "/servicos/instalacoes-eletricas" },
  { label: "Laudos Técnicos", href: "/servicos/laudos-tecnicos" },
];

const FOOTER_REGIONS = [
  { label: "Zona Sul", href: "/regioes/zona-sul" },
  { label: "Barra da Tijuca", href: "/regioes/barra-da-tijuca" },
  { label: "Tijuca e Região", href: "/regioes/tijuca-e-regiao" },
  { label: "Centro", href: "/regioes/centro" },
  { label: "Niterói", href: "/regioes/niteroi" },
  { label: "Baixada Fluminense", href: "/regioes/baixada-fluminense" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--navy)", color: "var(--white)" }}>
      {/* Main footer grid */}
      <div
        className="container mx-auto section"
        style={{
          maxWidth: "var(--container)",
          paddingTop: "80px",
          paddingBottom: "48px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Company */}
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span
                className="text-xl font-extrabold tracking-tight"
                style={{ color: "var(--accent)" }}
              >
                WSSJ
              </span>
              <span className="text-sm font-light tracking-widest uppercase">
                Engenharia
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Empresa de engenharia civil no Rio de Janeiro especializada em
              construção, reformas e manutenção. Soluções técnicas com qualidade
              e compromisso há mais de 5 anos.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-2 rounded text-xs font-semibold"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M8 1L10 5.5L15 6.2L11.5 9.5L12.4 14.5L8 12.2L3.6 14.5L4.5 9.5L1 6.2L6 5.5L8 1Z" />
              </svg>
              Credenciada CREA
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-wider mb-5"
              style={{ color: "var(--accent)" }}
            >
              Serviços
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm no-underline transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      (e.currentTarget.style.color = "var(--white)")
                    }
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                    }
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Regions */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-wider mb-5"
              style={{ color: "var(--accent)" }}
            >
              Regiões
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_REGIONS.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm no-underline transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      (e.currentTarget.style.color = "var(--white)")
                    }
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                    }
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-wider mb-5"
              style={{ color: "var(--accent)" }}
            >
              Contato
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://wa.me/5521999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm no-underline transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "var(--white)")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                  }
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/wssjengenharia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm no-underline transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "var(--white)")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                  }
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @wssjengenharia
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@wssjengenharia.com.br"
                  className="flex items-center gap-3 text-sm no-underline transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "var(--white)")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                  }
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 6L2 7" />
                  </svg>
                  contato@wssjengenharia.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6"
          style={{
            maxWidth: "var(--container)",
            padding: "24px var(--section-px)",
          }}
        >
          <p
            className="text-xs text-center md:text-left"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            &copy; {currentYear} WSSJ Serviços LTDA. Todos os direitos
            reservados.
          </p>
          <p
            className="text-xs text-center md:text-right"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Atendemos todo o Rio de Janeiro e região
          </p>
        </div>
      </div>
    </footer>
  );
}
