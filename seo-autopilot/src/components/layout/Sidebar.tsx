"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  FileText,
  Settings,
  CreditCard,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/discover", label: "Discover", icon: Search },
  { href: "/articles", label: "Articles", icon: FileText },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/billing", label: "Billing", icon: CreditCard },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-neutral-800 bg-[#0f0f0f]">
      {/* Logo */}
      <div className="flex h-14 items-center border-b border-neutral-800 px-6">
        <img src="/logo.svg" alt="SEO Inteligente" className="h-8 w-auto" />
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:bg-neutral-800/50 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Credits footer */}
      <div className="border-t border-neutral-800 p-4">
        <div className="rounded-lg bg-neutral-800/50 p-3">
          <p className="text-xs font-medium text-neutral-500">Creditos</p>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-lg font-semibold text-white">0</span>
            <span className="text-sm text-neutral-500">/ 0</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-neutral-700">
            <div
              className="h-1.5 rounded-full bg-emerald-500"
              style={{ width: "0%" }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
