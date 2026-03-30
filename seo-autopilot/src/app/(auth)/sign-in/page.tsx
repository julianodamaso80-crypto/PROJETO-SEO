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
      {/* Left side — Marketing with background image */}
      <div
        style={{
          flex: 1,
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          padding: "40px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(40,55,74,0.88) 0%, rgba(117,68,55,0.75) 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "400px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "24px",
              color: "#fff",
              margin: "0 auto 32px",
            }}
          >
            S
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "38px",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            SEO que trabalha
            <br />
            <span style={{ fontStyle: "italic", color: "var(--bg-sand)" }}>
              enquanto voce dorme
            </span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.7)",
              marginTop: "20px",
              lineHeight: 1.6,
            }}
          >
            Artigos otimizados por IA, publicados automaticamente. Ranqueie no Google sem esforco.
          </p>
        </div>
      </div>

      {/* Right side — Form */}
      <div
        style={{
          width: "50%",
          maxWidth: "560px",
          background: "var(--bg-body)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div className="animate-fade-up" style={{ width: "100%", maxWidth: "400px" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            Entrar
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              marginTop: "4px",
              marginBottom: "32px",
            }}
          >
            Acesse sua conta SEO Inteligente
          </p>

          {error && (
            <div
              style={{
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.2)",
                borderRadius: "var(--radius)",
                padding: "12px 16px",
                fontSize: "13px",
                color: "#dc2626",
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
                  fontWeight: 500,
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
                  fontWeight: 500,
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

          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
              color: "var(--text-secondary)",
              marginTop: "28px",
            }}
          >
            Nao tem conta?{" "}
            <Link
              href="/sign-up"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Criar Conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
