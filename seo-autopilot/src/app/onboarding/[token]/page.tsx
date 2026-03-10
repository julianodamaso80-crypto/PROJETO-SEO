"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

const steps = [
  "Negócio",
  "Serviços",
  "Online",
  "SEO",
  "Entrega",
];

interface FormData {
  clientName: string;
  clientEmail: string;
  businessName: string;
  businessDescription: string;
  b2bOrB2c: string;
  yearsInBusiness: string;
  clientsServed: string;
  mainProduct: string;
  targetAudience: string;
  location: string;
  hasSite: boolean;
  siteUrl: string;
  hasBlog: boolean;
  competitors: string;
  differentials: string;
  clientQuestions: string;
  clientProblem: string;
  certifications: string;
  contentGoal: string;
  tone: string;
  contactMethod: string;
  seasonality: string;
  monthlyBudget: string;
  extraInfo: string;
}

const initialData: FormData = {
  clientName: "",
  clientEmail: "",
  businessName: "",
  businessDescription: "",
  b2bOrB2c: "",
  yearsInBusiness: "",
  clientsServed: "",
  mainProduct: "",
  targetAudience: "",
  location: "",
  hasSite: false,
  siteUrl: "",
  hasBlog: false,
  competitors: "",
  differentials: "",
  clientQuestions: "",
  clientProblem: "",
  certifications: "",
  contentGoal: "",
  tone: "",
  contactMethod: "",
  seasonality: "",
  monthlyBudget: "",
  extraInfo: "",
};

