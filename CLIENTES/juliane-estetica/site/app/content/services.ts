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
  // HARMONIZAÇÃO FACIAL (4)
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

  // ═══════════════════════════════════════════════════
  // PROCEDIMENTOS CORPORAIS (3)
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
    slug: "preenchimento-gluteo-intimo",
    title: "Preenchimento Glúteo Íntimo (Hipoplasia)",
    category: "intima",
    categoryLabel: "Estética Íntima",
    shortDesc:
      "Correção de hipoplasia glútea e melhora do contorno da região íntimo-glútea.",
    fullDesc: `O Preenchimento Glúteo Íntimo é um procedimento indicado para pacientes que apresentam hipoplasia (perda de volume) na região glútea íntima, causando desconforto estético e funcional. Na JS Estética Avançada, a Dra. Juliane Elaine utiliza ácido hialurônico e bioestimuladores específicos para restaurar o volume e melhorar o contorno da região.

O tratamento é realizado em ambiente clínico estéril, com anestesia local, garantindo segurança e conforto total à paciente. A aplicação é feita de forma estratégica, respeitando a anatomia individual e buscando um resultado natural e harmonioso.

Muitas mulheres sofrem com a perda de volume na região glútea íntima após emagrecimento, envelhecimento ou por constituição física. O procedimento restaura o aspecto juvenil e saudável da região, melhorando a autoestima e o conforto no dia a dia.

O resultado é imediato, com melhora progressiva ao longo das semanas. A durabilidade é de 12 a 24 meses, dependendo do produto utilizado e do protocolo escolhido.`,
    keywords: [
      "preenchimento glúteo íntimo rj",
      "hipoplasia glútea tratamento",
      "preenchimento íntimo rio de janeiro",
      "estética íntima avançada rj",
    ],
    icon: "🩷",
    faq: [
      {
        q: "Quanto tempo dura o resultado?",
        a: "De 12 a 24 meses, dependendo do produto utilizado. Retoques periódicos mantêm o resultado.",
      },
      {
        q: "Preciso de repouso após o procedimento?",
        a: "Recomendamos evitar exercícios intensos por 5 a 7 dias. As atividades diárias normais podem ser retomadas no dia seguinte.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // TRATAMENTOS DE PELE (3)
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
