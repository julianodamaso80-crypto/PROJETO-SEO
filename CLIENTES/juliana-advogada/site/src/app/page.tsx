import Link from "next/link";
import { blogPosts } from "@/content/posts";

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

const AREAS_T = [
  { title: "Acidente de Trabalho", desc: "Estabilidade, indenização e benefícios para quem sofreu acidente ou doença ocupacional." },
  { title: "Vínculo Empregatício", desc: "Reconhecimento judicial do vínculo e direitos retroativos." },
  { title: "Horas Extras", desc: "Cobrança judicial com retroativo de até 5 anos." },
  { title: "Rescisão Indireta", desc: "Quando a empresa descumpre o contrato, você sai com todos os direitos." },
  { title: "Periculosidade", desc: "Adicional de 30% para quem trabalha em condições de risco." },
  { title: "Insalubridade", desc: "Adicional de 10% a 40% para exposição a agentes nocivos." },
];

const AREAS_P = [
  { title: "Auxílio-Acidente", desc: "Benefício mensal para quem ficou com sequela, acumulável com salário." },
  { title: "Aposentadoria por Invalidez", desc: "Benefício para incapacidade permanente." },
  { title: "Aposentadoria Negada", desc: "Recurso contra negativas do INSS." },
  { title: "Pensão por Morte", desc: "Benefício para dependentes do segurado falecido." },
  { title: "BPC/LOAS", desc: "Um salário mínimo para idosos e PCD em vulnerabilidade." },
  { title: "Planejamento Previdenciário", desc: "Análise para escolher a melhor regra de aposentadoria." },
];

