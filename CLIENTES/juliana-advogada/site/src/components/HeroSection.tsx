"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(eyebrowRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo(headlineRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.3")
      .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
      .fromTo(panelRef.current, { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.1 }, "-=1.2")
      .fromTo(trustRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3");

    // Micro parallax no painel ao mover o mouse
    const section = sectionRef.current;
    if (!section) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(panelRef.current, {
        x: x * 8,
        y: y * 6,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    section.addEventListener("mousemove", handleMouse);
    return () => section.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--bg-dark)",
        paddingTop: "72px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "40px",
          alignItems: "center",
          minHeight: "calc(100vh - 72px)",
          paddingTop: "72px",
          paddingBottom: "72px",
        }}>
          {/* ── Lado esquerdo: texto ── */}
          <div>
            <span
              ref={eyebrowRef}
              className="eyebrow"
              style={{ color: "var(--text-on-dark-muted)", marginBottom: "32px", opacity: 0 }}
            >
              Direito Trabalhista &amp; Previdenciário
            </span>

            <h1
              ref={headlineRef}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(38px, 4.8vw, 58px)",
                fontWeight: 700,
                lineHeight: 1.08,
                color: "var(--text-on-dark)",
                marginTop: "32px",
                marginBottom: "28px",
                letterSpacing: "-0.02em",
                opacity: 0,
              }}
            >
              Seus direitos<br />
              não esperam.<br />
              <span style={{ color: "var(--bg-sand)" }}>
                Sua defesa<br />também não.
              </span>
            </h1>

            <p
              ref={subRef}
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                color: "var(--text-on-dark-muted)",
                maxWidth: "420px",
                marginBottom: "40px",
                opacity: 0,
              }}
            >
              Orientação jurídica especializada para quem teve seus direitos violados
              ou benefício negado pelo INSS.
            </p>

            <div ref={ctaRef} style={{ display: "flex", gap: "14px", flexWrap: "wrap", opacity: 0 }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agendar Consulta
              </a>
              <a href="#areas" className="btn-outline" style={{ color: "var(--text-on-dark)", borderColor: "rgba(243,240,232,0.2)" }}>
                Áreas de Atuação
              </a>
            </div>
          </div>

          {/* ── Lado direito: composição gráfica ── */}
          <div ref={panelRef} style={{ position: "relative", opacity: 0 }}>
            {/* Painel principal */}
            <div style={{
              background: "var(--bg-cream)",
              borderRadius: "var(--radius)",
              padding: "48px 40px",
              position: "relative",
              zIndex: 2,
            }}>
              <div style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(42px, 5vw, 64px)",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "28px",
              }}>
                DD<br />Claw
              </div>

              <div style={{
                width: "32px",
                height: "1px",
                background: "var(--accent)",
                marginBottom: "24px",
              }} />

              <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px" }}>
                Advocacia
              </div>

              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                fontSize: "14px",
                color: "var(--text-body)",
                marginTop: "20px",
              }}>
                <span>Direito Trabalhista</span>
                <span>Direito Previdenciário</span>
              </div>

              {/* Linha decorativa vertical no canto */}
              <div style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                width: "1px",
                height: "80px",
                background: "var(--border)",
              }} />

              {/* Moldura fina no canto inferior */}
              <div style={{
                position: "absolute",
                bottom: "-16px",
                right: "-16px",
                width: "120px",
                height: "120px",
                border: "1px solid var(--accent)",
                borderRadius: "var(--radius)",
                zIndex: -1,
                opacity: 0.4,
              }} />
            </div>

            {/* Bloco accent atras */}
            <div style={{
              position: "absolute",
              top: "-20px",
              left: "-20px",
              width: "100%",
              height: "100%",
              background: "var(--bg-dark-warm)",
              borderRadius: "var(--radius)",
              border: "1px solid rgba(243,240,232,0.06)",
              zIndex: 1,
            }} />
          </div>
        </div>

        {/* ── Trust bar ── */}
        <div
          ref={trustRef}
          style={{
            borderTop: "1px solid rgba(243,240,232,0.08)",
            padding: "24px 0 40px",
            opacity: 0,
          }}
        >
          <div className="trust-bar" style={{ color: "var(--text-on-dark-muted)" }}>
            {["Trabalhista e Previdenciário", "Atendimento Online", "Consulta Inicial Gratuita"].map((item) => (
              <div key={item} className="trust-bar-item">
                <div className="trust-bar-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
