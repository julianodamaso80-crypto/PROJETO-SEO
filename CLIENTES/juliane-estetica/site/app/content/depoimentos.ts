export type Depoimento = {
  id: string;
  nome: string;
  fonte: "WhatsApp" | "Instagram" | "Direct";
  texto: string;
  destaque?: string;
  printSrc: string;
  procedimento?: string;
};

export const DEPOIMENTOS: Depoimento[] = [
  {
    id: "01",
    nome: "Paciente Barra da Tijuca",
    fonte: "WhatsApp",
    texto:
      "Boa tarde, estou passando aqui pra deixar meu feedback. Simplesmente estou apaixonada por tudo, desde o atendimento e o espaço tanto ao método de trabalho da equipe. Foi minha primeira vez de muitos outros procedimentos que irei realizar. Super indico a clínica e os procedimentos que são de qualidade. Obrigada Dra Juliane!",
    destaque: "Simplesmente estou apaixonada por tudo.",
    printSrc: "/depoimentos/feedback-01.jpg",
  },
  {
    id: "02",
    nome: "Paciente Harmonização Facial",
    fonte: "WhatsApp",
    texto:
      "Suas mãos de fada elevaram minha autoestima de uma forma que nunca me senti assim. Mas eu tô me sentindo bonita, vc devolveu a minha felicidade interna que vc nem imagina. Obrigada ❤️ Mas isso é pra te lembrar o quanto seu trabalho é importante na vida das pessoas. Vc está mudando a minha com o seu trabalho e sou agradecida por isso ❤️",
    destaque: "Suas mãos de fada elevaram minha autoestima.",
    printSrc: "/depoimentos/feedback-02.jpg",
    procedimento: "Harmonização Facial",
  },
  {
    id: "03",
    nome: "@janaojeda",
    fonte: "Instagram",
    texto:
      "Parabéns pra minha biomédica preferida! ❤️ Amo seu trabalho Ju! Esse ano me devolveu uns 5 anos 😂😂😂 Que tenha muita saúde pra realizar muitas e muitas coisas com sua profissão! 😍",
    destaque: "Esse ano me devolveu uns 5 anos.",
    printSrc: "/depoimentos/feedback-03.jpg",
  },
  {
    id: "04",
    nome: "Paciente Preenchimento Labial",
    fonte: "Direct",
    texto:
      "NOSSAAAAAAA PERFEITA. Amiga, eu amei o resultado! Perfeito e incrível. Você é uma profissional maravilhosa, cuidadosa e ainda psicóloga. Eu sou super fã do seu trabalho! Obrigada por salvar a minha vida 🤍✨ Você não é Jesus mas fez um milagre incrível na minha boca. Até ano que vem!",
    destaque: "Fez um milagre incrível na minha boca.",
    printSrc: "/depoimentos/feedback-04.jpg",
    procedimento: "Preenchimento Labial",
  },
  {
    id: "05",
    nome: "Paciente Botox + Preenchimento",
    fonte: "WhatsApp",
    texto:
      "Ju, bom dia! Cada dia que passa os resultados estão bem melhores. O botox ficou perfeito, o bigode nem se fala. A boca diminuiu bastante porém ficou bicudinha e linda. Estou amando. Muito obrigada.",
    destaque: "Cada dia que passa os resultados estão bem melhores.",
    printSrc: "/depoimentos/feedback-05.jpg",
    procedimento: "Botox + Preenchimento",
  },
  {
    id: "06",
    nome: "@carlasoares____",
    fonte: "Instagram",
    texto:
      "Eu fiquei apaixonada pelo resultado. Sou fã do seu trabalho consciente, cuidadoso e impecável. Indico de olhos fechados, pois ela além de se preocupar com o que o paciente quer, ela também trás o equilíbrio do que ele precisa, entregando um resultado único e perfeito. Obrigada, amiga! ❤️",
    destaque: "Trabalho consciente, cuidadoso e impecável.",
    printSrc: "/depoimentos/feedback-06.jpg",
  },
  {
    id: "07",
    nome: "@aline_matede",
    fonte: "Instagram",
    texto:
      "Tô me amando mais! Eu amei tudo e foi além das minhas expectativas! Sem contar o carinho e o cuidado em todo procedimento 😍 Muito obrigada, meu amor ❤️",
    destaque: "Foi além das minhas expectativas.",
    printSrc: "/depoimentos/feedback-07.jpg",
  },
];

export type Galeria = {
  key: string;
  label: string;
  procedimento: string;
  fotos: string[];
};

function fotos(prefix: string, total: number, exts: Record<number, string> = {}): string[] {
  return Array.from({ length: total }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    const ext = exts[i + 1] ?? "jpg";
    return `/resultados/${prefix}-${n}.${ext}`;
  });
}

export const GALERIAS: Galeria[] = [
  {
    key: "harmonizacao-feminina",
    label: "Harmonização Facial Feminina",
    procedimento: "Harmonização Facial",
    fotos: fotos("harmonizacao-feminina", 13, { 10: "png" }),
  },
  {
    key: "harmonizacao-masculina",
    label: "Harmonização Facial Masculina",
    procedimento: "Harmonização Facial",
    fotos: fotos("harmonizacao-masculina", 7, { 1: "png", 3: "png", 4: "png" }),
  },
  {
    key: "gluteos",
    label: "Gluteoplastia Não Cirúrgica",
    procedimento: "Gluteoplastia",
    fotos: fotos("gluteos", 7),
  },
  {
    key: "botox",
    label: "Botox (Toxina Botulínica)",
    procedimento: "Botox",
    fotos: fotos("botox", 4, { 1: "png", 2: "png", 3: "png", 4: "png" }),
  },
  {
    key: "labios",
    label: "Preenchimento Labial",
    procedimento: "Preenchimento Labial",
    fotos: fotos("labios", 5),
  },
  {
    key: "rinomodelacao",
    label: "Rinomodelação",
    procedimento: "Rinomodelação",
    fotos: fotos("rinomodelacao", 3, { 1: "png", 2: "png" }),
  },
  {
    key: "perfiloplastia",
    label: "Perfiloplastia",
    procedimento: "Perfiloplastia",
    fotos: fotos("perfiloplastia", 2),
  },
];

// Mapa slug do servico (services.ts) -> chaves de galerias a exibir, em ordem.
export const GALERIAS_POR_SLUG: Record<string, string[]> = {
  "harmonizacao-facial": ["harmonizacao-feminina", "harmonizacao-masculina"],
  "gluteoplastia-nao-cirurgica": ["gluteos"],
  "botox": ["botox"],
  "preenchimento-labial": ["labios"],
  "rinomodelacao": ["rinomodelacao"],
  "perfiloplastia": ["perfiloplastia"],
};

export function getGaleriasParaSlug(slug: string): Galeria[] {
  const keys = GALERIAS_POR_SLUG[slug];
  if (!keys) return [];
  return keys
    .map((k) => GALERIAS.find((g) => g.key === k))
    .filter((g): g is Galeria => !!g);
}
