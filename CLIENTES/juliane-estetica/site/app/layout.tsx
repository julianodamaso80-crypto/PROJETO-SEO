import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollReveal } from "./components/ScrollReveal";
import WhatsAppFloat from "./components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default:
      "JS Estética Avançada | Harmonização Facial e Corporal na Barra da Tijuca",
    template: "%s | JS Estética Avançada",
  },
  description:
    "JS Estetica Avancada — Dra. Juliane Elaine, Biomedica CRBM 05033 RJ. Harmonizacao facial, botox, preenchimento, bioestimuladores de colageno e estetica intima. Barra da Tijuca e Bangu, Rio de Janeiro.",
  keywords: [
    "estetica avancada rio de janeiro",
    "harmonizacao facial rj",
    "botox barra da tijuca",
    "bioestimuladores de colageno rj",
    "estetica intima rj",
    "preenchimento labial rj",
    "JS Estetica Avancada",
    "Dra Juliane Elaine",
  ],
  authors: [{ name: "JS Estetica Avancada" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <ScrollReveal />
        <main className="flex-1" style={{ paddingTop: "var(--header-h)" }}>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
