import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "var(--bg-body)" }}>
      <Sidebar />
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          background: "var(--bg-cream)",
          padding: "32px",
          position: "relative",
        }}
      >
        {children}
      </main>
    </div>
  );
}
