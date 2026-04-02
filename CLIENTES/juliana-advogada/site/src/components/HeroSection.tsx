"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(bgRef.current, { scale: 1.12, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" })
      .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 }, "-=1.4")
      .fromTo(logoRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.6")
      .fromTo(eyebrowRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .fromTo(headlineRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.3")
      .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
      .fromTo(trustRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");

    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const progress = -rect.top / section.offsetHeight;
      if (progress >= 0 && progress <= 1) gsap.set(bg, { y: progress * 40 });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} style={{
      position: "relative", minHeight: "100vh", display: "flex",
      alignItems: "center", paddingTop: "72px", overflow: "hidden",
    }}>
      {/* Foto de fundo */}
      <div ref={bgRef} style={{
        position: "absolute", inset: "-20px",
        backgroundImage: "url('/brand/hero-bg.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0, willChange: "transform",
      }} />

      {/* Overlay com cores da marca */}
      <div ref={overlayRef} style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, rgba(0,15,33,0.88) 0%, rgba(16,52,89,0.78) 100%)",
        opacity: 0,
      }} />

      {/* Conteúdo */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: "1200px", margin: "0 auto", padding: "80px 24px",
        width: "100%",
      }}>
        <div style={{ maxWidth: "640px" }}>
          <img ref={logoRef} src="/brand/logo-light.png" alt="DDC LAW"
            style={{ height: "28px", width: "auto", marginBottom: "36px", opacity: 0 }} />

          <span ref={eyebrowRef} className="eyebrow"
            style={{ color: "var(--silver)", marginBottom: "20px", opacity: 0 }}>
            Advocacia Trabalhista &amp; Previdenciária
          </span>

          <h1 ref={headlineRef} style={{
            fontSize: "clamp(36px, 4.8vw, 56px)", fontWeight: 800, lineHeight: 1.08,
            color: "var(--grey)", marginTop: "20px", marginBottom: "24px",
            letterSpacing: "-0.03em", opacity: 0,
          }}>
            Empresa violou seus direitos?<br />
            INSS negou seu benefício?
          </h1>

          <p ref={subRef} style={{
            fontSize: "18px", lineHeight: 1.7, fontWeight: 300,
            color: "rgba(230,230,230,0.7)", maxWidth: "480px",
            marginBottom: "40px", opacity: 0,
          }}>
            Acidente de trabalho, horas extras, vínculo empregatício, aposentadoria negada,
            pensão por morte, BPC — atuamos exclusivamente nas áreas que mais impactam
            a vida de quem trabalha.
          </p>

          <div ref={ctaRef} style={{ display: "flex", gap: "14px", flexWrap: "wrap", opacity: 0 }}>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ background: "var(--blue)", color: "var(--grey)" }}>
              Agendar Consulta Gratuita
            </a>
            <a href="#areas" className="btn-outline"
              style={{ color: "var(--grey)", borderColor: "rgba(230,230,230,0.2)" }}>
              Áreas de Atuação
            </a>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div ref={trustRef} style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1,
        borderTop: "1px solid rgba(230,230,230,0.08)",
        padding: "20px 24px", opacity: 0,
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="trust-bar" style={{ color: "rgba(230,230,230,0.4)" }}>
            {["Direito do Trabalho", "Direito Previdenciário", "Atendimento Online e Presencial", "Consulta Inicial Gratuita"].map((item) => (
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
