"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

const ADMIN_EMAIL = "damasojuliano@gmail.com";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string).toLowerCase().trim();
    const password = formData.get("password") as string;

    if (email !== ADMIN_EMAIL) {
      setError("Plataforma em construção. Em breve você receberá acesso.");
      setLoading(false);
      return;
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Email ou senha incorretos");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left side — Marketing */}
      <div
        style={{
          flex: 1,
          background: "var(--bg-void)",
          display: "flex",
          flexDirection: "column",
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
            top: "10%",
            left: "10%",
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
            bottom: "10%",
            right: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "#0ea5e9",
            opacity: 0.03,
            filter: "blur(80px)",
            animation: "float 8s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />

        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "400px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "36px",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            SEO que trabalha
            <br />
            <span className="text-gradient">enquanto você dorme</span>
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", marginTop: "16px", lineHeight: 1.6 }}>
            Artigos otimizados por IA, publicados automaticamente. Ranqueie no Google sem esforço.
          </p>
        </div>
      </div>

      {/* Right side — Form */}
      <div
        style={{
          width: "50%",
          maxWidth: "560px",
          background: "var(--bg-deep)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div className="animate-fade-up" style={{ width: "100%", maxWidth: "400px" }}>
          {/* Logo */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "18px",
              color: "#000",
              marginBottom: "24px",
              boxShadow: "0 0 30px var(--accent-glow)",
            }}
          >
            S
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "26px",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            Entrar
          </h1>
          <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "4px", marginBottom: "32px" }}>
            Acesse sua conta SEO Inteligente
          </p>

          {error && (
            <div
              style={{
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.2)",
                borderRadius: "var(--radius)",
                padding: "12px 16px",
                fontSize: "13px",
                color: "#ef4444",
                marginBottom: "20px",
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  marginBottom: "6px",
                }}
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="input-dark"
                placeholder="seu@email.com"
              />
            </div>

            <div style={{ marginBottom: "28px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  marginBottom: "6px",
                }}
              >
                Senha
              </label>
              <input
                name="password"
                type="password"
                required
                className="input-dark"
                placeholder="Sua senha"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-accent"
              style={{ width: "100%", justifyContent: "center" }}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <p style={{ textAlign: "center", fontSize: "14px", color: "var(--text-secondary)", marginTop: "28px" }}>
            Não tem conta?{" "}
            <Link
              href="/sign-up"
              style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}
            >
              Criar Conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
