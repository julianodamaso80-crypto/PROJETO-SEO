import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a DD Claw",
  description: "Conheça a DD Claw — advogada especialista em direito trabalhista e previdenciário. Atendimento humanizado para quem precisa de justiça.",
};

export default function SobrePage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 64px", position: "relative" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="section-divider" style={{ marginBottom: "16px" }} />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "24px" }}>
            Advogada Que Luta{" "}
            <span className="text-gold-gradient">Por Quem Trabalha</span>
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="glass" style={{ padding: "48px", marginBottom: "40px" }}>
            {/* Photo placeholder */}
            <div style={{
              width: "120px", height: "120px", borderRadius: "50%",
              background: "linear-gradient(135deg, var(--color-gold-dim), var(--color-navy-lighter))",
              border: "2px solid var(--color-gold)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 700, color: "var(--color-gold)",
              marginBottom: "32px",
            }}>
              DD
            </div>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>
              DD Claw
            </h2>
            <p style={{ fontSize: "14px", color: "var(--color-gold)", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 500, marginBottom: "24px" }}>
              Advogada Trabalhista e Previdenciária
            </p>

            <div style={{ fontSize: "16px", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
              <p style={{ marginBottom: "16px" }}>
                Sou advogada especialista em Direito do Trabalho e Direito Previdenciário. Escolhi essas áreas por um motivo
                simples: são as que mais impactam a vida de quem vive do próprio trabalho.
              </p>
              <p style={{ marginBottom: "16px" }}>
                Quando um trabalhador perde o emprego injustamente, quando o INSS nega um benefício a quem mais precisa,
                quando uma família fica desamparada — é nesses momentos que o Direito precisa funcionar. E é exatamente aí que eu atuo.
              </p>
              <p>
                Acredito que o acesso à Justiça não pode ser privilégio. Por isso, busco oferecer condições acessíveis
                para que todos possam exercer seus direitos.
              </p>
            </div>
          </div>

          {/* Valores */}
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, marginBottom: "24px" }}>
            Como eu <span className="text-gold-gradient">trabalho</span>
          </h2>

          <div style={{ display: "grid", gap: "16px", marginBottom: "48px" }}>
            {[
              { title: "Sem juridiquês", desc: "Você entende cada passo do processo, cada documento e cada decisão." },
              { title: "Sem promessas vazias", desc: "Se você não tem direito, eu digo. Se tem, mostro exatamente o caminho." },
              { title: "Sem você ser um número", desc: "Cada processo tem nome, história e atenção dedicada." },
            ].map((item) => (
              <div key={item.title} className="glass" style={{ padding: "24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "4px", height: "40px", background: "var(--color-gold)", borderRadius: "2px", flexShrink: 0, marginTop: "4px" }} />
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="glass-gold"
            style={{ padding: "40px", textAlign: "center", borderRadius: "16px" }}
          >
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>
              Primeiro passo: uma conversa
            </h2>
            <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
              Me conte sua situação e eu digo quais são seus direitos reais. Sem compromisso.
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "16px 36px", background: "var(--color-gold)", color: "var(--color-navy)",
                borderRadius: "10px", fontSize: "15px", fontWeight: 700, textDecoration: "none",
                boxShadow: "0 0 30px var(--color-gold-glow)",
              }}
            >
              Consulta Gratuita pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
