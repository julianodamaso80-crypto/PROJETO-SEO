import Link from "next/link";
import { blogPosts } from "@/content/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advogada Trabalhista | Seus Direitos, Sua Defesa",
  description:
    "Empresa desrespeitou seus direitos? Cada dia sem ação reduz suas chances de indenização. Fale com uma trabalhista especializada agora.",
};

const WA_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20uma%20consulta%20gratuita";

const SERVICES = [
  {
    title: "Acidente de Trabalho",
    desc: "Indenização, estabilidade e benefícios para quem sofreu acidente ou doença no trabalho.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    cta: "Tive um acidente — quero meus direitos",
    details: [
      "Estabilidade de 12 meses após alta do INSS",
      "Possibilidade de indenização por danos morais e materiais",
      "Empresa obrigada a emitir CAT em 24 horas",
      "FGTS continua sendo depositado durante afastamento",
      "Possibilidade de pensão se houver redução da capacidade",
    ],
  },
  {
    title: "Vínculo Empregatício",
    desc: "Trabalhou sem carteira assinada? A Justiça pode reconhecer e você recebe tudo retroativo.",
    img: "https://images.unsplash.com/photo-1521791055366-0d553872952f?w=600&q=80",
    cta: "Trabalhei sem carteira — quero regularizar",
    details: [
      "FGTS + multa 40% de todo o período",
      "INSS retroativo — conta para aposentadoria",
      "Férias + 1/3 e 13º de todos os anos",
      "Seguro-desemprego (até 5 parcelas)",
      "Prints de WhatsApp e PIX são provas válidas",
    ],
  },
  {
    title: "Horas Extras",
    desc: "Horas extras não pagas podem ser cobradas judicialmente, com retroativo de até 5 anos.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    cta: "Calculei — quero cobrar as horas",
    details: [
      "Valores podem ser significativos com reflexos em férias, 13º e FGTS",
      "Reflexos em férias, 13º e FGTS",
      "Banco de horas informal é nulo",
      "E-mails fora do horário contam como prova",
      "Cargo de confiança falso não elimina o direito",
    ],
  },
  {
    title: "Rescisão Indireta",
    desc: "Empresa descumpriu o contrato? Você pode 'demitir' a empresa e receber todos os direitos.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    cta: "É meu caso — quero entender",
    details: [
      "Recebe como se fosse demitido sem justa causa",
      "FGTS + multa 40% + seguro-desemprego",
      "Atraso de salário já pode configurar falta grave",
      "Assédio moral gera indenização adicional",
      "Não peça demissão antes de consultar",
    ],
  },
  {
    title: "Periculosidade",
    desc: "Adicional de 30% para quem trabalha com risco. Você pode estar recebendo a menos sem saber.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    cta: "Quero saber se tenho direito",
    details: [
      "30% sobre o salário base — não sobre o mínimo",
      "Eletricistas, vigilantes, motoboys",
      "Inflamáveis, explosivos, radiação",
      "EPI não elimina o adicional de periculosidade",
      "Retroativo de até 5 anos",
    ],
  },
  {
    title: "Insalubridade",
    desc: "Adicional de 10% a 40% para quem trabalha exposto a agentes nocivos à saúde.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    cta: "Verificar meu direito ao adicional",
    details: [
      "10% (mínimo), 20% (médio) ou 40% (máximo)",
      "Ruído, calor, frio, químicos, biológicos",
      "EPI ineficaz = adicional continua devido",
      "Perícia judicial comprova as condições",
      "Pode cobrar retroativo na Justiça",
    ],
  },
];

const BLOG_IMAGES = [
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  "https://images.unsplash.com/photo-1521791055366-0d553872952f?w=600&q=80",
];

