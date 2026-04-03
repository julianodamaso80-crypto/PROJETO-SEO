"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const SERVICE_CATEGORIES = [
  { label: "Construção", href: "/servicos?cat=construcao" },
  { label: "Reformas", href: "/servicos?cat=reformas" },
  { label: "Manutenção", href: "/servicos?cat=manutencao" },
  { label: "Instalações", href: "/servicos?cat=instalacoes" },
  { label: "Revestimentos", href: "/servicos?cat=revestimentos" },
  { label: "Infraestrutura", href: "/servicos?cat=infraestrutura" },
  { label: "Serviços Técnicos", href: "/servicos?cat=tecnicos" },
];

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/servicos", hasDropdown: true },
  { label: "Regiões", href: "/regioes" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        height: "var(--header-h)",
        background: "var(--navy)",
        boxShadow: scrolled ? "0 2px 16px rgba(12,27,42,0.25)" : "none",
      }}
    >
      <div
        className="container mx-auto h-full flex items-center justify-between"
        style={{ maxWidth: "var(--container)", padding: "0 var(--section-px)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1 no-underline">
          <span
            className="text-xl font-extrabold tracking-tight"
            style={{ color: "var(--accent)" }}
          >
            WSSJ
          </span>
          <span
            className="text-sm font-light tracking-widest uppercase"
            style={{ color: "var(--white)" }}
          >
            Engenharia
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded flex items-center gap-1 no-underline"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--white)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                  }
                >
                  {item.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                {/* Dropdown */}
                <div
                  className="absolute top-full left-0 pt-2"
                  style={{
                    opacity: dropdownOpen ? 1 : 0,
                    visibility: dropdownOpen ? "visible" : "hidden",
                    transform: dropdownOpen
                      ? "translateY(0)"
                      : "translateY(-8px)",
                    transition:
                      "opacity 0.2s, visibility 0.2s, transform 0.2s",
                  }}
                >
                  <div
                    className="rounded-lg py-2 min-w-[220px]"
                    style={{
                      background: "var(--white)",
                      boxShadow: "var(--shadow-lg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {SERVICE_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        className="block px-4 py-2.5 text-sm no-underline transition-colors duration-150"
                        style={{ color: "var(--text-body)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "var(--concrete)";
                          e.currentTarget.style.color = "var(--accent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "var(--text-body)";
                        }}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded no-underline"
                style={{ color: "rgba(255,255,255,0.85)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--white)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                }
              >
                {item.label}
              </Link>
            )
          )}

          {/* CTA */}
          <Link
            href="https://wa.me/5521999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-4 text-sm"
            style={{ padding: "10px 24px" }}
          >
            Solicitar Orçamento
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300 origin-center"
            style={{
              background: "var(--white)",
              transform: mobileOpen
                ? "rotate(45deg) translate(2px, 2px)"
                : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "var(--white)",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300 origin-center"
            style={{
              background: "var(--white)",
              transform: mobileOpen
                ? "rotate(-45deg) translate(2px, -2px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className="md:hidden fixed inset-0 z-40"
        style={{
          top: "var(--header-h)",
          background: "var(--navy)",
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? "visible" : "hidden",
          transition: "opacity 0.3s, visibility 0.3s",
        }}
      >
        <nav className="flex flex-col p-6 gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg font-medium no-underline"
              style={{
                color: "var(--white)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile service sub-links */}
          <div className="mt-2 pl-4 flex flex-col gap-1">
            <span
              className="text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: "var(--accent)" }}
            >
              Serviços
            </span>
            {SERVICE_CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm no-underline"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          <Link
            href="https://wa.me/5521999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 text-center"
            onClick={() => setMobileOpen(false)}
          >
            Solicitar Orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}
