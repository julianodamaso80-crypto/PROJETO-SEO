import { posts01 } from "./posts_01_10";
import { posts11 } from "./posts_11_20";
import { posts21 } from "./posts_21_30";
import { posts31 } from "./posts_31_40";
import { posts41 } from "./posts_41_50";

export type { BlogPost } from "./types";
import type { BlogPost } from "./types";

const _originalPosts: BlogPost[] = [
  {
    slug: "acidente-de-trabalho-direitos",
    title: "Acidente de Trabalho: 5 Direitos Que Todo Trabalhador Precisa Conhecer",
    metaTitle: "Acidente de Trabalho: 5 Direitos Garantidos Por Lei",
    metaDescription: "Sofreu acidente no trabalho? Conheça seus direitos: estabilidade, indenização, CAT e benefícios do INSS. Saiba como agir nas primeiras 48h.",
    excerpt: "A empresa é obrigada a emitir a CAT em 24h, você tem estabilidade de 12 meses e pode ter direito a indenização. Saiba exatamente o que fazer.",
    category: "Trabalhista",
    date: "2026-03-20",
    readTime: "8 min",
    content: `
<p>Todos os anos, <strong>mais de 600 mil acidentes de trabalho</strong> são registrados no Brasil. Mas o número real é ainda maior — muitas empresas pressionam o trabalhador a não registrar o ocorrido. Se você sofreu um acidente no trabalho ou desenvolveu uma doença ocupacional, precisa conhecer seus direitos <strong>antes que a empresa tente minimizar o que aconteceu</strong>.</p>

<h2>1. A empresa é obrigada a emitir a CAT em até 24 horas</h2>
<p>A <strong>Comunicação de Acidente de Trabalho (CAT)</strong> é o documento que oficializa o acidente perante o INSS. A empresa tem a obrigação legal de emiti-la em até 24 horas após o acidente — mesmo que o trabalhador não tenha se afastado.</p>
<p>Se a empresa se recusar a emitir, <strong>você mesmo pode fazer isso</strong>. O sindicato, o médico que atendeu ou até o próprio trabalhador pode registrar a CAT pelo site ou app Meu INSS. Não deixe ninguém te convencer de que "não precisa".</p>
<p><strong>Importante:</strong> sem a CAT, você perde acesso ao auxílio-doença acidentário (B91), que tem vantagens como estabilidade no emprego e depósito de FGTS durante o afastamento.</p>

<h2>2. Estabilidade de 12 meses no emprego</h2>
<p>Após receber alta médica do INSS, o trabalhador que sofreu acidente de trabalho tem <strong>estabilidade no emprego por 12 meses</strong>. Isso significa que a empresa <strong>não pode demitir sem justa causa</strong> durante esse período.</p>
<p>Se a empresa demitir mesmo assim, terá que pagar todos os salários do período de estabilidade, além das verbas rescisórias normais. Em muitos casos, o juiz determina a reintegração ao cargo.</p>

<h2>3. Indenização por danos morais e materiais</h2>
<p>Se o acidente aconteceu por culpa da empresa — falta de equipamento de proteção, treinamento inadequado, condições inseguras — você tem direito a <strong>indenização por danos morais e materiais</strong>.</p>
<p>Os valores variam conforme a gravidade:</p>
<ul>
<li><strong>Acidentes leves com afastamento:</strong> R$5 mil a R$20 mil em danos morais</li>
<li><strong>Acidentes com sequelas permanentes:</strong> R$30 mil a R$100 mil</li>
<li><strong>Acidentes graves com incapacidade:</strong> R$80 mil a R$300 mil ou mais</li>
</ul>
<p>Além dos danos morais, a empresa deve cobrir <strong>todas as despesas médicas</strong>, medicamentos, próteses e reabilitação. Se houve redução da capacidade de trabalho, cabe ainda <strong>pensão mensal vitalícia</strong>.</p>

<h2>4. Auxílio-doença acidentário (B91) — diferente do comum</h2>
<p>Quando o acidente gera afastamento superior a 15 dias, o trabalhador recebe o <strong>auxílio-doença acidentário (B91)</strong> do INSS. Ele é diferente do auxílio-doença comum (B31) em pontos cruciais:</p>
<ul>
<li><strong>Não exige carência</strong> — mesmo que nunca tenha contribuído, tem direito</li>
<li><strong>FGTS continua sendo depositado</strong> durante todo o afastamento</li>
<li><strong>Gera estabilidade de 12 meses</strong> após a alta</li>
<li><strong>Pode gerar auxílio-acidente</strong> se ficar com sequela</li>
</ul>

<h2>5. Pensão por redução da capacidade de trabalho</h2>
<p>Se o acidente deixou sequelas que reduziram sua capacidade de trabalhar — mesmo que parcialmente — a empresa pode ser condenada a pagar <strong>pensão mensal</strong>. O valor é proporcional à redução da capacidade laborativa.</p>
<p><strong>Exemplo prático:</strong> um trabalhador que ganhava R$3.000 e teve 40% da capacidade reduzida pode receber R$1.200/mês de pensão, <strong>além do salário</strong>, pelo resto da vida ou até a idade de aposentadoria.</p>

<h2>O que fazer nas primeiras 48 horas após o acidente</h2>
<ol>
<li><strong>Procure atendimento médico imediato</strong> e guarde todos os laudos, receitas e atestados</li>
<li><strong>Exija a emissão da CAT</strong> — se a empresa se recusar, registre você mesmo pelo Meu INSS</li>
<li><strong>Fotografe o local do acidente</strong> e qualquer condição insegura</li>
<li><strong>Anote nomes de testemunhas</strong> que presenciaram o ocorrido</li>
<li><strong>Não assine nenhum documento</strong> que a empresa apresente sem antes consultar um advogado</li>
</ol>

<h2>Prescrição: não perca o prazo</h2>
<p>O prazo para entrar com ação trabalhista por acidente de trabalho é de <strong>2 anos após a saída da empresa</strong>, podendo cobrar os últimos <strong>5 anos</strong>. Mas quanto antes agir, mais fácil é reunir provas e testemunhas.</p>
`,
  },
  {
    slug: "trabalhou-sem-carteira-vinculo",
    title: "Trabalhou Sem Carteira Assinada? Entenda Seus Direitos Retroativos",
    metaTitle: "Trabalhou Sem Carteira? Como Provar Vínculo e Garantir Seus Direitos",
    metaDescription: "Sem registro na carteira? Você pode ter direito a FGTS, INSS, férias e 13º retroativos. Saiba como comprovar o vínculo empregatício.",
    excerpt: "3 em cada 10 trabalhadores brasileiros estão na informalidade. Se você é um deles, pode ter direito a milhares de reais em verbas retroativas.",
    category: "Trabalhista",
    date: "2026-03-18",
    readTime: "7 min",
    content: `
<p>Segundo o IBGE, <strong>cerca de 39 milhões de brasileiros</strong> trabalham sem carteira assinada. Se você é um deles — ou já foi — saiba que a empresa deve cada centavo que deixou de pagar. A Justiça do Trabalho reconhece o vínculo empregatício mesmo sem registro, e você pode cobrar <strong>todos os direitos retroativos</strong>.</p>

<h2>Quando existe vínculo empregatício?</h2>
<p>A CLT (art. 3º) define que existe vínculo quando estão presentes 4 elementos:</p>
<ul>
<li><strong>Pessoalidade:</strong> você pessoalmente presta o serviço (não pode mandar outra pessoa)</li>
<li><strong>Habitualidade:</strong> trabalha de forma regular (não é eventual)</li>
<li><strong>Subordinação:</strong> recebe ordens, tem horário, segue regras da empresa</li>
<li><strong>Onerosidade:</strong> recebe pagamento pelo trabalho</li>
</ul>
<p>Se esses 4 elementos estão presentes, <strong>existe vínculo independente de contrato assinado</strong>. Não importa se a empresa chama de "freelancer", "prestador de serviço" ou "parceiro".</p>

<h2>O que você tem direito a receber</h2>
<p>Com o reconhecimento do vínculo, a empresa deve pagar retroativamente:</p>
<ul>
<li><strong>FGTS + multa de 40%</strong> sobre todo o período trabalhado</li>
<li><strong>INSS</strong> — a empresa deve recolher a parte patronal e a do empregado</li>
<li><strong>Férias + 1/3</strong> de todos os períodos aquisitivos</li>
<li><strong>13º salário</strong> de todos os anos</li>
<li><strong>Horas extras</strong> se trabalhou além da jornada</li>
<li><strong>Aviso prévio</strong> (se foi dispensado sem)</li>
<li><strong>Seguro-desemprego</strong> (até 5 parcelas)</li>
<li><strong>Multa do art. 477 da CLT</strong> por atraso no pagamento das verbas</li>
</ul>

<h2>Quanto pode receber? Exemplo prático</h2>
<p>Vamos a um caso real simplificado:</p>
<p><strong>Situação:</strong> Maria trabalhou 3 anos como "autônoma" em uma loja, ganhando R$2.000/mês, com horário fixo e subordinação à gerente.</p>
<ul>
<li>FGTS retroativo: R$2.000 × 8% × 36 meses = <strong>R$5.760</strong></li>
<li>Multa 40% do FGTS: <strong>R$2.304</strong></li>
<li>Férias + 1/3 (3 períodos): <strong>R$8.000</strong></li>
<li>13º salário (3 anos): <strong>R$6.000</strong></li>
<li>Aviso prévio: <strong>R$2.600</strong> (30 dias + 3 dias por ano)</li>
<li><strong>Total aproximado: R$24.664</strong> (sem contar horas extras e danos morais)</li>
</ul>

<h2>Como provar o vínculo sem carteira assinada</h2>
<p>A prova não precisa ser documental. A Justiça do Trabalho aceita:</p>
<ul>
<li><strong>Testemunhas</strong> — colegas de trabalho, clientes, fornecedores</li>
<li><strong>Mensagens de WhatsApp</strong> — ordens, escalas, cobranças do chefe</li>
<li><strong>Comprovantes de pagamento</strong> — PIX, transferências, depósitos</li>
<li><strong>Fotos e vídeos</strong> — você no local de trabalho, uniformizado</li>
<li><strong>E-mails e registros</strong> — qualquer comunicação profissional</li>
<li><strong>Cadastro em sistemas</strong> da empresa (ponto, vendas, etc.)</li>
</ul>
<p><strong>Dica:</strong> comece a reunir essas provas agora, antes de sair da empresa. Depois fica muito mais difícil.</p>

<h2>"Sou MEI, posso ter vínculo reconhecido?"</h2>
<p>Sim. A chamada <strong>"pejotização"</strong> — quando a empresa obriga o trabalhador a abrir MEI ou CNPJ para disfarçar o vínculo — é fraude trabalhista. Se você tem MEI mas trabalha com subordinação, horário fixo e pessoalidade, o vínculo pode ser reconhecido normalmente.</p>

<h2>Prazo para cobrar</h2>
<p>Você tem <strong>2 anos após sair da empresa</strong> para entrar com a ação. Pode cobrar os direitos dos <strong>últimos 5 anos</strong> de trabalho. Depois desse prazo, perde o direito — então não espere.</p>
`,
  },
  {
    slug: "horas-extras-como-calcular",
    title: "Horas Extras Não Pagas: Como Calcular e Quais São Seus Direitos",
    metaTitle: "Horas Extras: Como Calcular e Cobrar Até 5 Anos Retroativos",
    metaDescription: "Faz hora extra e não recebe corretamente? Entenda como calcular o valor devido e quais são os prazos para cobrar judicialmente.",
    excerpt: "2 horas extras por dia com salário de R$2.500 podem valer mais de R$51 mil em 5 anos. Aprenda a calcular e conheça os truques que as empresas usam.",
    category: "Trabalhista",
    date: "2026-03-15",
    readTime: "6 min",
    content: `
<p>Horas extras não pagas são um dos direitos trabalhistas mais violados no Brasil. Muitos trabalhadores fazem 1 a 3 horas extras por dia sem receber — e não têm ideia de quanto dinheiro estão perdendo. Vamos fazer as contas e mostrar <strong>como cobrar retroativamente</strong>.</p>

<h2>Como calcular o valor da hora extra</h2>
<p>O cálculo é simples:</p>
<ol>
<li><strong>Descubra o valor da sua hora normal:</strong> salário ÷ 220 (para jornada de 44h semanais)</li>
<li><strong>Aplique o adicional:</strong> hora extra em dia útil = hora normal + 50%. Em domingos e feriados = hora normal + 100%</li>
</ol>
<p><strong>Exemplo com salário de R$2.500:</strong></p>
<ul>
<li>Hora normal: R$2.500 ÷ 220 = <strong>R$11,36</strong></li>
<li>Hora extra (dia útil): R$11,36 × 1,5 = <strong>R$17,04</strong></li>
<li>Hora extra (domingo/feriado): R$11,36 × 2 = <strong>R$22,72</strong></li>
</ul>

<h2>Quanto vale em 5 anos? Pode ser mais de R$51 mil</h2>
<p>Veja o impacto de 2 horas extras por dia, 22 dias por mês, durante 5 anos:</p>
<ul>
<li>Por mês: 2h × R$17,04 × 22 dias = <strong>R$749,76</strong></li>
<li>Por ano: R$749,76 × 12 = <strong>R$8.997,12</strong></li>
<li>Em 5 anos: <strong>R$44.985,60</strong></li>
</ul>
<p>Mas não para por aí. As horas extras <strong>refletem em outras verbas</strong>:</p>
<ul>
<li>13º salário (reflexo)</li>
<li>Férias + 1/3 (reflexo)</li>
<li>FGTS + multa 40% (reflexo)</li>
<li>Descanso semanal remunerado (DSR)</li>
</ul>
<p>Com os reflexos, o valor pode ultrapassar facilmente <strong>R$51 mil em 5 anos</strong>.</p>

<h2>Os 5 truques que as empresas usam para não pagar</h2>

<h3>1. Não registrar o ponto corretamente</h3>
<p>A empresa altera os registros de ponto para parecer que você saiu no horário. Se isso acontece, <strong>o ponto é considerado inválido</strong> e o ônus de provar o horário passa a ser da empresa.</p>

<h3>2. Banco de horas irregular</h3>
<p>Banco de horas só é válido se for por acordo individual escrito (compensação em até 6 meses) ou acordo coletivo (até 1 ano). Se não há acordo formal, <strong>as horas do banco devem ser pagas como extras</strong>.</p>

<h3>3. Cargo de confiança falso</h3>
<p>A empresa registra o trabalhador como "gerente" ou "supervisor" para alegar que não precisa pagar horas extras (art. 62, II, CLT). Mas se você não tem poder de mando real, a exceção não se aplica.</p>

<h3>4. Jornada externa sem controle</h3>
<p>A empresa alega que a jornada é "externa e incompatível com controle". Mas se você bate ponto por app, manda localização, ou tem roteiro fixo, <strong>existe controle sim</strong> — e as horas extras são devidas.</p>

<h3>5. Tempo à disposição não contado</h3>
<p>Tempo esperando ônibus fretado, trocando uniforme obrigatório ou aguardando ordens conta como jornada. Muitas empresas simplesmente ignoram esses minutos.</p>

<h2>Como provar horas extras</h2>
<ul>
<li><strong>Registros de ponto</strong> (mesmo os adulterados servem como prova)</li>
<li><strong>E-mails e mensagens</strong> enviados fora do horário</li>
<li><strong>Testemunhas</strong> que trabalharam junto</li>
<li><strong>GPS e registros de app</strong> (se trabalho externo)</li>
<li><strong>Câmeras de segurança</strong> da empresa</li>
</ul>

<h2>Prazo: cobre agora ou perca para sempre</h2>
<p>Você pode cobrar os <strong>últimos 5 anos</strong> de horas extras, mas tem apenas <strong>2 anos após sair da empresa</strong> para entrar com a ação. Se ainda está empregado, pode entrar com a ação agora mesmo — a CLT garante esse direito.</p>
`,
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
    content: `
<p>Pouca gente sabe, mas existe uma forma legal de <strong>sair da empresa e receber todos os direitos como se tivesse sido demitido sem justa causa</strong>. É a chamada <strong>rescisão indireta</strong> — também conhecida como a "justa causa do empregador".</p>

<h2>O que é a rescisão indireta?</h2>
<p>Prevista no <strong>artigo 483 da CLT</strong>, a rescisão indireta acontece quando o empregador comete falta grave que torna impossível a continuidade do contrato de trabalho. É como se o trabalhador "demitisse" a empresa por descumprimento das obrigações.</p>

<h2>Situações que dão direito à rescisão indireta</h2>
<p>As mais comuns na prática:</p>

<h3>Atraso ou não pagamento de salário</h3>
<p>Se a empresa atrasa o salário com frequência ou simplesmente não paga, você tem direito à rescisão indireta. A jurisprudência considera que <strong>3 meses de atraso já configuram falta grave</strong>, mas até 1 mês pode ser suficiente dependendo do caso.</p>

<h3>Não recolhimento do FGTS</h3>
<p>A empresa é obrigada a depositar 8% do salário no FGTS todo mês. Se não deposita, está descumprindo o contrato. Consulte seu extrato no app FGTS — muitos trabalhadores descobrem meses sem depósito.</p>

<h3>Assédio moral ou sexual</h3>
<p>Humilhações, gritos, ameaças constantes, isolamento proposital, cobranças abusivas ou qualquer conduta sexual indesejada são faltas graves que justificam a rescisão indireta — <strong>além de gerar indenização por danos morais</strong>.</p>

<h3>Condições de trabalho perigosas</h3>
<p>Exigir trabalho em local inseguro, sem equipamentos de proteção ou em condições que coloquem a saúde em risco é falta grave do empregador.</p>

<h3>Redução de trabalho ou salário</h3>
<p>Quando a empresa reduz suas funções, seu salário ou suas comissões unilateralmente, também cabe rescisão indireta.</p>

<h2>O que você recebe na rescisão indireta</h2>
<p>Exatamente o mesmo que receberia se fosse <strong>demitido sem justa causa</strong>:</p>
<ul>
<li><strong>Saldo de salário</strong></li>
<li><strong>Aviso prévio</strong> (proporcional ao tempo de trabalho)</li>
<li><strong>Férias vencidas e proporcionais + 1/3</strong></li>
<li><strong>13º salário proporcional</strong></li>
<li><strong>FGTS + multa de 40%</strong></li>
<li><strong>Seguro-desemprego</strong></li>
<li><strong>Indenização por danos morais</strong> (se comprovado assédio ou situação humilhante)</li>
</ul>

<h2>Como funciona o processo</h2>
<ol>
<li><strong>Reúna provas</strong> da falta grave da empresa (holerites, extratos FGTS, mensagens, testemunhas)</li>
<li><strong>Procure um advogado trabalhista</strong> para analisar se o caso é forte</li>
<li><strong>O advogado entra com a ação</strong> na Justiça do Trabalho pedindo a rescisão indireta</li>
<li><strong>Você pode parar de trabalhar</strong> imediatamente ou continuar até a decisão judicial, dependendo da estratégia</li>
</ol>

<h2>Cuidado: não peça demissão antes de consultar</h2>
<p>Se você simplesmente pedir demissão, <strong>perde o direito ao FGTS com multa, ao seguro-desemprego e ao aviso prévio</strong>. A rescisão indireta garante que você receba tudo. Por isso, antes de tomar qualquer atitude, consulte um advogado especializado.</p>
`,
  },
  {
    slug: "auxilio-acidente-inss",
    title: "Auxílio-Acidente: O Benefício do INSS Que Você Pode Receber Junto Com o Salário",
    metaTitle: "Auxílio-Acidente: Benefício do INSS Acumulável Com Salário",
    metaDescription: "Teve acidente e ficou com sequela? O auxílio-acidente paga 50% do salário de benefício e pode ser recebido junto com o salário do trabalho.",
    excerpt: "9 em cada 10 trabalhadores que teriam direito ao auxílio-acidente simplesmente não pedem. Valor de 50% do salário de benefício, pago junto com o salário.",
    category: "Previdenciário",
    date: "2026-03-10",
    readTime: "6 min",
    content: `
<p>O auxílio-acidente é um dos benefícios <strong>menos conhecidos e mais negligenciados</strong> do INSS. Ele é pago a quem sofreu acidente (de qualquer tipo) e ficou com sequela que reduz a capacidade de trabalho. O melhor: <strong>é pago junto com o salário</strong>, como uma complementação.</p>

<h2>O que é o auxílio-acidente?</h2>
<p>É um benefício <strong>indenizatório</strong> do INSS (espécie B94) pago mensalmente a segurados que, após consolidação das lesões de um acidente, ficaram com sequelas que reduzem a capacidade para o trabalho habitual.</p>
<p><strong>Diferente do auxílio-doença</strong>, que é pago enquanto você está afastado, o auxílio-acidente é pago <strong>depois que você volta a trabalhar</strong> e continua até a aposentadoria.</p>

<h2>Quanto vale o benefício?</h2>
<p>O valor é de <strong>50% do salário de benefício</strong> (a média das contribuições). É pago mensalmente, <strong>além do salário</strong> que você recebe normalmente da empresa.</p>
<p><strong>Exemplo:</strong> se seu salário de benefício é R$2.400, o auxílio-acidente será de <strong>R$1.200 por mês</strong>, todo mês, até você se aposentar. Em 10 anos, isso representa <strong>R$144.000</strong>.</p>

<h2>Quem tem direito?</h2>
<p>Para receber o auxílio-acidente, é preciso:</p>
<ul>
<li><strong>Ser segurado do INSS</strong> (empregado CLT, avulso ou segurado especial)</li>
<li><strong>Ter sofrido um acidente</strong> de qualquer natureza (trabalho, trânsito, doméstico, etc.)</li>
<li><strong>Ficar com sequela permanente</strong> que reduz a capacidade de trabalho</li>
<li><strong>Não estar aposentado</strong></li>
</ul>
<p><strong>Atenção:</strong> o acidente não precisa ser de trabalho. Acidentes de moto, quedas em casa, acidentes esportivos — todos contam, desde que haja sequela.</p>

<h2>Exemplos de sequelas que dão direito</h2>
<ul>
<li>Perda ou redução de movimento em membros</li>
<li>Perda parcial de audição</li>
<li>Redução da visão</li>
<li>Cicatrizes que limitem movimentos</li>
<li>Dores crônicas que reduzam a capacidade funcional</li>
<li>Fratura consolidada com deformidade</li>
<li>Lesões na coluna com limitação</li>
</ul>

<h2>Por que o INSS quase nunca concede automaticamente?</h2>
<p>Quando o trabalhador recebe alta do auxílio-doença, o INSS deveria automaticamente conceder o auxílio-acidente se houver sequela. Na prática, <strong>isso raramente acontece</strong>. O perito simplesmente dá alta e encerra o benefício, sem avaliar as sequelas.</p>
<p>Por isso, na maioria dos casos, é necessário <strong>entrar com pedido administrativo ou ação judicial</strong> para garantir o benefício.</p>

<h2>Como conseguir o auxílio-acidente</h2>
<ol>
<li><strong>Reúna documentação médica</strong> — laudos, exames, atestados que comprovem a sequela</li>
<li><strong>Faça um pedido no Meu INSS</strong> ou agende perícia</li>
<li><strong>Se negado</strong> — entre com recurso administrativo na Junta de Recursos do INSS</li>
<li><strong>Se negado novamente</strong> — ação judicial com laudo de médico assistente</li>
</ol>

<h2>O auxílio-acidente aumenta a aposentadoria</h2>
<p>Quando você se aposenta, o auxílio-acidente é incorporado ao cálculo da aposentadoria. Ou seja, <strong>o valor da sua aposentadoria será maior</strong> por conta do auxílio-acidente. Mais um motivo para não deixar de pedir.</p>
`,
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
    content: `
<p>A aposentadoria por invalidez — oficialmente chamada de <strong>"aposentadoria por incapacidade permanente"</strong> após a Reforma da Previdência — é o benefício do INSS para quem está <strong>total e permanentemente incapaz de trabalhar</strong>. Mais de 45% dos pedidos são negados, mas a maioria pode ser revertida com a estratégia certa.</p>

<h2>Quais doenças dão direito à aposentadoria por invalidez?</h2>
<p>Não existe uma lista fechada. O que importa é a <strong>incapacidade total e permanente</strong> para qualquer atividade laboral. Porém, algumas doenças aparecem com frequência:</p>

<h3>Doenças que dispensam carência (12 meses)</h3>
<p>O INSS isenta de carência doenças graves como:</p>
<ul>
<li>Câncer (neoplasia maligna)</li>
<li>HIV/AIDS</li>
<li>Esclerose múltipla</li>
<li>Doença de Parkinson</li>
<li>Cardiopatia grave</li>
<li>Hepatopatia grave</li>
<li>Cegueira</li>
<li>Paralisia irreversível</li>
<li>Tuberculose ativa</li>
<li>Hanseníase</li>
<li>Nefropatia grave</li>
<li>Alienação mental</li>
</ul>

<h3>Doenças comuns que geram invalidez</h3>
<ul>
<li>Problemas graves na coluna (hérnia de disco avançada, espondilolistese)</li>
<li>Doenças psiquiátricas severas (depressão grave, esquizofrenia, bipolaridade)</li>
<li>Fibromialgia incapacitante</li>
<li>LER/DORT avançadas</li>
<li>Diabetes com complicações severas</li>
<li>Doenças degenerativas articulares</li>
</ul>

<h2>Quanto vou receber?</h2>
<p>Após a Reforma da Previdência (EC 103/2019):</p>
<ul>
<li><strong>Regra geral:</strong> 60% da média salarial + 2% por ano de contribuição acima de 20 anos (homem) ou 15 anos (mulher)</li>
<li><strong>Acidente de trabalho ou doença profissional:</strong> 100% da média salarial</li>
<li><strong>Adicional de 25%:</strong> se precisar de acompanhante permanente (ex: cego, acamado)</li>
</ul>
<p><strong>Exemplo:</strong> Maria contribuiu por 25 anos com média salarial de R$3.000. Pela regra geral: 60% + (10 × 2%) = 80% de R$3.000 = <strong>R$2.400/mês</strong>. Se for por acidente de trabalho: <strong>R$3.000/mês</strong>.</p>

<h2>Como passar na perícia do INSS</h2>
<p>A perícia é o momento decisivo. Veja como se preparar:</p>

<h3>Documentos essenciais</h3>
<ul>
<li><strong>Laudos médicos detalhados</strong> — com CID, descrição da incapacidade e prognóstico</li>
<li><strong>Exames complementares</strong> — ressonância, tomografia, eletroneuromiografia, etc.</li>
<li><strong>Receitas de medicamentos</strong> — mostra a gravidade e continuidade do tratamento</li>
<li><strong>Atestados de especialistas</strong> — quanto mais especializado, melhor</li>
<li><strong>Relatório funcional</strong> — se possível, um relatório detalhando o que você NÃO consegue fazer</li>
</ul>

<h3>Na hora da perícia</h3>
<ul>
<li><strong>Seja honesto</strong> sobre suas limitações — não exagere nem minimize</li>
<li><strong>Descreva seu dia a dia</strong> — o que não consegue fazer que antes fazia</li>
<li><strong>Leve toda a documentação organizada</strong> em ordem cronológica</li>
<li><strong>Vá acompanhado</strong> se possível (familiar ou advogado)</li>
</ul>

<h2>INSS negou? O que fazer</h2>
<p>A negativa do INSS não é o fim. Você tem 3 caminhos:</p>
<ol>
<li><strong>Recurso administrativo</strong> — prazo de 30 dias para recorrer à Junta de Recursos do CRSS</li>
<li><strong>Novo pedido</strong> — se tiver novos laudos ou exames que comprovem piora</li>
<li><strong>Ação judicial</strong> — na Justiça Federal, com perícia independente (taxa de reversão de 40-50%)</li>
</ol>

<h2>A aposentadoria por invalidez pode ser revisada</h2>
<p>O INSS pode convocar o aposentado para reavaliação pericial. Se o perito considerar que houve recuperação, o benefício pode ser cessado. Por isso, <strong>mantenha seu tratamento médico atualizado</strong> e guarde toda documentação.</p>
<p><strong>Exceção:</strong> após 15 anos recebendo o benefício ou após completar 60 anos de idade, o INSS não pode mais revisar.</p>
`,
  },
  {
    slug: "aposentadoria-negada-inss",
    title: "Aposentadoria Negada Pelo INSS: Quais São as Opções de Recurso",
    metaTitle: "Aposentadoria Negada? Como Recorrer da Decisão do INSS",
    metaDescription: "INSS negou sua aposentadoria? Conheça as opções de recurso administrativo e judicial e os prazos que você precisa observar.",
    excerpt: "41% das negativas do INSS são revertidas quando o segurado recorre. Conheça os 3 caminhos para reverter e quanto pode receber de retroativo.",
    category: "Previdenciário",
    date: "2026-03-05",
    readTime: "7 min",
    content: `
<p>Receber a negativa de aposentadoria do INSS é frustrante, mas <strong>não significa o fim</strong>. Dados do próprio Conselho de Recursos da Previdência Social mostram que <strong>41% das negativas são revertidas</strong> quando o segurado recorre. O segredo está em agir rápido e da forma certa.</p>

<h2>Por que o INSS nega aposentadorias?</h2>
<p>Os motivos mais comuns:</p>
<ul>
<li><strong>Tempo de contribuição insuficiente</strong> — o INSS muitas vezes não conta períodos que deveria</li>
<li><strong>Vínculos não reconhecidos</strong> — trabalho informal, rural, ou vínculos antigos sem registro no CNIS</li>
<li><strong>Atividade especial não computada</strong> — trabalho com insalubridade/periculosidade que deveria contar com adicional</li>
<li><strong>Erro de cálculo</strong> — o INSS erra com frequência no cálculo do tempo e do valor</li>
<li><strong>Perícia desfavorável</strong> — no caso de aposentadoria por invalidez</li>
</ul>

<h2>Passo 1: Entenda o motivo da negativa (Dia 1-3)</h2>
<p>Acesse o <strong>Meu INSS</strong> e leia a carta de indeferimento. O INSS é obrigado a informar o motivo. Identifique:</p>
<ul>
<li>Qual regra de aposentadoria foi analisada</li>
<li>Quanto tempo de contribuição o INSS contabilizou</li>
<li>Quais períodos ficaram de fora</li>
<li>Qual foi a fundamentação legal</li>
</ul>
<p>Com essa informação, um advogado previdenciário consegue identificar rapidamente <strong>onde está o erro</strong>.</p>

<h2>Passo 2: Recurso administrativo (Dia 3-30)</h2>
<p>Você tem <strong>30 dias</strong> a partir da ciência da negativa para interpor recurso ao <strong>CRSS (Conselho de Recursos do Seguro Social)</strong>.</p>
<p>Vantagens do recurso administrativo:</p>
<ul>
<li><strong>Gratuito</strong> — não tem custos</li>
<li><strong>Não precisa de advogado</strong> (mas é altamente recomendável)</li>
<li><strong>Prazo razoável</strong> — costuma ser julgado em 3 a 8 meses</li>
<li><strong>Se ganhar, recebe retroativo</strong> desde a data do pedido original</li>
</ul>
<p>No recurso, apresente documentos novos que comprovem o tempo ou condição não reconhecida: CTPS antiga, PPP (Perfil Profissiográfico Previdenciário), contracheques, laudos médicos, declarações de empregadores, etc.</p>

<h2>Passo 3: Ação judicial (se o recurso for negado)</h2>
<p>Se o recurso administrativo não resolver, a via judicial é o próximo passo — e tem <strong>bons resultados para os segurados</strong>.</p>
<ul>
<li><strong>Valores até 60 salários mínimos</strong> — Juizado Especial Federal (mais rápido, sem custas)</li>
<li><strong>Valores acima de 60 salários mínimos</strong> — Vara Federal (mais complexo, mas sem limite de valor)</li>
</ul>
<p>Na Justiça, o juiz pode determinar:</p>
<ul>
<li>Perícia médica independente (em caso de invalidez)</li>
<li>Contagem de tempo especial com base em laudos</li>
<li>Reconhecimento de trabalho rural ou informal com base em provas testemunhais</li>
<li>Pagamento de <strong>todo o retroativo</strong> desde a data do pedido administrativo</li>
</ul>

<h2>Quanto posso receber de retroativo?</h2>
<p>Se o INSS negou indevidamente e você reverte na Justiça, recebe <strong>todos os meses desde o pedido original</strong>. Exemplo:</p>
<ul>
<li>Pedido feito em março/2026</li>
<li>Decisão judicial favorável em março/2027</li>
<li>Valor mensal da aposentadoria: R$2.500</li>
<li><strong>Retroativo: R$30.000</strong> (12 meses × R$2.500)</li>
</ul>
<p>Em casos mais demorados, o retroativo pode chegar a <strong>R$50 mil, R$100 mil ou mais</strong>.</p>

<h2>Não espere para agir</h2>
<p>Cada mês que passa sem recorrer é um mês a menos de retroativo. Se a negativa foi recente, <strong>os próximos 30 dias são cruciais</strong> para interpor o recurso administrativo dentro do prazo.</p>
`,
  },
  {
    slug: "pensao-por-morte",
    title: "Pensão por Morte: Quem Tem Direito, Prazos e Como Solicitar",
    metaTitle: "Pensão por Morte: Quem Tem Direito, Valor e Como Pedir",
    metaDescription: "Perdeu um familiar segurado do INSS? Conheça os requisitos, prazos legais e como solicitar a pensão por morte corretamente.",
    excerpt: "Se requerer após 180 dias do óbito, você perde o retroativo. Com benefício de R$2.000/mês, 6 meses são R$12 mil perdidos.",
    category: "Previdenciário",
    date: "2026-03-02",
    readTime: "7 min",
    content: `
<p>A pensão por morte é o benefício do INSS pago aos <strong>dependentes de um segurado que faleceu</strong>. É um direito fundamental em um momento de dor — mas muitas famílias perdem dinheiro por não conhecerem as regras de prazo e valor.</p>

<h2>Quem tem direito à pensão por morte?</h2>
<p>Os dependentes são divididos em 3 classes (a existência de dependente de uma classe exclui as demais):</p>

<h3>Classe 1 (dependência presumida — não precisa comprovar)</h3>
<ul>
<li><strong>Cônjuge ou companheiro(a)</strong> — inclusive união estável e união homoafetiva</li>
<li><strong>Filhos menores de 21 anos</strong> ou inválidos/deficientes de qualquer idade</li>
</ul>

<h3>Classe 2 (precisa comprovar dependência econômica)</h3>
<ul>
<li><strong>Pais</strong> do segurado falecido</li>
</ul>

<h3>Classe 3 (precisa comprovar dependência econômica)</h3>
<ul>
<li><strong>Irmãos menores de 21 anos</strong> ou inválidos/deficientes de qualquer idade</li>
</ul>

<h2>Quanto vale a pensão por morte?</h2>
<p>Após a Reforma da Previdência (13/11/2019):</p>
<ul>
<li><strong>Cota familiar:</strong> 50% do valor da aposentadoria + 10% por dependente adicional (até 100%)</li>
<li><strong>1 dependente:</strong> 60% do benefício</li>
<li><strong>2 dependentes:</strong> 70%</li>
<li><strong>3 dependentes:</strong> 80%</li>
<li><strong>4 dependentes:</strong> 90%</li>
<li><strong>5 ou mais:</strong> 100%</li>
</ul>
<p><strong>Exceção importante:</strong> se o falecido tinha dependentes inválidos ou com deficiência intelectual/mental/grave, o valor é de <strong>100%</strong> independente do número de dependentes.</p>

<h2>O prazo de 180 dias: atenção!</h2>
<p>O prazo para requerer a pensão por morte afeta <strong>diretamente quanto você recebe</strong>:</p>
<ul>
<li><strong>Até 180 dias após o óbito:</strong> recebe retroativo desde a data do falecimento</li>
<li><strong>Após 180 dias:</strong> recebe somente a partir da data do requerimento</li>
</ul>
<p><strong>Impacto prático:</strong> com pensão de R$2.000/mês, requerer 6 meses após o óbito em vez de dentro dos 180 dias significa <strong>perder R$12.000 de retroativo</strong>.</p>

<h2>Duração da pensão por morte para cônjuges</h2>
<p>A duração depende da <strong>idade do cônjuge</strong> na data do óbito:</p>
<ul>
<li>Menos de 22 anos: <strong>3 anos</strong></li>
<li>22 a 27 anos: <strong>6 anos</strong></li>
<li>28 a 30 anos: <strong>10 anos</strong></li>
<li>31 a 41 anos: <strong>15 anos</strong></li>
<li>42 a 44 anos: <strong>20 anos</strong></li>
<li>45 anos ou mais: <strong>vitalícia</strong></li>
</ul>
<p>Para filhos, a pensão vai até os 21 anos (ou é vitalícia se inválido/deficiente).</p>

<h2>Documentos necessários</h2>
<ul>
<li>Certidão de óbito</li>
<li>Documentos do falecido (RG, CPF, CTPS)</li>
<li>Certidão de casamento ou declaração de união estável</li>
<li>Documentos dos dependentes</li>
<li>Certidão de nascimento dos filhos</li>
<li>Comprovante de qualidade de segurado (último holerite, carnê INSS, CTPS)</li>
</ul>

<h2>Pensão por morte pode ser cumulada?</h2>
<p>Sim, em alguns casos. Se o dependente já recebe aposentadoria própria, por exemplo, pode acumular — mas com restrições. A lei permite acumular, porém o <strong>segundo benefício será reduzido</strong> de acordo com faixas de valor.</p>

<h2>Não deixe o prazo passar</h2>
<p>Mesmo em um momento difícil, procure orientação jurídica o mais rápido possível. Os 180 dias passam rápido e <strong>cada mês perdido é dinheiro que não volta</strong>.</p>
`,
  },
  {
    slug: "periculosidade-insalubridade",
    title: "Adicional de Periculosidade e Insalubridade: Entenda Seus Direitos",
    metaTitle: "Periculosidade e Insalubridade: Quem Tem Direito ao Adicional",
    metaDescription: "Trabalha com risco ou agentes nocivos? Entenda quem tem direito ao adicional de periculosidade e insalubridade e como funciona.",
    excerpt: "23 milhões de brasileiros trabalham expostos a riscos. Menos da metade recebe o adicional correto. Periculosidade paga 30% sobre o salário base.",
    category: "Trabalhista",
    date: "2026-02-28",
    readTime: "6 min",
    content: `
<p>Milhões de brasileiros trabalham expostos a condições perigosas ou insalubres e <strong>não recebem o adicional que a lei garante</strong>. A periculosidade paga 30% sobre o salário base e a insalubridade de 10% a 40%. Descubra se você tem direito.</p>

<h2>Adicional de Periculosidade: 30% sobre o salário base</h2>
<p>O adicional de periculosidade é de <strong>30% sobre o salário base</strong> (não incluindo outros adicionais) e é pago a quem trabalha com:</p>

<h3>Atividades perigosas reconhecidas por lei</h3>
<ul>
<li><strong>Inflamáveis e explosivos</strong> — postos de gasolina, fábricas de fogos, mineração</li>
<li><strong>Eletricidade</strong> — eletricistas, técnicos de manutenção elétrica, engenheiros</li>
<li><strong>Radiação ionizante</strong> — profissionais de saúde em radiologia, usinas nucleares</li>
<li><strong>Segurança pessoal e patrimonial</strong> — vigilantes, seguranças</li>
<li><strong>Motocicleta</strong> — motoboys, entregadores que usam moto no trabalho</li>
</ul>
<p><strong>Exemplo:</strong> salário de R$2.500 + 30% de periculosidade = <strong>R$3.250/mês</strong>. Em 5 anos, são <strong>R$45.000 a mais</strong> (sem contar reflexos em férias, 13º e FGTS).</p>

<h2>Adicional de Insalubridade: 10%, 20% ou 40%</h2>
<p>Pago em 3 graus, calculado sobre o <strong>salário mínimo</strong> (salvo convenção coletiva que determine base diferente):</p>
<ul>
<li><strong>Grau mínimo (10%):</strong> R$151,80/mês</li>
<li><strong>Grau médio (20%):</strong> R$303,60/mês</li>
<li><strong>Grau máximo (40%):</strong> R$607,20/mês</li>
</ul>

<h3>Agentes insalubres mais comuns</h3>
<ul>
<li><strong>Ruído excessivo</strong> — acima de 85 dB (fábricas, construção civil)</li>
<li><strong>Calor ou frio intenso</strong> — câmaras frias, fornos industriais, trabalho a céu aberto</li>
<li><strong>Agentes químicos</strong> — solventes, poeiras, tintas, produtos de limpeza industriais</li>
<li><strong>Agentes biológicos</strong> — hospitais, laboratórios, coleta de lixo, esgoto</li>
<li><strong>Radiação não ionizante</strong> — soldadores, profissionais de telecomunicações</li>
<li><strong>Umidade excessiva</strong> — lavanderias, frigoríficos</li>
</ul>

<h2>Posso receber os dois adicionais juntos?</h2>
<p>A CLT (art. 193, §2º) diz que o trabalhador deve optar entre um ou outro. Na prática, <strong>o trabalhador sempre escolhe o mais vantajoso</strong> — geralmente a periculosidade (30% sobre o salário base é quase sempre maior que a insalubridade sobre o salário mínimo).</p>
<p><strong>Atenção:</strong> existe discussão jurídica sobre a possibilidade de cumulação com base em convenções internacionais. Em alguns tribunais, já se admite a cumulação. Consulte um advogado sobre seu caso específico.</p>

<h2>A empresa pode eliminar o adicional?</h2>
<p>Sim — se eliminar a condição insalubre ou perigosa. Se a empresa fornece EPI eficaz e elimina completamente a exposição ao agente nocivo, pode cessar o adicional de insalubridade. Para periculosidade, o EPI <strong>não elimina</strong> o adicional (o risco permanece mesmo com equipamento).</p>
<p>Na prática, muitas empresas alegam que fornecem EPI mas <strong>não fiscalizam o uso, não fazem manutenção ou não fornecem o equipamento correto</strong>. Nesses casos, o adicional continua sendo devido.</p>

<h2>Como cobrar retroativamente</h2>
<p>Se você trabalha ou trabalhou em condições perigosas/insalubres sem receber o adicional:</p>
<ol>
<li><strong>Reúna provas</strong> — PPRA/PGR, LTCAT, PCMSO, fotos do ambiente, PPP</li>
<li><strong>Testemunhas</strong> — colegas que também trabalham nas mesmas condições</li>
<li><strong>Ação trabalhista</strong> — pode cobrar os últimos 5 anos retroativamente</li>
<li><strong>Perícia judicial</strong> — o juiz nomeia um perito para verificar as condições no local</li>
</ol>
<p>O prazo para entrar com a ação é de <strong>2 anos após a saída da empresa</strong>, cobrando os últimos 5 anos.</p>
`,
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
    content: `
<p>O BPC (Benefício de Prestação Continuada), também chamado de LOAS, é um dos benefícios assistenciais mais importantes do Brasil. Ele paga <strong>1 salário mínimo por mês (R$1.518 em 2026)</strong> para idosos e pessoas com deficiência em situação de baixa renda — <strong>sem precisar ter contribuído um único dia ao INSS</strong>.</p>

<h2>Quem tem direito ao BPC/LOAS?</h2>
<p>Existem dois grupos que podem receber:</p>

<h3>BPC Idoso</h3>
<ul>
<li><strong>Idade:</strong> 65 anos ou mais</li>
<li><strong>Renda familiar per capita:</strong> até 1/4 do salário mínimo (R$379,50 por pessoa)</li>
<li><strong>Não precisa ter contribuído</strong> ao INSS</li>
<li><strong>Não precisa de perícia médica</strong></li>
</ul>

<h3>BPC Deficiência</h3>
<ul>
<li><strong>Deficiência:</strong> física, mental, intelectual ou sensorial de longo prazo (mais de 2 anos)</li>
<li><strong>Renda familiar per capita:</strong> até 1/4 do salário mínimo</li>
<li><strong>Não precisa ter contribuído</strong> ao INSS</li>
<li><strong>Precisa de perícia médica e avaliação social</strong></li>
<li><strong>Qualquer idade</strong> — inclusive crianças</li>
</ul>

<h2>O critério de renda: não é tão rígido quanto parece</h2>
<p>A lei diz que a renda per capita deve ser de até 1/4 do salário mínimo. Mas na prática, <strong>a Justiça é mais flexível</strong>:</p>
<ul>
<li>O STF já decidiu que o critério de 1/4 é apenas um <strong>parâmetro objetivo</strong>, mas não o único</li>
<li>Gastos com medicamentos, tratamentos e necessidades especiais podem ser <strong>descontados da renda</strong></li>
<li>Se a renda for um pouco acima (ex: 1/3 do salário mínimo), a Justiça pode conceder se demonstrada a <strong>vulnerabilidade social</strong></li>
<li>BPC recebido por outro membro da família (idoso) <strong>não entra no cálculo</strong> da renda per capita</li>
</ul>

<h2>Como solicitar o BPC</h2>
<ol>
<li><strong>Inscrição no CadÚnico:</strong> procure o CRAS da sua cidade e faça o cadastro. É obrigatório para solicitar o BPC</li>
<li><strong>Aguarde 45 dias</strong> após a inscrição no CadÚnico</li>
<li><strong>Faça o requerimento:</strong> pelo Meu INSS (app ou site) ou pelo telefone 135</li>
<li><strong>Se for BPC Deficiência:</strong> agende perícia médica e avaliação social no INSS</li>
<li><strong>Acompanhe o andamento</strong> pelo Meu INSS</li>
</ol>

<h2>Documentos necessários</h2>
<ul>
<li>RG e CPF do requerente e de todos os membros da família</li>
<li>Comprovante de residência</li>
<li>Comprovante de renda de todos os membros da família</li>
<li>Para BPC Deficiência: laudos médicos, exames, atestados que comprovem a deficiência</li>
<li>Número do NIS (CadÚnico)</li>
</ul>

<h2>BPC negado? O que fazer</h2>
<p>O INSS nega muitos pedidos de BPC, principalmente por:</p>
<ul>
<li><strong>Renda acima do limite</strong> — mas pode haver erro no cálculo</li>
<li><strong>Deficiência não reconhecida na perícia</strong> — perícia do INSS é muito restritiva</li>
<li><strong>CadÚnico desatualizado</strong> — dados divergentes geram negativa automática</li>
</ul>
<p>Se negado, você pode:</p>
<ol>
<li><strong>Recurso administrativo</strong> no INSS (30 dias de prazo)</li>
<li><strong>Ação judicial</strong> no Juizado Especial Federal (gratuito para quem comprova baixa renda)</li>
</ol>
<p>Na Justiça, a perícia é independente e o juiz pode considerar a <strong>realidade da família</strong>, não apenas o critério objetivo de 1/4 do salário mínimo.</p>

<h2>BPC não é aposentadoria</h2>
<p>Diferenças importantes:</p>
<ul>
<li><strong>Não paga 13º salário</strong></li>
<li><strong>Não gera pensão por morte</strong></li>
<li><strong>Não pode ser acumulado</strong> com outro benefício do INSS (exceto assistência médica)</li>
<li><strong>É revisado a cada 2 anos</strong> pelo INSS</li>
</ul>
<p>Mesmo com essas limitações, R$1.518/mês pode fazer <strong>toda a diferença</strong> para quem não tem outra fonte de renda.</p>
`,
  },
];

export const blogPosts: BlogPost[] = [
  ..._originalPosts,
  ...posts01,
  ...posts11,
  ...posts21,
  ...posts31,
  ...posts41,
];
