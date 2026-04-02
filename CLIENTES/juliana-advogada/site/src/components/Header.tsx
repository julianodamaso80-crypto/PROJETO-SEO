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
      borderBottom: "1px solid rgba(230,230,230,0.06)",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 32px",
        height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo — maior e mais visível */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0px" }}>
          <img src="/brand/logo-light.png" alt="DDC LAW" style={{ height: "100px", width: "auto" }} />
          <span style={{
            fontSize: "22px", fontWeight: 700, color: "var(--grey)",
            letterSpacing: "0.18em", textTransform: "uppercase",
            fontFamily: "var(--font), 'Darker Grotesque', sans-serif",
            lineHeight: 1.1,
            marginLeft: "4px",
          }}>
            LAW<br />ADVOGADOS
          </span>
        </Link>

        {/* Desktop Nav — mais visível, com peso */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} style={{
              fontSize: "14px", fontWeight: 600, color: "var(--grey)",
              textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase",
              transition: "color 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--grey)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--grey)")}
            >
              {item.label}
            </Link>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            fontSize: "12px", fontWeight: 700, padding: "12px 28px",
            background: "var(--blue)", color: "var(--grey)",
            letterSpacing: "0.1em", textTransform: "uppercase",
            textDecoration: "none", transition: "background 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--navy)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blue)")}
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="mobile-toggle" style={{
          display: "none", background: "none", border: "1px solid rgba(230,230,230,0.2)",
          borderRadius: "4px", padding: "8px 10px", cursor: "pointer", color: "var(--grey)",
        }} aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ padding: "8px 32px 24px", background: "var(--navy)", borderTop: "1px solid rgba(230,230,230,0.06)" }}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "16px 0", fontSize: "16px", fontWeight: 600,
              color: "rgba(230,230,230,0.7)", textDecoration: "none",
              borderBottom: "1px solid rgba(230,230,230,0.06)", letterSpacing: "0.04em",
            }}>
              {item.label}
            </Link>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer"
            onClick={() => setOpen(false)} style={{
              display: "flex", justifyContent: "center", marginTop: "20px", width: "100%",
              padding: "14px", background: "var(--blue)", color: "var(--grey)",
              fontSize: "14px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none",
            }}>
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
