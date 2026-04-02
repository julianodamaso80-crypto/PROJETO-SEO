"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Area {
  title: string;
  desc: string;
}

export function AreaCards({ items }: { items: Area[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>(".area-card");

    // Entrada escalonada com ScrollTrigger
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      }
    );

    // Hover — borda azul + glow + lift
    cards.forEach((card) => {
      const border = card.querySelector<HTMLElement>(".area-card__border");

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -6,
          scale: 1.02,
          boxShadow: "0 12px 32px rgba(16,52,89,0.25)",
          duration: 0.35,
          ease: "power2.out",
        });
        if (border) {
          gsap.to(border, {
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          });
        }
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          duration: 0.35,
          ease: "power2.out",
        });
        if (border) {
          gsap.to(border, {
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={gridRef}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "16px",
      }}
    >
      {items.map((a) => (
        <div
          key={a.title}
          className="area-card"
          style={{
            position: "relative",
            padding: "28px 24px",
            background: "var(--bg-card)",
            borderRadius: "var(--radius)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            cursor: "default",
            overflow: "hidden",
          }}
        >
          {/* Borda azul animada (aparece no hover) */}
          <div
            className="area-card__border"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              border: "2px solid var(--blue)",
              opacity: 0,
              pointerEvents: "none",
              boxShadow: "inset 0 0 12px rgba(16,52,89,0.15)",
            }}
          />

          <h3
            style={{
              fontFamily: "var(--font)",
              fontSize: "18px",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "8px",
              lineHeight: 1.3,
            }}
          >
            {a.title}
          </h3>
          <p style={{ fontSize: "16px", lineHeight: 1.65, color: "var(--text-body)" }}>
            {a.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
