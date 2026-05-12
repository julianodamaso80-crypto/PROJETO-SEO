"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type { Galeria } from "../content/depoimentos";

type Props = {
  galeria: Galeria;
  /** Texto exibido como nome da paciente. Default: "Paciente". */
  pacienteLabel?: string;
};

export default function CarrosselAntesDepois({ galeria, pacienteLabel = "Paciente" }: Props) {
  const total = galeria.fotos.length;
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox && e.key === "Escape") {
        setLightbox(false);
        return;
      }
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, lightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const fotoAtual = galeria.fotos[idx];
  const numeroFormatado = String(idx + 1).padStart(2, "0");

  return (
    <div className="reveal">
      {/* Cabeçalho do carrossel */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h3
          className="font-serif text-2xl md:text-3xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {galeria.label}
        </h3>
        <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
          <span>todos os procedimentos respeitam sigilo e consentimento</span>
        </div>
      </div>

      {/* Card carrossel */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "var(--nude)",
          borderRadius: "var(--radius-lg)",
          padding: "20px",
        }}
      >
        {/* Track */}
        <div className="relative">
          {/* Top row: tag + counter */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="inline-flex items-center px-3 py-1 text-xs font-medium tracking-wide rounded-md"
              style={{
                background: "var(--white)",
                color: "var(--text-primary)",
                border: "1px solid var(--border)",
              }}
            >
              antes/depois
            </span>
            <span
              className="inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-semibold"
              style={{
                background: "var(--rose)",
                color: "var(--white)",
              }}
            >
              {numeroFormatado}
            </span>
          </div>

          {/* Imagem */}
          <button
            onClick={() => setLightbox(true)}
            className="relative w-full block overflow-hidden rounded-lg cursor-zoom-in"
            style={{ aspectRatio: "820 / 1024", background: "var(--surface)" }}
            aria-label="Ampliar imagem"
          >
            <Image
              src={fotoAtual}
              alt={`${galeria.label} antes e depois ${numeroFormatado}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority={idx === 0}
            />
          </button>

          {/* Footer: nome paciente + setas */}
          <div className="flex items-center justify-between mt-5 gap-4">
            <div className="min-w-0 flex-1">
              <div
                className="font-serif text-xl font-bold truncate"
                style={{ color: "var(--text-primary)" }}
              >
                {pacienteLabel} {numeroFormatado}
              </div>
              <div className="text-sm truncate" style={{ color: "var(--text-muted)" }}>
                {galeria.procedimento}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={prev}
                aria-label="Anterior"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "var(--white)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                }}
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Próximo"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "var(--rose)",
                  color: "var(--white)",
                  border: "1px solid var(--rose)",
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnails strip (desktop) */}
        {total > 1 && (
          <div className="hidden md:flex gap-2 mt-6 overflow-x-auto pb-2">
            {galeria.fotos.map((src, i) => (
              <button
                key={src}
                onClick={() => setIdx(i)}
                className="relative shrink-0 w-16 h-20 rounded overflow-hidden transition-all"
                style={{
                  border: i === idx ? "2px solid var(--rose)" : "2px solid transparent",
                  opacity: i === idx ? 1 : 0.6,
                }}
                aria-label={`Ir para foto ${i + 1}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(26,26,26,0.92)" }}
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(false);
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
              src={fotoAtual}
              alt={`${galeria.label} ampliada`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
