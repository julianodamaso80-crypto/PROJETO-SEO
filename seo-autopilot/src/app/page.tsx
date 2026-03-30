import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  try {
    const session = await auth();
    if (session?.user) {
      redirect("/dashboard");
    }
  } catch (e) {
    console.error("Auth check failed:", e);
  }

  return (
    <div style={{ background: "var(--bg-body)" }}>

      {/* ═══════════════════════════════════════════════════
          NAVBAR
          ═══════════════════════════════════════════════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(250,248,245,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "20px",
              color: "#fff",
            }}
          >
            S
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "18px",
              color: "var(--text-primary)",
            }}
          >
            SEO Inteligente
          </span>
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Link
            href="/sign-in"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--text-secondary)",
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: "99px",
              transition: "color 0.2s",
            }}
          >
            Entrar
          </Link>
          <Link href="/sign-up" className="btn-accent" style={{ padding: "10px 24px", fontSize: "14px" }}>
            Comece Gratis
          </Link>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════
          HERO - Seção 1 (Com imagem de fundo)
          ═══════════════════════════════════════════════════ */}
      <section
        className="section-bg-image"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
          paddingTop: "80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(40,55,74,0.60) 0%, rgba(117,68,55,0.50) 100%)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 24px",
            maxWidth: "900px",
          }}
        >
          <p
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--bg-sand)",
              marginBottom: "24px",
            }}
          >
            Automacao SEO com Inteligencia Artificial
          </p>
          <h1
            className="animate-fade-up delay-1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 76px)",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            SEO que trabalha
            <br />
            <span style={{ fontStyle: "italic", color: "var(--bg-sand)" }}>
              enquanto voce dorme
            </span>
          </h1>
          <p
            className="animate-fade-up delay-2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "20px",
              color: "rgba(255,255,255,0.8)",
              marginTop: "28px",
              lineHeight: 1.6,
              maxWidth: "600px",
              margin: "28px auto 0",
            }}
          >
            Artigos otimizados gerados por IA, publicados automaticamente no seu
            site. Ranqueie no Google sem mover um dedo.
          </p>
          <div
            className="animate-fade-up delay-3"
            style={{
              marginTop: "48px",
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/sign-up"
              className="btn-accent animate-pulse-glow"
              style={{ fontSize: "17px", padding: "18px 40px" }}
            >
              Quero Rankear no Google Agora
            </Link>
            <Link
              href="#como-funciona"
              className="btn-ghost"
              style={{
                color: "rgba(255,255,255,0.7)",
                borderColor: "rgba(255,255,255,0.3)",
                fontSize: "15px",
              }}
            >
              Ver como funciona
            </Link>
          </div>
          <p
            className="animate-fade-up delay-4"
            style={{
              marginTop: "20px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Sem cartao de credito. Cancele quando quiser.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LOGOS / SOCIAL PROOF - Seção 2 (Sem imagem)
          ═══════════════════════════════════════════════════ */}
      <section
        className="section-light"
        style={{
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Confiado por empresas que levam SEO a serio
        </p>
        <div
          style={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
            flexWrap: "wrap",
            opacity: 0.4,
          }}
        >
          {["WordPress", "Shopify", "WooCommerce", "HubSpot", "Semrush"].map((brand) => (
            <span
              key={brand}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              {brand}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "40px" }}>
          <Link
            href="/sign-up"
            className="btn-accent animate-pulse-glow"
            style={{ fontSize: "15px", padding: "14px 32px" }}
          >
            Quero Fazer Parte — E Gratis
          </Link>
          <p style={{ marginTop: "10px", fontSize: "12px", color: "var(--text-muted)" }}>
            Mais de 500 empresas ja confiam. Por que voce ainda nao?
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          COMO FUNCIONA - Seção 3 (Sem imagem, fundo creme)
          ═══════════════════════════════════════════════════ */}
      <section
        id="como-funciona"
        className="section-cream"
        style={{ padding: "100px 24px" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "12px",
            }}
          >
            Como Funciona
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.15,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Do zero ao topo do Google em{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>3 passos simples</span>
          </h2>

          <div
            style={{
              marginTop: "64px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              {
                step: "01",
                title: "Responda o Questionario",
                desc: "Nos conte sobre seu negocio, publico e objetivos. Nossa IA entende exatamente o que voce precisa para dominar seu nicho.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
              },
              {
                step: "02",
                title: "IA Cria seu Plano de Conteudo",
                desc: "Geramos um plano estrategico com topical authority, content clusters e palavras-chave que seus concorrentes nem sonham.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
              },
              {
                step: "03",
                title: "Publicacao Automatica",
                desc: "Artigos otimizados sao gerados e publicados direto no seu WordPress. Voce so acompanha o trafego subindo.",
                img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: "var(--bg-card)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-card)",
                  transition: "all 0.3s ease",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    height: "200px",
                    backgroundImage: `url('${item.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    {item.step}
                  </div>
                </div>
                <div style={{ padding: "28px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "56px" }}>
            <Link
              href="/sign-up"
              className="btn-accent"
              style={{ fontSize: "16px", padding: "16px 36px" }}
            >
              Quero Comecar Agora — E de Graca
            </Link>
            <p style={{ marginTop: "12px", fontSize: "13px", color: "var(--text-muted)" }}>
              Setup em menos de 5 minutos
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BENEFICIOS - Seção 4 (Com imagem de fundo)
          ═══════════════════════════════════════════════════ */}
      <section
        className="section-bg-image"
        style={{
          padding: "100px 24px",
          backgroundImage: "url('https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&q=80')",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(40,55,74,0.62) 0%, rgba(40,55,74,0.70) 100%)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--bg-sand)",
              marginBottom: "12px",
            }}
          >
            Por que nos?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Pare de{" "}
            <span style={{ fontStyle: "italic", color: "var(--bg-sand)" }}>
              desperdicar dinheiro
            </span>{" "}
            com SEO que nao funciona
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.7)",
              marginTop: "20px",
              maxWidth: "600px",
              margin: "20px auto 0",
              lineHeight: 1.6,
            }}
          >
            Enquanto voce paga caro por agencias que entregam pouco, sua concorrencia esta
            usando IA para dominar o Google.
          </p>

          <div
            style={{
              marginTop: "64px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: "⚡",
                title: "10x Mais Rapido",
                desc: "Produza em 1 dia o que uma agencia leva 1 mes. Artigos completos em minutos, nao semanas.",
              },
              {
                icon: "🎯",
                title: "SEO Estrategico",
                desc: "Topical authority + content clusters. A mesma estrategia que sites com milhoes de visitas usam.",
              },
              {
                icon: "🤖",
                title: "IA de Ponta",
                desc: "Claude Sonnet + Gemini Flash trabalhando juntos. O melhor da IA gerando conteudo de verdade.",
              },
              {
                icon: "📈",
                title: "Resultados Reais",
                desc: "Conteudo otimizado que o Google ama. Ranqueamento organico que cresce mes apos mes.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px 24px",
                  textAlign: "left",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{benefit.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.7,
                  }}
                >
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "56px" }}>
            <Link
              href="/sign-up"
              className="btn-accent animate-pulse-glow"
              style={{ fontSize: "17px", padding: "18px 44px" }}
            >
              Chega de Perder Tempo — Comece Agora
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURES DETALHADAS - Seção 5 (Sem imagem, fundo claro)
          ═══════════════════════════════════════════════════ */}
      <section className="section-light" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "12px",
              }}
            >
              Recursos
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Tudo que voce precisa para{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>dominar</span> o Google
            </h2>
          </div>

          {/* Feature 1 - Image Left */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
              marginBottom: "80px",
            }}
            className="feature-row"
          >
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-elevated)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80"
                alt="IA gerando conteudo"
                style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
              />
            </div>
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  background: "var(--accent-dim)",
                  borderRadius: "99px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Inteligencia Artificial
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                Conteudo que o Google{" "}
                <span style={{ fontStyle: "italic" }}>ama</span> ranquear
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                Nossa IA nao gera texto generico. Ela pesquisa SERPs, analisa
                concorrentes, e cria artigos com a profundidade e autoridade
                que o Google premia com posicoes no topo.
              </p>
              <Link
                href="/sign-up"
                className="btn-accent"
                style={{ fontSize: "14px", padding: "12px 28px" }}
              >
                Testar a IA Gratuitamente
              </Link>
            </div>
          </div>

          {/* Feature 2 - Image Right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
              marginBottom: "80px",
            }}
            className="feature-row"
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  background: "var(--accent-2-dim)",
                  borderRadius: "99px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--accent-2)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Automacao Total
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                Publicacao{" "}
                <span style={{ fontStyle: "italic" }}>automatica</span> no seu WordPress
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                Conecte seu site uma vez e pronto. Cada artigo e publicado automaticamente
                com imagens, meta tags, schema markup e links internos otimizados.
                Zero trabalho manual.
              </p>
              <Link
                href="/sign-up"
                className="btn-blue"
                style={{ fontSize: "14px", padding: "12px 28px" }}
              >
                Conectar meu WordPress
              </Link>
            </div>
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-elevated)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80"
                alt="Publicacao automatica"
                style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>

          {/* Feature 3 - Image Left */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
            className="feature-row"
          >
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-elevated)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=700&q=80"
                alt="Analytics e resultados"
                style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
              />
            </div>
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  background: "rgba(107,103,81,0.1)",
                  borderRadius: "99px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Topical Authority
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                Domine seu nicho com{" "}
                <span style={{ fontStyle: "italic" }}>autoridade</span> real
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                Nao basta publicar artigos soltos. Nosso sistema cria clusters
                de conteudo interligados que mostram ao Google que voce e A
                autoridade no seu assunto. Resultado: posicoes que ficam.
              </p>
              <Link
                href="/sign-up"
                className="btn-accent"
                style={{ fontSize: "14px", padding: "12px 28px" }}
              >
                Quero Dominar meu Nicho
              </Link>
            </div>
          </div>

          {/* CTA da seção */}
          <div style={{ textAlign: "center", marginTop: "72px", padding: "56px 40px", background: "var(--bg-cream)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "12px" }}>
              Pronto para comecar?
            </p>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px", lineHeight: 1.2 }}>
              Cada dia sem conteudo e um dia que seu concorrente avanca.{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Nao espere mais.</span>
            </h3>
            <Link
              href="/sign-up"
              className="btn-accent animate-pulse-glow"
              style={{ fontSize: "17px", padding: "18px 44px" }}
            >
              Quero Comecar Agora — Gratis e Sem Cartao
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          NUMEROS / RESULTADOS - Seção 6 (Com imagem de fundo)
          ═══════════════════════════════════════════════════ */}
      <section
        className="section-bg-image"
        style={{
          padding: "80px 24px",
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(117,68,55,0.65) 0%, rgba(40,55,74,0.65) 100%)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "48px",
            }}
          >
            Numeros que falam por si
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              { number: "10x", label: "Mais rapido que agencias" },
              { number: "85%", label: "Economia vs freelancer" },
              { number: "24/7", label: "Producao automatizada" },
              { number: "#1", label: "Em topical authority BR" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "52px",
                    fontWeight: 700,
                    color: "var(--bg-sand)",
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.7)",
                    marginTop: "8px",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "56px" }}>
            <Link
              href="/sign-up"
              className="btn-accent animate-pulse-glow"
              style={{ fontSize: "17px", padding: "18px 44px" }}
            >
              Quero Esses Resultados Para Mim
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DEPOIMENTOS - Seção 7 (Sem imagem, fundo creme)
          ═══════════════════════════════════════════════════ */}
      <section className="section-cream" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "12px",
            }}
          >
            Depoimentos
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Quem usa, <span style={{ fontStyle: "italic" }}>nao volta</span> atras
          </h2>

          <div
            style={{
              marginTop: "56px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              textAlign: "left",
            }}
          >
            {[
              {
                quote: "Em 3 meses, meu trafego organico triplicou. O conteudo que a IA gera e melhor do que o que eu pagava R$2.000 por mes para uma agencia fazer.",
                name: "Dra. Juliana C.",
                role: "Advogada — Direito Trabalhista",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
              },
              {
                quote: "Eu era cetico com IA para SEO. Mas quando vi os artigos ranqueando na primeira pagina em 6 semanas, virei fa. Melhor investimento do ano.",
                name: "Rafael M.",
                role: "CEO — E-commerce de Moda",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
              },
              {
                quote: "A publicacao automatica no WordPress mudou minha vida. Antes eu gastava 15h por semana em conteudo. Agora gasto zero e os resultados sao melhores.",
                name: "Camila S.",
                role: "Nutricionista — Clinica Online",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                style={{
                  background: "var(--bg-card)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{ color: "#e8b931", fontSize: "18px" }}>★</span>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    marginBottom: "24px",
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "var(--text-primary)",
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "56px" }}>
            <Link
              href="/sign-up"
              className="btn-accent"
              style={{ fontSize: "16px", padding: "16px 36px" }}
            >
              Quero os Mesmos Resultados
            </Link>
            <p style={{ marginTop: "12px", fontSize: "13px", color: "var(--text-muted)" }}>
              Junte-se a centenas de empresas que ja ranqueiam no Google
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PRECOS - Seção 8 (Com imagem de fundo)
          ═══════════════════════════════════════════════════ */}
      <section
        className="section-bg-image"
        style={{
          padding: "100px 24px",
          backgroundImage: "url('https://images.unsplash.com/photo-1507209696998-f8c42df7c54b?w=1920&q=80')",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(160deg, rgba(211,199,173,0.92) 0%, rgba(250,248,245,0.95) 100%)",
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "12px",
            }}
          >
            Planos
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Invista pouco,{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>colha muito</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
              marginTop: "16px",
              maxWidth: "500px",
              margin: "16px auto 0",
            }}
          >
            Menos do que voce paga por um cafezinho por dia. O retorno? Trafego organico que cresce todo mes.
          </p>

          <div
            style={{
              marginTop: "56px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              alignItems: "stretch",
            }}
          >
            {[
              {
                name: "Starter",
                price: "197",
                period: "/mes",
                desc: "Ideal para quem esta comecando",
                features: ["10 artigos/mes", "1 site WordPress", "Pesquisa de keywords", "Publicacao automatica", "Suporte por email"],
                featured: false,
                cta: "Comecar com Starter",
              },
              {
                name: "Pro",
                price: "497",
                period: "/mes",
                desc: "Para quem quer resultados serios",
                features: ["30 artigos/mes", "3 sites WordPress", "Topical authority completo", "Content clusters", "Analise de concorrentes", "Suporte prioritario"],
                featured: true,
                cta: "Escalar com Pro",
              },
              {
                name: "Enterprise",
                price: "Sob consulta",
                period: "",
                desc: "Para agencias e grandes operacoes",
                features: ["Artigos ilimitados", "Sites ilimitados", "API dedicada", "White-label", "Account manager", "SLA garantido"],
                featured: false,
                cta: "Falar com Vendas",
              },
            ].map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: plan.featured ? "var(--bg-blue)" : "var(--bg-card)",
                  borderRadius: "var(--radius-lg)",
                  padding: "40px 32px",
                  border: plan.featured ? "2px solid var(--accent)" : "1px solid var(--border-light)",
                  boxShadow: plan.featured ? "var(--shadow-elevated)" : "var(--shadow-card)",
                  position: "relative",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {plan.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--accent)",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "5px 16px",
                      borderRadius: "99px",
                    }}
                  >
                    Mais Popular
                  </div>
                )}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: plan.featured ? "#fff" : "var(--text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: plan.featured ? "rgba(255,255,255,0.6)" : "var(--text-muted)",
                    marginBottom: "24px",
                  }}
                >
                  {plan.desc}
                </p>
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: plan.price === "Sob consulta" ? "28px" : "44px",
                      fontWeight: 700,
                      color: plan.featured ? "#fff" : "var(--text-primary)",
                    }}
                  >
                    {plan.price === "Sob consulta" ? plan.price : `R$${plan.price}`}
                  </span>
                  {plan.period && (
                    <span
                      style={{
                        fontSize: "15px",
                        color: plan.featured ? "rgba(255,255,255,0.5)" : "var(--text-muted)",
                      }}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <ul style={{ listStyle: "none", marginBottom: "32px", flex: 1 }}>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        padding: "8px 0",
                        fontSize: "14px",
                        color: plan.featured ? "rgba(255,255,255,0.8)" : "var(--text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ color: plan.featured ? "var(--bg-sand)" : "var(--accent)", fontSize: "16px" }}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sign-up"
                  className={plan.featured ? "btn-accent" : "btn-ghost"}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    fontSize: "14px",
                    padding: "14px 24px",
                    ...(plan.featured ? {} : { borderColor: "var(--border)", color: "var(--text-primary)" }),
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA abaixo dos planos */}
          <p style={{ marginTop: "32px", fontSize: "14px", color: "var(--text-muted)" }}>
            💡 Todos os planos incluem 7 dias de teste gratuito. Sem surpresas.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ - Seção 9 (Com imagem de fundo)
          ═══════════════════════════════════════════════════ */}
      <section
        className="section-bg-image"
        style={{
          padding: "100px 24px",
          backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80')",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(40,55,74,0.68)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "48px",
            }}
          >
            Perguntas{" "}
            <span style={{ fontStyle: "italic", color: "var(--bg-sand)" }}>frequentes</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
            {[
              {
                q: "O conteudo gerado por IA e realmente bom?",
                a: "Sim. Usamos os modelos mais avancados (Claude + Gemini) com prompts especializados em SEO. O conteudo e original, otimizado e indistinguivel de um redator profissional.",
              },
              {
                q: "Quanto tempo leva para ver resultados?",
                a: "Normalmente 4-8 semanas para as primeiras posicoes. Com topical authority, os resultados se acumulam — quanto mais conteudo, mais rapido voce sobe.",
              },
              {
                q: "Funciona com qualquer nicho?",
                a: "Sim. Desde direito e saude ate e-commerce e tecnologia. Nossa IA se adapta ao tom e terminologia de qualquer area.",
              },
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Claro. Sem contratos, sem multas. Cancele quando quiser e mantenha todo o conteudo ja publicado.",
              },
              {
                q: "Preciso saber de SEO para usar?",
                a: "Zero. A plataforma faz tudo por voce — desde a pesquisa de palavras-chave ate a publicacao otimizada. Voce so precisa de um site WordPress.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "var(--radius)",
                  padding: "24px",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  {faq.q}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "48px" }}>
            <Link
              href="/sign-up"
              className="btn-accent animate-pulse-glow"
              style={{ fontSize: "17px", padding: "18px 44px" }}
            >
              Ainda com Duvida? Teste Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA FINAL - Seção 10 (Sem imagem, fundo creme)
          ═══════════════════════════════════════════════════ */}
      <section className="section-cream" style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            Seus concorrentes ja estao usando IA.{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              E voce?
            </span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              marginTop: "24px",
              lineHeight: 1.6,
            }}
          >
            Cada dia sem conteudo otimizado e um dia que seus concorrentes
            avancam nas buscas. Nao espere mais para dominar o Google.
          </p>
          <div style={{ marginTop: "40px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/sign-up"
              className="btn-accent animate-pulse-glow"
              style={{ fontSize: "18px", padding: "20px 48px" }}
            >
              Comecar Agora — E Gratis
            </Link>
          </div>
          <p
            style={{
              marginTop: "16px",
              fontSize: "14px",
              color: "var(--text-muted)",
            }}
          >
            Sem cartao de credito. Setup em 5 minutos. Cancele quando quiser.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════ */}
      <footer
        style={{
          background: "var(--bg-blue)",
          padding: "48px 24px",
          color: "var(--text-on-dark)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "18px",
                color: "#fff",
              }}
            >
              S
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              SEO Inteligente
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "32px",
              fontSize: "14px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <Link href="#como-funciona" style={{ color: "inherit", textDecoration: "none" }}>
              Como Funciona
            </Link>
            <Link href="/sign-in" style={{ color: "inherit", textDecoration: "none" }}>
              Entrar
            </Link>
            <Link href="/sign-up" style={{ color: "inherit", textDecoration: "none" }}>
              Criar Conta
            </Link>
          </div>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
            SEO Inteligente &copy; 2026. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .feature-row {
            grid-template-columns: 1fr !important;
          }
          .feature-row > div:first-child {
            order: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
