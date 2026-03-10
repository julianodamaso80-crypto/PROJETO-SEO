"use client";

import { useEffect, useState } from "react";
import { Plus, Eye, X, ExternalLink, Copy, Check } from "lucide-react";

interface OnboardingEntry {
  id: number;
  token: string;
  clientName: string | null;
  clientEmail: string | null;
  status: string;
  createdAt: string;
  completedAt: string | null;
  businessName: string | null;
  businessDescription: string | null;
  mainProduct: string | null;
  targetAudience: string | null;
  location: string | null;
  siteUrl: string | null;
  hasSite: boolean;
  competitors: string | null;
  competitorUrls: string | null;
  keywords: string | null;
  contentGoal: string | null;
  tone: string | null;
  differentials: string | null;
  monthlyBudget: string | null;
  extraInfo: string | null;
}

export default function ClientsPage() {
  const [entries, setEntries] = useState<OnboardingEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newClientName, setNewClientName] = useState("");
  const [creating, setCreating] = useState(false);
  const [createdUrl, setCreatedUrl] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<OnboardingEntry | null>(null);

  async function fetchEntries() {
    try {
      const res = await fetch("/api/onboarding/list");
      if (res.ok) {
        const data = await res.json();
        setEntries(data);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEntries();
  }, []);

  async function handleCreate() {
    if (!newClientName.trim()) return;
    setCreating(true);
    try {
      const res = await fetch("/api/onboarding/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientName: newClientName.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(`Erro: ${data.error || res.statusText}`);
        return;
      }
      setCreatedUrl(data.url);
      fetchEntries();
    } catch (err) {
      alert(`Erro de rede: ${err}`);
    } finally {
      setCreating(false);
    }
  }

  function closeCreateModal() {
    setShowCreateModal(false);
    setNewClientName("");
    setCreatedUrl(null);
  }

  async function copyLink(entry: OnboardingEntry) {
    const url = `${window.location.origin}/onboarding/${entry.token}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(entry.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      prompt("Copie o link:", url);
    }
  }

  function openLink(entry: OnboardingEntry) {
    window.open(`/onboarding/${entry.token}`, "_blank");
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Clientes</h1>
          <p className="mt-1 text-sm text-neutral-400">
            Gerencie os questionários de onboarding dos seus clientes
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Gerar Link de Onboarding
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-neutral-800 bg-[#1a1a1a]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-800 text-left text-sm font-medium text-neutral-400">
              <th className="p-4">Cliente</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
              <th className="p-4">Data</th>
              <th className="p-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-sm text-neutral-500">
                  Carregando...
                </td>
              </tr>
            ) : entries.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-sm text-neutral-500">
                  Nenhum cliente ainda. Clique em &quot;Gerar Link de Onboarding&quot; para começar.
                </td>
              </tr>
            ) : (
              entries.map((entry) => (
                <tr key={entry.id} className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors">
                  <td className="p-4 text-sm text-white font-medium">
                    {entry.clientName || "—"}
                  </td>
                  <td className="p-4 text-sm text-neutral-300">
                    {entry.clientEmail || "—"}
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        entry.status === "completed"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {entry.status === "completed" ? "Completo" : "Pendente"}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-neutral-400">
                    {new Date(entry.createdAt).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => copyLink(entry)}
                        title="Copiar link"
                        className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                      >
                        {copiedId === entry.id ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                      <button
                        onClick={() => openLink(entry)}
                        title="Abrir formulário"
                        className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </button>
                      {entry.status === "completed" && (
                        <button
                          onClick={() => setSelectedEntry(entry)}
                          title="Ver respostas"
                          className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Criar Link */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-neutral-800 bg-[#1a1a1a] p-6">
            <button
              onClick={closeCreateModal}
              className="absolute right-4 top-4 rounded-lg p-1 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {!createdUrl ? (
              <>
                <h2 className="text-lg font-bold text-white mb-1">Novo Cliente</h2>
                <p className="text-sm text-neutral-400 mb-5">
                  Digite o nome do cliente para gerar o link de onboarding.
                </p>

                <label className="block text-sm font-medium text-neutral-300 mb-1.5">
                  Nome do cliente
                </label>
                <input
                  type="text"
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCreate()}
                  placeholder="Ex: Americanas"
                  autoFocus
                  className="w-full rounded-xl border border-neutral-700 bg-[#0f0f0f] px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />

                <div className="mt-5 flex justify-end gap-3">
                  <button
                    onClick={closeCreateModal}
                    className="rounded-xl border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleCreate}
                    disabled={creating || !newClientName.trim()}
                    className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors disabled:opacity-50"
                  >
                    {creating ? "Gerando..." : "Gerar Link"}
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-lg font-bold text-white mb-1">Link Gerado!</h2>
                <p className="text-sm text-neutral-400 mb-4">
                  Envie este link para <span className="text-white font-medium">{newClientName}</span> preencher o questionário.
                </p>

                <div className="flex items-center gap-2 rounded-xl border border-neutral-700 bg-[#0f0f0f] px-4 py-2.5">
                  <span className="flex-1 truncate text-sm text-emerald-400">{createdUrl}</span>
                  <button
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(createdUrl);
                      } catch {
                        prompt("Copie o link:", createdUrl);
                      }
                    }}
                    className="shrink-0 rounded-lg p-1.5 text-neutral-400 hover:text-white transition-colors"
                    title="Copiar"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-5 flex justify-end">
                  <button
                    onClick={closeCreateModal}
                    className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal Ver Respostas */}
      {selectedEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-neutral-800 bg-[#1a1a1a] p-6">
            <button
              onClick={() => setSelectedEntry(null)}
              className="absolute right-4 top-4 rounded-lg p-1 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-xl font-bold text-white mb-1">
              Respostas de {selectedEntry.clientName}
            </h2>
            <p className="text-sm text-neutral-400 mb-6">{selectedEntry.clientEmail}</p>

            <div className="space-y-4">
              <Section title="Sobre o Negócio">
                <Field label="Empresa" value={selectedEntry.businessName} />
                <Field label="Descrição" value={selectedEntry.businessDescription} />
                <Field label="Principal Produto/Serviço" value={selectedEntry.mainProduct} />
                <Field label="Público-alvo" value={selectedEntry.targetAudience} />
                <Field label="Localização" value={selectedEntry.location} />
              </Section>

              <Section title="Presença Online">
                <Field label="Tem site?" value={selectedEntry.hasSite ? "Sim" : "Não"} />
                {selectedEntry.hasSite && <Field label="URL do site" value={selectedEntry.siteUrl} />}
                <Field label="Concorrentes" value={selectedEntry.competitors} />
                <Field label="URLs dos concorrentes" value={selectedEntry.competitorUrls} />
              </Section>

              <Section title="SEO e Conteúdo">
                <Field label="Palavras-chave" value={selectedEntry.keywords} />
                <Field label="Objetivo do conteúdo" value={selectedEntry.contentGoal} />
                <Field label="Tom de voz" value={selectedEntry.tone} />
                <Field label="Diferenciais" value={selectedEntry.differentials} />
              </Section>

              <Section title="Finalização">
                <Field label="Orçamento mensal" value={selectedEntry.monthlyBudget} />
                <Field label="Informações adicionais" value={selectedEntry.extraInfo} />
              </Section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-neutral-800 p-4">
      <h3 className="mb-3 text-sm font-semibold text-emerald-400">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div>
      <span className="text-xs text-neutral-500">{label}</span>
      <p className="text-sm text-neutral-200">{value || "—"}</p>
    </div>
  );
}
