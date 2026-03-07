"use client";

import dynamic from "next/dynamic";

const UserButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.UserButton),
  { ssr: false, loading: () => <div className="h-8 w-8 rounded-full bg-neutral-700" /> }
);

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-neutral-800 bg-[#0f0f0f] px-6">
      <div />
      <div className="flex items-center gap-4">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-8 w-8",
            },
          }}
        />
      </div>
    </header>
  );
}
