"use client";

import { trpc } from "@/lib/trpc/client";
import { Check, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

const planOrder = ["starter", "professional", "enterprise"] as const;

function formatPrice(cents: number): string {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function BillingPage() {
  return (
    <Suspense fallback={
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "400px" }}>
        <Loader2 size={24} style={{ animation: "spin 1s linear infinite", color: "var(--text-secondary)" }} />
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    }>
      <BillingContent />
    </Suspense>
  );
}

function BillingContent() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");

  const { data: currentPlan, isLoading: planLoading } =
    trpc.billing.getCurrentPlan.useQuery();
  const { data: plansData, isLoading: plansLoading } =
    trpc.billing.getPlans.useQuery();

  const checkoutMutation = trpc.billing.createCheckout.useMutation();
  const portalMutation = trpc.billing.createPortal.useMutation();

  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (success) setToast("Assinatura realizada com sucesso!");
    if (canceled) setToast("Checkout cancelado.");
  }, [success, canceled]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const isLoading = planLoading || plansLoading;
  const stripeConfigured = plansData?.stripeConfigured ?? false;
  const plans = plansData?.plans;
  const userPlan = currentPlan?.plan || "free";
  const subscriptionStatus = currentPlan?.status || "none";

  async function handleCheckout(planKey: string) {
    try {
      const result = await checkoutMutation.mutateAsync({ planKey });
      if (result.url) {
        window.location.href = result.url;
      }
    } catch (error) {
      setToast(
        error instanceof Error ? error.message : "Erro ao iniciar checkout"
      );
    }
  }

  async function handlePortal() {
    try {
      const result = await portalMutation.mutateAsync();
      if (result.url) {
        window.location.href = result.url;
      }
    } catch (error) {
      setToast(
        error instanceof Error ? error.message : "Erro ao abrir portal"
      );
    }
  }

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "400px",
        }}
      >
        <Loader2
          size={24}
          style={{ animation: "spin 1s linear infinite", color: "var(--text-secondary)" }}
        />
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const statusLabels: Record<string, { label: string; color: string }> = {
    active: { label: "Ativo", color: "#00ff88" },
    past_due: { label: "Pagamento pendente", color: "#facc15" },
    canceled: { label: "Cancelado", color: "#ef4444" },
    none: { label: "", color: "#71717a" },
  };

  const statusInfo = statusLabels[subscriptionStatus] || statusLabels.none;

  return (
    <div className="animate-fade-up" style={{ position: "relative" }}>
      {/* Toast */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: success ? "rgba(0,255,136,0.15)" : "rgba(239,68,68,0.15)",
            border: `1px solid ${success ? "rgba(0,255,136,0.3)" : "rgba(239,68,68,0.3)"}`,
            borderRadius: "10px",
            padding: "14px 20px",
            fontSize: "13px",
            color: success ? "#00ff88" : "#ef4444",
            zIndex: 100,
          }}
        >
          {toast}
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "24px",
            fontWeight: 700,
            color: "var(--text-primary)",
          }}
        >
          Planos & Billing
        </h1>
        <p
          style={{
            fontSize: "13px",
            color: "var(--text-muted)",
            marginTop: "4px",
          }}
        >
          Gerencie seu plano e assinatura
        </p>
      </div>

      {/* Current Plan */}
      <div
        className="glass"
        style={{
          padding: "20px 24px",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Plano atual
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--text-primary)",
                textTransform: "capitalize",
              }}
            >
              {userPlan}
            </span>
            {statusInfo.label && (
              <span
                style={{
                  fontSize: "11px",
                  padding: "3px 10px",
                  borderRadius: "99px",
                  background: `${statusInfo.color}15`,
                  color: statusInfo.color,
                  fontWeight: 600,
                }}
              >
                {statusInfo.label}
              </span>
            )}
          </div>
        </div>
        {subscriptionStatus === "active" && (
          <button
            onClick={handlePortal}
            disabled={portalMutation.isPending}
            className="btn-ghost"
            style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px" }}
          >
            {portalMutation.isPending ? (
              <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} />
            ) : (
              <ExternalLink size={14} />
            )}
            Gerenciar Assinatura
          </button>
        )}
      </div>

      {/* Stripe not configured notice */}
      {!stripeConfigured && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 18px",
            background: "rgba(250,204,21,0.06)",
            border: "1px solid rgba(250,204,21,0.15)",
            borderRadius: "10px",
            marginBottom: "24px",
            fontSize: "13px",
            color: "#facc15",
          }}
        >
          <AlertCircle size={16} />
          Billing será ativado em breve. Os planos estão disponíveis apenas para
          visualização.
        </div>
      )}

      {/* Plans Grid */}
      {plans && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {planOrder.map((key) => {
            const plan = plans[key];
            const isCurrentPlan = userPlan === key;
            const isPopular = "popular" in plan && plan.popular;

            return (
              <div
                key={key}
                className="glass"
                style={{
                  padding: "28px 24px",
                  position: "relative",
                  border: isPopular
                    ? "1px solid rgba(0,255,136,0.3)"
                    : isCurrentPlan
                      ? "1px solid rgba(0,255,136,0.2)"
                      : "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                {isPopular && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#00ff88",
                      color: "#000",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "3px 14px",
                      borderRadius: "99px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Popular
                  </span>
                )}

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  {plan.name}
                </h3>

                <div style={{ marginBottom: "20px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "32px",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                    }}
                  >
                    {formatPrice(plan.price)}
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                    /mês
                  </span>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                        padding: "5px 0",
                      }}
                    >
                      <Check size={14} style={{ color: "#00ff88", flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCheckout(key)}
                  disabled={
                    isCurrentPlan ||
                    !stripeConfigured ||
                    checkoutMutation.isPending
                  }
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "none",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor:
                      isCurrentPlan || !stripeConfigured ? "default" : "pointer",
                    fontFamily: "var(--font-body)",
                    transition: "all 0.2s",
                    ...(isCurrentPlan
                      ? {
                          background: "rgba(0,255,136,0.1)",
                          color: "#00ff88",
                        }
                      : {
                          background: isPopular ? "#00ff88" : "var(--bg-glass)",
                          color: isPopular ? "#000" : "var(--text-primary)",
                          border: isPopular ? "none" : "1px solid var(--border)",
                          opacity:
                            !stripeConfigured || checkoutMutation.isPending
                              ? 0.5
                              : 1,
                        }),
                  }}
                >
                  {isCurrentPlan
                    ? "Plano Atual"
                    : checkoutMutation.isPending
                      ? "Redirecionando..."
                      : "Assinar"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Contact sales */}
      <div
        className="glass"
        style={{
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "15px",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            Precisa de mais?
          </h3>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>
            Entre em contato para planos personalizados
          </p>
        </div>
        <a
          href="mailto:damasojuliano@gmail.com"
          className="btn-ghost"
          style={{ fontSize: "13px", textDecoration: "none" }}
        >
          Falar com vendas
        </a>
      </div>
    </div>
  );
}
