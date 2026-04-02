import Link from "next/link";
import { blogPosts } from "@/content/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advogada Previdenciária | DDC LAW",
  description: "Benefício negado pelo INSS? Conheça seus direitos e as opções de recurso.",
};

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

const SERVICES = [
  { title: "Auxílio-Acidente", desc: "Benefício mensal para quem ficou com sequela, acumulável com salário.",
    details: ["50% do salário de benefício", "Recebido junto com o salário", "Acidente de qualquer tipo", "Pago até a aposentadoria", "Aumenta o valor da futura aposentadoria"] },
  { title: "Aposentadoria por Invalidez", desc: "Benefício para incapacidade permanente.",
    details: ["100% do salário se por acidente de trabalho", "Adicional de 25% se precisar de acompanhante", "Doenças graves dispensam carência", "Perícia judicial analisa com profundidade"] },
  { title: "Aposentadoria Negada", desc: "Recurso contra negativas do INSS.",
    details: ["Retroativo desde a data do pedido original", "Recurso administrativo gratuito (30 dias)", "Perícia judicial é independente", "Erros de cálculo do INSS são comuns"] },
  { title: "Pensão por Morte", desc: "Benefício para dependentes do segurado falecido.",
    details: ["Prazo de 180 dias para garantir retroativo", "Cônjuge 45+ anos = pensão vitalícia", "Filhos até 21 anos (inválidos = vitalícia)", "Pode acumular com aposentadoria própria"] },
  { title: "Auxílio-Doença Negado", desc: "Perícia judicial analisa com mais profundidade que a administrativa.",
    details: ["Retroativo desde a data do pedido", "Não precisa pagar para entrar na Justiça", "Mantenha laudos e receitas atualizados"] },
  { title: "BPC/LOAS", desc: "Um salário mínimo para idosos e PCD em vulnerabilidade.",
    details: ["Sem necessidade de contribuição prévia", "Idosos 65+ ou pessoas com deficiência", "Renda per capita até 1/4 do salário mínimo", "Justiça é mais flexível que o INSS"] },
  { title: "Planejamento Previdenciário", desc: "Análise para escolher a melhor regra de aposentadoria.",
    details: ["7 regras de transição ativas", "Simulação com todas as regras", "Análise do CNIS para corrigir erros", "Tempo especial pode antecipar aposentadoria"] },
];

export default function PrevidenciarioPage() {
  const posts = blogPosts.filter((p) => p.category === "Previdenciário").slice(0, 3);

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ background: "var(--bg-dark)", padding: "80px 24px 72px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span className="eyebrow eyebrow--light" style={{ marginBottom: "20px" }}>Direito Previdenciário</span>
          <h1 style={{ fontSize: "clamp(34px, 4.5vw, 52px)", color: "var(--text-on-dark)", marginTop: "20px", marginBottom: "20px" }}>
            INSS negou seu benefício?<br />
            <span style={{ color: "var(--bg-sand)" }}>Existem caminhos.</span>
          </h1>
          <p style={{ fontSize: "17px", color: "var(--text-on-dark-muted)", maxWidth: "480px", lineHeight: 1.75, marginBottom: "36px" }}>
            Negativa do INSS não é definitiva. Conheça seus direitos e as opções de recurso.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar Consulta</a>
            <a href="#servicos" className="btn-outline" style={{ color: "var(--text-on-dark)", borderColor: "rgba(243,240,232,0.2)" }}>Ver áreas</a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" style={{ padding: "var(--section-py) 24px", background: "var(--bg-body)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <hr className="rule" />
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)" }}>Áreas de atuação em Direito Previdenciário</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "16px" }}>
            {SERVICES.map((svc) => (
              <div key={svc.title} className="card" style={{ padding: "28px 24px" }}>
                <h3 style={{ fontSize: "18px", marginBottom: "8px", fontFamily: "var(--font)" }}>{svc.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.65, marginBottom: "16px" }}>{svc.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
                  {svc.details.map((d) => (
                    <li key={d} style={{ fontSize: "13px", color: "var(--text-body)", display: "flex", gap: "8px", lineHeight: 1.5 }}>
                      <span style={{ color: "var(--accent)", fontWeight: 600, flexShrink: 0 }}>—</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">Fale com a Especialista</a>
          </div>
        </div>
      </section>

      {/* Dados */}
      <section style={{ padding: "var(--section-py) 24px", background: "var(--bg-cream)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <hr className="rule" />
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", marginBottom: "32px" }}>Informações importantes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { n: "180 dias", d: "Prazo para pensão por morte com direito ao retroativo integral." },
              { n: "7 regras", d: "De transição ativas na aposentadoria. A análise técnica é essencial." },
            ].map((item) => (
              <div key={item.n} className="card" style={{ padding: "32px 24px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font)", fontSize: "32px", fontWeight: 700, color: "var(--accent)", marginBottom: "12px" }}>{item.n}</div>
                <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.6 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section style={{ padding: "var(--section-py) 24px", background: "var(--bg-body)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
              <div><hr className="rule" /><h2 style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>Artigos sobre Direito Previdenciário</h2></div>
              <Link href="/blog" className="btn-text">Ver todos →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <article className="card" style={{ padding: "28px 24px", height: "100%" }}>
                    <span className="eyebrow" style={{ marginBottom: "12px" }}>{post.category}</span>
                    <h3 style={{ fontSize: "17px", lineHeight: 1.35, marginTop: "12px", marginBottom: "10px", fontFamily: "var(--font)" }}>{post.title}</h3>
                    <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.6 }}>{post.excerpt}</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: "var(--section-py) 24px", background: "var(--bg-cream)" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <hr className="rule" style={{ margin: "0 auto 20px" }} />
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", marginBottom: "16px" }}>Tire suas dúvidas com uma especialista.</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, marginBottom: "36px", color: "var(--text-body)" }}>
            Consulta inicial gratuita e sem compromisso.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar Consulta</a>
        </div>
      </section>
    </div>
  );
}
