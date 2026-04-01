import Link from "next/link";
import { blogPosts } from "@/content/posts";

const WA_LINK = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20uma%20consulta%20gratuita";

const SERVICES_TRABALHISTA = [
  {
    title: "Acidente de Trabalho",
    desc: "Indenização, estabilidade e benefícios para quem sofreu acidente ou doença no trabalho.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    cta: "Tive um acidente — quero meus direitos",
  },
  {
    title: "Vínculo Empregatício",
    desc: "Trabalhou sem carteira assinada? A Justiça pode reconhecer e você recebe tudo retroativo.",
    img: "https://images.unsplash.com/photo-1521791055366-0d553872952f?w=600&q=80",
    cta: "Trabalhei sem carteira — quero regularizar",
  },
  {
    title: "Horas Extras",
    desc: "Horas extras não pagas podem ser cobradas judicialmente, com retroativo de até 5 anos.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    cta: "Calculei — quero cobrar as horas",
  },
  {
    title: "Rescisão Indireta",
    desc: "Empresa descumpriu o contrato? Você pode 'demitir' a empresa e receber todos os direitos.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    cta: "É meu caso — quero entender",
  },
  {
    title: "Periculosidade",
    desc: "Adicional de 30% para quem trabalha com risco. Você pode estar recebendo a menos sem saber.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    cta: "Quero saber se tenho direito",
  },
  {
    title: "Insalubridade",
    desc: "Adicional de 10% a 40% para quem trabalha exposto a agentes nocivos à saúde.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    cta: "Verificar meu direito ao adicional",
  },
];

const SERVICES_PREVIDENCIARIO = [
  {
    title: "Auxílio-Acidente",
    desc: "Ficou com sequela de acidente? Tem direito a benefício mensal mesmo trabalhando.",
    img: "https://images.unsplash.com/photo-1576765608622-067973a79f53?w=600&q=80",
    cta: "Tenho sequela — quero o benefício",
  },
  {
    title: "Aposentadoria por Invalidez",
    desc: "Incapacidade permanente para o trabalho. Benefício de até 100% do salário.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    cta: "Não consigo trabalhar — o que faço?",
  },
  {
    title: "Aposentadoria Negada",
    desc: "INSS negou? Não é definitivo. Recursos e ações judiciais revertem a maioria dos casos.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    cta: "Meu INSS foi negado — quero recorrer",
  },
  {
    title: "Pensão por Morte",
    desc: "Proteja financeiramente sua família. Dependentes têm direito — independente de judicialização.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    cta: "Meu familiar faleceu — quero a pensão",
  },
  {
    title: "BPC/LOAS",
    desc: "1 salário mínimo para idosos e deficientes em vulnerabilidade. Muitos têm direito e não sabem.",
    img: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&q=80",
    cta: "Verificar se tenho direito ao BPC",
  },
  {
    title: "Planejamento Previdenciário",
    desc: "A regra errada pode custar anos de espera e milhares de reais. Escolha certo agora.",
    img: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80",
    cta: "Quero me aposentar no melhor momento",
  },
];

