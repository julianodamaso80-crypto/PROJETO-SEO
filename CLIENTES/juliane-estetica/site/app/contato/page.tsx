import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contato — Agende Sua Avaliacao",
  description:
    "Entre em contato com a JS Estetica Avancada. Agende sua avaliacao pelo WhatsApp, email ou formulario. Unidades na Barra da Tijuca e Bangu, Rio de Janeiro.",
  keywords: [
    "contato estetica avancada rj",
    "agendar harmonizacao facial",
    "whatsapp estetica rj",
    "agendar botox rio de janeiro",
    "clinica estetica barra da tijuca contato",
  ],
};

export default function ContatoPage() {
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
            Agende Sua Avaliacao
          </h1>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto animate-fade-up-delay2">
            Entre em contato conosco e de o primeiro passo para realcar sua
            beleza natural.
          </p>
          <hr className="rule mx-auto mt-8 animate-fade-up-delay3" />
        </div>
      </section>

      {/* Contact content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 reveal">
              <span className="eyebrow">Fale Conosco</span>
              <h2
                className="font-serif text-3xl font-bold mt-3 mb-8"
                style={{ color: "var(--text-primary)" }}
              >
                Informacoes de Contato
              </h2>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white flex-shrink-0"
                    style={{ background: "#25D366" }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/5521992469772"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline"
                      style={{ color: "var(--rose)" }}
                    >
                      (21) 99246-9772
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white flex-shrink-0"
                    style={{ background: "var(--rose)" }}
                  >
                    <span className="text-sm">@</span>
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      E-mail
                    </p>
                    <a
                      href="mailto:juliane_souza.s@hotmail.com"
                      className="text-sm hover:underline"
                      style={{ color: "var(--rose)" }}
                    >
                      juliane_souza.s@hotmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)",
                    }}
                  >
                    <span className="text-sm font-bold">IG</span>
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Instagram
                    </p>
                    <p className="text-sm text-text-muted">
                      @jsesteticaavancada
                    </p>
                  </div>
                </div>
              </div>

              {/* Addresses */}
              <div className="mt-10 space-y-6">
                <h3
                  className="font-serif text-xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Nossas Unidades
                </h3>
                <div
                  className="rounded-lg p-5"
                  style={{ background: "var(--pink)" }}
                >
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Barra da Tijuca
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    Av. Americas 3500, Bl2, Sala 507E
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    Quinta-feira: 8h as 20h
                  </p>
                </div>
                <div
                  className="rounded-lg p-5"
                  style={{ background: "var(--pink)" }}
                >
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Bangu
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    Rua Oliveira Ribeiro 1000
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    Terca a Sabado: 9h as 18h
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 reveal">
              <ContactForm />
            </div>
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
            Prefere Ligar Direto?
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Estamos disponiveis pelo WhatsApp para tirar suas duvidas e agendar
            sua avaliacao.
          </p>
          <a
            href="https://wa.me/5521992469772"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
