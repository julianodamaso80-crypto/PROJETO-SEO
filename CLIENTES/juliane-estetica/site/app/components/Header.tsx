"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const PROCEDURES_DROPDOWN = [
  { href: "/procedimentos/harmonizacao-facial", label: "Harmonização Facial" },
  { href: "/procedimentos/gluteoplastia-nao-cirurgica", label: "Harmonização Glútea" },
  { href: "/procedimentos/estetica-intima-feminina", label: "Harmonização Íntima" },
  { href: "/procedimentos/botox", label: "Botox" },
  { href: "/procedimentos/preenchimento-labial", label: "Preenchimento" },
  { href: "/procedimentos/bioestimuladores-de-colageno", label: "Bioestimuladores" },
  { href: "/procedimentos/fios-de-pdo", label: "Fios de PDO" },
  { href: "/procedimentos/peeling-quimico", label: "Peelings" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
      }`}
      style={{ height: "var(--header-h)" }}
    >
      <div className="container h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 no-underline">
          <span
            className="text-2xl font-bold font-serif"
            style={{ color: "var(--rose)" }}
          >
            JS
          </span>
          <span className="text-sm font-medium text-text-primary hidden sm:inline">
            Estética Avançada
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-text-body hover:text-rose transition-colors no-underline"
          >
            Home
          </Link>

          {/* Procedimentos dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/procedimentos"
              className="text-sm font-medium text-text-body hover:text-rose transition-colors no-underline flex items-center gap-1"
            >
              Procedimentos
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {dropdownOpen && (
              <div className="absolute top-full left-0 pt-2" style={{ minWidth: 240 }}>
                <div className="bg-white rounded-lg shadow-lg border border-border py-2">
                  {PROCEDURES_DROPDOWN.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-5 py-2.5 text-sm text-text-body hover:bg-surface hover:text-rose transition-colors no-underline"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/sobre" className="text-sm font-medium text-text-body hover:text-rose transition-colors no-underline">
            Sobre
          </Link>
          <Link href="/unidades" className="text-sm font-medium text-text-body hover:text-rose transition-colors no-underline">
            Unidades
          </Link>
          <Link href="/blog" className="text-sm font-medium text-text-body hover:text-rose transition-colors no-underline">
            Blog
          </Link>
          <Link href="/contato" className="text-sm font-medium text-text-body hover:text-rose transition-colors no-underline">
            Contato
          </Link>
        </nav>

        {/* CTA desktop */}
        <a
          href="https://wa.me/5521999999999?text=Olá! Gostaria de agendar uma avaliação."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden lg:inline-flex text-sm"
        >
          Agendar Avaliação
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-dark transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-dark transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-dark transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto"
          style={{ top: "var(--header-h)" }}
        >
          <nav className="flex flex-col py-6 px-6 gap-1">
            <Link href="/" onClick={() => setOpen(false)} className="py-3 text-lg font-medium text-text-primary no-underline border-b border-border">
              Home
            </Link>

            <div className="py-3 border-b border-border">
              <Link href="/procedimentos" onClick={() => setOpen(false)} className="text-lg font-medium text-text-primary no-underline block mb-3">
                Procedimentos
              </Link>
              <div className="flex flex-col gap-2 pl-4">
                {PROCEDURES_DROPDOWN.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-text-muted no-underline py-1"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>

            {[
              { label: "Sobre", href: "/sobre" },
              { label: "Unidades", href: "/unidades" },
              { label: "Blog", href: "/blog" },
              { label: "Contato", href: "/contato" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-medium text-text-primary no-underline border-b border-border"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://wa.me/5521999999999?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 text-center"
            >
              Agendar Avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
