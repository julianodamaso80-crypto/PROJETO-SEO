export default function ArticlesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Articles</h1>
          <p className="mt-1 text-sm text-neutral-400">
            Todos os artigos gerados e publicados
          </p>
        </div>
        <button className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">
          + Novo Artigo
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <select className="rounded-lg border border-neutral-700 bg-[#1a1a1a] px-3 py-2 text-sm text-neutral-300">
          <option value="">Todos os status</option>
          <option value="queued">Na fila</option>
          <option value="generating">Gerando</option>
          <option value="reviewing">Revisao</option>
          <option value="published">Publicado</option>
          <option value="draft">Rascunho</option>
          <option value="error">Erro</option>
        </select>
        <select className="rounded-lg border border-neutral-700 bg-[#1a1a1a] px-3 py-2 text-sm text-neutral-300">
          <option value="">Todos os sites</option>
        </select>
      </div>

      {/* Articles Table */}
      <div className="rounded-xl border border-neutral-800 bg-[#1a1a1a]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-800 text-left text-sm font-medium text-neutral-400">
              <th className="p-4">Titulo</th>
              <th className="p-4">Keyword</th>
              <th className="p-4">Status</th>
              <th className="p-4">Data</th>
              <th className="p-4 text-right">Impressoes</th>
              <th className="p-4 text-right">Cliques</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="p-8 text-center text-sm text-neutral-500">
                Nenhum artigo ainda. Va para Discover para encontrar keywords e
                gerar artigos.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
