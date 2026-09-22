const PARAGRAFOS = [
  "Ao longo da minha atuação, compreendi que muitas pessoas chegam até mim após não serem ouvidas, terem seus direitos negados ou, muitas vezes, sequer compreendidos.",
  "Por isso, minha atuação vai além do processo. Realizo uma análise minuciosa de cada detalhe, com responsabilidade, técnica e sensibilidade, estruturando estratégias sólidas e personalizadas para cada situação.",
  "Meu compromisso é oferecer clareza, segurança jurídica e condução estratégica em todas as etapas, sempre com o cuidado que cada história exige.",
];

export function AdvogadaSection({ background = "var(--bg-light)" }: { background?: string }) {
  return (
    <section data-animate="section" style={{ padding: "var(--section-py) 24px", background }}>
      <div className="grid-advogada" style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        gap: "48px",
        alignItems: "start",
      }}>
        <img
          src="/brand/juliana-cunha.jpg"
          alt="Dra. Juliana Cunha, advogada trabalhista e previdenciária"
          className="advogada-foto"
          style={{
            width: "100%",
            aspectRatio: "2 / 3",
            objectFit: "cover",
            objectPosition: "center top",
            borderRadius: "var(--radius)",
            display: "block",
          }}
        />

        <div style={{ textAlign: "left" }}>
          <span className="eyebrow">Advogada Trabalhista e Previdenciária</span>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 40px)",
            marginTop: "12px",
            marginBottom: "6px",
          }}>
            Dra. Juliana Cunha
          </h2>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", letterSpacing: "0.06em", marginBottom: "28px" }}>
            OAB/PR 122.450
          </p>

          <blockquote style={{
            borderLeft: "3px solid var(--blue)",
            paddingLeft: "20px",
            margin: "0 0 28px",
            fontSize: "18px",
            lineHeight: 1.7,
            fontStyle: "italic",
            fontWeight: 600,
            color: "var(--text-primary)",
          }}>
            “Cada caso carrega uma história e merece ser tratado com atenção, estratégia e respeito.”
          </blockquote>

          {PARAGRAFOS.map((texto) => (
            <p key={texto.slice(0, 24)} style={{ fontSize: "16px", lineHeight: 1.9, marginBottom: "16px" }}>
              {texto}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
