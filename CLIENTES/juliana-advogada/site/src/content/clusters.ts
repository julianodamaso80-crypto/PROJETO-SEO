import type { BlogPost } from "./types";
import { blogPosts } from "./posts";

export interface Cluster {
  slug: string;
  nome: string;
  titulo: string;
  descricao: string;
  intro: string[];
  faq: { pergunta: string; resposta: string }[];
  area: "Trabalhista" | "Previdenciário";
  /** Ordem importa: o primeiro cluster que casar leva o artigo. Termos curtos
   *  como "ia-" casam dentro de outras palavras e contaminam o cluster. */
  chaves: string[];
}

export const CLUSTERS: Cluster[] = [
  {
    slug: "auxilio-acidente",
    nome: "Auxílio-Acidente",
    titulo: "Auxílio-Acidente: quem tem direito e como pedir",
    descricao: "Sequela que reduz a capacidade de trabalho dá direito ao auxílio-acidente, pago junto com o salário. Entenda quem recebe e como solicitar.",
    area: "Previdenciário",
    intro: [
      "O auxílio-acidente é o benefício menos pedido do INSS e um dos que mais passam despercebidos. Ele é devido a quem, depois de um acidente de qualquer natureza, fica com sequela permanente que reduz a capacidade de trabalho — ainda que a pessoa continue trabalhando normalmente.",
      "É por isso que muita gente deixa de receber: como não afasta do serviço, ninguém imagina que existe um benefício a receber. Ele corresponde a 50% do salário de benefício, é acumulável com o salário e se mantém até a aposentadoria.",
    ],
    faq: [
      { pergunta: "Posso receber auxílio-acidente e continuar trabalhando?", resposta: "Sim. O auxílio-acidente é indenizatório e acumula com o salário. Ele não exige afastamento do trabalho, justamente porque compensa a redução permanente da capacidade, não a incapacidade total." },
      { pergunta: "O acidente precisa ter sido no trabalho?", resposta: "Não. Acidente de qualquer natureza gera direito, inclusive acidente de trânsito, doméstico ou de lazer, desde que deixe sequela que reduza a capacidade laboral e a pessoa fosse segurada do INSS na data do acidente." },
      { pergunta: "Qual o valor do auxílio-acidente?", resposta: "Corresponde a 50% do salário de benefício, pago mensalmente até a véspera da aposentadoria. O período em que foi recebido também entra no cálculo da futura aposentadoria." },
    ],
    chaves: ["auxilio-acidente"],
  },
  {
    slug: "processo-trabalhista",
    nome: "Processo Trabalhista",
    titulo: "Processo trabalhista: como funciona, prazos e custos",
    descricao: "Prazos, etapas, provas, custos e o que esperar de uma ação trabalhista. Explicado sem juridiquês, do primeiro atendimento à execução.",
    area: "Trabalhista",
    intro: [
      "A maior parte das dúvidas de quem pensa em processar a empresa não é sobre o direito em si, mas sobre o processo: quanto custa, quanto demora, se precisa comparecer, o que serve como prova e o que acontece se a empresa não pagar.",
      "Os artigos reunidos aqui respondem essas perguntas de forma prática. Em Curitiba, as ações tramitam nas Varas do Trabalho vinculadas ao TRT da 9ª Região, e conhecer as etapas ajuda a decidir com tranquilidade se vale a pena entrar com a ação.",
    ],
    faq: [
      { pergunta: "Quanto tempo tenho para entrar com uma ação trabalhista?", resposta: "O prazo é de 2 anos contados do fim do contrato de trabalho. Dentro da ação, é possível cobrar verbas dos últimos 5 anos. Passados os 2 anos, o direito prescreve integralmente." },
      { pergunta: "Preciso pagar para entrar com processo trabalhista?", resposta: "Quem não tem condições de arcar com as custas pode pedir a justiça gratuita e não paga nada para ingressar. Os honorários do advogado normalmente são cobrados como percentual do que for recebido ao final." },
      { pergunta: "O que serve como prova em uma ação trabalhista?", resposta: "Mensagens de WhatsApp, e-mails, holerites, comprovantes de transferência, fotos, escalas, registros de ponto e testemunhas. Provas digitais são aceitas e costumam ser decisivas em casos de horas extras e vínculo sem registro." },
    ],
    chaves: ["processo-trabalhista", "acao-trabalhista", "audiencia", "testemunha", "execucao-trabalhista", "prescricao", "honorarios", "advogado-trabalhista", "juntar-provas", "gravar-conversa", "sindicato", "denuncia-anonima", "calculadora-indenizacao", "tabela-multas", "tabela-prazos", "justica-do-trabalho", "abrir-processo", "entrar-acao"],
  },
  {
    slug: "saude-mental-e-seguranca",
    nome: "Saúde Mental e Segurança",
    titulo: "Saúde mental no trabalho: burnout, afastamento e direitos",
    descricao: "Burnout, depressão, assédio e riscos psicossociais. O que a NR-1 exige das empresas e quais são seus direitos ao adoecer no trabalho.",
    area: "Trabalhista",
    intro: [
      "Desde que a NR-1 passou a exigir o gerenciamento de riscos psicossociais, a saúde mental deixou de ser assunto informal e virou obrigação legal da empresa. Burnout tem reconhecimento como doença ocupacional, e depressão desencadeada pelo ambiente de trabalho pode gerar afastamento com estabilidade.",
      "Os textos desta seção tratam de como comprovar o nexo entre o adoecimento e o trabalho — a parte que costuma definir o resultado do caso — e do que fazer quando a empresa ignora laudos ou pressiona pelo retorno antecipado.",
    ],
    faq: [
      { pergunta: "Burnout dá direito a afastamento pelo INSS?", resposta: "Sim. O burnout é reconhecido como síndrome ocupacional pela OMS e, quando incapacita para o trabalho, gera direito ao auxílio por incapacidade temporária. Se houver nexo com o trabalho, o benefício é acidentário e traz estabilidade de 12 meses na volta." },
      { pergunta: "Posso ser demitido enquanto estou com depressão?", resposta: "A demissão durante afastamento previdenciário é nula. Após o retorno, se o afastamento foi acidentário, existe estabilidade de 12 meses. Demissão motivada pela doença configura discriminação e pode gerar reintegração e indenização." },
      { pergunta: "O que a NR-1 mudou para as empresas?", resposta: "A norma passou a exigir que os riscos psicossociais — carga excessiva, metas abusivas, assédio — sejam identificados e tratados no programa de gerenciamento de riscos. O descumprimento gera multa e serve como prova em ações por dano moral." },
    ],
    chaves: ["saude-mental", "burnout", "depressao", "nr1-", "nr-1", "sem-epi", "ergonom", "riscos-psicossociais", "exame-demissional", "produto-quimico"],
  },
  {
    slug: "trabalho-digital-e-privacidade",
    nome: "Trabalho Digital e Privacidade",
    titulo: "Home office, apps e privacidade no trabalho",
    descricao: "Teletrabalho, motoristas de aplicativo, câmeras, revista íntima e uso de dados do funcionário. Os direitos nas novas formas de trabalho.",
    area: "Trabalhista",
    intro: [
      "Home office, entregadores de aplicativo, monitoramento por câmera e controle digital de jornada criaram um conjunto de conflitos que a CLT não previa. A Justiça do Trabalho vem construindo esse entendimento caso a caso, e algumas regras já estão consolidadas.",
      "Aqui estão reunidos os textos sobre reembolso de despesas no teletrabalho, direito à desconexão, limites da vigilância no ambiente de trabalho, uso de dados pessoais sob a LGPD e a discussão sobre vínculo de trabalhadores de plataformas.",
    ],
    faq: [
      { pergunta: "A empresa deve pagar internet e energia no home office?", resposta: "O custeio da estrutura deve estar previsto em contrato ou aditivo. Quando a empresa transfere ao empregado os custos da atividade sem reembolso, cabe pedido de ressarcimento, pois o risco do negócio é do empregador." },
      { pergunta: "A empresa pode instalar câmeras no local de trabalho?", resposta: "Pode, para segurança patrimonial, desde que em áreas comuns e com ciência dos empregados. É proibida em banheiros, vestiários e refeitórios. Câmera nesses locais gera indenização por dano moral, independentemente de prova de prejuízo." },
      { pergunta: "Motorista de aplicativo tem vínculo de emprego?", resposta: "Não há decisão definitiva. Os tribunais analisam caso a caso se estão presentes subordinação, pessoalidade, habitualidade e onerosidade. Elementos como bloqueio por recusa de corridas e definição unilateral de preço pesam a favor do reconhecimento." },
    ],
    chaves: ["home-office", "teletrabalho", "trabalhador-app", "por-aplicativo", "uber", "ifood", "camera", "revista-intima", "lgpd", "inteligencia-artificial", "esocial", "carteira-trabalho-digital"],
  },
  {
    slug: "guia-do-inss",
    nome: "Guia do INSS",
    titulo: "Guia do INSS: Meu INSS, prazos e pagamentos",
    descricao: "Como usar o Meu INSS, consultar benefícios, entender o calendário de pagamentos, acumular benefícios e resolver bloqueios.",
    area: "Previdenciário",
    intro: [
      "Boa parte dos problemas com o INSS se resolve sem advogado — desde que a pessoa saiba onde clicar e qual prazo observar. O Meu INSS concentra hoje praticamente todos os serviços, do agendamento de perícia à consulta do extrato de contribuições.",
      "Esta seção reúne os guias práticos: como acompanhar um pedido, o que fazer quando o benefício é cortado sem aviso, quais benefícios podem ser acumulados e como funciona o calendário de pagamentos conforme o final do número do benefício.",
    ],
    faq: [
      { pergunta: "O INSS cortou meu benefício sem avisar. O que fazer?", resposta: "Primeiro, consulte o motivo no Meu INSS, em 'Consultar Pagamentos'. Cortes por falta de prova de vida ou de recadastramento se resolvem administrativamente. Cessação por perícia ou revisão pode ser contestada por recurso em 30 dias ou por ação judicial." },
      { pergunta: "Posso receber dois benefícios do INSS ao mesmo tempo?", resposta: "Algumas combinações são permitidas, como aposentadoria com pensão por morte ou com auxílio-acidente. Outras são vedadas, como duas aposentadorias do mesmo regime. Desde 2019 há redução no valor do benefício menor em parte das acumulações." },
      { pergunta: "Quando meu benefício é pago?", resposta: "O calendário segue o penúltimo dígito do número do benefício, sem considerar o dígito verificador. Quem recebe até um salário mínimo tem calendário próprio, que começa antes do calendário dos demais segurados." },
    ],
    chaves: ["meu-inss", "calendario-pagamento", "qualidade-segurado", "acumula", "consultar-beneficio", "cortou-beneficio", "limbo-previdenciario", "imposto-renda", "consignado", "superendivida", "desaposenta"],
  },
  {
    slug: "acidente-de-trabalho",
    nome: "Acidente de Trabalho",
    titulo: "Acidente de trabalho: direitos, CAT e estabilidade",
    descricao: "CAT, estabilidade de 12 meses, auxílio acidentário e indenização. O que fazer desde o acidente até a volta ao trabalho.",
    area: "Trabalhista",
    intro: [
      "Acidente de trabalho não é só o acidente típico dentro da empresa: inclui o trajeto entre casa e trabalho e as doenças desenvolvidas pela atividade, como LER/DORT e perda auditiva. Em todos esses casos, o primeiro documento é a CAT.",
      "Os textos aqui reunidos explicam como registrar a CAT quando a empresa se recusa, como funciona a estabilidade de 12 meses no retorno e em que situações cabe indenização por danos morais e materiais além do benefício do INSS.",
    ],
    faq: [
      { pergunta: "A empresa se recusou a emitir a CAT. O que faço?", resposta: "A emissão é obrigação da empresa até o primeiro dia útil seguinte ao acidente, conforme o art. 22 da Lei 8.213/91. Havendo recusa, o próprio trabalhador, o médico, o sindicato ou um familiar podem registrar a CAT diretamente pelo Meu INSS." },
      { pergunta: "Quanto tempo de estabilidade tenho após um acidente?", resposta: "São 12 meses de estabilidade contados da alta do auxílio-doença acidentário, conforme o art. 118 da Lei 8.213/91. Demissão nesse período gera direito à reintegração ou ao pagamento dos salários de todo o período restante." },
      { pergunta: "Acidente no caminho do trabalho conta como acidente de trabalho?", resposta: "Sim. O acidente de trajeto, no percurso entre a residência e o local de trabalho, é equiparado a acidente de trabalho para fins de benefício previdenciário, ainda que existam discussões sobre a estabilidade nesses casos." },
    ],
    chaves: ["acidente", "cat-", "doenca-ocupacional", "ler-dort", "insalubr"],
  },
  {
    slug: "rescisao-e-demissao",
    nome: "Rescisão e Demissão",
    titulo: "Rescisão e demissão: verbas, FGTS e justa causa",
    descricao: "Verbas rescisórias, multa de 40% do FGTS, aviso prévio, justa causa e rescisão indireta. O que você tem a receber em cada situação.",
    area: "Trabalhista",
    intro: [
      "O fim do contrato é o momento em que mais se perde dinheiro por desinformação. Cada modalidade de desligamento gera um conjunto diferente de verbas, e o erro no cálculo — ou a assinatura de um acordo desvantajoso — costuma custar caro.",
      "Esta é a maior seção do site, com textos sobre cálculo de verbas, prazo de pagamento, quando a justa causa é indevida e como funciona a rescisão indireta, que permite sair da empresa recebendo como se tivesse sido demitido sem justa causa.",
    ],
    faq: [
      { pergunta: "Qual o prazo para a empresa pagar a rescisão?", resposta: "São 10 dias corridos contados do fim do contrato, independentemente da modalidade de desligamento. O atraso gera multa equivalente a um salário do empregado, prevista no art. 477 da CLT." },
      { pergunta: "O que recebo se for demitido sem justa causa?", resposta: "Saldo de salário, aviso prévio, férias vencidas e proporcionais com 1/3, 13º proporcional, saque do FGTS com multa de 40% e liberação do seguro-desemprego, se preenchidos os requisitos." },
      { pergunta: "Posso pedir rescisão indireta?", resposta: "Sim, quando a empresa descumpre gravemente o contrato — atraso reiterado de salários, ausência de depósito do FGTS, assédio ou exigência de serviços alheios ao contrato. Reconhecida na Justiça, você recebe como em uma demissão sem justa causa." },
    ],
    chaves: ["rescisao", "demissao", "demitid", "justa-causa", "verbas", "aviso-previo", "fgts", "seguro-desemprego", "homologacao", "empresa-faliu"],
  },
  {
    slug: "jornada-e-horas-extras",
    nome: "Jornada e Horas Extras",
    titulo: "Horas extras e jornada de trabalho: seus direitos",
    descricao: "Horas extras não pagas, banco de horas, intervalo, escala 12x36 e adicional noturno. Como calcular e como provar.",
    area: "Trabalhista",
    intro: [
      "Hora extra não paga é a irregularidade mais comum nas relações de trabalho e também a que mais acumula valor. Duas horas por dia, ao longo de cinco anos, podem ultrapassar dezenas de milhares de reais quando somados os reflexos em férias, 13º e FGTS.",
      "Os textos desta seção mostram como calcular o que é devido, por que o banco de horas informal é nulo, quando o intervalo suprimido gera pagamento e como mensagens fora do expediente servem de prova.",
    ],
    faq: [
      { pergunta: "Como provo horas extras sem registro de ponto?", resposta: "Mensagens de WhatsApp, e-mails com horário, registros de acesso ao sistema, fotos e testemunhas. Além disso, quando a empresa com mais de 20 empregados não apresenta os controles de ponto, presume-se verdadeira a jornada alegada na inicial." },
      { pergunta: "Cargo de confiança elimina o direito a horas extras?", resposta: "Não automaticamente. É preciso que exista real autonomia, poder de decisão e gratificação de pelo menos 40% sobre o salário do cargo efetivo. Sem esses elementos, o enquadramento é inválido e as horas extras são devidas." },
      { pergunta: "Trabalhar no intervalo de almoço dá direito a quê?", resposta: "A supressão total ou parcial do intervalo gera pagamento do período suprimido com acréscimo de 50%, de natureza indenizatória após a reforma trabalhista. O intervalo mínimo é de uma hora em jornadas acima de seis horas." },
    ],
    chaves: ["hora-extra", "horas-extras", "jornada", "banco-de-horas", "intervalo", "sobreaviso", "escala", "intrajornada", "12x36", "noturn"],
  },
  {
    slug: "assedio-e-danos-morais",
    nome: "Assédio e Danos Morais",
    titulo: "Assédio moral e dano moral no trabalho",
    descricao: "Assédio moral, assédio sexual, discriminação e constrangimento. Como reconhecer, como provar e qual indenização pedir.",
    area: "Trabalhista",
    intro: [
      "Assédio moral raramente vem em um episódio isolado: é a repetição que caracteriza. Metas humilhantes, isolamento deliberado, exposição em reuniões, apelidos e cobranças agressivas configuram violação à dignidade e geram dever de indenizar.",
      "Reunimos aqui os textos sobre como reunir provas sem cometer ilegalidade, a diferença entre cobrança rigorosa e assédio, e os critérios que os tribunais usam para fixar o valor da indenização.",
    ],
    faq: [
      { pergunta: "O que caracteriza assédio moral no trabalho?", resposta: "Condutas abusivas repetidas que atingem a dignidade ou a integridade psíquica do trabalhador: humilhações públicas, isolamento, retirada de funções, metas inatingíveis usadas como punição e ameaças constantes de demissão." },
      { pergunta: "Posso gravar meu chefe para provar o assédio?", resposta: "Sim. A gravação de conversa da qual você participa é lícita como prova, conforme entendimento consolidado, e não exige autorização do outro interlocutor. O que é vedado é a interceptação de conversa alheia." },
      { pergunta: "Qual o valor da indenização por assédio moral?", resposta: "Não há tabela fixa. O juiz considera a gravidade, a duração, o porte econômico da empresa e o caráter pedagógico da condenação. Os valores costumam variar de poucos milhares a dezenas de milhares de reais." },
    ],
    chaves: ["assedio", "dano-moral", "danos-morais", "discrimina", "constrang", "trabalho-analogo"],
  },
  {
    slug: "vinculo-empregaticio",
    nome: "Vínculo Empregatício",
    titulo: "Reconhecimento de vínculo empregatício",
    descricao: "Trabalho sem carteira assinada, pejotização, terceirização e estágio irregular. Como provar o vínculo e o que receber.",
    area: "Trabalhista",
    intro: [
      "Trabalhar sem registro não elimina direito nenhum. Presentes pessoalidade, habitualidade, subordinação e onerosidade, existe relação de emprego — independentemente do nome dado ao contrato, seja PJ, MEI, cooperativa ou prestação de serviços.",
      "Reconhecido o vínculo, a empresa passa a dever retroativamente FGTS com multa, férias com 1/3, 13º de todos os anos, INSS e, conforme o caso, seguro-desemprego. Os textos aqui tratam de cada uma dessas situações.",
    ],
    faq: [
      { pergunta: "Trabalhei sem carteira assinada. Tenho direitos?", resposta: "Sim. Reconhecido o vínculo na Justiça, você recebe retroativamente todas as verbas do período: FGTS com multa de 40%, férias com 1/3, 13º salários, horas extras e anotação na carteira, com recolhimento previdenciário." },
      { pergunta: "Ser PJ ou MEI impede o reconhecimento de vínculo?", resposta: "Não. A chamada pejotização é fraude quando mascara relação de emprego real. Se havia horário, subordinação, exclusividade e pessoalidade, o contrato PJ é declarado nulo e o vínculo é reconhecido com todas as verbas." },
      { pergunta: "Que provas servem para comprovar o vínculo?", resposta: "Mensagens de WhatsApp com ordens de serviço, comprovantes de pagamento por PIX ou depósito, e-mails corporativos, crachá, uniforme, fotos no local e testemunhas. O conjunto das provas costuma valer mais que qualquer documento isolado." },
    ],
    chaves: ["vinculo", "pejotiza", "carteira-assinada", "terceiriza", "autonomo", "motorista", "estagi", "intermitente", "domestic", "sem-registro", "-mei-", "contrato-verde"],
  },
  {
    slug: "adicionais-e-equiparacao",
    nome: "Adicionais e Equiparação",
    titulo: "Periculosidade, insalubridade e equiparação salarial",
    descricao: "Adicional de periculosidade de 30%, insalubridade de 10% a 40%, acúmulo e desvio de função e equiparação salarial.",
    area: "Trabalhista",
    intro: [
      "Adicionais são direitos que não dependem de negociação: decorrem da atividade exercida e das condições do ambiente. Quem trabalha com eletricidade, inflamáveis ou em motocicleta tem direito aos 30% de periculosidade sobre o salário base.",
      "Esta seção trata também do acúmulo e do desvio de função — situações em que o empregado exerce atribuições de cargo superior sem a contrapartida salarial — e dos requisitos da equiparação salarial.",
    ],
    faq: [
      { pergunta: "O EPI elimina o adicional de insalubridade?", resposta: "Só quando é realmente eficaz para neutralizar o agente nocivo, além de adequado, fornecido regularmente e com fiscalização do uso. EPI inadequado, vencido ou entregue sem treinamento não afasta o direito ao adicional." },
      { pergunta: "Periculosidade incide sobre qual base?", resposta: "Sobre o salário base do empregado, sem incluir gratificações, prêmios ou participação nos lucros. São 30%, e não há graus: ou a atividade é perigosa ou não é. É possível cobrar os últimos 5 anos na Justiça." },
      { pergunta: "Posso acumular insalubridade e periculosidade?", resposta: "A CLT determina a escolha do adicional mais favorável, sem acumulação. Há decisões admitindo a cumulação quando os agentes são distintos e autônomos, com base em normas internacionais, mas ainda não é o entendimento majoritário." },
    ],
    chaves: ["periculosidade", "adicional", "equiparacao", "acumulo-de-funcao", "acumulo-funcao", "desvio-de-funcao", "desvio-funcao", "piso-salarial", "comissoes"],
  },
  {
    slug: "ferias-13-e-salario",
    nome: "Férias, 13º e Salário",
    titulo: "Férias, 13º salário e atraso de pagamento",
    descricao: "Férias vencidas em dobro, cálculo do 13º, atraso de salário, reajustes e vales. O que a empresa deve e quando.",
    area: "Trabalhista",
    intro: [
      "Férias, 13º e salário em dia parecem básicos, mas concentram um volume enorme de irregularidades: férias vencidas não concedidas, pagamento fora do prazo legal, descontos indevidos e 13º calculado sem incluir médias de horas extras e comissões.",
      "Os artigos aqui explicam como identificar cada erro no holerite e o que fazer para cobrar, inclusive quando o atraso de salário é reiterado e abre caminho para a rescisão indireta.",
    ],
    faq: [
      { pergunta: "Férias não concedidas no prazo são pagas em dobro?", resposta: "Sim. Se a empresa não concede as férias dentro dos 12 meses seguintes ao período aquisitivo, deve pagá-las em dobro, conforme o art. 137 da CLT, sem prejuízo do terço constitucional." },
      { pergunta: "Quando as férias devem ser pagas?", resposta: "Até 2 dias antes do início do período de descanso. O pagamento em atraso, segundo entendimento consolidado, gera o pagamento em dobro, pois esvazia a finalidade do descanso remunerado." },
      { pergunta: "O 13º inclui horas extras e comissões?", resposta: "Sim. O 13º é calculado sobre a remuneração integral, o que inclui a média de horas extras, adicionais e comissões habituais. Cálculo apenas sobre o salário base gera diferenças cobráveis dos últimos 5 anos." },
    ],
    chaves: ["ferias", "decimo-terceiro", "13-salario", "salario-atras", "reajuste", "vale-"],
  },
  {
    slug: "estabilidade-e-garantias",
    nome: "Estabilidade e Garantias",
    titulo: "Estabilidade no emprego: gestante, CIPA e acidente",
    descricao: "Estabilidade da gestante, do cipeiro e do acidentado. Quando a demissão é nula e como pedir reintegração ou indenização.",
    area: "Trabalhista",
    intro: [
      "Estabilidade é a garantia temporária contra a dispensa sem justa causa. Ela protege quem está em situação de maior vulnerabilidade: a gestante, o empregado que sofreu acidente e o membro eleito da CIPA, entre outros.",
      "Demitir alguém nessas condições não torna a dispensa válida: gera direito à reintegração ou ao pagamento de todo o período de estabilidade, com salários e demais verbas do período.",
    ],
    faq: [
      { pergunta: "Fui demitida grávida sem saber da gravidez. E agora?", resposta: "A estabilidade é objetiva: basta que a concepção tenha ocorrido durante o contrato, ainda que nem você nem a empresa soubessem na data da dispensa. A garantia vai da confirmação da gravidez até 5 meses após o parto." },
      { pergunta: "Qual o prazo da estabilidade após acidente de trabalho?", resposta: "São 12 meses contados da cessação do auxílio-doença acidentário, conforme o art. 118 da Lei 8.213/91, desde que tenha havido afastamento superior a 15 dias com recebimento do benefício." },
      { pergunta: "Prefiro não voltar à empresa. Perco o direito?", resposta: "Não. Quando o retorno é inviável, seja pelo tempo decorrido ou pelo ambiente hostil, a estabilidade converte-se em indenização correspondente aos salários e verbas de todo o período de garantia." },
    ],
    chaves: ["estabilidade", "gestante", "gravida", "cipa", "reintegra", "licenca-"],
  },
  {
    slug: "aposentadorias",
    nome: "Aposentadorias",
    titulo: "Aposentadoria: regras, transição e cálculo",
    descricao: "Aposentadoria por idade, tempo de contribuição, especial, rural e do professor. As regras de transição e como escolher a melhor.",
    area: "Previdenciário",
    intro: [
      "Depois da Reforma da Previdência, escolher a regra errada pode significar anos a mais de trabalho e um benefício menor pelo resto da vida. Convivem hoje várias regras de transição, cada uma favorecendo um perfil diferente de contribuinte.",
      "Esta seção reúne os textos sobre cada modalidade de aposentadoria e sobre os pontos que mais geram perda de dinheiro: tempo especial não convertido, períodos rurais não averbados e erros no CNIS.",
    ],
    faq: [
      { pergunta: "Qual regra de transição é melhor para mim?", resposta: "Depende do tempo de contribuição na data da reforma, da idade e do histórico de salários. As regras de pontos, idade progressiva, pedágio de 50% e de 100% produzem resultados bem diferentes — a simulação comparativa é o que revela a mais vantajosa." },
      { pergunta: "Trabalho insalubre conta como tempo especial?", resposta: "Sim, desde que comprovada a exposição habitual e permanente a agente nocivo, por PPP e LTCAT. O tempo especial pode ser convertido em comum com acréscimo, o que costuma antecipar a aposentadoria em vários anos." },
      { pergunta: "Vale a pena continuar contribuindo depois de atingir os requisitos?", resposta: "Frequentemente sim. Contribuições posteriores com valores mais altos elevam a média salarial e o coeficiente do benefício. É uma conta que precisa ser feita caso a caso, comparando o ganho mensal futuro com o custo das contribuições." },
    ],
    chaves: ["aposentadoria", "aposentar", "tempo-de-contribui", "regra-de-transicao", "pedagio", "professor", "rural", "especial"],
  },
  {
    slug: "auxilio-doenca-e-incapacidade",
    nome: "Auxílio-Doença e Incapacidade",
    titulo: "Auxílio-doença e perícia do INSS",
    descricao: "Auxílio por incapacidade temporária, perícia médica, prorrogação e aposentadoria por invalidez. O que fazer quando o INSS nega.",
    area: "Previdenciário",
    intro: [
      "A perícia do INSS dura em média poucos minutos e frequentemente desconsidera laudos e exames trazidos pelo segurado. É por isso que tantos pedidos legítimos de auxílio por incapacidade são negados na via administrativa.",
      "Na via judicial, a perícia é feita por profissional independente, com análise mais detalhada do histórico clínico. Os textos desta seção explicam como se preparar para a perícia, como pedir prorrogação e o que muda no benefício acidentário.",
    ],
    faq: [
      { pergunta: "O que levar para a perícia do INSS?", resposta: "Documento com foto, laudos e relatórios médicos recentes com CID, exames de imagem, receitas, comprovantes de tratamento e a carteira de trabalho. Laudos que descrevem a limitação funcional para a atividade exercida pesam mais que o diagnóstico isolado." },
      { pergunta: "Meu auxílio-doença foi negado. Qual o próximo passo?", resposta: "Cabe recurso ao Conselho de Recursos da Previdência Social em 30 dias, gratuito, ou ação judicial com perícia independente. Na via judicial, o benefício é devido desde a data do requerimento administrativo, com os atrasados." },
      { pergunta: "Qual a diferença entre auxílio-doença comum e acidentário?", resposta: "O acidentário decorre de acidente ou doença relacionada ao trabalho, dispensa carência, garante estabilidade de 12 meses no retorno e mantém o depósito do FGTS durante o afastamento — vantagens que o benefício comum não oferece." },
    ],
    chaves: ["auxilio-doenca", "incapacidade", "pericia", "invalidez", "atestado", "afastamento", "cid-"],
  },
  {
    slug: "bpc-loas",
    nome: "BPC/LOAS",
    titulo: "BPC/LOAS: quem tem direito ao benefício assistencial",
    descricao: "Benefício de Prestação Continuada para idosos com 65+ e pessoas com deficiência. Requisitos de renda e como pedir.",
    area: "Previdenciário",
    intro: [
      "O BPC paga um salário mínimo mensal a idosos com 65 anos ou mais e a pessoas com deficiência de longo prazo em situação de baixa renda. É um benefício assistencial: não exige nenhuma contribuição anterior ao INSS.",
      "O critério de renda é o ponto que mais gera indeferimento. O INSS aplica o limite de 1/4 do salário mínimo por pessoa da família de forma rígida, enquanto a Justiça admite avaliar o caso concreto e descontar gastos com saúde.",
    ],
    faq: [
      { pergunta: "Preciso ter contribuído ao INSS para receber o BPC?", resposta: "Não. O BPC é assistencial, previsto na LOAS, e independe de qualquer contribuição prévia. Exige apenas o enquadramento como idoso com 65 anos ou mais, ou pessoa com deficiência, somado ao critério de renda familiar." },
      { pergunta: "Como é calculada a renda familiar para o BPC?", resposta: "Soma-se a renda de todos que moram na mesma casa e divide-se pelo número de pessoas. O limite administrativo é de 1/4 do salário mínimo por pessoa. Na Justiça, é possível excluir do cálculo gastos com medicamentos e tratamentos." },
      { pergunta: "O BPC gera 13º salário e deixa pensão?", resposta: "Não. Por ser assistencial, o BPC não paga 13º e não se transforma em pensão por morte para os dependentes. Também exige revisão a cada dois anos para verificar a permanência das condições que o concederam." },
    ],
    chaves: ["bpc", "loas", "deficien", "idoso"],
  },
  {
    slug: "pensao-por-morte",
    nome: "Pensão por Morte",
    titulo: "Pensão por morte: quem recebe e por quanto tempo",
    descricao: "Dependentes, prazo de 180 dias, duração da pensão e união estável. Como requerer e não perder os retroativos.",
    area: "Previdenciário",
    intro: [
      "A pensão por morte é devida aos dependentes do segurado falecido, e o prazo do requerimento define quanto se recebe: pedindo dentro de 180 dias do óbito, os valores retroagem à data da morte; depois disso, valem apenas a partir do pedido.",
      "A duração varia conforme a idade do cônjuge ou companheiro e o tempo de contribuição do falecido. Para companheiros em união estável, a comprovação da convivência costuma ser o ponto decisivo.",
    ],
    faq: [
      { pergunta: "Qual o prazo para pedir pensão por morte?", resposta: "Para receber desde a data do óbito, o pedido deve ser feito em até 180 dias para filhos menores e em até 90 dias para os demais dependentes. Fora desses prazos, o benefício é devido apenas a partir da data do requerimento." },
      { pergunta: "Companheiro em união estável tem direito?", resposta: "Sim, com os mesmos direitos do cônjuge, desde que comprovada a união. Servem como prova conta conjunta, comprovantes de residência comum, filhos em comum, plano de saúde como dependente, fotos e testemunhas." },
      { pergunta: "A pensão por morte é vitalícia?", resposta: "Depende da idade do beneficiário na data do óbito. A partir de 45 anos, a pensão é vitalícia. Abaixo disso, a duração é escalonada, variando de 3 a 20 anos, desde que atendido o tempo mínimo de contribuição do falecido." },
    ],
    chaves: ["pensao-por-morte", "pensao", "dependente", "obito", "falec"],
  },
  {
    slug: "inss-negado-e-revisoes",
    nome: "INSS Negado e Revisões",
    titulo: "Benefício negado pelo INSS e revisões",
    descricao: "O que fazer quando o INSS nega, como recorrer ao CRPS e quais revisões podem aumentar o valor do seu benefício.",
    area: "Previdenciário",
    intro: [
      "Indeferimento do INSS não é palavra final. Existem três caminhos: recurso administrativo ao Conselho de Recursos da Previdência Social, novo requerimento com documentação complementar ou ação judicial — cada um adequado a uma situação.",
      "Esta seção trata também das revisões de benefícios já concedidos. Erros no cálculo da média salarial, períodos não computados e tempo especial desconsiderado são frequentes e podem gerar aumento mensal somado a atrasados.",
    ],
    faq: [
      { pergunta: "Qual o prazo para recorrer de uma negativa do INSS?", resposta: "São 30 dias contados da ciência da decisão para apresentar recurso à Junta de Recursos, sem custo e sem necessidade de advogado. Perdido o prazo, restam o novo requerimento ou a via judicial." },
      { pergunta: "Vale mais a pena recorrer ou entrar na Justiça?", resposta: "Quando a negativa decorre de documento faltante, o recurso ou novo pedido resolve mais rápido. Quando decorre de perícia desfavorável ou de interpretação restritiva da lei, a via judicial costuma ser mais eficaz, pela perícia independente." },
      { pergunta: "Até quando posso pedir revisão do meu benefício?", resposta: "O prazo de decadência para revisar o ato de concessão é de 10 anos contados do primeiro pagamento. Diferenças de valores prescrevem em 5 anos, ou seja, mesmo com revisão deferida, os atrasados alcançam esse limite." },
    ],
    chaves: ["revisao", "recurso", "negad", "indeferi", "crps", "reverter"],
  },
  {
    slug: "planejamento-previdenciario",
    nome: "Planejamento Previdenciário",
    titulo: "Planejamento previdenciário: CNIS, cálculo e carência",
    descricao: "Como analisar o CNIS, corrigir erros de registro, simular regras e escolher o melhor momento para se aposentar.",
    area: "Previdenciário",
    intro: [
      "Planejamento previdenciário é a análise que antecede o pedido: levantar o CNIS, corrigir vínculos com erro ou ausentes, identificar tempo especial e simular todas as regras disponíveis para descobrir qual produz o melhor benefício e quando.",
      "Feito antes do requerimento, esse trabalho evita o cenário mais comum de perda: aposentar-se pela primeira regra que aparece, sem saber que aguardar alguns meses ou averbar um período esquecido aumentaria o valor de forma permanente.",
    ],
    faq: [
      { pergunta: "O que é o CNIS e por que ele importa?", resposta: "É o Cadastro Nacional de Informações Sociais, o histórico de vínculos e contribuições usado pelo INSS para calcular o benefício. Vínculos ausentes, datas erradas e salários divergentes são comuns — e cada erro reduz o valor final." },
      { pergunta: "Como corrijo um vínculo que não aparece no CNIS?", resposta: "Com carteira de trabalho anotada, contracheques, ficha de registro, rescisão ou ações trabalhistas. O acerto pode ser pedido administrativamente pelo Meu INSS e, havendo recusa, discutido judicialmente." },
      { pergunta: "Contribuir como MEI serve para aposentadoria?", resposta: "Serve para aposentadoria por idade e para os demais benefícios, mas a alíquota de 5% não conta para aposentadoria por tempo de contribuição. É possível complementar com mais 15% para que o período seja aproveitado integralmente." },
    ],
    chaves: ["planejamento", "cnis", "calculo", "contribui", "carencia", "salario-de-beneficio", "prazos"],
  },
  {
    slug: "outros-beneficios",
    nome: "Outros Benefícios",
    titulo: "Salário-maternidade, auxílio-reclusão e outros",
    descricao: "Salário-maternidade para diferentes categorias, auxílio-reclusão e demais benefícios do INSS menos conhecidos.",
    area: "Previdenciário",
    intro: [
      "Além das aposentadorias e dos auxílios mais conhecidos, o INSS paga benefícios que muita gente desconhece ou supõe não ter direito — como o salário-maternidade da trabalhadora rural, da desempregada em período de graça e da MEI.",
      "Os textos aqui reunidos explicam requisitos, valores e prazos de cada um, incluindo o auxílio-reclusão, cercado de desinformação e devido aos dependentes de segurado de baixa renda.",
    ],
    faq: [
      { pergunta: "Desempregada tem direito a salário-maternidade?", resposta: "Sim, se o parto ocorrer dentro do período de graça, em que a qualidade de segurada é mantida após o fim das contribuições. Esse período costuma ser de 12 meses, podendo chegar a 36 meses conforme o histórico contributivo e a situação de desemprego." },
      { pergunta: "Quem recebe o auxílio-reclusão?", resposta: "Os dependentes do segurado preso em regime fechado, e não o preso. Exige-se que o último salário de contribuição esteja dentro do limite de baixa renda fixado anualmente e que haja carência de 24 contribuições." },
      { pergunta: "MEI tem direito a salário-maternidade?", resposta: "Sim, desde que tenha ao menos 10 contribuições mensais antes do parto. O valor corresponde a um salário mínimo, pago por 120 dias, e o pedido é feito diretamente pelo Meu INSS." },
    ],
    chaves: ["salario-maternidade", "auxilio-reclusao", "maternidade", "reclusao"],
  },
  {
    slug: "direitos-do-trabalhador",
    nome: "Direitos do Trabalhador",
    titulo: "Direitos do trabalhador CLT: guia geral",
    descricao: "Panorama dos direitos garantidos pela CLT, o que mudou com a reforma trabalhista e as regras em vigor.",
    area: "Trabalhista",
    intro: [
      "Esta seção reúne os guias gerais: o que a CLT garante a todo empregado registrado, o que a reforma trabalhista alterou e quais regras passaram a valer desde então.",
      "São textos de visão ampla, úteis para quem quer entender o conjunto dos direitos antes de aprofundar em um tema específico das demais seções.",
    ],
    faq: [
      { pergunta: "Quais são os direitos básicos de todo trabalhador CLT?", resposta: "Carteira assinada, salário nunca inferior ao mínimo, jornada de até 44 horas semanais, horas extras com adicional de 50%, férias com 1/3, 13º salário, FGTS, repouso semanal remunerado e aviso prévio proporcional." },
      { pergunta: "O que mudou com a reforma trabalhista?", resposta: "Entre as principais mudanças: prevalência do negociado sobre o legislado em várias matérias, criação do contrato intermitente, novas regras de teletrabalho, fim da obrigatoriedade da contribuição sindical e alterações no pagamento de honorários." },
      { pergunta: "Acordo individual pode reduzir direitos previstos em lei?", resposta: "Não pode suprimir direitos indisponíveis, como FGTS, salário mínimo, normas de saúde e segurança e o 13º. Cláusulas que reduzem essas garantias são nulas, ainda que assinadas pelo empregado." },
    ],
    chaves: ["direitos-trabalhador", "direitos-trabalhistas", "reforma-trabalhista", "nova-lei-trabalhista", "clt", "construcao-civil"],
  },
];

export function clusterDoPost(post: BlogPost): Cluster | undefined {
  const alvo = `${post.slug} ${post.title}`.toLowerCase();
  return CLUSTERS.find((c) => c.chaves.some((k) => alvo.includes(k)));
}

export function postsDoCluster(slug: string): BlogPost[] {
  return blogPosts.filter((p) => clusterDoPost(p)?.slug === slug);
}

export function clusterPorSlug(slug: string): Cluster | undefined {
  return CLUSTERS.find((c) => c.slug === slug);
}
