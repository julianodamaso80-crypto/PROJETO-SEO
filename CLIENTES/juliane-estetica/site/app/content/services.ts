export type ServiceCategory =
  | "facial"
  | "corporal"
  | "intima"
  | "pele"
  | "anti-aging";

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  keywords: string[];
  icon: string;
  faq: { q: string; a: string }[];
}

export const CATEGORIES: Record<
  ServiceCategory,
  { label: string; slug: string }
> = {
  facial: { label: "Harmonização Facial", slug: "facial" },
  corporal: { label: "Procedimentos Corporais", slug: "corporal" },
  intima: { label: "Estética Íntima", slug: "intima" },
  pele: { label: "Tratamentos de Pele", slug: "pele" },
  "anti-aging": { label: "Anti-Aging", slug: "anti-aging" },
};

export const SERVICES: Service[] = [
  // ═══════════════════════════════════════════════════
  // HARMONIZAÇÃO FACIAL (5)
  // ═══════════════════════════════════════════════════
  {
    slug: "harmonizacao-facial",
    title: "Harmonização Facial",
    category: "facial",
    categoryLabel: "Harmonização Facial",
    shortDesc:
      "Conjunto de procedimentos para equilibrar proporções faciais, realçando sua beleza natural com resultados harmônicos.",
    fullDesc: `A Harmonização Facial é um conjunto de procedimentos estéticos minimamente invasivos que tem como objetivo equilibrar as proporções do rosto, respeitando a individualidade de cada paciente. Na JS Estética Avançada, a Dra. Juliane Elaine realiza uma avaliação completa da face, considerando simetria, proporção e harmonia entre os terços faciais.

O protocolo pode incluir preenchimento com ácido hialurônico, toxina botulínica, bioestimuladores de colágeno e skinbooster, sempre de forma personalizada. Cada plano de tratamento é desenhado após análise detalhada, levando em conta as queixas do paciente, anatomia facial e expectativas realistas.

A Dra. Juliane possui pós-graduação em Harmonização Orofacial e experiência internacional na Europa, o que garante domínio das técnicas mais modernas e seguras do mercado. Todos os produtos utilizados são aprovados pela ANVISA e de marcas reconhecidas mundialmente.

O procedimento é realizado com anestesia tópica ou bloqueio local, garantindo conforto durante toda a sessão. Os resultados são naturais e progressivos, com durabilidade de 12 a 24 meses dependendo do protocolo escolhido.`,
    keywords: [
      "harmonização facial rio de janeiro",
      "harmonização facial barra da tijuca",
      "harmonização facial bangu",
      "harmonização orofacial rj",
      "procedimento facial natural",
    ],
    icon: "✨",
    faq: [
      {
        q: "A harmonização facial dói?",
        a: "Utilizamos anestesia tópica e/ou bloqueio local para garantir conforto total durante o procedimento. A maioria dos pacientes relata apenas uma leve pressão.",
      },
      {
        q: "Quanto tempo dura o resultado da harmonização facial?",
        a: "Os resultados duram de 12 a 24 meses, dependendo do protocolo utilizado, metabolismo do paciente e cuidados pós-procedimento.",
      },
      {
        q: "A harmonização facial fica natural?",
        a: "Sim. Nossa filosofia é realçar a beleza natural do paciente, respeitando suas proporções e individualidade. O resultado é harmonioso e sutil.",
      },
      {
        q: "Quanto custa a harmonização facial?",
        a: "O valor varia conforme o protocolo personalizado. Agende sua avaliação gratuita para receber um plano de tratamento com valores detalhados.",
      },
    ],
  },
  {
    slug: "preenchimento-labial",
    title: "Preenchimento Labial",
    category: "facial",
    categoryLabel: "Harmonização Facial",
    shortDesc:
      "Volume e contorno labial com ácido hialurônico, para lábios mais definidos e proporcionais ao rosto.",
    fullDesc: `O Preenchimento Labial com ácido hialurônico é um dos procedimentos mais procurados na JS Estética Avançada. A técnica permite corrigir assimetrias, definir o contorno dos lábios, aumentar o volume de forma natural e suavizar as linhas periorais (código de barras).

A Dra. Juliane Elaine utiliza ácido hialurônico de alta qualidade, com diferentes densidades conforme a necessidade de cada região dos lábios. A aplicação é feita com cânulas ou agulhas finas, após anestesia tópica, garantindo precisão e conforto.

O resultado é imediato, com aspecto natural e proporcional ao rosto. Os lábios ficam mais hidratados, definidos e com volume harmonioso. O procedimento dura em média 30 minutos e a recuperação é rápida, com possível inchaço leve nos primeiros dias.

A durabilidade do preenchimento labial varia de 6 a 12 meses, dependendo do produto utilizado e do metabolismo individual. Retoques periódicos mantêm o resultado sempre bonito e natural.`,
    keywords: [
      "preenchimento labial rj",
      "preenchimento labial barra da tijuca",
      "aumento de lábios rio de janeiro",
      "ácido hialurônico lábios rj",
      "preenchimento labial natural",
    ],
    icon: "💋",
    faq: [
      {
        q: "O preenchimento labial dói?",
        a: "Aplicamos anestesia tópica antes do procedimento, tornando-o bastante confortável. Alguns produtos já contêm lidocaína na formulação.",
      },
      {
        q: "Quanto tempo dura o preenchimento labial?",
        a: "De 6 a 12 meses, dependendo do produto utilizado e do metabolismo do paciente. Retoques periódicos são recomendados.",
      },
      {
        q: "O resultado fica natural?",
        a: "Absolutamente. Nossa técnica prioriza proporção e naturalidade, respeitando a harmonia do rosto como um todo.",
      },
    ],
  },
  {
    slug: "botox",
    title: "Botox (Toxina Botulínica)",
    category: "facial",
    categoryLabel: "Harmonização Facial",
    shortDesc:
      "Suavização de rugas e linhas de expressão com toxina botulínica, para uma aparência descansada e rejuvenescida.",
    fullDesc: `O Botox, ou aplicação de toxina botulínica, é o procedimento estético mais realizado no mundo. Na JS Estética Avançada, a Dra. Juliane Elaine utiliza a técnica para suavizar rugas dinâmicas da testa, glabela (entre as sobrancelhas), pés de galinha e outras regiões.

A toxina botulínica age relaxando temporariamente os músculos responsáveis pelas linhas de expressão, resultando em uma aparência mais descansada, jovem e natural. A aplicação é rápida (15 a 20 minutos), com agulhas ultrafinas que causam desconforto mínimo.

Além do tratamento estético, o Botox pode ser utilizado para tratar hiperidrose (suor excessivo), bruxismo e sorriso gengival. A Dra. Juliane avalia cada caso individualmente para determinar os pontos de aplicação e a dosagem ideal.

Os resultados começam a aparecer entre 3 e 7 dias após a aplicação, com efeito máximo em 15 dias. A durabilidade é de 4 a 6 meses, sendo recomendada a manutenção periódica para resultados contínuos.`,
    keywords: [
      "botox rio de janeiro",
      "toxina botulínica rj",
      "botox barra da tijuca",
      "botox bangu",
      "aplicação botox rj",
      "rugas testa tratamento",
    ],
    icon: "💉",
    faq: [
      {
        q: "O Botox dói?",
        a: "A aplicação é feita com agulhas ultrafinas e o desconforto é mínimo. Caso necessário, utilizamos anestesia tópica para maior conforto.",
      },
      {
        q: "O Botox congela o rosto?",
        a: "Não. Com a técnica correta e dosagem adequada, o resultado é natural, preservando as expressões faciais e suavizando apenas as rugas indesejadas.",
      },
      {
        q: "Com que frequência devo reaplicar o Botox?",
        a: "A recomendação é a cada 4 a 6 meses. Com o tempo e tratamento contínuo, os intervalos podem aumentar.",
      },
    ],
  },
  {
    slug: "rinomodelacao",
    title: "Rinomodelação",
    category: "facial",
    categoryLabel: "Harmonização Facial",
    shortDesc:
      "Correção do contorno nasal sem cirurgia, usando preenchedores para harmonizar o perfil do rosto.",
    fullDesc: `A Rinomodelação é um procedimento não cirúrgico que permite corrigir pequenas imperfeições no nariz, como irregularidades no dorso, ponta caída, assimetrias e desvios leves. Na JS Estética Avançada, utilizamos ácido hialurônico de alta densidade para remodelar o contorno nasal de forma rápida e segura.

O procedimento é ideal para pacientes que desejam melhorar a aparência do nariz sem passar por uma rinoplastia cirúrgica. A Dra. Juliane Elaine avalia cuidadosamente a anatomia nasal, considerando a proporção com os demais elementos do rosto.

A aplicação é feita com cânulas, o que reduz significativamente o risco de hematomas e complicações. O procedimento dura cerca de 20 minutos, com resultado imediato e natural. A recuperação é rápida, sem necessidade de afastamento das atividades diárias.

Os resultados duram de 12 a 18 meses. É importante ressaltar que a rinomodelação não reduz o tamanho do nariz, mas sim harmoniza seu formato, criando a ilusão óptica de um nariz mais bonito e proporcional.`,
    keywords: [
      "rinomodelação rj",
      "rinomodelação sem cirurgia rio de janeiro",
      "rinomodelação barra da tijuca",
      "correção nasal sem cirurgia",
      "preenchimento nasal rj",
    ],
    icon: "👃",
    faq: [
      {
        q: "A rinomodelação dói?",
        a: "Utilizamos anestesia tópica e a aplicação é feita com cânulas, tornando o procedimento bastante confortável.",
      },
      {
        q: "Quanto tempo dura o resultado?",
        a: "De 12 a 18 meses, dependendo do produto utilizado e das características individuais do paciente.",
      },
      {
        q: "A rinomodelação substitui a rinoplastia?",
        a: "A rinomodelação é indicada para pequenas correções e harmonização. Casos que necessitam redução óssea ou alterações estruturais significativas requerem avaliação cirúrgica.",
      },
    ],
  },
  {
    slug: "perfiloplastia",
    title: "Perfiloplastia",
    category: "facial",
    categoryLabel: "Harmonização Facial",
    shortDesc:
      "Harmonização do perfil facial — nariz, mento, mandíbula e lábios — para equilíbrio do terço inferior e projeção.",
    fullDesc: `A Perfiloplastia é um protocolo de harmonização que trabalha especificamente o perfil do rosto, corrigindo desequilíbrios entre nariz, mento, ângulo mandibular e lábios. Na JS Estética Avançada, a Dra. Juliane Elaine realiza uma análise tridimensional do perfil para definir as áreas que precisam de volume, projeção ou refinamento.

O procedimento combina diferentes técnicas: ácido hialurônico de alta densidade para projeção de mento e mandíbula, rinomodelação para equilibrar o dorso e a ponta do nariz, e ajustes labiais para completar a harmonia do terço inferior. Tudo é pensado para dar ao rosto um perfil mais definido e equilibrado.

A Perfiloplastia é especialmente indicada para pacientes com retrognatismo (queixo retraído), ângulo mandibular pouco definido, convexidade facial aumentada ou desproporção entre os terços. O resultado é um perfil mais harmônico, com mento mais projetado, mandíbula mais marcada e linhas faciais mais definidas.

O procedimento dura em média 60 minutos, com anestesia local, e o resultado é imediato. A durabilidade é de 12 a 24 meses, dependendo do produto utilizado e do metabolismo individual.`,
    keywords: [
      "perfiloplastia rj",
      "perfiloplastia rio de janeiro",
      "harmonização de perfil facial",
      "projeção de mento rj",
      "contorno mandibular rj",
    ],
    icon: "📐",
    faq: [
      {
        q: "Perfiloplastia e harmonização facial são a mesma coisa?",
        a: "Não. A perfiloplastia foca no equilíbrio do perfil (nariz, mento e mandíbula), enquanto a harmonização facial completa trabalha todos os terços do rosto e a simetria frontal.",
      },
      {
        q: "Quanto tempo dura o resultado?",
        a: "Entre 12 e 24 meses, dependendo do ácido hialurônico utilizado e do metabolismo do paciente. Retoques periódicos mantêm o resultado.",
      },
      {
        q: "A perfiloplastia substitui cirurgia de mento?",
        a: "Para casos leves e moderados, sim. Casos com grandes alterações ósseas podem exigir avaliação cirúrgica complementar.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // PROCEDIMENTOS CORPORAIS (4)
  // ═══════════════════════════════════════════════════
  {
    slug: "bioestimuladores-de-colageno",
    title: "Bioestimuladores de Colágeno",
    category: "corporal",
    categoryLabel: "Procedimentos Corporais",
    shortDesc:
      "Estímulo natural da produção de colágeno para firmeza e rejuvenescimento corporal e facial.",
    fullDesc: `Os Bioestimuladores de Colágeno são substâncias injetáveis que estimulam o organismo a produzir colágeno novo, promovendo firmeza, sustentação e rejuvenescimento da pele. Na JS Estética Avançada, a Dra. Juliane Elaine utiliza bioestimuladores como Sculptra (ácido poli-L-láctico), Radiesse (hidroxiapatita de cálcio) e Ellansé.

O tratamento é indicado para pacientes que apresentam flacidez de pele no rosto, pescoço, colo, braços, abdômen, glúteos e coxas. Diferente dos preenchimentos tradicionais, os bioestimuladores não apenas preenchem, mas estimulam a produção natural de colágeno ao longo dos meses.

O protocolo geralmente inclui de 2 a 3 sessões, com intervalo de 30 a 60 dias entre elas. Os resultados são progressivos e naturais, com melhora significativa na qualidade e firmeza da pele. O efeito completo é observado após 3 a 6 meses do tratamento.

A durabilidade dos bioestimuladores é de 18 a 24 meses, sendo um dos tratamentos mais duradouros da estética avançada. A Dra. Juliane avalia cada paciente individualmente para indicar o melhor protocolo.`,
    keywords: [
      "bioestimuladores de colágeno rj",
      "sculptra rio de janeiro",
      "radiesse rj",
      "bioestimulador corporal rj",
      "colágeno injetável rj",
    ],
    icon: "🧬",
    faq: [
      {
        q: "Quantas sessões de bioestimulador são necessárias?",
        a: "Em geral, de 2 a 3 sessões com intervalo de 30 a 60 dias. O protocolo é personalizado conforme a necessidade do paciente.",
      },
      {
        q: "Quando vejo os resultados?",
        a: "Os resultados são progressivos. A melhora na firmeza e qualidade da pele é percebida a partir de 30 dias, com resultado completo em 3 a 6 meses.",
      },
      {
        q: "Os bioestimuladores são seguros?",
        a: "Sim. São produtos aprovados pela ANVISA, utilizados há décadas em medicina. A aplicação é feita por profissional habilitada com registro no CRBM.",
      },
    ],
  },
  {
    slug: "gluteoplastia-nao-cirurgica",
    title: "Gluteoplastia Não Cirúrgica",
    category: "corporal",
    categoryLabel: "Procedimentos Corporais",
    shortDesc:
      "Aumento e remodelação dos glúteos sem cirurgia, com bioestimuladores e preenchedores corporais.",
    fullDesc: `A Gluteoplastia Não Cirúrgica é um procedimento inovador que permite aumentar o volume, melhorar o contorno e combater a flacidez dos glúteos sem necessidade de cirurgia plástica. Na JS Estética Avançada, utilizamos bioestimuladores de colágeno e ácido hialurônico corporal para remodelar a região.

O tratamento é indicado para pacientes que desejam mais volume, projeção e firmeza nos glúteos, mas não querem passar por uma cirurgia invasiva. A Dra. Juliane Elaine realiza avaliação detalhada da anatomia e das proporções corporais para criar um plano de tratamento personalizado.

O procedimento é realizado com anestesia local, em ambiente estéril, com total segurança. A aplicação estratégica dos bioestimuladores promove aumento de volume imediato e estímulo gradual de colágeno nos meses seguintes.

O protocolo completo geralmente envolve de 2 a 3 sessões, com resultados progressivos que duram de 18 a 24 meses. A recuperação é rápida, com retorno às atividades em 24 a 48 horas.`,
    keywords: [
      "gluteoplastia sem cirurgia rj",
      "aumento de glúteos sem cirurgia",
      "gluteoplastia não cirúrgica rio de janeiro",
      "preenchimento glúteo rj",
      "bioestimulador glúteo",
    ],
    icon: "🍑",
    faq: [
      {
        q: "O procedimento dói?",
        a: "Utilizamos anestesia local para garantir conforto total. Após o procedimento, pode haver desconforto leve, controlável com analgésicos simples.",
      },
      {
        q: "Quanto tempo dura o resultado?",
        a: "De 18 a 24 meses, com melhora progressiva da firmeza da pele ao longo do tratamento.",
      },
      {
        q: "Preciso ficar de repouso?",
        a: "O retorno às atividades é em 24 a 48 horas. Recomendamos evitar exercícios intensos por 7 a 10 dias.",
      },
    ],
  },
  {
    slug: "enzimas-liticas",
    title: "Enzimas Líticas (Lipo Enzimática)",
    category: "corporal",
    categoryLabel: "Procedimentos Corporais",
    shortDesc:
      "Redução de gordura localizada com aplicação de enzimas que dissolvem células adiposas.",
    fullDesc: `As Enzimas Líticas, também conhecidas como Lipo Enzimática ou Lipólise Enzimática, são um tratamento injetável que promove a dissolução de células de gordura localizada. Na JS Estética Avançada, utilizamos substâncias lipolíticas de última geração para tratar áreas como papada, abdômen, flancos, costas e culotes.

O procedimento funciona através da injeção de enzimas específicas que rompem a membrana das células adiposas, liberando a gordura que é então metabolizada e eliminada pelo organismo. É uma excelente opção para pacientes que desejam reduzir gordura localizada resistente a dieta e exercícios.

Cada sessão dura em média 30 minutos, e o protocolo completo geralmente envolve de 3 a 5 sessões, com intervalo de 15 a 30 dias entre elas. Os resultados são progressivos, com redução visível de medidas a cada sessão.

A Dra. Juliane Elaine avalia cuidadosamente a indicação do tratamento, considerando a quantidade de gordura, a qualidade da pele e as expectativas do paciente. O procedimento é seguro quando realizado por profissional qualificado com produtos de qualidade.`,
    keywords: [
      "enzimas líticas rj",
      "lipo enzimática rio de janeiro",
      "lipólise enzimática rj",
      "redução gordura localizada rj",
      "tratamento papada rj",
    ],
    icon: "💧",
    faq: [
      {
        q: "Quantas sessões são necessárias?",
        a: "De 3 a 5 sessões, com intervalo de 15 a 30 dias. O número exato depende da área tratada e da quantidade de gordura.",
      },
      {
        q: "As enzimas líticas doem?",
        a: "A aplicação causa uma leve ardência e inchaço local, que é normal e esperado. O desconforto é temporário e diminui em poucos dias.",
      },
      {
        q: "É possível tratar a papada com enzimas?",
        a: "Sim, a papada é uma das regiões com melhores resultados. Geralmente são necessárias de 3 a 4 sessões para resultado satisfatório.",
      },
    ],
  },
  {
    slug: "endolaser",
    title: "Endolaser",
    category: "corporal",
    categoryLabel: "Procedimentos Corporais",
    shortDesc:
      "Tratamento minimamente invasivo com laser intradérmico para flacidez, gordura localizada e estímulo de colágeno.",
    fullDesc: `O Endolaser é uma tecnologia minimamente invasiva que utiliza uma fibra óptica de laser inserida sob a pele para atuar diretamente na gordura localizada, na flacidez e no estímulo de colágeno. Na JS Estética Avançada, a Dra. Juliane Elaine realiza o procedimento com equipamento de última geração, garantindo resultados precisos e seguros.

O laser, ao ser aplicado no tecido subcutâneo, promove três efeitos simultâneos: rompimento controlado das células de gordura, retração da pele (efeito lifting) e estímulo intenso da produção de colágeno novo. Isso torna o Endolaser ideal para pacientes que querem resultado de lipoaspiração leve associado à melhora da flacidez.

As regiões mais tratadas são papada, braços, abdômen, flancos, culotes, interno de coxa, joelhos e, inclusive, rosto para flacidez. O procedimento dura entre 40 e 90 minutos, dependendo da área, e é realizado com anestesia local tumescente, proporcionando conforto total.

A recuperação é rápida: o retorno às atividades é em 2 a 3 dias, com uso de cinta compressiva conforme orientação. Os resultados começam a aparecer em 15 dias e atingem o pico entre 3 e 6 meses, com melhora contínua da firmeza. Em muitos casos, uma única sessão é suficiente.`,
    keywords: [
      "endolaser rj",
      "endolaser rio de janeiro",
      "laser gordura localizada rj",
      "laser flacidez rj",
      "endolaser papada rj",
    ],
    icon: "🔦",
    faq: [
      {
        q: "O Endolaser substitui lipoaspiração?",
        a: "Para gorduras localizadas de pequeno e médio volume com flacidez associada, sim. Casos com grande volume de gordura podem ser combinados ou requerer avaliação cirúrgica.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "Na maioria dos casos, uma sessão é suficiente. A Dra. Juliane avalia cada caso para indicar o protocolo ideal.",
      },
      {
        q: "Quando vejo os resultados?",
        a: "Os primeiros resultados aparecem em 15 dias. O resultado completo, com a retração da pele e formação de colágeno, é percebido entre 3 e 6 meses.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // ESTÉTICA ÍNTIMA (2)
  // ═══════════════════════════════════════════════════
  {
    slug: "estetica-intima-feminina",
    title: "Estética Íntima Feminina",
    category: "intima",
    categoryLabel: "Estética Íntima",
    shortDesc:
      "Tratamentos para rejuvenescimento e melhora funcional da região íntima feminina com tecnologia avançada.",
    fullDesc: `A Estética Íntima Feminina abrange um conjunto de procedimentos que visam o rejuvenescimento, a melhora funcional e estética da região genital feminina. Na JS Estética Avançada, a Dra. Juliane Elaine realiza os tratamentos com total discrição, acolhimento e profissionalismo.

Os procedimentos incluem preenchimento dos grandes lábios com ácido hialurônico (para correção de assimetrias e rejuvenescimento), clareamento íntimo, tratamento de flacidez e melhora do tônus da região. Todas as técnicas são minimamente invasivas e seguras.

A Dra. Juliane possui capacitação específica em estética íntima, garantindo conhecimento anatômico detalhado e domínio das técnicas mais atuais. O ambiente de atendimento é privativo e acolhedor, proporcionando segurança e confiança à paciente.

Os resultados variam conforme o procedimento: o preenchimento tem efeito imediato com durabilidade de 12 a 18 meses, enquanto tratamentos de clareamento e rejuvenescimento demandam de 3 a 5 sessões para resultado completo.`,
    keywords: [
      "estética íntima feminina rj",
      "rejuvenescimento íntimo rio de janeiro",
      "preenchimento íntimo rj",
      "clareamento íntimo rj",
      "estética genital feminina",
    ],
    icon: "🌸",
    faq: [
      {
        q: "O procedimento é doloroso?",
        a: "Utilizamos anestesia tópica e/ou local para garantir total conforto. A maioria das pacientes relata desconforto mínimo.",
      },
      {
        q: "É seguro?",
        a: "Sim. Todos os procedimentos são realizados por profissional habilitada, em ambiente estéril, com produtos aprovados pela ANVISA.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "Depende do procedimento. O preenchimento é sessão única; tratamentos de rejuvenescimento e clareamento requerem de 3 a 5 sessões.",
      },
    ],
  },
  {
    slug: "estetica-intima-masculina",
    title: "Estética Íntima Masculina",
    category: "intima",
    categoryLabel: "Estética Íntima",
    shortDesc:
      "Aumento de comprimento e largura peniana com ácido hialurônico — procedimento seguro, discreto e com resultado imediato.",
    fullDesc: `A Estética Íntima Masculina é um conjunto de procedimentos minimamente invasivos voltados para homens que buscam melhorar o aspecto estético e funcional da região íntima. Na JS Estética Avançada, a Dra. Juliane Elaine realiza o atendimento com total discrição, acolhimento e profissionalismo, em ambiente privativo.

O procedimento principal é o aumento de comprimento e largura peniana com ácido hialurônico de alta densidade, uma técnica consagrada internacionalmente e considerada segura quando realizada por profissional habilitado. A aplicação é feita em camadas estratégicas da região, promovendo aumento imediato de volume e extensão, com resultado natural e proporcional à anatomia do paciente.

Além do aumento, a estética íntima masculina inclui tratamentos para rejuvenescimento peniano, correção de assimetrias, melhora da flacidez e do aspecto da pele local. A Dra. Juliane possui capacitação específica na área e utiliza apenas produtos aprovados pela ANVISA, com protocolos baseados em evidência.

O procedimento é realizado com anestesia tópica e/ou bloqueio local, garantindo conforto total. O resultado é imediato e a durabilidade varia de 12 a 24 meses, dependendo do produto escolhido. A recuperação é rápida, com retorno às atividades normais em 24 a 48 horas e restrição de atividades físicas intensas por 7 a 10 dias.`,
    keywords: [
      "estética íntima masculina rj",
      "aumento peniano com ácido hialurônico rio de janeiro",
      "aumento de comprimento peniano rj",
      "aumento de largura peniana rj",
      "estética íntima masculina barra da tijuca",
    ],
    icon: "♂️",
    faq: [
      {
        q: "O aumento com ácido hialurônico é seguro?",
        a: "Sim, quando realizado por profissional habilitado, com produtos aprovados pela ANVISA e em ambiente adequado. É uma técnica consagrada e amplamente estudada internacionalmente.",
      },
      {
        q: "O resultado é imediato?",
        a: "Sim. O aumento de volume e comprimento é percebido imediatamente após a aplicação, com acomodação final nos dias seguintes.",
      },
      {
        q: "Quanto tempo dura o resultado?",
        a: "De 12 a 24 meses, dependendo do produto utilizado e do metabolismo individual. Retoques periódicos mantêm o resultado.",
      },
      {
        q: "Preciso de afastamento do trabalho?",
        a: "Não. O retorno às atividades normais é em 24 a 48 horas. Apenas exercícios físicos intensos e relações sexuais devem ser evitados por 7 a 10 dias.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // TRATAMENTOS DE PELE (7)
  // ═══════════════════════════════════════════════════
  {
    slug: "skinbooster",
    title: "Skinbooster",
    category: "pele",
    categoryLabel: "Tratamentos de Pele",
    shortDesc:
      "Hidratação profunda e melhora da qualidade da pele com microinjeções de ácido hialurônico.",
    fullDesc: `O Skinbooster é um tratamento de hidratação profunda da pele realizado através de microinjeções de ácido hialurônico ultrafino. Na JS Estética Avançada, utilizamos as melhores marcas do mercado para restaurar o viço, a luminosidade e a elasticidade da pele.

Diferente do preenchimento tradicional, o Skinbooster não altera volumes ou contornos. Ele age nas camadas mais profundas da pele, atraindo e retendo água, o que resulta em uma pele mais hidratada, firme e luminosa. É indicado para rosto, pescoço, colo, mãos e outras áreas que apresentem ressecamento e perda de qualidade.

O protocolo padrão inclui 3 sessões com intervalo de 30 dias entre elas, seguidas de manutenção semestral. Cada sessão dura cerca de 30 minutos, e a recuperação é rápida, com possível vermelhidão leve nas primeiras horas.

A Dra. Juliane Elaine recomenda o Skinbooster como tratamento complementar à harmonização facial e aos bioestimuladores, potencializando os resultados e garantindo uma pele saudável e rejuvenescida.`,
    keywords: [
      "skinbooster rj",
      "skinbooster rio de janeiro",
      "hidratação profunda pele rj",
      "ácido hialurônico pele rj",
      "skinbooster barra da tijuca",
    ],
    icon: "💎",
    faq: [
      {
        q: "O Skinbooster dói?",
        a: "Utilizamos anestesia tópica antes da aplicação. O desconforto é leve e bem tolerado pela maioria dos pacientes.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "O protocolo padrão inclui 3 sessões mensais, com manutenção a cada 6 meses para resultados duradouros.",
      },
      {
        q: "Para quem é indicado o Skinbooster?",
        a: "Para qualquer pessoa que deseje melhorar a qualidade, hidratação e luminosidade da pele. É especialmente indicado para peles ressecadas, opacas e com sinais de envelhecimento.",
      },
    ],
  },
  {
    slug: "peeling-quimico",
    title: "Peeling Químico",
    category: "pele",
    categoryLabel: "Tratamentos de Pele",
    shortDesc:
      "Renovação celular e tratamento de manchas, acne e textura da pele com ácidos específicos.",
    fullDesc: `O Peeling Químico é um procedimento de renovação celular que utiliza ácidos específicos para promover a esfoliação controlada da pele. Na JS Estética Avançada, a Dra. Juliane Elaine realiza peelings personalizados conforme o tipo de pele e a queixa do paciente.

O tratamento é indicado para manchas (melasma, manchas solares, pós-inflamatórias), cicatrizes de acne, linhas finas, textura irregular, poros dilatados e para melhora geral da qualidade da pele. Utilizamos diferentes tipos de ácidos e concentrações, desde peelings superficiais até médios.

Cada sessão dura de 20 a 40 minutos, e o protocolo completo geralmente inclui de 3 a 6 sessões, com intervalos que variam conforme o tipo de peeling. Durante o tratamento, é fundamental o uso de protetor solar e os cuidados indicados pela profissional.

Os resultados são progressivos: a pele fica mais uniforme, luminosa e com menos imperfeições a cada sessão. A Dra. Juliane avalia o melhor protocolo para cada paciente, considerando fotótipo, sensibilidade e objetivos do tratamento.`,
    keywords: [
      "peeling químico rj",
      "peeling facial rio de janeiro",
      "tratamento manchas rj",
      "peeling melasma rj",
      "peeling acne rio de janeiro",
    ],
    icon: "🧴",
    faq: [
      {
        q: "O peeling químico arde?",
        a: "Pode haver sensação de ardência leve durante a aplicação, que é normal e temporária. O desconforto é bem tolerável.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "De 3 a 6 sessões, dependendo da queixa e do tipo de peeling utilizado. O intervalo entre sessões varia de 15 a 30 dias.",
      },
      {
        q: "Posso fazer peeling no verão?",
        a: "Peelings mais superficiais podem ser realizados no verão com cuidados redobrados. Peelings médios são mais indicados nos meses de menor exposição solar.",
      },
    ],
  },
  {
    slug: "microagulhamento",
    title: "Microagulhamento",
    category: "pele",
    categoryLabel: "Tratamentos de Pele",
    shortDesc:
      "Estímulo de colágeno com microagulhas para tratar cicatrizes, rugas e melhorar a textura da pele.",
    fullDesc: `O Microagulhamento é um procedimento que utiliza um dispositivo com microagulhas para criar microlesões controladas na pele, estimulando a produção natural de colágeno e elastina. Na JS Estética Avançada, utilizamos equipamentos de última geração para garantir precisão e segurança.

O tratamento é indicado para cicatrizes de acne, estrias, rugas finas, poros dilatados, manchas e para melhora geral da textura e firmeza da pele. As microlesões ativam o processo natural de cicatrização do organismo, resultando em uma pele renovada e mais firme.

Durante o procedimento, podem ser aplicados ativos como fatores de crescimento, vitaminas e ácido hialurônico, que penetram mais profundamente graças aos microcanais criados pelas agulhas. Essa combinação potencializa os resultados.

O protocolo completo geralmente inclui de 3 a 5 sessões, com intervalo de 30 dias. Após cada sessão, a pele fica avermelhada por 24 a 48 horas. A Dra. Juliane Elaine personaliza a profundidade e os ativos conforme as necessidades de cada paciente.`,
    keywords: [
      "microagulhamento rj",
      "microagulhamento facial rio de janeiro",
      "tratamento cicatriz acne rj",
      "microagulhamento barra da tijuca",
      "drug delivery facial rj",
    ],
    icon: "🔬",
    faq: [
      {
        q: "O microagulhamento dói?",
        a: "Aplicamos anestesia tópica 30 minutos antes do procedimento. Com a anestesia, o desconforto é mínimo.",
      },
      {
        q: "Quanto tempo leva para ver os resultados?",
        a: "Os primeiros resultados são visíveis após 15 a 30 dias da primeira sessão. O resultado completo é percebido após o protocolo inteiro.",
      },
      {
        q: "Posso usar maquiagem após o procedimento?",
        a: "Recomendamos evitar maquiagem nas primeiras 24 a 48 horas. Após esse período, pode usar normalmente com cuidados adequados.",
      },
    ],
  },
  {
    slug: "exossomos",
    title: "Exossomos",
    category: "pele",
    categoryLabel: "Tratamentos de Pele",
    shortDesc:
      "Regeneração celular avançada com exossomos — a nova geração de tratamentos para rejuvenescimento e reparo da pele.",
    fullDesc: `Os Exossomos são vesículas extracelulares ricas em fatores de crescimento, proteínas e material genético que atuam na comunicação celular e na regeneração dos tecidos. Representam a fronteira mais moderna da estética regenerativa e são considerados o sucessor natural dos PRPs e fatores de crescimento tradicionais.

Na JS Estética Avançada, a Dra. Juliane Elaine utiliza exossomos como tratamento intensivo de rejuvenescimento, atuando diretamente na reprogramação celular da pele. O ativo estimula a produção de colágeno, elastina e ácido hialurônico, além de acelerar a cicatrização e reduzir inflamação.

As indicações incluem fotoenvelhecimento, perda de firmeza, manchas, rugas finas, pele opaca, pós-peeling, pós-laser e recuperação após procedimentos mais agressivos. Pode ser aplicado via microagulhamento, drug delivery com ultrassom ou injeções intradérmicas superficiais.

O protocolo recomendado inclui de 3 a 4 sessões com intervalo de 15 a 30 dias. Os resultados são percebidos já a partir da primeira sessão, com melhora progressiva de textura, luminosidade e firmeza. É um tratamento premium, indicado para quem busca o que há de mais avançado em regeneração cutânea.`,
    keywords: [
      "exossomos rj",
      "exossomos rio de janeiro",
      "regeneração celular pele rj",
      "exossomos harmonização rj",
      "terapia regenerativa facial rj",
    ],
    icon: "🧫",
    faq: [
      {
        q: "O que são exossomos?",
        a: "São vesículas microscópicas liberadas pelas células, ricas em fatores de crescimento, proteínas e material genético. Atuam como mensageiros celulares, estimulando regeneração e rejuvenescimento.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "O protocolo padrão envolve de 3 a 4 sessões com intervalo de 15 a 30 dias. Manutenções semestrais mantêm os resultados.",
      },
      {
        q: "Quais as diferenças entre exossomos e PRP?",
        a: "Enquanto o PRP é derivado do próprio sangue do paciente, os exossomos são obtidos de forma padronizada em laboratório, com concentração controlada e maior potência regenerativa.",
      },
    ],
  },
  {
    slug: "profhilo",
    title: "Profhilo",
    category: "pele",
    categoryLabel: "Tratamentos de Pele",
    shortDesc:
      "Bioestimulador de ácido hialurônico puro para hidratação profunda e remodelação da pele — efeito lifting natural.",
    fullDesc: `O Profhilo é um tratamento injetável exclusivo à base de ácido hialurônico estabilizado de alta concentração, desenvolvido na Itália e considerado um dos bioremodeladores mais avançados do mundo. Diferente dos preenchimentos tradicionais, o Profhilo não adiciona volume: ele hidrata profundamente, estimula colágeno, elastina e ácido hialurônico endógeno.

Na JS Estética Avançada, a Dra. Juliane Elaine aplica o Profhilo em pontos estratégicos do rosto (técnica BAP — Bio Aesthetic Points), pescoço, colo, mãos e braços. O produto se espalha na camada profunda da derme, reidratando e remodelando a pele de forma natural e progressiva.

O Profhilo é indicado para pacientes com flacidez leve a moderada, ressecamento, perda de luminosidade e sinais iniciais de envelhecimento. É ideal para quem busca efeito lifting sem volume adicional — o resultado é uma pele mais firme, hidratada, luminosa e com textura renovada.

O protocolo padrão envolve 2 sessões com intervalo de 30 dias, seguidas de manutenção semestral. A aplicação é rápida (15 a 20 minutos), com anestesia tópica. Os resultados começam a ser percebidos após 15 dias, com efeito completo em 60 dias.`,
    keywords: [
      "profhilo rj",
      "profhilo rio de janeiro",
      "bioremodelador ácido hialurônico rj",
      "profhilo barra da tijuca",
      "lifting facial sem volume rj",
    ],
    icon: "💧",
    faq: [
      {
        q: "Profhilo é preenchimento?",
        a: "Não. O Profhilo é um bioremodelador — ele não adiciona volume, mas hidrata e estimula colágeno e elastina profundamente, atuando em toda a qualidade da pele.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "O protocolo padrão é de 2 sessões com intervalo de 30 dias. A manutenção é recomendada a cada 6 meses.",
      },
      {
        q: "Em quais áreas posso aplicar?",
        a: "Rosto, pescoço, colo, mãos, braços e região interna de coxas. É versátil e indicado para qualquer área com flacidez e ressecamento.",
      },
    ],
  },
  {
    slug: "pdrn",
    title: "PDRN (Salmon DNA)",
    category: "pele",
    categoryLabel: "Tratamentos de Pele",
    shortDesc:
      "Regeneração tecidual com polidesoxirribonucleotídeos derivados de DNA de salmão — reparo intenso e rejuvenescimento.",
    fullDesc: `O PDRN (Polidesoxirribonucleotídeo) é um ativo regenerativo extraído do DNA purificado do salmão, conhecido também como "Salmon DNA". Sua estrutura molecular é altamente compatível com o tecido humano, o que faz dele um dos mais potentes ativos de reparo e rejuvenescimento disponíveis na estética avançada.

Na JS Estética Avançada, a Dra. Juliane Elaine utiliza o PDRN para estimular a regeneração celular, aumentar a produção de colágeno, melhorar a microcirculação e acelerar a cicatrização. É indicado para pacientes com pele danificada pelo sol, cicatrizes, manchas, rugas finas, pós-procedimento ablativo e para rejuvenescimento geral.

O PDRN atua em três frentes: anti-inflamatória (reduz vermelhidão e sensibilidade), regeneradora (repara danos estruturais da pele) e rejuvenescedora (estimula renovação celular e produção de matriz extracelular). Pode ser aplicado por microagulhamento, drug delivery ou injeções intradérmicas.

O protocolo habitual envolve de 3 a 4 sessões com intervalo de 15 a 21 dias. A recuperação é muito rápida, praticamente sem efeitos adversos. O resultado é uma pele mais saudável, firme, luminosa e com aspecto jovem. Excelente opção para pacientes com pele sensível ou em recuperação.`,
    keywords: [
      "pdrn rj",
      "salmon dna rio de janeiro",
      "pdrn facial rj",
      "regeneração celular pele rj",
      "rejuvenescimento pdrn barra da tijuca",
    ],
    icon: "🐟",
    faq: [
      {
        q: "PDRN é seguro?",
        a: "Sim. O PDRN é altamente purificado e biocompatível, utilizado há mais de 20 anos na medicina regenerativa. Aprovado para uso estético e com excelente perfil de segurança.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "De 3 a 4 sessões com intervalo de 15 a 21 dias. Manutenção a cada 4 a 6 meses é recomendada.",
      },
      {
        q: "PDRN e exossomos são a mesma coisa?",
        a: "Não. Ambos regenerativos, mas com mecanismos diferentes: o PDRN é baseado em fragmentos de DNA que estimulam receptores celulares, enquanto os exossomos transportam fatores de crescimento diretamente às células.",
      },
    ],
  },
  {
    slug: "co2-fracionado",
    title: "Laser CO2 Fracionado",
    category: "pele",
    categoryLabel: "Tratamentos de Pele",
    shortDesc:
      "Laser ablativo fracionado para resurfacing profundo — trata cicatrizes, manchas, rugas e renova toda a pele.",
    fullDesc: `O Laser CO2 Fracionado é o padrão ouro para resurfacing facial e renovação profunda da pele. Utiliza feixes de luz fracionados que atingem a pele em colunas microscópicas, preservando tecido saudável ao redor. Isso permite tratamento intenso com recuperação mais rápida e menores riscos em comparação ao CO2 tradicional.

Na JS Estética Avançada, a Dra. Juliane Elaine aplica o CO2 fracionado com equipamento de última geração, personalizando a profundidade e a densidade do tratamento conforme a queixa e o fotótipo do paciente. O laser estimula intensamente a produção de colágeno e a renovação epidérmica.

As principais indicações são: cicatrizes de acne profundas, rugas finas e médias, fotoenvelhecimento severo, manchas, estrias, poros dilatados, textura irregular e flacidez facial. É um dos poucos tratamentos capazes de produzir melhora visível em apenas uma sessão.

O procedimento é realizado com anestesia tópica e/ou bloqueio local, dura em média 30 a 60 minutos. A recuperação leva de 5 a 10 dias, com vermelhidão inicial, descamação e formação de crostas finas. Após esse período, a pele revela-se renovada, lisa, firme e com aspecto muito mais jovem. Pode ser feito isoladamente ou combinado com exossomos e PDRN para potencializar o resultado.`,
    keywords: [
      "co2 fracionado rj",
      "laser co2 rio de janeiro",
      "resurfacing facial rj",
      "tratamento cicatriz acne laser rj",
      "laser fracionado barra da tijuca",
    ],
    icon: "⚡",
    faq: [
      {
        q: "Quantas sessões de CO2 fracionado preciso?",
        a: "Depende da queixa. Muitos pacientes têm excelente melhora com 1 a 2 sessões. Casos mais graves de cicatriz de acne podem exigir de 3 a 4 sessões.",
      },
      {
        q: "Como é a recuperação?",
        a: "De 5 a 10 dias de vermelhidão e descamação. É essencial usar protetor solar rigoroso e seguir os cuidados pós indicados pela Dra. Juliane.",
      },
      {
        q: "Posso fazer CO2 fracionado no verão?",
        a: "Preferencialmente nos meses de menor exposição solar. Se feito no verão, exige disciplina total com protetor solar e evitar exposição direta por pelo menos 30 dias.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // ANTI-AGING (2)
  // ═══════════════════════════════════════════════════
  {
    slug: "fios-de-pdo",
    title: "Fios de PDO",
    category: "anti-aging",
    categoryLabel: "Anti-Aging",
    shortDesc:
      "Lifting facial sem cirurgia com fios de polidioxanona para sustentação e estímulo de colágeno.",
    fullDesc: `Os Fios de PDO (polidioxanona) são um tratamento minimamente invasivo que promove lifting e sustentação facial sem necessidade de cirurgia. Na JS Estética Avançada, a Dra. Juliane Elaine utiliza fios lisos, espiculados e em mola para diferentes efeitos de sustentação e estímulo de colágeno.

Os fios são inseridos sob a pele através de agulhas ou cânulas, promovendo sustentação mecânica imediata e estímulo gradual de colágeno ao longo dos meses. O procedimento é indicado para flacidez facial e cervical, código de barras, papada e melhora do contorno facial.

Existem diferentes tipos de fios para diferentes finalidades: fios lisos para estímulo de colágeno, fios espiculados para sustentação e lifting, e fios em mola para áreas específicas como nasolabial. A Dra. Juliane avalia cada caso para indicar o tipo e a quantidade ideais.

O procedimento dura cerca de 40 a 60 minutos, com anestesia local. O resultado é imediato (lifting mecânico) e progressivo (estímulo de colágeno). A durabilidade é de 12 a 18 meses, e os fios são absorvidos naturalmente pelo organismo.`,
    keywords: [
      "fios de pdo rj",
      "lifting sem cirurgia rio de janeiro",
      "fios de sustentação facial rj",
      "fios de pdo barra da tijuca",
      "rejuvenescimento facial sem cirurgia",
    ],
    icon: "🧵",
    faq: [
      {
        q: "Os fios de PDO doem?",
        a: "O procedimento é realizado com anestesia local, garantindo conforto. Após a aplicação, pode haver sensibilidade por alguns dias.",
      },
      {
        q: "Quanto tempo dura o efeito dos fios?",
        a: "O efeito de sustentação dura de 12 a 18 meses. O estímulo de colágeno proporcionado pode estender os benefícios por mais tempo.",
      },
      {
        q: "Os fios são absorvidos pelo organismo?",
        a: "Sim. A polidioxanona é um material biocompatível e absorvível, utilizado há décadas em cirurgias. O organismo o absorve naturalmente em 6 a 8 meses.",
      },
    ],
  },
  {
    slug: "protocolo-anti-aging",
    title: "Protocolo Anti-Aging Personalizado",
    category: "anti-aging",
    categoryLabel: "Anti-Aging",
    shortDesc:
      "Programa completo de rejuvenescimento combinando múltiplas técnicas para resultados duradouros.",
    fullDesc: `O Protocolo Anti-Aging Personalizado é o tratamento mais completo da JS Estética Avançada, combinando diferentes técnicas e procedimentos para um rejuvenescimento global e duradouro. A Dra. Juliane Elaine desenvolve um plano individualizado considerando as necessidades, o biotipo e os objetivos de cada paciente.

O protocolo pode incluir: toxina botulínica (para suavizar rugas dinâmicas), preenchimento com ácido hialurônico (para restaurar volumes), bioestimuladores de colágeno (para firmeza), skinbooster (para qualidade da pele), fios de PDO (para sustentação), peelings (para renovação) e microagulhamento (para textura).

A abordagem é gradual e estratégica: não se trata de realizar todos os procedimentos de uma vez, mas sim de criar um cronograma inteligente que respeita o tempo de recuperação de cada técnica e maximiza os resultados. O plano é revisado a cada consulta.

O Protocolo Anti-Aging é ideal para pacientes a partir dos 30 anos que desejam prevenir e tratar os sinais de envelhecimento de forma completa e natural. A avaliação inicial é detalhada e o acompanhamento é contínuo.`,
    keywords: [
      "protocolo anti-aging rj",
      "rejuvenescimento facial completo",
      "anti-aging rio de janeiro",
      "tratamento envelhecimento rj",
      "protocolo rejuvenescimento personalizado",
    ],
    icon: "⏳",
    faq: [
      {
        q: "Com que idade devo começar um protocolo anti-aging?",
        a: "A partir dos 25-30 anos já é possível iniciar protocolos preventivos. A partir dos 35-40 anos, os protocolos reparadores e estimuladores são mais indicados.",
      },
      {
        q: "Quanto custa o protocolo completo?",
        a: "O valor depende dos procedimentos incluídos no plano personalizado. Agende sua avaliação para receber um orçamento detalhado.",
      },
      {
        q: "Quanto tempo dura o tratamento?",
        a: "O protocolo inicial geralmente se estende por 3 a 6 meses, com manutenções periódicas. O rejuvenescimento é um processo contínuo.",
      },
    ],
  },
];


/* helpers */
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}
