"use client";

export function StatCardSkeleton() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <div className="shimmer" style={{ height: "36px", width: "36px", borderRadius: "10px", marginBottom: "12px" }} />
      <div className="shimmer" style={{ height: "28px", width: "60px", borderRadius: "6px", marginBottom: "8px" }} />
      <div className="shimmer" style={{ height: "14px", width: "80px", borderRadius: "4px", marginBottom: "4px" }} />
      <div className="shimmer" style={{ height: "12px", width: "60px", borderRadius: "4px" }} />
    </div>
  );
}

export function TableRowSkeleton({ cols = 5 }: { cols?: number }) {
  return (
    <tr style={{ borderBottom: "1px solid var(--border)" }}>
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} style={{ padding: "14px 20px" }}>
          <div className="shimmer" style={{ height: "16px", width: `${60 + Math.random() * 40}%`, borderRadius: "4px" }} />
        </td>
      ))}
    </tr>
  );
}

export function CardSkeleton() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "20px",
        padding: "24px",
      }}
    >
      <div className="shimmer" style={{ height: "18px", width: "70%", borderRadius: "4px", marginBottom: "12px" }} />
      <div className="shimmer" style={{ height: "14px", width: "90%", borderRadius: "4px", marginBottom: "8px" }} />
      <div className="shimmer" style={{ height: "14px", width: "50%", borderRadius: "4px" }} />
    </div>
  );
}
