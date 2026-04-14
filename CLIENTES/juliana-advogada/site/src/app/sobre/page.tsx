import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | DDC LAW Advocacia",
  description: "Advogada especialista em Direito Trabalhista e Previdenciário.",
};

const WA = "https://wa.me/5541998342090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

export default function SobrePage() {
  return (
    <div style={{ paddingTop: "72px" }}>

      {/* Header */}
      <section style={{ background: "var(--bg-dark)", padding: "80px 24px 72px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow eyebrow--light" style={{ marginBottom: "20px" }}>Sobre</span>
          <h1 style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "var(--text-on-dark)",
            marginTop: "20px",
            lineHeight: 1.12,
          }}>
            Advocacia com propósito,<br />
            <span style={{ color: "var(--bg-sand)" }}>clareza e dedicação.</span>
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section style={{ padding: "var(--section-py) 24px", background: "var(--bg-body)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <hr className="rule" style={{ margin: "0 auto 24px" }} />
          <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>DDC LAW</h2>
          <p style={{ fontSize: "15px", color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "32px" }}>
            Advogada Trabalhista e Previdenciária
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "48px" }}>
            <div>
              <p style={{ fontSize: "16px", lineHeight: 1.85, marginBottom: "16px" }}>
                Sou advogada especialista em Direito do Trabalho e Direito Previdenciário.
                Escolhi essas áreas por um motivo simples: são as que mais impactam a vida
                de quem vive do próprio trabalho.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.85 }}>
                Quando um trabalhador perde o emprego injustamente, quando o INSS nega
                um benefício a quem mais precisa — é nesses momentos que o Direito precisa
                funcionar.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "16px", lineHeight: 1.85, marginBottom: "16px" }}>
                Acredito que o acesso à Justiça não pode ser privilégio. Por isso, busco
                oferecer condições acessíveis para que todos possam exercer seus direitos.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.85 }}>
                Cada caso é tratado de forma individual, com atenção a cada detalhe
                e comunicação clara — sem juridiquês, sem promessas vazias.
              </p>
            </div>
          </div>

          {/* Valores */}
          <h2 style={{ fontSize: "24px", marginBottom: "24px", textAlign: "center" }}>Como eu trabalho</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "48px" }}>
            {[
              { title: "Sem juridiquês", desc: "Você entende cada passo do processo, cada documento e cada decisão." },
              { title: "Sem promessas vazias", desc: "Se você não tem direito, eu digo. Se tem, mostro exatamente o caminho." },
              { title: "Sem você ser um número", desc: "Cada processo tem nome, história e atenção dedicada." },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "3px", height: "36px", background: "var(--accent)", borderRadius: "2px", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h3 style={{ fontSize: "16px", marginBottom: "4px" }}>{item.title}</h3>
                  <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            background: "var(--bg-dark)",
            borderRadius: "var(--radius)",
            padding: "48px 40px",
            textAlign: "center",
          }}>
            <h2 style={{ fontSize: "22px", color: "var(--text-on-dark)", marginBottom: "12px" }}>
              Primeiro passo: uma conversa.
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-on-dark-muted)", marginBottom: "28px", maxWidth: "400px", margin: "0 auto 28px" }}>
              Conte sua situação e receba orientação clara sobre seus direitos.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">Quero Minha Consulta Gratuita</a>
          </div>
        </div>
      </section>
    </div>
  );
}
