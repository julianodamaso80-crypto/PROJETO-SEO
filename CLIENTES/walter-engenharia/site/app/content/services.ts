export type ServiceCategory =
  | "construcao"
  | "reformas"
  | "manutencao"
  | "instalacoes"
  | "revestimentos"
  | "infraestrutura"
  | "tecnicos";

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
  construcao: { label: "Construção", slug: "construcao" },
  reformas: { label: "Reformas", slug: "reformas" },
  manutencao: { label: "Manutenção", slug: "manutencao" },
  instalacoes: { label: "Instalações", slug: "instalacoes" },
  revestimentos: { label: "Revestimentos", slug: "revestimentos" },
  infraestrutura: { label: "Infraestrutura", slug: "infraestrutura" },
  tecnicos: { label: "Serviços Técnicos", slug: "tecnicos" },
};

export const SERVICES: Service[] = [
  // ═══════════════════════════════════════════════════
  // CONSTRUÇÃO (5)
  // ═══════════════════════════════════════════════════
  {
    slug: "construcao-do-zero",
    title: "Construção do Zero",
    category: "construcao",
    categoryLabel: "Construção",
    shortDesc:
      "Construção completa de imóveis residenciais e comerciais no Rio de Janeiro, do projeto à entrega das chaves.",
    fullDesc: `A WSSJ Engenharia oferece serviço completo de construção do zero no Rio de Janeiro, abrangendo todas as etapas: terraplanagem, fundação, estrutura, alvenaria, acabamentos e instalações. Nossa equipe técnica atua desde a análise do terreno até a entrega final, garantindo que cada fase do projeto seja executada conforme as normas da ABNT e as exigências do CREA.

Trabalhamos com construções residenciais unifamiliares, edifícios multifamiliares e empreendimentos comerciais. Cada projeto recebe acompanhamento de engenheiro responsável, cronograma detalhado e controle de qualidade rigoroso. Utilizamos materiais de primeira linha e técnicas construtivas atualizadas para garantir durabilidade e eficiência energética.

No Rio de Janeiro, onde o solo e o clima apresentam desafios específicos — como áreas de encosta, terrenos arenosos na Barra da Tijuca e alta umidade —, a experiência da WSSJ faz a diferença. Realizamos estudos geotécnicos, projetos de contenção e sistemas de drenagem adequados à realidade carioca.

Nosso compromisso é entregar obras dentro do prazo e do orçamento, com transparência total ao cliente. Desde a primeira visita técnica até a habite-se, a WSSJ Engenharia é sua parceira de construção no RJ.`,
    keywords: [
      "construção do zero rj",
      "construir casa rio de janeiro",
      "construtora rio de janeiro",
      "construção residencial rj",
      "construção completa rj",
    ],
    icon: "🏗️",
    faq: [
      {
        q: "Quanto tempo leva para construir uma casa do zero no RJ?",
        a: "O prazo varia conforme o tamanho e complexidade do projeto. Uma residência de 150m² leva em média de 8 a 12 meses. Projetos maiores ou com fundações especiais podem demandar 14 a 18 meses. A WSSJ fornece cronograma detalhado antes do início da obra.",
      },
      {
        q: "Quais documentos são necessários para iniciar uma construção?",
        a: "São necessários: projeto arquitetônico aprovado pela prefeitura, alvará de construção, ART (Anotação de Responsabilidade Técnica) do engenheiro, licença ambiental (quando aplicável) e registro no INSS da obra. A WSSJ auxilia em toda a documentação.",
      },
      {
        q: "A WSSJ cuida de todos os projetos complementares?",
        a: "Sim. Além da execução, coordenamos os projetos estrutural, elétrico, hidráulico, de ar-condicionado e de prevenção contra incêndio. Tudo integrado para evitar retrabalho e garantir a compatibilização completa dos projetos.",
      },
      {
        q: "Qual o custo médio por m² de construção no Rio de Janeiro?",
        a: "O custo varia de R$ 2.500 a R$ 5.000 por m², dependendo do padrão de acabamento e localização. Realizamos orçamento detalhado e personalizado sem compromisso. Entre em contato para uma avaliação gratuita do seu projeto.",
      },
    ],
  },
  {
    slug: "construcao-estrutural",
    title: "Construção Estrutural",
    category: "construcao",
    categoryLabel: "Construção",
    shortDesc:
      "Execução de estruturas em concreto armado, metálicas e mistas com cálculo estrutural conforme normas ABNT.",
    fullDesc: `A construção estrutural é a base de qualquer edificação segura. A WSSJ Engenharia executa estruturas em concreto armado, estruturas metálicas e sistemas mistos no Rio de Janeiro, sempre com projeto calculado por engenheiro estrutural e execução supervisionada em campo.

Nossos serviços incluem fundações (sapatas, estacas, radier), pilares, vigas, lajes, escadas e muros de arrimo. Cada elemento é dimensionado conforme as NBR 6118 (concreto armado), NBR 8800 (estruturas metálicas) e NBR 6122 (fundações), garantindo segurança e conformidade técnica.

No contexto do Rio de Janeiro, onde encontramos desde solos rochosos na Zona Sul até terrenos sedimentares na Baixada Fluminense, a análise geotécnica é fundamental. A WSSJ realiza sondagens SPT, ensaios de compactação e análise de recalques para definir a melhor solução de fundação.

Trabalhamos com concreto usinado de usinas certificadas, aço CA-50 e CA-60 com rastreabilidade, e fôrmas metálicas e de madeira conforme o projeto. O controle tecnológico do concreto — slump test, moldagem de corpos de prova e ensaios de resistência — é parte integrante de todas as nossas obras.`,
    keywords: [
      "construção estrutural rj",
      "estrutura de concreto armado rio de janeiro",
      "fundações rj",
      "engenharia estrutural rj",
    ],
    icon: "🏛️",
    faq: [
      {
        q: "Qual a diferença entre estrutura de concreto e metálica?",
        a: "Concreto armado é mais comum em edificações residenciais e comerciais até 20 pavimentos, com boa resistência ao fogo e menor custo. Estrutura metálica é ideal para galpões, vãos livres grandes e projetos que demandam leveza e rapidez de montagem. A WSSJ avalia caso a caso.",
      },
      {
        q: "Como saber qual tipo de fundação meu terreno precisa?",
        a: "É necessário realizar sondagem SPT (Standard Penetration Test) para conhecer o perfil do solo. Com o laudo de sondagem, o engenheiro estrutural define se a fundação será superficial (sapatas, radier) ou profunda (estacas). A WSSJ coordena todo o processo.",
      },
      {
        q: "A WSSJ faz reforço de estruturas existentes?",
        a: "Sim. Realizamos reforço estrutural com adição de pilares, vigas, encamisamento de concreto, fibras de carbono e protensão externa. Cada reforço é calculado especificamente para a estrutura existente, garantindo segurança e conformidade normativa.",
      },
    ],
  },
  {
    slug: "construcao-de-galpao",
    title: "Construção de Galpão",
    category: "construcao",
    categoryLabel: "Construção",
    shortDesc:
      "Projeto e construção de galpões industriais, logísticos e comerciais no Rio de Janeiro e região metropolitana.",
    fullDesc: `A WSSJ Engenharia é especialista na construção de galpões no Rio de Janeiro, atendendo demandas industriais, logísticas e comerciais. Trabalhamos com estruturas metálicas, pré-moldados de concreto e sistemas mistos, sempre dimensionados para a carga e o uso específico do galpão.

Nossos projetos contemplam desde galpões simples de 300m² até complexos logísticos de grande porte. Cada projeto inclui: estrutura principal (pilares e tesouras), fechamento lateral (telhas ou painéis), cobertura (telhas metálicas com isolamento), piso industrial de alta resistência, portões e instalações complementares.

Na região metropolitana do Rio de Janeiro, áreas como Duque de Caxias, Nova Iguaçu e o distrito industrial de Santa Cruz concentram grande demanda por galpões. A WSSJ conhece as particularidades de zoneamento, licenciamento e infraestrutura dessas regiões, agilizando o processo de aprovação e construção.

Oferecemos soluções completas: desde o estudo de viabilidade e projeto arquitetônico até a execução, instalações elétricas industriais, sistema de prevenção contra incêndio (AVCB) e habite-se. Prazo e orçamento definidos em contrato, sem surpresas.`,
    keywords: [
      "construção de galpão rj",
      "galpão industrial rio de janeiro",
      "galpão logístico rj",
      "construção de galpão metálico rj",
    ],
    icon: "🏭",
    faq: [
      {
        q: "Qual o melhor sistema construtivo para galpões?",
        a: "Depende do uso, vão livre e orçamento. Estrutura metálica é a mais versátil para galpões, com montagem rápida e grandes vãos livres. Pré-moldados de concreto são indicados para áreas com exigência de resistência ao fogo. A WSSJ avalia e recomenda a melhor solução.",
      },
      {
        q: "Quanto custa construir um galpão no RJ?",
        a: "O custo varia de R$ 800 a R$ 2.000 por m², conforme o porte, tipo de piso e instalações. Galpões logísticos com piso de alta planicidade e docas custam mais que galpões simples. Solicite um orçamento detalhado sem compromisso.",
      },
      {
        q: "A WSSJ cuida do licenciamento do galpão?",
        a: "Sim. Cuidamos de todo o processo junto à prefeitura, Corpo de Bombeiros (AVCB), concessionárias de energia e água, e órgãos ambientais quando necessário. Entregamos o galpão com toda a documentação regularizada.",
      },
      {
        q: "Qual o prazo de construção de um galpão?",
        a: "Um galpão metálico de 500m² a 1.000m² leva em média 3 a 5 meses para ser construído, incluindo fundação, estrutura, cobertura e piso. Galpões maiores ou com instalações complexas podem demandar 6 a 10 meses.",
      },
    ],
  },
  {
    slug: "construcao-em-steel-frame",
    title: "Construção em Steel Frame",
    category: "construcao",
    categoryLabel: "Construção",
    shortDesc:
      "Construção a seco em Steel Frame: sustentável, rápida e com excelente desempenho térmico e acústico.",
    fullDesc: `O sistema construtivo Steel Frame é uma alternativa moderna à alvenaria convencional, e a WSSJ Engenharia é referência nessa tecnologia no Rio de Janeiro. Utilizamos perfis de aço galvanizado leve, fechamento com placas cimentícias e drywall, e isolamento termoacústico de alta performance.

As vantagens do Steel Frame incluem: redução de até 30% no prazo de obra em comparação à alvenaria, menor geração de entulho, excelente desempenho térmico (fundamental no clima quente do RJ), precisão dimensional e flexibilidade de projeto. O sistema atende à NBR 15575 (norma de desempenho) em todos os requisitos.

No Rio de Janeiro, o Steel Frame é especialmente vantajoso em regiões onde o acesso logístico é limitado — como condomínios na Barra, terrenos em encosta na Zona Sul e áreas de preservação. A leveza da estrutura também reduz custos de fundação em terrenos com baixa capacidade de carga.

A WSSJ executa residências, sobrados, edículas e ampliações em Steel Frame. Cada projeto inclui tratamento anticorrosivo adequado ao ambiente marítimo do Rio de Janeiro, impermeabilização reforçada e acabamentos que se integram perfeitamente ao estilo desejado pelo cliente.`,
    keywords: [
      "steel frame rio de janeiro",
      "construção a seco rj",
      "casa steel frame rj",
      "construção sustentável rj",
    ],
    icon: "🔩",
    faq: [
      {
        q: "Steel Frame é resistente o suficiente para o clima do Rio de Janeiro?",
        a: "Sim. Os perfis de aço galvanizado recebem tratamento anticorrosivo Z275 ou superior, adequado ao ambiente marítimo. O fechamento com placas cimentícias resiste à umidade e o isolamento térmico reduz o calor interno. O sistema é projetado para durar mais de 50 anos com manutenção adequada.",
      },
      {
        q: "Posso fazer uma casa de dois pavimentos em Steel Frame?",
        a: "Sim. O Steel Frame permite construções de até 5 pavimentos conforme a NBR 15253. Residências de 1 a 3 pavimentos são as mais comuns. O projeto estrutural define o espaçamento e espessura dos perfis conforme as cargas atuantes.",
      },
      {
        q: "Qual a diferença de custo entre Steel Frame e alvenaria?",
        a: "O custo por m² é similar ao da alvenaria convencional de bom padrão. A economia está no prazo reduzido (menos custos indiretos), menor desperdício de material e fundações mais econômicas. A WSSJ fornece comparativo detalhado para cada projeto.",
      },
    ],
  },
  {
    slug: "execucao-de-lajes-e-estruturas-de-concreto",
    title: "Execução de Lajes e Estruturas de Concreto",
    category: "construcao",
    categoryLabel: "Construção",
    shortDesc:
      "Lajes maciças, nervuradas, treliçadas e protendidas. Execução com controle tecnológico rigoroso.",
    fullDesc: `A WSSJ Engenharia executa todos os tipos de lajes e estruturas de concreto no Rio de Janeiro: lajes maciças, nervuradas (com cubetas ou EPS), treliçadas, protendidas e steel deck. A escolha do sistema depende do vão, cargas atuantes, prazo e viabilidade econômica de cada projeto.

Nosso processo inclui: montagem de fôrmas e escoramentos, armação com aço cortado e dobrado conforme projeto, concretagem com concreto usinado e controle de slump, cura adequada e desforma no prazo correto. Realizamos controle tecnológico completo, com moldagem de corpos de prova a cada caminhão e ensaios de compressão aos 7 e 28 dias.

Em obras no Rio de Janeiro, fatores como vento (especialmente em edifícios altos na orla), movimentação térmica e proximidade do mar influenciam o dimensionamento das lajes. A WSSJ garante cobrimentos mínimos adequados à classe de agressividade ambiental conforme a NBR 6118, utilizando concreto com relação água/cimento controlada.

Também executamos lajes de subpressão em construções abaixo do nível do lençol freático, comuns em subsolos na Zona Sul e Centro do Rio de Janeiro. Nesses casos, a impermeabilização e o sistema de drenagem são projetados em conjunto com a laje para máxima estanqueidade.`,
    keywords: [
      "laje de concreto rj",
      "execução de lajes rio de janeiro",
      "laje nervurada rj",
      "estrutura de concreto rj",
      "concretagem rj",
    ],
    icon: "🧱",
    faq: [
      {
        q: "Qual tipo de laje é mais indicado para minha obra?",
        a: "Para vãos até 5m, a laje treliçada é a opção mais econômica. Para vãos de 6 a 10m, a laje nervurada oferece melhor relação custo-benefício. Vãos acima de 10m podem exigir protensão. A WSSJ avalia o projeto e recomenda a solução ideal.",
      },
      {
        q: "Quanto tempo leva para uma laje atingir resistência total?",
        a: "O concreto atinge aproximadamente 70% da resistência aos 7 dias e 100% aos 28 dias (fck). A desforma pode ocorrer conforme o projeto estrutural, geralmente entre 14 e 21 dias para lajes. A cura com água nos primeiros 7 dias é fundamental para o desempenho final.",
      },
      {
        q: "A WSSJ fornece o concreto usinado?",
        a: "Coordenamos a compra de concreto usinado junto a usinas certificadas pelo PBQP-H. O traço é especificado pelo engenheiro conforme o projeto (fck, slump, classe de agressividade). Realizamos todo o recebimento, conferência e controle tecnológico na obra.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // REFORMAS (6)
  // ═══════════════════════════════════════════════════
  {
    slug: "reforma-residencial",
    title: "Reforma Residencial",
    category: "reformas",
    categoryLabel: "Reformas",
    shortDesc:
      "Reforma completa de casas e apartamentos no Rio de Janeiro. Do projeto à entrega, com engenheiro responsável.",
    fullDesc: `A WSSJ Engenharia realiza reformas residenciais completas no Rio de Janeiro, transformando casas e apartamentos com planejamento técnico, qualidade de execução e respeito ao cronograma. Atuamos em todos os bairros, desde apartamentos na Zona Sul até casas na Barra da Tijuca e Tijuca.

Nosso escopo inclui: demolição controlada, alvenaria, instalações elétricas e hidráulicas, revestimentos, pintura, marcenaria, esquadrias e acabamentos. Cada reforma é acompanhada por engenheiro responsável com ART registrada, conforme exige a norma NBR 16280 — obrigatória para reformas em edificações.

Entendemos que reformar a própria casa é um momento importante. Por isso, trabalhamos com cronograma visual compartilhado com o cliente, reuniões semanais de acompanhamento e controle financeiro transparente. Minimizamos transtornos com planejamento logístico adequado, isolamento de áreas e limpeza diária.

No Rio de Janeiro, reformas em apartamentos exigem aprovação do condomínio e cumprimento de horários específicos. A WSSJ cuida de toda a documentação necessária e faz a interface com a administração do edifício, garantindo conformidade e boa vizinhança durante a obra.`,
    keywords: [
      "reforma residencial rj",
      "reforma de apartamento rio de janeiro",
      "reforma de casa rj",
      "empresa de reforma rj",
      "reforma completa rj",
    ],
    icon: "🏠",
    faq: [
      {
        q: "Preciso de ART para reformar meu apartamento?",
        a: "Sim. A NBR 16280 exige que toda reforma em edificações tenha responsável técnico (engenheiro ou arquiteto) com ART ou RRT registrada. Isso garante segurança estrutural e é exigido pela maioria dos condomínios. A WSSJ fornece toda a documentação técnica necessária.",
      },
      {
        q: "Quanto tempo dura uma reforma de apartamento?",
        a: "Reformas simples (pintura, revestimentos, troca de piso) levam de 30 a 60 dias. Reformas completas com mudança de layout, instalações e acabamentos levam de 90 a 150 dias. A WSSJ fornece cronograma detalhado antes do início da obra.",
      },
      {
        q: "A WSSJ reforma apartamentos em qualquer bairro do RJ?",
        a: "Sim. Atuamos em toda a cidade do Rio de Janeiro e região metropolitana: Zona Sul, Zona Norte, Zona Oeste, Barra da Tijuca, Tijuca, Centro, Niterói e Baixada Fluminense. Consulte-nos sobre sua localidade.",
      },
      {
        q: "Vocês fazem projeto de interiores junto com a reforma?",
        a: "Trabalhamos em parceria com arquitetos e designers de interiores. Se você já tem um profissional, nossa equipe executa fielmente o projeto. Se precisar de indicação, temos parceiros de confiança para recomendar.",
      },
    ],
  },
  {
    slug: "reforma-comercial",
    title: "Reforma Comercial",
    category: "reformas",
    categoryLabel: "Reformas",
    shortDesc:
      "Reforma de lojas, escritórios, clínicas e estabelecimentos comerciais com agilidade e mínima interrupção.",
    fullDesc: `A WSSJ Engenharia executa reformas comerciais no Rio de Janeiro com foco em agilidade, qualidade e mínima interrupção das atividades do negócio. Atendemos lojas, escritórios, clínicas, restaurantes, academias e demais estabelecimentos comerciais em toda a cidade.

Entendemos que cada dia de obra parada representa prejuízo para o negócio. Por isso, trabalhamos com planejamento detalhado, etapas sequenciais que permitem funcionamento parcial e, quando possível, execução noturna ou em finais de semana. O cronograma é definido em conjunto com o cliente para minimizar impactos operacionais.

Nossos serviços incluem: adaptação de layout comercial, instalações elétricas para iluminação técnica e climatização, pisos de alto tráfego, divisórias e forros, fachadas comerciais, adequação de banheiros (acessibilidade), e instalações para sistemas de segurança e TI.

No Rio de Janeiro, reformas comerciais no Centro, Barra da Tijuca e Zona Sul frequentemente exigem adequação a normas de acessibilidade (NBR 9050), prevenção contra incêndio e licenciamento sanitário (para clínicas e restaurantes). A WSSJ coordena todas as aprovações necessárias junto aos órgãos competentes.`,
    keywords: [
      "reforma comercial rj",
      "reforma de loja rio de janeiro",
      "reforma de escritório rj",
      "reforma de clínica rj",
    ],
    icon: "🏢",
    faq: [
      {
        q: "É possível reformar minha loja sem fechar totalmente?",
        a: "Sim, na maioria dos casos. Planejamos a obra em etapas, isolando áreas com tapumes e mantendo acessos alternativos. Em reformas mais intensas, podemos trabalhar em horários alternativos. O planejamento é feito caso a caso para minimizar o impacto no seu negócio.",
      },
      {
        q: "Quais adequações são obrigatórias em reformas comerciais?",
        a: "Dependendo da atividade: acessibilidade (NBR 9050), prevenção contra incêndio (AVCB), adequação elétrica à NT da concessionária, ventilação e exaustão (para restaurantes), e licenciamento sanitário (para saúde e alimentação). A WSSJ orienta sobre todas as exigências.",
      },
      {
        q: "A WSSJ faz reformas de fachada comercial?",
        a: "Sim. Reformamos fachadas comerciais incluindo revestimento, letreiro, iluminação, pintura e adequação ao padrão visual do shopping ou galeria. Também fazemos fachadas de lojas de rua com projeto personalizado.",
      },
    ],
  },
  {
    slug: "reforma-de-fachada",
    title: "Reforma de Fachada",
    category: "reformas",
    categoryLabel: "Reformas",
    shortDesc:
      "Revitalização e reforma de fachadas prediais e comerciais com segurança e técnica especializada.",
    fullDesc: `A WSSJ Engenharia é especialista em reforma de fachadas no Rio de Janeiro, atuando em edifícios residenciais, comerciais e mistos. A fachada é o cartão de visita do imóvel e sua manutenção é fundamental para valorização patrimonial, segurança e estanqueidade.

Nossos serviços incluem: diagnóstico de patologias (trincas, infiltrações, desplacamento de revestimento), reparo estrutural de elementos de fachada, substituição ou restauração de revestimentos cerâmicos e pastilhas, pintura predial com tinta de alto desempenho, tratamento de juntas de dilatação e impermeabilização.

Trabalhamos com equipes treinadas em trabalho em altura conforme a NR 35, utilizando andaimes fachadeiros, balancins e, quando necessário, técnicas de alpinismo industrial (rapel). Toda obra de fachada conta com ART, plano de rigging e sinalização de segurança perimetral.

No Rio de Janeiro, a proximidade do mar acelera a degradação de fachadas devido à maresia e à classe de agressividade ambiental elevada (CAA III e IV). A WSSJ utiliza materiais e sistemas de pintura específicos para ambiente marítimo, garantindo durabilidade superior e proteção contra a ação de cloretos.`,
    keywords: [
      "reforma de fachada rj",
      "pintura de fachada rio de janeiro",
      "recuperação de fachada predial rj",
      "revitalização de fachada rj",
    ],
    icon: "🏗️",
    faq: [
      {
        q: "Com que frequência a fachada de um prédio precisa de manutenção?",
        a: "A NBR 5674 recomenda inspeção a cada 3 anos e repintura a cada 5 a 7 anos. Em áreas próximas ao mar no RJ, esse intervalo pode ser menor. Trincas, bolhas na pintura e desplacamento de pastilhas são sinais de que a manutenção é urgente.",
      },
      {
        q: "A reforma de fachada precisa de aprovação do condomínio?",
        a: "Sim. Reformas de fachada em condomínios exigem aprovação em assembleia, projeto técnico com ART, e comunicação à prefeitura dependendo do porte. A WSSJ cuida de toda a documentação e apresentação técnica para a assembleia.",
      },
      {
        q: "É possível trocar a pastilha da fachada por pintura?",
        a: "Sim, é uma opção comum e mais econômica. O processo inclui remoção das pastilhas soltas, regularização da superfície, aplicação de selador e pintura com tinta acrílica de alto desempenho. A WSSJ avalia a viabilidade técnica caso a caso.",
      },
    ],
  },
  {
    slug: "retrofit",
    title: "Retrofit",
    category: "reformas",
    categoryLabel: "Reformas",
    shortDesc:
      "Modernização e atualização de edificações existentes mantendo a estrutura original. Valorize seu patrimônio.",
    fullDesc: `O retrofit é o processo de modernização de edificações existentes, atualizando sistemas, acabamentos e funcionalidades sem demolir a estrutura original. A WSSJ Engenharia realiza retrofit completo no Rio de Janeiro, especialmente em edifícios do Centro, Zona Sul e bairros históricos.

O escopo de um retrofit pode incluir: atualização das instalações elétricas e hidráulicas, modernização de elevadores, substituição de esquadrias por modelos com melhor desempenho térmico e acústico, adequação ao Código de Obras atual, implementação de acessibilidade e atualização do sistema de prevenção contra incêndio.

No Rio de Janeiro, o retrofit é especialmente relevante para edifícios das décadas de 1960 a 1980, que possuem boa localização e estrutura sólida, mas sistemas defasados. Prédios no Centro (região portuária revitalizada), Flamengo, Botafogo e Copacabana são candidatos ideais para retrofit, com potencial de valorização de 30% a 60% após a intervenção.

A WSSJ trabalha com equipe multidisciplinar — engenheiros civil, elétrico e mecânico — para garantir a integração de todos os sistemas. Respeitamos as características arquitetônicas originais, adaptando o edifício às necessidades contemporâneas de conforto, segurança e eficiência energética.`,
    keywords: [
      "retrofit rj",
      "modernização de edifício rio de janeiro",
      "retrofit predial rj",
      "revitalização de edifício rj",
    ],
    icon: "🔄",
    faq: [
      {
        q: "Qual a diferença entre retrofit e reforma?",
        a: "A reforma melhora ou repara elementos existentes. O retrofit vai além: atualiza sistemas completos (elétrico, hidráulico, incêndio) para padrões atuais, podendo mudar o uso do edifício. É uma modernização profunda que valoriza significativamente o imóvel.",
      },
      {
        q: "Quanto custa um retrofit?",
        a: "O investimento varia de R$ 1.500 a R$ 4.000 por m², dependendo da extensão das atualizações. Embora superior a uma reforma simples, o retorno em valorização do imóvel costuma superar o investimento em 2 a 5 anos.",
      },
      {
        q: "O edifício precisa ser desocupado para o retrofit?",
        a: "Depende da extensão. Retrofits parciais (fachada, instalações de áreas comuns) podem ser feitos com o edifício ocupado. Retrofits completos com mudança de instalações em unidades exigem desocupação temporária por etapas. A WSSJ planeja a logística para minimizar transtornos.",
      },
    ],
  },
  {
    slug: "ampliacoes-e-modificacoes",
    title: "Ampliações e Modificações",
    category: "reformas",
    categoryLabel: "Reformas",
    shortDesc:
      "Ampliação de área construída e modificação de layout com projeto estrutural e aprovação legal.",
    fullDesc: `A WSSJ Engenharia executa ampliações e modificações em imóveis residenciais e comerciais no Rio de Janeiro, sempre com projeto técnico, cálculo estrutural e aprovação junto aos órgãos competentes. Ampliar um imóvel exige conhecimento técnico para não comprometer a estrutura existente.

Nossos serviços incluem: ampliação horizontal (construção de novos cômodos no mesmo nível), ampliação vertical (acréscimo de pavimentos), modificação de layout interno (remoção ou construção de paredes), abertura de vãos em paredes estruturais com uso de vigas metálicas ou de concreto, e integração de ambientes.

Antes de qualquer intervenção, realizamos vistoria técnica para avaliar a capacidade da estrutura existente. Se houver necessidade de remoção de paredes estruturais, calculamos e executamos o reforço necessário — vigas, pilares ou contraventamento — para manter a integridade do edifício.

No Rio de Janeiro, ampliações precisam respeitar o Código de Obras municipal, taxas de ocupação, coeficiente de aproveitamento e recuos obrigatórios. A WSSJ cuida de todo o processo de aprovação junto à Secretaria de Urbanismo, evitando irregularidades e multas futuras.`,
    keywords: [
      "ampliação de imóvel rj",
      "ampliação de casa rio de janeiro",
      "modificação de layout rj",
      "aumento de área construída rj",
    ],
    icon: "📐",
    faq: [
      {
        q: "Posso adicionar um andar na minha casa?",
        a: "Depende da estrutura existente. É necessário avaliar se a fundação e os pilares suportam o acréscimo de carga. A WSSJ realiza vistoria técnica e, se viável, projeta o reforço estrutural necessário. Também verificamos o limite de gabarito permitido pelo zoneamento.",
      },
      {
        q: "Preciso de alvará para ampliar minha casa?",
        a: "Sim. Toda ampliação de área construída exige aprovação na prefeitura com projeto arquitetônico, ART do engenheiro e, em muitos casos, alvará de obras. A WSSJ cuida de todo o licenciamento para garantir regularidade do imóvel.",
      },
      {
        q: "Posso derrubar paredes para integrar ambientes?",
        a: "Paredes de vedação (não estruturais) podem ser removidas sem problemas. Paredes estruturais podem ser removidas desde que substituídas por vigas adequadamente dimensionadas. A WSSJ avalia cada caso com análise estrutural antes de qualquer demolição.",
      },
    ],
  },
  {
    slug: "recuperacao-estrutural",
    title: "Recuperação Estrutural",
    category: "reformas",
    categoryLabel: "Reformas",
    shortDesc:
      "Reparo e reforço de estruturas danificadas por corrosão, fissuras, sobrecargas ou patologias construtivas.",
    fullDesc: `A WSSJ Engenharia realiza recuperação estrutural de edificações no Rio de Janeiro, tratando patologias como corrosão de armaduras, fissuras, desplacamento de concreto, carbonatação, recalques de fundação e danos causados por sobrecargas não previstas.

Nosso processo técnico inclui: inspeção visual e instrumentada, ensaios não destrutivos (pacometria, esclerometria, ultrassom), diagnóstico das causas, projeto de reparo e execução especializada. Cada etapa é documentada e acompanhada por engenheiro responsável.

As técnicas de recuperação que empregamos incluem: remoção de concreto deteriorado e reconstituição com graute ou argamassa polimérica, tratamento de armaduras com jateamento e aplicação de primer anticorrosivo, injeção de fissuras com resina epóxi ou poliuretano, encamisamento de pilares e vigas, e reforço com fibra de carbono (CFRP) para ganho de capacidade de carga.

No ambiente agressivo do Rio de Janeiro — com alta umidade, salinidade e chuvas intensas — a corrosão de armaduras é a principal patologia em edificações. Prédios na orla de Copacabana, Ipanema, Leblon e Niterói são especialmente suscetíveis. A WSSJ aplica sistemas de proteção catódica e revestimentos anticorrosivos para garantir a longevidade do reparo.`,
    keywords: [
      "recuperação estrutural rj",
      "reparo estrutural rio de janeiro",
      "reforço estrutural rj",
      "tratamento de corrosão em concreto rj",
    ],
    icon: "🔧",
    faq: [
      {
        q: "Como identificar que meu prédio precisa de recuperação estrutural?",
        a: "Sinais de alerta incluem: trincas em pilares ou vigas, manchas de ferrugem no concreto, desplacamento de pedaços de concreto (expondo a armadura), recalques visíveis e portas/janelas que não fecham corretamente. Ao identificar qualquer sinal, solicite uma vistoria técnica imediatamente.",
      },
      {
        q: "A recuperação estrutural é urgente?",
        a: "Depende da gravidade. Corrosão ativa com perda de seção de armadura e desplacamento de concreto é urgente, pois representa risco de colapso parcial. Fissuras estáveis e carbonatação inicial podem ser programadas. A WSSJ classifica a urgência após vistoria técnica.",
      },
      {
        q: "Quanto custa uma recuperação estrutural?",
        a: "O custo varia conforme a extensão do dano. Reparos localizados podem custar a partir de R$ 5.000. Recuperações extensas em fachadas de prédios podem chegar a centenas de milhares de reais. A WSSJ realiza levantamento detalhado e orçamento itemizado sem compromisso.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // MANUTENÇÃO (5)
  // ═══════════════════════════════════════════════════
  {
    slug: "manutencao-preventiva",
    title: "Manutenção Preventiva",
    category: "manutencao",
    categoryLabel: "Manutenção",
    shortDesc:
      "Planos de manutenção preventiva para condomínios e empresas. Evite problemas antes que aconteçam.",
    fullDesc: `A WSSJ Engenharia oferece planos completos de manutenção preventiva para condomínios residenciais, edifícios comerciais e instalações industriais no Rio de Janeiro. Prevenir é sempre mais econômico do que remediar — e a manutenção preventiva pode reduzir em até 70% os custos com reparos emergenciais.

Nosso programa inclui inspeções periódicas programadas, verificação de sistemas elétricos e hidráulicos, inspeção de coberturas e impermeabilização, avaliação de fachadas, teste de sistemas de prevenção contra incêndio, e manutenção de equipamentos prediais (bombas, quadros elétricos, para-raios).

Seguimos rigorosamente as diretrizes da NBR 5674 (Manutenção de Edificações), que estabelece critérios e periodicidade para cada tipo de intervenção. Nossos planos são personalizados conforme a idade, uso e características de cada edificação.

Atendemos condomínios em toda a cidade do Rio de Janeiro, com contratos mensais, trimestrais ou semestrais. Cada inspeção gera relatório técnico fotográfico com classificação de prioridade (urgente, importante, desejável), permitindo ao síndico ou gestor planejar investimentos de forma estratégica.`,
    keywords: [
      "manutenção preventiva predial rj",
      "manutenção de condomínio rio de janeiro",
      "plano de manutenção predial rj",
      "NBR 5674 rj",
    ],
    icon: "🛡️",
    faq: [
      {
        q: "Qual a periodicidade ideal para manutenção preventiva?",
        a: "A NBR 5674 define periodicidades específicas: sistemas elétricos a cada 6 meses, hidráulicos a cada 12 meses, impermeabilização a cada 12 meses, fachadas a cada 3 anos. A WSSJ elabora um calendário completo personalizado para seu edifício.",
      },
      {
        q: "A manutenção preventiva é obrigatória para condomínios?",
        a: "Sim. A NBR 5674 e a NBR 14037 estabelecem que é responsabilidade do proprietário/condomínio manter o edifício em condições de segurança e habitabilidade. O não cumprimento pode gerar responsabilidade civil em caso de acidentes.",
      },
      {
        q: "Como funciona o contrato de manutenção preventiva?",
        a: "O contrato define a periodicidade das visitas, escopo de inspeção, relatórios técnicos e atendimento prioritário para emergências. Os valores são mensais fixos, proporcionando previsibilidade orçamentária ao condomínio.",
      },
    ],
  },
  {
    slug: "manutencao-corretiva",
    title: "Manutenção Corretiva",
    category: "manutencao",
    categoryLabel: "Manutenção",
    shortDesc:
      "Reparos urgentes e correção de problemas em edificações. Atendimento ágil para resolver o que já aconteceu.",
    fullDesc: `A WSSJ Engenharia atende chamados de manutenção corretiva em edificações no Rio de Janeiro com agilidade e competência técnica. Quando o problema já aconteceu — vazamento, curto-circuito, trinca estrutural, infiltração — é fundamental agir rapidamente para evitar agravamento e maiores prejuízos.

Nosso atendimento corretivo abrange: reparos em instalações hidráulicas (vazamentos, entupimentos, rompimento de tubulações), reparos elétricos (curtos, quedas de energia, substituição de componentes), correção de infiltrações, reparo de revestimentos danificados, e intervenções estruturais emergenciais.

Cada manutenção corretiva realizada pela WSSJ inclui diagnóstico da causa raiz do problema — não apenas o tratamento do sintoma. Identificamos a origem da falha para que a solução seja definitiva, evitando recorrência. Quando aplicável, recomendamos ações preventivas para evitar novos problemas semelhantes.

Atendemos condomínios e empresas em toda a região metropolitana do Rio de Janeiro. Clientes com contrato de manutenção preventiva têm prioridade no atendimento e condições especiais para serviços corretivos. Solicite atendimento pelo WhatsApp para resposta rápida.`,
    keywords: [
      "manutenção corretiva predial rj",
      "reparo emergencial rio de janeiro",
      "manutenção de edifício rj",
      "conserto predial rj",
    ],
    icon: "🔨",
    faq: [
      {
        q: "Qual o prazo de atendimento para manutenção corretiva?",
        a: "Para clientes com contrato, o atendimento emergencial ocorre em até 4 horas em dias úteis. Para chamados avulsos, o prazo médio é de 24 a 48 horas. Situações de risco iminente (vazamento grave, problema elétrico com risco de incêndio) recebem prioridade máxima.",
      },
      {
        q: "A WSSJ atende manutenção corretiva em finais de semana?",
        a: "Sim, para clientes com contrato de manutenção. O atendimento de emergência funciona 24/7. Chamados avulsos em finais de semana estão sujeitos a disponibilidade e podem ter acréscimo de valor conforme tabela contratual.",
      },
      {
        q: "Como diferenciar manutenção corretiva de preventiva?",
        a: "A preventiva é programada e visa evitar falhas (inspeções, ajustes, substituição de componentes desgastados). A corretiva é reativa — acontece após a falha para restaurar a funcionalidade. O ideal é que a preventiva reduza ao máximo a necessidade de corretivas.",
      },
    ],
  },
  {
    slug: "manutencao-eletrica",
    title: "Manutenção Elétrica",
    category: "manutencao",
    categoryLabel: "Manutenção",
    shortDesc:
      "Manutenção e adequação de instalações elétricas prediais e residenciais conforme NR-10 e NBR 5410.",
    fullDesc: `A WSSJ Engenharia realiza manutenção elétrica predial e residencial no Rio de Janeiro, garantindo segurança, eficiência e conformidade com as normas NR-10 (segurança em instalações elétricas) e NBR 5410 (instalações elétricas de baixa tensão).

Nossos serviços incluem: inspeção e termografia de quadros elétricos, reaperto de conexões, verificação de aterramento, teste de disjuntores e dispositivos de proteção (DR, DPS), medição de resistência de isolamento, verificação de para-raios (SPDA) conforme NBR 5419, e adequação de instalações antigas ao padrão atual.

Instalações elétricas desatualizadas são a principal causa de incêndios em edificações no Brasil. No Rio de Janeiro, prédios construídos antes de 1990 frequentemente possuem fiação subdimensionada para a demanda atual (ar-condicionado, chuveiros, equipamentos eletrônicos), quadros sem proteção adequada e aterramento insuficiente.

A WSSJ atende condomínios, empresas e residências com planos de manutenção elétrica periódica ou chamados avulsos. Todos os serviços são executados por profissionais habilitados conforme NR-10, com uso de EPI adequado e procedimentos de bloqueio e etiquetagem (lockout/tagout).`,
    keywords: [
      "manutenção elétrica predial rj",
      "eletricista rio de janeiro",
      "adequação elétrica rj",
      "NBR 5410 rj",
      "manutenção elétrica condomínio rj",
    ],
    icon: "⚡",
    faq: [
      {
        q: "Com que frequência devo fazer manutenção elétrica?",
        a: "A NBR 5674 recomenda inspeção elétrica a cada 6 meses para áreas comuns de condomínios e anualmente para unidades residenciais. Termografia de quadros elétricos deve ser feita anualmente. Para instalações comerciais e industriais, a periodicidade pode ser menor.",
      },
      {
        q: "Minha casa é antiga. Preciso trocar toda a fiação?",
        a: "Não necessariamente toda, mas é provável que seja necessário. Uma inspeção completa identifica trechos com isolamento comprometido, fios subdimensionados e pontos sem aterramento. A WSSJ faz o diagnóstico e propõe a solução mais econômica e segura.",
      },
      {
        q: "O que é termografia e por que é importante?",
        a: "A termografia utiliza câmera infravermelha para detectar pontos de aquecimento anormal em quadros e conexões elétricas — sinais de mau contato, sobrecarga ou componentes danificados. É um ensaio preventivo que identifica falhas antes que causem incêndio ou interrupção.",
      },
    ],
  },
  {
    slug: "manutencao-hidraulica",
    title: "Manutenção Hidráulica",
    category: "manutencao",
    categoryLabel: "Manutenção",
    shortDesc:
      "Manutenção de sistemas hidráulicos prediais: água fria, água quente, esgoto, águas pluviais e bombas.",
    fullDesc: `A WSSJ Engenharia realiza manutenção hidráulica completa em edificações no Rio de Janeiro, abrangendo sistemas de água fria, água quente, esgoto sanitário, águas pluviais, bombas de recalque e reservatórios. A manutenção hidráulica adequada previne vazamentos, contaminação e desperdício de água.

Nossos serviços incluem: inspeção de tubulações e conexões, detecção de vazamentos (inclusive ocultos, com equipamento acústico), limpeza e desinfecção de reservatórios, manutenção de bombas de recalque e pressurização, desobstrução de redes de esgoto e águas pluviais, e reparo ou substituição de registros e válvulas.

A NBR 5674 exige inspeção periódica dos sistemas hidráulicos, incluindo: verificação de reservatórios a cada 6 meses (limpeza anual obrigatória), inspeção de bombas a cada 3 meses, verificação de válvulas de descarga e registros anualmente, e inspeção de tubulações aparentes a cada 12 meses.

No Rio de Janeiro, o sistema hidráulico enfrenta desafios específicos: pressão da rede variável (especialmente em áreas altas como Santa Teresa e Alto da Boa Vista), qualidade da água que demanda filtragem adicional, e chuvas intensas que exigem sistemas de drenagem bem dimensionados. A WSSJ conhece essas particularidades e adapta as soluções à realidade carioca.`,
    keywords: [
      "manutenção hidráulica predial rj",
      "encanador rio de janeiro",
      "reparo hidráulico rj",
      "manutenção de bomba predial rj",
      "limpeza de reservatório rj",
    ],
    icon: "🚿",
    faq: [
      {
        q: "Como saber se meu prédio tem vazamento oculto?",
        a: "Sinais incluem: aumento inexplicável na conta de água, manchas de umidade em paredes/teto, mofo recorrente, e queda de pressão nos pontos de consumo. A WSSJ utiliza equipamento de detecção acústica para localizar vazamentos sem quebrar paredes desnecessariamente.",
      },
      {
        q: "Com que frequência o reservatório deve ser limpo?",
        a: "A legislação sanitária e a NBR 5674 recomendam limpeza e desinfecção dos reservatórios a cada 6 meses para condomínios e anualmente para residências. A WSSJ realiza a limpeza com equipe treinada, incluindo desinfecção com solução de hipoclorito e coleta de amostra para análise.",
      },
      {
        q: "A WSSJ faz troca de coluna de esgoto em prédios antigos?",
        a: "Sim. Prédios com mais de 30 anos frequentemente necessitam substituição das colunas de esgoto (ferro fundido corroído). Trabalhamos com substituição por PVC de alta resistência, executando por etapas para minimizar a interrupção do uso dos banheiros.",
      },
    ],
  },
  {
    slug: "reparos-gerais",
    title: "Reparos Gerais",
    category: "manutencao",
    categoryLabel: "Manutenção",
    shortDesc:
      "Serviços gerais de manutenção e pequenos reparos para residências, condomínios e empresas no RJ.",
    fullDesc: `A WSSJ Engenharia atende demandas de reparos gerais no Rio de Janeiro, oferecendo soluções rápidas e profissionais para problemas do dia a dia em residências, condomínios e estabelecimentos comerciais. Nosso diferencial é a qualidade técnica mesmo em serviços menores.

Entre os reparos que realizamos: conserto de portas e janelas, troca de fechaduras e dobradiças, reparo em pisos e revestimentos, vedação de trincas e fissuras, conserto de telhados e calhas, substituição de luminárias e tomadas, ajuste de portões, e reparos em áreas externas (muros, calçadas, grades).

Para condomínios, oferecemos o serviço de manutenção predial continuada, onde um profissional polivalente atende demandas semanais de reparos nas áreas comuns: corredores, garagens, salão de festas, piscina, playground e áreas técnicas. Isso mantém o condomínio sempre em boas condições e evita acúmulo de pendências.

Todos os reparos realizados pela WSSJ utilizam materiais de qualidade e são executados com capricho e acabamento profissional. Mesmo os serviços mais simples recebem o mesmo padrão de atendimento e organização que aplicamos em obras de grande porte.`,
    keywords: [
      "reparos gerais rj",
      "marido de aluguel rio de janeiro",
      "manutenção residencial rj",
      "pequenos reparos rj",
    ],
    icon: "🛠️",
    faq: [
      {
        q: "A WSSJ faz pequenos reparos ou só obras grandes?",
        a: "Fazemos ambos. Entendemos que pequenos reparos mal feitos causam grandes problemas no futuro. Por isso, atendemos desde a troca de uma torneira até uma reforma completa, sempre com o mesmo padrão de qualidade e profissionalismo.",
      },
      {
        q: "Qual o valor mínimo para um chamado de reparo?",
        a: "Trabalhamos com valor de visita técnica + orçamento por serviço. Para clientes com contrato de manutenção, os reparos nas áreas comuns estão inclusos no plano. Solicite um orçamento pelo WhatsApp informando o reparo necessário.",
      },
      {
        q: "Vocês atendem reparos em finais de semana?",
        a: "Sim, mediante agendamento prévio. Reparos emergenciais em finais de semana estão disponíveis para clientes com contrato. Chamados avulsos de fim de semana estão sujeitos a disponibilidade.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // INSTALAÇÕES (3)
  // ═══════════════════════════════════════════════════
  {
    slug: "instalacoes-eletricas",
    title: "Instalações Elétricas",
    category: "instalacoes",
    categoryLabel: "Instalações",
    shortDesc:
      "Projeto e execução de instalações elétricas residenciais, comerciais e prediais conforme NBR 5410.",
    fullDesc: `A WSSJ Engenharia projeta e executa instalações elétricas completas no Rio de Janeiro, atendendo residências, comércios e edifícios. Seguimos rigorosamente a NBR 5410 (instalações elétricas de baixa tensão) e a NR-10 (segurança em serviços com eletricidade), garantindo uma instalação segura, eficiente e normatizada.

Nossos serviços incluem: projeto elétrico com memorial de cálculo, dimensionamento de fiação e disjuntores, instalação de quadros de distribuição com barramento, circuitos de iluminação e tomadas, circuitos especiais (ar-condicionado, chuveiro, forno), aterramento (TN-S, TN-C-S ou TT), dispositivos de proteção contra surtos (DPS) e diferencial residual (DR).

Para empreendimentos comerciais, executamos instalações trifásicas, quadros com medição individualizada, sistemas de iluminação técnica (escritórios, lojas, consultórios) e infraestrutura para rede de dados e telefonia. Toda instalação é dimensionada com fator de demanda adequado para evitar sobrecargas futuras.

No Rio de Janeiro, a concessionária Enel Rio exige padrões específicos de entrada de energia. A WSSJ projeta e executa o padrão de entrada conforme as normas técnicas da distribuidora, realizando o pedido de ligação e acompanhando a vistoria até a energização definitiva.`,
    keywords: [
      "instalação elétrica rj",
      "eletricista rio de janeiro",
      "projeto elétrico rj",
      "instalação elétrica residencial rj",
      "NBR 5410",
    ],
    icon: "💡",
    faq: [
      {
        q: "Preciso de projeto elétrico para minha casa?",
        a: "Sim, toda instalação elétrica deve ter projeto conforme a NBR 5410. O projeto define o dimensionamento correto de fiação, disjuntores e circuitos, evitando sobrecargas e riscos de incêndio. A WSSJ elabora e executa o projeto completo.",
      },
      {
        q: "Quanto custa uma instalação elétrica nova?",
        a: "O custo varia de R$ 80 a R$ 200 por m², dependendo da complexidade (residencial simples vs. comercial com ar-condicionado). Inclui projeto, material (fios, disjuntores, quadro, eletrodutos) e mão de obra. Solicite orçamento detalhado sem compromisso.",
      },
      {
        q: "A WSSJ instala sistema de energia solar?",
        a: "Trabalhamos com parceiros especializados em energia fotovoltaica. A WSSJ executa a parte elétrica de conexão à rede (on-grid) e a adequação do quadro para receber o inversor. Para o sistema de painéis, indicamos empresas certificadas.",
      },
    ],
  },
  {
    slug: "instalacoes-hidraulicas",
    title: "Instalações Hidráulicas",
    category: "instalacoes",
    categoryLabel: "Instalações",
    shortDesc:
      "Projeto e execução de instalações hidráulicas: água fria, quente, esgoto, pluvial e gás.",
    fullDesc: `A WSSJ Engenharia projeta e executa instalações hidráulicas completas no Rio de Janeiro, incluindo sistemas de água fria, água quente, esgoto sanitário, águas pluviais e gás. Seguimos a NBR 5626 (água fria), NBR 7198 (água quente), NBR 8160 (esgoto) e NBR 10844 (águas pluviais).

Nossos serviços abrangem: dimensionamento de tubulações e reservatórios, instalação de bombas de recalque e pressurização, redes de distribuição com registros de bloqueio e regulagem, sistema de esgoto com ventilação adequada, rede de águas pluviais com caixas de inspeção e drenagem, e instalação de aquecedores (gás, elétrico e solar).

Utilizamos materiais de primeira linha: tubos de PPR para água quente, PVC soldável para água fria, PVC série normal ou reforçada para esgoto, e tubulação de cobre ou CPVC conforme a aplicação. Cada material é selecionado conforme a pressão de trabalho, temperatura e compatibilidade química.

No Rio de Janeiro, particularidades como intermitência no abastecimento em alguns bairros, necessidade de reservatórios adequados e variações de pressão da rede exigem dimensionamento criterioso. A WSSJ projeta sistemas com reserva de emergência, válvulas de retenção e dispositivos que garantem abastecimento contínuo mesmo em períodos de baixa pressão da rede.`,
    keywords: [
      "instalação hidráulica rj",
      "encanador rio de janeiro",
      "projeto hidráulico rj",
      "instalação de água e esgoto rj",
    ],
    icon: "🔧",
    faq: [
      {
        q: "Quanto custa uma instalação hidráulica completa?",
        a: "O custo varia de R$ 100 a R$ 250 por m² construído, dependendo do número de banheiros, cozinha, área de serviço e complexidade. Uma residência de 100m² com 2 banheiros custa em média R$ 15.000 a R$ 25.000 (material e mão de obra).",
      },
      {
        q: "Qual a diferença entre PPR e PVC para água quente?",
        a: "PPR (Polipropileno Copolímero Random) é mais resistente a altas temperaturas e pressões, com vida útil superior a 50 anos. PVC é mais econômico, mas não é recomendado para água quente acima de 60°C. A WSSJ utiliza PPR como padrão para linhas de água quente.",
      },
      {
        q: "A WSSJ instala sistema de reuso de água?",
        a: "Sim. Projetamos e instalamos sistemas de captação de água de chuva e reuso de águas cinzas para irrigação e descargas sanitárias. É uma solução sustentável que reduz o consumo de água potável em até 30%.",
      },
    ],
  },
  {
    slug: "servicos-de-drywall",
    title: "Serviços de Drywall",
    category: "instalacoes",
    categoryLabel: "Instalações",
    shortDesc:
      "Instalação de paredes, forros e revestimentos em drywall com acabamento profissional.",
    fullDesc: `A WSSJ Engenharia executa serviços de drywall (gesso acartonado) no Rio de Janeiro para residências, escritórios e empreendimentos comerciais. O drywall é uma solução versátil para divisórias, forros, nichos, sancas e revestimentos, com rapidez de instalação e excelente acabamento.

Nossos serviços incluem: paredes divisórias (standard, resistentes à umidade - RU, e resistentes ao fogo - RF), forros lisos e decorativos, sancas abertas e fechadas para iluminação indireta, nichos e prateleiras estruturadas, e revestimento de paredes existentes para correção de imperfeições.

Trabalhamos com chapas Placo, Knauf e Gypsum, montadas sobre estrutura de perfis de aço galvanizado com espaçamento e fixação conforme normas do fabricante. As juntas são tratadas com fita e massa específicas para drywall, resultando em superfícies perfeitamente lisas e prontas para pintura.

O drywall é especialmente vantajoso em reformas de apartamentos no Rio de Janeiro, pois é leve (não sobrecarrega a estrutura), limpo (sem argamassa e entulho), e rápido (uma divisória de ambiente pode ser instalada em um dia). Para áreas úmidas (banheiros e cozinhas), utilizamos chapas RU (verde) com tratamento hidrofugante.`,
    keywords: [
      "drywall rj",
      "gesso acartonado rio de janeiro",
      "forro de gesso rj",
      "divisória drywall rj",
      "sanca de gesso rj",
    ],
    icon: "📦",
    faq: [
      {
        q: "Drywall é resistente o suficiente para paredes?",
        a: "Sim. Uma parede de drywall standard suporta até 30kg por ponto de fixação com buchas especiais. Para cargas maiores (TV, armários), utilizamos reforços metálicos internos ou chapas duplas. O desempenho acústico pode ser potencializado com lã mineral no interior.",
      },
      {
        q: "Posso usar drywall no banheiro?",
        a: "Sim, utilizando chapas RU (resistentes à umidade), identificadas pela cor verde. Essas chapas possuem tratamento hidrofugante no cartão e no núcleo de gesso. Para box de chuveiro, recomendamos revestimento cerâmico sobre a chapa RU com impermeabilização prévia.",
      },
      {
        q: "Quanto custa o m² de drywall instalado?",
        a: "O custo médio varia de R$ 90 a R$ 180 por m² instalado (material e mão de obra), dependendo do tipo de chapa, acabamento e complexidade. Forros simples ficam na faixa inferior; paredes com isolamento acústico e sancas decorativas, na faixa superior.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // REVESTIMENTOS (4)
  // ═══════════════════════════════════════════════════
  {
    slug: "revestimento-de-pisos-e-paredes",
    title: "Revestimento de Pisos e Paredes",
    category: "revestimentos",
    categoryLabel: "Revestimentos",
    shortDesc:
      "Assentamento de porcelanato, cerâmica, mármores, granitos e revestimentos especiais com acabamento impecável.",
    fullDesc: `A WSSJ Engenharia executa serviços de revestimento de pisos e paredes no Rio de Janeiro com padrão de qualidade superior. Trabalhamos com todos os tipos de materiais: porcelanato (técnico e esmaltado), cerâmica, mármores, granitos, pastilhas, cimentícios e revestimentos vinílicos.

Nosso processo garante resultado perfeito: preparação do substrato (regularização e imprimação), aplicação de argamassa colante adequada ao tipo de revestimento (AC-I, AC-II, AC-III), assentamento com espaçadores calibrados, rejuntamento com material flexível e limpeza final. Para porcelanatos retificados, trabalhamos com juntas mínimas de 1,5mm, criando o efeito visual de continuidade.

Cada tipo de ambiente exige especificação técnica diferente. Áreas molhadas (banheiros, varandas) demandam pisos com coeficiente de atrito adequado (antiderrapante). Garagens exigem porcelanato técnico de alta resistência à abrasão. Áreas externas precisam de materiais com absorção de água inferior a 0,5%.

No Rio de Janeiro, a ampla oferta de materiais em polos como Barra da Tijuca (Casa Shopping, Portobello Shop) e Centro permite acesso a revestimentos de todas as faixas. A WSSJ assessora o cliente na escolha do material mais adequado ao uso, tráfego e orçamento do projeto.`,
    keywords: [
      "revestimento de piso rj",
      "assentamento de porcelanato rio de janeiro",
      "colocação de cerâmica rj",
      "revestimento de parede rj",
    ],
    icon: "🪨",
    faq: [
      {
        q: "Qual a diferença entre porcelanato e cerâmica?",
        a: "Porcelanato é prensado a pressões e temperaturas mais altas, resultando em menor absorção de água (< 0,5%), maior resistência mecânica e à abrasão. Cerâmica tem absorção de 3% a 6% e é mais indicada para paredes e áreas de baixo tráfego. O porcelanato técnico é o mais resistente de todos.",
      },
      {
        q: "Quanto custa o m² de assentamento de porcelanato?",
        a: "O custo de mão de obra para assentamento varia de R$ 60 a R$ 120 por m², dependendo do formato da peça (grandes formatos custam mais), tipo de paginação e complexidade do ambiente. O material (porcelanato + argamassa + rejunte) é à parte.",
      },
      {
        q: "É possível colocar porcelanato sobre piso existente?",
        a: "Sim, desde que o piso existente esteja bem aderido, nivelado e a altura final seja compatível com portas e soleiras. Utilizamos argamassa AC-III para colagem sobre piso existente. A WSSJ avalia a viabilidade em cada caso.",
      },
    ],
  },
  {
    slug: "pintura-predial-e-residencial",
    title: "Pintura Predial e Residencial",
    category: "revestimentos",
    categoryLabel: "Revestimentos",
    shortDesc:
      "Pintura interna e externa de edifícios e residências com tintas premium e preparo profissional de superfícies.",
    fullDesc: `A WSSJ Engenharia realiza serviços de pintura predial e residencial no Rio de Janeiro com qualidade profissional, desde a preparação da superfície até a aplicação final. Uma pintura bem executada protege o imóvel, renova a aparência e pode valorizar o patrimônio em até 15%.

Nosso processo inclui: lixamento e remoção de tintas soltas, tratamento de trincas e fissuras com selante flexível, aplicação de massa corrida (interno) ou acrílica (externo), lixamento entre demãos, aplicação de selador/fundo preparador e duas a três demãos de tinta de acabamento. Cada etapa é fundamental para a durabilidade do resultado.

Trabalhamos com tintas de alto desempenho das marcas Suvinil, Coral e Sherwin-Williams. Para áreas externas e fachadas, utilizamos tintas acrílicas premium com proteção UV, resistência a fungos e algas, e alta lavabilidade. Para áreas internas, tintas látex PVA ou acrílicas conforme o nível de acabamento desejado.

No clima quente e úmido do Rio de Janeiro, a escolha correta da tinta e do sistema de pintura é crucial. Fachadas expostas ao sol intenso e à maresia precisam de produtos específicos com filtro UV e aditivos antifungos. A WSSJ especifica o sistema de pintura adequado para cada exposição, garantindo durabilidade de 5 a 7 anos para fachadas.`,
    keywords: [
      "pintura predial rj",
      "pintura residencial rio de janeiro",
      "pintura de fachada rj",
      "pintor de edifício rj",
    ],
    icon: "🎨",
    faq: [
      {
        q: "Com que frequência devo repintar meu imóvel?",
        a: "Para áreas internas, a cada 3 a 5 anos. Para fachadas, a cada 5 a 7 anos. Em áreas muito expostas ao sol ou próximas ao mar no RJ, o intervalo pode ser menor. Sinais de que é hora de repintar: desbotamento, bolhas, descascamento e manchas de mofo.",
      },
      {
        q: "Qual a diferença entre tinta PVA e acrílica?",
        a: "Tinta PVA (látex) é mais econômica, indicada para forros e paredes internas de ambientes secos. Tinta acrílica tem melhor resistência à umidade, é lavável e indicada para cozinhas, banheiros, áreas externas e fachadas. Para o RJ, recomendamos acrílica em praticamente todos os ambientes.",
      },
      {
        q: "A WSSJ faz pintura de fachada com rapel?",
        a: "Sim. Para edifícios onde o andaime fachadeiro não é viável, utilizamos técnicas de alpinismo industrial (rapel) com profissionais certificados em NR-35. A técnica é mais ágil e menos invasiva, ideal para pintura de fachadas de edifícios altos.",
      },
    ],
  },
  {
    slug: "impermeabilizacao",
    title: "Impermeabilização",
    category: "revestimentos",
    categoryLabel: "Revestimentos",
    shortDesc:
      "Impermeabilização de lajes, terraços, banheiros, piscinas e subsolos com sistemas de alta performance.",
    fullDesc: `A WSSJ Engenharia é especialista em impermeabilização no Rio de Janeiro, protegendo edificações contra infiltrações e umidade com sistemas de alto desempenho. A impermeabilização é um dos investimentos mais importantes em qualquer construção — uma falha pode comprometer revestimentos, instalações e até a estrutura.

Nossos serviços incluem: impermeabilização de lajes de cobertura, terraços e varandas (manta asfáltica ou membrana líquida), banheiros e áreas molhadas (argamassa polimérica flexível), reservatórios e piscinas (manta asfáltica ou cristalização), subsolos e fundações (manta PEAD, bentonita ou injeção de resina), e tratamento de juntas de dilatação.

Trabalhamos com os melhores sistemas do mercado: mantas asfálticas Vedacit e Denver (tipo III ou IV conforme exposição), membranas acrílicas Sikafill, argamassas poliméricas Sika e MC-Bauchemie, e sistemas de cristalização Penetron para concreto. A escolha do sistema depende da área, tráfego, exposição e substrato.

No Rio de Janeiro, as chuvas intensas de verão e a alta umidade relativa tornam a impermeabilização ainda mais crítica. Lajes expostas sofrem dilatação térmica significativa (variação de até 40°C entre dia e noite), exigindo sistemas flexíveis que acompanhem a movimentação sem romper. A WSSJ dimensiona a impermeabilização considerando todas essas variáveis climáticas.`,
    keywords: [
      "impermeabilização rj",
      "impermeabilização de laje rio de janeiro",
      "impermeabilização de banheiro rj",
      "manta asfáltica rj",
      "tratamento de infiltração rj",
    ],
    icon: "💧",
    faq: [
      {
        q: "Qual o melhor sistema de impermeabilização para laje?",
        a: "Para lajes transitáveis, a manta asfáltica tipo III com proteção mecânica (contrapiso) é o sistema mais confiável. Para lajes não transitáveis, membranas acrílicas com tela de poliéster são uma opção mais econômica. A WSSJ avalia cada caso e recomenda o sistema ideal.",
      },
      {
        q: "A impermeabilização tem garantia?",
        a: "Sim. A WSSJ oferece garantia de 5 anos para serviços de impermeabilização, conforme as condições de uso e manutenção. Sistemas como manta asfáltica têm vida útil projetada de 10 a 15 anos quando bem executados e mantidos.",
      },
      {
        q: "É possível impermeabilizar sem remover o piso existente?",
        a: "Em alguns casos, sim. Membranas líquidas podem ser aplicadas sobre pisos existentes (cerâmica, cimentado) em áreas como terraços e varandas. Para banheiros, geralmente é necessário remover o revestimento para aplicação da argamassa polimérica no substrato. A WSSJ avalia a melhor solução para cada situação.",
      },
      {
        q: "Minha laje está infiltrando. O que fazer?",
        a: "O primeiro passo é identificar a origem da infiltração (falha na impermeabilização, trinca, junta de dilatação, passagem de tubulação). A WSSJ faz o diagnóstico e propõe a solução: desde reparos localizados até refazer toda a impermeabilização, dependendo da extensão do problema.",
      },
    ],
  },
  {
    slug: "servicos-de-alvenaria",
    title: "Serviços de Alvenaria",
    category: "revestimentos",
    categoryLabel: "Revestimentos",
    shortDesc:
      "Construção de paredes, muros, churrasqueiras, reboco e serviços gerais de alvenaria no Rio de Janeiro.",
    fullDesc: `A WSSJ Engenharia executa serviços completos de alvenaria no Rio de Janeiro, desde a construção de paredes e muros até acabamentos como reboco, chapisco e emboço. A alvenaria é a base de qualquer construção convencional e exige mão de obra qualificada para garantir prumo, nível e esquadro.

Nossos serviços incluem: alvenaria de vedação (blocos cerâmicos e de concreto), alvenaria estrutural, muros de divisa e arrimo (com cálculo estrutural), churrasqueiras e espaços gourmet, reboco interno e externo, chapisco rolado, emboço para regularização, e massa fina para acabamento.

Trabalhamos com materiais certificados: blocos cerâmicos de 14x19x29cm e 19x19x29cm conforme NBR 15270, blocos de concreto conforme NBR 6136, e argamassas dosadas em obra ou industrializadas. O controle de qualidade inclui verificação de prumo a cada fiada, preenchimento completo de juntas e cura adequada da argamassa.

Para construções no Rio de Janeiro, onde o clima úmido favorece o aparecimento de umidade ascendente, executamos impermeabilização de baldrame antes do início da alvenaria. Também aplicamos vergas e contravergas reforçadas sobre e sob vãos de portas e janelas, prevenindo trincas comuns em edificações da região.`,
    keywords: [
      "alvenaria rj",
      "pedreiro rio de janeiro",
      "construção de muro rj",
      "reboco rj",
      "serviços de pedreiro rj",
    ],
    icon: "🧱",
    faq: [
      {
        q: "Qual a diferença entre bloco cerâmico e de concreto?",
        a: "Bloco cerâmico é mais leve, tem melhor isolamento térmico e é mais fácil de cortar. Bloco de concreto é mais resistente mecanicamente e tem melhor aderência para chapisco. A escolha depende do projeto: para alvenaria estrutural, usa-se concreto; para vedação, ambos funcionam bem.",
      },
      {
        q: "Quanto tempo leva para rebocar uma casa?",
        a: "Uma equipe de 2 pedreiros reboca em média 20 a 30m² por dia. Uma casa de 100m² (considerando paredes internas e externas) leva de 15 a 25 dias úteis para reboco completo, incluindo chapisco e cura entre camadas.",
      },
      {
        q: "A WSSJ constrói muros de arrimo?",
        a: "Sim. Muros de arrimo exigem cálculo estrutural específico considerando empuxo de terra, sobrecarga e nível do lençol freático. A WSSJ projeta e executa muros de arrimo em concreto armado, gabiões e solo grampeado conforme a necessidade do terreno.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // INFRAESTRUTURA (3)
  // ═══════════════════════════════════════════════════
  {
    slug: "pavimentacao-e-drenagem",
    title: "Pavimentação e Drenagem",
    category: "infraestrutura",
    categoryLabel: "Infraestrutura",
    shortDesc:
      "Pavimentação de estacionamentos, pátios e vias internas. Sistemas de drenagem para escoamento pluvial.",
    fullDesc: `A WSSJ Engenharia executa serviços de pavimentação e drenagem no Rio de Janeiro para estacionamentos, pátios industriais, condomínios, loteamentos e vias internas. Uma pavimentação bem projetada e drenagem eficiente são fundamentais para a durabilidade e funcionalidade de qualquer empreendimento.

Nossos serviços de pavimentação incluem: piso intertravado (bloquete), asfalto (CBUQ), concreto (simples e armado), paralelepípedo e petit-pavé. Cada tipo é indicado para uma aplicação: intertravado para estacionamentos e calçadas, asfalto para vias com tráfego pesado, e concreto para pátios industriais com carga elevada.

O sistema de drenagem projetado pela WSSJ contempla: canaletas de concreto, grelhas metálicas, caixas de inspeção, tubulações de PVC ou concreto, poços de visita e, quando necessário, cisternas de retenção para controle de vazão. Dimensionamos conforme a área de contribuição, índice pluviométrico local e taxa de infiltração do solo.

O Rio de Janeiro, com seu regime de chuvas intensas (especialmente entre novembro e março), exige sistemas de drenagem robustos. A WSSJ conhece as normas da CEDAE e da Rio-Águas para ligações pluviais e dimensiona os sistemas com fator de segurança adequado para eventos climáticos extremos, cada vez mais frequentes na cidade.`,
    keywords: [
      "pavimentação rj",
      "drenagem pluvial rio de janeiro",
      "piso intertravado rj",
      "bloquete rj",
      "pavimentação de estacionamento rj",
    ],
    icon: "🛤️",
    faq: [
      {
        q: "Qual o melhor tipo de pavimentação para estacionamento?",
        a: "Piso intertravado (bloquete) é a opção mais versátil: permite drenagem parcial, é de fácil manutenção (substituição pontual de peças) e tem boa estética. Para estacionamentos de tráfego pesado (caminhões), asfalto ou concreto armado são mais indicados.",
      },
      {
        q: "A WSSJ projeta o sistema de drenagem?",
        a: "Sim. Realizamos levantamento topográfico, estudo de contribuição pluvial e dimensionamento hidráulico do sistema completo. O projeto inclui planta de drenagem, perfis e memorial de cálculo, conforme as normas da prefeitura e concessionária.",
      },
      {
        q: "Quanto custa o m² de piso intertravado?",
        a: "O custo varia de R$ 80 a R$ 150 por m² (material e mão de obra), dependendo do tipo de bloquete (retangular, sextavado, bi-camada), espessura (6cm ou 8cm) e preparo do subleito. A WSSJ fornece orçamento detalhado após visita técnica.",
      },
    ],
  },
  {
    slug: "adequacoes-tecnicas-e-normativas",
    title: "Adequações Técnicas e Normativas",
    category: "infraestrutura",
    categoryLabel: "Infraestrutura",
    shortDesc:
      "Adequação de edificações às normas de acessibilidade, incêndio, elétrica e segurança do trabalho.",
    fullDesc: `A WSSJ Engenharia realiza adequações técnicas e normativas em edificações no Rio de Janeiro, garantindo conformidade com as legislações vigentes. Prédios antigos, estabelecimentos comerciais e áreas comuns de condomínios frequentemente precisam de adequações para atender às normas de segurança, acessibilidade e prevenção contra incêndio.

Nossos serviços incluem: adequação de acessibilidade conforme NBR 9050 (rampas, barras de apoio, pisos táteis, banheiros adaptados, sinalização), adequação do sistema de prevenção contra incêndio conforme Código de Segurança Contra Incêndio do RJ (COSCIP), adequação elétrica conforme NBR 5410 e NTs da concessionária, e adequação de segurança do trabalho conforme NRs aplicáveis.

A obtenção do Auto de Vistoria do Corpo de Bombeiros (AVCB) é obrigatória para estabelecimentos comerciais no Rio de Janeiro. A WSSJ projeta e executa o sistema de prevenção completo: extintores, hidrantes, sinalização, iluminação de emergência, alarme e detecção, sprinklers (quando exigido) e saídas de emergência.

Para acessibilidade, adequamos edifícios existentes com soluções que respeitam as limitações construtivas: rampas com inclinação conforme norma, plataformas elevatórias, barras de apoio em sanitários, pisos táteis em rotas acessíveis e sinalização visual e tátil. A WSSJ garante que seu imóvel esteja em conformidade com a lei e acessível a todos.`,
    keywords: [
      "adequação normativa rj",
      "acessibilidade edificações rio de janeiro",
      "AVCB rj",
      "adequação contra incêndio rj",
      "NBR 9050 rj",
    ],
    icon: "📋",
    faq: [
      {
        q: "Meu prédio precisa de AVCB?",
        a: "Todo edifício com área superior a 150m² ou uso comercial no Rio de Janeiro precisa de AVCB (Auto de Vistoria do Corpo de Bombeiros). Edificações residenciais multifamiliares também necessitam. A WSSJ avalia a necessidade e cuida de todo o processo.",
      },
      {
        q: "Quais são as principais exigências de acessibilidade?",
        a: "A NBR 9050 exige: rampas de acesso com inclinação máxima de 8,33%, banheiro acessível com área de manobra, barras de apoio, piso tátil em rotas acessíveis, sinalização visual e tátil, e vaga de estacionamento reservada. Para edifícios existentes, há soluções adaptativas.",
      },
      {
        q: "Quanto custa adequar um prédio às normas de incêndio?",
        a: "O custo varia conforme o porte e o risco da edificação. Um edifício comercial de 500m² pode custar de R$ 20.000 a R$ 80.000 para adequação completa (projeto, equipamentos, instalação e taxa de vistoria). A WSSJ fornece orçamento detalhado após análise do projeto.",
      },
    ],
  },
  {
    slug: "servicos-de-infraestrutura",
    title: "Serviços de Infraestrutura",
    category: "infraestrutura",
    categoryLabel: "Infraestrutura",
    shortDesc:
      "Terraplanagem, contenção de encostas, redes subterrâneas e preparação de terrenos para construção.",
    fullDesc: `A WSSJ Engenharia executa serviços de infraestrutura no Rio de Janeiro, preparando terrenos e executando obras de suporte necessárias antes e durante a construção. A infraestrutura é o alicerce invisível que sustenta toda edificação — e precisa ser executada com rigor técnico.

Nossos serviços incluem: terraplanagem (corte e aterro com controle de compactação), contenção de encostas (muros de arrimo, cortinas atirantadas, solo grampeado), redes subterrâneas (água, esgoto, drenagem, elétrica, telecomunicações), sondagem e preparo de fundações, escavação mecânica e manual, e transporte de terra e entulho.

Para contenções em encostas — frequentes no relevo acidentado do Rio de Janeiro — trabalhamos com diferentes soluções: muros de arrimo em concreto armado para alturas até 3m, cortinas de estacas para contenções mais profundas, e tirantes protendidos para estabilização de taludes naturais. Cada solução é calculada por engenheiro geotécnico.

Na região metropolitana do Rio, terrenos em áreas como Zona Oeste, Baixada Fluminense e Niterói frequentemente exigem aterro e compactação para atingir a capacidade de carga necessária. A WSSJ realiza ensaios de compactação Proctor e controle in situ com cone de areia, garantindo que o terreno atinja os parâmetros de projeto.`,
    keywords: [
      "infraestrutura rj",
      "terraplanagem rio de janeiro",
      "contenção de encosta rj",
      "preparo de terreno rj",
    ],
    icon: "🏔️",
    faq: [
      {
        q: "Meu terreno é em encosta. É possível construir?",
        a: "Na maioria dos casos, sim. É necessário realizar estudo geotécnico (sondagem e análise de estabilidade do talude) e projetar contenções adequadas. A WSSJ avalia a viabilidade técnica e executa as contenções necessárias para construção segura em encostas.",
      },
      {
        q: "O que é terraplanagem e quando é necessária?",
        a: "Terraplanagem é a movimentação de terra para nivelar o terreno conforme o projeto. É necessária sempre que o terreno natural não estiver na cota (nível) definida pelo projeto arquitetônico. Inclui corte (remoção de terra), aterro (adição de terra) e compactação.",
      },
      {
        q: "A WSSJ realiza sondagem de solo?",
        a: "Coordenamos a sondagem SPT com empresas especializadas e certificadas. O laudo de sondagem é essencial para o projeto de fundações e é requisito para aprovação na prefeitura. A WSSJ interpreta o laudo e define a melhor solução de fundação.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // TÉCNICOS (3)
  // ═══════════════════════════════════════════════════
  {
    slug: "vistorias-tecnicas",
    title: "Vistorias Técnicas",
    category: "tecnicos",
    categoryLabel: "Serviços Técnicos",
    shortDesc:
      "Vistorias técnicas de imóveis para compra, venda, recebimento de obra e avaliação de patologias.",
    fullDesc: `A WSSJ Engenharia realiza vistorias técnicas em imóveis no Rio de Janeiro, fornecendo avaliação profissional e imparcial sobre as condições estruturais, elétricas, hidráulicas e de acabamento de edificações. Uma vistoria técnica é essencial para tomada de decisões seguras em transações imobiliárias e identificação de problemas.

Nossos serviços de vistoria incluem: vistoria pré-compra (avaliação do estado do imóvel antes da aquisição), vistoria de recebimento de obra (verificação de conformidade com memorial descritivo), vistoria cautelar de vizinhança (documentação do estado de imóveis vizinhos antes de uma obra), e vistoria de patologias (identificação de trincas, infiltrações, corrosão e outros problemas).

Cada vistoria gera relatório técnico detalhado com fotografias, descrição das condições encontradas, classificação de severidade dos problemas identificados e recomendações de reparo. O relatório é assinado por engenheiro civil com registro no CREA, conferindo validade técnica e jurídica ao documento.

No mercado imobiliário do Rio de Janeiro, onde imóveis antigos na Zona Sul e Centro podem esconder problemas sérios sob acabamentos renovados, a vistoria pré-compra é um investimento que pode economizar centenas de milhares de reais. A WSSJ já identificou desde problemas estruturais graves até instalações elétricas perigosas em vistorias de rotina.`,
    keywords: [
      "vistoria técnica de imóvel rj",
      "vistoria predial rio de janeiro",
      "vistoria pré-compra rj",
      "inspeção de imóvel rj",
    ],
    icon: "🔍",
    faq: [
      {
        q: "Vale a pena fazer vistoria antes de comprar um imóvel?",
        a: "Absolutamente. Uma vistoria pré-compra pode identificar problemas ocultos (infiltrações, problemas estruturais, instalações irregulares) que não são visíveis em uma visita convencional. O custo da vistoria é insignificante comparado ao risco de comprar um imóvel com problemas graves.",
      },
      {
        q: "O que é vistoria cautelar de vizinhança?",
        a: "É a documentação do estado dos imóveis vizinhos antes do início de uma obra, protegendo o responsável pela obra contra alegações de danos preexistentes. É exigida pela NBR 12722 e recomendada por seguradoras. A WSSJ realiza a vistoria com relatório fotográfico completo.",
      },
      {
        q: "Quanto tempo demora uma vistoria técnica?",
        a: "A vistoria em si leva de 2 a 4 horas, dependendo do tamanho do imóvel. O relatório técnico é entregue em até 5 dias úteis. Para urgências (como vistorias pré-compra com prazo de negociação), oferecemos entrega expressa em 48 horas.",
      },
    ],
  },
  {
    slug: "laudos-tecnicos",
    title: "Laudos Técnicos",
    category: "tecnicos",
    categoryLabel: "Serviços Técnicos",
    shortDesc:
      "Laudos de engenharia para condomínios, seguradoras, perícias judiciais e órgãos públicos.",
    fullDesc: `A WSSJ Engenharia emite laudos técnicos de engenharia civil no Rio de Janeiro, documentos assinados por profissional habilitado com ART (Anotação de Responsabilidade Técnica) registrada no CREA-RJ. Nossos laudos atendem demandas de condomínios, seguradoras, poder judiciário e órgãos públicos.

Tipos de laudos que emitimos: laudo de estabilidade estrutural (exigido para edifícios com mais de 25 anos no RJ), laudo de inspeção predial conforme IBAPE, laudo de avaliação de imóvel conforme NBR 14653, laudo de patologias construtivas, laudo de causa e origem de sinistros (para seguradoras), laudo pericial judicial (assistente técnico), e laudo de acessibilidade.

O laudo de inspeção predial é especialmente relevante no Rio de Janeiro, onde a Lei Complementar nº 126/2013 tornou obrigatória a autovistoria de edifícios. A WSSJ realiza a inspeção conforme metodologia IBAPE, classificando as anomalias encontradas por grau de risco e recomendando as intervenções necessárias com priorização.

Nossos laudos seguem rigor metodológico: fundamentação normativa, descrição detalhada da edificação, metodologia de inspeção utilizada, ensaios realizados (quando aplicável), registro fotográfico, diagnóstico, recomendações e conclusão técnica. A formatação e linguagem atendem aos padrões exigidos por cada destinatário (judicial, seguradora, condomínio).`,
    keywords: [
      "laudo técnico de engenharia rj",
      "laudo de inspeção predial rio de janeiro",
      "autovistoria rj",
      "laudo estrutural rj",
      "perito de engenharia rj",
    ],
    icon: "📄",
    faq: [
      {
        q: "O que é a autovistoria obrigatória no Rio de Janeiro?",
        a: "A Lei Complementar nº 126/2013 obriga edifícios do Rio de Janeiro a realizar inspeção periódica de suas condições de conservação, estabilidade e segurança. O laudo deve ser emitido por engenheiro ou arquiteto e apresentado à prefeitura. A WSSJ realiza o serviço completo.",
      },
      {
        q: "Quanto custa um laudo técnico de engenharia?",
        a: "O valor varia conforme o tipo e complexidade: laudos simples de inspeção predial a partir de R$ 3.000, laudos de avaliação conforme NBR 14653 a partir de R$ 5.000, laudos periciais judiciais a partir de R$ 8.000. Solicite orçamento informando a finalidade do laudo.",
      },
      {
        q: "O laudo da WSSJ tem validade jurídica?",
        a: "Sim. Todos os laudos são assinados por engenheiro civil registrado no CREA-RJ, com ART específica para o serviço. Isso confere validade técnica e jurídica ao documento, sendo aceito em processos judiciais, seguradoras, bancos e órgãos públicos.",
      },
      {
        q: "A WSSJ atua como assistente técnico em processos judiciais?",
        a: "Sim. Nossos engenheiros atuam como assistentes técnicos de parte em processos judiciais que envolvam questões de engenharia civil: vícios construtivos, avaliação de imóveis, danos em vizinhança, responsabilidade civil por acidentes em edificações, entre outros.",
      },
    ],
  },
  {
    slug: "projetos-tecnicos-e-executivos",
    title: "Projetos Técnicos e Executivos",
    category: "tecnicos",
    categoryLabel: "Serviços Técnicos",
    shortDesc:
      "Projetos de engenharia: estrutural, elétrico, hidráulico, prevenção contra incêndio e executivos completos.",
    fullDesc: `A WSSJ Engenharia desenvolve projetos técnicos e executivos de engenharia civil no Rio de Janeiro, fornecendo a documentação completa necessária para aprovação em órgãos públicos e execução de obras. Cada projeto é elaborado por engenheiro especialista na disciplina correspondente.

Nossos projetos incluem: projeto estrutural (fundações, pilares, vigas, lajes conforme NBR 6118 e NBR 8800), projeto de instalações elétricas (conforme NBR 5410 e NTs Enel Rio), projeto de instalações hidrossanitárias (conforme NBR 5626, NBR 8160 e NBR 10844), projeto de prevenção contra incêndio (conforme COSCIP-RJ), projeto de acessibilidade (conforme NBR 9050), e projeto as-built.

O projeto executivo é o documento que permite a construção fielmente ao planejado. Inclui plantas detalhadas, cortes, elevações, detalhes construtivos, especificações de materiais, quantitativos e memorial descritivo. A qualidade do projeto executivo determina a eficiência da obra — projetos incompletos geram dúvidas, retrabalho e custos adicionais.

No Rio de Janeiro, a aprovação de projetos na Secretaria de Urbanismo (SMU) e no Corpo de Bombeiros segue critérios específicos que a WSSJ domina. Conhecemos os padrões de apresentação, as exigências de cada setor e os prazos de análise, agilizando o processo de aprovação para que sua obra comece o mais rápido possível.`,
    keywords: [
      "projeto de engenharia rj",
      "projeto estrutural rio de janeiro",
      "projeto executivo rj",
      "projeto elétrico rj",
      "projeto hidráulico rj",
    ],
    icon: "📐",
    faq: [
      {
        q: "Preciso de projeto para reformar meu imóvel?",
        a: "Depende da extensão. Reformas que alteram estrutura, layout ou instalações precisam de projeto técnico com ART. Reformas cosméticas (pintura, troca de piso) não exigem. A NBR 16280 define quando o projeto é obrigatório. A WSSJ orienta sobre a necessidade em cada caso.",
      },
      {
        q: "Quanto tempo leva para desenvolver um projeto estrutural?",
        a: "Um projeto estrutural residencial de porte médio (até 300m²) leva de 15 a 30 dias. Edifícios multifamiliares podem demandar 45 a 90 dias. O prazo depende da complexidade, número de pavimentos e tipo de fundação. A WSSJ informa o prazo específico após análise do escopo.",
      },
      {
        q: "A WSSJ faz projeto as-built?",
        a: "Sim. O projeto as-built documenta a obra como efetivamente construída, registrando todas as alterações feitas durante a execução em relação ao projeto original. É fundamental para manutenção futura, reformas e regularização de imóveis.",
      },
      {
        q: "Vocês fazem compatibilização de projetos?",
        a: "Sim. A compatibilização verifica interferências entre projetos de diferentes disciplinas (estrutural vs. hidráulico vs. elétrico) antes da obra. Isso evita furos em vigas, tubulações conflitantes e retrabalho. Utilizamos software BIM quando o projeto demanda.",
      },
    ],
  },
];
