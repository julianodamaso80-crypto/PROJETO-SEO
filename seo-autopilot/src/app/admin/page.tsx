import { getDb } from "@/lib/db";
import { workspaces, articles } from "@/lib/schema";
import { count, sum, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

async function getStats() {
  const db = getDb();

  const [usersResult] = await db.select({ total: count() }).from(workspaces);
  const [articlesResult] = await db.select({ total: count() }).from(articles);
  const [publishedResult] = await db
    .select({ total: count() })
    .from(articles)
    .where(eq(articles.status, "published"));
  const [creditsResult] = await db
    .select({ total: sum(articles.creditsUsed) })
    .from(articles);

  return {
    totalUsers: usersResult?.total ?? 0,
    totalArticles: articlesResult?.total ?? 0,
    publishedArticles: publishedResult?.total ?? 0,
    totalCredits: Number(creditsResult?.total ?? 0),
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  const cards = [
    {
      label: "Usuarios Cadastrados",
      value: stats.totalUsers,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      label: "Artigos Gerados",
      value: stats.totalArticles,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      label: "Artigos Publicados",
      value: stats.publishedArticles,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      label: "Creditos Consumidos",
      value: stats.totalCredits,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Admin</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className={`${card.bg} rounded-2xl border border-white/10 p-6`}
          >
            <p className="text-sm text-gray-400">{card.label}</p>
            <p className={`text-3xl font-bold mt-2 ${card.color}`}>
              {card.value.toLocaleString("pt-BR")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
