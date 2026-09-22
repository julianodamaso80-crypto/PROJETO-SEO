import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Jurídico",
  description: "Artigos sobre direitos trabalhistas e benefícios do INSS, em linguagem clara e atualizada.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
