import Link from "next/link";
import { blogPosts } from "@/content/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Jurídico | Direito Trabalhista e Previdenciário",
  description: "Artigos sobre direitos trabalhistas e previdenciários. Informação prática para proteger o que é seu.",
};

export default function BlogPage() {
  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ padding: "64px 24px", background: "var(--color-navy-light)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-divider" style={{ marginBottom: "16px" }} />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800 }}>
            Blog <span className="text-gold-gradient">Jurídico</span>
          </h1>
          <p style={{ fontSize: "17px", color: "var(--color-text-secondary)", marginTop: "12px", maxWidth: "560px" }}>
            Conteúdo prático sobre seus direitos trabalhistas e previdenciários. Sem juridiquês, com dados concretos.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article
                  className="glass"
                  style={{
                    padding: "32px",
                    height: "100%",
                    transition: "border-color 0.3s, transform 0.2s",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
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
                    <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>{post.readTime}</span>
                  </div>

                  <h2 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    lineHeight: 1.4,
                    marginBottom: "12px",
                    flex: 1,
                  }}>
                    {post.title}
                  </h2>

                  <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
                    {post.excerpt}
                  </p>

                  <div style={{ fontSize: "13px", color: "var(--color-gold)", fontWeight: 500 }}>
                    Ler artigo completo →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