const DIFERENCIAIS = [
  {
    icon: "⚖️",
    title: "Especialista de Verdade",
    desc: "Foco exclusivo em Trabalhista e Previdenciário. Cada detalhe do seu caso recebe atenção dedicada.",
  },
  {
    icon: "🤝",
    title: "Atendimento Humanizado",
    desc: "Você é tratado como pessoa, não como número de processo. Acompanhamento próximo em cada etapa.",
  },
  {
    icon: "💬",
    title: "Linguagem Clara",
    desc: "Cada etapa do processo explicada de forma simples, sem juridiquês. Você entende tudo.",
  },
  {
    icon: "📱",
    title: "Atendimento Online",
    desc: "Consulta por videochamada de onde você estiver. Praticidade para quem tem rotina corrida.",
  },
];

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>

      {/* ═══════════════════════════════════════════════════
          SEÇÃO 1 — HERO (COM imagem de fundo)
      ═══════════════════════════════════════════════════ */}
      <section
        className="section-bg"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "80px",
          backgroundImage: "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=80')",
        }}
      >
        {/* Overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(40,55,74,0.72) 0%, rgba(117,68,55,0.55) 100%)",
          zIndex: 0,
        }} />

        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 24px",
          width: "100%",
          textAlign: "center",
        }}>

            {/* Badge */}
            <div
              className="animate-fade-up tag"
              style={{
                marginBottom: "28px",
                background: "rgba(211,199,173,0.18)",
                color: "var(--bg-sand)",
                border: "1px solid rgba(211,199,173,0.35)",
                margin: "0 auto 28px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--bg-sand)", display: "inline-block" }} />
              Direito Trabalhista &amp; Previdenciário
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up delay-1"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(38px, 5.5vw, 68px)",
                fontWeight: 800,
                lineHeight: 1.08,
                color: "#fff",
                marginBottom: "28px",
                letterSpacing: "-0.01em",
              }}
            >
              Seus direitos não esperam.{" "}
              <span style={{ fontStyle: "italic", color: "var(--bg-sand)" }}>
                Sua defesa também não.
              </span>
            </h1>

            {/* Sub */}
            <p
              className="animate-fade-up delay-2"
              style={{
                fontSize: "19px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
                marginBottom: "44px",
                maxWidth: "580px",
                margin: "0 auto 44px",
              }}
            >
              Empresa violou seus direitos? INSS negou seu benefício?{" "}
              <strong style={{ color: "#fff" }}>Cada dia sem ação é um dia de prejuízo.</strong>{" "}
              Consulta inicial gratuita — sem custo, sem compromisso.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary animate-pulse-glow"
                style={{ fontSize: "17px", padding: "18px 40px" }}
              >
                Quero Minha Consulta Gratuita Agora
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#servicos" className="btn-outline-white" style={{ fontSize: "15px" }}>
                Ver meus direitos
              </a>
            </div>

            {/* Stats */}
            <div
              className="animate-fade-up delay-4"
              style={{
                display: "flex",
                gap: "48px",
                marginTop: "64px",
                flexWrap: "wrap",
                paddingTop: "48px",
                borderTop: "1px solid rgba(211,199,173,0.2)",
                justifyContent: "center",
              }}
            >
              {[
                { number: "500+", label: "Clientes atendidos" },
                { number: "93%", label: "Taxa de êxito" },
                { number: "R$0", label: "Custo inicial" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "38px",
                    fontWeight: 800,
                    color: "var(--bg-sand)",
                    lineHeight: 1,
                  }}>
                    {s.number}
                  </div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginTop: "6px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SEÇÃO 2 — DIFERENCIAIS (SEM imagem, fundo creme)
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", background: "var(--bg-cream)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="divider" style={{ margin: "0 auto 16px" }} />
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              marginBottom: "16px",
              color: "var(--text-primary)",
            }}>
              Por que a{" "}
              <span className="text-accent">Dra. Juliana</span>{" "}
              é diferente
            </h2>
            <p style={{ fontSize: "17px", color: "var(--text-secondary)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              Especialização, transparência e atenção ao seu caso — do início ao fim.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {DIFERENCIAIS.map((item) => (
              <div
                key={item.title}
                className="card card-accent"
                style={{ padding: "36px 32px" }}
              >
                <div style={{ fontSize: "36px", marginBottom: "20px" }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                  fontWeight: 700,
                  marginBottom: "10px",
                  color: "var(--text-primary)",
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agende Sua Consulta Inicial
            </a>
            <p style={{ marginTop: "12px", fontSize: "13px", color: "var(--text-muted)" }}>
              Consulta inicial gratuita. Atendimento presencial ou online.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SEÇÃO 3 — SERVIÇOS TRABALHISTA (COM imagem de fundo)
      ═══════════════════════════════════════════════════ */}
      <section
        id="servicos"
        className="section-bg section-overlay-dark"
        style={{
          padding: "100px 24px",
          backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80')",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="tag" style={{ marginBottom: "20px", background: "rgba(211,199,173,0.15)", color: "var(--bg-sand)", border: "1px solid rgba(211,199,173,0.3)" }}>
              Área Trabalhista
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 3.5vw, 46px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}>
              Seus direitos trabalhistas{" "}
              <span style={{ fontStyle: "italic", color: "var(--bg-sand)" }}>merecem atenção.</span>
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.75)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
              Conheça as principais situações em que um advogado trabalhista pode ajudar.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {SERVICES_TRABALHISTA.map((svc) => (
              <div
                key={svc.title}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Imagem do tópico */}
                <div style={{
                  height: "180px",
                  backgroundImage: `url('${svc.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 40%, rgba(40,55,74,0.85) 100%)",
                  }} />
                  <h3 style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "20px",
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#fff",
                  }}>
                    {svc.title}
                  </h3>
                </div>

                {/* Conteúdo */}
                <div style={{ padding: "24px" }}>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, marginBottom: "20px" }}>
                    {svc.desc}
                  </p>
                  <a
                    href={`${WA_LINK}%20sobre%20${encodeURIComponent(svc.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--bg-sand)",
                      textDecoration: "none",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {svc.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA da seção */}
          <div style={{ textAlign: "center", marginTop: "64px" }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "17px", padding: "18px 44px" }}>
              Fale com a Especialista
            </a>
            <p style={{ marginTop: "14px", fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>
              Importante: direitos trabalhistas têm prazo prescricional de 2 anos.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SEÇÃO 4 — SERVIÇOS PREVIDENCIÁRIO (SEM imagem, fundo areia)
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", background: "var(--bg-sand-light)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="tag" style={{ marginBottom: "20px" }}>
              Área Previdenciária
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 3.5vw, 46px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}>
              INSS negou?{" "}
              <span className="text-accent">A Justiça pode reverter.</span>
            </h2>
            <p style={{ fontSize: "17px", color: "var(--text-secondary)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
              Negativa do INSS não é definitiva. A maioria dos casos contestados judicialmente é ganha.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {SERVICES_PREVIDENCIARIO.map((svc) => (
              <div
                key={svc.title}
                className="card card-accent"
                style={{ overflow: "hidden" }}
              >
                {/* Imagem do tópico */}
                <div style={{
                  height: "180px",
                  backgroundImage: `url('${svc.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 30%, rgba(40,55,74,0.80) 100%)",
                  }} />
                  <h3 style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "20px",
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#fff",
                  }}>
                    {svc.title}
                  </h3>
                </div>

                {/* Conteúdo */}
                <div style={{ padding: "24px" }}>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
                    {svc.desc}
                  </p>
                  <a
                    href={`${WA_LINK}%20sobre%20${encodeURIComponent(svc.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--accent)",
                      textDecoration: "none",
                    }}
                  >
                    {svc.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "64px" }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Tire Suas Dúvidas com a Advogada
            </a>
            <p style={{ marginTop: "12px", fontSize: "13px", color: "var(--text-muted)" }}>
              Análise gratuita do seu caso. Sem custo inicial.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SEÇÃO 5 — URGÊNCIA (COM imagem de fundo)
      ═══════════════════════════════════════════════════ */}
      <section
        className="section-bg section-overlay-dark"
        style={{
          padding: "100px 24px",
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}>
            Conhecer seus direitos é o{" "}
            <span style={{ fontStyle: "italic", color: "var(--bg-sand)" }}>
              primeiro passo.
            </span>
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.78)", lineHeight: 1.7, marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px" }}>
            Direitos trabalhistas têm prazo prescricional de <strong style={{ color: "#fff" }}>2 anos</strong>. Benefícios previdenciários também possuem prazos importantes.{" "}
            <strong style={{ color: "#fff" }}>Informação é proteção.</strong>
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "18px", padding: "20px 48px" }}
            >
              Converse com a Dra. Juliana
            </a>
          </div>
          <p style={{ marginTop: "16px", fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
            Consulta inicial gratuita. Atendimento online ou presencial.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SEÇÃO 6 — BLOG (SEM imagem, fundo branco)
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", background: "var(--bg-body)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div className="divider" />
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginTop: "4px",
              }}>
                Conheça seus{" "}
                <span className="text-accent">direitos</span>
              </h2>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginTop: "8px" }}>
                Conteúdo gratuito que protege você antes mesmo da consulta.
              </p>
            </div>
            <Link
              href="/blog"
              style={{
                fontSize: "14px",
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Ver todos os artigos →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {recentPosts.map((post, idx) => {
              const blogImages = [
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
                "https://images.unsplash.com/photo-1521791055366-0d553872952f?w=600&q=80",
              ];
              return (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article
                  className="card card-accent"
                  style={{ overflow: "hidden", height: "100%" }}
                >
                  {/* Imagem do post */}
                  <div style={{
                    height: "200px",
                    backgroundImage: `url('${blogImages[idx % blogImages.length]}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}>
                    <div style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      background: "var(--accent)",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: "99px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}>
                      {post.category}
                    </div>
                  </div>

                  <div style={{ padding: "28px" }}>
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "19px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.4,
                      marginBottom: "12px",
                    }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "20px" }}>
                      {post.excerpt}
                    </p>
                    <span style={{
                      fontSize: "13px",
                      color: "var(--accent)",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}>
                      Ler artigo completo →
                    </span>
                  </div>
                </article>
              </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <Link href="/blog" className="btn-primary">
              Ver Todos os Artigos Gratuitos
            </Link>
            <p style={{ marginTop: "12px", fontSize: "13px", color: "var(--text-muted)" }}>
              Conteúdo novo toda semana. Assine gratuitamente.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SEÇÃO 7 — CTA FINAL (COM imagem de fundo)
      ═══════════════════════════════════════════════════ */}
      <section
        className="section-bg section-overlay-warm"
        style={{
          padding: "120px 24px",
          backgroundImage: "url('https://images.unsplash.com/photo-1521791055366-0d553872952f?w=1920&q=80')",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>

          <div className="tag" style={{ marginBottom: "24px", margin: "0 auto 24px" }}>
            Consulta Gratuita
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4.5vw, 54px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}>
            Não deixe seus direitos{" "}
            <span className="text-accent">prescreverem</span>
          </h2>

          <p style={{
            fontSize: "18px",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            marginBottom: "44px",
            maxWidth: "560px",
            margin: "0 auto 44px",
          }}>
            Tire suas dúvidas com uma advogada especialista. A consulta inicial é gratuita e{" "}
            <strong style={{ color: "var(--text-primary)" }}>sem compromisso.</strong>
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "18px", padding: "20px 52px" }}
          >
            Agende Sua Consulta
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <div style={{
            display: "flex",
            gap: "40px",
            justifyContent: "center",
            marginTop: "48px",
            flexWrap: "wrap",
          }}>
            {[
              { icon: "✓", text: "Consulta inicial gratuita" },
              { icon: "✓", text: "Especialista dedicada" },
              { icon: "✓", text: "Atendimento online" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
