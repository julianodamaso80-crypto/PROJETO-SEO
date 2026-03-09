import { getDb } from "@/lib/db";
import { workspaces, articles } from "@/lib/schema";
import { count, sum, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

const PLAN_PRICES: Record<string, number> = {
  starter: 49,
  growth: 99,
  agency: 249,
};

async function getRevenueStats() {
  const db = getDb();

  // MRR: sum of plan prices for all active workspaces
  const allWorkspaces = await db
    .select({ plan: workspaces.plan })
    .from(workspaces);

  const mrr = allWorkspaces.reduce(
    (acc, ws) => acc + (PLAN_PRICES[ws.plan] ?? 0),
    0
  );

  // Total articles
  const [articlesResult] = await db.select({ total: count() }).from(articles);

  // Total AI cost
  const [costResult] = await db
    .select({ total: sum(articles.generationCostUsd) })
    .from(articles);

  const totalCost = Number(costResult?.total ?? 0);
  const totalArticles = articlesResult?.total ?? 0;

  return {
    mrr,
    totalArticles,
    totalCost,
    margin: mrr > 0 ? ((mrr - totalCost) / mrr) * 100 : 0,
  };
}

export default async function AdminRevenuePage() {
  const stats = await getRevenueStats();

  const cards = [
    {
      label: "MRR Estimado",
      value: `$${stats.mrr.toLocaleString("en-US")}`,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      label: "Total Artigos Gerados",
      value: stats.totalArticles.toLocaleString("pt-BR"),
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      label: "Custo Total IA",
      value: `$${stats.totalCost.toFixed(2)}`,
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
    {
      label: "Margem Estimada",
      value: `${stats.margin.toFixed(1)}%`,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Receita</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className={`${card.bg} rounded-2xl border border-white/10 p-6`}
          >
            <p className="text-sm text-gray-400">{card.label}</p>
            <p className={`text-3xl font-bold mt-2 ${card.color}`}>
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
