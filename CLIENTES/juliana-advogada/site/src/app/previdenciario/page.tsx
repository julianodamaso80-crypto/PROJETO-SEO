import Link from "next/link";
import { blogPosts } from "@/content/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advogada Previdenciária | INSS Negou? Lute Pelos Seus Direitos",
  description:
    "Benefício negado pelo INSS? 41% das decisões são revertidas na Justiça. Não aceite o 'não' — fale com uma previdenciária agora.",
};

const WA_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20uma%20consulta%20gratuita";

const SERVICES = [
  {
    title: "Auxílio-Acidente",
    desc: "Ficou com sequela de acidente? Tem direito a benefício mensal mesmo trabalhando.",
    img: "https://images.unsplash.com/photo-1576765608622-067973a79f53?w=600&q=80",
    cta: "Tenho sequela — quero o benefício",
    details: [
      "50% do salário de benefício pago TODO mês",
      "Recebe JUNTO com o salário do trabalho",
      "Acidente de qualquer tipo (não só trabalho)",
      "Pago até a aposentadoria — pode ser 10+ anos",
      "Aumenta o valor da futura aposentadoria",
    ],
  },
  {
    title: "Aposentadoria por Invalidez",
    desc: "Incapacidade permanente para o trabalho. Benefício de até 100% do salário.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    cta: "Não consigo trabalhar — o que faço?",
    details: [
      "100% do salário se for por acidente de trabalho",
      "Adicional de 25% se precisar de acompanhante",
      "Doenças graves dispensam carência",
      "45% dos pedidos são negados, mas maioria é revertida",
      "Após 15 anos, INSS não pode mais revisar",
    ],
  },
  {
    title: "Aposentadoria Negada",
    desc: "INSS negou? Não é definitivo. Recursos e ações judiciais revertem a maioria dos casos.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    cta: "Meu INSS foi negado — quero recorrer",
    details: [
      "41% das negativas são revertidas na Justiça",
      "Retroativo desde a data do pedido original",
      "Recurso administrativo gratuito (30 dias de prazo)",
      "Perícia judicial é independente e mais detalhada",
      "Erros de cálculo do INSS são comuns",
    ],
  },
  {
    title: "Pensão por Morte",
    desc: "Proteja financeiramente sua família. Dependentes têm direito — independente de judicialização.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    cta: "Meu familiar faleceu — quero a pensão",
    details: [
      "Prazo de 180 dias para não perder retroativo",
      "Cônjuge 45+ anos = pensão vitalícia",
      "Filhos até 21 anos (ou inválidos = vitalícia)",
      "Pode acumular com aposentadoria própria",
      "Prazo de 180 dias é essencial para garantir o retroativo",
    ],
  },
  {
    title: "Auxílio-Doença Negado",
    desc: "Perícia do INSS durou 15 minutos e negou? Perícia judicial é mais detalhada e independente.",
    img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80",
    cta: "Perícia negou — quero recorrer",
    details: [
      "Perícia do INSS é superficial (média 15 min)",
      "Perícia judicial analisa laudos com profundidade",
      "Retroativo desde a data do pedido",
      "Não precisa pagar nada para entrar na Justiça",
      "Mantenha laudos e receitas atualizados",
    ],
  },
  {
    title: "BPC/LOAS",
    desc: "1 salário mínimo para idosos e deficientes em vulnerabilidade. Muitos têm direito e não sabem.",
    img: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&q=80",
    cta: "Verificar se tenho direito ao BPC",
    details: [
      "1 salário mínimo mensal sem necessidade de contribuição prévia",
      "Idosos 65+ ou pessoas com deficiência",
      "Renda per capita até 1/4 do salário mínimo",
      "Gastos médicos podem ser descontados da renda",
      "Justiça é mais flexível que o critério do INSS",
    ],
  },
  {
    title: "Planejamento Previdenciário",
    desc: "A regra errada pode custar anos de espera e milhares de reais. Escolha certo agora.",
    img: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80",
    cta: "Quero me aposentar no melhor momento",
    details: [
      "7 regras de transição ativas — qual é a melhor?",
      "A regra de transição escolhida impacta diretamente o valor do benefício",
      "Simulação com todas as regras disponíveis",
      "Análise do CNIS para corrigir erros",
      "Tempo especial pode antecipar sua aposentadoria",
    ],
  },
];

const BLOG_IMAGES = [
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  "https://images.unsplash.com/photo-1576765608622-067973a79f53?w=600&q=80",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
];

