export interface BlogPost {
  slug: string;
  title: string;
  category:
    | "Harmonização Facial"
    | "Harmonização Corporal"
    | "Harmonização Íntima"
    | "Skincare"
    | "Dúvidas";
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  keywords: string[];
}
