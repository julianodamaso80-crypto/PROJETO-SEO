import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user || !isAdmin(user.emailAddresses[0]?.emailAddress)) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-[#111] border-r border-white/10 p-6">
          <h1 className="text-xl font-bold text-purple-400 mb-8">
            ⚡ Admin
          </h1>
          <nav className="space-y-2">
            <Link
              href="/admin"
              className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/users"
              className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Usuarios
            </Link>
            <Link
              href="/admin/articles"
              className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Artigos
            </Link>
            <Link
              href="/admin/revenue"
              className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Receita
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
