import Link from "next/link";
import { blogPosts } from "@/content/posts";

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

/* ─── Áreas de atuação ─── */
const AREAS_TRABALHISTA = [
  { title: "Acidente de Trabalho", desc: "Estabilidade, indenização e benefícios para quem sofreu acidente ou doença ocupacional." },
  { title: "Vínculo Empregatício", desc: "Reconhecimento judicial do vínculo e todos os direitos retroativos." },
  { title: "Horas Extras", desc: "Cobrança judicial de horas extras não pagas, com retroativo de até 5 anos." },
  { title: "Rescisão Indireta", desc: "Quando a empresa descumpre o contrato, você pode sair com todos os direitos." },
  { title: "Periculosidade", desc: "Adicional de 30% sobre o salário para quem trabalha em condições de risco." },
  { title: "Insalubridade", desc: "Adicional de 10% a 40% para exposição a agentes nocivos à saúde." },
];

const AREAS_PREVIDENCIARIO = [
  { title: "Auxílio-Acidente", desc: "Benefício mensal para quem ficou com sequela, acumulável com salário." },
  { title: "Aposentadoria por Invalidez", desc: "Benefício para incapacidade permanente, com possibilidade de adicional de 25%." },
  { title: "Aposentadoria Negada", desc: "Recurso administrativo e judicial contra negativas do INSS." },
  { title: "Pensão por Morte", desc: "Benefício para dependentes do segurado falecido." },
  { title: "BPC/LOAS", desc: "Um salário mínimo mensal para idosos e pessoas com deficiência em vulnerabilidade." },
  { title: "Planejamento Previdenciário", desc: "Análise técnica para escolher a melhor regra de aposentadoria." },
];

