"use client";

import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc/client";
import {
  Globe,
  Plug,
  CheckCircle,
  XCircle,
  AlertCircle,
  Loader2,
  TestTube,
  Save,
  ChevronDown,
  ChevronRight,
  Info,
  User,
  Building2,
  Bell,
} from "lucide-react";

type TabKey = "profile" | "workspace" | "wordpress" | "integrations" | "notifications";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("profile");

  const tabs: { key: TabKey; label: string; icon: typeof User }[] = [
    { key: "profile", label: "Perfil", icon: User },
    { key: "workspace", label: "Workspace", icon: Building2 },
    { key: "wordpress", label: "WordPress", icon: Globe },
    { key: "integrations", label: "Integrações", icon: Plug },
    { key: "notifications", label: "Notificações", icon: Bell },
  ];

  return (
    <div className="animate-fade-up">
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, color: "var(--text-primary)" }}>
          Configurações
        </h1>
        <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>
          Gerencie seu perfil, workspace, conexões e notificações
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "0", borderBottom: "1px solid var(--border)", marginBottom: "24px", overflowX: "auto" }}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                display: "flex", alignItems: "center", gap: "8px", padding: "12px 18px",
                background: "none", border: "none",
                borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                cursor: "pointer", fontSize: "13px", fontWeight: isActive ? 600 : 400,
                color: isActive ? "var(--accent)" : "var(--text-secondary)",
                transition: "all 0.2s", fontFamily: "var(--font-body)", whiteSpace: "nowrap",
              }}
            >
              <tab.icon size={15} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === "profile" && <ProfileTab />}
      {activeTab === "workspace" && <WorkspaceTab />}
      {activeTab === "wordpress" && <WordPressTab />}
      {activeTab === "integrations" && <IntegrationsTab />}
      {activeTab === "notifications" && <NotificationsTab />}
    </div>
  );
}

// ─── Shared styles ───────────────────────────────────────────

const inp: React.CSSProperties = {
  width: "100%", background: "var(--bg-surface)", border: "1px solid var(--border)",
  borderRadius: "8px", padding: "10px 14px", fontSize: "13px", color: "var(--text-primary)",
  fontFamily: "var(--font-body)", outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase",
  letterSpacing: "0.04em", display: "block", marginBottom: "6px",
};

// ─── Profile Tab ─────────────────────────────────────────────

function ProfileTab() {
  const { data: profile, isLoading } = trpc.workspaces.getProfile.useQuery();
  const utils = trpc.useUtils();
  const updateMutation = trpc.workspaces.updateProfile.useMutation({
    onSuccess: () => utils.workspaces.getProfile.invalidate(),
  });

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    if (profile) {
      setName(profile.name || "");
      setWhatsapp(profile.whatsapp || "");
    }
  }, [profile]);

  function handleSave() {
    updateMutation.mutate({ name, whatsapp });
  }

  if (isLoading) return <LoadingState />;

  return (
    <div style={{ maxWidth: "500px" }}>
      <div className="glass" style={{ padding: "24px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "20px" }}>
          Informações do Perfil
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={labelStyle}>Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inp} />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input type="email" value={profile?.email || ""} disabled style={{ ...inp, opacity: 0.5, cursor: "not-allowed" }} />
            <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px" }}>
              O email não pode ser alterado
            </p>
          </div>
          <div>
            <label style={labelStyle}>WhatsApp</label>
            <input type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="(11) 99999-9999" style={inp} />
          </div>
        </div>

        {updateMutation.isSuccess && (
          <p style={{ fontSize: "12px", color: "var(--accent)", marginTop: "12px" }}>Perfil atualizado!</p>
        )}

        <button
          onClick={handleSave}
          disabled={updateMutation.isPending}
          className="btn-accent"
          style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", marginTop: "20px", opacity: updateMutation.isPending ? 0.7 : 1 }}
        >
          {updateMutation.isPending ? <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} /> : <Save size={14} />}
          {updateMutation.isPending ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </div>
  );
}

