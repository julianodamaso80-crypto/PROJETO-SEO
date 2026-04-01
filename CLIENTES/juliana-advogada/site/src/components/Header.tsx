"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/trabalhista", label: "Trabalhista" },
  { href: "/previdenciario", label: "Previdenciário" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
];

const WA_LINK = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20uma%20consulta%20gratuita";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(250,248,245,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "16px",
              color: "#fff",
              letterSpacing: "0.05em",
            }}
          >
            DD
          </div>
          <div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "16px",
              color: "var(--text-primary)",
              lineHeight: 1.2,
            }}>
              DD Claw
            </div>
            <div style={{
              fontSize: "10px",
              color: "var(--text-secondary)",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}>
              Advocacia
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "28px", alignItems: "center" }} className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "13px", padding: "10px 24px" }}
          >
            Consulta Gratuita
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "8px",
            cursor: "pointer",
            color: "var(--text-primary)",
          }}
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="mobile-menu"
          style={{
            padding: "16px 24px 24px",
            background: "var(--bg-body)",
            borderTop: "1px solid var(--border-light)",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: "15px",
                color: "var(--text-secondary)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border-light)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px",
              fontSize: "14px",
            }}
          >
            Consulta Gratuita
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
