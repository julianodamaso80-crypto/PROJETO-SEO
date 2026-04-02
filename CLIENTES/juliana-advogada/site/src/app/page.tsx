import Link from "next/link";
import { blogPosts } from "@/content/posts";
import { HeroSection } from "@/components/HeroSection";

import { HomeMotion } from "@/components/HomeMotion";
import { AreaCards } from "@/components/AreaCards";

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

const AREAS_T = [
  { title: "Acidente de Trabalho", desc: "Se você sofreu um acidente no trabalho ou desenvolveu doença ocupacional, tem direito a estabilidade de 12 meses, indenização por danos morais e materiais, auxílio-doença acidentário e, em casos de sequela, pensão por redução de capacidade. A empresa é obrigada a emitir a CAT em até 24 horas — se recusar, você mesmo pode registrar pelo Meu INSS." },
  { title: "Vínculo Empregatício", desc: "Trabalhou sem carteira assinada? Se havia pessoalidade, habitualidade, subordinação e pagamento, a Justiça pode reconhecer o vínculo e a empresa terá que pagar retroativamente FGTS + multa de 40%, INSS, férias + 1/3, 13º salário de todos os anos e seguro-desemprego. Prints de WhatsApp, comprovantes PIX e testemunhas são provas válidas." },
  { title: "Horas Extras Não Pagas", desc: "A cada 2 horas extras não pagas por dia, com salário base de R$2.500, o valor acumulado em 5 anos pode ultrapassar R$50 mil — incluindo reflexos em férias, 13º e FGTS. Banco de horas informal é nulo, e-mails e mensagens fora do expediente servem como prova. Cargo de confiança atribuído sem real autonomia não elimina o direito." },
  { title: "Rescisão Indireta", desc: "Quando a empresa descumpre o contrato — atrasa salário, não deposita FGTS, pratica assédio moral — o trabalhador pode pedir a rescisão indireta na Justiça e receber como se fosse demitido sem justa causa: FGTS integral + multa 40% + seguro-desemprego + todas as verbas rescisórias. Não peça demissão antes de consultar um advogado." },
  { title: "Adicional de Periculosidade", desc: "O adicional de periculosidade corresponde a 30% sobre o salário base — não sobre o mínimo — para quem trabalha com eletricidade, inflamáveis, explosivos, segurança patrimonial ou em motocicleta. O fornecimento de EPI não elimina o direito ao adicional. É possível cobrar retroativo de até 5 anos na Justiça do Trabalho." },
  { title: "Adicional de Insalubridade", desc: "Quem trabalha exposto a ruído excessivo, calor, frio, agentes químicos ou biológicos pode ter direito ao adicional de insalubridade de 10%, 20% ou 40% sobre o salário mínimo, dependendo do grau. Mesmo com fornecimento de EPI, se este for ineficaz ou inadequado, o adicional continua devido. A perícia judicial comprova as condições." },
];

const AREAS_P = [
  { title: "Auxílio-Acidente", desc: "Se você sofreu um acidente e ficou com sequela que reduz a capacidade de trabalho, tem direito ao auxílio-acidente: 50% do salário de benefício pago todo mês, acumulável com o salário do trabalho. O benefício é pago até a aposentadoria e aumenta o valor dela. Em 10 anos, pode representar mais de R$100 mil — e a maioria das pessoas não pede." },
  { title: "Aposentadoria por Invalidez", desc: "Quando o trabalhador fica permanentemente incapacitado, tem direito à aposentadoria por invalidez com valor de até 100% do salário — podendo chegar a 125% se precisar de acompanhante. Doenças graves dispensam carência. A perícia do INSS frequentemente nega, mas a perícia judicial analisa com muito mais profundidade e reverte a maioria dos casos." },
  { title: "Aposentadoria Negada pelo INSS", desc: "O INSS nega benefícios de forma recorrente — erros de cálculo, tempo de contribuição desconsiderado, perícias superficiais de 15 minutos. Existem 3 caminhos: recurso ao CRPS (30 dias, gratuito), novo requerimento com documentação complementar ou ação judicial com perícia independente. O retroativo é pago desde a data do pedido original." },
  { title: "Pensão por Morte", desc: "A pensão por morte é devida aos dependentes do segurado falecido. O prazo de 180 dias após o óbito é fundamental: quem requer dentro do prazo recebe o retroativo integral desde a data do falecimento. Cônjuge com 45+ anos tem direito à pensão vitalícia, filhos até 21 anos (ou vitalícia se inválidos). O benefício pode ser acumulado com aposentadoria própria." },
  { title: "Auxílio-Doença Negado", desc: "A perícia do INSS dura em média 15 minutos e frequentemente ignora laudos médicos particulares. Se seu auxílio-doença foi negado, a perícia judicial é mais detalhada e independente — analisa exames, laudos, histórico e condições reais. Não é necessário pagar para entrar na Justiça e o retroativo é contado desde a data do requerimento." },
  { title: "BPC/LOAS", desc: "O Benefício de Prestação Continuada paga 1 salário mínimo por mês para idosos com 65+ anos e pessoas com deficiência em situação de baixa renda — sem necessidade de nunca ter contribuído ao INSS. A renda familiar per capita deve ser de até 1/4 do salário mínimo, mas a Justiça é mais flexível que o INSS e aceita descontar gastos médicos do cálculo." },
  { title: "Planejamento Previdenciário", desc: "Com 7 regras de transição ativas após a Reforma da Previdência, escolher a regra errada pode significar anos a mais de trabalho e milhares de reais a menos no benefício. O planejamento previdenciário analisa seu CNIS, corrige erros de registro, simula todas as regras disponíveis e identifica tempo especial que pode antecipar sua aposentadoria." },
];

