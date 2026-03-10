"use client";

import { useSession, signOut } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex h-14 items-center justify-between border-b border-neutral-800 bg-[#0f0f0f] px-6">
      <div />
      <div className="flex items-center gap-4">
        {session?.user && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-neutral-300">
              {session.user.name}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="rounded-lg border border-neutral-700 px-3 py-1.5 text-xs text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
            >
              Sair
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
