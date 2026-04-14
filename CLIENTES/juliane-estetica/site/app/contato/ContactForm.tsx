"use client";

import { useState } from "react";
import { SERVICES } from "@/app/content/services";

const UNITS = ["Barra da Tijuca", "Bangu"];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    procedure: "",
    unit: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Ola! Gostaria de agendar uma avaliacao.\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nProcedimento: ${formData.procedure || "A definir"}\nUnidade: ${formData.unit || "A definir"}\nMensagem: ${formData.message || "—"}`;
    window.open(
      `https://wa.me/5521992469772?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card">
        <div className="text-center py-12">
          <div className="text-5xl mb-4">&#x2705;</div>
          <h3
            className="font-serif text-xl font-bold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Mensagem Enviada!
          </h3>
          <p className="text-sm text-text-muted">
            Voce sera redirecionada ao WhatsApp. Responderemos o mais rapido
            possivel.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2
        className="font-serif text-2xl font-bold mb-6"
        style={{ color: "var(--text-primary)" }}
      >
        Envie Sua Mensagem
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "var(--text-primary)" }}
          >
            Nome completo *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "var(--text-primary)" }}
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "var(--text-primary)" }}
          >
            Telefone / WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            placeholder="(21) 99246-9772"
          />
        </div>

        <div>
          <label
            htmlFor="procedure"
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "var(--text-primary)" }}
          >
            Procedimento de interesse
          </label>
          <select
            id="procedure"
            name="procedure"
            value={formData.procedure}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <option value="">Selecione um procedimento</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="unit"
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "var(--text-primary)" }}
          >
            Unidade de preferencia
          </label>
          <select
            id="unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <option value="">Selecione a unidade</option>
            {UNITS.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "var(--text-primary)" }}
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors resize-none"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            placeholder="Conte-nos mais sobre o que voce procura..."
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          Enviar pelo WhatsApp
        </button>
      </form>
    </div>
  );
}
