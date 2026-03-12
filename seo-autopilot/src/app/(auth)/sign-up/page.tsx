"use client";

import Link from "next/link";

export default function SignUpPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-void)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "40px",
      }}
    >
      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "#00ff88",
          opacity: 0.04,
          filter: "blur(100px)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "#7c3aed",
          opacity: 0.03,
          filter: "blur(80px)",
          animation: "float 7s ease-in-out infinite",
          animationDelay: "3s",
        }}
      />

      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="animate-fade-up"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "480px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "14px",
            background: "var(--accent)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "24px",
            color: "#000",
            marginBottom: "32px",
            boxShadow: "0 0 40px var(--accent-glow)",
          }}
        >
          S
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "36px",
            fontWeight: 800,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Estamos em{" "}
          <span className="text-gradient">construção</span>
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "12px",
          }}
        >
          A plataforma SEO Inteligente está sendo finalizada.
          <br />
          Em breve você poderá criar sua conta e gerar artigos SEO com IA.
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            marginBottom: "40px",
          }}
        >
          Previsão de lançamento: em breve
        </p>

        <Link
          href="/sign-in"
          style={{
            color: "var(--accent)",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          Já tem acesso? Entrar
        </Link>
      </div>
    </div>
  );
}
