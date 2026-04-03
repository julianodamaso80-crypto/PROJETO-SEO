export interface Region {
  slug: string;
  name: string;
  title: string;
  description: string;
  neighborhoods: string[];
  mainServices: string[];
}

export const REGIONS: Region[] = [
  {
    slug: "zona-sul",
    name: "Zona Sul",
    title: "Empresa de Engenharia Civil na Zona Sul do Rio de Janeiro",
    description: `A Zona Sul do Rio de Janeiro é uma das regiões mais valorizadas do país, concentrando bairros icônicos como Copacabana, Ipanema, Leblon, Botafogo, Flamengo e Laranjeiras. A WSSJ Engenharia atende toda a Zona Sul com serviços de construção, reforma e manutenção predial, compreendendo as particularidades construtivas dessa região.

O parque imobiliário da Zona Sul é predominantemente composto por edifícios das décadas de 1950 a 1980, que demandam manutenção constante, reforma de fachadas, atualização de instalações elétricas e hidráulicas, e recuperação estrutural. A proximidade do mar acelera a corrosão de armaduras e a degradação de fachadas, exigindo materiais e técnicas específicas para o ambiente marítimo.

A WSSJ é especialista em reformas de apartamentos na Zona Sul, atendendo às exigências rigorosas de condomínios, síndicos e administradoras. Cuidamos de toda a documentação (ART, comunicação ao condomínio, horários permitidos) e executamos obras com organização, limpeza e respeito à vizinhança. Solicite seu orçamento sem compromisso.`,
    neighborhoods: [
      "Copacabana",
      "Ipanema",
      "Leblon",
      "Botafogo",
      "Flamengo",
      "Laranjeiras",
      "Catete",
      "Glória",
      "Humaitá",
      "Jardim Botânico",
      "Gávea",
      "São Conrado",
      "Leme",
      "Urca",
      "Cosme Velho",
      "Santa Teresa",
    ],
    mainServices: [
      "Reforma Residencial",
      "Reforma de Fachada",
      "Recuperação Estrutural",
      "Manutenção Preventiva",
      "Impermeabilização",
      "Pintura Predial e Residencial",
    ],
  },
  {
    slug: "barra-da-tijuca",
    name: "Barra da Tijuca",
    title: "Empresa de Engenharia Civil na Barra da Tijuca",
    description: `A Barra da Tijuca é o bairro de maior expansão imobiliária do Rio de Janeiro, com condomínios modernos, centros comerciais, hotéis e empreendimentos de alto padrão. A WSSJ Engenharia atende toda a Barra da Tijuca com serviços de construção, reforma e manutenção, desde casas em condomínios fechados até edifícios residenciais e comerciais.

A região concentra grande volume de construções novas e ampliações, especialmente em condomínios como Rio 2, Península, Cidade Jardim, Nova Ipanema e Santa Mônica. Muitas casas passam por reformas de ampliação, construção de piscinas, espaços gourmet e modernização de acabamentos. O solo arenoso da Barra também exige atenção especial nas fundações, com soluções como estacas e radier.

A WSSJ conhece as exigências das administradoras de condomínios da Barra da Tijuca e trabalha em conformidade com os regulamentos internos de cada empreendimento. Oferecemos desde pequenos reparos até construções completas, com engenheiro responsável e cronograma detalhado. Solicite uma visita técnica sem compromisso.`,
    neighborhoods: [
      "Barra da Tijuca",
      "Itanhangá",
      "Joá",
      "Condomínio Rio 2",
      "Condomínio Península",
      "Condomínio Cidade Jardim",
      "Condomínio Santa Mônica",
      "Condomínio Nova Ipanema",
      "Condomínio Riviera del Fiori",
      "Condomínio Mandala",
    ],
    mainServices: [
      "Construção do Zero",
      "Reforma Residencial",
      "Ampliações e Modificações",
      "Instalações Elétricas",
      "Impermeabilização",
      "Construção em Steel Frame",
    ],
  },
  {
    slug: "recreio-dos-bandeirantes",
    name: "Recreio dos Bandeirantes",
    title: "Empresa de Engenharia Civil no Recreio dos Bandeirantes",
    description: `O Recreio dos Bandeirantes é um dos bairros que mais cresce no Rio de Janeiro, com intensa atividade de construção residencial, loteamentos e condomínios. A WSSJ Engenharia atende o Recreio e região com serviços completos de engenharia civil, desde construções novas até reformas e manutenção.

A região apresenta características construtivas específicas: terrenos amplos que permitem construções horizontais, solo variável (arenoso próximo à praia, argiloso nas áreas mais internas), e crescente demanda por casas de alto padrão em condomínios como Alphaville Barra, Art Life, Barra Bonita e Portal do Recreio. A construção em Steel Frame tem ganhado espaço na região pela rapidez e eficiência.

Com a expansão urbana, o Recreio também demanda serviços de infraestrutura como pavimentação, drenagem e contenção de encostas nas áreas próximas ao maciço da Pedra Branca. A WSSJ oferece soluções completas para construtoras, incorporadoras e proprietários individuais que investem na região.`,
    neighborhoods: [
      "Recreio dos Bandeirantes",
      "Vargem Grande",
      "Vargem Pequena",
      "Grumari",
      "Barra de Guaratiba",
      "Condomínio Alphaville Barra",
      "Condomínio Art Life",
      "Condomínio Barra Bonita",
      "Condomínio Portal do Recreio",
    ],
    mainServices: [
      "Construção do Zero",
      "Construção em Steel Frame",
      "Construção de Galpão",
      "Pavimentação e Drenagem",
      "Serviços de Infraestrutura",
      "Ampliações e Modificações",
    ],
  },
  {
    slug: "tijuca-e-regiao",
    name: "Tijuca e Região",
    title: "Empresa de Engenharia Civil na Tijuca e Região",
    description: `A Tijuca e seus bairros vizinhos — Grajaú, Vila Isabel, Andaraí e Maracanã — formam uma das regiões mais tradicionais e populosas do Rio de Janeiro. A WSSJ Engenharia atende toda a Grande Tijuca com serviços de reforma, manutenção e construção, conhecendo profundamente as características construtivas da região.

O bairro da Tijuca possui um parque imobiliário diversificado: edifícios residenciais de diferentes épocas, casas antigas em ruas arborizadas, e empreendimentos recentes próximos à Saens Peña e Praça Afonso Pena. Muitos edifícios das décadas de 1960 e 1970 necessitam de retrofit, atualização de instalações e recuperação de fachadas. As casas do Grajaú e Alto da Boa Vista frequentemente demandam reformas de ampliação e manutenção de telhados.

A proximidade com o Parque Nacional da Tijuca e as encostas do Maciço da Tijuca trazem desafios específicos: terrenos em aclive, necessidade de contenções e sistemas de drenagem reforçados. A WSSJ tem experiência em obras nesse tipo de relevo e garante segurança e conformidade em cada projeto.`,
    neighborhoods: [
      "Tijuca",
      "Grajaú",
      "Vila Isabel",
      "Andaraí",
      "Maracanã",
      "Alto da Boa Vista",
      "Praça da Bandeira",
      "Rio Comprido",
      "Usina",
      "Aldeia Campista",
    ],
    mainServices: [
      "Reforma Residencial",
      "Retrofit",
      "Manutenção Preventiva",
      "Recuperação Estrutural",
      "Pintura Predial e Residencial",
      "Laudos Técnicos",
    ],
  },
  {
    slug: "centro",
    name: "Centro",
    title: "Empresa de Engenharia Civil no Centro do Rio de Janeiro",
    description: `O Centro do Rio de Janeiro concentra o maior acervo de edifícios comerciais, históricos e institucionais da cidade. A WSSJ Engenharia atende a região central com serviços especializados de reforma comercial, retrofit, manutenção predial e adequações normativas, considerando as particularidades de edifícios antigos e tombados.

A revitalização da região portuária (Porto Maravilha) e o crescente movimento de conversão de edifícios comerciais em residenciais abriram novas oportunidades de retrofit no Centro. Prédios das décadas de 1930 a 1960, com estruturas sólidas e localização privilegiada, estão sendo transformados em residências modernas — mantendo a fachada original e modernizando totalmente o interior.

A WSSJ também atende empresas instaladas no Centro com serviços de reforma de escritórios, adequação de acessibilidade, prevenção contra incêndio (AVCB) e manutenção predial continuada. Conhecemos as exigências do IRPH (Instituto Rio Patrimônio da Humanidade) para intervenções em edificações tombadas e na zona de ambiência de bens protegidos.`,
    neighborhoods: [
      "Centro",
      "Lapa",
      "Saúde",
      "Gamboa",
      "Santo Cristo",
      "Cidade Nova",
      "Castelo",
      "Cinelândia",
      "Carioca",
      "Praça XV",
      "Porto Maravilha",
    ],
    mainServices: [
      "Retrofit",
      "Reforma Comercial",
      "Adequações Técnicas e Normativas",
      "Recuperação Estrutural",
      "Laudos Técnicos",
      "Manutenção Preventiva",
    ],
  },
  {
    slug: "zona-norte",
    name: "Zona Norte",
    title: "Empresa de Engenharia Civil na Zona Norte do Rio de Janeiro",
    description: `A Zona Norte é a região mais populosa do Rio de Janeiro, abrangendo bairros tradicionais como Méier, Penha, Olaria, Ramos, Bonsucesso, Ilha do Governador e muitos outros. A WSSJ Engenharia atende toda a Zona Norte com serviços acessíveis e de qualidade em construção, reforma e manutenção.

A região caracteriza-se por uma mistura de casas de diferentes idades e padrões, edifícios de porte médio e comércios de bairro. As demandas mais frequentes incluem: reforma residencial, construção de lajes e ampliação de casas, manutenção elétrica e hidráulica, impermeabilização e pintura. Muitos imóveis da Zona Norte foram construídos por autoconstrução e necessitam de regularização e adequações técnicas.

Com o crescimento comercial de polos como Méier, Norte Shopping e Caxias, a WSSJ também atende reformas comerciais, adequação de lojas e estabelecimentos às normas vigentes. Oferecemos preço justo, qualidade técnica e compromisso com prazos para todos os moradores e empresários da Zona Norte do Rio de Janeiro.`,
    neighborhoods: [
      "Méier",
      "Penha",
      "Olaria",
      "Ramos",
      "Bonsucesso",
      "Ilha do Governador",
      "Vila da Penha",
      "Irajá",
      "Madureira",
      "Cascadura",
      "Piedade",
      "Engenho Novo",
      "Engenho de Dentro",
      "Jacarepaguá",
      "Taquara",
      "Freguesia",
    ],
    mainServices: [
      "Reforma Residencial",
      "Construção do Zero",
      "Manutenção Elétrica",
      "Manutenção Hidráulica",
      "Impermeabilização",
      "Reparos Gerais",
    ],
  },
  {
    slug: "zona-oeste",
    name: "Zona Oeste",
    title: "Empresa de Engenharia Civil na Zona Oeste do Rio de Janeiro",
    description: `A Zona Oeste do Rio de Janeiro abrange uma vasta área que inclui bairros como Campo Grande, Santa Cruz, Bangu, Realengo, Padre Miguel e Guaratiba. É a região de maior expansão territorial da cidade, com crescente desenvolvimento imobiliário e demanda por serviços de engenharia civil.

Campo Grande, o principal polo da Zona Oeste, concentra comércio pujante e novos empreendimentos residenciais. A região apresenta grande demanda por construções novas — tanto residenciais quanto comerciais e industriais (especialmente em Santa Cruz, com o distrito industrial). Terrenos maiores e mais acessíveis permitem projetos que seriam inviáveis em outras regiões da cidade.

A WSSJ Engenharia atende toda a Zona Oeste com serviços de construção do zero, construção de galpões, reformas, pavimentação e infraestrutura. Conhecemos as particularidades da região, incluindo o solo e as condições de urbanização, oferecendo soluções técnicas adequadas e economicamente viáveis para cada projeto.`,
    neighborhoods: [
      "Campo Grande",
      "Santa Cruz",
      "Bangu",
      "Realengo",
      "Padre Miguel",
      "Senador Camará",
      "Guaratiba",
      "Sepetiba",
      "Cosmos",
      "Inhoaíba",
      "Paciência",
      "Santíssimo",
    ],
    mainServices: [
      "Construção do Zero",
      "Construção de Galpão",
      "Pavimentação e Drenagem",
      "Serviços de Infraestrutura",
      "Instalações Elétricas",
      "Instalações Hidráulicas",
    ],
  },
  {
    slug: "niteroi",
    name: "Niterói",
    title: "Empresa de Engenharia Civil em Niterói",
    description: `Niterói, a cidade do outro lado da Baía de Guanabara, é um dos municípios com maior IDH do estado do Rio de Janeiro e possui um mercado imobiliário dinâmico. A WSSJ Engenharia atende toda a cidade de Niterói com serviços de construção civil, reformas, manutenção e projetos técnicos.

A cidade concentra edifícios residenciais de alto padrão em bairros como Icaraí, Santa Rosa, Ingá e Charitas, além de áreas em expansão como Camboinhas, Itaipu e região oceânica. O parque imobiliário de Icaraí, com edifícios das décadas de 1970 e 1980, demanda constante manutenção de fachadas, recuperação estrutural e atualização de instalações — especialmente devido à agressividade do ambiente marítimo.

A WSSJ tem experiência em obras em Niterói e conhece as exigências da prefeitura local para aprovação de projetos e licenciamento. Atendemos desde reformas de apartamentos em Icaraí até construções novas na região oceânica, com a mesma qualidade técnica e compromisso com prazos que nos caracterizam no Rio de Janeiro.`,
    neighborhoods: [
      "Icaraí",
      "Santa Rosa",
      "Ingá",
      "Centro (Niterói)",
      "São Francisco",
      "Charitas",
      "Jurujuba",
      "Camboinhas",
      "Itaipu",
      "Itacoatiara",
      "Piratininga",
      "Pendotiba",
      "Fonseca",
      "Barreto",
    ],
    mainServices: [
      "Reforma Residencial",
      "Reforma de Fachada",
      "Recuperação Estrutural",
      "Manutenção Preventiva",
      "Construção do Zero",
      "Laudos Técnicos",
    ],
  },
  {
    slug: "sao-goncalo",
    name: "São Gonçalo",
    title: "Empresa de Engenharia Civil em São Gonçalo",
    description: `São Gonçalo é o segundo município mais populoso do estado do Rio de Janeiro, com mais de um milhão de habitantes e crescente desenvolvimento urbano. A WSSJ Engenharia atende toda a cidade com serviços de construção, reforma e manutenção, oferecendo qualidade técnica com preço acessível para a realidade local.

A cidade apresenta grande demanda por construções residenciais novas, reformas de casas existentes e adequações de estabelecimentos comerciais. Bairros como Alcântara, Centro, Neves, Colubandê e Arsenal concentram o comércio e os serviços, com reformas frequentes de lojas e escritórios. As áreas residenciais demandam principalmente construção de lajes, ampliações, instalações elétricas e hidráulicas.

A WSSJ atende São Gonçalo com engenheiro responsável, materiais de qualidade e cronograma definido. Realizamos desde pequenos reparos até obras completas de construção, sempre com ART registrada e conformidade com as normas técnicas. Entre em contato para um orçamento sem compromisso.`,
    neighborhoods: [
      "Centro (São Gonçalo)",
      "Alcântara",
      "Neves",
      "Arsenal",
      "Colubandê",
      "Porto Velho",
      "Trindade",
      "Maria Paula",
      "Rocha",
      "Ipiíba",
      "Tribobó",
      "Jardim Catarina",
    ],
    mainServices: [
      "Construção do Zero",
      "Reforma Residencial",
      "Instalações Elétricas",
      "Instalações Hidráulicas",
      "Reparos Gerais",
      "Vistorias Técnicas",
    ],
  },
  {
    slug: "duque-de-caxias",
    name: "Duque de Caxias",
    title: "Empresa de Engenharia Civil em Duque de Caxias",
    description: `Duque de Caxias é um dos municípios mais importantes da Baixada Fluminense, com forte atividade industrial e comercial. A WSSJ Engenharia atende Duque de Caxias e distritos com serviços de construção civil, incluindo galpões industriais, reformas comerciais e construções residenciais.

A região abriga o Polo Petroquímico de Duque de Caxias (REDUC), além de centros logísticos e industriais que demandam construção e manutenção de galpões, pavimentação de pátios e adequações normativas. No comércio, a região do Centro e de Campos Elíseos concentra estabelecimentos que necessitam de reformas periódicas e adequações a normas de incêndio e acessibilidade.

Na área residencial, Duque de Caxias apresenta intensa atividade de construção e ampliação de casas, regularização de imóveis e instalações complementares. A WSSJ oferece todos esses serviços com qualidade e preço justo, levando engenharia profissional para a Baixada Fluminense.`,
    neighborhoods: [
      "Centro (Duque de Caxias)",
      "Jardim Primavera",
      "Jardim Gramacho",
      "Campos Elíseos",
      "Saracuruna",
      "Imbariê",
      "Xerém",
      "São Bento",
      "Parque Duque",
      "Vila São Luís",
      "Chácaras Arcampo",
    ],
    mainServices: [
      "Construção de Galpão",
      "Construção do Zero",
      "Reforma Comercial",
      "Pavimentação e Drenagem",
      "Adequações Técnicas e Normativas",
      "Instalações Elétricas",
    ],
  },
  {
    slug: "nova-iguacu",
    name: "Nova Iguaçu",
    title: "Empresa de Engenharia Civil em Nova Iguaçu",
    description: `Nova Iguaçu é um dos maiores municípios da Baixada Fluminense, com população superior a 800 mil habitantes e economia diversificada. A WSSJ Engenharia atende Nova Iguaçu e bairros vizinhos com serviços completos de engenharia civil: construção, reforma, manutenção e projetos técnicos.

A cidade apresenta perfil construtivo variado: áreas comerciais no Centro e ao longo da Estrada de Madureira, bairros residenciais em expansão como Miguel Couto e Austin, e áreas rurais que estão se urbanizando. A demanda principal é por construções novas (casas e pequenos comércios), reformas residenciais, instalações elétricas regulares e impermeabilização de lajes.

Nova Iguaçu também é sede de empresas e centros de distribuição que necessitam de galpões, adequações normativas e manutenção predial. A WSSJ oferece toda a cadeia de serviços com profissionalismo, ART registrada e compromisso com a qualidade, independentemente do porte da obra.`,
    neighborhoods: [
      "Centro (Nova Iguaçu)",
      "Miguel Couto",
      "Austin",
      "Comendador Soares",
      "Cabuçu",
      "Vila de Cava",
      "Posse",
      "Jardim Alvorada",
      "Jardim Paraíso",
      "Cerâmica",
      "Km 32",
      "Moquetá",
    ],
    mainServices: [
      "Construção do Zero",
      "Reforma Residencial",
      "Construção de Galpão",
      "Instalações Elétricas",
      "Impermeabilização",
      "Reparos Gerais",
    ],
  },
  {
    slug: "baixada-fluminense",
    name: "Baixada Fluminense",
    title: "Empresa de Engenharia Civil na Baixada Fluminense",
    description: `A Baixada Fluminense é uma das regiões mais populosas do estado do Rio de Janeiro, abrangendo municípios como Belford Roxo, Mesquita, Nilópolis, Queimados, Japeri, Magé, Guapimirim e Itaguaí. A WSSJ Engenharia atende toda a Baixada com serviços de construção civil, reformas e manutenção, levando engenharia profissional com preço acessível.

A região vive um momento de crescimento com novos loteamentos, empreendimentos residenciais e expansão comercial. As principais demandas incluem: construção residencial, ampliação de casas, regularização de imóveis, instalações elétricas e hidráulicas, e construção de galpões logísticos. A Baixada Fluminense também concentra problemas de drenagem que exigem soluções técnicas de pavimentação e escoamento pluvial.

A WSSJ acredita que toda obra, independentemente da região, merece acompanhamento técnico profissional. Oferecemos o mesmo padrão de qualidade, documentação e compromisso que aplicamos em obras na capital, com condições comerciais adequadas à realidade da Baixada Fluminense. Solicite seu orçamento sem compromisso.`,
    neighborhoods: [
      "Belford Roxo",
      "Mesquita",
      "Nilópolis",
      "Queimados",
      "Japeri",
      "Magé",
      "Guapimirim",
      "Itaguaí",
      "Seropédica",
      "Paracambi",
      "Mangaratiba",
    ],
    mainServices: [
      "Construção do Zero",
      "Reforma Residencial",
      "Instalações Elétricas",
      "Instalações Hidráulicas",
      "Pavimentação e Drenagem",
      "Vistorias Técnicas",
    ],
  },
];
