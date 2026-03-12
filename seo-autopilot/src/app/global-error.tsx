"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body
        style={{
          background: "#09090b",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          margin: 0,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "400px", padding: "40px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#00ff88",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "20px",
              color: "#000",
              margin: "0 auto 24px",
              lineHeight: "48px",
            }}
          >
            S
          </div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            Algo deu errado
          </h2>
          <p
            style={{
              color: "#a1a1aa",
              fontSize: "14px",
              lineHeight: 1.6,
              marginBottom: "24px",
            }}
          >
            Estamos cientes do problema e trabalhando para resolver.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#00ff88",
              color: "#000",
              border: "none",
              padding: "12px 28px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Tentar Novamente
          </button>
        </div>
      </body>
    </html>
  );
}
