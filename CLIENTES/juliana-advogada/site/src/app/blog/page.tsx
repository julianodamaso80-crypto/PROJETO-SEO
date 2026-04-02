"use client";

import Link from "next/link";
import { blogPosts } from "@/content/posts";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const categories = ["Todos", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [active, setActive] = useState("Todos");
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const filtered = active === "Todos" ? blogPosts : blogPosts.filter((p) => p.category === active);

  useEffect(() => {
    if (!headerRef.current) return;
    const els = headerRef.current.children;
    gsap.fromTo(els, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out" });
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;
    gsap.fromTo(cards, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" });
  }, [active]);

  return (
    <div style={{ paddingTop: "80px" }}>

      {/* Hero header */}
      <section style={{
        padding: "80px 24px 60px",
        background: "var(--navy)",
        textAlign: "center",
      }}>
        <div ref={headerRef} style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div style={{
            width: "48px", height: "2px", background: "var(--blue)",
            margin: "0 auto 24px",
          }} />
          <p style={{
            fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "rgba(230,230,230,0.5)",
            marginBottom: "16px",
          }}>
            Blog Jurídico
          </p>
          <h1 style={{
            fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700,
            color: "var(--grey)", lineHeight: 1.1, marginBottom: "20px",
          }}>
            Conteúdo Jurídico<br />Especializado
          </h1>
          <p style={{
            fontSize: "17px", color: "rgba(230,230,230,0.6)",
            lineHeight: 1.75, maxWidth: "480px", margin: "0 auto",
          }}>
            Artigos técnicos sobre seus direitos trabalhistas e previdenciários.
            Informação prática, atualizada e sem juridiquês.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section style={{
        background: "var(--navy)",
        borderTop: "1px solid rgba(230,230,230,0.06)",
        padding: "0 24px 48px",
      }}>
        <div style={{
          display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap",
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "10px 28px",
                fontSize: "12px", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                border: active === cat ? "1.5px solid var(--blue)" : "1.5px solid rgba(230,230,230,0.12)",
                background: active === cat ? "var(--blue)" : "transparent",
                color: active === cat ? "var(--grey)" : "rgba(230,230,230,0.5)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                fontFamily: "var(--font)",
              }}
              onMouseEnter={(e) => {
                if (active !== cat) e.currentTarget.style.borderColor = "rgba(230,230,230,0.3)";
              }}
              onMouseLeave={(e) => {
                if (active !== cat) e.currentTarget.style.borderColor = "rgba(230,230,230,0.12)";
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ padding: "80px 24px", background: "var(--bg-body)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Featured post — primeiro */}
          {filtered.length > 0 && (
            <Link href={`/blog/${filtered[0].slug}`} style={{ textDecoration: "none", display: "block", marginBottom: "48px" }}>
              <article className="blog-featured" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                background: "var(--navy)",
                overflow: "hidden",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
                cursor: "pointer",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{
                  padding: "48px 40px",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                }}>
                  <span style={{
                    fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em",
                    textTransform: "uppercase", color: "var(--blue)",
                    background: "rgba(16,52,89,0.3)", padding: "6px 14px",
                    display: "inline-block", width: "fit-content", marginBottom: "20px",
                  }}>
                    {filtered[0].category} · {filtered[0].readTime}
                  </span>
                  <h2 style={{
                    fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 700,
                    color: "var(--grey)", lineHeight: 1.3, marginBottom: "16px",
                  }}>
                    {filtered[0].title}
                  </h2>
                  <p style={{
                    fontSize: "16px", color: "rgba(230,230,230,0.6)",
                    lineHeight: 1.75, marginBottom: "24px",
                  }}>
                    {filtered[0].excerpt}
                  </p>
                  <span style={{
                    fontSize: "13px", fontWeight: 600, color: "var(--blue)",
                    letterSpacing: "0.06em",
                  }}>
                    Ler artigo completo →
                  </span>
                </div>
                <div style={{
                  background: "var(--blue)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "60px",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(135deg, rgba(16,52,89,0.9) 0%, rgba(0,15,33,0.95) 100%)",
                  }} />
                  <span style={{
                    position: "relative", zIndex: 1,
                    fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em",
                    textTransform: "uppercase", color: "rgba(230,230,230,0.3)",
                  }}>
                    Destaque
                  </span>
                </div>
              </article>
            </Link>
          )}

          {/* Grid dos demais posts */}
          <div ref={gridRef} className="blog-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}>
            {filtered.slice(1).map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article style={{
                  height: "100%",
                  display: "flex", flexDirection: "column",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Barra de cor da categoria no topo */}
                  <div style={{
                    height: "3px",
                    background: post.category === "Trabalhista" ? "var(--blue)" : "var(--navy)",
                  }} />
                  <div style={{ padding: "28px 24px", flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                      <span style={{
                        fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: post.category === "Trabalhista" ? "var(--blue)" : "var(--navy)",
                      }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--silver)", fontWeight: 500 }}>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: "17px", lineHeight: 1.4, marginBottom: "12px",
                      fontWeight: 700, color: "var(--navy)",
                    }}>
                      {post.title}
                    </h3>
                    <p style={{
                      fontSize: "14px", color: "var(--text-body)",
                      lineHeight: 1.7, opacity: 0.75,
                    }}>
                      {post.excerpt}
                    </p>
                  </div>
                  <div style={{
                    padding: "16px 24px",
                    borderTop: "1px solid rgba(0,0,0,0.04)",
                  }}>
                    <span style={{
                      fontSize: "12px", fontWeight: 600,
                      color: "var(--blue)", letterSpacing: "0.04em",
                    }}>
                      Ler artigo →
                    </span>
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
