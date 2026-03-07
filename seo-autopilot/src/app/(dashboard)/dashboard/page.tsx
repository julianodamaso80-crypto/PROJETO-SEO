import { FileText, Zap, Globe, Send } from "lucide-react";

const stats = [
  {
    label: "Total de Artigos",
    value: "0",
    icon: FileText,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    label: "Creditos Restantes",
    value: "0",
    icon: Zap,
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    label: "Sites Conectados",
    value: "0",
    icon: Globe,
    color: "bg-purple-500/10 text-purple-400",
  },
  {
    label: "Artigos Publicados",
    value: "0",
    icon: Send,
    color: "bg-amber-500/10 text-amber-400",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Visao geral da sua performance de SEO
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-neutral-800 bg-[#1a1a1a] p-5"
          >
            <div className="flex items-center gap-3">
              <div className={`rounded-lg p-2 ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-neutral-400">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Articles */}
      <div className="rounded-xl border border-neutral-800 bg-[#1a1a1a]">
        <div className="flex items-center justify-between border-b border-neutral-800 p-5">
          <h2 className="text-lg font-semibold text-white">
            Artigos Recentes
          </h2>
        </div>
        <div className="p-8 text-center text-sm text-neutral-500">
          Nenhum artigo ainda. Descubra keywords e gere seu primeiro artigo.
        </div>
      </div>
    </div>
  );
}