export default function PrevidenciarioPage() {
  const posts = blogPosts
    .filter((p) => p.category === "Previdenciário")
    .slice(0, 3);

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
            "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(40,55,74,0.78) 0%, rgba(117,68,55,0.60) 100%)",
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
              Direito Previdenciário
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
              INSS Negou Seu Benefício?{" "}
              <span style={{ fontStyle: "italic", color: "var(--bg-sand)" }}>
                Você Não Precisa Aceitar.
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
              }}
            >
              Estudos mostram que parte significativa das negativas do INSS &eacute; revertida quando contestada.{" "}
              <strong style={{ color: "#fff" }}>
                Entenda seus direitos com quem atua na &aacute;rea.
              </strong>
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
                Fale com a Advogada Previdenci&aacute;ria
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
                Ver benefícios disponíveis
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
                { number: "41%", label: "Reversão na Justiça" },
                { number: "R$0", label: "Custo Inicial" },
                { number: "100%", label: "Online" },
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
              &Aacute;reas de Atua&ccedil;&atilde;o em{" "}
              <span className="text-accent">Direito Previdenci&aacute;rio</span>
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
              Conhe&ccedil;a as principais situa&ccedil;&otilde;es em que um advogado previdenci&aacute;rio pode ajudar.
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
                {/* Imagem */}
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

                {/* Conteúdo */}
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

                  {/* Details bullet list */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 20px 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {svc.details.map((detail) => (
                      <li
                        key={detail}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "13px",
                          lineHeight: 1.5,
                          color: "var(--text-secondary)",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent)",
                            fontWeight: 700,
                            fontSize: "14px",
                            flexShrink: 0,
                            marginTop: "1px",
                          }}
                        >
                          ✓
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

          {/* CTA da seção */}
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
                marginTop: "12px",
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
            "url('https://images.unsplash.com/photo-1507679799987-c73b1a8e8b8d?w=1920&q=80')",
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
              Do Primeiro Contato à{" "}
              <span style={{ fontStyle: "italic", color: "var(--bg-sand)" }}>
                Conquista do Benefício
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
              Processo simples, transparente e sem burocracia para você.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              {
                step: "01",
                title: "Análise Gratuita",
                desc: "Avaliamos seu caso e seus documentos sem nenhum custo ou compromisso.",
              },
              {
                step: "02",
                title: "Estratégia",
                desc: "Definimos o melhor caminho: recurso administrativo ou ação judicial.",
              },
              {
                step: "03",
                title: "Representação",
                desc: "Cuidamos de tudo: petições, recursos, perícias e acompanhamento.",
              },
              {
                step: "04",
                title: "Acompanhamento",
                desc: "Voc&ecirc; &eacute; informado de cada movimenta&ccedil;&atilde;o at&eacute; a conclus&atilde;o do caso.",
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
                    lineHeight: 1,
                    marginBottom: "20px",
                    opacity: 0.6,
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
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.72)",
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
          SEÇÃO 4 — NÚMEROS / DADOS (SEM imagem, fundo areia claro)
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", background: "var(--bg-sand-light)" }}>
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
              Informa&ccedil;&otilde;es Importantes Sobre{" "}
              <span className="text-accent">Benef&iacute;cios do INSS</span>
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Dados p&uacute;blicos sobre o sistema previdenci&aacute;rio que todo segurado deveria conhecer.
            </p>
          </div>

          {/* Big numbers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
              marginBottom: "56px",
            }}
          >
            {[
              {
                number: "41%",
                label: "das negativas s&atilde;o revertidas judicialmente",
                desc: "Dados do Conselho Nacional de Justi&ccedil;a mostram que parte significativa dos benef&iacute;cios negados &eacute; concedida via Justi&ccedil;a.",
              },
              {
                number: "180",
                suffix: " DIAS",
                label: "prazo para pens&atilde;o por morte com retroativo",
                desc: "A legisla&ccedil;&atilde;o prev&ecirc; prazo de 180 dias para requerimento com direito ao retroativo integral.",
              },
              {
                number: "7",
                suffix: " REGRAS",
                label: "de transi&ccedil;&atilde;o ativas na aposentadoria",
                desc: "Cada regra gera valores e datas diferentes. A an&aacute;lise t&eacute;cnica &eacute; essencial para a melhor escolha.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="card"
                style={{ padding: "40px 32px", textAlign: "center" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(40px, 5vw, 56px)",
                    fontWeight: 800,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {item.number}
                  {item.suffix && (
                    <span style={{ fontSize: "0.5em" }}>{item.suffix}</span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                    lineHeight: 1.4,
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
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Explanatory text */}
          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "40px",
              }}
            >
              A per&iacute;cia administrativa do INSS &eacute; frequentemente r&aacute;pida e pode n&atilde;o considerar todos os laudos.
              A per&iacute;cia judicial, por outro lado,{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                analisa o caso com mais profundidade
              </strong>
              , considerando exames, laudos m&eacute;dicos e o hist&oacute;rico completo do segurado.
            </p>
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
                marginTop: "12px",
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
                  <span className="text-accent">Direito Previdenciário</span>
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    marginTop: "8px",
                  }}
                >
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
                    {/* Imagem do post */}
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
                        Ler artigo completo →
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
                Conteúdo novo toda semana. Conheça seus direitos.
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
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80')",
        }}
      >
        <div
          style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}
        >
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
            Converse com a Dra. Juliana e entenda quais benef&iacute;cios se aplicam &agrave; sua situa&ccedil;&atilde;o.{" "}
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
              { icon: "✓", text: "Consulta inicial gratuita" },
              { icon: "✓", text: "Especialista dedicada" },
              { icon: "✓", text: "Atendimento online" },
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