// ─── Workspace Tab ───────────────────────────────────────────

function WorkspaceTab() {
  const { data: workspace, isLoading } = trpc.workspaces.getMine.useQuery();
  const { data: planInfo } = trpc.billing.getCurrentPlan.useQuery();
  const utils = trpc.useUtils();
  const updateMutation = trpc.workspaces.updateWorkspaceName.useMutation({
    onSuccess: () => utils.workspaces.getMine.invalidate(),
  });

  const [wsName, setWsName] = useState("");

  useEffect(() => {
    if (workspace) setWsName(workspace.name);
  }, [workspace]);

  if (isLoading) return <LoadingState />;

  if (!workspace) {
    return (
      <div className="glass" style={{ padding: "32px", textAlign: "center", maxWidth: "500px" }}>
        <Building2 size={32} style={{ color: "var(--text-muted)", marginBottom: "12px" }} />
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "4px" }}>
          Nenhum workspace encontrado
        </p>
        <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
          Um workspace será criado automaticamente.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "500px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <div className="glass" style={{ padding: "24px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "20px" }}>
          Workspace
        </h3>
        <div>
          <label style={labelStyle}>Nome do Workspace</label>
          <input type="text" value={wsName} onChange={(e) => setWsName(e.target.value)} style={inp} />
        </div>

        {updateMutation.isSuccess && (
          <p style={{ fontSize: "12px", color: "var(--accent)", marginTop: "12px" }}>Nome atualizado!</p>
        )}

        <button
          onClick={() => updateMutation.mutate({ name: wsName })}
          disabled={updateMutation.isPending || !wsName}
          className="btn-accent"
          style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", marginTop: "16px", opacity: updateMutation.isPending ? 0.7 : 1 }}
        >
          {updateMutation.isPending ? <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} /> : <Save size={14} />}
          Salvar
        </button>
      </div>

      <div className="glass" style={{ padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Plano atual</p>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", textTransform: "capitalize", marginTop: "2px" }}>
            {planInfo?.plan || workspace.plan || "free"}
          </p>
        </div>
        <a href="/billing" style={{ fontSize: "13px", color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}>
          Ver planos
        </a>
      </div>
    </div>
  );
}

// ─── WordPress Tab ──────────────────────────────────────────────

function WordPressTab() {
  const { data: connections, isLoading } = trpc.wpConnection.listAll.useQuery();
  const [showNewForm, setShowNewForm] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  if (isLoading) return <LoadingState />;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {connections && connections.length > 0 && (
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>
            Conexões WordPress
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {connections.map((conn) => (
              <ConnectionCard key={conn.id} connection={conn} />
            ))}
          </div>
        </div>
      )}

      {!showNewForm && connections && connections.length === 0 && (
        <div style={{ padding: "40px", textAlign: "center", background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}>
          <Globe size={36} style={{ color: "var(--text-muted)", marginBottom: "12px" }} />
          <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "6px" }}>Nenhuma conexão WordPress configurada.</p>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "16px" }}>
            As conexões são criadas automaticamente quando um cliente preenche a Etapa 7 do onboarding.
          </p>
          <button onClick={() => setShowNewForm(true)} className="btn-accent" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <Plug size={14} /> Adicionar Conexão Manual
          </button>
        </div>
      )}

      {(showNewForm || (connections && connections.length > 0)) && (
        <NewConnectionForm onCancel={() => setShowNewForm(false)} showAlways={connections && connections.length > 0} />
      )}

      {/* Help section */}
      <div style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
        <button
          onClick={() => setShowHelp(!showHelp)}
          style={{
            width: "100%", padding: "16px 20px", display: "flex", alignItems: "center", gap: "10px",
            background: "none", border: "none", cursor: "pointer", textAlign: "left",
          }}
        >
          {showHelp ? <ChevronDown size={16} style={{ color: "var(--accent)" }} /> : <ChevronRight size={16} style={{ color: "var(--text-muted)" }} />}
          <Info size={16} style={{ color: "var(--accent)" }} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600, color: "var(--text-primary)" }}>
            Como configurar Application Passwords no WordPress
          </span>
        </button>
        {showHelp && (
          <div style={{ padding: "0 20px 20px", fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            <div style={{ background: "var(--accent-dim)", border: "1px solid var(--accent-glow)", borderRadius: "10px", padding: "16px 20px" }}>
              <ol style={{ margin: 0, paddingLeft: "20px" }}>
                <li style={{ marginBottom: "8px" }}>No WordPress admin, vá em <strong style={{ color: "var(--text-primary)" }}>Usuários &rarr; Seu Perfil</strong></li>
                <li style={{ marginBottom: "8px" }}>Role até a seção <strong style={{ color: "var(--text-primary)" }}>&quot;Application Passwords&quot;</strong></li>
                <li style={{ marginBottom: "8px" }}>No campo &quot;Novo nome de senha&quot;, digite: <strong style={{ color: "var(--accent)" }}>SEO Inteligente</strong></li>
                <li style={{ marginBottom: "8px" }}>Clique em <strong style={{ color: "var(--text-primary)" }}>&quot;Adicionar Nova Senha de Aplicação&quot;</strong></li>
                <li style={{ marginBottom: "8px" }}><strong style={{ color: "#facc15" }}>Copie a senha gerada</strong> (ela só será exibida uma vez!)</li>
                <li>Clique em <strong style={{ color: "var(--accent)" }}>&quot;Testar Conexão&quot;</strong> para verificar</li>
              </ol>
              <div style={{ marginTop: "12px", padding: "10px 14px", background: "rgba(250,204,21,0.06)", border: "1px solid rgba(250,204,21,0.15)", borderRadius: "8px", fontSize: "12px", color: "#facc15" }}>
                Requisitos: WordPress 5.6+ com a REST API habilitada. Permissão de Administrador ou Editor.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Connection Card ────────────────────────────────────────────

function ConnectionCard({ connection }: { connection: { id: string; siteId: string; wpUrl: string; wpUser: string; wpVersion: string | null; connectionStatus: string; lastTestedAt: Date | null } }) {
  const utils = trpc.useUtils();
  const testMutation = trpc.wpConnection.test.useMutation({
    onSuccess: () => utils.wpConnection.listAll.invalidate(),
  });
  const [seoPlugin, setSeoPlugin] = useState<{ hasYoast: boolean; hasRankMath: boolean } | null>(null);

  function handleTest() {
    testMutation.mutate({ siteId: connection.siteId }, {
      onSuccess: (result) => {
        if (result.seoPlugin) setSeoPlugin(result.seoPlugin);
      },
    });
  }

  const statusIcon = connection.connectionStatus === "connected"
    ? <CheckCircle size={16} style={{ color: "var(--accent)" }} />
    : connection.connectionStatus === "failed"
      ? <XCircle size={16} style={{ color: "#ef4444" }} />
      : <AlertCircle size={16} style={{ color: "#facc15" }} />;

  const statusLabel = connection.connectionStatus === "connected" ? "Conectado" : connection.connectionStatus === "failed" ? "Falha" : "Não testado";
  const statusColor = connection.connectionStatus === "connected" ? "var(--accent)" : connection.connectionStatus === "failed" ? "#ef4444" : "#facc15";

  return (
    <div style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "18px 22px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
        <Globe size={20} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)" }}>
            {connection.wpUrl.replace(/https?:\/\//, "")}
          </div>
          <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            Usuário: {connection.wpUser}
            {connection.wpVersion && ` · WP ${connection.wpVersion}`}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {statusIcon}
          <span style={{ fontSize: "12px", fontWeight: 600, color: statusColor }}>{statusLabel}</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "var(--text-muted)", marginBottom: "12px", flexWrap: "wrap" }}>
        {connection.lastTestedAt && (
          <span>Testado: {new Date(connection.lastTestedAt).toLocaleString("pt-BR")}</span>
        )}
        {seoPlugin && (
          <>
            {seoPlugin.hasYoast && <span style={{ color: "var(--accent)" }}>Yoast SEO detectado</span>}
            {seoPlugin.hasRankMath && <span style={{ color: "var(--accent)" }}>RankMath detectado</span>}
            {!seoPlugin.hasYoast && !seoPlugin.hasRankMath && <span>Nenhum plugin SEO detectado</span>}
          </>
        )}
      </div>

      {testMutation.isError && (
        <div style={{ fontSize: "12px", color: "#ef4444", marginBottom: "10px" }}>Erro: {testMutation.error.message}</div>
      )}

      <button
        onClick={handleTest}
        disabled={testMutation.isPending}
        className="btn-ghost"
        style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", opacity: testMutation.isPending ? 0.7 : 1 }}
      >
        {testMutation.isPending ? <Loader2 size={13} style={{ animation: "spin 1s linear infinite" }} /> : <TestTube size={13} />}
        {testMutation.isPending ? "Testando..." : "Testar Conexão"}
      </button>
    </div>
  );
}

// ─── New Connection Form ────────────────────────────────────────

function NewConnectionForm({ onCancel, showAlways }: { onCancel: () => void; showAlways?: boolean | null }) {
  const [siteId, setSiteId] = useState("");
  const [wpUrl, setWpUrl] = useState("");
  const [wpUser, setWpUser] = useState("");
  const [wpPassword, setWpPassword] = useState("");
  const [showForm, setShowForm] = useState(!showAlways);

  const utils = trpc.useUtils();
  const saveMutation = trpc.wpConnection.save.useMutation({
    onSuccess: () => {
      utils.wpConnection.listAll.invalidate();
      setWpUrl(""); setWpUser(""); setWpPassword(""); setSiteId("");
      setShowForm(false);
    },
  });

  const { data: plans } = trpc.contentPlan.list.useQuery();
  const sitesFromPlans = plans
    ?.filter((p) => p.siteId)
    .reduce((acc, p) => {
      if (p.siteId && !acc.find((s) => s.id === p.siteId)) {
        acc.push({ id: p.siteId, name: p.businessName || p.clientName || p.siteId.slice(0, 8) });
      }
      return acc;
    }, [] as { id: string; name: string }[]) ?? [];

  function handleSave() {
    if (!siteId || !wpUrl || !wpUser || !wpPassword) return;
    saveMutation.mutate({ siteId, wpUrl, wpUser, wpAppPassword: wpPassword });
  }

  if (showAlways && !showForm) {
    return (
      <button onClick={() => setShowForm(true)} className="btn-ghost" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", alignSelf: "flex-start" }}>
        <Plug size={14} /> Adicionar nova conexão
      </button>
    );
  }

  return (
    <div style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "20px 24px" }}>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "16px" }}>
        Nova Conexão WordPress
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "16px" }}>
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Site</label>
          <select value={siteId} onChange={(e) => setSiteId(e.target.value)} style={inp}>
            <option value="">Selecione um site...</option>
            {sitesFromPlans.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>URL do WordPress</label>
          <input type="url" value={wpUrl} onChange={(e) => setWpUrl(e.target.value)} placeholder="https://sitedocliente.com.br" style={inp} />
        </div>
        <div>
          <label style={labelStyle}>Usuário WordPress</label>
          <input type="text" value={wpUser} onChange={(e) => setWpUser(e.target.value)} placeholder="admin" style={inp} />
        </div>
        <div>
          <label style={labelStyle}>Application Password</label>
          <input type="password" value={wpPassword} onChange={(e) => setWpPassword(e.target.value)} placeholder="xxxx xxxx xxxx xxxx" style={inp} />
        </div>
      </div>
      {saveMutation.isError && (
        <div style={{ fontSize: "12px", color: "#ef4444", marginBottom: "12px" }}>Erro: {saveMutation.error.message}</div>
      )}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={handleSave}
          disabled={saveMutation.isPending || !siteId || !wpUrl || !wpUser || !wpPassword}
          className="btn-accent"
          style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", opacity: saveMutation.isPending || !siteId || !wpUrl || !wpUser || !wpPassword ? 0.5 : 1 }}
        >
          {saveMutation.isPending ? <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} /> : <Save size={14} />}
          {saveMutation.isPending ? "Salvando..." : "Salvar Conexão"}
        </button>
        <button onClick={() => { setShowForm(false); onCancel(); }} className="btn-ghost" style={{ fontSize: "13px" }}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

