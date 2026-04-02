export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: "Trabalhista" | "Previdenciário";
  date: string;
  readTime: string;
  content: string;
}
