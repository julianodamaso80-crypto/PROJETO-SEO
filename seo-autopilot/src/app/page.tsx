import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
          S
        </div>
        <h1 className="mt-6 text-4xl font-bold text-gray-900">SEO Autopilot</h1>
        <p className="mt-3 text-lg text-gray-500">
          Descubra, gere e publique conteudo SEO com IA
        </p>
        <div className="mt-8 flex gap-3 justify-center">
          <a
            href="/sign-in"
            className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Entrar
          </a>
          <a
            href="/sign-up"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Criar Conta
          </a>
        </div>
      </div>
    </div>
  );
}
