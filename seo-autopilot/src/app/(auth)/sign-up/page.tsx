"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const password = formData.get("password") as string;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, whatsapp, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao criar conta");
        setLoading(false);
        return;
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Conta criada, mas erro ao entrar. Tente fazer login.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("Erro ao criar conta. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f]">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-[#1a1a1a] p-8">
        <div className="mb-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
            S
          </div>
          <h1 className="mt-4 text-2xl font-bold text-white">Criar Conta</h1>
          <p className="mt-1 text-sm text-neutral-400">
            Comece a gerar artigos SEO com IA
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-300">
              Nome completo
            </label>
            <input
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-300">
              WhatsApp
            </label>
            <input
              name="whatsapp"
              type="tel"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
              placeholder="(11) 99999-9999"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-300">
              Senha
            </label>
            <input
              name="password"
              type="password"
              required
              minLength={6}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
              placeholder="Minimo 6 caracteres"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {loading ? "Criando conta..." : "Criar Conta"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-400">
          Ja tem conta?{" "}
          <Link href="/sign-in" className="text-blue-400 hover:text-blue-300">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
