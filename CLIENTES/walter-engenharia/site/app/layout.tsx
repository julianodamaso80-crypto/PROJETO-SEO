import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "WSSJ Engenharia | Construção Civil, Reformas e Manutenção no RJ",
    template: "%s | WSSJ Engenharia",
  },
  description:
    "WSSJ Serviços LTDA — empresa de engenharia civil no Rio de Janeiro especializada em construção, reformas, manutenção predial e residencial. Mais de 5 anos de experiência com credencial CREA. Solicite seu orçamento.",
  keywords: [
    "engenharia civil rio de janeiro",
    "construção civil rj",
    "reforma residencial rj",
    "manutenção predial rj",
    "empresa de engenharia rj",
    "WSSJ Engenharia",
  ],
  authors: [{ name: "WSSJ Serviços LTDA" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-h)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
