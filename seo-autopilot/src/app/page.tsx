import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-void)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "#00ff88",
          opacity: 0.03,
          filter: "blur(120px)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-15%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "#0ea5e9",
          opacity: 0.03,
          filter: "blur(120px)",
          animation: "float 8s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "30%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "#7c3aed",
          opacity: 0.03,
          filter: "blur(120px)",
          animation: "float 7s ease-in-out infinite",
          animationDelay: "4s",
        }}
      />

      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "800px",
        }}
      >
        {/* Logo */}
        <div
          className="animate-fade-up"
          style={{
            margin: "0 auto 40px",
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: "var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "24px",
            color: "#000",
            boxShadow: "0 0 40px var(--accent-glow)",
          }}
        >
          S
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up delay-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          SEO que trabalha
          <br />
          <span className="text-gradient">enquanto você dorme</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up delay-2"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            color: "var(--text-secondary)",
            marginTop: "24px",
            lineHeight: 1.6,
          }}
        >
          Artigos otimizados gerados por IA, publicados automaticamente no seu
          site. Ranqueie no Google sem mover um dedo.
        </p>

        {/* Buttons */}
        <div
          className="animate-fade-up delay-3"
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="/sign-up" className="btn-accent">
            Criar conta grátis
          </a>
          <a href="/sign-in" className="btn-ghost">
            Fazer login
          </a>
        </div>

        {/* Feature cards */}
        <div
          style={{
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            { icon: "✦", title: "IA que escreve", desc: "Artigos completos otimizados para SEO com um clique" },
            { icon: "✦", title: "Publica automático", desc: "Integra com seu WordPress e publica sozinho" },
            { icon: "✦", title: "Rankeia no Google", desc: "Conteúdo otimizado que sobe nas buscas orgânicas" },
          ].map((card, i) => (
            <div
              key={card.title}
              className={`glass animate-fade-up delay-${i + 3}`}
              style={{
                padding: "32px 24px",
                textAlign: "center",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.boxShadow = "0 0 30px var(--accent-dim), var(--shadow-card)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  color: "var(--accent)",
                  marginBottom: "16px",
                }}
              >
                {card.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          position: "absolute",
          bottom: "24px",
          fontSize: "13px",
          color: "var(--text-muted)",
          fontFamily: "var(--font-body)",
        }}
      >
        SEO Inteligente © 2026
      </footer>
    </div>
  );
}
