import Link from "next/link";
import Image from "next/image";
import { SERVICES, CATEGORIES } from "./content/services";
import { blogPosts } from "./content/posts";
import HeroBackground from "./components/HeroBackground";
import ElectricBorder from "./components/ElectricBorder";

const FEATURED_BLOG_SLUGS = [
  "harmonizacao-facial-barra-da-tijuca-guia-completo",
  "harmonizacao-glutea-aumente-volume-sem-cirurgia",
  "harmonizacao-intima-feminina-o-que-e-como-funciona",
];

const FEATURED = [
  {
    slug: "harmonizacao-facial",
    icon: "✨",
    label: "Harmonização Facial",
    desc: "Protocolo completo para equilibrar proporções faciais com resultado natural e sofisticado.",
  },
  {
    slug: "gluteoplastia-nao-cirurgica",
    icon: "🍑",
    label: "Harmonização Glútea",
    desc: "Aumento e modelagem sem cirurgia com técnicas minimamente invasivas e recuperação rápida.",
  },
  {
    slug: "estetica-intima-feminina",
    icon: "🌸",
    label: "Harmonização Íntima",
    desc: "Rejuvenescimento e bem-estar da região íntima feminina com total discrição e respeito.",
  },
];

const DIFERENCIAIS = [
  {
    icon: "🎯",
    title: "Resultados Naturais",
    desc: "Técnicas que valorizam sua beleza sem exageros, preservando a naturalidade e expressão do rosto.",
  },
  {
    icon: "📋",
    title: "Protocolos Personalizados",
    desc: "Cada paciente recebe um protocolo único baseado em análise facial detalhada e seus objetivos pessoais.",
  },
  {
    icon: "🛡️",
    title: "Segurança e Credencial CRBM",
    desc: "Profissional registrada no CRBM (05033 RJ) com produtos ANVISA e protocolos internacionais de segurança.",
  },
  {
    icon: "🌍",
    title: "Experiência Internacional",
    desc: "Formação e vivência em estética na Europa, trazendo técnicas avançadas e tendências mundiais.",
  },
];

