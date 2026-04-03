import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/app/content/posts";

/* ── Static params ──────────────────────────────────── */
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

/* ── Metadata ───────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post não encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

/* ── Page ────────────────────────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>Post não encontrado</h1>
          <Link href="/blog" className="btn-primary" style={{ marginTop: 24, display: "inline-flex" }}>
            Voltar ao blog
          </Link>
        </div>
      </section>
    );
  }

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const formattedDate = new Date(post.date + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        style={{ background: "var(--navy)", color: "var(--white)" }}
        className="section"
      >
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--accent)",
              background: "rgba(232,113,43,.12)",
              padding: "6px 16px",
              borderRadius: "var(--radius-full)",
              marginBottom: 20,
            }}
          >
            {post.category}
          </span>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            {post.title}
          </h1>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: "0.9375rem" }}>
            {formattedDate} &middot; {post.readTime} de leitura
          </p>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────── */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div
          className="container blog-content"
          style={{ maxWidth: 720 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section
        style={{
          background: "var(--concrete)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
        className="section"
      >
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 12,
            }}
          >
            Precisa de ajuda profissional?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: 24, maxWidth: 520, margin: "0 auto 24px" }}>
            A WSSJ Engenharia conta com equipe técnica qualificada e engenheiro
            responsável. Solicite um orçamento sem compromisso pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/5521999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar com especialista
          </a>
        </div>
      </section>

      {/* ── Related posts ─────────────────────────────── */}
      {related.length > 0 && (
        <section className="section" style={{ background: "var(--white)" }}>
          <div className="container">
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 32,
                textAlign: "center",
              }}
            >
              Artigos Relacionados
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 24,
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <article className="card" style={{ height: "100%" }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        marginBottom: 8,
                        display: "block",
                      }}
                    >
                      {r.category}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.35,
                        marginBottom: 8,
                      }}
                    >
                      {r.title}
                    </h3>
                    <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.875rem" }}>
                      Ler artigo &rarr;
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