export default function OnboardingPage() {
  const { token } = useParams<{ token: string }>();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialData);
  const [status, setStatus] = useState<"loading" | "form" | "completed" | "not_found" | "already_completed">("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch(`/api/onboarding/${token}`)
      .then((res) => {
        if (!res.ok) throw new Error("not_found");
        return res.json();
      })
      .then((data) => {
        if (data.status === "completed") {
          setStatus("already_completed");
        } else {
          setStatus("form");
        }
      })
      .catch(() => setStatus("not_found"));
  }, [token]);

  function update(field: keyof FormData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    setSubmitting(true);
    try {
      const res = await fetch(`/api/onboarding/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("completed");
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (status === "loading") {
    return (
      <Shell>
        <p className="text-center text-gray-500 py-20">Carregando...</p>
      </Shell>
    );
  }

  if (status === "not_found") {
    return (
      <Shell>
        <div className="text-center py-20">
          <h2 className="text-xl font-bold text-gray-800">Link inválido</h2>
          <p className="mt-2 text-gray-500">Este link de onboarding não existe ou expirou.</p>
        </div>
      </Shell>
    );
  }

  if (status === "already_completed" || status === "completed") {
    return (
      <Shell>
        <div className="flex flex-col items-center py-20 text-center">
          <CheckCircle className="h-16 w-16 text-emerald-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Obrigado!</h2>
          <p className="mt-2 max-w-md text-gray-500">
            Suas respostas foram enviadas com sucesso. Entraremos em contato em breve para dar início ao seu projeto de SEO.
          </p>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center gap-1.5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                  i <= step
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {i + 1}
              </div>
              <span className={`hidden sm:block text-xs ${i <= step ? "text-gray-800 font-medium" : "text-gray-400"}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1 — Sobre o Negócio */}
      {step === 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Sobre o Negócio</h2>
          <Input label="Seu nome completo *" value={form.clientName} onChange={(v) => update("clientName", v)} />
          <Input label="Seu email *" type="email" value={form.clientEmail} onChange={(v) => update("clientEmail", v)} />
          <Input label="Nome da empresa ou negócio *" value={form.businessName} onChange={(v) => update("businessName", v)} />
          <Textarea label="Descreva seu negócio em 2 linhas *" value={form.businessDescription} onChange={(v) => update("businessDescription", v)} />
          <Select
            label="Você atende empresas ou pessoas físicas?"
            value={form.b2bOrB2c}
            onChange={(v) => update("b2bOrB2c", v)}
            options={[
              { value: "", label: "Selecione..." },
              { value: "B2C", label: "Pessoas físicas (B2C)" },
              { value: "B2B", label: "Empresas (B2B)" },
              { value: "Ambos", label: "Os dois" },
            ]}
          />
          <Select
            label="Há quantos anos está no mercado?"
            value={form.yearsInBusiness}
            onChange={(v) => update("yearsInBusiness", v)}
            options={[
              { value: "", label: "Selecione..." },
              { value: "Menos de 1 ano", label: "Menos de 1 ano" },
              { value: "1 a 3 anos", label: "1 a 3 anos" },
              { value: "3 a 5 anos", label: "3 a 5 anos" },
              { value: "Mais de 5 anos", label: "Mais de 5 anos" },
            ]}
          />
          <Select
            label="Quantos clientes já atendeu aproximadamente?"
            value={form.clientsServed}
            onChange={(v) => update("clientsServed", v)}
            options={[
              { value: "", label: "Selecione..." },
              { value: "Menos de 50", label: "Menos de 50" },
              { value: "50 a 200", label: "50 a 200" },
              { value: "200 a 500", label: "200 a 500" },
              { value: "Mais de 500", label: "Mais de 500" },
            ]}
          />
        </div>
      )}

      {/* Step 2 — Serviços e Público */}
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Serviços e Público</h2>
          <Textarea
            label="Liste seus principais serviços ou produtos, um por linha *"
            value={form.mainProduct}
            onChange={(v) => update("mainProduct", v)}
            placeholder={"Ex:\nConsultoria de marketing\nGestão de redes sociais\nCriação de sites"}
            rows={5}
          />
          <Textarea
            label="Quem é seu cliente ideal? Descreva: cargo, faixa etária, problema principal *"
            value={form.targetAudience}
            onChange={(v) => update("targetAudience", v)}
          />
          <Select
            label="Onde você atende?"
            value={form.location}
            onChange={(v) => update("location", v)}
            options={[
              { value: "", label: "Selecione..." },
              { value: "Só minha cidade", label: "Só minha cidade" },
              { value: "Meu estado", label: "Meu estado" },
              { value: "Brasil todo", label: "Brasil todo" },
              { value: "Internacional", label: "Internacional" },
            ]}
          />
        </div>
      )}

      {/* Step 3 — Presença Online */}
      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Presença Online</h2>
          <Toggle label="Você já tem um site?" value={form.hasSite} onChange={(v) => { update("hasSite", v); if (!v) update("siteUrl", ""); }} />
          {form.hasSite && (
            <Input label="Qual a URL do seu site?" value={form.siteUrl} onChange={(v) => update("siteUrl", v)} placeholder="https://..." />
          )}
          <Toggle label="Você já tem blog ou artigos publicados?" value={form.hasBlog} onChange={(v) => update("hasBlog", v)} />
          <Textarea
            label="Cite até 3 concorrentes que você admira ou perde clientes para"
            value={form.competitors}
            onChange={(v) => update("competitors", v)}
            placeholder="Um por linha"
          />
          <Textarea
            label="O que você faz MELHOR que esses concorrentes? Seja específico *"
            value={form.differentials}
            onChange={(v) => update("differentials", v)}
          />
        </div>
      )}

      {/* Step 4 — SEO e Conteúdo */}
      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">SEO e Conteúdo</h2>
          <Textarea
            label="Quais as 5 perguntas que seus clientes fazem ANTES de te contratar? *"
            value={form.clientQuestions}
            onChange={(v) => update("clientQuestions", v)}
            placeholder={"Uma pergunta por linha. Ex:\nQual o prazo de entrega?\nVocê atende fora do estado?\nQuanto custa?"}
            rows={5}
          />
          <Textarea
            label="Qual o problema principal que seu cliente quer resolver quando te procura? *"
            value={form.clientProblem}
            onChange={(v) => update("clientProblem", v)}
          />
          <Textarea
            label="Você tem certificações, prêmios ou reconhecimentos? Liste"
            value={form.certifications}
            onChange={(v) => update("certifications", v)}
            placeholder="Ex: Certificado Google Ads, Prêmio Top 10 do setor, 500 avaliações 5 estrelas"
          />
          <Select
            label="Objetivo do conteúdo"
            value={form.contentGoal}
            onChange={(v) => update("contentGoal", v)}
            options={[
              { value: "", label: "Selecione..." },
              { value: "Gerar leads", label: "Gerar leads" },
              { value: "Vender produtos direto", label: "Vender produtos direto" },
              { value: "Educar e informar", label: "Educar e informar" },
              { value: "Fortalecer marca", label: "Fortalecer marca" },
            ]}
          />
          <Select
            label="Tom de voz da marca"
            value={form.tone}
            onChange={(v) => update("tone", v)}
            options={[
              { value: "", label: "Selecione..." },
              { value: "Profissional e formal", label: "Profissional e formal" },
              { value: "Descontraído e próximo", label: "Descontraído e próximo" },
              { value: "Técnico e especialista", label: "Técnico e especialista" },
              { value: "Inspiracional e motivador", label: "Inspiracional e motivador" },
            ]}
          />
        </div>
      )}

      {/* Step 5 — Conversão e Entrega */}
      {step === 4 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Conversão e Entrega</h2>
          <Select
            label="Como seu cliente entra em contato com você?"
            value={form.contactMethod}
            onChange={(v) => update("contactMethod", v)}
            options={[
              { value: "", label: "Selecione..." },
              { value: "WhatsApp", label: "WhatsApp" },
              { value: "Formulário no site", label: "Formulário no site" },
              { value: "Telefone", label: "Telefone" },
              { value: "E-commerce", label: "Compra online (e-commerce)" },
              { value: "Email", label: "Email" },
            ]}
          />
          <Textarea
            label="Tem época do ano com mais ou menos demanda? Qual?"
            value={form.seasonality}
            onChange={(v) => update("seasonality", v)}
            placeholder="Ex: Dezembro é nosso mês mais forte / Janeiro é o mais fraco"
          />
          <Select
            label="Investimento mensal disponível para conteúdo"
            value={form.monthlyBudget}
            onChange={(v) => update("monthlyBudget", v)}
            options={[
              { value: "", label: "Selecione..." },
              { value: "Até R$500", label: "Até R$500" },
              { value: "R$500-R$1.500", label: "R$500 a R$1.500" },
              { value: "R$1.500-R$3.000", label: "R$1.500 a R$3.000" },
              { value: "Acima de R$3.000", label: "Acima de R$3.000" },
            ]}
          />
          <Textarea
            label="Algo importante que não perguntamos?"
            value={form.extraInfo}
            onChange={(v) => update("extraInfo", v)}
          />
        </div>
      )}

      {/* Navigation buttons */}
      <div className="mt-8 flex justify-between">
        {step > 0 ? (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="rounded-xl border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Anterior
          </button>
        ) : (
          <div />
        )}

        {step < steps.length - 1 ? (
          <button
            onClick={() => setStep((s) => s + 1)}
            className="rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 transition-colors"
          >
            Próximo
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="rounded-xl bg-emerald-500 px-8 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 transition-colors disabled:opacity-50"
          >
            {submitting ? "Enviando..." : "Enviar Respostas"}
          </button>
        )}
      </div>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="mb-8 flex justify-center">
          <img src="/logo.svg" alt="SEO Inteligente" className="h-10" />
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          {children}
        </div>
        <p className="mt-6 text-center text-xs text-gray-400">
          SEO Inteligente &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
      />
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => onChange(true)}
          className={`rounded-lg px-6 py-2 text-sm font-medium border transition-colors ${
            value
              ? "bg-emerald-500 text-white border-emerald-500"
              : "bg-white text-gray-600 border-gray-300 hover:border-emerald-400"
          }`}
        >
          Sim
        </button>
        <button
          type="button"
          onClick={() => onChange(false)}
          className={`rounded-lg px-6 py-2 text-sm font-medium border transition-colors ${
            !value
              ? "bg-emerald-500 text-white border-emerald-500"
              : "bg-white text-gray-600 border-gray-300 hover:border-emerald-400"
          }`}
        >
          Não
        </button>
      </div>
    </div>
  );
}
