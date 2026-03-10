"use client";

import { useEffect, useState } from "react";
import { Eye, X, ExternalLink, Copy, Check, Users } from "lucide-react";

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
  hasBlog: boolean;
  competitors: string | null;
  competitorUrls: string | null;
  keywords: string | null;
  contentGoal: string | null;
  tone: string | null;
  differentials: string | null;
  monthlyBudget: string | null;
  extraInfo: string | null;
  b2bOrB2c: string | null;
  yearsInBusiness: string | null;
  clientsServed: string | null;
  clientProblem: string | null;
  certifications: string | null;
  contactMethod: string | null;
  seasonality: string | null;
  clientQuestions: string | null;
}

export default function ClientsPage() {
  const [entries, setEntries] = useState<OnboardingEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newClientName, setNewClientName] = useState("");
  const [creating, setCreating] = useState(false);
  const [createdUrl, setCreatedUrl] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [copiedModal, setCopiedModal] = useState(false);
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
    setCopiedModal(false);
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

  async function copyModalLink() {
    if (!createdUrl) return;
    try {
      await navigator.clipboard.writeText(createdUrl);
      setCopiedModal(true);
      setTimeout(() => setCopiedModal(false), 2000);
    } catch {
      prompt("Copie o link:", createdUrl);
    }
  }

  function openLink(entry: OnboardingEntry) {
    window.open(`/onboarding/${entry.token}`, "_blank");
  }

  return (
    <div>
      {/* Header */}
      <div
        className="animate-fade-up"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            Clientes
          </h1>
          <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "4px" }}>
            Gerencie os questionários de onboarding dos seus clientes
          </p>
        </div>
        <button className="btn-accent" onClick={() => setShowCreateModal(true)}>
          ✦ Gerar Link
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="shimmer" style={{ height: "56px", borderRadius: "var(--radius)" }} />
          ))}
        </div>
      ) : entries.length === 0 ? (
        /* Empty state */
        <div
          className="glass animate-fade-up delay-1"
          style={{
            padding: "80px 40px",
            textAlign: "center",
            cursor: "default",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "none"; }}
        >
          <Users
            size={48}
            style={{ color: "var(--text-muted)", margin: "0 auto 16px" }}
          />
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "18px",
              fontWeight: 600,
              color: "var(--text-secondary)",
              marginBottom: "8px",
            }}
          >
            Nenhum cliente ainda
          </h3>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "24px" }}>
            Clique em &quot;Gerar Link&quot; para criar seu primeiro onboarding
          </p>
          <button className="btn-accent" onClick={() => setShowCreateModal(true)}>
            ✦ Gerar Link
          </button>
        </div>
      ) : (
        <div
          className="animate-fade-up delay-1"
          style={{
            background: "var(--bg-surface)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border)",
            overflow: "hidden",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid var(--border)",
                  textAlign: "left",
                }}
              >
                {["Cliente", "Email", "Status", "Data", ""].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "14px 20px",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-body)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      textAlign: h === "" ? "right" : "left",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr
                  key={entry.id}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--bg-glass)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <td
                    style={{
                      padding: "14px 20px",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                    }}
                  >
                    {entry.clientName || "—"}
                  </td>
                  <td
                    style={{
                      padding: "14px 20px",
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {entry.clientEmail || "—"}
                  </td>
                  <td style={{ padding: "14px 20px" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        padding: "4px 12px",
                        borderRadius: "99px",
                        fontSize: "12px",
                        fontWeight: 600,
                        ...(entry.status === "completed"
                          ? {
                              background: "rgba(0,255,136,0.1)",
                              color: "#00ff88",
                              border: "1px solid rgba(0,255,136,0.2)",
                            }
                          : {
                              background: "rgba(250,204,21,0.1)",
                              color: "#facc15",
                              border: "1px solid rgba(250,204,21,0.2)",
                            }),
                      }}
                    >
                      {entry.status === "completed" ? "Completo" : "Pendente"}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "14px 20px",
                      fontSize: "13px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {new Date(entry.createdAt).toLocaleDateString("pt-BR")}
                  </td>
                  <td style={{ padding: "14px 20px", textAlign: "right" }}>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "4px" }}>
                      <IconBtn
                        title="Copiar link"
                        onClick={() => copyLink(entry)}
                      >
                        {copiedId === entry.id ? (
                          <Check size={15} style={{ color: "var(--accent)" }} />
                        ) : (
                          <Copy size={15} />
                        )}
                      </IconBtn>
                      <IconBtn title="Abrir formulário" onClick={() => openLink(entry)}>
                        <ExternalLink size={15} />
                      </IconBtn>
                      {entry.status === "completed" && (
                        <IconBtn
                          title="Ver respostas"
                          onClick={() => setSelectedEntry(entry)}
                        >
                          <Eye size={15} />
                        </IconBtn>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Criar Link */}
      {showCreateModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeCreateModal();
          }}
        >
          <div
            className="animate-scale-in"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "440px",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
            }}
          >
            <button
              onClick={closeCreateModal}
              style={{
                position: "absolute",
                right: "16px",
                top: "16px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-muted)",
                padding: "4px",
                borderRadius: "6px",
                transition: "color 0.2s",
                display: "flex",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              <X size={18} />
            </button>

            {!createdUrl ? (
              <>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  Novo Cliente
                </h2>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "24px" }}>
                  Digite o nome do cliente para gerar o link de onboarding.
                </p>

                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontFamily: "var(--font-body)",
                    color: "var(--text-secondary)",
                    marginBottom: "6px",
                  }}
                >
                  Nome do cliente
                </label>
                <input
                  type="text"
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCreate()}
                  placeholder="Ex: Americanas"
                  autoFocus
                  className="input-dark"
                />

                <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                  <button className="btn-ghost" onClick={closeCreateModal}>
                    Cancelar
                  </button>
                  <button
                    className="btn-accent"
                    onClick={handleCreate}
                    disabled={creating || !newClientName.trim()}
                  >
                    {creating ? "Gerando..." : "Gerar Link"}
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  Link Gerado!
                </h2>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "20px" }}>
                  Envie este link para{" "}
                  <span style={{ color: "var(--accent)", fontWeight: 500 }}>{newClientName}</span>{" "}
                  preencher o questionário.
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    padding: "10px 16px",
                  }}
                >
                  <span
                    style={{
                      flex: 1,
                      fontSize: "13px",
                      color: "var(--accent)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {createdUrl}
                  </span>
                  <button
                    onClick={copyModalLink}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: copiedModal ? "var(--accent)" : "var(--text-muted)",
                      display: "flex",
                      padding: "4px",
                      transition: "color 0.2s",
                    }}
                  >
                    {copiedModal ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                {copiedModal && (
                  <p style={{ fontSize: "12px", color: "var(--accent)", marginTop: "8px" }}>
                    ✓ Copiado!
                  </p>
                )}

                <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
                  <button className="btn-accent" onClick={closeCreateModal}>
                    Fechar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal Ver Respostas — Slide-in lateral */}
      {selectedEntry && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "flex",
            justifyContent: "flex-end",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedEntry(null);
          }}
        >
          <div
            className="animate-slide-in-right"
            style={{
              width: "100%",
              maxWidth: "560px",
              height: "100vh",
              overflowY: "auto",
              background: "var(--bg-elevated)",
              borderLeft: "1px solid var(--border)",
              padding: "32px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {selectedEntry.clientName}
                </h2>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>
                  {selectedEntry.clientEmail}
                </p>
              </div>
              <button
                onClick={() => setSelectedEntry(null)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                  padding: "4px",
                  display: "flex",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <ResponseSection title="Sobre o Negócio">
                <Field label="Empresa" value={selectedEntry.businessName} />
                <Field label="Descrição" value={selectedEntry.businessDescription} />
                <Field label="B2B ou B2C" value={selectedEntry.b2bOrB2c} />
                <Field label="Anos no mercado" value={selectedEntry.yearsInBusiness} />
                <Field label="Clientes atendidos" value={selectedEntry.clientsServed} />
              </ResponseSection>

              <ResponseSection title="Serviços e Público">
                <Field label="Produtos/Serviços" value={selectedEntry.mainProduct} />
                <Field label="Cliente ideal" value={selectedEntry.targetAudience} />
                <Field label="Abrangência" value={selectedEntry.location} />
              </ResponseSection>

              <ResponseSection title="Presença Online">
                <Field label="Tem site?" value={selectedEntry.hasSite ? "Sim" : "Não"} />
                {selectedEntry.hasSite && <Field label="URL do site" value={selectedEntry.siteUrl} />}
                <Field label="Tem blog?" value={selectedEntry.hasBlog ? "Sim" : "Não"} />
                <Field label="Concorrentes" value={selectedEntry.competitors} />
                <Field label="Diferenciais" value={selectedEntry.differentials} />
              </ResponseSection>

              <ResponseSection title="SEO e Conteúdo">
                <Field label="Perguntas dos clientes" value={selectedEntry.clientQuestions} />
                <Field label="Problema principal" value={selectedEntry.clientProblem} />
                <Field label="Certificações/Prêmios" value={selectedEntry.certifications} />
                <Field label="Objetivo do conteúdo" value={selectedEntry.contentGoal} />
                <Field label="Tom de voz" value={selectedEntry.tone} />
              </ResponseSection>

              <ResponseSection title="Conversão e Entrega">
                <Field label="Método de contato" value={selectedEntry.contactMethod} />
                <Field label="Sazonalidade" value={selectedEntry.seasonality} />
                <Field label="Orçamento mensal" value={selectedEntry.monthlyBudget} />
                <Field label="Informações adicionais" value={selectedEntry.extraInfo} />
              </ResponseSection>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function IconBtn({
  children,
  onClick,
  title,
}: {
  children: React.ReactNode;
  onClick: () => void;
  title: string;
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--text-muted)",
        padding: "8px",
        borderRadius: "8px",
        display: "flex",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--text-primary)";
        e.currentTarget.style.background = "var(--bg-glass)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-muted)";
        e.currentTarget.style.background = "none";
      }}
    >
      {children}
    </button>
  );
}

function ResponseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "var(--bg-glass)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "20px",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--accent)",
          marginBottom: "14px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {children}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div>
      <span style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
        {label}
      </span>
      <p style={{ fontSize: "14px", color: "var(--text-primary)", marginTop: "2px" }}>
        {value || "—"}
      </p>
    </div>
  );
}
