import { blogPosts } from "@/content/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

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
      <section style={{ padding: "64px 24px 40px", background: "var(--color-navy-light)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <Link href="/blog" style={{ fontSize: "13px", color: "var(--color-text-muted)", textDecoration: "none" }}>Blog</Link>
            <span style={{ color: "var(--color-text-muted)" }}>›</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: post.category === "Trabalhista" ? "var(--color-gold)" : "#60a5fa",
                letterSpacing: "1px",
                textTransform: "uppercase",
                padding: "4px 10px",
                borderRadius: "4px",
                background: post.category === "Trabalhista" ? "var(--color-gold-dim)" : "rgba(96,165,250,0.1)",
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
          }}>
            {post.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "13px", color: "var(--color-text-muted)" }}>
            <span>Dra. Juliana Darin da Cunha</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>•</span>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </section>

      {/* Article Body (placeholder - content would be loaded from MD files in production) */}
      <section style={{ padding: "48px 24px 80px" }}>
        <div className="blog-content" style={{ maxWidth: "780px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
            {post.excerpt}
          </p>

          <div className="glass-gold" style={{ padding: "24px 28px", margin: "32px 0" }}>
            <p style={{ fontSize: "15px", color: "var(--color-gold-light)", fontWeight: 500, margin: 0 }}>
              📞 Precisa de orientação sobre este tema? A Dra. Juliana oferece consulta inicial gratuita.{" "}
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>
                Fale agora pelo WhatsApp.
              </a>
            </p>
          </div>

          <p style={{ color: "var(--color-text-muted)", fontStyle: "italic", fontSize: "14px" }}>
            O conteúdo completo deste artigo será carregado dos arquivos markdown em produção. Este é o layout de visualização.
          </p>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section style={{ padding: "64px 24px", background: "var(--color-navy-light)", borderTop: "1px solid var(--color-border)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, marginBottom: "32px" }}>
              Artigos relacionados
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: "none" }}>
                  <div className="glass" style={{ padding: "24px" }}>
                    <div style={{ fontSize: "11px", color: "var(--color-gold)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px" }}>
                      {r.category}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, color: "var(--color-text-primary)", lineHeight: 1.4 }}>
                      {r.title}
                    </h3>
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
