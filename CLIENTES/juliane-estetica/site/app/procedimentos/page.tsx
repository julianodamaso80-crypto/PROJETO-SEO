import type { Metadata } from "next";
import Link from "next/link";
import {
  SERVICES,
  CATEGORIES,
  type ServiceCategory,
} from "@/app/content/services";

export const metadata: Metadata = {
  title: "Procedimentos Esteticos",
  description:
    "Conheca todos os procedimentos da JS Estetica Avancada: harmonizacao facial, botox, preenchimento labial, bioestimuladores, estetica intima, skinbooster, peeling, microagulhamento, fios de PDO e protocolos anti-aging. Barra da Tijuca e Bangu, RJ.",
  keywords: [
    "procedimentos esteticos rj",
    "harmonizacao facial rio de janeiro",
    "botox rj",
    "preenchimento labial rj",
    "bioestimuladores rj",
    "estetica intima rj",
  ],
};

const categoryOrder: ServiceCategory[] = [
  "facial",
  "corporal",
  "intima",
  "pele",
  "anti-aging",
];

export default function ProcedimentosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section text-center"
        style={{ background: "var(--nude)" }}
      >
        <div className="container">
          <span className="eyebrow animate-fade-up">JS Estetica Avancada</span>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 animate-fade-up-delay"
            style={{ color: "var(--text-primary)" }}
          >
            Nossos Procedimentos
          </h1>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto animate-fade-up-delay2">
            Conheca todos os tratamentos realizados pela Dra. Juliane Elaine.
            Protocolos personalizados com resultados naturais e seguros.
          </p>
          <hr className="rule mx-auto mt-8 animate-fade-up-delay3" />
        </div>
      </section>

      {/* Services by category */}
      {categoryOrder.map((cat) => {
        const catInfo = CATEGORIES[cat];
        const catServices = SERVICES.filter((s) => s.category === cat);

        return (
          <section key={cat} className="section">
            <div className="container">
              <div className="reveal mb-10">
                <span className="eyebrow">{catInfo.label}</span>
                <h2
                  className="font-serif text-3xl md:text-4xl font-bold mt-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {catInfo.label}
                </h2>
                <hr className="rule mt-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                {catServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/procedimentos/${service.slug}`}
                    className="card card-hover no-underline group"
                  >
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3
                      className="font-serif text-xl font-bold mb-2 group-hover:text-rose transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 mt-4 text-sm font-semibold"
                      style={{ color: "var(--rose)" }}
                    >
                      Saiba mais
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section
        className="section text-center"
        style={{ background: "var(--dark)" }}
      >
        <div className="container reveal">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Agende Sua Avaliacao
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            A avaliacao e personalizada e sem compromisso. Descubra o melhor
            protocolo para voce.
          </p>
          <a
            href="https://wa.me/5521992469772"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
