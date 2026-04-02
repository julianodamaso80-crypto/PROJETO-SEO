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
      background: "rgba(250,250,250,0.96)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-light)",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 24px",
        height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo real DDC */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/brand/logo-navy.png" alt="DDC LAW" style={{ height: "28px", width: "auto" }} />
          <span style={{
            fontSize: "11px", fontWeight: 600, color: "var(--text-muted)",
            letterSpacing: "0.2em", textTransform: "uppercase",
          }}>
            Law
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} style={{
              fontSize: "13px", fontWeight: 500, color: "var(--text-body)",
              textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase",
              transition: "color 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-body)")}
            >
              {item.label}
            </Link>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary"
            style={{ fontSize: "12px", padding: "10px 24px" }}>
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="mobile-toggle" style={{
          display: "none", background: "none", border: "1px solid var(--border)",
          borderRadius: "4px", padding: "8px 10px", cursor: "pointer", color: "var(--navy)",
        }} aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ padding: "8px 24px 24px", background: "var(--bg-body)", borderTop: "1px solid var(--border-light)" }}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "14px 0", fontSize: "15px",
              color: "var(--text-body)", textDecoration: "none", borderBottom: "1px solid var(--border-light)",
            }}>
              {item.label}
            </Link>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary"
            onClick={() => setOpen(false)} style={{ display: "flex", justifyContent: "center", marginTop: "16px", width: "100%" }}>
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
