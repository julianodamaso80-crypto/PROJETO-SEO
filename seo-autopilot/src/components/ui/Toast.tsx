"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { X } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue>({ toast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

let nextId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, type: ToastType = "info") => {
    const id = ++nextId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const borderColor: Record<ToastType, string> = {
    success: "#00ff88",
    error: "#ef4444",
    info: "#3b82f6",
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        style={{
          position: "fixed",
          top: "16px",
          right: "16px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          pointerEvents: "none",
        }}
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className="animate-slide-in-right"
            style={{
              pointerEvents: "auto",
              background: "rgba(24,24,27,0.95)",
              backdropFilter: "blur(12px)",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderLeft: `3px solid ${borderColor[t.type]}`,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              maxWidth: "380px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <span style={{ fontSize: "14px", color: "#f0f0f8", flex: 1 }}>{t.message}</span>
            <button
              onClick={() => dismiss(t.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(240,240,248,0.4)",
                padding: "2px",
                display: "flex",
                flexShrink: 0,
              }}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
