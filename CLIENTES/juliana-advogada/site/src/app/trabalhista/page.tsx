import Link from "next/link";
import { blogPosts } from "@/content/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advogada Trabalhista | Seus Direitos, Sua Defesa",
  description: "Empresa desrespeitou seus direitos? Cada dia sem ação reduz suas chances de indenização. Fale com uma trabalhista especializada agora.",
};

const SERVICES = [
  {
    title: "Acidente de Trabalho",
    desc: "Estabilidade de 12 meses, indenização de R$15 mil a R$200 mil, pensão vitalícia. A empresa responde se foi negligente.",
    icon: "🏥",
  },
  {
    title: "Vínculo Empregatício",
    desc: "Trabalhou sem carteira? A empresa deve FGTS, INSS, férias, 13º — tudo retroativo. Prints de WhatsApp são prova.",
    icon: "📋",
  },
  {
    title: "Horas Extras",
    desc: "2h extras/dia com salário de R$2.500 valem R$51 mil em 5 anos. Banco de horas informal é nulo.",
    icon: "⏰",
  },
  {
    title: "Rescisão Indireta",
    desc: "Empresa atrasa salário ou pratica assédio? Você pode sair com todos os direitos da demissão sem justa causa.",
    icon: "🚪",
  },
  {
    title: "Periculosidade",
    desc: "30% sobre o salário base para quem trabalha com eletricidade, inflamáveis, explosivos ou segurança.",
    icon: "⚡",
  },
  {
    title: "Insalubridade",
    desc: "10% a 40% sobre o salário mínimo para exposição a ruído, calor, frio, produtos químicos ou agentes biológicos.",
    icon: "🧪",
  },
];

export default function TrabalhistaPage() {
  const posts = blogPosts.filter((p) => p.category === "Trabalhista").slice(0, 3);

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0", right: "0", width: "400px", height: "400px", borderRadius: "50%", background: "var(--color-gold)", opacity: 0.03, filter: "blur(120px)" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div className="section-divider" style={{ marginBottom: "16px" }} />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px" }}>
            Seus Direitos Trabalhistas Foram Violados?{" "}
            <span className="text-gold-gradient">Descubra Como Reagir</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: "640px", marginBottom: "32px" }}>
            Um trabalhador brasileiro perde, em média, R$47 mil em direitos não cobrados ao longo da carreira.
            A maioria nem desconfia. Você não precisa ser um deles.
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
            Como posso te <span className="text-gold-gradient">ajudar</span>
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

      {/* Prazos */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, marginBottom: "16px" }}>
            O relógio está <span className="text-gold-gradient">correndo</span>
          </h2>
          <p style={{ fontSize: "16px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "40px" }}>
            Você tem <strong style={{ color: "var(--color-gold)" }}>2 anos</strong> após sair da empresa para entrar com ação trabalhista.
            A ação cobre os <strong style={{ color: "var(--color-gold)" }}>últimos 5 anos</strong> de direitos não pagos.
            Cada mês que passa é um mês de direitos que prescreve.
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

      {/* Blog relacionado */}
      {posts.length > 0 && (
        <section style={{ padding: "64px 24px", background: "var(--color-navy-light)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, marginBottom: "32px" }}>
              Artigos sobre Direito Trabalhista
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