export default function HomePage() {
  const posts = blogPosts.slice(0, 3);

  return (
    <>
      {/* ═══════════════════════════════════════
          1. HERO — Split assimétrico
          Texto à esquerda · Retrato à direita
          Sem foto stock · Fundo sólido
      ═══════════════════════════════════════ */}
      <section style={{ background: "var(--bg-dark)", paddingTop: "72px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div
            className="hero-split"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
              minHeight: "calc(100vh - 72px)",
              paddingTop: "60px",
              paddingBottom: "60px",
            }}
          >
            {/* Texto */}
            <div>
              <span className="eyebrow" style={{ color: "var(--text-on-dark-muted)", marginBottom: "28px" }}>
                Direito Trabalhista &amp; Previdenciário
              </span>

              <h1 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 4.5vw, 54px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "var(--text-on-dark)",
                marginTop: "28px",
                marginBottom: "24px",
              }}>
                Seus direitos não esperam. Sua defesa também não.
              </h1>

              <p style={{
                fontSize: "17px",
                lineHeight: 1.75,
                color: "var(--text-on-dark-muted)",
                maxWidth: "440px",
                marginBottom: "36px",
              }}>
                Orientação jurídica especializada para quem teve seus direitos violados
                ou benefício negado pelo INSS.
              </p>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "56px" }}>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Agendar Consulta
                </a>
                <a href="#areas" className="btn-outline" style={{ color: "var(--text-on-dark)", borderColor: "rgba(245,242,236,0.25)" }}>
                  Áreas de Atuação
                </a>
              </div>

              {/* Trust bar */}
              <div style={{
                borderTop: "1px solid rgba(245,242,236,0.1)",
                paddingTop: "24px",
                display: "flex",
                gap: "28px",
                flexWrap: "wrap",
                fontSize: "12px",
                color: "rgba(245,242,236,0.45)",
              }}>
                <span>OAB [número]</span>
                <span>·</span>
                <span>Trabalhista e Previdenciário</span>
                <span>·</span>
                <span>Consulta Inicial Gratuita</span>
              </div>
            </div>

            {/* RETRATO — placeholder para foto real */}
            <div
              className="photo-frame"
              data-label="Retrato profissional&#10;da advogada&#10;(inserir foto real)"
              style={{
                aspectRatio: "3/4",
                minHeight: "520px",
                borderRadius: "var(--radius-lg)",
                background: "linear-gradient(145deg, #2A3A4E 0%, #1B2838 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. SOBRE — quem é a advogada
      ═══════════════════════════════════════ */}
      <section style={{ padding: "var(--section-py) 24px", background: "var(--bg-body)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            className="grid-about"
            style={{
              display: "grid",
              gridTemplateColumns: "0.85fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* FOTO — placeholder para retrato real */}
            <div
              className="photo-frame"
              data-label="Retrato da advogada&#10;ambiente profissional&#10;(inserir foto real)"
              style={{
                aspectRatio: "4/5",
                minHeight: "480px",
              }}
            />

            <div>
              <hr className="rule" />
              <span className="eyebrow" style={{ marginBottom: "16px" }}>Sobre</span>
              <h2 style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                marginTop: "16px",
                marginBottom: "20px",
              }}>
                DD Claw
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.85, marginBottom: "16px", maxWidth: "480px" }}>
                Advogada especialista em Direito do Trabalho e Direito Previdenciário.
                Atuo exclusivamente nessas áreas porque são as que mais impactam a vida
                de quem vive do próprio trabalho.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.85, marginBottom: "32px", maxWidth: "480px" }}>
                Quando a empresa viola seus direitos ou o INSS nega seu benefício,
                é preciso alguém que conheça cada detalhe da lei — e que explique
                tudo com clareza.
              </p>

              {/* Credenciais */}
              <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", marginBottom: "32px" }}>
                {[
                  { label: "Atuação", value: "Trabalhista e Previdenciário" },
                  { label: "Atendimento", value: "Presencial e Online" },
                  { label: "Consulta Inicial", value: "Gratuita" },
                ].map((c) => (
                  <div key={c.label}>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                      {c.label}
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)" }}>
                      {c.value}
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/sobre" className="btn-text">Conheça minha trajetória →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. ÁREAS DE ATUAÇÃO
      ═══════════════════════════════════════ */}
      <section id="areas" style={{ padding: "var(--section-py) 24px", background: "var(--bg-cream)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <hr className="rule" />
            <span className="eyebrow" style={{ marginBottom: "16px" }}>Áreas de Atuação</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginTop: "16px" }}>
              Cada caso exige atenção<br />e conhecimento específico.
            </h2>
          </div>

          {/* Trabalhista */}
          <div style={{ marginBottom: "56px" }}>
            <p style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "24px",
            }}>
              Direito Trabalhista
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "12px" }}>
              {AREAS_T.map((a) => (
                <div key={a.title} className="card" style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "17px", marginBottom: "6px", lineHeight: 1.3 }}>{a.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--text-body)" }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Previdenciário */}
          <div>
            <p style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "24px",
            }}>
              Direito Previdenciário
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "12px" }}>
              {AREAS_P.map((a) => (
                <div key={a.title} className="card" style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "17px", marginBottom: "6px", lineHeight: 1.3 }}>{a.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--text-body)" }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. DIFERENCIAIS — minimalista
      ═══════════════════════════════════════ */}
      <section style={{ padding: "var(--section-py) 24px", background: "var(--bg-body)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <hr className="rule" />
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
              Por que confiar na DD Claw
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px" }}>
            {[
              { title: "Atendimento Estratégico", desc: "Cada caso é analisado individualmente. A estratégia é pensada para o seu contexto específico." },
              { title: "Proximidade Real", desc: "Você fala diretamente com a advogada. Acompanhamento próximo do início ao fim." },
              { title: "Clareza Total", desc: "Cada etapa explicada em linguagem simples. Você entende o que está acontecendo." },
              { title: "Foco Exclusivo", desc: "Atuação exclusiva em Trabalhista e Previdenciário. Especialização de verdade." },
            ].map((d) => (
              <div key={d.title}>
                <div style={{ width: "32px", height: "1px", background: "var(--accent)", marginBottom: "20px" }} />
                <h3 style={{ fontSize: "17px", marginBottom: "10px" }}>{d.title}</h3>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--text-body)" }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. CREDIBILIDADE — fundo escuro, sem foto stock
      ═══════════════════════════════════════ */}
      <section style={{ background: "var(--bg-dark)", padding: "var(--section-py) 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <hr className="rule" style={{ background: "var(--accent)" }} />
          <span className="eyebrow" style={{ color: "var(--text-on-dark-muted)", marginBottom: "16px" }}>Compromisso</span>
          <h2 style={{
            fontSize: "clamp(26px, 3vw, 36px)",
            color: "var(--text-on-dark)",
            marginTop: "16px",
            marginBottom: "24px",
            lineHeight: 1.25,
          }}>
            Advocacia é confiança. O resto é consequência.
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-on-dark-muted)", lineHeight: 1.85, marginBottom: "16px", maxWidth: "520px" }}>
            A relação entre advogado e cliente se constrói com transparência,
            dedicação e resultados. Cada processo recebe atenção individual.
          </p>
          <p style={{ fontSize: "14px", color: "rgba(245,242,236,0.35)", marginBottom: "40px" }}>
            OAB [número] · Atendimento presencial e online
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agendar Consulta
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. BLOG
      ═══════════════════════════════════════ */}
      {posts.length > 0 && (
        <section style={{ padding: "var(--section-py) 24px", background: "var(--bg-cream)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <hr className="rule" />
                <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)" }}>Conteúdo Jurídico</h2>
              </div>
              <Link href="/blog" className="btn-text">Ver todos →</Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "28px 24px", flex: 1 }}>
                      <span className="eyebrow" style={{ marginBottom: "14px" }}>{post.category}</span>
                      <h3 style={{ fontSize: "17px", lineHeight: 1.35, marginTop: "14px", marginBottom: "10px" }}>
                        {post.title}
                      </h3>
                      <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.6 }}>
                        {post.excerpt}
                      </p>
                    </div>
                    <div style={{ padding: "0 24px 24px" }}>
                      <span className="btn-text">Ler artigo →</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════
          7. CTA FINAL — limpo
      ═══════════════════════════════════════ */}
      <section style={{ padding: "var(--section-py) 24px", background: "var(--bg-body)" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <hr className="rule" style={{ margin: "0 auto 20px" }} />
          <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", marginBottom: "16px" }}>
            O primeiro passo é uma conversa.
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, marginBottom: "36px", color: "var(--text-body)" }}>
            Conte sua situação e receba orientação clara sobre seus direitos.
            Consulta inicial gratuita e sem compromisso.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agendar Consulta Gratuita
          </a>
        </div>
      </section>
    </>
  );
}
