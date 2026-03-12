"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  LayoutDashboard,
  Users,
  FileStack,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/clients", label: "Clientes", icon: Users },
  { href: "/plans", label: "Planos", icon: FileStack },
  { href: "/articles", label: "Artigos", icon: FileText },
  { href: "/settings", label: "Configurações", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          top: "16px",
          left: "16px",
          zIndex: 60,
          padding: "8px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "10px",
          cursor: "pointer",
          color: "#fff",
          display: "none",
        }}
        className="sidebar-hamburger"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="sidebar-overlay"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            background: "rgba(0,0,0,0.6)",
            display: "none",
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar-aside ${isOpen ? "sidebar-open" : ""}`}
        style={{
          width: "240px",
          height: "100vh",
          background: "var(--bg-deep)",
          borderRight: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "transform 0.2s ease",
        }}
      >
        {/* Logo */}
        <div style={{ padding: "20px 20px 16px", display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "32px", height: "32px", borderRadius: "8px", background: "var(--accent)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "16px", color: "#000", flexShrink: 0,
            }}
          >
            S
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", color: "var(--text-primary)" }}>
            SEO Inteligente
          </span>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "8px 12px" }}>
          {navItems.map((item, i) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="animate-slide-in"
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "10px 12px", borderRadius: "10px", fontSize: "14px", fontWeight: 500,
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  background: isActive ? "var(--accent-dim)" : "transparent",
                  borderLeft: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                  textDecoration: "none", transition: "all 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
                  marginBottom: "4px", position: "relative",
                  animationDelay: `${i * 0.05}s`, opacity: 0,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "var(--bg-glass)";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }
                }}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User info */}
        <div style={{ padding: "12px" }}>
          <div
            className="glass"
            style={{ padding: "14px", display: "flex", alignItems: "center", gap: "10px", cursor: "default" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "none"; }}
          >
            <div
              style={{
                width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent-dim)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--accent)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px", flexShrink: 0,
              }}
            >
              {session?.user?.name?.[0]?.toUpperCase() || "U"}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {session?.user?.name || "Usuário"}
              </div>
              <div style={{ fontSize: "11px", color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {session?.user?.email || ""}
              </div>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              title="Sair"
              style={{
                background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)",
                padding: "4px", borderRadius: "6px", transition: "color 0.2s ease", display: "flex", alignItems: "center",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              <LogOut size={15} />
            </button>
          </div>
        </div>
      </aside>

      <style>{`
        @media (max-width: 1023px) {
          .sidebar-hamburger { display: flex !important; }
          .sidebar-overlay { display: block !important; }
          .sidebar-aside {
            position: fixed !important;
            left: 0;
            top: 0;
            transform: translateX(-100%);
          }
          .sidebar-aside.sidebar-open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
