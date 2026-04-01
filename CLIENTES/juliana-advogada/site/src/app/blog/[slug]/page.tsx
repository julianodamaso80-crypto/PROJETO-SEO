import { blogPosts } from "@/content/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

const WA_LINK = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20uma%20consulta%20gratuita";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh" }}>
      {/* Article Header */}
      <section style={{ padding: "64px 24px 40px", background: "var(--bg-cream)", borderBottom: "1px solid rgba(107,103,81,0.1)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <Link href="/blog" style={{ fontSize: "13px", color: "var(--text-secondary)", textDecoration: "none" }}>Blog</Link>
            <span style={{ color: "var(--text-secondary)" }}>›</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: post.category === "Trabalhista" ? "var(--bg-terra)" : "var(--bg-blue)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                padding: "4px 10px",
                borderRadius: "4px",
                background: post.category === "Trabalhista" ? "rgba(117,68,55,0.1)" : "rgba(40,55,74,0.1)",
              }}
            >
              {post.category}
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "20px",
            color: "var(--bg-blue)",
          }}>
            {post.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "13px", color: "var(--text-secondary)", flexWrap: "wrap" }}>
            <span>DD Claw</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>•</span>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ padding: "48px 24px 40px" }}>
        <div className="blog-content" style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </section>

      {/* CTA Box */}
      <section style={{ padding: "0 24px 64px" }}>
        <div style={{
          maxWidth: "780px",
          margin: "0 auto",
          background: "var(--bg-terra)",
          borderRadius: "16px",
          padding: "40px 32px",
          textAlign: "center",
        }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "24px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "12px",
          }}>
            Precisa de orientação sobre {post.category === "Trabalhista" ? "direitos trabalhistas" : "benefícios do INSS"}?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", marginBottom: "24px", lineHeight: 1.6 }}>
            A DD Claw oferece consulta inicial gratuita. Tire suas dúvidas sem compromisso.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#25D366",
              color: "#fff",
              fontWeight: 700,
              fontSize: "16px",
              padding: "16px 40px",
              borderRadius: "50px",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
            }}
          >
            Falar Agora pelo WhatsApp — É Gratuito
          </a>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section style={{ padding: "64px 24px", background: "var(--bg-cream)", borderTop: "1px solid rgba(107,103,81,0.1)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              fontWeight: 700,
              marginBottom: "32px",
              color: "var(--bg-blue)",
            }}>
              Artigos relacionados
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "24px",
                    border: "1px solid rgba(107,103,81,0.1)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    height: "100%",
                  }}>
                    <div style={{
                      fontSize: "11px",
                      color: r.category === "Trabalhista" ? "var(--bg-terra)" : "var(--bg-blue)",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      marginBottom: "10px",
                    }}>
                      {r.category}
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--bg-blue)",
                      lineHeight: 1.4,
                      marginBottom: "8px",
                    }}>
                      {r.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      {r.excerpt.substring(0, 100)}...
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
