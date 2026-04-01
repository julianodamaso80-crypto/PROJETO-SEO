import Link from "next/link";
import { blogPosts } from "@/content/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advogada Trabalhista | Seus Direitos, Sua Defesa",
  description: "Empresa desrespeitou seus direitos? Fale com uma advogada trabalhista especializada.",
};

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

const SERVICES = [
  {
    title: "Acidente de Trabalho",
    desc: "Indenização, estabilidade e benefícios para quem sofreu acidente ou doença no trabalho.",
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
    desc: "Empresa descumpriu o contrato? Você pode sair e receber todos os direitos.",
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
    desc: "Adicional de 30% para quem trabalha com risco.",
    details: [
      "30% sobre o salário base",
      "Eletricistas, vigilantes, motoboys",
      "Inflamáveis, explosivos, radiação",
      "EPI não elimina o adicional de periculosidade",
      "Retroativo de até 5 anos",
    ],
  },
  {
    title: "Insalubridade",
    desc: "Adicional de 10% a 40% para quem trabalha exposto a agentes nocivos à saúde.",
    details: [
      "10% (mínimo), 20% (médio) ou 40% (máximo)",
      "Ruído, calor, frio, químicos, biológicos",
      "EPI ineficaz = adicional continua devido",
      "Perícia judicial comprova as condições",
      "Pode cobrar retroativo na Justiça",
    ],
  },
];

export default function TrabalhistaPage() {
  const posts = blogPosts.filter((p) => p.category === "Trabalhista").slice(0, 3);

  return (
    <div style={{ paddingTop: "72px" }}>

      {/* Hero */}
      <section
        className="hero-bg"
        style={{
          minHeight: "60vh",
          paddingTop: "72px",
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=85')",
        }}
      >
        <div className="container" style={{ padding: "80px 24px" }}>
          <p className="eyebrow eyebrow--light animate-in" style={{ marginBottom: "20px" }}>
            Direito Trabalhista
          </p>
          <h1 className="animate-in delay-1" style={{ color: "var(--text-on-dark)", marginBottom: "20px", maxWidth: "600px" }}>
            Seus direitos trabalhistas{" "}
            <em style={{ color: "var(--bg-sand)" }}>merecem atenção.</em>
          </h1>
          <p className="animate-in delay-2" style={{
            fontSize: "18px",
            color: "var(--text-on-dark-muted)",
            maxWidth: "500px",
            lineHeight: 1.7,
            marginBottom: "36px",
          }}>
            Conheça as situações em que a legislação trabalhista protege o empregado e como uma advogada especialista pode ajudar.
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
            <h2>Como posso te ajudar</h2>
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

      {/* Prazos */}
      <section className="section" style={{ background: "var(--bg-cream)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <hr className="rule rule--center" />
            <h2>Prazos importantes</h2>
            <p style={{ fontSize: "16px", color: "var(--text-body)", marginTop: "12px" }}>
              A legislação trabalhista estabelece prazos para o exercício de direitos.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {[
              { number: "2 anos", label: "Prazo prescricional após o desligamento para ajuizar a reclamação." },
              { number: "5 anos", label: "Período retroativo que pode ser pleiteado na ação judicial." },
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
                <h2>Artigos sobre Direito Trabalhista</h2>
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
