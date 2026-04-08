"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/app/content/posts";
import type { BlogPost } from "@/app/content/types";

const categories = [
  "Todos",
  "Harmonização Facial",
  "Harmonização Corporal",
  "Harmonização Íntima",
  "Skincare",
  "Dúvidas",
] as const;

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block no-underline">
      <article className="card-hover overflow-hidden rounded-xl bg-white border border-border">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span
            className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.9)", color: "var(--text-body)" }}
          >
            {post.category}
          </span>
        </div>
        <div className="p-5">
          <h3
            className="text-lg font-semibold leading-snug transition-colors line-clamp-2"
            style={{ color: "var(--text-primary)" }}
          >
            <span className="group-hover:text-rose">{post.title}</span>
          </h3>
          <p
            className="mt-2 text-sm leading-relaxed line-clamp-3"
            style={{ color: "var(--text-muted)" }}
          >
            {post.excerpt}
          </p>
          <div
            className="mt-4 flex items-center justify-between text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </time>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const filteredPosts =
    activeCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen" style={{ background: "var(--surface)" }}>
      {/* Hero */}
      <section
        className="relative px-4 py-20 text-center sm:py-28"
        style={{
          background: "linear-gradient(135deg, var(--dark) 0%, #2a2220 50%, var(--rose-hover) 100%)",
          paddingTop: "calc(var(--header-h) + 80px)",
        }}
      >
        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow justify-center" style={{ color: "var(--gold)" }}>
            Blog JS Estética Avançada
          </p>
          <h1
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--white)" }}
          >
            Conhecimento é o Primeiro Passo Para a Sua Transformação
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed" style={{ color: "var(--pink)" }}>
            Artigos sobre harmonização facial, corporal e íntima escritos por
            especialistas. Informação segura para decisões conscientes.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section
        className="sticky top-0 z-30 border-b backdrop-blur-md"
        style={{
          borderColor: "var(--border)",
          background: "rgba(255,255,255,0.9)",
          top: "var(--header-h)",
        }}
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:justify-center sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer"
              style={
                activeCategory === cat
                  ? { background: "var(--rose)", color: "var(--white)" }
                  : { background: "var(--nude)", color: "var(--text-body)" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {filteredPosts.length === 0 ? (
          <p className="text-center" style={{ color: "var(--text-muted)" }}>
            Nenhum artigo encontrado nesta categoria.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section
        className="px-4 py-16 text-center"
        style={{ background: "var(--rose)" }}
      >
        <div className="mx-auto max-w-2xl">
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--white)" }}
          >
            Pronta Para Dar o Próximo Passo?
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--pink)" }}>
            Agende sua avaliação gratuita com a biomédica esteta Juliane Elaine
            (CRBM 05033 RJ) na Barra da Tijuca ou Bangu.
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
            Agendar Avaliação Gratuita
          </Link>
        </div>
      </section>
    </main>
  );
}
