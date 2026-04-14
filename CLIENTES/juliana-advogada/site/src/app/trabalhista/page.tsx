import Link from "next/link";
import { blogPosts } from "@/content/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advogada Trabalhista | DDC LAW",
  description: "Empresa desrespeitou seus direitos? Fale com uma advogada trabalhista especializada.",
};

const WA = "https://wa.me/5541998342090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

const SERVICES = [
  { title: "Acidente de Trabalho", desc: "Estabilidade, indenização e benefícios para quem sofreu acidente ou doença ocupacional.",
    details: ["Estabilidade de 12 meses após alta do INSS", "Possibilidade de indenização por danos morais e materiais", "Empresa obrigada a emitir CAT em 24 horas", "FGTS depositado durante afastamento", "Possibilidade de pensão por redução de capacidade"] },
  { title: "Vínculo Empregatício", desc: "Reconhecimento judicial do vínculo e todos os direitos retroativos.",
    details: ["FGTS + multa 40% de todo o período", "INSS retroativo", "Férias + 1/3 e 13º de todos os anos", "Seguro-desemprego", "WhatsApp e PIX são provas válidas"] },
  { title: "Horas Extras", desc: "Cobrança judicial com retroativo de até 5 anos.",
    details: ["Reflexos em férias, 13º e FGTS", "Banco de horas informal é nulo", "E-mails fora do horário contam como prova", "Cargo de confiança falso não elimina o direito"] },
  { title: "Rescisão Indireta", desc: "Quando a empresa descumpre o contrato, você sai com todos os direitos.",
    details: ["Recebe como demissão sem justa causa", "FGTS + multa 40% + seguro-desemprego", "Atraso de salário configura falta grave", "Assédio moral gera indenização adicional"] },
  { title: "Periculosidade", desc: "Adicional de 30% para quem trabalha em condições de risco.",
    details: ["30% sobre o salário base", "Eletricistas, vigilantes, motoboys", "EPI não elimina o adicional", "Retroativo de até 5 anos"] },
  { title: "Insalubridade", desc: "Adicional de 10% a 40% para exposição a agentes nocivos.",
    details: ["10% (mínimo), 20% (médio) ou 40% (máximo)", "Ruído, calor, frio, químicos, biológicos", "Perícia judicial comprova as condições", "Retroativo na Justiça"] },
];

export default function TrabalhistaPage() {
  const posts = blogPosts.filter((p) => p.category === "Trabalhista").slice(0, 3);

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ background: "var(--bg-dark)", padding: "80px 24px 72px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow eyebrow--light" style={{ marginBottom: "20px" }}>Direito Trabalhista</span>
          <h1 style={{ fontSize: "clamp(34px, 4.5vw, 52px)", color: "var(--text-on-dark)", marginTop: "20px", marginBottom: "20px" }}>
            Seus direitos trabalhistas<br />
            <span style={{ color: "var(--bg-sand)" }}>merecem atenção.</span>
          </h1>
          <p style={{ fontSize: "17px", color: "var(--text-on-dark-muted)", maxWidth: "480px", lineHeight: 1.75, marginBottom: "36px", margin: "0 auto 36px" }}>
            Conheça as situações em que a legislação trabalhista protege o empregado e como uma advogada especialista pode ajudar.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">Quero Saber Meus Direitos Agora</a>
            <a href="#servicos" className="btn-outline" style={{ color: "var(--text-on-dark)", borderColor: "rgba(243,240,232,0.2)" }}>Ver áreas</a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" style={{ padding: "var(--section-py) 24px", background: "var(--bg-body)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px", textAlign: "center" }}>
            <hr className="rule" style={{ margin: "0 auto 24px" }} />
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)" }}>Como posso te ajudar</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "16px" }}>
            {SERVICES.map((svc) => (
              <div key={svc.title} className="card" style={{ padding: "28px 24px" }}>
                <h3 style={{ fontSize: "18px", marginBottom: "8px", fontFamily: "var(--font)" }}>{svc.title}</h3>
                <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.65, marginBottom: "16px" }}>{svc.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
                  {svc.details.map((d) => (
                    <li key={d} style={{ fontSize: "15px", color: "var(--text-body)", display: "flex", gap: "8px", lineHeight: 1.5 }}>
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

      {/* Prazos */}
      <section style={{ padding: "var(--section-py) 24px", background: "var(--bg-cream)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <hr className="rule" style={{ margin: "0 auto 24px" }} />
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", marginBottom: "32px" }}>Prazos importantes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { n: "2 anos", d: "Prazo prescricional após o desligamento para ajuizar reclamação trabalhista." },
              { n: "5 anos", d: "Período retroativo que pode ser pleiteado na ação judicial." },
            ].map((item) => (
              <div key={item.n} className="card" style={{ padding: "32px 24px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font)", fontSize: "32px", fontWeight: 700, color: "var(--accent)", marginBottom: "12px" }}>{item.n}</div>
                <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.6 }}>{item.d}</p>
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
              <div style={{ textAlign: "center" }}><hr className="rule" style={{ margin: "0 auto 24px" }} /><h2 style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>Artigos sobre Direito Trabalhista</h2></div>
              <Link href="/blog" className="btn-text">Ver todos →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <article className="card" style={{ padding: "28px 24px", height: "100%" }}>
                    <span className="eyebrow" style={{ marginBottom: "12px" }}>{post.category}</span>
                    <h3 style={{ fontSize: "17px", lineHeight: 1.35, marginTop: "12px", marginBottom: "10px", fontFamily: "var(--font)" }}>{post.title}</h3>
                    <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.6 }}>{post.excerpt}</p>
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
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">Quero Saber Meus Direitos Agora</a>
        </div>
      </section>
    </div>
  );
}
