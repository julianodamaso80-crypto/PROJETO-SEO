"use client";

import type { ReactNode } from "react";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ icon, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "var(--bg-sand-light)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
          color: "var(--text-muted)",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "18px",
          fontWeight: 600,
          color: "var(--text-primary)",
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "var(--text-secondary)",
          maxWidth: "400px",
          marginBottom: actionLabel ? "24px" : "0",
          fontSize: "14px",
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
      {actionLabel && onAction && (
        <button className="btn-accent" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
