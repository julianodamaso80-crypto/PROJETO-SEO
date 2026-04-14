import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resultados",
  description:
    "Confira os resultados dos procedimentos realizados na JS Estetica Avancada pela Dra. Juliane Elaine. Harmonizacao facial, botox, preenchimento, bioestimuladores e estetica intima.",
  keywords: [
    "resultados harmonizacao facial",
    "antes e depois estetica rj",
    "resultados botox",
    "antes e depois preenchimento labial",
    "resultados bioestimuladores",
  ],
};

const GALLERY_PLACEHOLDERS = [
  {
    title: "Harmonizacao Facial",
    desc: "Equilibrio de proporcoes faciais com resultados naturais e harmoniosos.",
    icon: "✨",
  },
  {
    title: "Gluteoplastia Nao Cirurgica",
    desc: "Aumento de volume e remodelacao dos gluteos sem cirurgia.",
    icon: "🍑",
  },
  {
    title: "Estetica Intima",
    desc: "Rejuvenescimento e melhora funcional da regiao intima.",
    icon: "🌸",
  },
  {
    title: "Botox",
    desc: "Suavizacao de rugas e linhas de expressao para aparencia rejuvenescida.",
    icon: "💉",
  },
  {
    title: "Preenchimento Labial",
    desc: "Volume e contorno labial com resultado natural e proporcional.",
    icon: "💋",
  },
  {
    title: "Bioestimuladores de Colageno",
    desc: "Firmeza e rejuvenescimento progressivo com estimulo natural de colageno.",
    icon: "🧬",
  },
];

export default function ResultadosPage() {
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
            Resultados
          </h1>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto animate-fade-up-delay2">
            Acompanhe os resultados dos nossos procedimentos. Cada transformacao
            e unica, respeitando a individualidade de cada paciente.
          </p>
          <hr className="rule mx-auto mt-8 animate-fade-up-delay3" />
        </div>
      </section>

      {/* Gallery message */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container max-w-3xl text-center reveal">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ background: "var(--pink)" }}
          >
            <span className="text-3xl">📸</span>
          </div>
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Galeria em Preparacao
          </h2>
          <p className="text-text-muted leading-relaxed">
            Estamos preparando nossa galeria de resultados com fotos de antes e
            depois autorizadas pelas pacientes. Em breve voce podera conferir
            transformacoes reais realizadas pela Dra. Juliane Elaine.
          </p>
          <p className="text-text-muted leading-relaxed mt-4">
            Enquanto isso, agende sua avaliacao para conhecer mais resultados
            pessoalmente em nossas clinicas.
          </p>
        </div>
      </section>

      {/* Placeholder cards */}
      <section className="section">
        <div className="container">
          <div className="text-center reveal mb-12">
            <span className="eyebrow">Em Breve</span>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mt-3"
              style={{ color: "var(--text-primary)" }}
            >
              Categorias de Resultados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {GALLERY_PLACEHOLDERS.map((item, i) => (
              <div key={i} className="card card-hover text-center">
                {/* Placeholder image area */}
                <div
                  className="aspect-[4/3] rounded-lg mb-5 flex flex-col items-center justify-center"
                  style={{ background: "var(--nude)" }}
                >
                  <span className="text-4xl mb-2">{item.icon}</span>
                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{ background: "var(--pink)" }}
                    >
                      Antes
                    </span>
                    <span style={{ color: "var(--rose)" }}>→</span>
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{ background: "var(--pink)" }}
                    >
                      Depois
                    </span>
                  </div>
                </div>
                <h3
                  className="font-serif text-lg font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Agende sua avaliacao para conhecer mais resultados pessoalmente e
            descobrir o melhor protocolo para voce.
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
