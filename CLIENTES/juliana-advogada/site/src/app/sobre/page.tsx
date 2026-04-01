import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a DD Claw",
  description: "Conheça a DD Claw — advogada especialista em direito trabalhista e previdenciário.",
};

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

export default function SobrePage() {
  return (
    <div style={{ paddingTop: "72px" }}>

      {/* Header */}
      <section style={{ padding: "80px 24px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <hr className="rule" />
          <p className="eyebrow" style={{ marginBottom: "16px" }}>Sobre</p>
          <h1 style={{ marginBottom: "24px", lineHeight: 1.15 }}>
            Advocacia com propósito,{" "}
            <em style={{ color: "var(--accent)" }}>clareza e dedicação.</em>
          </h1>
        </div>
      </section>

      {/* Bio com foto */}
      <section className="section" style={{ background: "var(--bg-body)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "48px",
            alignItems: "start",
            marginBottom: "48px",
          }}>
            {/* FOTO: substituir por retrato real */}
            <div
              className="photo-placeholder"
              style={{
                aspectRatio: "1",
                borderRadius: "var(--radius-lg)",
                minHeight: "200px",
              }}
            >
              Foto
            </div>

            <div>
              <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>DD Claw</h2>
              <p className="eyebrow" style={{ marginBottom: "24px" }}>
                Advogada Trabalhista e Previdenciária · OAB [número]
              </p>
              <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.8, marginBottom: "16px" }}>
                Sou advogada especialista em Direito do Trabalho e Direito Previdenciário.
                Escolhi essas áreas por um motivo simples: são as que mais impactam a vida
                de quem vive do próprio trabalho.
              </p>
              <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.8, marginBottom: "16px" }}>
                Quando um trabalhador perde o emprego injustamente, quando o INSS nega
                um benefício a quem mais precisa — é nesses momentos que o Direito precisa
                funcionar. E é exatamente aí que eu atuo.
              </p>
              <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.8 }}>
                Acredito que o acesso à Justiça não pode ser privilégio. Por isso, busco
                oferecer condições acessíveis para que todos possam exercer seus direitos.
              </p>
            </div>
          </div>

          {/* Valores */}
          <h2 style={{ fontSize: "24px", marginBottom: "24px", marginTop: "48px" }}>
            Como eu trabalho
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
            {[
              { title: "Sem juridiquês", desc: "Você entende cada passo do processo, cada documento e cada decisão." },
              { title: "Sem promessas vazias", desc: "Se você não tem direito, eu digo. Se tem, mostro exatamente o caminho." },
              { title: "Sem você ser um número", desc: "Cada processo tem nome, história e atenção dedicada." },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: "24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "3px", height: "40px", background: "var(--accent)", borderRadius: "2px", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h3 style={{ fontSize: "16px", marginBottom: "4px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            background: "var(--bg-dark)",
            borderRadius: "var(--radius-lg)",
            padding: "48px 40px",
            textAlign: "center",
          }}>
            <h2 style={{ fontSize: "22px", color: "var(--text-on-dark)", marginBottom: "12px" }}>
              Primeiro passo: uma conversa.
            </h2>
            <p style={{ fontSize: "15px", color: "var(--text-on-dark-muted)", marginBottom: "28px", maxWidth: "400px", margin: "0 auto 28px" }}>
              Conte sua situação e receba uma orientação clara sobre seus direitos.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar Consulta
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