export default function TrabalhistaPage() {
  const posts = blogPosts.filter((p) => p.category === "Trabalhista").slice(0, 3);

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
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(40,55,74,0.78) 0%, rgba(117,68,55,0.55) 100%)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 24px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "760px" }}>
            {/* Badge */}
            <div
              className="animate-fade-up tag"
              style={{
                marginBottom: "28px",
                background: "rgba(211,199,173,0.18)",
                color: "var(--bg-sand)",
                border: "1px solid rgba(211,199,173,0.35)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--bg-sand)",
                  display: "inline-block",
                }}
              />
              Direito Trabalhista
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
              A Empresa Te Deve.{" "}
              <span style={{ fontStyle: "italic", color: "var(--bg-sand)" }}>
                A Lei Est&aacute; do Seu Lado.
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
                maxWidth: "600px",
              }}
            >
              Muitos trabalhadores desconhecem direitos garantidos por lei.{" "}
              <strong style={{ color: "#fff" }}>Entenda sua situa&ccedil;&atilde;o</strong> com
              orienta&ccedil;&atilde;o de quem atua exclusivamente nessa &aacute;rea.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up delay-3"
              style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "17px", padding: "18px 40px" }}
              >
                Fale com a Advogada Trabalhista
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#servicos"
                className="btn-outline-white"
                style={{ fontSize: "15px" }}
              >
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
              }}
            >
              {[
                { number: "6 Áreas", label: "de atuação trabalhista" },
                { number: "Online", label: "Atendimento em todo o Brasil" },
                { number: "Consulta", label: "Inicial sem custo" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "38px",
                      fontWeight: 800,
                      color: "var(--bg-sand)",
                      lineHeight: 1,
                    }}
                  >
                    {s.number}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.65)",
                      marginTop: "6px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SEÇÃO 2 — SERVIÇOS (SEM imagem, fundo creme)
      ═══════════════════════════════════════════════════ */}
      <section
        id="servicos"
        style={{ padding: "100px 24px", background: "var(--bg-cream)" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="divider" style={{ margin: "0 auto 16px" }} />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                marginBottom: "16px",
                color: "var(--text-primary)",
              }}
            >
              Direito Trabalhista:{" "}
              <span className="text-accent">Como Posso Te Ajudar</span>
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "var(--text-secondary)",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Conhe&ccedil;a as principais situa&ccedil;&otilde;es em que a legisla&ccedil;&atilde;o trabalhista protege o empregado.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="card card-accent"
                style={{ overflow: "hidden" }}
              >
                {/* Image */}
                <div
                  style={{
                    height: "180px",
                    backgroundImage: `url('${svc.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 30%, rgba(40,55,74,0.80) 100%)",
                    }}
                  />
                  <h3
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "20px",
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {svc.title}
                  </h3>
                </div>

                {/* Content */}
                <div style={{ padding: "24px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "16px",
                    }}
                  >
                    {svc.desc}
                  </p>

                  {/* Details list */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {svc.details.map((detail) => (
                      <li
                        key={detail}
                        style={{
                          fontSize: "13px",
                          color: "var(--text-secondary)",
                          lineHeight: 1.5,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent)",
                            fontWeight: 700,
                            fontSize: "14px",
                            lineHeight: "20px",
                            flexShrink: 0,
                          }}
                        >
                          &#10003;
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${WA_LINK}%20sobre%20${encodeURIComponent(svc.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      fontSize: "13px",
                      padding: "12px 24px",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    {svc.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div style={{ textAlign: "center", marginTop: "64px" }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "17px", padding: "18px 44px" }}
            >
              Fale com a Especialista
            </a>
            <p
              style={{
                marginTop: "14px",
                fontSize: "13px",
                color: "var(--text-muted)",
              }}
            >
              Consulta inicial gratuita. Atendimento online ou presencial.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SEÇÃO 3 — COMO FUNCIONA (COM imagem de fundo)
      ═══════════════════════════════════════════════════ */}
      <section
        className="section-bg section-overlay-dark"
        style={{
          padding: "100px 24px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791055366-0d553872952f?w=1920&q=80')",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              className="tag"
              style={{
                marginBottom: "20px",
                background: "rgba(211,199,173,0.15)",
                color: "var(--bg-sand)",
                border: "1px solid rgba(211,199,173,0.3)",
              }}
            >
              Passo a Passo
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 3.5vw, 46px)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "16px",
                lineHeight: 1.15,
              }}
            >
              Do Primeiro Contato ao Resultado:{" "}
              <span style={{ fontStyle: "italic", color: "var(--bg-sand)" }}>
                Como Funciona
              </span>
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.75)",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Processo simples e transparente. Entenda cada etapa do atendimento.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                step: "01",
                title: "Consulta Inicial",
                desc: "Analisamos sua situação e explicamos quais direitos podem se aplicar ao seu caso.",
              },
              {
                step: "02",
                title: "Documentação",
                desc: "Reunimos as provas necessárias e orientamos sobre cada documento.",
              },
              {
                step: "03",
                title: "Ação Judicial",
                desc: "Entramos com o processo na Justiça do Trabalho com a estratégia adequada ao caso.",
              },
              {
                step: "04",
                title: "Acompanhamento",
                desc: "Você é informado de cada movimentação. Transparência do início ao fim.",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "var(--radius-lg)",
                  padding: "36px 28px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "48px",
                    fontWeight: 800,
                    color: "var(--bg-sand)",
                    opacity: 0.4,
                    lineHeight: 1,
                    marginBottom: "16px",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.70)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "64px" }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "17px", padding: "18px 44px" }}
            >
              Agende Sua Consulta
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p
              style={{
                marginTop: "14px",
                fontSize: "13px",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              100% online. Sem sair de casa, sem perder dia de trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SEÇÃO 4 — PRAZOS / URGÊNCIA (SEM imagem, fundo areia claro)
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", background: "var(--bg-sand-light)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="divider" style={{ margin: "0 auto 16px" }} />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              Prazos Importantes{" "}
              <span className="text-accent">Que Voc&ecirc; Deve Conhecer</span>
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "var(--text-secondary)",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              A legisla&ccedil;&atilde;o trabalhista estabelece prazos para o exerc&iacute;cio de direitos.
              Conhec&ecirc;-los &eacute; fundamental.
            </p>
          </div>

          {/* Big deadline cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            {[
              {
                number: "2 ANOS",
                label: "Prazo prescricional após o desligamento",
                detail:
                  "A CLT estabelece o prazo de 2 anos após o fim do contrato para ajuizar a reclamação trabalhista.",
              },
              {
                number: "5 ANOS",
                label: "Período retroativo que pode ser pleiteado",
                detail:
                  "A ação pode abranger os últimos 5 anos anteriores à data do ajuizamento.",
              },
              {
                number: "Art. 7º",
                label: "Constituição Federal garante seus direitos",
                detail:
                  "FGTS, férias, 13º, horas extras e adicionais são direitos constitucionais do trabalhador.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="card"
                style={{ padding: "40px 32px", textAlign: "center" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 4vw, 52px)",
                    fontWeight: 800,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {item.number}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Explanatory text */}
          <div
            style={{
              background: "var(--bg-cream)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
              border: "1px solid var(--border)",
              marginBottom: "48px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                textAlign: "center",
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              A <strong style={{ color: "var(--text-primary)" }}>prescri&ccedil;&atilde;o trabalhista</strong> funciona assim: o trabalhador tem{" "}
              <strong style={{ color: "var(--accent)" }}>2 anos</strong> ap&oacute;s o desligamento para ajuizar a a&ccedil;&atilde;o, podendo pleitear os{" "}
              <strong style={{ color: "var(--accent)" }}>5 anos anteriores</strong> ao ajuizamento.
              Por isso, &eacute; importante buscar orienta&ccedil;&atilde;o jur&iacute;dica para entender seus direitos dentro do prazo legal.
            </p>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "17px", padding: "18px 44px" }}
            >
              Consulte uma Especialista
            </a>
            <p
              style={{
                marginTop: "14px",
                fontSize: "13px",
                color: "var(--text-muted)",
              }}
            >
              Consulta inicial gratuita. Atendimento online ou presencial.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SEÇÃO 5 — BLOG (SEM imagem, fundo body)
      ═══════════════════════════════════════════════════ */}
      {posts.length > 0 && (
        <section style={{ padding: "100px 24px", background: "var(--bg-body)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "56px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <div className="divider" />
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginTop: "4px",
                  }}
                >
                  Artigos sobre{" "}
                  <span className="text-accent">Direito Trabalhista</span>
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    marginTop: "8px",
                  }}
                >
                  Conte&uacute;do gratuito que protege voc&ecirc; antes mesmo da
                  consulta.
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
                Ver todos os artigos &rarr;
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {posts.map((post, idx) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article
                    className="card card-accent"
                    style={{ overflow: "hidden", height: "100%" }}
                  >
                    {/* Post image */}
                    <div
                      style={{
                        height: "200px",
                        backgroundImage: `url('${BLOG_IMAGES[idx % BLOG_IMAGES.length]}')`,
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
                          background: "var(--accent)",
                          color: "#fff",
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "4px 12px",
                          borderRadius: "99px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        {post.category}
                      </div>
                    </div>

                    <div style={{ padding: "28px" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "19px",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          lineHeight: 1.4,
                          marginBottom: "12px",
                        }}
                      >
                        {post.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "var(--text-secondary)",
                          lineHeight: 1.65,
                          marginBottom: "20px",
                        }}
                      >
                        {post.excerpt}
                      </p>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "var(--accent)",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        Ler artigo completo &rarr;
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center", marginTop: "56px" }}>
              <Link href="/blog" className="btn-primary">
                Ver Todos os Artigos Gratuitos
              </Link>
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                }}
              >
                Conte&uacute;do novo toda semana. Conhecimento que protege.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════
          SEÇÃO 6 — CTA FINAL (COM imagem de fundo)
      ═══════════════════════════════════════════════════ */}
      <section
        className="section-bg section-overlay-warm"
        style={{
          padding: "120px 24px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=80')",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div
            className="tag"
            style={{ marginBottom: "24px", margin: "0 auto 24px" }}
          >
            Consulta Gratuita
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4.5vw, 54px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Tire Suas D&uacute;vidas com{" "}
            <span className="text-accent">Uma Especialista</span>
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: "44px",
              maxWidth: "560px",
              margin: "0 auto 44px",
            }}
          >
            Converse com a Dra. Juliana e entenda quais direitos se aplicam &agrave; sua situa&ccedil;&atilde;o.{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              Consulta inicial gratuita e sem compromisso.
            </strong>
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "18px", padding: "20px 52px" }}
          >
            Agende Sua Consulta
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <div
            style={{
              display: "flex",
              gap: "40px",
              justifyContent: "center",
              marginTop: "48px",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: "\u2713", text: "Consulta inicial gratuita" },
              { icon: "\u2713", text: "Especialista dedicada" },
              { icon: "\u2713", text: "Atendimento online" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "15px",
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
