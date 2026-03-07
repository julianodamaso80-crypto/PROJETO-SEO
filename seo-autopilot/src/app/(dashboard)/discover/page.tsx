import { Search } from "lucide-react";

export default function DiscoverPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Discover Keywords</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Encontre oportunidades de keywords para seu nicho
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Digite uma seed keyword (ex: landing page)"
            className="w-full rounded-xl border border-neutral-700 bg-[#1a1a1a] py-3 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>
        <button className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">
          Buscar
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <span>Volume:</span>
          <input
            type="number"
            placeholder="Min"
            className="w-20 rounded-lg border border-neutral-700 bg-[#1a1a1a] px-2 py-1.5 text-sm text-white"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-20 rounded-lg border border-neutral-700 bg-[#1a1a1a] px-2 py-1.5 text-sm text-white"
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <span>KD:</span>
          <input
            type="number"
            placeholder="Min"
            className="w-20 rounded-lg border border-neutral-700 bg-[#1a1a1a] px-2 py-1.5 text-sm text-white"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-20 rounded-lg border border-neutral-700 bg-[#1a1a1a] px-2 py-1.5 text-sm text-white"
          />
        </div>
        <select className="rounded-lg border border-neutral-700 bg-[#1a1a1a] px-3 py-1.5 text-sm text-neutral-300">
          <option value="">Todas intencoes</option>
          <option value="informational">Informacional</option>
          <option value="transactional">Transacional</option>
          <option value="commercial">Comercial</option>
          <option value="navigational">Navegacional</option>
        </select>
      </div>

      {/* Results Table */}
      <div className="rounded-xl border border-neutral-800 bg-[#1a1a1a]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-800 text-left text-sm font-medium text-neutral-400">
              <th className="p-4 w-10">
                <input type="checkbox" className="rounded border-neutral-600" />
              </th>
              <th className="p-4">Keyword</th>
              <th className="p-4 text-right">Volume</th>
              <th className="p-4 text-right">KD</th>
              <th className="p-4 text-right">CPC</th>
              <th className="p-4">Intent</th>
              <th className="p-4 text-right">Acao</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="p-8 text-center text-sm text-neutral-500">
                Busque uma keyword para ver resultados
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