export default function Home() {
  const categoryOrder: Array<keyof typeof CATEGORIES> = [
    "facial",
    "corporal",
    "intima",
    "pele",
    "anti-aging",
  ];

  const featuredPosts = FEATURED_BLOG_SLUGS
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{
          minHeight: "calc(100vh - var(--header-h))",
          padding: "var(--section-px)",
        }}
      >
        <HeroBackground />
        <div className="container max-w-3xl relative" style={{ zIndex: 1 }}>
          <p className="eyebrow animate-fade-up mb-4 hero-text">
            Biomédica Esteta — CRBM 05033 RJ
          </p>

          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up-delay hero-text hero-text--title"
            style={{ color: "var(--text-primary)" }}
          >
            Harmonização Facial e Corporal com{" "}
            <span style={{ color: "var(--rose)" }}>Resultados Naturais</span>
          </h1>

          <p
            className="mt-6 text-lg md:text-xl leading-relaxed animate-fade-up-delay2 max-w-2xl mx-auto hero-text"
            style={{ color: "var(--text-body)" }}
          >
            Dra. Juliane Elaine — biomédica pós-graduada em harmonização
            orofacial com experiência internacional. Protocolos personalizados
            para realçar sua beleza natural.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-up-delay3">
            <a
              href="https://wa.me/5521992469772?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Avaliação
            </a>
            <Link href="/procedimentos" className="btn-outline">
              Conheça os Procedimentos
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-xs font-medium text-text-muted animate-fade-up-delay3">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" style={{ color: "var(--rose)" }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              CRBM Registrada
            </span>
            <span>5+ Anos de Experiência</span>
            <span>2 Unidades</span>
            <span>Barra da Tijuca</span>
          </div>
        </div>
      </section>

      {/* ══════ PROCEDIMENTOS DESTAQUE ══════ */}
      <section className="section reveal" style={{ background: "var(--nude)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Especialidades</p>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Nossos Procedimentos em Destaque
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {FEATURED.map((item) => (
              <ElectricBorder
                key={item.slug}
                color="#B88B7A"
                speed={1}
                chaos={0.2}
                borderRadius={16}
              >
                <Link
                  href={`/procedimentos/${item.slug}`}
                  className="card card-hover text-center no-underline group block"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
                    style={{ background: "var(--pink)" }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="font-serif text-xl font-bold mb-2 group-hover:text-rose transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                    {item.desc}
                  </p>
                  <span
                    className="inline-block mt-4 text-sm font-semibold"
                    style={{ color: "var(--rose)" }}
                  >
                    Saiba mais &rarr;
                  </span>
                </Link>
              </ElectricBorder>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/5521992469772?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Avaliação
            </a>
          </div>
        </div>
      </section>

      {/* ══════ SOBRE A DRA. JULIANE ══════ */}
      <section className="section reveal" style={{ background: "var(--rose)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="reveal-left dra-photo">
              <div className="dra-photo__frame">
                <Image
                  src="/images/dra-juliane.jpeg"
                  alt="Dra. Juliane Elaine — Biomédica Esteta"
                  width={900}
                  height={1200}
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="dra-photo__img"
                  priority
                />
                <div className="dra-photo__sheen" />
              </div>
            </div>

            {/* Bio */}
            <div className="reveal-right">
              <p className="eyebrow mb-3" style={{ color: "var(--white)" }}>Sobre a Profissional</p>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "var(--white)" }}
              >
                Dra. Juliane Elaine
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.92)" }}>
                Biomédica pós-graduada em Harmonização Orofacial, com formação
                complementar na Europa e mais de 5 anos de experiência em
                procedimentos estéticos avançados. Registrada no Conselho
                Regional de Biomedicina sob o n.º 05033 RJ.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.92)" }}>
                Especialista em harmonização facial, corporal e íntima, a Dra.
                Juliane é reconhecida por seus resultados naturais e protocolos
                personalizados. Atua como mentora de outros profissionais da
                área e se mantém constantemente atualizada com as técnicas mais
                modernas do mercado.
              </p>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  color: "var(--white)",
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                CRBM 05033 RJ — Biomédica Esteta
              </div>

              <div className="flex gap-4">
                <a
                  href="https://wa.me/5521992469772?text=Olá! Gostaria de agendar uma avaliação."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Agendar Avaliação
                </a>
                <Link href="/sobre" className="btn-outline" style={{ color: "var(--white)", borderColor: "var(--white)" }}>
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ TODOS OS PROCEDIMENTOS ══════ */}
      <section className="section reveal" style={{ background: "var(--nude)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Procedimentos</p>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Todos os Nossos Procedimentos
            </h2>
            <p className="mt-3 text-base text-text-muted max-w-2xl mx-auto">
              14 procedimentos de estética avançada com protocolos personalizados
              para cada paciente.
            </p>
          </div>

          {categoryOrder.map((catKey) => {
            const cat = CATEGORIES[catKey];
            const catServices = SERVICES.filter((s) => s.category === catKey);
            if (catServices.length === 0) return null;

            return (
              <div key={catKey} className="mb-10 last:mb-0 reveal">
                <h3
                  className="font-serif text-xl font-bold mb-5 flex items-center gap-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span
                    className="w-1 h-6 rounded-full inline-block"
                    style={{ background: "var(--rose)" }}
                  />
                  {cat.label}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
                  {catServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/procedimentos/${service.slug}`}
                      className="card card-hover no-underline group flex gap-4 items-start"
                    >
                      <span className="text-2xl flex-shrink-0 mt-0.5">{service.icon}</span>
                      <div>
                        <h4
                          className="font-semibold text-sm mb-1 group-hover:text-rose transition-colors"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {service.title}
                        </h4>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                          {service.shortDesc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="text-center mt-12">
            <a
              href="https://wa.me/5521992469772?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Avaliação
            </a>
          </div>
        </div>
      </section>

      {/* ══════ DIFERENCIAIS ══════ */}
      <section className="section reveal" style={{ background: "var(--rose)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3" style={{ color: "var(--white)" }}>Por Que Nos Escolher</p>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold"
              style={{ color: "var(--white)" }}
            >
              Nossos Diferenciais
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {DIFERENCIAIS.map((d) => (
              <div key={d.title} className="card card-hover text-center" style={{ background: "var(--white)" }}>
                <span className="text-3xl block mb-3">{d.icon}</span>
                <h3
                  className="font-serif text-lg font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/5521992469772?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Avaliação
            </a>
          </div>
        </div>
      </section>

      {/* ══════ UNIDADES ══════ */}
      <section className="section reveal" style={{ background: "var(--nude)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Nossas Unidades</p>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Onde Estamos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto stagger-children">
            {/* Barra da Tijuca */}
            <div className="card card-hover text-center">
              <span className="text-3xl block mb-3">📍</span>
              <h3
                className="font-serif text-xl font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Barra da Tijuca
              </h3>
              <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--text-body)" }}>
                Av. das Américas 3500
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-body)" }}>
                Bloco 2, Sala 507E
              </p>
              <p className="text-xs font-semibold" style={{ color: "var(--rose)" }}>
                Quinta-feira: 8h às 20h
              </p>
            </div>

            {/* Bangu */}
            <div className="card card-hover text-center">
              <span className="text-3xl block mb-3">📍</span>
              <h3
                className="font-serif text-xl font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Bangu
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-body)" }}>
                Rua Oliveira Ribeiro 1000
              </p>
              <p className="text-xs font-semibold" style={{ color: "var(--rose)" }}>
                Terça a Sábado: 9h às 18h
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/5521992469772?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Avaliação
            </a>
          </div>
        </div>
      </section>

      {/* ══════ BLOG PREVIEW ══════ */}
      <section className="section reveal" style={{ background: "var(--rose)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3" style={{ color: "var(--white)" }}>Blog</p>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold"
              style={{ color: "var(--white)" }}
            >
              Conteúdos sobre Estética
            </h2>
            <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Artigos e informações sobre os procedimentos mais procurados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card card-hover no-underline group block overflow-hidden p-0"
                style={{ background: "var(--white)" }}
              >
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--rose)" }}
                  >
                    {post.category}
                  </span>
                  <h3
                    className="font-serif text-lg font-bold mt-2 mb-2 group-hover:text-rose transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "var(--text-body)" }}>
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="https://wa.me/5521992469772?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Avaliação
            </a>
            <Link href="/blog" className="btn-outline" style={{ color: "var(--white)", borderColor: "var(--white)" }}>
              Ver Todos os Artigos
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ CTA FINAL ══════ */}
      <section
        className="section reveal text-center"
        style={{
          background: "linear-gradient(135deg, var(--rose) 0%, var(--gold) 100%)",
        }}
      >
        <div className="container max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Agende Sua Avaliação
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            Conheça nossos protocolos personalizados e descubra como realçar
            sua beleza natural com segurança e sofisticação.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5521992469772?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                background: "var(--white)",
                color: "var(--rose)",
                borderColor: "var(--white)",
              }}
            >
              Agendar pelo WhatsApp
            </a>
            <Link
              href="/contato"
              className="btn-outline"
              style={{ color: "var(--white)", borderColor: "var(--white)" }}
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
