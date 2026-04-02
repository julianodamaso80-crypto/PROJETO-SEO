"use client";

import { useState } from "react";
import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/trabalhista", label: "Trabalhista" },
  { href: "/previdenciario", label: "Previdenciário" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
];

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "var(--navy)",
      borderBottom: "1px solid rgba(230,230,230,0.08)",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 24px",
        height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "14px" }}>
          <img src="/brand/logo-light.png" alt="DDC LAW" style={{ height: "22px", width: "auto", opacity: 0.85 }} />
          <span style={{
            fontSize: "11px", fontWeight: 500, color: "rgba(230,230,230,0.4)",
            letterSpacing: "0.25em", textTransform: "uppercase",
          }}>
            Law
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} style={{
              fontSize: "12px", fontWeight: 500, color: "rgba(230,230,230,0.55)",
              textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase",
              transition: "color 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--grey)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(230,230,230,0.55)")}
            >
              {item.label}
            </Link>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            fontSize: "11px", fontWeight: 600, padding: "10px 24px",
            background: "var(--blue)", color: "var(--grey)",
            letterSpacing: "0.1em", textTransform: "uppercase",
            textDecoration: "none", transition: "background 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1a4a75")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blue)")}
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="mobile-toggle" style={{
          display: "none", background: "none", border: "1px solid rgba(230,230,230,0.15)",
          borderRadius: "4px", padding: "8px 10px", cursor: "pointer", color: "var(--grey)",
        }} aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ padding: "8px 24px 24px", background: "var(--navy)", borderTop: "1px solid rgba(230,230,230,0.06)" }}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "14px 0", fontSize: "14px",
              color: "rgba(230,230,230,0.6)", textDecoration: "none",
              borderBottom: "1px solid rgba(230,230,230,0.06)",
            }}>
              {item.label}
            </Link>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer"
            onClick={() => setOpen(false)} style={{
              display: "flex", justifyContent: "center", marginTop: "16px", width: "100%",
              padding: "12px", background: "var(--blue)", color: "var(--grey)",
              fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none",
            }}>
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
