import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unidades — Barra da Tijuca e Bangu",
  description:
    "JS Estetica Avancada com unidades na Barra da Tijuca (Av. Americas 3500) e Bangu (Rua Oliveira Ribeiro 1000). Confira enderecos, horarios e servicos disponiveis em cada unidade.",
  keywords: [
    "estetica barra da tijuca",
    "estetica bangu",
    "clinica estetica rio de janeiro",
    "harmonizacao facial barra da tijuca",
    "botox bangu",
  ],
};

const UNITS = [
  {
    name: "Barra da Tijuca",
    address: "Av. Americas 3500, Bl2, Sala 507E",
    neighborhood: "Barra da Tijuca, Rio de Janeiro — RJ",
    hours: "Quinta-feira: 8h as 20h",
    mapQuery: "Av+Americas+3500+Barra+da+Tijuca+RJ",
    services: [
      "Harmonizacao Facial",
      "Botox",
      "Preenchimento Labial",
      "Rinomodelacao",
      "Bioestimuladores de Colageno",
      "Skinbooster",
      "Protocolo Anti-Aging",
    ],
    highlight: "Atendimento exclusivo as quintas-feiras com agenda completa de procedimentos faciais e corporais.",
  },
  {
    name: "Bangu",
    address: "Rua Oliveira Ribeiro 1000",
    neighborhood: "Bangu, Rio de Janeiro — RJ",
    hours: "Terca a Sabado: 9h as 18h",
    mapQuery: "Rua+Oliveira+Ribeiro+1000+Bangu+RJ",
    services: [
      "Harmonizacao Facial",
      "Botox",
      "Preenchimento Labial",
      "Bioestimuladores de Colageno",
      "Gluteoplastia Nao Cirurgica",
      "Estetica Intima Feminina",
      "Enzimas Liticas",
      "Peeling Quimico",
      "Microagulhamento",
      "Skinbooster",
      "Fios de PDO",
      "Protocolo Anti-Aging",
    ],
    highlight: "Unidade principal com atendimento ampliado de terca a sabado e todos os procedimentos disponiveis.",
  },
];

export default function UnidadesPage() {
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
            Nossas Unidades
          </h1>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto animate-fade-up-delay2">
            Duas unidades no Rio de Janeiro para sua comodidade. Escolha a mais
            proxima e agende sua avaliacao.
          </p>
          <hr className="rule mx-auto mt-8 animate-fade-up-delay3" />
        </div>
      </section>

      {/* Units */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {UNITS.map((unit, idx) => (
              <div key={idx} className="card card-hover reveal">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full text-white text-lg font-bold"
                    style={{ background: "var(--rose)" }}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <h2
                      className="font-serif text-2xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {unit.name}
                    </h2>
                    <p className="text-sm text-text-muted">{unit.neighborhood}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">📍</span>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                        Endereco
                      </p>
                      <p className="text-sm text-text-muted">{unit.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">🕐</span>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                        Horario
                      </p>
                      <p className="text-sm text-text-muted">{unit.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Highlight */}
                <div
                  className="rounded-lg p-4 mb-6"
                  style={{ background: "var(--pink)" }}
                >
                  <p className="text-sm" style={{ color: "var(--rose)" }}>
                    {unit.highlight}
                  </p>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h3
                    className="font-semibold text-sm mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Procedimentos disponiveis:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {unit.services.map((s, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "var(--nude)",
                          color: "var(--text-body)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden h-56 border" style={{ borderColor: "var(--border)" }}>
                  <iframe
                    title={`Mapa — ${unit.name}`}
                    src={`https://maps.google.com/maps?q=${unit.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
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
            Escolha a Unidade Mais Proxima
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Agende sua avaliacao pelo WhatsApp e escolha entre Barra da Tijuca
            ou Bangu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar pelo WhatsApp
            </a>
            <Link href="/contato" className="btn-outline" style={{ color: "var(--white)", borderColor: "var(--white)" }}>
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
