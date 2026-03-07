import { Globe, Plus } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Gerencie seus sites e configuracoes
        </p>
      </div>

      {/* Connected Sites */}
      <div className="rounded-xl border border-neutral-800 bg-[#1a1a1a] p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Sites Conectados
          </h2>
          <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">
            <Plus className="h-4 w-4" />
            Adicionar Site
          </button>
        </div>

        <div className="mt-4 rounded-lg border border-dashed border-neutral-700 p-8 text-center">
          <Globe className="mx-auto h-10 w-10 text-neutral-600" />
          <p className="mt-2 text-sm text-neutral-500">
            Nenhum site conectado. Adicione seu primeiro site WordPress.
          </p>
        </div>
      </div>

      {/* Site Profile */}
      <div className="rounded-xl border border-neutral-800 bg-[#1a1a1a] p-6">
        <h2 className="text-lg font-semibold text-white">Perfil do Site</h2>
        <p className="mt-1 text-sm text-neutral-400">
          Selecione um site acima para configurar
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-neutral-300">Nicho</label>
            <input
              type="text"
              placeholder="Ex: Marketing Digital"
              disabled
              className="mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300">Idioma</label>
            <select disabled className="mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-500">
              <option>Portugues (BR)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300">Tom de voz</label>
            <select disabled className="mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-500">
              <option>Conversacional</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300">Publico-alvo</label>
            <input
              type="text"
              placeholder="Ex: Empreendedores digitais"
              disabled
              className="mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-300">Instrucoes extras</label>
            <textarea
              rows={3}
              placeholder="Ex: Sempre mencionar nosso produto XYZ"
              disabled
              className="mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-500"
            />
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className="rounded-xl border border-neutral-800 bg-[#1a1a1a] p-6">
        <h2 className="text-lg font-semibold text-white">Integracoes</h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between rounded-lg border border-neutral-700 p-4">
            <div>
              <p className="text-sm font-medium text-white">Google Search Console</p>
              <p className="text-xs text-neutral-500">Acompanhe impressoes, cliques e posicoes</p>
            </div>
            <button className="rounded-lg border border-neutral-600 px-4 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 transition-colors">
              Conectar
            </button>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-neutral-700 p-4">
            <div>
              <p className="text-sm font-medium text-white">WordPress</p>
              <p className="text-xs text-neutral-500">Publique artigos diretamente no seu blog</p>
            </div>
            <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-500">
              Nenhum site
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
