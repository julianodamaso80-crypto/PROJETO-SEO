import Link from "next/link";
import { blogPosts } from "@/content/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advogada Previdenciária | INSS Negou? Entenda Seus Direitos",
  description: "Benefício negado pelo INSS? Conheça seus direitos e as opções de recurso com uma advogada previdenciária especializada.",
};

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

const SERVICES = [
  {
    title: "Auxílio-Acidente",
    desc: "Benefício mensal para quem ficou com sequela, acumulável com salário.",
    details: [
      "50% do salário de benefício pago mensalmente",
      "Recebido junto com o salário do trabalho",
      "Acidente de qualquer tipo (não só trabalho)",
      "Pago até a aposentadoria",
      "Aumenta o valor da futura aposentadoria",
    ],
  },
  {
    title: "Aposentadoria por Invalidez",
    desc: "Benefício para incapacidade permanente, com possibilidade de adicional de 25%.",
    details: [
      "100% do salário se for por acidente de trabalho",
      "Adicional de 25% se precisar de acompanhante",
      "Doenças graves dispensam carência",
      "Perícia judicial analisa com mais profundidade",
      "Após 15 anos, INSS não pode mais revisar",
    ],
  },
  {
    title: "Aposentadoria Negada",
    desc: "Recurso administrativo e judicial contra negativas do INSS.",
    details: [
      "Parte significativa das negativas é revertida judicialmente",
      "Retroativo desde a data do pedido original",
      "Recurso administrativo gratuito (30 dias de prazo)",
      "Perícia judicial é independente e mais detalhada",
      "Erros de cálculo do INSS são comuns",
    ],
  },
  {
    title: "Pensão por Morte",
    desc: "Benefício para dependentes do segurado falecido.",
    details: [
      "Prazo de 180 dias é essencial para garantir o retroativo",
      "Cônjuge 45+ anos = pensão vitalícia",
      "Filhos até 21 anos (ou inválidos = vitalícia)",
      "Pode acumular com aposentadoria própria",
      "Requerer dentro do prazo garante retroativo integral",
    ],
  },
  {
    title: "Auxílio-Doença Negado",
    desc: "Perícia do INSS negou? A perícia judicial analisa com mais profundidade.",
    details: [
      "Perícia do INSS é frequentemente rápida",
      "Perícia judicial analisa laudos com profundidade",
      "Retroativo desde a data do pedido",
      "Não precisa pagar nada para entrar na Justiça",
      "Mantenha laudos e receitas atualizados",
    ],
  },
  {
    title: "BPC/LOAS",
    desc: "Um salário mínimo mensal para idosos e pessoas com deficiência em vulnerabilidade.",
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
    desc: "Análise técnica para escolher a melhor regra de aposentadoria.",
    details: [
      "7 regras de transição ativas — qual é a melhor?",
      "A regra escolhida impacta diretamente o valor do benefício",
      "Simulação com todas as regras disponíveis",
      "Análise do CNIS para corrigir erros",
      "Tempo especial pode antecipar sua aposentadoria",
    ],
  },
];

export default function PrevidenciarioPage() {
  const posts = blogPosts.filter((p) => p.category === "Previdenciário").slice(0, 3);

  return (
    <div style={{ paddingTop: "72px" }}>

      {/* Hero */}
      <section
        className="hero-bg"
        style={{
          minHeight: "60vh",
          paddingTop: "72px",
          backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=85')",
        }}
      >
        <div className="container" style={{ padding: "80px 24px" }}>
          <p className="eyebrow eyebrow--light animate-in" style={{ marginBottom: "20px" }}>
            Direito Previdenciário
          </p>
          <h1 className="animate-in delay-1" style={{ color: "var(--text-on-dark)", marginBottom: "20px", maxWidth: "600px" }}>
            INSS negou seu benefício?{" "}
            <em style={{ color: "var(--bg-sand)" }}>Existem caminhos.</em>
          </h1>
          <p className="animate-in delay-2" style={{
            fontSize: "18px",
            color: "var(--text-on-dark-muted)",
            maxWidth: "500px",
            lineHeight: 1.7,
            marginBottom: "36px",
          }}>
            Negativa do INSS não é definitiva. Conheça seus direitos e as opções de recurso com uma advogada especializada.
          </p>
          <div className="animate-in delay-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar Consulta</a>
            <a href="#servicos" className="btn-outline-light">Ver áreas de atuação</a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section" style={{ background: "var(--bg-body)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <hr className="rule rule--center" />
            <h2>Áreas de atuação em Direito Previdenciário</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "20px" }}>
            {SERVICES.map((svc) => (
              <div key={svc.title} className="card" style={{ padding: "32px 28px" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{svc.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.65, marginBottom: "20px" }}>
                  {svc.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                  {svc.details.map((d) => (
                    <li key={d} style={{ fontSize: "13px", color: "var(--text-body)", display: "flex", gap: "8px", alignItems: "flex-start", lineHeight: 1.5 }}>
                      <span style={{ color: "var(--accent)", fontWeight: 600, flexShrink: 0 }}>—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Fale com a Especialista
            </a>
            <p style={{ marginTop: "12px", fontSize: "13px", color: "var(--text-muted)" }}>
              Consulta inicial gratuita. Atendimento online ou presencial.
            </p>
          </div>
        </div>
      </section>

      {/* Dados */}
      <section className="section" style={{ background: "var(--bg-cream)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <hr className="rule rule--center" />
            <h2>Informações sobre benefícios do INSS</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {[
              { number: "180 dias", label: "Prazo para pensão por morte com direito ao retroativo integral." },
              { number: "7 regras", label: "De transição ativas na aposentadoria. A análise técnica é essencial." },
            ].map((item) => (
              <div key={item.number} className="card" style={{ padding: "32px 24px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "32px", fontWeight: 700, color: "var(--accent)", marginBottom: "12px" }}>
                  {item.number}
                </div>
                <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.6 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section className="section" style={{ background: "var(--bg-body)" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <hr className="rule" />
                <h2>Artigos sobre Direito Previdenciário</h2>
              </div>
              <Link href="/blog" className="btn-text">Ver todos →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <article className="card" style={{ padding: "28px 24px", height: "100%" }}>
                    <span className="eyebrow" style={{ marginBottom: "12px", display: "block" }}>{post.category}</span>
                    <h3 style={{ fontSize: "18px", lineHeight: 1.35, marginBottom: "10px" }}>{post.title}</h3>
                    <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.6 }}>{post.excerpt}</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="section" style={{ background: "var(--bg-cream)" }}>
        <div className="container" style={{ maxWidth: "640px", textAlign: "center" }}>
          <hr className="rule rule--center" />
          <h2 style={{ marginBottom: "20px" }}>Tire suas dúvidas com uma especialista.</h2>
          <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "480px", margin: "0 auto 36px" }}>
            Consulta inicial gratuita e sem compromisso. Atendimento online ou presencial.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agendar Consulta
          </a>
        </div>
      </section>
    </div>
  );
}
