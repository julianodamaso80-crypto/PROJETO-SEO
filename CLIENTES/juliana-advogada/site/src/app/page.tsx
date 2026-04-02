import Link from "next/link";
import { blogPosts } from "@/content/posts";
import { HeroSection } from "@/components/HeroSection";
import { AreaTabs } from "@/components/AreaTabs";
import { HomeMotion } from "@/components/HomeMotion";

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
      <HeroSection />
      <HomeMotion>
        {/* ═══════════════════════════════════════
            2. SOBRE
        ═══════════════════════════════════════ */}
        <section data-animate="section" style={{ padding: "var(--section-py) 24px", background: "var(--bg-body)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <hr className="rule" />
            <span className="eyebrow" style={{ marginBottom: "16px" }}>Sobre</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginTop: "16px", marginBottom: "24px" }}>
              DDC LAW
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
              <p style={{ fontSize: "16px", lineHeight: 1.85 }}>
                Advogada especialista em Direito do Trabalho e Direito Previdenciário.
                Atuo exclusivamente nessas áreas porque são as que mais impactam a vida
                de quem vive do próprio trabalho.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.85 }}>
                Quando a empresa viola seus direitos ou o INSS nega seu benefício,
                é preciso alguém que conheça cada detalhe da lei — e que explique
                tudo com clareza, sem juridiquês.
              </p>
            </div>
            <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", marginTop: "40px", paddingTop: "32px", borderTop: "1px solid var(--border-light)" }}>
              {[
                { label: "Atuação", value: "Trabalhista e Previdenciário" },
                { label: "Atendimento", value: "Presencial e Online" },
                { label: "Consulta Inicial", value: "Gratuita" },
              ].map((c) => (
                <div key={c.label}>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>{c.label}</div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)" }}>{c.value}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar Consulta</a>
              <Link href="/sobre" className="btn-text">Conheça a trajetória →</Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            3. ÁREAS DE ATUAÇÃO — TABS
        ═══════════════════════════════════════ */}
        <section id="areas" data-animate="section" style={{ padding: "var(--section-py) 24px", background: "var(--bg-cream)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ marginBottom: "48px" }}>
              <hr className="rule" />
              <span className="eyebrow" style={{ marginBottom: "16px" }}>Áreas de Atuação</span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginTop: "16px" }}>
                Cada caso exige atenção<br />e conhecimento específico.
              </h2>
            </div>
            <AreaTabs trabalhista={AREAS_T} previdenciario={AREAS_P} />
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Fale com a Especialista
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            4. DIFERENCIAIS
        ═══════════════════════════════════════ */}
        <section data-animate="section" style={{ padding: "var(--section-py) 24px", background: "var(--bg-body)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ marginBottom: "64px" }}>
              <hr className="rule" />
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>Por que confiar na DDC LAW</h2>
            </div>

            <div data-animate="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px" }}>
              {[
                { title: "Atendimento Estratégico", desc: "Cada caso é analisado individualmente. A estratégia é pensada para o seu contexto." },
                { title: "Proximidade Real", desc: "Você fala diretamente com a advogada. Acompanhamento próximo do início ao fim." },
                { title: "Clareza Total", desc: "Cada etapa explicada em linguagem simples. Você entende o que está acontecendo." },
                { title: "Foco Exclusivo", desc: "Atuação exclusiva em Trabalhista e Previdenciário. Especialização de verdade." },
              ].map((d) => (
                <div key={d.title}>
                  <div style={{ width: "32px", height: "1px", background: "var(--accent)", marginBottom: "20px" }} />
                  <h3 style={{ fontSize: "17px", marginBottom: "10px", fontFamily: "var(--font)" }}>{d.title}</h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--text-body)" }}>{d.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "56px" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agendar Consulta Gratuita
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            5. CREDIBILIDADE — dark panel
        ═══════════════════════════════════════ */}
        <section data-animate="section" style={{ background: "var(--bg-dark)", padding: "var(--section-py) 24px" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <hr className="rule" style={{ background: "var(--accent)" }} />
            <span className="eyebrow eyebrow--light" style={{ marginBottom: "16px" }}>Compromisso</span>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", color: "var(--text-on-dark)", marginTop: "16px", marginBottom: "24px", lineHeight: 1.25 }}>
              Advocacia é confiança.<br />O resto é consequência.
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-on-dark-muted)", lineHeight: 1.85, marginBottom: "40px", maxWidth: "520px" }}>
              A relação entre advogado e cliente se constrói com transparência,
              dedicação e atenção a cada detalhe. Cada processo recebe tratamento individual.
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
          <section data-animate="section" style={{ padding: "var(--section-py) 24px", background: "var(--bg-cream)" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <hr className="rule" />
                  <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)" }}>Conteúdo Jurídico</h2>
                </div>
                <Link href="/blog" className="btn-text">Ver todos →</Link>
              </div>

              <div data-animate="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                    <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                      <div style={{ padding: "28px 24px", flex: 1 }}>
                        <span className="eyebrow" style={{ marginBottom: "14px" }}>{post.category}</span>
                        <h3 style={{ fontSize: "17px", lineHeight: 1.35, marginTop: "14px", marginBottom: "10px", fontFamily: "var(--font)" }}>
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
        <section data-animate="section" style={{ padding: "var(--section-py) 24px", background: "var(--bg-body)" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <hr className="rule" style={{ margin: "0 auto 20px" }} />
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", marginBottom: "16px" }}>
              O primeiro passo é uma conversa.
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.75, marginBottom: "36px", color: "var(--text-body)" }}>
              Conte sua situação e receba orientação clara sobre seus direitos.
              Consulta inicial gratuita e sem compromisso.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "17px 42px" }}>
              Agendar Consulta
            </a>
          </div>
        </section>
      </HomeMotion>
    </>
  );
}
