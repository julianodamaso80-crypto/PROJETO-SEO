import { getDb } from "@/lib/db";
import { workspaces, articles } from "@/lib/schema";
import { count, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

async function getUsers() {
  const db = getDb();

  const allWorkspaces = await db
    .select({
      id: workspaces.id,
      name: workspaces.name,
      ownerId: workspaces.ownerId,
      plan: workspaces.plan,
      creditsRemaining: workspaces.creditsRemaining,
      creditsMonthly: workspaces.creditsMonthly,
      createdAt: workspaces.createdAt,
    })
    .from(workspaces)
    .orderBy(workspaces.createdAt);

  const results = await Promise.all(
    allWorkspaces.map(async (ws) => {
      const [artCount] = await db
        .select({ total: count() })
        .from(articles)
        .where(eq(articles.workspaceId, ws.id));

      return {
        ...ws,
        articlesCount: artCount?.total ?? 0,
      };
    })
  );

  return results;
}

export default async function AdminUsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Usuarios</h2>
      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5">
            <tr>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">
                Nome
              </th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">
                Owner ID
              </th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">
                Plano
              </th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">
                Creditos
              </th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">
                Artigos
              </th>
              <th className="px-6 py-4 text-sm font-medium text-gray-400">
                Cadastro
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-12 text-center text-gray-500"
                >
                  Nenhum usuario cadastrado
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 text-sm font-medium">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400 font-mono">
                    {user.ownerId.slice(0, 12)}...
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300 capitalize">
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {user.creditsRemaining}/{user.creditsMonthly}
                  </td>
                  <td className="px-6 py-4 text-sm">{user.articlesCount}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {new Date(user.createdAt).toLocaleDateString("pt-BR")}
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