export default function HomePage() {
  const posts = blogPosts.slice(0, 3);

  return (
    <>
      {/* ═══════════════════════════════════════
          1. HERO — foto de fundo + headline curta
      ═══════════════════════════════════════ */}
      <section
        className="hero-bg"
        style={{
          paddingTop: "72px",
          /* PLACEHOLDER: substituir por foto real da advogada ou escritório */
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85')",
        }}
      >
        <div className="container" style={{ padding: "120px 24px 100px", maxWidth: "900px" }}>
          <p className="eyebrow eyebrow--light animate-in" style={{ marginBottom: "24px" }}>
            Direito Trabalhista &amp; Previdenciário
          </p>

          <h1 className="animate-in delay-1" style={{ color: "var(--text-on-dark)", marginBottom: "24px" }}>
            Seus direitos não esperam.{" "}
            <em style={{ color: "var(--bg-sand)" }}>Sua defesa também não.</em>
          </h1>

          <p className="animate-in delay-2" style={{
            fontSize: "18px",
            color: "var(--text-on-dark-muted)",
            lineHeight: 1.7,
            marginBottom: "40px",
            maxWidth: "540px",
          }}>
            Orientação jurídica especializada para quem teve seus direitos violados
            ou benefício negado pelo INSS. Consulta inicial gratuita.
          </p>

          <div className="animate-in delay-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar Consulta
            </a>
            <a href="#areas" className="btn-outline-light">
              Áreas de Atuação
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. SOBRE A ADVOGADA — mini bio
      ═══════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--bg-body)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)",
            gap: "64px",
            alignItems: "center",
          }}>
            {/* FOTO: substituir por retrato real da advogada */}
            <div
              className="photo-placeholder"
              style={{
                aspectRatio: "3/4",
                borderRadius: "var(--radius-lg)",
                minHeight: "420px",
              }}
            >
              Foto da Advogada
            </div>

            <div>
              <hr className="rule" />
              <p className="eyebrow" style={{ marginBottom: "16px" }}>Sobre</p>
              <h2 style={{ marginBottom: "20px" }}>DD Claw</h2>
              <p style={{ fontSize: "17px", color: "var(--text-body)", lineHeight: 1.8, marginBottom: "16px" }}>
                Advogada especialista em Direito do Trabalho e Direito Previdenciário.
                Atuo exclusivamente nessas áreas porque são as que mais impactam a vida
                de quem vive do próprio trabalho.
              </p>
              <p style={{ fontSize: "17px", color: "var(--text-body)", lineHeight: 1.8, marginBottom: "32px" }}>
                Quando a empresa viola seus direitos ou o INSS nega seu benefício,
                é preciso alguém que conheça cada detalhe da lei — e que explique tudo
                em linguagem clara, sem juridiquês.
              </p>

              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
                {[
                  { label: "Especialização", value: "Trabalhista e Previdenciário" },
                  { label: "Atendimento", value: "Presencial e Online" },
                  { label: "Consulta Inicial", value: "Gratuita" },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)" }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "36px" }}>
                <Link href="/sobre" className="btn-text">
                  Conheça minha trajetória →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. ÁREAS DE ATUAÇÃO
      ═══════════════════════════════════════ */}
      <section id="areas" className="section" style={{ background: "var(--bg-cream)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <hr className="rule rule--center" />
            <p className="eyebrow" style={{ marginBottom: "16px" }}>Áreas de Atuação</p>
            <h2>Cada caso exige atenção<br />e conhecimento específico.</h2>
          </div>

          {/* Trabalhista */}
          <div style={{ marginBottom: "72px" }}>
            <h3 style={{ marginBottom: "32px", fontSize: "14px", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)" }}>
              Direito Trabalhista
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "16px" }}>
              {AREAS_TRABALHISTA.map((a) => (
                <div key={a.title} className="card" style={{ padding: "28px 24px" }}>
                  <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{a.title}</h3>
                  <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.65 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Previdenciário */}
          <div>
            <h3 style={{ marginBottom: "32px", fontSize: "14px", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)" }}>
              Direito Previdenciário
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "16px" }}>
              {AREAS_PREVIDENCIARIO.map((a) => (
                <div key={a.title} className="card" style={{ padding: "28px 24px" }}>
                  <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{a.title}</h3>
                  <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.65 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. DIFERENCIAIS — 4 colunas limpas
      ═══════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--bg-body)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <hr className="rule rule--center" />
            <h2>Por que confiar na DD Claw</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px" }}>
            {[
              { title: "Atendimento Estratégico", desc: "Cada caso é analisado individualmente. Nada de fórmulas prontas — a estratégia é pensada para o seu contexto." },
              { title: "Proximidade Real", desc: "Você fala diretamente com a advogada, não com um assistente. Acompanhamento próximo do início ao fim." },
              { title: "Clareza Total", desc: "Cada etapa do processo é explicada em linguagem simples. Você entende o que está acontecendo — sempre." },
              { title: "Experiência Focada", desc: "Atuação exclusiva em Trabalhista e Previdenciário. Foco total para resultados consistentes." },
            ].map((d) => (
              <div key={d.title}>
                <hr className="rule" />
                <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>{d.title}</h3>
                <p style={{ fontSize: "15px", color: "var(--text-body)", lineHeight: 1.7 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. CREDIBILIDADE — foto + texto
      ═══════════════════════════════════════ */}
      <section
        style={{
          background: "var(--bg-dark)",
          padding: "var(--section-y) 24px",
          /* PLACEHOLDER: substituir por foto real de escritório/biblioteca */
          backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(28,42,58,0.85)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "640px" }}>
            <p className="eyebrow eyebrow--light" style={{ marginBottom: "20px" }}>Compromisso</p>
            <h2 style={{ color: "var(--text-on-dark)", marginBottom: "24px", lineHeight: 1.2 }}>
              Advocacia é confiança.<br />
              <em style={{ color: "var(--bg-sand)" }}>O resto é consequência.</em>
            </h2>
            <p style={{ fontSize: "17px", color: "var(--text-on-dark-muted)", lineHeight: 1.8, marginBottom: "16px" }}>
              A relação entre advogado e cliente se constrói com transparência, dedicação
              e resultados. Cada processo recebe atenção individual — porque por trás
              de cada número há uma pessoa.
            </p>
            <p style={{ fontSize: "17px", color: "var(--text-on-dark-muted)", lineHeight: 1.8, marginBottom: "40px" }}>
              OAB [número] · Atendimento presencial e online · Consulta inicial gratuita
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar Consulta
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. BLOG — artigos recentes
      ═══════════════════════════════════════ */}
      {posts.length > 0 && (
        <section className="section" style={{ background: "var(--bg-cream)" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <hr className="rule" />
                <h2>Conteúdo Jurídico</h2>
                <p style={{ fontSize: "16px", color: "var(--text-body)", marginTop: "8px" }}>
                  Artigos sobre direitos trabalhistas e previdenciários.
                </p>
              </div>
              <Link href="/blog" className="btn-text">
                Ver todos os artigos →
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "28px 24px", flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                        <span className="eyebrow">{post.category}</span>
                        <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{post.readTime}</span>
                      </div>
                      <h3 style={{ fontSize: "18px", lineHeight: 1.35, marginBottom: "12px" }}>
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
          7. CTA FINAL
      ═══════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--bg-body)" }}>
        <div className="container" style={{ maxWidth: "720px", textAlign: "center" }}>
          <hr className="rule rule--center" />
          <h2 style={{ marginBottom: "20px" }}>
            O primeiro passo é uma conversa.
          </h2>
          <p style={{ fontSize: "17px", color: "var(--text-body)", lineHeight: 1.75, marginBottom: "40px", margin: "0 auto 40px", maxWidth: "520px" }}>
            Conte sua situação e receba uma orientação clara sobre os seus direitos.
            A consulta inicial é gratuita e sem compromisso.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "15px", padding: "18px 44px" }}>
            Agendar Consulta Gratuita
          </a>
        </div>
      </section>
    </>
  );
}
