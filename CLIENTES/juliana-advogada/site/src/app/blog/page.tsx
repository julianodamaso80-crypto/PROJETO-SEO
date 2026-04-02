import Link from "next/link";
import { blogPosts } from "@/content/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Jurídico | Direito Trabalhista e Previdenciário",
  description: "Artigos sobre direitos trabalhistas e previdenciários. Informação prática para proteger o que é seu.",
};

export default function BlogPage() {
  return (
    <div style={{ paddingTop: "72px" }}>

      {/* Header */}
      <section style={{ padding: "64px 24px", background: "var(--bg-cream)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <hr className="rule" style={{ margin: "0 auto 24px" }} />
          <p className="eyebrow" style={{ marginBottom: "12px" }}>Blog</p>
          <h1>Conteúdo Jurídico</h1>
          <p style={{ fontSize: "17px", color: "var(--text-body)", marginTop: "12px", maxWidth: "520px", margin: "12px auto 0" }}>
            Artigos sobre seus direitos trabalhistas e previdenciários. Informação prática, sem juridiquês.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section" style={{ background: "var(--bg-body)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ padding: "28px 24px", flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                      <span className="eyebrow">{post.category}</span>
                      <span style={{ fontSize: "16px", color: "var(--text-muted)" }}>{post.readTime}</span>
                    </div>
                    <h2 style={{ fontSize: "18px", lineHeight: 1.35, marginBottom: "12px" }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: "16px", color: "var(--text-body)", lineHeight: 1.6 }}>
                      {post.excerpt}
                    </p>
                  </div>
                  <div style={{ padding: "0 24px 24px" }}>
                    <span className="btn-text">Ler artigo →</span>
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
