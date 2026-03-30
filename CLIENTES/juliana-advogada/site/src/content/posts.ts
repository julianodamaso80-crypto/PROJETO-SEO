export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: "Trabalhista" | "Previdenciário";
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "acidente-de-trabalho-direitos",
    title: "Sofreu Acidente de Trabalho? Os 5 Direitos Que Sua Empresa Vai Tentar Esconder",
    metaTitle: "Acidente de Trabalho? 5 Direitos Que a Empresa Não Vai Te Contar",
    metaDescription: "Sofreu acidente no trabalho? A empresa tenta minimizar, mas você pode ter direito a até R$80 mil em indenização. Saiba como agir nas primeiras 48h.",
    excerpt: "A empresa é obrigada a emitir a CAT em 24h, você tem estabilidade de 12 meses, e a indenização pode passar de R$80 mil. Saiba exatamente o que fazer.",
    category: "Trabalhista",
    date: "2026-03-20",
    readTime: "8 min",
  },
  {
    slug: "trabalhou-sem-carteira-vinculo",
    title: "Trabalhou Sem Carteira Assinada? A Empresa Deve Cada Centavo",
    metaTitle: "Trabalhou Sem Carteira? Como Provar Vínculo e Receber Tudo",
    metaDescription: "Sem registro na carteira? A empresa deve FGTS, INSS, férias e 13º retroativos. Saiba como provar o vínculo e cobrar cada centavo.",
    excerpt: "3 em cada 10 trabalhadores brasileiros estão na informalidade. Se você é um deles, pode ter direito a milhares de reais em verbas retroativas.",
    category: "Trabalhista",
    date: "2026-03-18",
    readTime: "7 min",
  },
  {
    slug: "horas-extras-como-calcular",
    title: "Horas Extras Não Pagas? Veja Quanto a Empresa Deve",
    metaTitle: "Horas Extras: Como Calcular e Cobrar Até 5 Anos Retroativos",
    metaDescription: "Faz hora extra e não recebe? 2h por dia podem valer R$51 mil em 5 anos. Aprenda a calcular e saiba como cobrar da empresa.",
    excerpt: "2 horas extras por dia com salário de R$2.500 podem valer mais de R$51 mil em 5 anos. Aprenda a calcular e conheça os truques que as empresas usam.",
    category: "Trabalhista",
    date: "2026-03-15",
    readTime: "6 min",
  },
  {
    slug: "rescisao-indireta",
    title: "Rescisão Indireta: Você Pode 'Demitir' a Empresa e Receber Todos os Seus Direitos",
    metaTitle: "Rescisão Indireta: Como 'Demitir' a Empresa e Receber Tudo",
    metaDescription: "Empresa atrasa salário, não paga FGTS ou pratica assédio? Você pode sair e receber todos os direitos. Entenda a rescisão indireta.",
    excerpt: "Se a empresa atrasa salário, não recolhe FGTS ou pratica assédio, você pode aplicar a 'justa causa' nela. Conheça a rescisão indireta.",
    category: "Trabalhista",
    date: "2026-03-12",
    readTime: "7 min",
  },
  {
    slug: "auxilio-acidente-inss",
    title: "Auxílio-Acidente: O Benefício do INSS Que Você Pode Receber Junto Com o Salário",
    metaTitle: "Auxílio-Acidente: O Benefício do INSS Que 90% Não Conhece",
    metaDescription: "Teve acidente e ficou com sequela? O auxílio-acidente paga 50% do benefício JUNTO com seu salário. A maioria não pede — e perde dinheiro todo mês.",
    excerpt: "9 em cada 10 trabalhadores que teriam direito ao auxílio-acidente simplesmente não pedem. Valor de 50% do salário de benefício, pago junto com o salário.",
    category: "Previdenciário",
    date: "2026-03-10",
    readTime: "6 min",
  },
  {
    slug: "aposentadoria-por-invalidez",
    title: "Aposentadoria por Invalidez: O Guia Definitivo Para Quem Não Consegue Mais Trabalhar",
    metaTitle: "Aposentadoria por Invalidez: Doenças, Valor e Como Conseguir",
    metaDescription: "Não consegue mais trabalhar? A aposentadoria por invalidez garante renda vitalícia. Veja quais doenças dão direito e como passar na perícia.",
    excerpt: "Mais de 45% dos pedidos são negados pelo INSS. Mas a maioria pode ser revertida. Descubra quais doenças dão direito e como se preparar para a perícia.",
    category: "Previdenciário",
    date: "2026-03-08",
    readTime: "8 min",
  },
  {
    slug: "aposentadoria-negada-inss",
    title: "Aposentadoria Negada Pelo INSS? O Que Fazer Nos Próximos 30 Dias",
    metaTitle: "Aposentadoria Negada? 3 Passos Para Reverter a Decisão do INSS",
    metaDescription: "INSS negou sua aposentadoria? 41% das negativas são revertidas na Justiça. Descubra os 3 passos para conseguir seu benefício.",
    excerpt: "41% das negativas do INSS são revertidas quando o segurado recorre. Conheça os 3 caminhos para reverter e quanto pode receber de retroativo.",
    category: "Previdenciário",
    date: "2026-03-05",
    readTime: "7 min",
  },
  {
    slug: "pensao-por-morte",
    title: "Pensão por Morte: O Prazo de 180 Dias Pode Custar Milhares de Reais",
    metaTitle: "Pensão por Morte: Quem Tem Direito, Valor e Como Pedir",
    metaDescription: "Perdeu um familiar segurado do INSS? O prazo de 180 dias afeta o valor que você recebe. Saiba quem tem direito e como pedir sem perder dinheiro.",
    excerpt: "Se requerer após 180 dias do óbito, você perde o retroativo. Com benefício de R$2.000/mês, 6 meses são R$12 mil perdidos.",
    category: "Previdenciário",
    date: "2026-03-02",
    readTime: "7 min",
  },
  {
    slug: "periculosidade-insalubridade",
    title: "Adicional de Periculosidade e Insalubridade: O Dinheiro Que Pode Estar Faltando",
    metaTitle: "Periculosidade e Insalubridade: 30% a Mais no Salário",
    metaDescription: "Trabalha com risco ou agentes nocivos? O adicional de periculosidade paga 30% a mais. Descubra se você tem direito e como cobrar.",
    excerpt: "23 milhões de brasileiros trabalham expostos a riscos. Menos da metade recebe o adicional correto. Periculosidade paga 30% sobre o salário base.",
    category: "Trabalhista",
    date: "2026-02-28",
    readTime: "6 min",
  },
  {
    slug: "bpc-loas",
    title: "BPC/LOAS: Como Receber 1 Salário Mínimo do INSS Sem Nunca Ter Contribuído",
    metaTitle: "BPC/LOAS: 1 Salário Mínimo Sem Ter Contribuído ao INSS",
    metaDescription: "Idoso ou pessoa com deficiência em situação de baixa renda? O BPC paga R$1.518/mês sem precisar de contribuição. Veja se você tem direito.",
    excerpt: "Mais de 5 milhões de brasileiros já recebem o BPC. Não precisa de contribuição. R$1.518/mês para idosos 65+ e pessoas com deficiência em baixa renda.",
    category: "Previdenciário",
    date: "2026-02-25",
    readTime: "7 min",
  },
];
