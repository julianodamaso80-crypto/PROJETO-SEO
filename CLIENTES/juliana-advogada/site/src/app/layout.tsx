import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_URL, ORG } from "@/lib/site";

const schemaEscritorio = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#escritorio`,
  name: ORG.name,
  legalName: ORG.legalName,
  url: SITE_URL,
  image: `${SITE_URL}/brand/juliana-cunha.jpg`,
  telephone: ORG.phone,
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "Brasil" },
  address: {
    "@type": "PostalAddress",
    streetAddress: ORG.street,
    addressLocality: ORG.city,
    addressRegion: ORG.state,
    postalCode: ORG.postalCode,
    addressCountry: ORG.country,
  },
  founder: {
    "@type": "Person",
    name: "Juliana Cunha",
    jobTitle: "Advogada",
    knowsAbout: ["Direito do Trabalho", "Direito Previdenciário"],
  },
  knowsLanguage: "pt-BR",
  serviceType: ["Direito do Trabalho", "Direito Previdenciário"],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DDC LAW | Direito Trabalhista e Previdenciário",
    template: "%s | DDC LAW",
  },
  description: "Advocacia especializada em Direito do Trabalho e Previdenciário. Orientação jurídica com clareza e dedicação.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "DDC LAW",
    locale: "pt_BR",
    url: "/",
    title: "DDC LAW | Direito Trabalhista e Previdenciário",
    description: "Advocacia especializada em Direito do Trabalho e Previdenciário. Orientação jurídica com clareza e dedicação.",
    images: ["/brand/juliana-cunha.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaEscritorio) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
