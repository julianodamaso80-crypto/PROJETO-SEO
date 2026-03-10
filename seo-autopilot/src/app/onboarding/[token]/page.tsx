"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

const steps = [
  "Sobre o Negócio",
  "Presença Online",
  "SEO e Conteúdo",
  "Finalização",
];

interface FormData {
  clientName: string;
  clientEmail: string;
  businessName: string;
  businessDescription: string;
  mainProduct: string;
  targetAudience: string;
  location: string;
  hasSite: boolean;
  siteUrl: string;
  competitors: string;
  competitorUrls: string;
  keywords: string;
  contentGoal: string;
  tone: string;
  differentials: string;
  monthlyBudget: string;
  extraInfo: string;
}

const initialData: FormData = {
  clientName: "",
  clientEmail: "",
  businessName: "",
  businessDescription: "",
  mainProduct: "",
  targetAudience: "",
  location: "",
  hasSite: false,
  siteUrl: "",
  competitors: "",
  competitorUrls: "",
  keywords: "",
  contentGoal: "",
  tone: "",
  differentials: "",
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
            <div key={label} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                  i <= step
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {i + 1}
              </div>
              <span className={`hidden sm:block text-sm ${i <= step ? "text-gray-800 font-medium" : "text-gray-400"}`}>
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

      {/* Step 1 */}
      {step === 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Sobre o Negócio</h2>
          <Input label="Seu nome completo" value={form.clientName} onChange={(v) => update("clientName", v)} />
          <Input label="Seu email" type="email" value={form.clientEmail} onChange={(v) => update("clientEmail", v)} />
          <Input label="Nome da empresa/negócio" value={form.businessName} onChange={(v) => update("businessName", v)} />
          <Textarea label="Descreva seu negócio em poucas palavras" value={form.businessDescription} onChange={(v) => update("businessDescription", v)} />
          <Textarea label="Qual seu principal produto ou serviço?" value={form.mainProduct} onChange={(v) => update("mainProduct", v)} />
          <Textarea label="Quem é seu público-alvo?" value={form.targetAudience} onChange={(v) => update("targetAudience", v)} />
          <Input label="Cidade/região de atuação" value={form.location} onChange={(v) => update("location", v)} />
        </div>
      )}

      {/* Step 2 */}
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Presença Online</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Você já tem um site?</label>
            <div className="flex gap-4">
              <button
                onClick={() => update("hasSite", true)}
                className={`rounded-lg px-6 py-2 text-sm font-medium border transition-colors ${
                  form.hasSite
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-white text-gray-600 border-gray-300 hover:border-emerald-400"
                }`}
              >
                Sim
              </button>
              <button
                onClick={() => { update("hasSite", false); update("siteUrl", ""); }}
                className={`rounded-lg px-6 py-2 text-sm font-medium border transition-colors ${
                  !form.hasSite
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-white text-gray-600 border-gray-300 hover:border-emerald-400"
                }`}
              >
                Não
              </button>
            </div>
          </div>
          {form.hasSite && (
            <Input label="Qual a URL do seu site?" value={form.siteUrl} onChange={(v) => update("siteUrl", v)} placeholder="https://..." />
          )}
          <Textarea label="Você conhece concorrentes? Liste os nomes" value={form.competitors} onChange={(v) => update("competitors", v)} />
          <Textarea label="URLs dos concorrentes (se souber)" value={form.competitorUrls} onChange={(v) => update("competitorUrls", v)} placeholder="https://concorrente1.com, https://concorrente2.com" />
        </div>
      )}

      {/* Step 3 */}
      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">SEO e Conteúdo</h2>
          <Textarea label="Quais palavras-chave você acha que seus clientes pesquisam?" value={form.keywords} onChange={(v) => update("keywords", v)} />
          <Select
            label="Qual o objetivo do conteúdo?"
            value={form.contentGoal}
            onChange={(v) => update("contentGoal", v)}
            options={[
              { value: "", label: "Selecione..." },
              { value: "Gerar leads", label: "Gerar leads" },
              { value: "Vender produtos", label: "Vender produtos" },
              { value: "Informar/educar", label: "Informar/educar" },
              { value: "Fortalecer marca", label: "Fortalecer marca" },
            ]}
          />
          <Select
            label="Tom de voz da marca"
            value={form.tone}
            onChange={(v) => update("tone", v)}
            options={[
              { value: "", label: "Selecione..." },
              { value: "Profissional", label: "Profissional" },
              { value: "Descontraído", label: "Descontraído" },
              { value: "Técnico", label: "Técnico" },
              { value: "Inspiracional", label: "Inspiracional" },
            ]}
          />
          <Textarea label="Quais são seus diferenciais?" value={form.differentials} onChange={(v) => update("differentials", v)} />
        </div>
      )}

      {/* Step 4 */}
      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Finalização</h2>
          <Select
            label="Investimento mensal disponível para conteúdo"
            value={form.monthlyBudget}
            onChange={(v) => update("monthlyBudget", v)}
            options={[
              { value: "", label: "Selecione..." },
              { value: "Até R$500", label: "Até R$500" },
              { value: "R$500-R$1.500", label: "R$500 - R$1.500" },
              { value: "R$1.500-R$3.000", label: "R$1.500 - R$3.000" },
              { value: "Acima de R$3.000", label: "Acima de R$3.000" },
            ]}
          />
          <Textarea label="Informações adicionais" value={form.extraInfo} onChange={(v) => update("extraInfo", v)} placeholder="Algo mais que gostaria de compartilhar?" />
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
        {/* Logo */}
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
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
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
