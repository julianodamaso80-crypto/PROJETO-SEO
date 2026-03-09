import { getDb } from "@/lib/db";
import { articles, workspaces } from "@/lib/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

async function getArticles() {
  const db = getDb();

  const allArticles = await db
    .select({
      id: articles.id,
      title: articles.title,
      primaryKeyword: articles.primaryKeyword,
      status: articles.status,
      creditsUsed: articles.creditsUsed,
      generationCostUsd: articles.generationCostUsd,
      workspaceId: articles.workspaceId,
      createdAt: articles.createdAt,
    })
    .from(articles)
    .orderBy(articles.createdAt);

  const results = await Promise.all(
    allArticles.map(async (art) => {
      const [ws] = await db
        .select({ name: workspaces.name })
        .from(workspaces)
        .where(eq(workspaces.id, art.workspaceId));

      return {
        ...art,
        workspaceName: ws?.name ?? "—",
      };
    })
  );

  return results;
}

const statusColors: Record<string, string> = {
  queued: "bg-gray-500/20 text-gray-300",
  generating: "bg-yellow-500/20 text-yellow-300",
  draft: "bg-blue-500/20 text-blue-300",
  published: "bg-green-500/20 text-green-300",
  failed: "bg-red-500/20 text-red-300",
};

export default async function AdminArticlesPage() {
  const articlesList = await getArticles();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Artigos</h2>
      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5">
            <tr>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">
                Titulo
              </th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">
                Keyword
              </th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">
                Usuario
              </th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">
                Status
              </th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">
                Data
              </th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">
                Custo USD
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {articlesList.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-12 text-center text-gray-500"
                >
                  Nenhum artigo gerado
                </td>
              </tr>
            ) : (
              articlesList.map((art) => (
                <tr key={art.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 text-sm font-medium max-w-[250px] truncate">
                    {art.title ?? "Sem titulo"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {art.primaryKeyword}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {art.workspaceName}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium capitalize ${statusColors[art.status] ?? "bg-gray-500/20 text-gray-300"}`}
                    >
                      {art.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {new Date(art.createdAt).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-6 py-4 text-sm font-mono">
                    ${Number(art.generationCostUsd ?? 0).toFixed(4)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
