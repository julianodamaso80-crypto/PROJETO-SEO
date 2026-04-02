"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const content = contentRef.current;
    if (!content) return;

    const children = content.children;

    tl.fromTo(bgRef.current, { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" })
      .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 }, "-=1.4")
      .fromTo(children, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.6")
      .fromTo(trustRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");

    // Parallax
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
      alignItems: "center", justifyContent: "center",
      paddingTop: "80px", overflow: "hidden",
    }}>
      {/* Foto de fundo */}
      <div ref={bgRef} style={{
        position: "absolute", inset: "-20px",
        backgroundImage: "url('/brand/hero-bg.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0, willChange: "transform",
      }} />

      {/* Overlay */}
      <div ref={overlayRef} style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(0,15,33,0.90) 0%, rgba(16,52,89,0.80) 50%, rgba(0,15,33,0.92) 100%)",
        opacity: 0,
      }} />

      {/* Conteúdo — centralizado */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: "860px", margin: "0 auto", padding: "60px 24px",
        width: "100%", textAlign: "center",
      }}>
        <div ref={contentRef}>
          {/* Logo */}
          <div style={{ marginBottom: "40px" }}>
            <img src="/brand/logo-light.png" alt="DDC LAW"
              style={{ height: "40px", width: "auto", margin: "0 auto", opacity: 0.9 }} />
          </div>

          {/* Eyebrow */}
          <div className="eyebrow" style={{ color: "var(--silver)", marginBottom: "28px", fontSize: "12px" }}>
            Advocacia Especializada em Direito Trabalhista e Previdenciário
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 800, lineHeight: 1.12,
            color: "#fff", marginBottom: "28px", letterSpacing: "-0.02em",
          }}>
            A empresa violou seus direitos trabalhistas?
            <br />O INSS negou o benefício que você merece?
          </h1>

          {/* Subtítulo — copy técnica e persuasiva */}
          <p style={{
            fontSize: "18px", lineHeight: 1.75, fontWeight: 400,
            color: "rgba(230,230,230,0.75)", maxWidth: "640px", margin: "0 auto 40px",
          }}>
            Somos especialistas em acidente de trabalho, horas extras não pagas, vínculo empregatício,
            rescisão indireta, aposentadoria negada, auxílio-doença, pensão por morte e BPC/LOAS.
            Cada caso recebe análise técnica aprofundada e atendimento individualizado
            para garantir que seus direitos sejam respeitados.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ background: "var(--blue)", color: "#fff", fontSize: "14px", padding: "16px 40px" }}>
              Agendar Consulta Gratuita
            </a>
            <a href="#areas" className="btn-outline"
              style={{ color: "#fff", borderColor: "rgba(230,230,230,0.25)", fontSize: "14px", padding: "15px 36px" }}>
              Conheça Nossas Áreas
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
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "center" }}>
          <div className="trust-bar" style={{ color: "rgba(230,230,230,0.45)", justifyContent: "center" }}>
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