export default function HomePage() {
  const posts = blogPosts.slice(0, 3);

  return (
    <>
      <HeroSection />
      <HomeMotion>

        {/* ═══════════════════════════════════════
            2. SOBRE A DDC LAW
        ═══════════════════════════════════════ */}
        <section data-animate="section" style={{ padding: "var(--section-py) 24px", background: "var(--bg-body)" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <hr className="rule" style={{ margin: "0 auto 24px" }} />
              <span className="eyebrow" style={{ marginBottom: "16px" }}>Sobre a DDC LAW</span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginTop: "16px" }}>
                Advocacia especializada em quem vive do próprio trabalho.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              <div>
                <p style={{ fontSize: "16px", lineHeight: 1.9, marginBottom: "16px" }}>
                  A DDC LAW nasceu com um propósito claro: defender os direitos de trabalhadores
                  e segurados do INSS com excelência técnica e atendimento humanizado. Atuamos
                  exclusivamente em Direito do Trabalho e Direito Previdenciário — duas áreas
                  que afetam diretamente a renda, a saúde e a dignidade de milhões de brasileiros.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.9 }}>
                  Cada caso é tratado de forma individual. Analisamos documentos, calculamos valores,
                  identificamos irregularidades e construímos a melhor estratégia jurídica — tudo
                  explicado em linguagem clara, sem juridiquês.
                </p>
              </div>
              <div>
                <p style={{ fontSize: "16px", lineHeight: 1.9, marginBottom: "16px" }}>
                  Da consulta inicial à conclusão do processo, você é acompanhado pessoalmente
                  pela advogada responsável. Não somos um escritório de volume — somos um escritório
                  de atenção. Cada processo tem nome, história e estratégia dedicada.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.9 }}>
                  Atendemos presencialmente e online, em todo o Brasil. A consulta inicial
                  é gratuita e sem compromisso — você entende seus direitos antes de tomar
                  qualquer decisão.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", justifyContent: "center", marginTop: "40px", paddingTop: "32px", borderTop: "1px solid var(--border-light)" }}>
              {[
                { label: "Atuação", value: "Trabalhista e Previdenciário" },
                { label: "Atendimento", value: "Presencial e Online — Todo o Brasil" },
                { label: "Consulta Inicial", value: "Gratuita e Sem Compromisso" },
              ].map((c) => (
                <div key={c.label}>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>{c.label}</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)" }}>{c.value}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "36px", display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar Consulta Gratuita</a>
              <Link href="/sobre" className="btn-text">Conheça nossa história →</Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            3. ÁREAS DE ATUAÇÃO — TABS
        ═══════════════════════════════════════ */}
        <section id="areas" data-animate="section" style={{ padding: "var(--section-py) 24px", background: "var(--bg-light)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ marginBottom: "48px", textAlign: "center" }}>
              <hr className="rule" style={{ margin: "0 auto 24px" }} />
              <span className="eyebrow" style={{ marginBottom: "16px" }}>Áreas de Atuação</span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginTop: "16px", marginBottom: "16px" }}>
                Especialistas em Direito do Trabalho<br />e Direito Previdenciário.
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.8, maxWidth: "640px", margin: "0 auto", color: "var(--text-body)" }}>
                Atuamos em 13 áreas específicas dentro do Direito Trabalhista e Previdenciário.
                Cada caso recebe análise técnica aprofundada, com levantamento de provas,
                cálculos de valores devidos e estratégia jurídica individualizada.
              </p>
            </div>
            <AreaCards items={[...AREAS_T, ...AREAS_P]} />
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Fale com a Especialista
              </a>
              <p style={{ marginTop: "12px", fontSize: "16px", color: "var(--text-body)" }}>
                Consulta inicial gratuita. Análise técnica do seu caso.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            4. POR QUE A DDC LAW — com imagem de fundo
        ═══════════════════════════════════════ */}
        <section data-animate="section" style={{
          padding: "var(--section-py) 24px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Imagem de fundo */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/brand/juliana22.jpg')",
            backgroundSize: "cover", backgroundPosition: "center",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(0,15,33,0.70)",
          }} />

          <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ marginBottom: "64px", textAlign: "center" }}>
              <hr className="rule" style={{ margin: "0 auto 24px", background: "var(--blue)" }} />
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginBottom: "16px", color: "var(--grey)" }}>Por que confiar na DDC LAW</h2>
              <p style={{ fontSize: "16px", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto", color: "var(--silver)" }}>
                Não somos um escritório generalista. Somos especialistas dedicados
                exclusivamente a defender quem trabalha e quem depende do INSS.
              </p>
            </div>

            <div data-animate="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
              {[
                { title: "Especialização Real", desc: "Atuação 100% focada em Direito do Trabalho e Previdenciário. Cada caso recebe aprofundamento técnico." },
                { title: "Atendimento Individual", desc: "Você fala diretamente com a advogada responsável. Sem intermediários, sem filas." },
                { title: "Transparência Total", desc: "Cada etapa explicada em linguagem clara. Você entende direitos, riscos e prazos." },
                { title: "Análise Técnica", desc: "Calculamos valores, identificamos irregularidades e construímos a melhor estratégia." },
              ].map((d) => (
                <div key={d.title}>
                  <div style={{ width: "48px", height: "1px", background: "var(--blue)", marginBottom: "20px" }} />
                  <h3 style={{ fontSize: "18px", marginBottom: "10px", fontWeight: 700, color: "var(--grey)" }}>{d.title}</h3>
                  <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--silver)" }}>{d.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "56px" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary"
                style={{ background: "var(--blue)" }}>
                Agendar Consulta Gratuita
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            5. COMPROMISSO — dark section
        ═══════════════════════════════════════ */}
        <section data-animate="section" style={{ background: "var(--navy)", padding: "var(--section-py) 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <hr className="rule" style={{ background: "var(--blue)", margin: "0 auto 24px" }} />
            <span className="eyebrow eyebrow--light" style={{ marginBottom: "20px" }}>Nosso Compromisso</span>
            <h2 style={{
              fontSize: "clamp(26px, 3vw, 38px)", color: "var(--grey)",
              marginTop: "20px", marginBottom: "28px", lineHeight: 1.2,
            }}>
              Cada trabalhador que nos procura merece<br />a mesma dedicação que daríamos ao nosso próprio caso.
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(230,230,230,0.6)", lineHeight: 1.85, marginBottom: "20px", maxWidth: "600px", margin: "0 auto 24px" }}>
              A advocacia trabalhista e previdenciária existe para proteger quem é a parte mais
              vulnerável da relação. Quando a empresa descumpre a lei ou o INSS nega um direito legítimo,
              nossa função é restabelecer o equilíbrio — com técnica, estratégia e comprometimento.
            </p>
            <p style={{ fontSize: "18px", color: "rgba(230,230,230,0.6)", lineHeight: 1.85, marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>
              Atendemos presencialmente e online, em todo o Brasil.
              A consulta inicial é gratuita e sem compromisso.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ background: "var(--blue)", color: "var(--grey)", fontSize: "16px", padding: "16px 40px" }}>
              Fale Conosco Agora
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            6. BLOG
        ═══════════════════════════════════════ */}
        {posts.length > 0 && (
          <section data-animate="section" style={{ padding: "var(--section-py) 24px", background: "var(--bg-light)" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
                <div>
                  <hr className="rule" style={{ margin: "0 auto 24px" }} />
                  <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", marginBottom: "12px" }}>Conteúdo Jurídico Especializado</h2>
                  <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
                    Artigos técnicos sobre seus direitos trabalhistas e previdenciários.
                    Informação prática, atualizada e sem juridiquês.
                  </p>
                </div>
                <Link href="/blog" className="btn-text">Ver todos os artigos →</Link>
              </div>

              <div data-animate="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                    <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                      <div style={{ padding: "28px 24px", flex: 1 }}>
                        <span className="eyebrow" style={{ marginBottom: "14px" }}>{post.category}</span>
                        <h3 style={{ fontSize: "18px", lineHeight: 1.35, marginTop: "14px", marginBottom: "12px", fontWeight: 700 }}>
                          {post.title}
                        </h3>
                        <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.65 }}>
                          {post.excerpt}
                        </p>
                      </div>
                      <div style={{ padding: "0 24px 24px" }}>
                        <span className="btn-text">Ler artigo completo →</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Agendar Consulta Gratuita
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════
            7. CTA FINAL
        ═══════════════════════════════════════ */}
        <section data-animate="section" style={{ padding: "var(--section-py) 24px", background: "var(--bg-body)" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <hr className="rule" style={{ margin: "0 auto 24px" }} />
            <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", marginBottom: "20px" }}>
              O primeiro passo para proteger seus direitos é uma conversa.
            </h2>
            <p style={{ fontSize: "18px", lineHeight: 1.8, marginBottom: "20px", color: "var(--text-body)" }}>
              Na consulta inicial, analisamos sua situação, explicamos quais direitos se aplicam
              ao seu caso e apresentamos as opções jurídicas disponíveis — tudo de forma clara,
              objetiva e sem custo.
            </p>
            <p style={{ fontSize: "18px", lineHeight: 1.8, marginBottom: "40px", color: "var(--text-body)" }}>
              Atendimento presencial e online. Todo o Brasil.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ fontSize: "16px", padding: "18px 48px" }}>
              Agendar Consulta Gratuita
            </a>
          </div>
        </section>

      </HomeMotion>
    </>
  );
}
