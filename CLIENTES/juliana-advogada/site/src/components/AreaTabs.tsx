"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

interface Area {
  title: string;
  desc: string;
}

export function AreaTabs({
  trabalhista,
  previdenciario,
}: {
  trabalhista: Area[];
  previdenciario: Area[];
}) {
  const [active, setActive] = useState<"trab" | "prev">("trab");
  const gridRef = useRef<HTMLDivElement>(null);

  const items = active === "trab" ? trabalhista : previdenciario;

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    gsap.fromTo(el.children, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: "power2.out" });
  }, [active]);

  return (
    <div>
      {/* Tabs — centralizados */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "40px", flexWrap: "wrap", justifyContent: "center" }}>
        <button className={`area-tab ${active === "trab" ? "area-tab--active" : ""}`} onClick={() => setActive("trab")}>
          Trabalhista
        </button>
        <button className={`area-tab ${active === "prev" ? "area-tab--active" : ""}`} onClick={() => setActive("prev")}>
          Previdenciário
        </button>
      </div>

      {/* Cards */}
      <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "12px" }}>
        {items.map((a) => (
          <div key={a.title} className="card" style={{ padding: "28px 24px", textAlign: "center" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", lineHeight: 1.3 }}>
              {a.title}
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--text-body)" }}>
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
