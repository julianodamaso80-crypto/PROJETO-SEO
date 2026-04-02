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

    const section = sectionRef.current;
    if (!section) return;
    const handleMouse = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(panelRef.current, { x: x * 6, y: y * 4, duration: 0.8, ease: "power2.out" });
    };
    section.addEventListener("mousemove", handleMouse);
    return () => section.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "var(--navy)", paddingTop: "72px", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "48px",
          alignItems: "center", minHeight: "calc(100vh - 72px)",
          paddingTop: "72px", paddingBottom: "72px",
        }}>
          {/* Texto */}
          <div>
            <span ref={eyebrowRef} className="eyebrow" style={{ color: "var(--text-on-dark-muted)", marginBottom: "32px", opacity: 0 }}>
              Direito Trabalhista &amp; Previdenciário
            </span>

            <h1 ref={headlineRef} style={{
              fontSize: "clamp(40px, 5vw, 62px)", fontWeight: 800, lineHeight: 1.05,
              color: "var(--text-on-dark)", marginTop: "32px", marginBottom: "28px",
              letterSpacing: "-0.03em",
              opacity: 0,
            }}>
              Seus direitos<br />não esperam.<br />
              <span style={{ color: "var(--silver)" }}>Sua defesa<br />também não.</span>
            </h1>

            <p ref={subRef} style={{
              fontSize: "17px", lineHeight: 1.7, fontWeight: 300,
              color: "var(--text-on-dark-muted)", maxWidth: "420px", marginBottom: "40px", opacity: 0,
            }}>
              Orientação jurídica especializada para quem teve seus direitos violados
              ou benefício negado pelo INSS.
            </p>

            <div ref={ctaRef} style={{ display: "flex", gap: "14px", flexWrap: "wrap", opacity: 0 }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary"
                style={{ background: "var(--blue)", color: "var(--grey)" }}>
                Agendar Consulta
              </a>
              <a href="#areas" className="btn-outline"
                style={{ color: "var(--grey)", borderColor: "rgba(230,230,230,0.2)" }}>
                Áreas de Atuação
              </a>
            </div>
          </div>

          {/* Composição gráfica — painel com pattern DDC */}
          <div ref={panelRef} style={{ position: "relative", opacity: 0 }}>
            {/* Painel principal com pattern da marca */}
            <div style={{
              background: "var(--blue)", borderRadius: "var(--radius)",
              padding: "56px 44px", position: "relative", zIndex: 2, overflow: "hidden",
            }}>
              {/* Pattern DDC como textura de fundo */}
              <div style={{
                position: "absolute", inset: 0, opacity: 0.06,
                backgroundImage: "url('/brand/pattern-light.png')",
                backgroundSize: "300px", backgroundRepeat: "repeat",
              }} />

              {/* Logo grande como elemento tipográfico */}
              <img src="/brand/logo-light.png" alt="" style={{
                height: "48px", width: "auto", marginBottom: "32px", opacity: 0.7,
                position: "relative", zIndex: 1,
              }} />

              <div style={{
                width: "32px", height: "2px", background: "var(--silver)",
                marginBottom: "28px", opacity: 0.4, position: "relative", zIndex: 1,
              }} />

              <div style={{
                fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase",
                color: "rgba(230,230,230,0.4)", marginBottom: "8px",
                fontWeight: 500, position: "relative", zIndex: 1,
              }}>
                Advocacia
              </div>

              <div style={{
                display: "flex", flexDirection: "column", gap: "6px",
                fontSize: "15px", fontWeight: 300, color: "rgba(230,230,230,0.6)",
                position: "relative", zIndex: 1,
              }}>
                <span>Direito Trabalhista</span>
                <span>Direito Previdenciário</span>
              </div>

              {/* Linha decorativa vertical */}
              <div style={{
                position: "absolute", top: "28px", right: "28px",
                width: "1px", height: "80px", background: "rgba(230,230,230,0.1)", zIndex: 1,
              }} />
            </div>

            {/* Moldura accent */}
            <div style={{
              position: "absolute", bottom: "-12px", right: "-12px",
              width: "60%", height: "60%",
              border: "1px solid rgba(192,192,192,0.15)",
              borderRadius: "var(--radius)", zIndex: 1,
            }} />
          </div>
        </div>

        {/* Trust bar */}
        <div ref={trustRef} style={{
          borderTop: "1px solid rgba(230,230,230,0.08)",
          padding: "24px 0 40px", opacity: 0,
        }}>
          <div className="trust-bar" style={{ color: "var(--text-on-dark-muted)" }}>
            {["Trabalhista e Previdenciário", "Atendimento Online", "Consulta Inicial Gratuita"].map((item) => (
              <div key={item} className="trust-bar-item">
                <div className="trust-bar-dot" style={{ background: "var(--silver)" }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
