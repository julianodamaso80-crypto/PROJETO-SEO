import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre — Dra. Juliane Elaine",
  description:
    "Conheca a Dra. Juliane Elaine, biomedica CRBM 05033 RJ, pos-graduada em Harmonizacao Facial com experiencia internacional na Europa. Especialista em estetica avancada na Barra da Tijuca e Bangu.",
  keywords: [
    "dra juliane elaine",
    "biomedica estetica rj",
    "harmonizacao facial especialista",
    "CRBM 05033",
    "estetica avancada rio de janeiro",
  ],
};

const DIFFERENTIALS = [
  {
    icon: "🎓",
    title: "Pos-graduacao em Harmonizacao",
    desc: "Formacao especializada em Harmonizacao Orofacial com as tecnicas mais atuais do mercado.",
  },
  {
    icon: "🌍",
    title: "Experiencia Internacional",
    desc: "Vivencia e capacitacao na Europa, trazendo o que ha de mais moderno em estetica avancada.",
  },
  {
    icon: "📋",
    title: "CRBM 05033 RJ",
    desc: "Registro ativo no Conselho Regional de Biomedicina, garantindo legalidade e seguranca em todos os procedimentos.",
  },
  {
    icon: "🔬",
    title: "Protocolos Personalizados",
    desc: "Cada paciente recebe um plano de tratamento unico, baseado em avaliacao detalhada e objetivos individuais.",
  },
  {
    icon: "✨",
    title: "Resultados Naturais",
    desc: "Filosofia de realcar a beleza natural, sem exageros. O melhor resultado e aquele que ninguem percebe.",
  },
  {
    icon: "🏥",
    title: "Ambiente Seguro e Acolhedor",
    desc: "Clinicas equipadas com produtos aprovados pela ANVISA, ambiente esteril e equipe atenciosa.",
  },
  {
    icon: "👩‍🏫",
    title: "Mentora e Educadora",
    desc: "Compartilha conhecimento como mentora de profissionais da area, sempre atualizada com as melhores praticas.",
  },
  {
    icon: "💎",
    title: "Produtos de Referencia",
    desc: "Utilizamos apenas marcas reconhecidas mundialmente e aprovadas pela ANVISA para maxima seguranca e eficacia.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section text-center"
        style={{ background: "var(--nude)" }}
      >
        <div className="container">
          <span className="eyebrow animate-fade-up">Sobre</span>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 animate-fade-up-delay"
            style={{ color: "var(--text-primary)" }}
          >
            Dra. Juliane Elaine
          </h1>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto animate-fade-up-delay2">
            Biomedica Esteticista — CRBM 05033 RJ
          </p>
          <hr className="rule mx-auto mt-8 animate-fade-up-delay3" />
        </div>
      </section>

      {/* Bio */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="lg:col-span-2 reveal">
              <div
                className="aspect-[3/4] rounded-2xl flex items-center justify-center"
                style={{ background: "var(--pink)" }}
              >
                <div className="text-center p-6">
                  <div className="text-6xl mb-4">👩‍⚕️</div>
                  <p className="text-sm text-text-muted">
                    Foto Dra. Juliane Elaine
                  </p>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div className="lg:col-span-3 reveal">
              <span className="eyebrow">Quem Sou Eu</span>
              <h2
                className="font-serif text-3xl font-bold mt-3 mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Uma Jornada Dedicada a Beleza Natural
              </h2>
              <div className="space-y-4 text-text-body leading-relaxed">
                <p>
                  Sou Juliane Elaine, biomedica esteticista registrada no
                  Conselho Regional de Biomedicina do Rio de Janeiro sob o
                  numero <strong style={{ color: "var(--rose)" }}>CRBM 05033</strong>.
                  Minha trajetoria na estetica avancada comecou pela paixao em
                  ajudar pessoas a se sentirem mais confiantes e bonitas,
                  respeitando sempre sua individualidade.
                </p>
                <p>
                  Pos-graduada em Harmonizacao Orofacial, busquei
                  especializacao alem das fronteiras do Brasil. Minha
                  experiencia internacional na Europa me proporcionou contato
                  com as tecnicas mais modernas e os protocolos mais seguros
                  da estetica mundial, conhecimento que aplico diariamente no
                  atendimento aos meus pacientes.
                </p>
                <p>
                  Alem de atuar clinicamente, sou mentora de profissionais da
                  area, compartilhando conhecimento e contribuindo para a
                  formacao de novos especialistas em estetica avancada. Acredito
                  que a educacao continuada e fundamental para oferecer sempre
                  o melhor aos pacientes.
                </p>
                <p>
                  Atendo na Barra da Tijuca e em Bangu, no Rio de Janeiro, com
                  foco em harmonizacao facial, procedimentos corporais,
                  estetica intima, tratamentos de pele e protocolos anti-aging
                  personalizados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container max-w-4xl text-center">
          <div className="reveal">
            <span className="eyebrow">Nossa Filosofia</span>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              Beleza Natural, Resultados Reais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <div className="card text-center">
              <div
                className="text-4xl font-bold font-serif mb-3"
                style={{ color: "var(--rose)" }}
              >
                01
              </div>
              <h3
                className="font-serif text-lg font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Resultados Naturais
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Acreditamos que o melhor resultado e aquele que realca sua
                beleza sem que ninguem perceba que voce fez um procedimento.
                Sutil, harmonioso e natural.
              </p>
            </div>
            <div className="card text-center">
              <div
                className="text-4xl font-bold font-serif mb-3"
                style={{ color: "var(--rose)" }}
              >
                02
              </div>
              <h3
                className="font-serif text-lg font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Protocolos Personalizados
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Cada rosto e corpo e unico. Por isso, cada plano de
                tratamento e desenhado exclusivamente para voce, respeitando
                suas caracteristicas e desejos.
              </p>
            </div>
            <div className="card text-center">
              <div
                className="text-4xl font-bold font-serif mb-3"
                style={{ color: "var(--rose)" }}
              >
                03
              </div>
              <h3
                className="font-serif text-lg font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Seguranca em Primeiro Lugar
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Registro CRBM ativo, produtos aprovados pela ANVISA, ambiente
                esteril e protocolos rigorosos. Sua seguranca e nossa
                prioridade absoluta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CRBM Credential */}
      <section className="section" style={{ background: "var(--pink)" }}>
        <div className="container max-w-3xl text-center reveal">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
            style={{ background: "var(--rose)", color: "var(--white)" }}
          >
            <span className="text-3xl font-bold font-serif">CRM</span>
          </div>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            CRBM 05033 — Rio de Janeiro
          </h2>
          <p className="mt-4 text-text-body max-w-xl mx-auto leading-relaxed">
            Registro ativo no Conselho Regional de Biomedicina do Estado do
            Rio de Janeiro. Todos os procedimentos sao realizados dentro das
            normas e regulamentacoes vigentes, garantindo legalidade,
            seguranca e qualidade no atendimento.
          </p>
        </div>
      </section>

      {/* Differentials grid */}
      <section className="section">
        <div className="container">
          <div className="text-center reveal mb-12">
            <span className="eyebrow">Diferenciais</span>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mt-3"
              style={{ color: "var(--text-primary)" }}
            >
              Por Que Escolher a JS Estetica Avancada
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {DIFFERENTIALS.map((d, i) => (
              <div key={i} className="card card-hover text-center">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3
                  className="font-serif text-lg font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {d.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {d.desc}
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
            Venha conhecer a JS Estetica Avancada pessoalmente. A avaliacao
            e personalizada e sem compromisso.
          </p>
          <a
            href="https://wa.me/5521999999999"
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
