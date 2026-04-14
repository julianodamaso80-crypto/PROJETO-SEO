import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, CATEGORIES } from "@/app/content/services";

/* ── Static params ─────────────────────────────── */
export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/* ── Dynamic metadata ──────────────────────────── */
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} — Procedimento`,
    description: service.shortDesc,
    keywords: service.keywords,
  };
}

/* ── Page ───────────────────────────────────────── */
export default async function ProcedimentoPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  );

  const catInfo = CATEGORIES[service.category];

  return (
    <>
      {/* Hero */}
      <section
        className="section text-center"
        style={{ background: "var(--nude)" }}
      >
        <div className="container">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider animate-fade-up"
            style={{
              background: "var(--pink)",
              color: "var(--rose)",
            }}
          >
            {catInfo.label}
          </span>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-6 animate-fade-up-delay"
            style={{ color: "var(--text-primary)" }}
          >
            {service.title}
          </h1>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto animate-fade-up-delay2">
            {service.shortDesc}
          </p>
          <hr className="rule mx-auto mt-8 animate-fade-up-delay3" />
        </div>
      </section>

      {/* Full description */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="reveal blog-content">
            {service.fullDesc.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section
          className="section"
          style={{ background: "var(--surface)" }}
        >
          <div className="container max-w-3xl">
            <div className="reveal">
              <span className="eyebrow">Duvidas Frequentes</span>
              <h2
                className="font-serif text-3xl font-bold mt-3 mb-8"
                style={{ color: "var(--text-primary)" }}
              >
                Perguntas sobre {service.title}
              </h2>
            </div>

            <div className="space-y-3 reveal">
              {service.faq.map((item, i) => (
                <details key={i} className="faq-item">
                  <summary>{item.q}</summary>
                  <div className="faq-answer">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="section text-center"
        style={{ background: "var(--dark)" }}
      >
        <div className="container reveal">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Quer saber mais sobre {service.title}?
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Agende sua avaliacao personalizada e descubra o melhor protocolo
            para voce. Atendimento na Barra da Tijuca e Bangu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://wa.me/5521992469772"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar pelo WhatsApp
            </a>
            <Link href="/procedimentos" className="btn-outline" style={{ color: "var(--white)", borderColor: "var(--white)" }}>
              Ver Todos os Procedimentos
            </Link>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="reveal">
              <span className="eyebrow">Procedimentos Relacionados</span>
              <h2
                className="font-serif text-3xl font-bold mt-3 mb-8"
                style={{ color: "var(--text-primary)" }}
              >
                Outros procedimentos de {catInfo.label}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/procedimentos/${s.slug}`}
                  className="card card-hover no-underline group"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3
                    className="font-serif text-xl font-bold mb-2 group-hover:text-rose transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {s.shortDesc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
