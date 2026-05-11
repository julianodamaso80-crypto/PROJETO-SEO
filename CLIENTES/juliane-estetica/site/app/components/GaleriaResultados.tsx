"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { GALERIAS } from "../content/depoimentos";

export default function GaleriaResultados() {
  const [tab, setTab] = useState<typeof GALERIAS[number]["categoria"]>("harmonizacao-feminina");
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const ativa = GALERIAS.find((g) => g.categoria === tab)!;

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {GALERIAS.map((g) => {
          const ativo = g.categoria === tab;
          return (
            <button
              key={g.categoria}
              onClick={() => setTab(g.categoria)}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              style={{
                background: ativo ? "var(--rose)" : "var(--white)",
                color: ativo ? "var(--white)" : "var(--text-body)",
                border: `1px solid ${ativo ? "var(--rose)" : "var(--border)"}`,
                boxShadow: ativo ? "var(--shadow-sm)" : "none",
              }}
            >
              {g.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ativa.fotos.map((src, i) => (
          <button
            key={src}
            onClick={() => setLightbox(src)}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
            style={{ background: "var(--nude)", boxShadow: "var(--shadow-sm)" }}
            aria-label={`Ver foto ${i + 1} ampliada`}
          >
            <Image
              src={src}
              alt={`Antes e depois ${ativa.label} ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "linear-gradient(to top, rgba(26,26,26,0.7) 0%, rgba(26,26,26,0) 50%)",
              }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-wider pb-3 px-3 py-1.5 mb-3 rounded-full"
                style={{ background: "var(--white)", color: "var(--rose)" }}
              >
                Ver Ampliada
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(26,26,26,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
            style={{ background: "var(--white)", color: "var(--text-primary)" }}
            aria-label="Fechar"
          >
            ×
          </button>
          <div
            className="relative w-full max-w-4xl"
            style={{ height: "85vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt="Resultado ampliado"
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
