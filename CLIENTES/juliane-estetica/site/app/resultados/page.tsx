import type { Metadata } from "next";
import GaleriaResultados from "../components/GaleriaResultados";
import Depoimentos from "../components/Depoimentos";

export const metadata: Metadata = {
  title: "Resultados Reais — Antes e Depois | JS Estética Avançada",
  description:
    "Veja resultados reais de harmonização facial, gluteoplastia não cirúrgica, preenchimento e tratamento antirrugas realizados pela Dra. Juliane Elaine. Pacientes satisfeitas das nossas clínicas em Barra da Tijuca e Bangu — RJ.",
  keywords: [
    "resultados harmonização facial rj",
    "antes e depois estética rj",
    "gluteoplastia não cirúrgica resultados",
    "harmonização masculina rj",
    "depoimentos JS estética",
    "preenchimento labial antes e depois",
  ],
};

export default function ResultadosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section text-center"
        style={{ background: "var(--nude)" }}
      >
        <div className="container">
          <span className="eyebrow animate-fade-up">Pacientes Reais</span>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 animate-fade-up-delay"
            style={{ color: "var(--text-primary)" }}
          >
            Resultados &amp; Depoimentos
          </h1>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto animate-fade-up-delay2">
            Antes e depois reais autorizados pelas pacientes da Dra. Juliane
            Elaine, junto com mensagens recebidas no WhatsApp, Instagram e
            atendimento direto.
          </p>
          <hr className="rule mx-auto mt-8 animate-fade-up-delay3" />
        </div>
      </section>

      {/* Galeria Antes & Depois */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center reveal mb-10">
            <span className="eyebrow">Antes &amp; Depois</span>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mt-3"
              style={{ color: "var(--text-primary)" }}
            >
              Transformações Reais
            </h2>
            <p
              className="mt-4 text-base max-w-2xl mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              Clique em qualquer imagem para ampliar. Fotos publicadas com
              autorização expressa das pacientes.
            </p>
          </div>

          <GaleriaResultados />
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section reveal" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="eyebrow">Depoimentos</span>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mt-3"
              style={{ color: "var(--text-primary)" }}
            >
              O Que Dizem Nossas Pacientes
            </h2>
            <p
              className="mt-4 text-base max-w-2xl mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              Mensagens reais recebidas no WhatsApp, Instagram e DM. Toque em
              &ldquo;Ver print original&rdquo; para ampliar.
            </p>
          </div>

          <Depoimentos />
        </div>
      </section>

      {/* Selo de credibilidade */}
      <section className="section reveal" style={{ background: "var(--nude)" }}>
        <div className="container max-w-3xl text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ background: "var(--pink)" }}
          >
            <span className="text-3xl">🛡️</span>
          </div>
          <h2
            className="font-serif text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Sua segurança em primeiro lugar
          </h2>
          <p
            className="leading-relaxed"
            style={{ color: "var(--text-body)" }}
          >
            Todas as fotos e mensagens foram publicadas com autorização
            expressa das pacientes. A Dra. Juliane Elaine é biomédica esteta
            registrada no CRBM/RJ nº 05033, e utiliza apenas produtos com
            registro ANVISA em ambiente clínico estéril.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section text-center"
        style={{
          background: "linear-gradient(135deg, var(--rose) 0%, var(--gold) 100%)",
        }}
      >
        <div className="container reveal max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Quer ser a próxima transformação?
          </h2>
          <p className="mt-4 text-white/90 leading-relaxed">
            Agende uma avaliação personalizada e descubra o protocolo ideal
            para você nas nossas unidades em Barra da Tijuca e Bangu.
          </p>
          <a
            href="https://wa.me/5521992469772?text=Olá! Vi os resultados no site e gostaria de agendar uma avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
            style={{
              background: "var(--white)",
              color: "var(--rose)",
              borderColor: "var(--white)",
            }}
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
