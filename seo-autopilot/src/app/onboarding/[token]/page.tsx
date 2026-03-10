"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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
  const [direction, setDirection] = useState<"next" | "prev">("next");

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

  function goNext() {
    setDirection("next");
    setStep((s) => s + 1);
  }

  function goPrev() {
    setDirection("prev");
    setStep((s) => s - 1);
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
        <p style={{ textAlign: "center", color: "#94a3b8", padding: "80px 0" }}>Carregando...</p>
      </Shell>
    );
  }

  if (status === "not_found") {
    return (
      <Shell>
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "22px", fontWeight: 700, color: "#1e293b" }}>
            Link inválido
          </h2>
          <p style={{ color: "#94a3b8", marginTop: "8px" }}>
            Este link de onboarding não existe ou expirou.
          </p>
        </div>
      </Shell>
    );
  }

  if (status === "already_completed" || status === "completed") {
    return (
      <Shell>
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          {/* Animated checkmark */}
          <div style={{ margin: "0 auto 24px", width: "80px", height: "80px" }}>
            <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#00c96b"
                strokeWidth="3"
                strokeDasharray="283"
                strokeDashoffset="0"
                style={{ animation: "drawCircle 0.8s ease-out forwards" }}
              />
              <polyline
                points="30,52 44,66 70,38"
                fill="none"
                stroke="#00c96b"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="100"
                strokeDashoffset="0"
                style={{ animation: "drawCheck 0.5s ease-out 0.5s forwards" }}
              />
            </svg>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 700, color: "#1e293b" }}>
            Respostas enviadas!
          </h2>
          <p style={{ color: "#94a3b8", marginTop: "12px", maxWidth: "400px", margin: "12px auto 0", lineHeight: 1.6 }}>
            Nossa equipe vai entrar em contato em breve para dar início ao seu projeto de SEO.
          </p>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      {/* Progress bar */}
      <div style={{ position: "relative", marginBottom: "36px" }}>
        {/* Top progress line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#e5e7eb", borderRadius: "99px" }}>
          <div
            style={{
              height: "3px",
              borderRadius: "99px",
              background: "#00c96b",
              transition: "width 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
              width: `${((step + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        {/* Stepper */}
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px" }}>
          {steps.map((label, i) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  ...(i < step
                    ? { background: "#00c96b", color: "#fff" }
                    : i === step
                    ? { background: "#00c96b", color: "#fff", boxShadow: "0 0 0 4px rgba(0,201,107,0.2)" }
                    : { background: "#e5e7eb", color: "#94a3b8" }),
                }}
              >
                {i < step ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: i <= step ? 600 : 400,
                  color: i <= step ? "#1e293b" : "#94a3b8",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step content with animation */}
      <div
        key={step}
        style={{
          animation: `slideStep 0.35s cubic-bezier(0.23, 1, 0.32, 1) forwards`,
        }}
      >
        {/* Step 1 — Sobre o Negócio */}
        {step === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <StepTitle>Sobre o Negócio</StepTitle>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <StepTitle>Serviços e Público</StepTitle>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <StepTitle>Presença Online</StepTitle>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <StepTitle>SEO e Conteúdo</StepTitle>
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
              placeholder="Ex: Certificado Google Ads, Prêmio Top 10 do setor"
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
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <StepTitle>Conversão e Entrega</StepTitle>
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
      </div>

      {/* Navigation buttons */}
      <div style={{ marginTop: "36px", display: "flex", justifyContent: "space-between" }}>
        {step > 0 ? (
          <button onClick={goPrev} className="ob-btn-ghost">
            Anterior
          </button>
        ) : (
          <div />
        )}

        {step < steps.length - 1 ? (
          <button onClick={goNext} className="ob-btn-primary">
            Próximo
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="ob-btn-primary"
            style={{ opacity: submitting ? 0.6 : 1 }}
          >
            {submitting ? "Enviando..." : "Enviar Respostas"}
          </button>
        )}
      </div>

      <style>{`
        .ob-btn-primary {
          background: #00c96b;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 14px;
          padding: 12px 28px;
          border-radius: 99px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .ob-btn-primary:hover {
          background: #00b35e;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(0,201,107,0.3);
        }
        .ob-btn-primary:disabled {
          cursor: not-allowed;
          transform: none;
        }
        .ob-btn-ghost {
          background: transparent;
          color: #64748b;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          padding: 12px 28px;
          border-radius: 99px;
          border: 1px solid #e5e7eb;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .ob-btn-ghost:hover {
          border-color: #cbd5e1;
          color: #1e293b;
          background: #f8fafc;
        }
        .ob-input {
          width: 100%;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
          background: #fff;
          padding: 12px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #1e293b;
          outline: none;
          transition: all 0.2s ease;
        }
        .ob-input:focus {
          border-color: #00c96b;
          box-shadow: 0 0 0 3px rgba(0,201,107,0.12);
        }
        .ob-input::placeholder { color: #94a3b8; }
        .ob-select {
          width: 100%;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
          background: #fff;
          padding: 12px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #1e293b;
          outline: none;
          transition: all 0.2s ease;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%2394a3b8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
        }
        .ob-select:focus {
          border-color: #00c96b;
          box-shadow: 0 0 0 3px rgba(0,201,107,0.12);
        }
        .ob-textarea {
          width: 100%;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
          background: #fff;
          padding: 12px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #1e293b;
          outline: none;
          transition: all 0.2s ease;
          resize: none;
        }
        .ob-textarea:focus {
          border-color: #00c96b;
          box-shadow: 0 0 0 3px rgba(0,201,107,0.12);
        }
        .ob-textarea::placeholder { color: #94a3b8; }

        @media (max-width: 640px) {
          .ob-shell-card { padding: 24px 20px !important; }
          .ob-shell-container { padding: 16px !important; }
        }
      `}</style>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fafafa",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        className="ob-shell-container"
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "32px 16px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "#00c96b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "14px",
                color: "#fff",
              }}
            >
              S
            </div>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#1e293b",
              }}
            >
              SEO Inteligente
            </span>
          </div>
          <p style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px" }}>
            Questionário de Onboarding
          </p>
        </div>

        {/* Card */}
        <div
          className="ob-shell-card"
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "36px 32px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.08)",
          }}
        >
          {children}
        </div>

        <p style={{ textAlign: "center", fontSize: "12px", color: "#94a3b8", marginTop: "24px" }}>
          SEO Inteligente &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

function StepTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "24px",
        fontWeight: 700,
        color: "#1e293b",
        marginBottom: "4px",
      }}
    >
      {children}
    </h2>
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
      <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#475569", marginBottom: "6px" }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="ob-input"
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
      <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#475569", marginBottom: "6px" }}>
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="ob-textarea"
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
      <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#475569", marginBottom: "6px" }}>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="ob-select"
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
  const activeStyle = {
    background: "#00c96b",
    color: "#fff",
    border: "1.5px solid #00c96b",
  };
  const inactiveStyle = {
    background: "#fff",
    color: "#64748b",
    border: "1.5px solid #e5e7eb",
  };

  return (
    <div>
      <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#475569", marginBottom: "8px" }}>
        {label}
      </label>
      <div style={{ display: "flex", gap: "12px" }}>
        <button
          type="button"
          onClick={() => onChange(true)}
          style={{
            padding: "10px 28px",
            borderRadius: "99px",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s ease",
            fontFamily: "'DM Sans', sans-serif",
            ...(value ? activeStyle : inactiveStyle),
          }}
        >
          Sim
        </button>
        <button
          type="button"
          onClick={() => onChange(false)}
          style={{
            padding: "10px 28px",
            borderRadius: "99px",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s ease",
            fontFamily: "'DM Sans', sans-serif",
            ...(!value ? activeStyle : inactiveStyle),
          }}
        >
          Não
        </button>
      </div>
    </div>
  );
}
