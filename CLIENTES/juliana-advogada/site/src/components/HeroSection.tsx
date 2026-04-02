"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const content = contentRef.current;
    if (!content) return;

    const children = content.children;

    tl.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1, duration: 2, ease: "power2.out" })
      .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1.8")
      .fromTo(children, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.18 }, "-=0.8")
      .fromTo(trustRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");
  }, []);

  return (
    <section ref={sectionRef} style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "80px",
      overflow: "hidden",
      background: "var(--navy)",
    }}>
      {/* Video de fundo */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", opacity: 0,
        }}
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay escuro forte — garante leitura */}
      <div ref={overlayRef} style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(0,15,33,0.93) 0%, rgba(0,15,33,0.88) 50%, rgba(0,15,33,0.95) 100%)",
        opacity: 0,
      }} />

      {/* Conteúdo centralizado */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: "900px", margin: "0 auto",
        padding: "80px 32px 120px",
        width: "100%", textAlign: "center",
      }}>
        <div ref={contentRef}>

          {/* Logo DDC — grande e visível */}
          <div style={{ marginBottom: "48px" }}>
            <img
              src="/brand/logo-light.png"
              alt="DDC LAW"
              style={{ height: "120px", width: "auto", margin: "0 auto" }}
            />
          </div>

          {/* Eyebrow — tamanho legível */}
          <p style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--grey)",
            opacity: 0.6,
            marginBottom: "32px",
          }}>
            Advocacia Especializada em Direito Trabalhista e Previdenciário
          </p>

          {/* Headline — contraste total, espaçamento confortável */}
          <h1 style={{
            fontSize: "clamp(28px, 3.8vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.45,
            color: "var(--grey)",
            marginBottom: "32px",
          }}>
            A empresa violou seus direitos trabalhistas?
            <br />
            O INSS negou o benefício que você merece?
          </h1>

          {/* Subtítulo */}
          <p style={{
            fontSize: "17px",
            lineHeight: 1.85,
            fontWeight: 400,
            color: "rgba(255,255,255,0.75)",
            maxWidth: "600px",
            margin: "0 auto 48px",
          }}>
            Somos especialistas em acidente de trabalho, horas extras não pagas,
            vínculo empregatício, rescisão indireta, aposentadoria negada,
            auxílio-doença, pensão por morte e BPC/LOAS.
          </p>

          {/* CTAs — com espaço, sem sobreposição */}
          <div style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "18px 44px",
                background: "var(--blue)",
                color: "var(--grey)",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--navy)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#103459")}
            >
              Agendar Consulta Gratuita
            </a>
            <a
              href="#areas"
              style={{
                display: "inline-block",
                padding: "17px 40px",
                background: "transparent",
                color: "var(--grey)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.35)",
                transition: "border-color 0.25s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")}
            >
              Conheça Nossas Áreas
            </a>
          </div>
        </div>
      </div>

      {/* Trust bar — separada, no fundo da hero */}
      <div ref={trustRef} style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        zIndex: 1,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "24px 32px",
        opacity: 0,
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          flexWrap: "wrap",
          fontSize: "13px",
          fontWeight: 500,
          color: "rgba(255,255,255,0.45)",
          letterSpacing: "0.02em",
        }}>
          {["Direito do Trabalho", "Direito Previdenciário", "Atendimento Online e Presencial", "Consulta Inicial Gratuita"].map((item, i) => (
            <span key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {i > 0 && <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
