"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts, type BlogPost } from "@/app/content/posts";

const CATEGORIES = ["Todos", "Reformas", "Manutenção", "Construção", "Serviços Técnicos", "Guias"] as const;

export default function BlogIndex() {
  const [active, setActive] = useState<string>("Todos");

  const filtered: BlogPost[] =
    active === "Todos"
      ? blogPosts
      : blogPosts.filter((p) => p.category === active);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        style={{ background: "var(--navy)", color: "var(--white)" }}
        className="section"
      >
        <div className="container" style={{ maxWidth: 800, textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Conhecimento Técnico
          </span>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              marginTop: 16,
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Blog Técnico
          </h1>
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: "1.125rem", maxWidth: 600, margin: "0 auto" }}>
            Artigos, guias e dicas sobre construção civil, reformas e manutenção no
            Rio de Janeiro. Conteúdo técnico para ajudar você a tomar decisões
            informadas sobre sua obra.
          </p>
        </div>
      </section>

      {/* ── Filters ───────────────────────────────────── */}
      <section style={{ background: "var(--concrete)" }} className="section" >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              marginBottom: 48,
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "10px 22px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--border)",
                  background: active === cat ? "var(--accent)" : "var(--white)",
                  color: active === cat ? "var(--white)" : "var(--text-body)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  transition: "all .2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Grid ────────────────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 28,
            }}
          >
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--accent)",
                      marginBottom: 12,
                    }}
                  >
                    {post.category}
                  </span>
                  <h2
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.35,
                      marginBottom: 10,
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                      flex: 1,
                      marginBottom: 16,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span>{post.readTime} de leitura</span>
                    <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                      Ler artigo &rarr;
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--text-muted)", marginTop: 40 }}>
              Nenhum artigo encontrado nesta categoria.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