// ─── Integrations Tab ───────────────────────────────────────────

function IntegrationsTab() {
  const integrations = [
    { name: "Google Search Console", desc: "Acompanhe impressões, cliques e posições", badge: "Em breve" },
    { name: "Google Analytics", desc: "Monitore tráfego orgânico e comportamento", badge: "Em breve" },
    { name: "DataForSEO", desc: "Dados reais de volume e dificuldade de keywords", badge: "Configurar via ENV" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {integrations.map((item) => (
        <div key={item.name} style={{ background: "var(--bg-glass)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)" }}>{item.name}</p>
            <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>{item.desc}</p>
          </div>
          <span style={{ fontSize: "12px", padding: "4px 12px", borderRadius: "99px", background: "rgba(148,163,184,0.1)", color: "#94a3b8", border: "1px solid rgba(148,163,184,0.15)" }}>
            {item.badge}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Notifications Tab ──────────────────────────────────────────

function NotificationsTab() {
  const { data: workspace, isLoading } = trpc.workspaces.getMine.useQuery();
  const utils = trpc.useUtils();
  const updateMutation = trpc.workspaces.updateNotificationPrefs.useMutation({
    onSuccess: () => utils.workspaces.getMine.invalidate(),
  });

  if (isLoading) return <LoadingState />;

  const prefs = (workspace?.notificationPrefs || {}) as Record<string, boolean>;

  const notifications = [
    { key: "emailOnOnboardingComplete", label: "Onboarding completo", desc: "Receber email quando um cliente completar o questionário" },
    { key: "emailOnPlanGenerated", label: "Plano gerado", desc: "Receber email quando um plano de conteúdo for gerado" },
    { key: "emailOnProductionComplete", label: "Produção finalizada", desc: "Receber email quando a produção de conteúdo de um lote terminar" },
    { key: "emailOnPublicationComplete", label: "Publicação completa", desc: "Receber email quando páginas forem publicadas no WordPress" },
  ];

  function handleToggle(key: string, value: boolean) {
    updateMutation.mutate({ [key]: value } as Record<string, boolean>);
  }

  return (
    <div style={{ maxWidth: "600px" }}>
      <div className="glass" style={{ padding: "24px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "20px" }}>
          Notificações por Email
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {notifications.map((item) => {
            const isOn = prefs[item.key] !== false;
            return (
              <div key={item.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-primary)" }}>{item.label}</p>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>{item.desc}</p>
                </div>
                <button
                  onClick={() => handleToggle(item.key, !isOn)}
                  disabled={updateMutation.isPending}
                  style={{
                    width: "44px", height: "24px", borderRadius: "12px", border: "none",
                    background: isOn ? "var(--accent)" : "var(--bg-surface)",
                    position: "relative", cursor: "pointer", transition: "background 0.2s", flexShrink: 0,
                    boxShadow: isOn ? "none" : "inset 0 0 0 1px var(--border)",
                  }}
                >
                  <div style={{
                    width: "18px", height: "18px", borderRadius: "50%",
                    background: isOn ? "var(--text-on-dark)" : "var(--text-muted)",
                    position: "absolute", top: "3px",
                    left: isOn ? "23px" : "3px",
                    transition: "left 0.2s",
                  }} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Loading State ──────────────────────────────────────────────

function LoadingState() {
  return (
    <div style={{ padding: "40px", textAlign: "center", color: "var(--text-secondary)" }}>
      <Loader2 size={20} style={{ animation: "spin 1s linear infinite", margin: "0 auto 8px" }} />
      Carregando...
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
