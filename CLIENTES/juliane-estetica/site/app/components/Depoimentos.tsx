"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { DEPOIMENTOS, type Depoimento } from "../content/depoimentos";

const FONTE_ICON: Record<Depoimento["fonte"], string> = {
  WhatsApp: "💬",
  Instagram: "📷",
  Direct: "✉️",
};

export default function Depoimentos({ limit }: { limit?: number }) {
  const lista = limit ? DEPOIMENTOS.slice(0, limit) : DEPOIMENTOS;
  const [aberto, setAberto] = useState<string | null>(null);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aberto]);

  const abertoObj = aberto ? lista.find((d) => d.id === aberto) : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lista.map((d) => (
          <div
            key={d.id}
            className="card relative flex flex-col h-full"
            style={{ background: "var(--white)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: "var(--pink)" }}
              >
                {FONTE_ICON[d.fonte]}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="font-semibold text-sm truncate"
                  style={{ color: "var(--text-primary)" }}
                >
                  {d.nome}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {d.fonte}
                  {d.procedimento ? ` · ${d.procedimento}` : ""}
                </div>
              </div>
            </div>

            {d.destaque && (
              <p
                className="font-serif text-lg italic leading-snug mb-3"
                style={{ color: "var(--rose)" }}
              >
                &ldquo;{d.destaque}&rdquo;
              </p>
            )}

            <p
              className="text-sm leading-relaxed flex-1 line-clamp-5"
              style={{ color: "var(--text-body)" }}
            >
              {d.texto}
            </p>

            <button
              onClick={() => setAberto(d.id)}
              className="mt-4 text-xs font-semibold self-start uppercase tracking-wider"
              style={{ color: "var(--rose)" }}
            >
              Ver print original →
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {abertoObj && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(26,26,26,0.92)" }}
          onClick={() => setAberto(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setAberto(null);
            }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
            style={{ background: "var(--white)", color: "var(--text-primary)" }}
            aria-label="Fechar"
          >
            ×
          </button>
          <div
            className="relative w-full max-w-2xl"
            style={{ height: "85vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={abertoObj.printSrc}
              alt={`Depoimento de ${abertoObj.nome}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
