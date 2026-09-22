import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CLUSTERS, clusterPorSlug, postsDoCluster } from "@/content/clusters";
import { SITE_URL, ORG } from "@/lib/site";

const WA = "https://wa.me/5541998342090?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

export function generateStaticParams() {
  return CLUSTERS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cluster = clusterPorSlug(slug);
  if (!cluster) return {};
  return {
    title: cluster.titulo,
    description: cluster.descricao,
    alternates: { canonical: `/temas/${cluster.slug}` },
    openGraph: {
      type: "website",
      url: `/temas/${cluster.slug}`,
      title: cluster.titulo,
      description: cluster.descricao,
    },
  };
}

export default async function TemaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cluster = clusterPorSlug(slug);
  if (!cluster) notFound();

  const posts = postsDoCluster(cluster.slug);
  const paginaServico = cluster.area === "Trabalhista" ? "/trabalhista" : "/previdenciario";

  // FAQPage alimenta os resultados em destaque do Google e as respostas
  // dos buscadores com IA, que citam a fonte da resposta direta.
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: cluster.faq.map((f) => ({
          "@type": "Question",
          name: f.pergunta,
          acceptedAnswer: { "@type": "Answer", text: f.resposta },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Temas", item: `${SITE_URL}/temas` },
          { "@type": "ListItem", position: 3, name: cluster.nome },
        ],
      },
      {
        "@type": "CollectionPage",
        name: cluster.titulo,
        description: cluster.descricao,
        url: `${SITE_URL}/temas/${cluster.slug}`,
        about: { "@type": "Thing", name: `Direito ${cluster.area}` },
        provider: { "@id": `${SITE_URL}/#escritorio` },
      },
    ],
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Cabeçalho */}
      <section style={{ background: "var(--bg-dark)", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px", fontSize: "13px" }}>
            <Link href="/temas" style={{ color: "var(--text-on-dark-muted)", textDecoration: "none" }}>Temas</Link>
            <span style={{ color: "var(--text-on-dark-muted)" }}>›</span>
            <span className="eyebrow eyebrow--light">Direito {cluster.area}</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 3.6vw, 42px)", color: "var(--text-on-dark)", lineHeight: 1.2 }}>
            {cluster.titulo}
          </h1>
        </div>
      </section>

      {/* Introdução */}
      <section style={{ padding: "56px 24px", background: "var(--bg-body)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "left" }}>
          {cluster.intro.map((p) => (
            <p key={p.slice(0, 24)} style={{ fontSize: "17px", lineHeight: 1.9, marginBottom: "20px" }}>{p}</p>
          ))}
          <div style={{ marginTop: "28px", display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">Falar com Advogado</a>
            <Link href={paginaServico} className="btn-text">Ver atuação em Direito {cluster.area} →</Link>
          </div>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section style={{ padding: "56px 24px", background: "var(--bg-light)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "left" }}>
          <hr className="rule" style={{ marginBottom: "24px" }} />
          <h2 style={{ fontSize: "clamp(24px, 3vw, 30px)", marginBottom: "32px" }}>Perguntas frequentes</h2>
          {cluster.faq.map((f) => (
            <div key={f.pergunta} style={{ marginBottom: "28px", paddingBottom: "28px", borderBottom: "1px solid var(--border-light)" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>{f.pergunta}</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--text-body)" }}>{f.resposta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Artigos do tema */}
      <section style={{ padding: "56px 24px", background: "var(--bg-body)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <hr className="rule" style={{ margin: "0 auto 24px" }} />
          <h2 style={{ fontSize: "clamp(24px, 3vw, 30px)", marginBottom: "12px", textAlign: "center" }}>
            {posts.length} {posts.length === 1 ? "artigo sobre" : "artigos sobre"} {cluster.nome.toLowerCase()}
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-body)", marginBottom: "40px", textAlign: "center" }}>
            Atendimento presencial em {ORG.city}/{ORG.state} e online para todo o Brasil.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article className="card" style={{ padding: "24px", height: "100%", textAlign: "left" }}>
                  <h3 style={{ fontSize: "17px", lineHeight: 1.4, fontWeight: 700, marginBottom: "10px" }}>{post.title}</h3>
                  <p style={{ fontSize: "15px", color: "var(--text-body)", lineHeight: 1.6 }}>{post.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Outros temas */}
      <section style={{ padding: "56px 24px", background: "var(--bg-light)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "24px" }}>Outros temas de Direito {cluster.area}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {CLUSTERS.filter((c) => c.area === cluster.area && c.slug !== cluster.slug).map((c) => (
              <Link key={c.slug} href={`/temas/${c.slug}`} style={{
                fontSize: "14px", padding: "10px 18px", borderRadius: "99px",
                border: "1px solid var(--border)", color: "var(--text-body)", textDecoration: "none",
              }}>
                {c.nome}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
