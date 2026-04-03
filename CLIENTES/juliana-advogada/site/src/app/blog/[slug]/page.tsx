import { blogPosts } from "@/content/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

const WA = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.metaTitle, description: post.metaDescription };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <div style={{ paddingTop: "72px" }}>

      {/* Header */}
      <section style={{ padding: "64px 24px 40px", background: "var(--bg-cream)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container--narrow">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <Link href="/blog" style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none" }}>Blog</Link>
            <span style={{ color: "var(--text-muted)", fontSize: "12px" }}>›</span>
            <span className="eyebrow">{post.category}</span>
          </div>

          <h1 style={{ marginBottom: "20px", lineHeight: 1.2 }}>
            {post.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "13px", color: "var(--text-muted)", flexWrap: "wrap" }}>
            <span>DDC LAW</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>·</span>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </section>

      {/* Imagem destaque */}
      {post.image && (
        <section style={{ padding: "0 24px" }}>
          <div className="container--narrow" style={{ marginTop: "-20px" }}>
            <img
              src={post.image}
              alt={post.title}
              className="blog-post-image"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "420px",
                objectFit: "cover",
                borderRadius: "var(--radius-lg, 8px)",
                display: "block",
              }}
              loading="eager"
            />
          </div>
        </section>
      )}

      {/* Artigo */}
      <section style={{ padding: "48px 24px 40px" }}>
        <div className="blog-content container--narrow">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 24px 64px" }}>
        <div className="container--narrow">
          <div style={{
            background: "var(--bg-dark)",
            borderRadius: "var(--radius-lg)",
            padding: "40px 32px",
            textAlign: "center",
          }}>
            <h2 style={{ fontSize: "22px", color: "var(--text-on-dark)", marginBottom: "12px" }}>
              Precisa de orientação sobre {post.category === "Trabalhista" ? "direitos trabalhistas" : "benefícios do INSS"}?
            </h2>
            <p style={{ color: "var(--text-on-dark-muted)", fontSize: "15px", marginBottom: "24px", lineHeight: 1.6, maxWidth: "400px", margin: "0 auto 24px" }}>
              Consulta inicial gratuita. Tire suas dúvidas sem compromisso.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      {/* Relacionados */}
      {related.length > 0 && (
        <section style={{ padding: "64px 24px", background: "var(--bg-cream)", borderTop: "1px solid var(--border-light)" }}>
          <div className="container">
            <h2 style={{ fontSize: "24px", marginBottom: "32px" }}>Artigos relacionados</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ padding: "24px", height: "100%" }}>
                    <span className="eyebrow" style={{ marginBottom: "10px", display: "block" }}>{r.category}</span>
                    <h3 style={{ fontSize: "16px", lineHeight: 1.35, marginBottom: "8px" }}>{r.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--text-body)", lineHeight: 1.55 }}>
                      {r.excerpt.substring(0, 120)}...
                    </p>
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
