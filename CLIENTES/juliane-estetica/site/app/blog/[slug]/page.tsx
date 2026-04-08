import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/app/content/posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post não encontrado" };

  return {
    title: `${post.title} | JS Estética Avançada`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 800, height: 500 }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen" style={{ background: "var(--white)" }}>
      {/* Hero */}
      <section
        className="relative px-4 py-16 sm:py-24"
        style={{
          background:
            "linear-gradient(135deg, var(--dark) 0%, #2a2220 50%, var(--rose-hover) 100%)",
          paddingTop: "calc(var(--header-h) + 64px)",
        }}
      >
        <div className="relative mx-auto max-w-3xl text-center">
          <span
            className="inline-block rounded-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{ background: "var(--rose)", color: "var(--white)" }}
          >
            {post.category}
          </span>
          <h1
            className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              color: "var(--white)",
            }}
          >
            {post.title}
          </h1>
          <div
            className="mt-6 flex items-center justify-center gap-4 text-sm"
            style={{ color: "var(--pink)" }}
          >
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span
              className="h-1 w-1 rounded-full"
              style={{ background: "var(--gold)" }}
            />
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="mx-auto -mt-8 max-w-4xl px-4">
        <div
          className="relative aspect-[2/1] overflow-hidden"
          style={{
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-[720px] px-4 py-12 sm:py-16">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Bottom CTA */}
      <section
        className="px-4 py-16 text-center"
        style={{ background: "var(--rose)" }}
      >
        <div className="mx-auto max-w-2xl">
          <h2
            className="text-3xl font-bold"
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              color: "var(--white)",
            }}
          >
            Agende Sua Avaliação Gratuita
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--pink)" }}>
            Biomédica esteta Juliane Elaine (CRBM 05033 RJ) — Barra da Tijuca e
            Bangu, Rio de Janeiro.
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-block rounded-md px-8 py-3.5 text-sm font-semibold transition-all no-underline"
            style={{
              background: "var(--white)",
              color: "var(--rose)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            Agendar Agora
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-4 py-16" style={{ background: "var(--surface)" }}>
          <div className="mx-auto max-w-6xl">
            <h2
              className="text-center text-2xl font-bold"
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                color: "var(--text-primary)",
              }}
            >
              Artigos Relacionados
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block no-underline"
                >
                  <article className="card-hover overflow-hidden rounded-xl bg-white border border-border">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span
                        className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm"
                        style={{
                          background: "rgba(255,255,255,0.9)",
                          color: "var(--text-body)",
                        }}
                      >
                        {related.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3
                        className="text-lg font-semibold leading-snug transition-colors line-clamp-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {related.title}
                      </h3>
                      <p
                        className="mt-2 text-sm leading-relaxed line-clamp-2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {related.excerpt}
                      </p>
                      <div
                        className="mt-4 flex items-center justify-between text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <time dateTime={related.date}>
                          {new Date(related.date).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </time>
                        <span>{related.readTime} de leitura</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog */}
      <div className="pb-12 text-center" style={{ background: "var(--surface)" }}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors no-underline"
          style={{ color: "var(--rose)" }}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Voltar para o Blog
        </Link>
      </div>
    </main>
  );
}
