import Link from "next/link";
import type { Metadata } from "next";
import { CLUSTERS, postsDoCluster } from "@/content/clusters";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Temas Jurídicos",
  description: "Todos os assuntos de direito trabalhista e previdenciário do site, organizados por tema.",
  alternates: { canonical: "/temas" },
};

const WA = "https://wa.me/5541998342090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

export default function TemasPage() {
  const areas = ["Trabalhista", "Previdenciário"] as const;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Temas Jurídicos",
    url: `${SITE_URL}/temas`,
    hasPart: CLUSTERS.map((c) => ({
      "@type": "CollectionPage",
      name: c.titulo,
      url: `${SITE_URL}/temas/${c.slug}`,
    })),
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={{ background: "var(--bg-dark)", padding: "80px 24px 72px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span className="eyebrow eyebrow--light">Temas</span>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--text-on-dark)", marginTop: "20px", lineHeight: 1.15 }}>
            Todos os assuntos,<br />organizados por tema.
          </h1>
          <p style={{ fontSize: "17px", color: "var(--text-on-dark-muted)", lineHeight: 1.8, marginTop: "24px" }}>
            Reunimos os artigos do site em {CLUSTERS.length} temas de direito trabalhista e
            previdenciário. Escolha o assunto que corresponde à sua situação.
          </p>
        </div>
      </section>

      {areas.map((area) => (
        <section key={area} style={{ padding: "64px 24px", background: area === "Trabalhista" ? "var(--bg-body)" : "var(--bg-light)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <hr className="rule" style={{ margin: "0 auto 24px" }} />
            <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", marginBottom: "40px", textAlign: "center" }}>
              Direito {area}
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
              {CLUSTERS.filter((c) => c.area === area).map((c) => {
                const total = postsDoCluster(c.slug).length;
                return (
                  <Link key={c.slug} href={`/temas/${c.slug}`} style={{ textDecoration: "none" }}>
                    <article className="card" style={{ padding: "24px", height: "100%", textAlign: "left" }}>
                      <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>{c.nome}</h3>
                      <p style={{ fontSize: "15px", color: "var(--text-body)", lineHeight: 1.6, marginBottom: "12px" }}>
                        {c.descricao}
                      </p>
                      <span className="btn-text">{total} {total === 1 ? "artigo" : "artigos"} →</span>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section style={{ padding: "64px 24px", background: "var(--bg-body)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <hr className="rule" style={{ margin: "0 auto 24px" }} />
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", marginBottom: "20px" }}>
            Não encontrou sua situação?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.8, marginBottom: "32px", color: "var(--text-body)" }}>
            Cada caso tem particularidades que um artigo não alcança. Conte o que aconteceu
            e receba uma orientação sobre os seus direitos.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">Falar com Advogado</a>
        </div>
      </section>
    </div>
  );
}
