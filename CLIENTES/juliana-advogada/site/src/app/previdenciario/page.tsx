import Link from "next/link";
import { blogPosts } from "@/content/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advogada Previdenciária | INSS Negou? Lute Pelos Seus Direitos",
  description: "Benefício negado pelo INSS? 41% das decisões são revertidas na Justiça. Não aceite o 'não' — fale com uma previdenciária agora.",
};

const SERVICES = [
  { title: "Auxílio-Acidente", desc: "50% do salário de benefício pago JUNTO com o salário. Para quem ficou com sequela de acidente.", icon: "🩹" },
  { title: "Aposentadoria por Invalidez", desc: "Renda para quem não consegue mais trabalhar. O valor depende da causa e do tempo de contribuição.", icon: "🏠" },
  { title: "Aposentadoria Negada", desc: "41% das negativas do INSS são revertidas na Justiça. Recurso ou ação judicial com retroativo.", icon: "❌" },
  { title: "Pensão por Morte", desc: "Proteção para dependentes do segurado falecido. Prazo de 180 dias afeta o valor retroativo.", icon: "🖤" },
  { title: "Auxílio-Doença Negado", desc: "Perícia do INSS durou 15 minutos? Perícia judicial é mais detalhada e independente.", icon: "📋" },
  { title: "BPC/LOAS", desc: "R$1.518/mês para idosos 65+ e deficientes em baixa renda. Sem contribuição. 47% dos pedidos são negados.", icon: "🤝" },
  { title: "Planejamento Previdenciário", desc: "7 regras de transição ativas. A escolha errada pode custar R$100 mil ao longo da aposentadoria.", icon: "📊" },
];

export default function PrevidenciarioPage() {
  const posts = blogPosts.filter((p) => p.category === "Previdenciário").slice(0, 3);

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0", left: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "#3b82f6", opacity: 0.03, filter: "blur(120px)" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div className="section-divider" style={{ marginBottom: "16px" }} />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px" }}>
            INSS Negou Seu Benefício?{" "}
            <span className="text-gold-gradient">41% São Revertidos na Justiça</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: "640px", marginBottom: "32px" }}>
            Você contribuiu por anos. Quando mais precisou, recebeu um &quot;indeferido&quot;. O INSS erra — e conta com o fato
            de que a maioria das pessoas não vai recorrer. Não seja a maioria.
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "16px 36px", background: "var(--color-gold)", color: "var(--color-navy)",
              borderRadius: "10px", fontSize: "15px", fontWeight: 700, textDecoration: "none",
              boxShadow: "0 0 30px var(--color-gold-glow)",
            }}
          >
            Analisar Meu Caso Gratuitamente →
          </a>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "80px 24px", background: "var(--color-navy-light)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, marginBottom: "48px", textAlign: "center" }}>
            Benefícios que a Dra. Juliana pode <span className="text-gold-gradient">conquistar para você</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px" }}>
            {SERVICES.map((svc) => (
              <div key={svc.title} className="glass" style={{ padding: "32px" }}>
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{svc.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>{svc.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, marginBottom: "16px" }}>
            O INSS disse <span className="text-gold-gradient">não</span>. A Justiça pode dizer <span className="text-gold-gradient">sim</span>.
          </h2>
          <p style={{ fontSize: "16px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "40px" }}>
            Cada mês sem recorrer é um mês de benefício perdido. O retroativo pode significar
            dezenas de milhares de reais.
          </p>
          <a
            href="https://wa.me/5500000000000"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "18px 40px", background: "var(--color-gold)", color: "var(--color-navy)",
              borderRadius: "10px", fontSize: "16px", fontWeight: 700, textDecoration: "none",
              boxShadow: "0 0 40px var(--color-gold-glow)",
            }}
          >
            Fale Com a Dra. Juliana Agora
          </a>
        </div>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section style={{ padding: "64px 24px", background: "var(--color-navy-light)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, marginBottom: "32px" }}>
              Artigos sobre Direito Previdenciário
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              {posts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                  <div className="glass" style={{ padding: "24px" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, color: "var(--color-text-primary)", lineHeight: 1.4, marginBottom: "8px" }}>
                      {p.title}
                    </h3>
                    <span style={{ fontSize: "13px", color: "var(--color-gold)" }}>Ler artigo →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
