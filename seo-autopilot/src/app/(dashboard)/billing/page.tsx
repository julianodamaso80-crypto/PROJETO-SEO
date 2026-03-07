import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    articles: "15 artigos/mes",
    sites: "1 site",
    support: "Suporte email",
    current: false,
  },
  {
    name: "Growth",
    price: "$99",
    articles: "50 artigos/mes",
    sites: "3 sites",
    support: "Suporte chat",
    current: false,
    popular: true,
  },
  {
    name: "Agency",
    price: "$249",
    articles: "150 artigos/mes",
    sites: "10 sites",
    support: "Suporte prioritario",
    current: false,
  },
];

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Billing</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Gerencie seu plano e pagamentos
        </p>
      </div>

      {/* Current Plan */}
      <div className="rounded-xl border border-neutral-800 bg-[#1a1a1a] p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-400">Plano atual</p>
            <p className="mt-1 text-xl font-bold text-white">Free Trial</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-neutral-400">Creditos restantes</p>
            <p className="mt-1 text-xl font-bold text-white">0 / 0</p>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl border p-6 ${
              plan.popular
                ? "border-emerald-500 bg-[#1a1a1a] shadow-lg shadow-emerald-500/10"
                : "border-neutral-800 bg-[#1a1a1a]"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-0.5 text-xs font-medium text-white">
                Popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold text-white">{plan.price}</span>
              <span className="text-sm text-neutral-500">/mes</span>
            </div>
            <ul className="mt-4 space-y-2">
              {[plan.articles, plan.sites, plan.support].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-neutral-300">
                  <Check className="h-4 w-4 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full rounded-lg py-2.5 text-sm font-medium transition-colors ${
                plan.popular
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "border border-neutral-700 text-neutral-300 hover:bg-neutral-800"
              }`}
            >
              {plan.current ? "Plano Atual" : "Escolher Plano"}
            </button>
          </div>
        ))}
      </div>

      {/* Extra Credits */}
      <div className="rounded-xl border border-neutral-800 bg-[#1a1a1a] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Creditos extras</h3>
            <p className="text-sm text-neutral-400">$5 por artigo avulso, sem assinatura</p>
          </div>
          <button className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">
            Comprar Creditos
          </button>
        </div>
      </div>

      {/* Invoice History */}
      <div className="rounded-xl border border-neutral-800 bg-[#1a1a1a]">
        <div className="border-b border-neutral-800 p-5">
          <h3 className="text-lg font-semibold text-white">Historico de Faturas</h3>
        </div>
        <div className="p-8 text-center text-sm text-neutral-500">
          Nenhuma fatura ainda
        </div>
      </div>
    </div>
  );
}
