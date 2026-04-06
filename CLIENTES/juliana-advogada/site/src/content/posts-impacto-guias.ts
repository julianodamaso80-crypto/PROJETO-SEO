import { BlogPost } from "./types";

export const postsImpactoGuias: BlogPost[] = [
  // ── 1. Calculadora de Rescisão ───────────────────────────────────────
  {
    slug: "calculadora-rescisao-2026-simule-quanto-receber",
    title: "Calculadora de Rescisão 2026: Simule Quanto Você Vai Receber",
    metaTitle: "Calculadora de Rescisão 2026: Simule Seus Valores",
    metaDescription:
      "Aprenda a calcular sua rescisão trabalhista em 2026. Veja saldo de salário, férias, 13º, FGTS e multa de 40%. Guia prático com exemplos reais.",
    excerpt:
      "Vai sair do emprego ou foi demitido? Entenda cada verba que compõe a rescisão e saiba exatamente quanto você tem direito a receber em 2026.",
    category: "Trabalhista",
    date: "2026-01-05",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80",
    content: `
<p>Receber a rescisão é um dos momentos mais importantes — e mais confusos — da vida profissional. São várias verbas, prazos e regras que mudam conforme o tipo de demissão. Neste guia prático, vamos explicar <strong>cada parcela da rescisão trabalhista em 2026</strong> para que você consiga simular seus valores antes mesmo de assinar qualquer papel.</p>

<h2>Quais verbas compõem a rescisão?</h2>

<p>A rescisão trabalhista pode incluir diversas parcelas, dependendo do tipo de desligamento. As principais são:</p>

<ul>
<li><strong>Saldo de salário:</strong> dias trabalhados no mês da demissão</li>
<li><strong>Aviso prévio:</strong> trabalhado ou indenizado (30 dias + 3 dias por ano de serviço, até 90 dias)</li>
<li><strong>Férias vencidas + 1/3:</strong> se houver período aquisitivo completo sem gozo</li>
<li><strong>Férias proporcionais + 1/3:</strong> proporcional aos meses trabalhados no período aquisitivo atual</li>
<li><strong>13º salário proporcional:</strong> proporcional aos meses trabalhados no ano</li>
<li><strong>Multa de 40% do FGTS:</strong> apenas na demissão sem justa causa</li>
<li><strong>Saque do FGTS:</strong> liberado na demissão sem justa causa</li>
</ul>

<h2>Como calcular o saldo de salário</h2>

<p>O saldo de salário é o valor proporcional aos dias trabalhados no último mês. A fórmula é simples:</p>

<p><strong>Salário ÷ 30 × dias trabalhados = saldo de salário</strong></p>

<p>Exemplo: se seu salário é R$3.000,00 e você trabalhou 15 dias no mês da demissão, o saldo será R$3.000 ÷ 30 × 15 = <strong>R$1.500,00</strong>.</p>

<h2>Cálculo do aviso prévio</h2>

<p>O aviso prévio mínimo é de 30 dias. Para cada ano completo de trabalho na mesma empresa, somam-se 3 dias, até o máximo de 90 dias (art. 1º da Lei 12.506/2011). Se a empresa optar pelo aviso prévio indenizado, o valor é pago integralmente na rescisão.</p>

<p>Exemplo prático: trabalhador com 5 anos de empresa tem direito a 30 + (5 × 3) = <strong>45 dias de aviso prévio</strong>. Se o salário é R$3.000, o aviso indenizado será R$3.000 ÷ 30 × 45 = <strong>R$4.500,00</strong>.</p>

<h2>Férias vencidas e proporcionais</h2>

<p>As férias vencidas são aquelas cujo período aquisitivo já foi completado (12 meses), mas o trabalhador não usufruiu. Já as férias proporcionais correspondem ao período aquisitivo em andamento. Ambas são pagas com o <strong>adicional de 1/3 constitucional</strong>.</p>

<p>Cálculo: se o salário é R$3.000 e há 8 meses de férias proporcionais: R$3.000 ÷ 12 × 8 = R$2.000 + 1/3 (R$666,67) = <strong>R$2.666,67</strong>.</p>

<h2>13º salário proporcional</h2>

<p>O 13º proporcional considera os meses trabalhados no ano da demissão. Cada mês com pelo menos 15 dias trabalhados conta como mês completo.</p>

<p>Cálculo: salário R$3.000, demitido em abril (4 meses): R$3.000 ÷ 12 × 4 = <strong>R$1.000,00</strong>.</p>

<h2>Multa de 40% do FGTS</h2>

<p>Na demissão sem justa causa, o empregador deve pagar uma multa de <strong>40% sobre o saldo total do FGTS</strong> do trabalhador (incluindo todos os depósitos feitos durante o contrato, com juros e correção). Se o saldo do FGTS é R$15.000, a multa será de <strong>R$6.000,00</strong>.</p>

<h2>Tabela resumo por tipo de demissão</h2>

<table>
<thead>
<tr><th>Verba</th><th>Sem justa causa</th><th>Pedido de demissão</th><th>Justa causa</th></tr>
</thead>
<tbody>
<tr><td>Saldo de salário</td><td>Sim</td><td>Sim</td><td>Sim</td></tr>
<tr><td>Aviso prévio</td><td>Sim</td><td>Sim (pode ser descontado)</td><td>Não</td></tr>
<tr><td>Férias vencidas + 1/3</td><td>Sim</td><td>Sim</td><td>Sim</td></tr>
<tr><td>Férias proporcionais + 1/3</td><td>Sim</td><td>Sim</td><td>Não</td></tr>
<tr><td>13º proporcional</td><td>Sim</td><td>Sim</td><td>Não</td></tr>
<tr><td>Multa 40% FGTS</td><td>Sim</td><td>Não</td><td>Não</td></tr>
<tr><td>Saque FGTS</td><td>Sim</td><td>Não</td><td>Não</td></tr>
<tr><td>Seguro-desemprego</td><td>Sim</td><td>Não</td><td>Não</td></tr>
</tbody>
</table>

<h2>Prazo para pagamento da rescisão</h2>

<p>A empresa tem até <strong>10 dias corridos</strong> após o término do contrato para pagar todas as verbas rescisórias (art. 477, §6º da CLT). Se ultrapassar esse prazo, o trabalhador tem direito a uma <strong>multa equivalente a um salário</strong>.</p>

<h2>O que fazer agora</h2>

<p>Se você foi demitido ou está planejando sair do emprego, faça os cálculos antes de assinar o Termo de Rescisão. Compare os valores com o que a empresa está oferecendo. Se houver diferença ou dúvida, <strong>não assine sem orientação jurídica</strong>.</p>

<p><strong>Precisa de ajuda para conferir sua rescisão?</strong> <a href="/contato">Fale com a nossa equipe</a>. Analisamos seus documentos e garantimos que você receba tudo o que tem direito.</p>
`,
  },

  // ── 2. Checklist Aposentadoria INSS ──────────────────────────────────
  {
    slug: "checklist-documentos-aposentadoria-inss",
    title: "Checklist: 15 Documentos Para Pedir Aposentadoria no INSS",
    metaTitle: "15 Documentos Para Aposentadoria INSS: Checklist Completo",
    metaDescription:
      "Lista completa dos 15 documentos necessários para pedir aposentadoria no INSS em 2026. Checklist prático para não esquecer nada. Consulte uma advogada.",
    excerpt:
      "Antes de agendar no INSS, confira se você tem todos os documentos. Um papel faltando pode atrasar sua aposentadoria em meses. Veja a lista completa.",
    category: "Previdenciário",
    date: "2026-01-08",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1511174511562-5f338ea9db93?w=800&q=80",
    content: `
<p>Pedir aposentadoria no INSS pode parecer simples, mas a maioria dos pedidos sofre atraso ou indeferimento por <strong>documentação incompleta</strong>. Para evitar idas e vindas desnecessárias, preparamos este checklist com os <strong>15 documentos essenciais</strong> que você precisa reunir antes de dar entrada no benefício.</p>

<h2>Por que a documentação é tão importante?</h2>

<p>O INSS analisa seu pedido com base nos documentos apresentados. Se faltar comprovação de um período de trabalho, aquele tempo simplesmente <strong>não será contado</strong>. Isso pode significar anos a menos de contribuição reconhecida — e, em muitos casos, o indeferimento do pedido.</p>

<h2>Checklist completo: 15 documentos</h2>

<h3>Documentos pessoais</h3>

<ol>
<li><strong>Documento de identidade (RG ou CNH):</strong> original e cópia. Certifique-se de que está legível e dentro da validade.</li>
<li><strong>CPF:</strong> pode estar no RG ou CNH. Se tiver o cartão físico, leve também.</li>
<li><strong>Comprovante de residência atualizado:</strong> conta de luz, água ou telefone dos últimos 3 meses.</li>
<li><strong>Certidão de nascimento ou casamento:</strong> especialmente importante para mulheres que mudaram de nome.</li>
</ol>

<h3>Documentos de trabalho e contribuição</h3>

<ol start="5">
<li><strong>Carteira de Trabalho (CTPS):</strong> todas as páginas preenchidas — frente, verso, alterações salariais. Se tiver mais de uma carteira, leve todas.</li>
<li><strong>Extrato CNIS atualizado:</strong> o Cadastro Nacional de Informações Sociais é o "raio-x" da sua vida contributiva. Baixe pelo Meu INSS.</li>
<li><strong>Carnês de contribuição (GPS):</strong> se você contribuiu como autônomo ou facultativo, os carnês originais comprovam pagamentos que podem não constar no CNIS.</li>
<li><strong>Contracheques e holerites:</strong> úteis para comprovar vínculos que aparecem com divergência no CNIS.</li>
<li><strong>Guias de recolhimento (DARF/GPS):</strong> para contribuintes individuais, MEI ou facultativos.</li>
</ol>

<h3>Documentos complementares</h3>

<ol start="10">
<li><strong>PPP (Perfil Profissiográfico Previdenciário):</strong> obrigatório para quem trabalhou com insalubridade, periculosidade ou agentes nocivos. Solicite à empresa ou ao sindicato.</li>
<li><strong>LTCAT (Laudo Técnico):</strong> complementa o PPP e detalha as condições ambientais de trabalho.</li>
<li><strong>Certidão de tempo de contribuição:</strong> se você foi servidor público e quer averbar esse tempo no INSS.</li>
<li><strong>Declaração de atividade rural:</strong> para quem trabalhou no campo. Pode ser obtida no sindicato rural ou por autodeclaração com testemunhas.</li>
<li><strong>Certidão de tempo de serviço militar:</strong> o tempo de serviço militar obrigatório conta como contribuição.</li>
<li><strong>Procuração (se aplicável):</strong> se outra pessoa for dar entrada no pedido em seu nome, é necessária procuração com firma reconhecida ou digital.</li>
</ol>

<h2>Documentos que poucos conhecem, mas fazem diferença</h2>

<p>Além dos 15 itens acima, existem documentos que podem aumentar seu tempo de contribuição:</p>

<ul>
<li><strong>Certidão de nascimento dos filhos:</strong> professoras e seguradas especiais podem ter direito a tempo adicional</li>
<li><strong>Termo de rescisão (TRCT):</strong> comprova vínculo e data de saída</li>
<li><strong>Reclamatória trabalhista:</strong> sentença judicial que reconheceu vínculo de emprego pode ser usada para complementar o CNIS</li>
<li><strong>Diploma ou certificado escolar:</strong> em alguns casos, período de aprendizagem pode contar</li>
</ul>

<h2>Como verificar se seus dados estão corretos no CNIS</h2>

<p>Antes de dar entrada, acesse o <strong>Meu INSS</strong> e baixe seu extrato do CNIS. Verifique:</p>

<ul>
<li>Se todos os vínculos empregatícios aparecem</li>
<li>Se as datas de admissão e saída estão corretas</li>
<li>Se os salários de contribuição estão condizentes com o que você recebia</li>
<li>Se há indicadores de pendência (como "PREM-PEXT" ou "PREC-FACULT")</li>
</ul>

<p>Qualquer divergência deve ser corrigida <strong>antes</strong> do pedido. Corrigir depois pode atrasar o processo em 6 meses ou mais.</p>

<h2>Passo a passo para dar entrada</h2>

<ol>
<li>Reúna todos os documentos do checklist</li>
<li>Acesse o Meu INSS e faça login com conta Gov.br</li>
<li>Clique em "Novo Pedido" e selecione o tipo de aposentadoria</li>
<li>Preencha os dados solicitados e anexe os documentos digitalizados</li>
<li>Acompanhe o andamento pelo próprio app</li>
</ol>

<h2>O que fazer agora</h2>

<p>Não espere chegar no INSS para descobrir que falta um documento. Use este checklist, reúna tudo com antecedência e, se perceber que há períodos sem comprovação, <strong>busque orientação antes de protocolar o pedido</strong>.</p>

<p><strong>Quer garantir que seu pedido será aprovado sem atrasos?</strong> <a href="/contato">Fale com a nossa equipe</a>. Analisamos seu CNIS, identificamos pendências e preparamos toda a documentação.</p>
`,
  },

  // ── 3. Quanto Custa Advogado Trabalhista ─────────────────────────────
  {
    slug: "quanto-custa-advogado-trabalhista-honorarios-2026",
    title: "Quanto Custa um Advogado Trabalhista? Tabela de Honorários 2026",
    metaTitle: "Advogado Trabalhista: Quanto Custa em 2026? Tabela Completa",
    metaDescription:
      "Descubra quanto custa contratar um advogado trabalhista em 2026. Tabela de honorários, formas de cobrança e quando o atendimento pode ser gratuito.",
    excerpt:
      "Muita gente deixa de buscar seus direitos por medo do custo. Veja quanto realmente custa um advogado trabalhista e quais são as formas de pagamento.",
    category: "Trabalhista",
    date: "2026-01-12",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
    content: `
<p>Uma das perguntas mais frequentes que recebemos é: <strong>"Quanto custa um advogado trabalhista?"</strong>. A resposta depende de vários fatores — tipo de caso, complexidade, região e forma de cobrança. Neste guia, vamos esclarecer todas as opções para que você saiba exatamente o que esperar.</p>

<h2>Formas de cobrança de honorários</h2>

<p>Existem três modelos principais de cobrança na advocacia trabalhista:</p>

<h3>1. Honorários sobre o êxito (percentual sobre o ganho)</h3>

<p>É a forma mais comum na área trabalhista. O advogado recebe um <strong>percentual sobre o valor que o cliente ganhar</strong> na ação. Se não houver ganho, não há cobrança. Os percentuais praticados no mercado variam entre <strong>20% e 30%</strong> do valor líquido recebido.</p>

<p>Essa é a melhor opção para quem não pode pagar adiantado, pois o risco financeiro é compartilhado com o advogado.</p>

<h3>2. Honorários fixos (valor fechado)</h3>

<p>Neste modelo, o advogado cobra um valor fixo para cuidar de todo o processo, independentemente do resultado. É mais comum em casos simples, como cálculo de rescisão, consultoria pontual ou elaboração de defesa.</p>

<p>Valores típicos em 2026:</p>

<ul>
<li><strong>Consulta jurídica:</strong> R$200 a R$500</li>
<li><strong>Análise de rescisão:</strong> R$300 a R$800</li>
<li><strong>Ação trabalhista simples:</strong> R$2.000 a R$5.000</li>
<li><strong>Ação trabalhista complexa:</strong> R$5.000 a R$15.000+</li>
</ul>

<h3>3. Honorários mistos</h3>

<p>Combinação de um valor fixo de entrada mais um percentual sobre o êxito. Exemplo: R$1.000 de entrada + 15% sobre o valor recebido. É um modelo equilibrado para ambas as partes.</p>

<h2>Tabela da OAB: referência de valores</h2>

<p>Cada seccional da OAB publica uma <strong>tabela de honorários mínimos</strong> que serve como referência. Embora não seja obrigatória, é utilizada como parâmetro ético. No Estado de São Paulo, por exemplo, a tabela da OAB/SP sugere:</p>

<table>
<thead>
<tr><th>Serviço</th><th>Honorários sugeridos (OAB/SP 2026)</th></tr>
</thead>
<tbody>
<tr><td>Consulta verbal</td><td>A partir de R$350,00</td></tr>
<tr><td>Reclamação trabalhista (fase de conhecimento)</td><td>20% a 30% sobre o proveito econômico, mínimo R$3.500</td></tr>
<tr><td>Defesa do empregador</td><td>A partir de R$4.000</td></tr>
<tr><td>Recurso ordinário</td><td>A partir de R$3.000</td></tr>
<tr><td>Acompanhamento de audiência avulsa</td><td>A partir de R$1.500</td></tr>
</tbody>
</table>

<h2>É possível ter advogado trabalhista gratuito?</h2>

<p>Sim. Existem três caminhos:</p>

<ul>
<li><strong>Justiça gratuita:</strong> se sua renda não ultrapassar 40% do teto do INSS (cerca de R$3.200 em 2026), você pode pedir gratuidade judiciária. Isso isenta custas processuais, mas não os honorários do advogado</li>
<li><strong>Sindicato:</strong> muitos sindicatos oferecem assessoria jurídica gratuita aos filiados</li>
<li><strong>Defensoria Pública:</strong> atende quem comprova hipossuficiência econômica</li>
<li><strong>Escritórios com atendimento pro bono:</strong> alguns escritórios realizam atendimentos gratuitos em casos específicos</li>
</ul>

<h2>Honorários de sucumbência: quem paga o advogado da outra parte?</h2>

<p>Desde a reforma trabalhista de 2017, a parte que perde a ação pode ser condenada a pagar <strong>honorários de sucumbência</strong> de 5% a 15% sobre o valor da causa ao advogado da parte vencedora. Isso vale inclusive para beneficiários da justiça gratuita, embora haja discussões sobre a constitucionalidade dessa cobrança.</p>

<h2>Como escolher um bom advogado trabalhista</h2>

<p>O preço não deve ser o único critério. Avalie também:</p>

<ul>
<li><strong>Especialização:</strong> prefira advogados com atuação focada em direito do trabalho</li>
<li><strong>Transparência:</strong> desconfie de quem não explica claramente como cobra</li>
<li><strong>Contrato de honorários:</strong> exija sempre um contrato por escrito detalhando valores, percentuais e condições</li>
<li><strong>Experiência com casos similares:</strong> pergunte sobre casos parecidos com o seu</li>
<li><strong>Comunicação:</strong> o advogado deve ser acessível e manter você informado sobre o andamento</li>
</ul>

<h2>O que fazer agora</h2>

<p>Não deixe de buscar seus direitos por medo do custo. Muitos advogados trabalhistas trabalham com honorários sobre o êxito, o que significa que <strong>você só paga se ganhar</strong>. O primeiro passo é fazer uma consulta para entender suas chances.</p>

<p><strong>Quer saber quanto custaria resolver seu caso?</strong> <a href="/contato">Fale com a nossa equipe</a>. Oferecemos uma avaliação inicial e explicamos todas as opções de honorários de forma transparente.</p>
`,
  },

  // ── 4. Auxílio-Doença Meu INSS ──────────────────────────────────────
  {
    slug: "como-dar-entrada-auxilio-doenca-meu-inss-passo-a-passo",
    title: "Como Dar Entrada no Auxílio-Doença Pelo Meu INSS: Passo a Passo",
    metaTitle: "Auxílio-Doença: Como Pedir Pelo Meu INSS em 2026",
    metaDescription:
      "Passo a passo completo para dar entrada no auxílio-doença pelo Meu INSS em 2026. Documentos, agendamento de perícia e prazos. Guia prático.",
    excerpt:
      "Está incapacitado para trabalhar e não sabe como pedir o auxílio-doença? Veja o passo a passo completo para dar entrada pelo app Meu INSS.",
    category: "Previdenciário",
    date: "2026-01-15",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1514369118554-e20d93546b30?w=800&q=80",
    content: `
<p>O <strong>auxílio por incapacidade temporária</strong> (antigo auxílio-doença) é o benefício do INSS para quem está temporariamente incapacitado para o trabalho por doença ou acidente. Em 2026, todo o processo pode ser feito pelo aplicativo <strong>Meu INSS</strong>. Veja o passo a passo completo.</p>

<h2>Quem tem direito ao auxílio-doença?</h2>

<p>Para ter direito, você precisa cumprir três requisitos:</p>

<ol>
<li><strong>Qualidade de segurado:</strong> estar contribuindo para o INSS ou dentro do período de graça (até 12 meses após a última contribuição, podendo chegar a 24 meses em alguns casos)</li>
<li><strong>Carência de 12 contribuições:</strong> ter pelo menos 12 meses de contribuição. Exceção: acidentes de trabalho e doenças graves listadas na Portaria Interministerial não exigem carência</li>
<li><strong>Incapacidade comprovada:</strong> laudo médico atestando que você está incapacitado para exercer suas atividades habituais</li>
</ol>

<h2>Documentos necessários</h2>

<p>Antes de iniciar o pedido, reúna:</p>

<ul>
<li><strong>Atestado médico:</strong> com data de início da incapacidade, CID (código da doença), tempo estimado de afastamento e assinatura/CRM do médico</li>
<li><strong>Exames e laudos complementares:</strong> tudo que comprove a doença (raio-x, ressonância, exames de sangue etc.)</li>
<li><strong>Documento de identidade e CPF</strong></li>
<li><strong>Carteira de trabalho ou carnês de contribuição</strong></li>
<li><strong>Comunicação de acidente (CAT):</strong> se for acidente de trabalho</li>
</ul>

<h2>Passo a passo pelo Meu INSS</h2>

<ol>
<li><strong>Baixe o app Meu INSS</strong> (Android ou iOS) ou acesse meu.inss.gov.br</li>
<li>Faça login com sua <strong>conta Gov.br</strong> (nível prata ou ouro)</li>
<li>Na tela inicial, clique em <strong>"Novo Pedido"</strong></li>
<li>Digite "auxílio por incapacidade temporária" na busca e selecione</li>
<li>Leia as instruções e clique em <strong>"Avançar"</strong></li>
<li>Preencha seus dados pessoais e informações sobre o afastamento</li>
<li>Informe a <strong>data de início da incapacidade</strong> (DII) — geralmente a data do atestado</li>
<li>Anexe todos os documentos médicos em formato PDF ou imagem</li>
<li>Escolha a forma de perícia: <strong>análise documental</strong> (Atestmed) ou <strong>perícia presencial</strong></li>
<li>Confirme os dados e protocole o pedido</li>
</ol>

<h2>Atestmed: perícia sem sair de casa</h2>

<p>Desde 2022, o INSS permite a <strong>análise documental (Atestmed)</strong> para muitos casos. Funciona assim: você envia seu atestado médico pelo app e o INSS analisa sem necessidade de perícia presencial. Para isso, o atestado precisa conter:</p>

<ul>
<li>Data de emissão</li>
<li>Data de início do repouso</li>
<li>Tempo estimado de afastamento</li>
<li>CID ou diagnóstico por extenso</li>
<li>Assinatura e CRM do médico</li>
</ul>

<p>Se o atestado estiver completo e o pedido for de até 180 dias, há grande chance de ser analisado por Atestmed, sem perícia presencial.</p>

<h2>Quanto vou receber?</h2>

<p>O valor do auxílio-doença corresponde a <strong>91% do salário de benefício</strong>. O salário de benefício é calculado pela média de todos os seus salários de contribuição desde julho de 1994 (ou desde o início das contribuições, se posterior).</p>

<p>O benefício não pode ser inferior ao salário mínimo (R$1.518 em 2026) nem superior ao teto do INSS.</p>

<h2>Quanto tempo demora?</h2>

<p>O prazo médio de análise pelo INSS é de <strong>30 a 45 dias</strong>. Se for por Atestmed, pode ser mais rápido (15 a 30 dias). Se houver necessidade de perícia presencial, o agendamento pode levar de 30 a 90 dias dependendo da região.</p>

<h2>E se o pedido for negado?</h2>

<p>Você tem três opções:</p>

<ul>
<li><strong>Recurso administrativo:</strong> prazo de 30 dias após a notificação. É gratuito e julgado pela Junta de Recursos do INSS</li>
<li><strong>Novo pedido:</strong> se houver novos documentos ou piora do quadro clínico</li>
<li><strong>Ação judicial:</strong> a Justiça Federal pode reverter a decisão do INSS, geralmente com uma nova perícia médica judicial</li>
</ul>

<h2>O que fazer agora</h2>

<p>Se você está incapacitado para o trabalho, não espere o quadro piorar. Reúna seus documentos médicos, acesse o Meu INSS e dê entrada no pedido. Quanto antes protocolar, antes começa a contar o benefício.</p>

<p><strong>Teve o pedido negado ou não sabe como dar entrada?</strong> <a href="/contato">Fale com a nossa equipe</a>. Orientamos todo o processo e, se necessário, ingressamos com ação judicial.</p>
`,
  },

  // ── 5. Tabela de Prazos Trabalhistas ─────────────────────────────────
  {
    slug: "tabela-prazos-trabalhistas-rescisao-acao-prescricao",
    title: "Tabela de Prazos Trabalhistas: Rescisão, Ação e Prescrição",
    metaTitle: "Prazos Trabalhistas 2026: Tabela Completa de Prescrição",
    metaDescription:
      "Tabela completa de prazos trabalhistas em 2026: rescisão, prescrição, ação judicial, FGTS, seguro-desemprego e mais. Não perca seus direitos.",
    excerpt:
      "Perder um prazo trabalhista pode significar perder seus direitos para sempre. Confira a tabela completa com todos os prazos que você precisa conhecer.",
    category: "Trabalhista",
    date: "2026-01-19",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80",
    content: `
<p>Na área trabalhista, <strong>perder um prazo pode significar perder o direito</strong>. São dezenas de prazos diferentes — para pagamento de rescisão, para entrar com ação, para sacar FGTS, para pedir seguro-desemprego. Neste guia, reunimos todos os prazos mais importantes em uma tabela prática e atualizada para 2026.</p>

<h2>Prescrição trabalhista: o prazo mais importante</h2>

<p>A prescrição é o prazo máximo para você entrar com uma ação na Justiça do Trabalho. Funciona assim:</p>

<ul>
<li><strong>Prazo para entrar com a ação:</strong> até <strong>2 anos</strong> após o fim do contrato de trabalho</li>
<li><strong>Alcance retroativo da ação:</strong> os <strong>últimos 5 anos</strong> antes do ajuizamento</li>
</ul>

<p>Exemplo prático: se você foi demitido em janeiro de 2026, tem até janeiro de 2028 para entrar com a ação. Nessa ação, pode cobrar direitos relativos aos últimos 5 anos (desde janeiro de 2023).</p>

<h2>Tabela geral de prazos trabalhistas</h2>

<table>
<thead>
<tr><th>Situação</th><th>Prazo</th><th>Base legal</th></tr>
</thead>
<tbody>
<tr><td>Pagamento da rescisão</td><td>10 dias corridos após o término do contrato</td><td>Art. 477, §6º, CLT</td></tr>
<tr><td>Prescrição para ação trabalhista</td><td>2 anos após o fim do contrato</td><td>Art. 7º, XXIX, CF</td></tr>
<tr><td>Alcance retroativo da ação</td><td>5 anos anteriores ao ajuizamento</td><td>Art. 7º, XXIX, CF</td></tr>
<tr><td>Homologação da rescisão</td><td>10 dias (mesmo prazo do pagamento)</td><td>Art. 477, CLT</td></tr>
<tr><td>Entrega das guias (seguro-desemprego e FGTS)</td><td>10 dias junto com a rescisão</td><td>Art. 477, §6º, CLT</td></tr>
<tr><td>Pedido de seguro-desemprego</td><td>7 a 120 dias após a demissão</td><td>Lei 7.998/90</td></tr>
<tr><td>Saque do FGTS (demissão sem justa causa)</td><td>Até 5 anos (prazo prescricional)</td><td>Lei 8.036/90</td></tr>
<tr><td>Aviso prévio (comunicação)</td><td>30 dias de antecedência (mínimo)</td><td>Art. 487, CLT</td></tr>
<tr><td>Estabilidade gestante</td><td>Da confirmação da gravidez até 5 meses após o parto</td><td>Art. 10, II, b, ADCT</td></tr>
<tr><td>Estabilidade acidentária</td><td>12 meses após a alta do INSS</td><td>Art. 118, Lei 8.213/91</td></tr>
<tr><td>Estabilidade pré-aposentadoria</td><td>12 a 24 meses (depende da convenção coletiva)</td><td>Norma coletiva</td></tr>
<tr><td>Prescrição do FGTS</td><td>5 anos para cobrar depósitos não realizados</td><td>STF, ARE 709.212</td></tr>
</tbody>
</table>

<h2>Prazos processuais importantes</h2>

<p>Se você já está com processo na Justiça do Trabalho, atenção aos prazos processuais:</p>

<ul>
<li><strong>Contestação:</strong> apresentada em audiência (rito ordinário) ou em 15 dias (rito sumaríssimo)</li>
<li><strong>Recurso ordinário:</strong> 8 dias úteis após a publicação da sentença</li>
<li><strong>Recurso de revista:</strong> 8 dias úteis após o acórdão do TRT</li>
<li><strong>Embargos de declaração:</strong> 5 dias úteis</li>
<li><strong>Execução:</strong> o devedor tem 48 horas para pagar após a citação (art. 880, CLT)</li>
</ul>

<h2>Prazos que as pessoas mais perdem</h2>

<p>Na nossa experiência, os prazos que mais causam prejuízo aos trabalhadores são:</p>

<ol>
<li><strong>Prescrição bienal:</strong> o trabalhador demora para procurar um advogado e perde o prazo de 2 anos</li>
<li><strong>Seguro-desemprego:</strong> o prazo de 120 dias passa rápido, especialmente se a empresa atrasa as guias</li>
<li><strong>Multa da rescisão:</strong> muitos não sabem que podem cobrar multa se a empresa pagar após 10 dias</li>
</ol>

<h2>Dica prática: como não perder prazos</h2>

<p>Anote a data da sua demissão e calcule imediatamente:</p>

<ul>
<li>A data limite para receber a rescisão (10 dias)</li>
<li>A data limite para pedir seguro-desemprego (120 dias)</li>
<li>A data limite para entrar com ação trabalhista (2 anos)</li>
</ul>

<p>Guarde essa informação em local seguro. Se qualquer um desses prazos estiver próximo de vencer, procure orientação jurídica imediatamente.</p>

<h2>O que fazer agora</h2>

<p>Se você tem dúvidas sobre um prazo específico ou acha que pode estar perto de perder um direito, <strong>não espere</strong>. A prescrição não perdoa — depois que o prazo passa, não há como recuperar.</p>

<p><strong>Está preocupado com algum prazo?</strong> <a href="/contato">Fale com a nossa equipe</a>. Verificamos sua situação e orientamos sobre os próximos passos antes que seja tarde.</p>
`,
  },

  // ── 6. Consultar FGTS ───────────────────────────────────────────────
  {
    slug: "como-consultar-fgts-saldo-extrato-saque-2026",
    title: "Como Consultar Seu FGTS: Saldo, Extrato e Saque em 2026",
    metaTitle: "Como Consultar FGTS 2026: Saldo, Extrato e Saque",
    metaDescription:
      "Aprenda a consultar saldo e extrato do FGTS pelo app, site e SMS em 2026. Veja também como sacar e quando você tem direito. Guia completo.",
    excerpt:
      "Não sabe quanto tem de FGTS? Veja como consultar seu saldo e extrato de forma rápida pelo app, site ou SMS. E descubra quando pode sacar.",
    category: "Trabalhista",
    date: "2026-01-22",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    content: `
<p>O <strong>FGTS (Fundo de Garantia do Tempo de Serviço)</strong> é um direito de todo trabalhador com carteira assinada. A empresa deposita mensalmente <strong>8% do seu salário bruto</strong> em uma conta vinculada na Caixa Econômica Federal. Mas muitos trabalhadores nunca consultaram seu saldo. Veja como fazer em 2026.</p>

<h2>3 formas de consultar o FGTS</h2>

<h3>1. App FGTS (forma mais prática)</h3>

<ol>
<li>Baixe o app <strong>FGTS</strong> (disponível para Android e iOS)</li>
<li>Faça o cadastro com seu CPF e crie uma senha</li>
<li>Na tela inicial, você verá o <strong>saldo total</strong> de todas as suas contas FGTS</li>
<li>Clique em cada conta para ver o <strong>extrato detalhado</strong> com todos os depósitos</li>
</ol>

<h3>2. Site da Caixa</h3>

<ol>
<li>Acesse <strong>fgts.caixa.gov.br</strong></li>
<li>Informe seu CPF e senha cadastrada</li>
<li>Visualize saldo e extrato de todas as contas</li>
</ol>

<h3>3. SMS (consulta rápida)</h3>

<p>Você pode receber notificações do FGTS por SMS. Para ativar, acesse o app FGTS, vá em "Mais" > "Definir forma de contato" e habilite o recebimento por SMS com seu número de celular.</p>

<h2>O que verificar no extrato</h2>

<p>Ao consultar seu extrato, preste atenção em:</p>

<ul>
<li><strong>Depósitos mensais:</strong> a empresa deve depositar 8% do seu salário bruto todo mês. Confira se os valores estão corretos</li>
<li><strong>Depósito sobre 13º:</strong> a empresa também deposita FGTS sobre o 13º salário</li>
<li><strong>Meses sem depósito:</strong> se houver meses em branco, a empresa pode estar em débito</li>
<li><strong>JAM (Juros e Atualização Monetária):</strong> rendimento aplicado pela Caixa (TR + 3% ao ano)</li>
<li><strong>Distribuição de resultados:</strong> valor extra creditado anualmente com base nos lucros do FGTS</li>
</ul>

<h2>Quando posso sacar o FGTS?</h2>

<p>O FGTS só pode ser sacado em situações específicas previstas em lei:</p>

<table>
<thead>
<tr><th>Situação</th><th>O que pode sacar</th></tr>
</thead>
<tbody>
<tr><td>Demissão sem justa causa</td><td>Saldo total da conta + multa de 40%</td></tr>
<tr><td>Rescisão por acordo (art. 484-A CLT)</td><td>80% do saldo + multa de 20%</td></tr>
<tr><td>Aposentadoria</td><td>Saldo total de todas as contas</td></tr>
<tr><td>Compra de imóvel</td><td>Saldo total (com regras específicas)</td></tr>
<tr><td>Doença grave (HIV, câncer etc.)</td><td>Saldo total</td></tr>
<tr><td>Idade igual ou superior a 70 anos</td><td>Saldo total</td></tr>
<tr><td>Conta sem movimentação por 3 anos (empresa extinta)</td><td>Saldo total</td></tr>
<tr><td>Saque-aniversário</td><td>Parcela anual no mês de aniversário</td></tr>
<tr><td>Falecimento do titular</td><td>Saldo para dependentes habilitados</td></tr>
</tbody>
</table>

<h2>Saque-aniversário: vale a pena?</h2>

<p>O saque-aniversário permite retirar uma parcela do FGTS todo ano no mês do seu aniversário. Os percentuais variam de <strong>5% a 50%</strong> do saldo, dependendo do valor. Porém, atenção: ao optar pelo saque-aniversário, <strong>você perde o direito de sacar o saldo total em caso de demissão sem justa causa</strong>. Você ainda recebe a multa de 40%, mas não pode sacar o saldo da conta.</p>

<p>Antes de optar, avalie se compensa no seu caso. A maioria dos advogados trabalhistas recomenda cautela com essa modalidade.</p>

<h2>A empresa não está depositando: o que fazer?</h2>

<p>Se ao conferir o extrato você perceber que a empresa não está fazendo os depósitos, você tem algumas opções:</p>

<ol>
<li><strong>Conversar com o RH:</strong> pode ser um erro administrativo</li>
<li><strong>Denunciar ao Ministério do Trabalho:</strong> a denúncia pode ser feita pelo site gov.br ou presencialmente</li>
<li><strong>Ação trabalhista:</strong> você pode cobrar judicialmente os depósitos não realizados dos últimos 5 anos</li>
</ol>

<h2>O que fazer agora</h2>

<p>Baixe o app FGTS agora mesmo e confira se seus depósitos estão em dia. Se encontrar qualquer irregularidade — meses sem depósito, valores abaixo de 8% do salário ou contas inativas — procure orientação.</p>

<p><strong>Descobriu que a empresa não está depositando seu FGTS?</strong> <a href="/contato">Fale com a nossa equipe</a>. Analisamos seu extrato e orientamos sobre como recuperar os valores devidos.</p>
`,
  },

  // ── 7. Simulador de Aposentadoria ────────────────────────────────────
  {
    slug: "simulador-aposentadoria-como-calcular-meu-inss",
    title: "Simulador de Aposentadoria: Como Calcular Pelo Meu INSS",
    metaTitle: "Simulador de Aposentadoria 2026: Calcule Pelo Meu INSS",
    metaDescription:
      "Use o simulador do Meu INSS para calcular sua aposentadoria em 2026. Passo a passo, regras de transição e como aumentar o valor do benefício.",
    excerpt:
      "Quer saber quando pode se aposentar e quanto vai receber? O Meu INSS tem um simulador gratuito. Veja como usar e interpretar os resultados.",
    category: "Previdenciário",
    date: "2026-01-26",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    content: `
<p>Uma das maiores dúvidas dos trabalhadores brasileiros é: <strong>"Quando vou poder me aposentar e quanto vou receber?"</strong>. A boa notícia é que o próprio INSS disponibiliza um <strong>simulador gratuito</strong> pelo app Meu INSS. A má notícia é que ele tem limitações que podem induzir ao erro. Neste guia, ensinamos a usar o simulador e a interpretar os resultados com cuidado.</p>

<h2>Como acessar o simulador</h2>

<ol>
<li>Acesse o app <strong>Meu INSS</strong> ou o site meu.inss.gov.br</li>
<li>Faça login com sua conta Gov.br</li>
<li>Na tela inicial, busque por <strong>"Simular Aposentadoria"</strong></li>
<li>O sistema vai carregar automaticamente seus dados do CNIS</li>
<li>Verifique se todos os vínculos estão corretos</li>
<li>Clique em <strong>"Simular"</strong></li>
</ol>

<h2>O que o simulador mostra</h2>

<p>O simulador apresenta:</p>

<ul>
<li><strong>Regras de transição disponíveis:</strong> quais você já cumpriu e quais faltam</li>
<li><strong>Data prevista para cada regra:</strong> quando você atingirá os requisitos</li>
<li><strong>Valor estimado do benefício:</strong> quanto você receberia em cada cenário</li>
<li><strong>Tempo de contribuição reconhecido:</strong> total de anos, meses e dias</li>
</ul>

<h2>As 4 regras de transição em 2026</h2>

<p>Após a reforma da previdência de 2019, quem já contribuía tem direito a regras de transição:</p>

<table>
<thead>
<tr><th>Regra</th><th>Requisitos em 2026</th></tr>
</thead>
<tbody>
<tr><td><strong>Idade mínima progressiva</strong></td><td>Mulher: 59 anos + 30 anos de contribuição; Homem: 64 anos + 35 anos de contribuição</td></tr>
<tr><td><strong>Pontos</strong></td><td>Mulher: 92 pontos (idade + tempo); Homem: 102 pontos</td></tr>
<tr><td><strong>Idade mínima (geral)</strong></td><td>Mulher: 62 anos + 15 anos de contribuição; Homem: 65 anos + 20 anos</td></tr>
<tr><td><strong>Pedágio 100%</strong></td><td>Idade mínima (57M/60H) + tempo faltante em 2019 × 2</td></tr>
</tbody>
</table>

<h2>Cuidados ao usar o simulador</h2>

<p>O simulador do INSS é uma boa ferramenta inicial, mas tem <strong>limitações importantes</strong>:</p>

<ul>
<li><strong>Dados do CNIS podem estar incompletos:</strong> vínculos antigos, trabalho rural, tempo militar e contribuições como autônomo podem não aparecer</li>
<li><strong>Não considera atividade especial:</strong> se você trabalhou com insalubridade, o tempo convertido (fator 1,4 para homens e 1,2 para mulheres) não é calculado automaticamente</li>
<li><strong>Valores podem estar defasados:</strong> salários de contribuição antigos podem estar com valores incorretos no CNIS</li>
<li><strong>Não analisa a melhor regra para você:</strong> o simulador mostra todas as opções, mas não indica qual é mais vantajosa no seu caso</li>
</ul>

<h2>Como aumentar o valor da aposentadoria</h2>

<p>Existem estratégias legítimas para melhorar o valor do benefício:</p>

<ol>
<li><strong>Corrigir dados do CNIS:</strong> incluir vínculos e salários faltantes pode elevar a média</li>
<li><strong>Descartar contribuições baixas:</strong> a reforma permite excluir contribuições que reduzem a média (art. 26, §6º da EC 103/2019)</li>
<li><strong>Converter tempo especial:</strong> atividade insalubre aumenta o tempo de contribuição</li>
<li><strong>Complementar contribuições:</strong> se há meses com contribuição abaixo do mínimo, é possível complementar</li>
<li><strong>Escolher a regra certa:</strong> cada regra de transição pode gerar valores diferentes. A análise comparativa é fundamental</li>
</ol>

<h2>Exemplo prático</h2>

<p>Maria, 58 anos, 32 anos de contribuição, média salarial de R$4.000:</p>

<ul>
<li><strong>Pela regra de pontos:</strong> 58 + 32 = 90 pontos. Em 2026 precisa de 92. Faltam 2 pontos (1 ano)</li>
<li><strong>Pela idade mínima progressiva:</strong> precisa de 59 anos. Falta 1 ano</li>
<li><strong>Valor estimado:</strong> 60% + 2% por ano acima de 15 anos = 60% + (17 × 2%) = 94% de R$4.000 = R$3.760</li>
</ul>

<p>Se Maria conseguir comprovar 2 anos de atividade especial, o tempo convertido sobe para 34,4 anos, atingindo os 92 pontos imediatamente.</p>

<h2>O que fazer agora</h2>

<p>Use o simulador do Meu INSS como ponto de partida, mas <strong>não tome decisões baseadas apenas nele</strong>. Um planejamento previdenciário completo pode revelar períodos não reconhecidos e estratégias que aumentam significativamente seu benefício.</p>

<p><strong>Quer saber qual a melhor regra para o seu caso?</strong> <a href="/contato">Fale com a nossa equipe</a>. Fazemos um planejamento previdenciário completo com análise de todas as regras.</p>
`,
  },

  // ── 8. Direitos na Demissão Sem Justa Causa ──────────────────────────
  {
    slug: "direitos-demissao-sem-justa-causa-guia-completo-2026",
    title: "Direitos na Demissão Sem Justa Causa: Guia Completo 2026",
    metaTitle: "Demissão Sem Justa Causa 2026: Todos os Seus Direitos",
    metaDescription:
      "Foi demitido sem justa causa? Conheça todos os seus direitos em 2026: rescisão, FGTS, multa 40%, seguro-desemprego, aviso prévio e mais.",
    excerpt:
      "A demissão sem justa causa garante os maiores direitos ao trabalhador. Saiba tudo que você tem direito a receber e os prazos para cada verba.",
    category: "Trabalhista",
    date: "2026-01-30",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    content: `
<p>A <strong>demissão sem justa causa</strong> é quando a empresa decide encerrar o contrato de trabalho sem que o empregado tenha cometido falta grave. Nessa modalidade, o trabalhador tem direito ao maior pacote de verbas rescisórias previsto na CLT. Veja exatamente o que você deve receber.</p>

<h2>Lista completa de direitos</h2>

<p>Na demissão sem justa causa, você tem direito a:</p>

<ol>
<li><strong>Saldo de salário</strong> — dias trabalhados no mês da demissão</li>
<li><strong>Aviso prévio</strong> — trabalhado ou indenizado (30 a 90 dias)</li>
<li><strong>Férias vencidas + 1/3</strong> — se houver período aquisitivo completo sem gozo</li>
<li><strong>Férias proporcionais + 1/3</strong> — proporcional ao período em andamento</li>
<li><strong>13º salário proporcional</strong> — proporcional aos meses trabalhados no ano</li>
<li><strong>Multa de 40% do FGTS</strong> — sobre o saldo total da conta</li>
<li><strong>Saque do FGTS</strong> — saldo integral da conta vinculada</li>
<li><strong>Guias para seguro-desemprego</strong> — se cumprir os requisitos de tempo</li>
</ol>

<h2>Aviso prévio: como funciona</h2>

<p>O aviso prévio pode ser <strong>trabalhado</strong> (o empregado continua trabalhando por 30 dias) ou <strong>indenizado</strong> (a empresa paga o valor correspondente sem exigir trabalho). Se trabalhado, o empregado pode optar por redução de 2 horas diárias ou 7 dias corridos de folga no final.</p>

<p>O aviso prévio proporcional acrescenta <strong>3 dias por ano de serviço</strong>, até o máximo de 90 dias. Essa proporcionalidade se aplica apenas ao aviso indenizado pago pela empresa — quando o trabalhador pede demissão, o aviso é sempre de 30 dias.</p>

<h2>Multa de 40% do FGTS</h2>

<p>A multa incide sobre o <strong>saldo total</strong> da conta do FGTS, incluindo todos os depósitos feitos durante o contrato, juros e correção monetária. É importante conferir o saldo real no extrato do FGTS antes de aceitar o valor proposto pela empresa.</p>

<h2>Seguro-desemprego: quem tem direito</h2>

<p>O seguro-desemprego é pago em 3 a 5 parcelas, conforme o tempo de trabalho:</p>

<table>
<thead>
<tr><th>Situação</th><th>Tempo mínimo de trabalho</th><th>Parcelas</th></tr>
</thead>
<tbody>
<tr><td>1ª solicitação</td><td>12 meses nos últimos 18</td><td>4 parcelas</td></tr>
<tr><td>2ª solicitação</td><td>9 meses nos últimos 12</td><td>3 a 5 parcelas</td></tr>
<tr><td>3ª solicitação em diante</td><td>6 meses imediatamente anteriores</td><td>3 a 5 parcelas</td></tr>
</tbody>
</table>

<p>O valor varia conforme a média salarial dos últimos 3 meses, com teto de aproximadamente <strong>R$2.313</strong> em 2026.</p>

<h2>Prazo para pagamento</h2>

<p>A empresa tem <strong>10 dias corridos</strong> após o término do contrato para pagar todas as verbas rescisórias. Se atrasar, deve pagar uma <strong>multa equivalente a um salário</strong> do empregado (art. 477, §8º da CLT).</p>

<h2>O que conferir no Termo de Rescisão</h2>

<p>Antes de assinar o TRCT (Termo de Rescisão do Contrato de Trabalho), verifique:</p>

<ul>
<li>Se a data de admissão e demissão estão corretas</li>
<li>Se o salário base utilizado no cálculo está certo</li>
<li>Se o aviso prévio proporcional foi calculado corretamente</li>
<li>Se as férias (vencidas e proporcionais) incluem o 1/3 constitucional</li>
<li>Se a multa de 40% corresponde ao saldo real do FGTS</li>
<li>Se foram entregues as guias do seguro-desemprego e chave de conectividade social</li>
</ul>

<h2>Situações que impedem a demissão</h2>

<p>Em alguns casos, a empresa <strong>não pode demitir</strong> o empregado sem justa causa:</p>

<ul>
<li><strong>Gestante:</strong> da confirmação da gravidez até 5 meses após o parto</li>
<li><strong>Acidente de trabalho:</strong> 12 meses após a alta do INSS</li>
<li><strong>Membro da CIPA:</strong> durante o mandato e 1 ano após</li>
<li><strong>Dirigente sindical:</strong> durante o mandato e 1 ano após</li>
<li><strong>Pré-aposentadoria:</strong> conforme convenção coletiva da categoria</li>
</ul>

<h2>O que fazer agora</h2>

<p>Se você foi demitido sem justa causa, confira todos os valores antes de assinar a rescisão. Compare com os cálculos deste guia. Se os números não baterem, <strong>não assine sem orientação</strong>.</p>

<p><strong>Acha que seus valores estão errados?</strong> <a href="/contato">Fale com a nossa equipe</a>. Revisamos sua rescisão gratuitamente e orientamos sobre os próximos passos.</p>
`,
  },

  // ── 9. Abrir Processo Trabalhista ────────────────────────────────────
  {
    slug: "como-abrir-processo-trabalhista-passo-a-passo",
    title: "Como Abrir um Processo Trabalhista: Passo a Passo Completo",
    metaTitle: "Processo Trabalhista 2026: Como Abrir Passo a Passo",
    metaDescription:
      "Guia completo de como abrir um processo trabalhista em 2026. Documentos, custos, prazos, audiências e o que esperar em cada etapa.",
    excerpt:
      "Quer entrar com um processo trabalhista mas não sabe por onde começar? Este guia cobre todas as etapas, desde a consulta inicial até a execução da sentença.",
    category: "Trabalhista",
    date: "2026-02-03",
    readTime: "11 min",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
    content: `
<p>Entrar com um processo trabalhista pode parecer intimidador, mas é um <strong>direito de todo trabalhador</strong> que teve seus direitos violados. Neste guia, explicamos cada etapa do processo — da decisão de processar até o recebimento dos valores — para que você saiba exatamente o que esperar.</p>

<h2>Quando vale a pena entrar com uma ação trabalhista?</h2>

<p>A ação trabalhista é indicada quando a empresa descumpriu obrigações legais e não há solução amigável. Exemplos comuns:</p>

<ul>
<li>Não pagamento de verbas rescisórias</li>
<li>Horas extras não pagas</li>
<li>Registro incorreto em carteira</li>
<li>Assédio moral ou sexual</li>
<li>Acidente de trabalho sem CAT ou suporte</li>
<li>Desvio ou acúmulo de função sem compensação</li>
<li>Demissão durante estabilidade</li>
</ul>

<h2>Passo 1: Consulta com advogado</h2>

<p>O primeiro passo é procurar um <strong>advogado trabalhista</strong> para avaliar seu caso. Na consulta, leve todos os documentos que tiver: carteira de trabalho, contracheques, e-mails, conversas de WhatsApp, fotos, testemunhas. O advogado vai analisar se há fundamento jurídico e estimar o valor da causa.</p>

<h2>Passo 2: Reunir provas e documentos</h2>

<p>As principais provas em um processo trabalhista são:</p>

<ul>
<li><strong>Documentais:</strong> CTPS, contracheques, TRCT, extrato FGTS, e-mails, mensagens</li>
<li><strong>Testemunhais:</strong> colegas de trabalho que possam confirmar os fatos</li>
<li><strong>Periciais:</strong> laudo médico em caso de doença ocupacional ou acidente</li>
</ul>

<p>Importante: <strong>prints de WhatsApp são aceitos</strong> como prova na Justiça do Trabalho, desde que seja possível identificar os interlocutores e as datas.</p>

<h2>Passo 3: Petição inicial</h2>

<p>O advogado elabora a <strong>petição inicial</strong>, documento que descreve os fatos, os direitos violados e os valores pedidos. A petição é protocolada eletronicamente no sistema PJe (Processo Judicial Eletrônico) da Justiça do Trabalho.</p>

<h2>Passo 4: Audiência de conciliação</h2>

<p>Após o protocolo, o juiz agenda uma <strong>audiência de conciliação</strong>. Nela, as partes tentam chegar a um acordo. Estatísticas mostram que cerca de <strong>40% dos processos trabalhistas são resolvidos em acordo</strong>. Se houver acordo, o processo termina ali. Se não houver, segue para a fase de instrução.</p>

<h2>Passo 5: Audiência de instrução</h2>

<p>Na audiência de instrução, são ouvidas as <strong>testemunhas</strong> de ambas as partes. O juiz faz perguntas, os advogados também. É o momento mais importante do processo, pois a prova testemunhal tem grande peso na decisão.</p>

<h2>Passo 6: Sentença</h2>

<p>Após as audiências, o juiz profere a <strong>sentença</strong>. O prazo médio entre o início do processo e a sentença é de <strong>6 a 12 meses</strong>, dependendo da vara e da complexidade do caso. A sentença pode ser favorável total, parcial ou improcedente.</p>

<h2>Passo 7: Recursos</h2>

<p>Ambas as partes podem recorrer da sentença. O recurso ordinário é julgado pelo TRT (Tribunal Regional do Trabalho). Depois, ainda há possibilidade de recurso ao TST (Tribunal Superior do Trabalho). Os recursos podem estender o processo por mais 1 a 3 anos.</p>

<h2>Passo 8: Execução</h2>

<p>Quando a decisão se torna definitiva (transitada em julgado), inicia-se a <strong>fase de execução</strong>. Se a empresa não pagar voluntariamente, o juiz pode determinar penhora de bens, bloqueio de contas bancárias e outras medidas para garantir o pagamento.</p>

<h2>Custos do processo</h2>

<p>Para o trabalhador, os custos diretos são baixos:</p>

<ul>
<li><strong>Custas processuais:</strong> 2% sobre o valor da causa (isento com justiça gratuita)</li>
<li><strong>Honorários do advogado:</strong> geralmente sobre o êxito (20% a 30%)</li>
<li><strong>Risco de sucumbência:</strong> se perder, pode ser condenado a pagar 5% a 15% ao advogado da empresa</li>
</ul>

<h2>Quanto tempo demora no total?</h2>

<p>Em média, um processo trabalhista leva de <strong>1 a 3 anos</strong> do início ao recebimento. Se houver acordo na primeira audiência, pode ser resolvido em 2 a 4 meses. Se houver recursos até o TST, pode chegar a 5 anos.</p>

<h2>O que fazer agora</h2>

<p>Se você acredita que teve seus direitos trabalhistas violados, não espere o prazo de prescrição (2 anos) passar. Reúna seus documentos, organize suas provas e procure orientação jurídica.</p>

<p><strong>Quer saber se vale a pena entrar com uma ação?</strong> <a href="/contato">Fale com a nossa equipe</a>. Avaliamos seu caso e explicamos suas chances de forma transparente.</p>
`,
  },

  // ── 10. Tabela Contribuição INSS 2026 ────────────────────────────────
  {
    slug: "tabela-contribuicao-inss-2026-aliquotas-como-pagar",
    title: "Tabela de Contribuição INSS 2026: Alíquotas e Como Pagar",
    metaTitle: "Tabela INSS 2026: Alíquotas Atualizadas e Como Contribuir",
    metaDescription:
      "Tabela atualizada de contribuição do INSS 2026 com alíquotas para CLT, autônomo, MEI e facultativo. Veja como pagar e garantir sua aposentadoria.",
    excerpt:
      "Confira as alíquotas de contribuição do INSS em 2026 para cada categoria: CLT, autônomo, MEI e facultativo. Saiba quanto pagar e como emitir a guia.",
    category: "Previdenciário",
    date: "2026-02-06",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=800&q=80",
    content: `
<p>Contribuir para o INSS é a garantia de acesso a benefícios como aposentadoria, auxílio-doença, salário-maternidade e pensão por morte. Mas as alíquotas e formas de pagamento variam conforme a categoria do contribuinte. Veja a <strong>tabela atualizada para 2026</strong> e como pagar corretamente.</p>

<h2>Tabela para empregados CLT</h2>

<p>Os empregados com carteira assinada têm o desconto do INSS feito diretamente na folha de pagamento. As alíquotas são <strong>progressivas</strong> (cada faixa é calculada separadamente, como o Imposto de Renda):</p>

<table>
<thead>
<tr><th>Faixa salarial</th><th>Alíquota</th></tr>
</thead>
<tbody>
<tr><td>Até R$1.518,00</td><td>7,5%</td></tr>
<tr><td>De R$1.518,01 até R$2.793,88</td><td>9%</td></tr>
<tr><td>De R$2.793,89 até R$4.190,83</td><td>12%</td></tr>
<tr><td>De R$4.190,84 até R$8.157,41</td><td>14%</td></tr>
</tbody>
</table>

<p><strong>Importante:</strong> as alíquotas são progressivas. Quem ganha R$4.000, por exemplo, paga 7,5% sobre a primeira faixa, 9% sobre a segunda e 12% sobre o restante. O desconto efetivo fica em torno de 9,5%.</p>

<h2>Tabela para contribuinte individual (autônomo)</h2>

<p>O autônomo pode escolher entre dois planos:</p>

<table>
<thead>
<tr><th>Plano</th><th>Base de cálculo</th><th>Alíquota</th><th>Valor mensal</th></tr>
</thead>
<tbody>
<tr><td>Plano normal</td><td>20% sobre o rendimento (de 1 salário mínimo até o teto)</td><td>20%</td><td>R$303,60 a R$1.631,48</td></tr>
<tr><td>Plano simplificado</td><td>11% sobre o salário mínimo</td><td>11%</td><td>R$166,98</td></tr>
</tbody>
</table>

<p><strong>Atenção:</strong> o plano simplificado (11%) dá direito apenas à aposentadoria por idade no valor de 1 salário mínimo. Se quiser aposentadoria por tempo de contribuição ou valor maior, precisa contribuir pelo plano normal (20%).</p>

<h2>Tabela para MEI (Microempreendedor Individual)</h2>

<p>O MEI paga uma contribuição reduzida de <strong>5% sobre o salário mínimo</strong>, embutida no DAS mensal:</p>

<ul>
<li><strong>Valor INSS do MEI em 2026:</strong> R$75,90 (5% de R$1.518)</li>
<li>Esse valor dá direito à aposentadoria por idade no valor de 1 salário mínimo</li>
<li>Para aposentadoria por tempo de contribuição, o MEI precisa complementar com mais 15% sobre o salário mínimo (R$227,70 adicionais)</li>
</ul>

<h2>Tabela para contribuinte facultativo</h2>

<p>O facultativo é quem não exerce atividade remunerada (donas de casa, estudantes, desempregados) mas quer manter a contribuição:</p>

<table>
<thead>
<tr><th>Plano</th><th>Alíquota</th><th>Valor mensal</th></tr>
</thead>
<tbody>
<tr><td>Plano normal</td><td>20% (sobre valor entre mínimo e teto)</td><td>R$303,60 a R$1.631,48</td></tr>
<tr><td>Plano simplificado</td><td>11% sobre o salário mínimo</td><td>R$166,98</td></tr>
<tr><td>Baixa renda (dona de casa)</td><td>5% sobre o salário mínimo</td><td>R$75,90</td></tr>
</tbody>
</table>

<p>O plano de baixa renda (5%) é exclusivo para famílias inscritas no CadÚnico com renda de até 2 salários mínimos.</p>

<h2>Como pagar a contribuição</h2>

<h3>Para autônomos e facultativos:</h3>

<ol>
<li>Acesse o site <strong>sal.receita.fazenda.gov.br</strong></li>
<li>Selecione "Emissão de GPS" (Guia da Previdência Social)</li>
<li>Informe seu NIT/PIS e o código de pagamento</li>
<li>Gere a guia e pague em qualquer banco ou lotérica</li>
</ol>

<h3>Códigos de pagamento mais usados:</h3>

<ul>
<li><strong>1007:</strong> Contribuinte individual — plano normal (20%)</li>
<li><strong>1163:</strong> Contribuinte individual — plano simplificado (11%)</li>
<li><strong>1406:</strong> Facultativo — plano normal (20%)</li>
<li><strong>1473:</strong> Facultativo — plano simplificado (11%)</li>
<li><strong>1929:</strong> Facultativo — baixa renda (5%)</li>
</ul>

<h2>O que acontece se atrasar o pagamento?</h2>

<p>Contribuições em atraso geram <strong>multa e juros</strong>. O cálculo é automático na GPS. Para atrasos de até 5 anos, você pode emitir a guia com acréscimos diretamente pelo site da Receita. Para períodos maiores, é necessário indenização junto ao INSS.</p>

<h2>O que fazer agora</h2>

<p>Verifique se suas contribuições estão em dia acessando o extrato do CNIS pelo Meu INSS. Se há meses sem pagamento, regularize o quanto antes para não perder tempo de contribuição.</p>

<p><strong>Tem dúvidas sobre qual plano escolher ou como regularizar contribuições atrasadas?</strong> <a href="/contato">Fale com a nossa equipe</a>. Orientamos a melhor estratégia para sua situação.</p>
`,
  },

  // ── 11. Tempo de Contribuição Para Aposentar ─────────────────────────
  {
    slug: "quanto-tempo-contribuicao-para-aposentar-2026",
    title: "Quanto Tempo de Contribuição Preciso Para Aposentar em 2026?",
    metaTitle: "Tempo de Contribuição Para Aposentadoria 2026: Quanto Falta?",
    metaDescription:
      "Descubra quanto tempo de contribuição você precisa para se aposentar em 2026. Regras atuais, transição e como consultar seu tempo no INSS.",
    excerpt:
      "As regras mudaram com a reforma. Saiba exatamente quanto tempo de contribuição é necessário para cada tipo de aposentadoria em 2026.",
    category: "Previdenciário",
    date: "2026-02-10",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800&q=80",
    content: `
<p>Depois da reforma da previdência de 2019, as regras de aposentadoria ficaram mais complexas. Não basta saber o tempo de contribuição — é preciso entender <strong>qual regra se aplica ao seu caso</strong>. Neste guia, explicamos os requisitos atualizados para 2026.</p>

<h2>Regra geral (quem começou a contribuir após 13/11/2019)</h2>

<p>Para quem entrou no mercado de trabalho depois da reforma:</p>

<table>
<thead>
<tr><th>Requisito</th><th>Mulheres</th><th>Homens</th></tr>
</thead>
<tbody>
<tr><td>Idade mínima</td><td>62 anos</td><td>65 anos</td></tr>
<tr><td>Tempo mínimo de contribuição</td><td>15 anos</td><td>20 anos</td></tr>
</tbody>
</table>

<p>Nessa regra, não há alternativa: é preciso atingir <strong>tanto a idade quanto o tempo mínimo</strong>.</p>

<h2>Regras de transição (quem já contribuía antes da reforma)</h2>

<p>Se você já estava no mercado de trabalho antes de novembro de 2019, pode optar por uma das regras de transição:</p>

<h3>1. Regra dos pontos</h3>

<p>Soma de idade + tempo de contribuição. Em 2026:</p>

<ul>
<li><strong>Mulheres:</strong> 92 pontos (mínimo 30 anos de contribuição)</li>
<li><strong>Homens:</strong> 102 pontos (mínimo 35 anos de contribuição)</li>
</ul>

<p>Os pontos aumentam 1 por ano até atingir 100 (mulheres em 2033) e 105 (homens em 2028).</p>

<h3>2. Idade mínima progressiva</h3>

<p>Em 2026:</p>

<ul>
<li><strong>Mulheres:</strong> 59 anos de idade + 30 anos de contribuição</li>
<li><strong>Homens:</strong> 64 anos de idade + 35 anos de contribuição</li>
</ul>

<p>A idade mínima sobe 6 meses por ano até chegar a 62 (mulheres) e 65 (homens).</p>

<h3>3. Pedágio de 50%</h3>

<p>Para quem estava a <strong>menos de 2 anos</strong> de se aposentar em novembro de 2019. O trabalhador cumpre o tempo faltante + 50% de pedágio. Exemplo: se faltavam 1 ano e 6 meses, cumpre 1a6m + 9 meses = 2 anos e 3 meses.</p>

<h3>4. Pedágio de 100%</h3>

<p>Exige idade mínima (57 mulheres, 60 homens) + tempo de contribuição completo (30/35 anos) + pedágio de 100% do tempo que faltava em novembro de 2019. A vantagem: o valor do benefício é calculado sem o redutor de 60%.</p>

<h2>Como saber qual regra é melhor para você</h2>

<p>Cada regra gera um <strong>valor diferente de benefício</strong>. A regra dos pontos e a idade mínima progressiva usam o cálculo de 60% + 2% por ano acima de 15 anos (mulheres) ou 20 anos (homens). Já o pedágio de 100% permite o cálculo pela média integral (sem redutor).</p>

<p>Exemplo: Maria tem 33 anos de contribuição. Pelo cálculo padrão: 60% + (18 × 2%) = 96%. Pelo pedágio 100%: 100% da média. A diferença pode chegar a centenas de reais por mês.</p>

<h2>Como consultar seu tempo de contribuição</h2>

<ol>
<li>Acesse o <strong>Meu INSS</strong></li>
<li>Vá em "Extrato de Contribuição (CNIS)"</li>
<li>Verifique todos os vínculos e períodos</li>
<li>Some o tempo total de contribuição</li>
<li>Use o simulador do Meu INSS para projetar quando atinge cada regra</li>
</ol>

<h2>Períodos que contam como contribuição</h2>

<p>Além do trabalho com carteira assinada, outros períodos podem contar:</p>

<ul>
<li><strong>Serviço militar obrigatório</strong></li>
<li><strong>Trabalho rural</strong> (mesmo sem contribuição formal)</li>
<li><strong>Tempo de recebimento de auxílio-doença:</strong> conta como tempo de contribuição intercalado</li>
<li><strong>Período como segurado especial</strong> (pescador, agricultor familiar)</li>
<li><strong>Tempo de contribuição em outro regime</strong> (servidor público, por exemplo, mediante certidão de tempo)</li>
</ul>

<h2>O que fazer agora</h2>

<p>Consulte seu CNIS pelo Meu INSS e verifique se todos os períodos de trabalho estão registrados. Qualquer tempo faltante pode ser a diferença entre se aposentar agora ou daqui a anos.</p>

<p><strong>Quer um planejamento personalizado?</strong> <a href="/contato">Fale com a nossa equipe</a>. Analisamos seu histórico e indicamos a melhor regra de transição para o seu caso.</p>
`,
  },

  // ── 12. Seguro-Desemprego Online ─────────────────────────────────────
  {
    slug: "como-pedir-seguro-desemprego-online-passo-a-passo-2026",
    title: "Como Pedir Seguro-Desemprego Online: Passo a Passo 2026",
    metaTitle: "Seguro-Desemprego Online 2026: Como Pedir Passo a Passo",
    metaDescription:
      "Aprenda a pedir seguro-desemprego online em 2026 pelo Gov.br ou app Carteira Digital. Passo a passo, prazos, valores e requisitos.",
    excerpt:
      "Foi demitido e precisa do seguro-desemprego? Veja como solicitar 100% online pelo Gov.br em poucos minutos. Guia atualizado para 2026.",
    category: "Trabalhista",
    date: "2026-02-13",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    content: `
<p>O <strong>seguro-desemprego</strong> é um benefício temporário pago ao trabalhador demitido sem justa causa. Em 2026, o pedido pode ser feito <strong>100% online</strong>, sem necessidade de ir a nenhum posto. Veja o passo a passo completo.</p>

<h2>Quem tem direito ao seguro-desemprego?</h2>

<p>Tem direito ao seguro-desemprego o trabalhador que:</p>

<ul>
<li>Foi <strong>demitido sem justa causa</strong></li>
<li>Não possui renda própria suficiente para sustento</li>
<li>Não está recebendo benefício previdenciário (exceto pensão por morte ou auxílio-acidente)</li>
<li>Cumpre o tempo mínimo de trabalho exigido</li>
</ul>

<h3>Tempo mínimo de trabalho:</h3>

<table>
<thead>
<tr><th>Solicitação</th><th>Tempo mínimo</th></tr>
</thead>
<tbody>
<tr><td>1ª vez</td><td>12 meses nos últimos 18 meses</td></tr>
<tr><td>2ª vez</td><td>9 meses nos últimos 12 meses</td></tr>
<tr><td>3ª vez em diante</td><td>6 meses imediatamente anteriores à demissão</td></tr>
</tbody>
</table>

<h2>Passo a passo para pedir online</h2>

<h3>Opção 1: Pelo portal Gov.br</h3>

<ol>
<li>Acesse <strong>servicos.mte.gov.br</strong></li>
<li>Faça login com sua conta <strong>Gov.br</strong></li>
<li>Clique em <strong>"Solicitar Seguro-Desemprego"</strong></li>
<li>Informe o número do requerimento (está no formulário entregue pela empresa ou no TRCT)</li>
<li>Confirme seus dados pessoais e bancários</li>
<li>Envie a solicitação</li>
</ol>

<h3>Opção 2: Pelo app Carteira de Trabalho Digital</h3>

<ol>
<li>Baixe o app <strong>Carteira de Trabalho Digital</strong> (Android ou iOS)</li>
<li>Faça login com sua conta Gov.br</li>
<li>Acesse o menu <strong>"Benefícios"</strong> > <strong>"Seguro-Desemprego"</strong></li>
<li>Siga as instruções na tela para completar o pedido</li>
</ol>

<h2>Prazo para solicitar</h2>

<p>O pedido deve ser feito entre o <strong>7º e o 120º dia</strong> após a data da demissão. Se perder esse prazo, perde o direito ao benefício. Não há prorrogação.</p>

<h2>Quantas parcelas vou receber?</h2>

<table>
<thead>
<tr><th>Meses trabalhados</th><th>Parcelas</th></tr>
</thead>
<tbody>
<tr><td>6 a 11 meses</td><td>3 parcelas</td></tr>
<tr><td>12 a 23 meses</td><td>4 parcelas</td></tr>
<tr><td>24 meses ou mais</td><td>5 parcelas</td></tr>
</tbody>
</table>

<h2>Qual o valor das parcelas?</h2>

<p>O cálculo é feito sobre a <strong>média dos últimos 3 salários</strong> anteriores à demissão:</p>

<ul>
<li>Média até R$2.041,39: multiplica por 0,8 (80%)</li>
<li>Média de R$2.041,40 até R$3.402,65: o que exceder R$2.041,39 multiplica por 0,5 e soma R$1.633,10</li>
<li>Média acima de R$3.402,65: parcela fixa de R$2.313,74 (teto em 2026)</li>
</ul>

<p>O valor mínimo é sempre o <strong>salário mínimo</strong> (R$1.518 em 2026).</p>

<h2>Onde recebo o pagamento?</h2>

<p>O pagamento é feito pela <strong>Caixa Econômica Federal</strong>. Você pode receber:</p>

<ul>
<li>Em conta Caixa (se tiver)</li>
<li>Em conta poupança social digital (criada automaticamente)</li>
<li>Por saque em agência ou lotérica com documento de identidade</li>
</ul>

<h2>E se o pedido for negado?</h2>

<p>Os motivos mais comuns de negativa são:</p>

<ul>
<li>Tempo insuficiente de trabalho</li>
<li>Dados divergentes entre a empresa e o sistema</li>
<li>Recebimento de outro benefício previdenciário</li>
</ul>

<p>Se o pedido for negado, você pode interpor <strong>recurso administrativo</strong> em até 2 anos pelo próprio sistema. Se o recurso for negado, cabe ação judicial.</p>

<h2>O que fazer agora</h2>

<p>Se você foi demitido sem justa causa, não espere. O prazo máximo é de 120 dias e, quanto antes solicitar, antes começa a receber. Verifique se a empresa entregou o requerimento do seguro-desemprego junto com a rescisão.</p>

<p><strong>A empresa não entregou as guias ou seu pedido foi negado?</strong> <a href="/contato">Fale com a nossa equipe</a>. Resolvemos as pendências e garantimos seu acesso ao benefício.</p>
`,
  },

  // ── 13. Cálculo de Horas Extras ──────────────────────────────────────
  {
    slug: "calculo-horas-extras-como-fazer-quanto-receber",
    title: "Cálculo de Horas Extras: Como Fazer e Quanto Você Deve Receber",
    metaTitle: "Cálculo de Horas Extras 2026: Fórmula e Exemplos Práticos",
    metaDescription:
      "Aprenda a calcular horas extras corretamente em 2026. Fórmula, adicional de 50% e 100%, reflexos e exemplos práticos. Veja se a empresa paga certo.",
    excerpt:
      "Trabalhou além do horário e quer saber quanto tem a receber? Veja a fórmula correta, os percentuais e como conferir se a empresa está pagando certo.",
    category: "Trabalhista",
    date: "2026-02-17",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=800&q=80",
    content: `
<p>Horas extras são uma das verbas mais sonegadas no Brasil. Segundo pesquisas, mais de <strong>30% dos processos trabalhistas</strong> incluem pedido de horas extras. Neste guia, ensinamos a calcular corretamente e a identificar se a empresa está pagando o valor certo.</p>

<h2>O que são horas extras</h2>

<p>Hora extra é todo período trabalhado <strong>além da jornada contratual</strong>. Para a maioria dos trabalhadores CLT, a jornada padrão é de 8 horas diárias e 44 horas semanais. Qualquer minuto além disso é hora extra — e deve ser pago com adicional.</p>

<h2>Adicional de hora extra</h2>

<ul>
<li><strong>Dias úteis:</strong> adicional mínimo de <strong>50%</strong> (a convenção coletiva pode prever mais)</li>
<li><strong>Domingos e feriados:</strong> adicional de <strong>100%</strong></li>
</ul>

<h2>Fórmula do cálculo</h2>

<p>O cálculo da hora extra segue esta fórmula:</p>

<p><strong>Valor da hora normal = Salário mensal ÷ 220</strong> (para jornada de 44h semanais)</p>

<p><strong>Valor da hora extra = Hora normal × 1,5</strong> (dia útil) ou <strong>× 2,0</strong> (domingo/feriado)</p>

<h3>Exemplo prático:</h3>

<p>Salário: R$3.000,00 | Jornada: 44h semanais | Fez 20 horas extras em dias úteis no mês</p>

<ol>
<li>Hora normal: R$3.000 ÷ 220 = <strong>R$13,64</strong></li>
<li>Hora extra 50%: R$13,64 × 1,5 = <strong>R$20,45</strong></li>
<li>Total: 20 × R$20,45 = <strong>R$409,09</strong></li>
</ol>

<h2>Reflexos das horas extras</h2>

<p>As horas extras habituais (feitas com frequência) geram <strong>reflexos</strong> em outras verbas:</p>

<ul>
<li><strong>13º salário:</strong> a média das horas extras integra o cálculo do 13º</li>
<li><strong>Férias + 1/3:</strong> a média das horas extras integra o cálculo das férias</li>
<li><strong>FGTS:</strong> a empresa deve depositar 8% sobre o valor das horas extras</li>
<li><strong>DSR (Descanso Semanal Remunerado):</strong> as horas extras refletem no DSR</li>
<li><strong>Aviso prévio:</strong> se habituais, integram a base de cálculo</li>
</ul>

<h2>O reflexo no DSR</h2>

<p>O cálculo do reflexo das horas extras no DSR é:</p>

<p><strong>Total de horas extras no mês ÷ dias úteis × domingos e feriados = reflexo DSR</strong></p>

<p>Exemplo: R$409,09 de horas extras ÷ 24 dias úteis × 6 domingos = <strong>R$102,27</strong> de reflexo DSR.</p>

<h2>Banco de horas: quando é válido</h2>

<p>O banco de horas é uma alternativa ao pagamento em dinheiro. O trabalhador acumula horas extras e as compensa com folgas. Mas há regras:</p>

<ul>
<li><strong>Acordo individual por escrito:</strong> compensação em até 6 meses</li>
<li><strong>Convenção ou acordo coletivo:</strong> compensação em até 1 ano</li>
<li><strong>Compensação no mesmo mês:</strong> pode ser por acordo individual tácito</li>
</ul>

<p>Se o banco de horas não for compensado no prazo, as horas devem ser pagas como extras com adicional de 50%.</p>

<h2>Horas extras não registradas: como provar</h2>

<p>Se a empresa não registra corretamente o ponto ou altera os registros, você pode provar as horas extras por:</p>

<ul>
<li><strong>Testemunhas:</strong> colegas que trabalhavam no mesmo horário</li>
<li><strong>Mensagens e e-mails:</strong> comunicações fora do horário comprovam a jornada estendida</li>
<li><strong>Registros de acesso:</strong> catracas, câmeras, logs de sistema</li>
<li><strong>Geolocalização:</strong> em algumas funções, dados do celular corporativo podem ser usados</li>
</ul>

<h2>Limite de horas extras</h2>

<p>A CLT permite no máximo <strong>2 horas extras por dia</strong> (art. 59). Exceções existem para casos de necessidade imperiosa (art. 61), mas são situações extraordinárias.</p>

<h2>O que fazer agora</h2>

<p>Pegue seus contracheques dos últimos meses e faça o cálculo usando a fórmula acima. Compare com o que a empresa está pagando. Se houver diferença, pode haver valores a receber.</p>

<p><strong>Acha que suas horas extras estão sendo pagas errado?</strong> <a href="/contato">Fale com a nossa equipe</a>. Analisamos seus contracheques e calculamos os valores devidos.</p>
`,
  },

  // ── 14. FGTS Rescisão ───────────────────────────────────────────────
  {
    slug: "fgts-rescisao-como-sacar-quanto-recebo-demissao",
    title: "FGTS Rescisão: Como Sacar e Quanto Recebo na Demissão",
    metaTitle: "FGTS na Demissão: Como Sacar e Quanto Receber em 2026",
    metaDescription:
      "Saiba como sacar o FGTS na demissão, quanto vai receber de multa de 40% e os prazos para liberação. Guia completo para 2026.",
    excerpt:
      "Foi demitido e quer saber como sacar o FGTS? Entenda a multa de 40%, o prazo de liberação e como conferir se o valor está correto.",
    category: "Trabalhista",
    date: "2026-02-20",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    content: `
<p>Quando o trabalhador é <strong>demitido sem justa causa</strong>, tem direito a sacar todo o saldo do FGTS acumulado durante o contrato, além de receber a <strong>multa rescisória de 40%</strong>. Mas muita gente não sabe como funciona o processo de liberação nem como conferir os valores. Veja tudo neste guia.</p>

<h2>Quem tem direito ao saque do FGTS na rescisão?</h2>

<p>O saque integral do FGTS é liberado nas seguintes situações de rescisão:</p>

<ul>
<li><strong>Demissão sem justa causa:</strong> saque integral + multa de 40%</li>
<li><strong>Rescisão por acordo (art. 484-A CLT):</strong> saque de 80% + multa de 20%</li>
<li><strong>Rescisão indireta:</strong> saque integral + multa de 40% (equivale à "justa causa do empregador")</li>
<li><strong>Culpa recíproca:</strong> saque integral + multa de 20%</li>
<li><strong>Fim de contrato por prazo determinado:</strong> saque integral, sem multa</li>
</ul>

<p><strong>Não tem direito ao saque:</strong> demissão por justa causa e pedido de demissão (exceto se optou pelo saque-aniversário — nesse caso, já saca parcela anual).</p>

<h2>A multa de 40%: como é calculada</h2>

<p>A multa de 40% incide sobre o <strong>total de depósitos</strong> do FGTS durante o contrato, com juros e atualização monetária. A base de cálculo é o saldo da conta vinculada ao contrato de trabalho encerrado.</p>

<p>Exemplo: se durante 5 anos de trabalho foram depositados R$20.000, com rendimentos o saldo é R$22.000. A multa será de R$22.000 × 40% = <strong>R$8.800</strong>.</p>

<h2>Como é feita a liberação do saque</h2>

<ol>
<li>A empresa comunica a rescisão à Caixa Econômica Federal por meio do sistema <strong>Conectividade Social</strong></li>
<li>A empresa deposita a multa de 40% na conta do FGTS do trabalhador</li>
<li>O saldo é liberado em até <strong>5 dias úteis</strong> após a comunicação</li>
<li>O trabalhador recebe uma <strong>chave de identificação</strong> (chave da conectividade social) junto com o TRCT</li>
</ol>

<h2>Como sacar</h2>

<p>Existem algumas formas de sacar o FGTS liberado:</p>

<ul>
<li><strong>App FGTS:</strong> se o crédito automático estiver habilitado, o valor cai direto na conta cadastrada</li>
<li><strong>Agência da Caixa:</strong> com documento de identidade, CPF e carteira de trabalho</li>
<li><strong>Caixa Tem:</strong> o valor pode ser transferido para o app Caixa Tem</li>
<li><strong>Lotéricas:</strong> para valores até R$3.000, com documento de identidade</li>
</ul>

<h2>Como conferir se o valor está correto</h2>

<p>Para verificar se os depósitos do FGTS foram feitos corretamente:</p>

<ol>
<li>Acesse o app <strong>FGTS</strong> e confira o extrato da conta vinculada</li>
<li>Compare cada depósito mensal com 8% do seu salário bruto naquele mês</li>
<li>Verifique se há depósito referente ao 13º salário</li>
<li>Confira se os meses de afastamento por acidente de trabalho tiveram depósito (a empresa é obrigada a manter)</li>
</ol>

<h2>Problemas mais comuns</h2>

<ul>
<li><strong>Empresa não comunicou a rescisão:</strong> o FGTS não é liberado. Procure a Caixa com o TRCT e chave para regularizar</li>
<li><strong>Multa não depositada:</strong> a empresa tem 10 dias para depositar. Se não fizer, cabe ação trabalhista</li>
<li><strong>Depósitos em atraso ou faltantes:</strong> se a empresa não depositou o FGTS mensalmente, a multa pode ser menor do que deveria. Você pode cobrar a diferença judicialmente</li>
<li><strong>Saque-aniversário ativo:</strong> se você aderiu ao saque-aniversário, só receberá a multa de 40%, mas <strong>não poderá sacar o saldo</strong>. Avalie se vale cancelar a adesão</li>
</ul>

<h2>Prazo prescricional</h2>

<p>O prazo para cobrar depósitos de FGTS não realizados é de <strong>5 anos</strong>, conforme decisão do STF (ARE 709.212). Ou seja, se descobrir que a empresa não depositou, pode cobrar os últimos 5 anos.</p>

<h2>O que fazer agora</h2>

<p>Se foi demitido, confira imediatamente seu extrato do FGTS e compare com os depósitos que deveriam ter sido feitos. Se os valores não batem ou a empresa não liberou o saque, busque orientação.</p>

<p><strong>FGTS não liberado ou valores incorretos?</strong> <a href="/contato">Fale com a nossa equipe</a>. Verificamos seu caso e garantimos que você receba tudo que é devido.</p>
`,
  },

  // ── 15. Agendar Perícia Médica INSS ──────────────────────────────────
  {
    slug: "como-agendar-pericia-medica-inss-guia-completo",
    title: "Como Agendar Perícia Médica do INSS: Guia Completo",
    metaTitle: "Perícia Médica INSS 2026: Como Agendar e Se Preparar",
    metaDescription:
      "Guia completo para agendar perícia médica do INSS em 2026. Passo a passo pelo Meu INSS, documentos necessários e dicas para o dia da perícia.",
    excerpt:
      "Precisa fazer perícia no INSS e não sabe como agendar? Veja o passo a passo completo, os documentos que levar e como se preparar para o exame.",
    category: "Previdenciário",
    date: "2026-02-24",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?w=800&q=80",
    content: `
<p>A <strong>perícia médica</strong> é a etapa em que o médico perito do INSS avalia se você está realmente incapacitado para o trabalho. É obrigatória para concessão, prorrogação e revisão de benefícios por incapacidade (auxílio-doença e aposentadoria por invalidez). Veja como agendar e se preparar.</p>

<h2>Quando a perícia é necessária</h2>

<ul>
<li><strong>Primeiro pedido de auxílio-doença:</strong> quando a análise documental (Atestmed) não for suficiente</li>
<li><strong>Prorrogação do benefício:</strong> se o afastamento precisar ser estendido</li>
<li><strong>Conversão para aposentadoria por invalidez:</strong> quando a incapacidade se torna permanente</li>
<li><strong>Revisão de benefício:</strong> o INSS pode convocar perícia de revisão a qualquer tempo</li>
<li><strong>Recurso contra indeferimento:</strong> em alguns casos, nova perícia é realizada</li>
</ul>

<h2>Como agendar pelo Meu INSS</h2>

<ol>
<li>Acesse o app <strong>Meu INSS</strong> ou o site meu.inss.gov.br</li>
<li>Faça login com conta Gov.br</li>
<li>Clique em <strong>"Agendar Perícia"</strong> ou <strong>"Prorrogar Benefício"</strong></li>
<li>Selecione o tipo de perícia desejada</li>
<li>Escolha a <strong>agência</strong> e o <strong>horário</strong> disponíveis</li>
<li>Confirme o agendamento e anote o protocolo</li>
</ol>

<p><strong>Alternativa:</strong> ligue para o <strong>135</strong> (Central de Atendimento do INSS), disponível de segunda a sábado, das 7h às 22h.</p>

<h2>Documentos para levar na perícia</h2>

<p>Leve <strong>todos</strong> os documentos médicos que tiver. Quanto mais completa a documentação, melhor:</p>

<ul>
<li><strong>Documento de identidade com foto e CPF</strong></li>
<li><strong>Atestados médicos</strong> com CID, data e carimbo do médico</li>
<li><strong>Laudos de exames:</strong> ressonância, raio-x, ultrassom, tomografia etc.</li>
<li><strong>Relatórios médicos:</strong> descrição detalhada da doença, tratamento e prognóstico</li>
<li><strong>Receituários:</strong> comprovam os medicamentos em uso</li>
<li><strong>Prontuário médico:</strong> se conseguir solicitar ao hospital ou clínica</li>
<li><strong>CAT (se for acidente de trabalho)</strong></li>
<li><strong>PPP (se for doença ocupacional)</strong></li>
</ul>

<h2>Dicas para o dia da perícia</h2>

<p>A perícia médica do INSS é um exame rápido — geralmente dura de <strong>10 a 20 minutos</strong>. Para aproveitá-la ao máximo:</p>

<ol>
<li><strong>Chegue com antecedência:</strong> pelo menos 30 minutos antes do horário marcado</li>
<li><strong>Organize os documentos:</strong> coloque em ordem cronológica para facilitar a análise</li>
<li><strong>Seja honesto e objetivo:</strong> descreva seus sintomas com clareza, sem exageros nem minimizações</li>
<li><strong>Não vá sozinho se possível:</strong> um acompanhante pode ajudar caso você esqueça de mencionar algo</li>
<li><strong>Leve cópias:</strong> o perito pode reter originais. Sempre tenha cópias de tudo</li>
<li><strong>Descreva seu dia a dia:</strong> explique como a doença afeta suas atividades diárias e profissionais</li>
</ol>

<h2>O que o perito avalia</h2>

<p>O médico perito não está interessado apenas no diagnóstico. Ele avalia:</p>

<ul>
<li>Se a doença realmente incapacita para o trabalho habitual</li>
<li>Se a incapacidade é temporária ou permanente</li>
<li>Se há possibilidade de reabilitação profissional</li>
<li>A coerência entre os exames e os sintomas relatados</li>
</ul>

<h2>E se o resultado for desfavorável?</h2>

<p>Se a perícia concluir que você está apto, mas você discorda, há três caminhos:</p>

<ul>
<li><strong>Recurso administrativo:</strong> em 30 dias, gratuito, julgado pela Junta de Recursos</li>
<li><strong>Novo pedido:</strong> com documentos médicos mais recentes ou complementares</li>
<li><strong>Ação judicial:</strong> o juiz nomeia um perito judicial independente, que geralmente é mais detalhista que o perito do INSS</li>
</ul>

<h2>O que fazer agora</h2>

<p>Se você precisa agendar uma perícia, reúna toda a documentação médica antes de marcar. Quanto mais completo o material, maiores as chances de um resultado favorável.</p>

<p><strong>Precisa de ajuda para preparar a documentação ou recorrer de uma perícia negada?</strong> <a href="/contato">Fale com a nossa equipe</a>. Orientamos todo o processo e acompanhamos você em cada etapa.</p>
`,
  },

  // ── 16. Direitos do Trabalhador CLT 2026 ─────────────────────────────
  {
    slug: "direitos-trabalhador-clt-2026-tudo-que-precisa-saber",
    title: "Direitos do Trabalhador CLT 2026: Tudo Que Você Precisa Saber",
    metaTitle: "Direitos do Trabalhador CLT 2026: Guia Completo",
    metaDescription:
      "Guia completo com todos os direitos do trabalhador CLT em 2026: salário, jornada, férias, 13º, FGTS, licenças e muito mais. Conheça seus direitos.",
    excerpt:
      "Trabalha com carteira assinada e quer saber todos os seus direitos? Este guia reúne tudo que a CLT garante ao trabalhador em 2026.",
    category: "Trabalhista",
    date: "2026-02-27",
    readTime: "11 min",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    content: `
<p>A <strong>CLT (Consolidação das Leis do Trabalho)</strong> é o conjunto de normas que rege as relações de trabalho no Brasil. Todo trabalhador com carteira assinada tem direitos garantidos por lei — e conhecê-los é o primeiro passo para não ser prejudicado. Veja o guia completo para 2026.</p>

<h2>Salário e remuneração</h2>

<ul>
<li><strong>Salário mínimo 2026:</strong> R$1.518,00</li>
<li><strong>Pagamento até o 5º dia útil</strong> do mês seguinte ao trabalhado</li>
<li><strong>Irredutibilidade salarial:</strong> o salário não pode ser reduzido, salvo por acordo ou convenção coletiva</li>
<li><strong>Igualdade salarial:</strong> mesma função, mesmo salário (art. 461, CLT)</li>
</ul>

<h2>Jornada de trabalho</h2>

<ul>
<li><strong>Máximo:</strong> 8 horas diárias e 44 horas semanais</li>
<li><strong>Horas extras:</strong> adicional de 50% (dias úteis) e 100% (domingos e feriados)</li>
<li><strong>Intervalo intrajornada:</strong> mínimo de 1 hora para jornadas acima de 6 horas</li>
<li><strong>Intervalo entre jornadas:</strong> mínimo de 11 horas entre o fim de uma jornada e o início da próxima</li>
<li><strong>Descanso semanal remunerado:</strong> preferencialmente aos domingos</li>
</ul>

<h2>Férias</h2>

<ul>
<li><strong>30 dias de férias</strong> a cada 12 meses de trabalho</li>
<li><strong>Adicional de 1/3</strong> sobre o salário de férias</li>
<li><strong>Possibilidade de vender 10 dias</strong> (abono pecuniário)</li>
<li><strong>Fracionamento:</strong> até 3 períodos, sendo um de pelo menos 14 dias e os demais de pelo menos 5 dias cada</li>
<li><strong>Pagamento:</strong> até 2 dias antes do início das férias</li>
</ul>

<h2>13º salário</h2>

<ul>
<li><strong>1ª parcela:</strong> paga entre fevereiro e 30 de novembro</li>
<li><strong>2ª parcela:</strong> paga até 20 de dezembro</li>
<li><strong>Proporcional na rescisão:</strong> exceto em demissão por justa causa</li>
</ul>

<h2>FGTS</h2>

<ul>
<li>A empresa deposita <strong>8% do salário bruto</strong> mensalmente em conta na Caixa</li>
<li>Depositado também sobre 13º, horas extras, adicionais etc.</li>
<li>Saque liberado em demissão sem justa causa, aposentadoria, doença grave e outras situações</li>
</ul>

<h2>Licenças remuneradas</h2>

<table>
<thead>
<tr><th>Licença</th><th>Duração</th></tr>
</thead>
<tbody>
<tr><td>Licença-maternidade</td><td>120 dias (180 dias em empresa cidadã)</td></tr>
<tr><td>Licença-paternidade</td><td>5 dias (20 dias em empresa cidadã)</td></tr>
<tr><td>Casamento</td><td>3 dias consecutivos</td></tr>
<tr><td>Falecimento de familiar</td><td>2 dias consecutivos</td></tr>
<tr><td>Doação de sangue</td><td>1 dia por ano</td></tr>
<tr><td>Alistamento eleitoral</td><td>2 dias</td></tr>
<tr><td>Serviço militar</td><td>Período necessário</td></tr>
<tr><td>Acompanhar filho ao médico</td><td>1 dia por ano (até 6 anos)</td></tr>
<tr><td>Exames preventivos de câncer</td><td>Até 3 dias por ano</td></tr>
</tbody>
</table>

<h2>Adicionais</h2>

<ul>
<li><strong>Adicional noturno:</strong> mínimo 20% para trabalho entre 22h e 5h</li>
<li><strong>Adicional de insalubridade:</strong> 10%, 20% ou 40% do salário mínimo</li>
<li><strong>Adicional de periculosidade:</strong> 30% do salário base</li>
<li><strong>Adicional de transferência:</strong> 25% do salário (para transferência provisória)</li>
</ul>

<h2>Estabilidades</h2>

<ul>
<li><strong>Gestante:</strong> da confirmação até 5 meses após o parto</li>
<li><strong>Acidente de trabalho:</strong> 12 meses após a alta do INSS</li>
<li><strong>Membro da CIPA:</strong> durante mandato + 1 ano</li>
<li><strong>Dirigente sindical:</strong> durante mandato + 1 ano</li>
</ul>

<h2>Direitos na rescisão</h2>

<p>Os direitos na rescisão variam conforme o tipo de desligamento (sem justa causa, pedido de demissão, justa causa, acordo). De forma geral, a demissão sem justa causa é a que garante mais direitos: aviso prévio, férias, 13º, FGTS, multa de 40% e seguro-desemprego.</p>

<h2>O que fazer agora</h2>

<p>Conhecer seus direitos é o primeiro passo. Se você suspeita que algum deles está sendo descumprido — seja o pagamento atrasado, falta de registro de horas extras, não depósito do FGTS ou qualquer outra irregularidade — documente tudo e procure orientação.</p>

<p><strong>Acha que seus direitos estão sendo violados?</strong> <a href="/contato">Fale com a nossa equipe</a>. Analisamos sua situação e orientamos os melhores caminhos.</p>
`,
  },

  // ── 17. Corrigir Dados no CNIS ───────────────────────────────────────
  {
    slug: "como-corrigir-dados-cnis-passo-a-passo",
    title: "Como Corrigir Dados no CNIS: Passo a Passo Com Telas",
    metaTitle: "Corrigir CNIS 2026: Passo a Passo Para Acertar Seus Dados",
    metaDescription:
      "Aprenda a corrigir vínculos, salários e períodos no CNIS pelo Meu INSS. Passo a passo com documentos necessários e prazos. Guia 2026.",
    excerpt:
      "Seu CNIS tem dados errados ou faltando vínculos? Saiba como corrigir pelo Meu INSS, quais documentos apresentar e quanto tempo leva o processo.",
    category: "Previdenciário",
    date: "2026-03-02",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&q=80",
    content: `
<p>O <strong>CNIS (Cadastro Nacional de Informações Sociais)</strong> é o banco de dados do INSS que registra toda a sua vida contributiva. Qualquer erro nesse cadastro pode atrasar ou reduzir sua aposentadoria. Se você encontrou dados incorretos ou vínculos faltando, veja como corrigir.</p>

<h2>O que pode estar errado no CNIS</h2>

<p>Os problemas mais comuns são:</p>

<ul>
<li><strong>Vínculos empregatícios faltando:</strong> empresas que não informaram a admissão ou demissão</li>
<li><strong>Datas incorretas:</strong> data de admissão ou saída divergente da carteira de trabalho</li>
<li><strong>Salários zerados ou incorretos:</strong> meses sem informação de remuneração</li>
<li><strong>Indicadores de pendência:</strong> como PREM-PEXT, PREC-FACULT, IEAN etc.</li>
<li><strong>Contribuições como autônomo não registradas:</strong> carnês pagos que não aparecem no sistema</li>
<li><strong>Tempo rural não reconhecido:</strong> trabalho no campo sem registro formal</li>
</ul>

<h2>Passo a passo para solicitar correção</h2>

<h3>1. Baixe seu extrato CNIS</h3>

<ol>
<li>Acesse o <strong>Meu INSS</strong></li>
<li>Vá em <strong>"Extrato de Contribuição (CNIS)"</strong></li>
<li>Baixe o documento completo em PDF</li>
<li>Analise cada vínculo, data e salário</li>
</ol>

<h3>2. Identifique as divergências</h3>

<p>Compare o CNIS com:</p>

<ul>
<li>Sua carteira de trabalho (todas as páginas)</li>
<li>Contracheques e holerites antigos</li>
<li>Carnês de contribuição (GPS)</li>
<li>Termos de rescisão</li>
</ul>

<p>Anote cada divergência: qual vínculo, qual período, qual o dado correto e qual documento comprova.</p>

<h3>3. Solicite a correção pelo Meu INSS</h3>

<ol>
<li>No Meu INSS, clique em <strong>"Novo Pedido"</strong></li>
<li>Busque por <strong>"Acerto de Vínculos e Remunerações"</strong></li>
<li>Descreva detalhadamente o que precisa ser corrigido</li>
<li>Anexe os documentos comprobatórios digitalizados</li>
<li>Envie o pedido e anote o número de protocolo</li>
</ol>

<h2>Documentos necessários para cada tipo de correção</h2>

<table>
<thead>
<tr><th>Tipo de correção</th><th>Documentos</th></tr>
</thead>
<tbody>
<tr><td>Vínculo faltante</td><td>CTPS, TRCT, contracheques, declaração da empresa</td></tr>
<tr><td>Data incorreta</td><td>CTPS com anotação, TRCT, contrato de trabalho</td></tr>
<tr><td>Salário errado</td><td>Contracheques do período, declaração do empregador</td></tr>
<tr><td>Contribuição autônomo</td><td>Carnês GPS originais, comprovantes de pagamento bancário</td></tr>
<tr><td>Tempo rural</td><td>Declaração do sindicato rural, contratos de arrendamento, notas fiscais de produção</td></tr>
<tr><td>Sentença trabalhista</td><td>Certidão da sentença transitada em julgado, cálculos homologados</td></tr>
</tbody>
</table>

<h2>Indicadores do CNIS: o que significam</h2>

<p>O CNIS usa indicadores (siglas) para sinalizar pendências:</p>

<ul>
<li><strong>PREM-PEXT:</strong> remuneração do período anterior à admissão ou posterior à saída — precisa de acerto</li>
<li><strong>PREC-FACULT:</strong> contribuição como facultativo sem qualidade de segurado — pode não ser contada</li>
<li><strong>IEAN:</strong> exposição a agentes nocivos — relevante para aposentadoria especial</li>
<li><strong>PADM-ERRAD:</strong> data de admissão com indício de erro</li>
<li><strong>PVIN-IRREG:</strong> vínculo com indicativo de irregularidade</li>
</ul>

<h2>Quanto tempo demora a correção?</h2>

<p>O prazo varia conforme a complexidade:</p>

<ul>
<li><strong>Correções simples</strong> (data, salário com documentação clara): 30 a 60 dias</li>
<li><strong>Inclusão de vínculo:</strong> 60 a 120 dias</li>
<li><strong>Tempo rural ou especial:</strong> 90 a 180 dias ou mais</li>
</ul>

<p>Se o INSS não resolver no prazo de 90 dias, você pode ingressar com <strong>mandado de segurança</strong> na Justiça Federal para obrigar a análise.</p>

<h2>Dica importante: corrija ANTES de pedir aposentadoria</h2>

<p>Muita gente descobre os erros do CNIS quando já deu entrada na aposentadoria, o que atrasa todo o processo. A melhor estratégia é <strong>revisar e corrigir o CNIS com pelo menos 6 meses de antecedência</strong> ao pedido de benefício.</p>

<h2>O que fazer agora</h2>

<p>Acesse agora o Meu INSS, baixe seu CNIS e compare com seus documentos. Se encontrar qualquer erro, inicie o processo de correção imediatamente.</p>

<p><strong>Precisa de ajuda para corrigir seu CNIS?</strong> <a href="/contato">Fale com a nossa equipe</a>. Analisamos seu extrato, identificamos todas as pendências e cuidamos das correções.</p>
`,
  },

  // ── 18. Tempo de Processo no INSS ────────────────────────────────────
  {
    slug: "quanto-tempo-demora-processo-inss-prazos",
    title: "Quanto Tempo Demora um Processo no INSS? Prazos Administrativos e Judiciais",
    metaTitle: "Prazos do INSS 2026: Quanto Tempo Demora Cada Processo",
    metaDescription:
      "Descubra quanto tempo demora cada tipo de processo no INSS em 2026: aposentadoria, auxílio-doença, BPC, recurso e ação judicial. Prazos reais.",
    excerpt:
      "Cansado de esperar o INSS? Saiba quanto tempo realmente demora cada tipo de pedido e o que fazer quando o prazo é ultrapassado.",
    category: "Previdenciário",
    date: "2026-03-06",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=800&q=80",
    content: `
<p>Uma das maiores frustrações de quem depende do INSS é a <strong>demora na análise dos pedidos</strong>. A lei estabelece prazos, mas na prática eles frequentemente são ultrapassados. Neste guia, mostramos os prazos legais, os prazos reais e o que fazer quando a espera passa do limite.</p>

<h2>Prazo legal vs. prazo real</h2>

<p>O <strong>Decreto 10.410/2020</strong> e a <strong>Lei 9.784/99</strong> determinam que o INSS tem <strong>até 90 dias</strong> para analisar qualquer requerimento administrativo. Na prática, os prazos variam bastante:</p>

<table>
<thead>
<tr><th>Tipo de pedido</th><th>Prazo legal</th><th>Prazo médio real (2026)</th></tr>
</thead>
<tbody>
<tr><td>Aposentadoria por idade</td><td>90 dias</td><td>60 a 120 dias</td></tr>
<tr><td>Aposentadoria por tempo de contribuição</td><td>90 dias</td><td>90 a 180 dias</td></tr>
<tr><td>Auxílio-doença (Atestmed)</td><td>45 dias</td><td>15 a 45 dias</td></tr>
<tr><td>Auxílio-doença (com perícia)</td><td>90 dias</td><td>45 a 120 dias</td></tr>
<tr><td>BPC/LOAS</td><td>90 dias</td><td>90 a 180 dias</td></tr>
<tr><td>Pensão por morte</td><td>90 dias</td><td>30 a 90 dias</td></tr>
<tr><td>Salário-maternidade</td><td>90 dias</td><td>30 a 60 dias</td></tr>
<tr><td>Revisão de benefício</td><td>90 dias</td><td>120 a 365 dias</td></tr>
</tbody>
</table>

<h2>Prazos dos recursos administrativos</h2>

<p>Se seu pedido foi negado, o recurso segue este fluxo:</p>

<ol>
<li><strong>Prazo para recorrer:</strong> 30 dias após a notificação da decisão</li>
<li><strong>Análise do recurso pela Junta de Recursos:</strong> prazo médio de 6 a 12 meses</li>
<li><strong>Se necessário, recurso à CRPS (Câmara de Recursos):</strong> mais 6 a 12 meses</li>
</ol>

<p>No total, a via administrativa pode levar de <strong>1 a 2 anos</strong> entre o pedido original e a decisão final do recurso.</p>

<h2>Prazos da via judicial</h2>

<p>Se optar por ação judicial (ou se o recurso administrativo for negado):</p>

<ul>
<li><strong>Juizado Especial Federal (JEF):</strong> para causas de até 60 salários mínimos. Prazo médio de 6 a 18 meses</li>
<li><strong>Vara Federal (causas acima de 60 SM):</strong> prazo médio de 12 a 24 meses</li>
<li><strong>Se houver recurso (TRF):</strong> mais 12 a 24 meses</li>
</ul>

<h2>O que fazer quando o INSS demora</h2>

<p>Se o prazo de 90 dias foi ultrapassado, você tem algumas opções:</p>

<h3>1. Reclamação na Ouvidoria</h3>

<p>Registre uma reclamação na Ouvidoria do INSS pelo próprio Meu INSS ou pelo telefone 135. A ouvidoria tem prazo de 30 dias para responder e pode pressionar a análise.</p>

<h3>2. Mandado de segurança</h3>

<p>É uma ação judicial específica para combater a demora administrativa. O juiz determina que o INSS analise o pedido em prazo fixado (geralmente 30 dias). É a forma mais rápida de resolver o problema.</p>

<h3>3. Ação judicial com pedido de tutela antecipada</h3>

<p>Se você precisa do benefício com urgência (por exemplo, está sem renda e doente), o advogado pode pedir uma <strong>tutela antecipada</strong>. Se concedida, o benefício é implantado provisoriamente enquanto o processo tramita.</p>

<h2>Dica: DER e efeitos financeiros</h2>

<p>A <strong>DER (Data de Entrada do Requerimento)</strong> é a data em que você protocolou o pedido no INSS. Todos os valores retroativos são calculados a partir dessa data, não da data da decisão. Por isso, mesmo que o INSS demore 1 ano para decidir, se for aprovado, você recebe tudo retroativo à DER.</p>

<h2>Como acompanhar o andamento</h2>

<ol>
<li>Acesse o <strong>Meu INSS</strong></li>
<li>Vá em <strong>"Consultar Pedidos"</strong></li>
<li>Selecione o requerimento desejado</li>
<li>Acompanhe o status: em análise, em exigência, concedido ou indeferido</li>
</ol>

<p>Se o status ficar em "em análise" por mais de 90 dias sem movimentação, é hora de agir.</p>

<h2>O que fazer agora</h2>

<p>Se seu pedido está parado no INSS há mais de 90 dias, não espere mais. Cada dia de atraso é um dia a menos de benefício que poderia estar recebendo.</p>

<p><strong>INSS atrasado ou pedido negado?</strong> <a href="/contato">Fale com a nossa equipe</a>. Agilizamos a análise e, se necessário, ingressamos com ação judicial para garantir seu benefício.</p>
`,
  },

  // ── 19. Tabela de Pontos Aposentadoria 2026 ──────────────────────────
  {
    slug: "tabela-pontos-aposentadoria-2026-regra-transicao",
    title: "Tabela de Pontos Para Aposentadoria 2026: Regra de Transição",
    metaTitle: "Tabela de Pontos Aposentadoria 2026: Regra de Transição",
    metaDescription:
      "Tabela atualizada de pontos para aposentadoria em 2026. Entenda a regra de transição por pontos, como calcular e quando você atinge o requisito.",
    excerpt:
      "A regra de pontos é uma das mais usadas para aposentadoria. Veja a tabela atualizada para 2026 e calcule quantos pontos você já tem.",
    category: "Previdenciário",
    date: "2026-03-10",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1529400971575-f257542a6a20?w=800&q=80",
    content: `
<p>A <strong>regra de transição por pontos</strong> é uma das opções mais utilizadas por quem já contribuía antes da reforma da previdência de 2019. Ela funciona pela soma da idade com o tempo de contribuição. Veja a tabela atualizada para 2026 e descubra quantos pontos você precisa.</p>

<h2>Como funciona a regra de pontos</h2>

<p>A regra é simples: você soma sua <strong>idade</strong> com seu <strong>tempo de contribuição</strong>. Se o resultado atingir a pontuação mínima do ano, pode se aposentar. Mas é necessário cumprir também o <strong>tempo mínimo de contribuição</strong>:</p>

<ul>
<li><strong>Mulheres:</strong> mínimo de 30 anos de contribuição</li>
<li><strong>Homens:</strong> mínimo de 35 anos de contribuição</li>
</ul>

<h2>Tabela de pontos: 2020 a 2033</h2>

<table>
<thead>
<tr><th>Ano</th><th>Mulheres</th><th>Homens</th></tr>
</thead>
<tbody>
<tr><td>2020</td><td>87</td><td>97</td></tr>
<tr><td>2021</td><td>88</td><td>98</td></tr>
<tr><td>2022</td><td>89</td><td>99</td></tr>
<tr><td>2023</td><td>90</td><td>100</td></tr>
<tr><td>2024</td><td>91</td><td>101</td></tr>
<tr><td>2025</td><td>91</td><td>101</td></tr>
<tr><td><strong>2026</strong></td><td><strong>92</strong></td><td><strong>102</strong></td></tr>
<tr><td>2027</td><td>93</td><td>103</td></tr>
<tr><td>2028</td><td>94</td><td>104</td></tr>
<tr><td>2029</td><td>95</td><td>105 (teto)</td></tr>
<tr><td>2030</td><td>96</td><td>105</td></tr>
<tr><td>2031</td><td>97</td><td>105</td></tr>
<tr><td>2032</td><td>98</td><td>105</td></tr>
<tr><td>2033 em diante</td><td>100 (teto)</td><td>105</td></tr>
</tbody>
</table>

<h2>Exemplos práticos para 2026</h2>

<h3>Exemplo 1: Mulher</h3>

<p>Ana tem 57 anos e 35 anos de contribuição. Total: 57 + 35 = <strong>92 pontos</strong>. Ela atinge o requisito em 2026 e pode se aposentar.</p>

<h3>Exemplo 2: Homem</h3>

<p>Carlos tem 62 anos e 38 anos de contribuição. Total: 62 + 38 = <strong>100 pontos</strong>. Em 2026, precisa de 102. Faltam 2 pontos — precisará esperar até 2027.</p>

<h3>Exemplo 3: Homem com tempo especial</h3>

<p>Pedro tem 60 anos e 37 anos de contribuição como CLT, mais 3 anos de atividade insalubre convertidos (fator 1,4) = 4,2 anos extras. Total de contribuição: 41,2 anos. Pontos: 60 + 41,2 = <strong>101,2</strong>. Ainda não atinge os 102 pontos. Mas com mais análise, outros períodos podem ser encontrados.</p>

<h2>Valor do benefício pela regra de pontos</h2>

<p>O cálculo do valor segue a fórmula geral da reforma:</p>

<ol>
<li><strong>Salário de benefício:</strong> média de todos os salários de contribuição desde julho/1994</li>
<li><strong>Coeficiente:</strong> 60% + 2% por ano que exceder 15 anos (mulheres) ou 20 anos (homens)</li>
</ol>

<p>Exemplo: Ana com 35 anos de contribuição: 60% + (20 × 2%) = <strong>100%</strong> da média. Se a média for R$4.500, recebe R$4.500.</p>

<p>Carlos com 38 anos: 60% + (18 × 2%) = <strong>96%</strong>. Se a média for R$5.000, recebe R$4.800.</p>

<h2>Regra de pontos vs. outras regras</h2>

<p>A regra de pontos tem vantagens e desvantagens:</p>

<ul>
<li><strong>Vantagem:</strong> não exige idade mínima específica — se você tem muito tempo de contribuição, pode se aposentar mais jovem</li>
<li><strong>Desvantagem:</strong> o cálculo do valor usa o coeficiente redutor (60% + 2%), que pode gerar valor menor que o pedágio de 100%</li>
</ul>

<p>A melhor estratégia depende da sua situação individual. Para muitos trabalhadores, o pedágio de 100% gera valor mais alto, mesmo exigindo mais tempo.</p>

<h2>Como calcular seus pontos</h2>

<ol>
<li>Acesse o <strong>Meu INSS</strong> e baixe seu CNIS</li>
<li>Some todo o tempo de contribuição reconhecido</li>
<li>Some sua idade atual</li>
<li>Compare com a tabela de 2026</li>
</ol>

<h2>O que fazer agora</h2>

<p>Faça a conta dos seus pontos e veja se já atingiu ou está próximo de atingir a pontuação. Se faltar pouco, verifique se há períodos não reconhecidos no CNIS que podem aumentar seu tempo.</p>

<p><strong>Quer saber se a regra de pontos é a melhor para você?</strong> <a href="/contato">Fale com a nossa equipe</a>. Comparamos todas as regras e indicamos a mais vantajosa.</p>
`,
  },

  // ── 20. Provar Vínculo Sem Carteira ──────────────────────────────────
  {
    slug: "como-provar-vinculo-empregaticio-sem-carteira-assinada",
    title: "Como Provar Vínculo Empregatício Sem Carteira Assinada",
    metaTitle: "Provar Vínculo Sem Carteira 2026: Provas e Passo a Passo",
    metaDescription:
      "Trabalhou sem carteira assinada e precisa provar o vínculo? Veja quais provas usar, como funciona a ação judicial e o que a Justiça considera.",
    excerpt:
      "Milhões de brasileiros trabalham sem registro. Se esse é o seu caso, saiba que é possível provar o vínculo empregatício e garantir seus direitos.",
    category: "Trabalhista",
    date: "2026-03-14",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=800&q=80",
    content: `
<p>Trabalhar sem carteira assinada é ilegal, mas ainda é uma realidade para <strong>milhões de brasileiros</strong>. A boa notícia é que, mesmo sem registro formal, é possível <strong>provar o vínculo empregatício</strong> na Justiça do Trabalho e garantir todos os direitos retroativos. Veja como.</p>

<h2>O que caracteriza vínculo empregatício</h2>

<p>Para a CLT (art. 3º), existe vínculo de emprego quando estão presentes, simultaneamente, quatro elementos:</p>

<ol>
<li><strong>Pessoalidade:</strong> o trabalho é prestado por você, e não pode ser substituído por outra pessoa</li>
<li><strong>Habitualidade:</strong> o trabalho é contínuo, não eventual (não precisa ser diário — basta ser regular)</li>
<li><strong>Subordinação:</strong> você recebe ordens e cumpre horários definidos pelo empregador</li>
<li><strong>Onerosidade:</strong> você recebe pagamento pelo trabalho</li>
</ol>

<p>Se esses quatro requisitos estão presentes, <strong>existe vínculo</strong>, independentemente de haver contrato escrito ou carteira assinada.</p>

<h2>Quais provas servem para comprovar o vínculo</h2>

<p>A Justiça do Trabalho aceita diversos tipos de prova:</p>

<h3>Provas documentais</h3>

<ul>
<li><strong>Mensagens de WhatsApp:</strong> conversas sobre trabalho, horários, tarefas, cobranças</li>
<li><strong>E-mails corporativos:</strong> uso de e-mail da empresa comprova vínculo</li>
<li><strong>Comprovantes de pagamento:</strong> transferências bancárias, PIX, depósitos — mesmo que informais</li>
<li><strong>Fotos e vídeos:</strong> imagens no local de trabalho, usando uniforme da empresa</li>
<li><strong>Crachá ou identificação funcional</strong></li>
<li><strong>Recibos de pagamento:</strong> mesmo sem carimbo da empresa</li>
<li><strong>Publicações em redes sociais:</strong> posts da empresa mencionando você como funcionário</li>
</ul>

<h3>Provas testemunhais</h3>

<ul>
<li><strong>Colegas de trabalho:</strong> podem confirmar sua presença, horários e funções</li>
<li><strong>Clientes:</strong> pessoas atendidas por você podem confirmar que trabalhava no local</li>
<li><strong>Vizinhos da empresa:</strong> podem confirmar que viam você chegando e saindo regularmente</li>
</ul>

<p>A prova testemunhal é uma das mais fortes na Justiça do Trabalho. Duas testemunhas consistentes podem ser suficientes para reconhecer o vínculo.</p>

<h2>Como funciona a ação de reconhecimento de vínculo</h2>

<ol>
<li><strong>Consulta com advogado:</strong> avaliação das provas disponíveis</li>
<li><strong>Petição inicial:</strong> o advogado protocola a ação pedindo reconhecimento do vínculo e pagamento de todos os direitos</li>
<li><strong>Audiência de conciliação:</strong> tentativa de acordo</li>
<li><strong>Audiência de instrução:</strong> oitiva de testemunhas</li>
<li><strong>Sentença:</strong> o juiz decide se houve vínculo e condena a empresa</li>
</ol>

<h2>O que você pode receber</h2>

<p>Se o vínculo for reconhecido, a empresa será condenada a pagar retroativamente:</p>

<ul>
<li><strong>Anotação na CTPS</strong> (registro do período trabalhado)</li>
<li><strong>FGTS + multa de 40%</strong> de todo o período</li>
<li><strong>13º salário</strong> proporcional de cada ano</li>
<li><strong>Férias + 1/3</strong> não gozadas</li>
<li><strong>Horas extras</strong> (se comprovadas)</li>
<li><strong>Verbas rescisórias</strong> completas</li>
<li><strong>Recolhimento do INSS</strong> (importante para aposentadoria)</li>
<li><strong>Seguro-desemprego</strong> (guias)</li>
</ul>

<h2>Prazo para entrar com a ação</h2>

<p>O prazo é o mesmo da prescrição trabalhista: <strong>2 anos após o fim da relação de trabalho</strong>, podendo cobrar os últimos <strong>5 anos</strong>. Não espere demais.</p>

<h2>Dicas práticas para quem ainda está trabalhando sem registro</h2>

<p>Se você ainda está na situação de trabalho informal:</p>

<ol>
<li><strong>Guarde tudo:</strong> mensagens, comprovantes de pagamento, fotos</li>
<li><strong>Salve conversas de WhatsApp:</strong> exporte o chat antes que seja apagado</li>
<li><strong>Anote horários:</strong> mantenha um caderno com os dias e horários de trabalho</li>
<li><strong>Identifique testemunhas:</strong> saiba quem poderia confirmar seu vínculo</li>
<li><strong>Não aceite receber apenas em dinheiro:</strong> peça PIX ou transferência para ter comprovante bancário</li>
</ol>

<h2>O que fazer agora</h2>

<p>Se você trabalhou sem carteira assinada e tem provas da relação de emprego, não deixe o prazo passar. Cada dia que passa pode significar um período a menos de direitos a receber.</p>

<p><strong>Trabalhou sem registro e quer seus direitos?</strong> <a href="/contato">Fale com a nossa equipe</a>. Avaliamos suas provas e orientamos sobre as chances de reconhecimento do vínculo.</p>
`,
  },

  // ── 21. Guia do Trabalhador Doméstico ────────────────────────────────
  {
    slug: "guia-trabalhador-domestico-direitos-clt-2026",
    title: "Guia do Trabalhador Doméstico: Todos os Direitos CLT em 2026",
    metaTitle: "Direitos do Trabalhador Doméstico 2026: Guia Completo",
    metaDescription:
      "Guia completo dos direitos do trabalhador doméstico em 2026: salário, jornada, férias, FGTS, horas extras, aviso prévio e rescisão. Confira.",
    excerpt:
      "Empregados domésticos têm os mesmos direitos dos demais trabalhadores CLT desde 2015. Conheça todos os direitos e saiba se estão sendo cumpridos.",
    category: "Trabalhista",
    date: "2026-03-17",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
    content: `
<p>Desde a aprovação da <strong>LC 150/2015 (Lei Complementar dos Domésticos)</strong> e da <strong>Emenda Constitucional 72/2013</strong>, os trabalhadores domésticos passaram a ter praticamente os mesmos direitos dos demais empregados CLT. Mas a realidade mostra que muitos ainda não recebem tudo que a lei garante. Veja o guia completo.</p>

<h2>Quem é considerado empregado doméstico</h2>

<p>É empregado doméstico quem presta serviços <strong>contínuos</strong> (mais de 2 dias por semana) a uma pessoa ou família, no âmbito residencial, sem fins lucrativos para o empregador. Exemplos:</p>

<ul>
<li>Empregada doméstica / diarista (se mais de 2 dias/semana)</li>
<li>Cuidador de idosos</li>
<li>Motorista particular</li>
<li>Jardineiro</li>
<li>Babá</li>
<li>Cozinheiro(a) residencial</li>
<li>Caseiro(a)</li>
</ul>

<p><strong>Atenção:</strong> a diarista que trabalha até 2 dias por semana para o mesmo empregador <strong>não</strong> é considerada empregada doméstica e não tem os mesmos direitos.</p>

<h2>Direitos garantidos por lei</h2>

<h3>Salário e pagamento</h3>

<ul>
<li><strong>Salário mínimo</strong> nacional ou regional (o que for maior)</li>
<li>Pagamento até o <strong>7º dia útil</strong> do mês seguinte</li>
<li><strong>Vale-transporte:</strong> obrigatório se o empregado utilizar transporte público</li>
</ul>

<h3>Jornada de trabalho</h3>

<ul>
<li><strong>Máximo:</strong> 8 horas diárias e 44 horas semanais</li>
<li><strong>Hora extra:</strong> adicional de 50% (dias úteis) e 100% (feriados)</li>
<li><strong>Controle de ponto:</strong> obrigatório (pode ser manual)</li>
<li><strong>Adicional noturno:</strong> 20% para trabalho entre 22h e 5h</li>
<li><strong>Intervalo:</strong> mínimo de 1 hora para almoço (pode ser reduzido para 30min por acordo escrito)</li>
</ul>

<h3>Férias, 13º e FGTS</h3>

<ul>
<li><strong>Férias de 30 dias + 1/3</strong> a cada 12 meses</li>
<li><strong>13º salário:</strong> pago em duas parcelas</li>
<li><strong>FGTS:</strong> 8% do salário depositado mensalmente (obrigatório desde 2015)</li>
<li><strong>Multa de 40% do FGTS</strong> na demissão sem justa causa</li>
</ul>

<h3>Licenças</h3>

<ul>
<li><strong>Licença-maternidade:</strong> 120 dias com salário integral</li>
<li><strong>Licença-paternidade:</strong> 5 dias</li>
<li><strong>Estabilidade gestante:</strong> da confirmação da gravidez até 5 meses após o parto</li>
</ul>

<h2>O eSocial Doméstico</h2>

<p>O empregador doméstico é obrigado a cadastrar o empregado no <strong>eSocial</strong> e gerar mensalmente o <strong>DAE (Documento de Arrecadação do eSocial)</strong>, que inclui:</p>

<ul>
<li>INSS do empregado e do empregador</li>
<li>FGTS (8%)</li>
<li>Reserva indenizatória (3,2% para multa do FGTS)</li>
<li>Seguro contra acidente de trabalho</li>
</ul>

<p>Se o empregador não está recolhendo o DAE, <strong>todos esses direitos estão sendo descumpridos</strong>.</p>

<h2>Rescisão do contrato doméstico</h2>

<p>As regras de rescisão são as mesmas dos demais trabalhadores CLT:</p>

<ul>
<li><strong>Demissão sem justa causa:</strong> aviso prévio, férias, 13º, FGTS + 40%, seguro-desemprego</li>
<li><strong>Pedido de demissão:</strong> aviso prévio, férias e 13º proporcionais (sem FGTS nem seguro)</li>
<li><strong>Justa causa:</strong> apenas saldo de salário e férias vencidas</li>
</ul>

<h2>Problemas mais comuns</h2>

<ol>
<li><strong>Trabalho sem registro:</strong> empregador não assina a carteira nem cadastra no eSocial</li>
<li><strong>Não pagamento de FGTS:</strong> DAE não inclui o depósito do fundo</li>
<li><strong>Horas extras não pagas:</strong> jornada além de 44h sem compensação</li>
<li><strong>Férias não concedidas:</strong> o empregado trabalha anos sem gozar férias</li>
<li><strong>Rescisão sem pagamento:</strong> empregador demite e não paga as verbas devidas</li>
</ol>

<h2>O que fazer agora</h2>

<p>Se você é empregado doméstico, verifique se sua carteira está assinada, se o eSocial está ativo e se os depósitos do FGTS estão sendo feitos. Se algum direito está sendo descumprido, documente tudo.</p>

<p><strong>Seus direitos como doméstico estão sendo desrespeitados?</strong> <a href="/contato">Fale com a nossa equipe</a>. Orientamos sobre como regularizar a situação e recuperar valores devidos.</p>
`,
  },

  // ── 22. Estabilidade Provisória ──────────────────────────────────────
  {
    slug: "como-funciona-estabilidade-provisoria-casos-previstos-lei",
    title: "Como Funciona a Estabilidade Provisória: Todos os Casos Previstos em Lei",
    metaTitle: "Estabilidade Provisória 2026: Todos os Casos Previstos em Lei",
    metaDescription:
      "Entenda a estabilidade provisória no emprego: gestante, acidente, CIPA, sindical e mais. Saiba quando a empresa não pode demitir você.",
    excerpt:
      "Existem situações em que a empresa simplesmente não pode te demitir. Conheça todos os casos de estabilidade provisória previstos na legislação.",
    category: "Trabalhista",
    date: "2026-03-20",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1532009877282-3340270e0529?w=800&q=80",
    content: `
<p>A <strong>estabilidade provisória</strong> é a garantia temporária de emprego que impede a demissão do trabalhador em situações específicas. Se a empresa demitir um funcionário estável, pode ser condenada a <strong>reintegrá-lo ou pagar indenização</strong> correspondente a todo o período de estabilidade. Conheça todos os casos.</p>

<h2>1. Estabilidade da gestante</h2>

<p><strong>Base legal:</strong> Art. 10, II, b, do ADCT (Constituição Federal)</p>

<p><strong>Período:</strong> da confirmação da gravidez até 5 meses após o parto</p>

<p>Detalhes importantes:</p>

<ul>
<li>Vale mesmo que a trabalhadora não sabia que estava grávida no momento da demissão</li>
<li>Inclui contrato de experiência (Súmula 244, III do TST)</li>
<li>A estabilidade é da <strong>empregada</strong>, não do bebê — aborto não criminoso encerra a estabilidade após 2 semanas de repouso</li>
<li>Se a empresa demitiu e a gravidez é descoberta depois, há direito à reintegração ou indenização</li>
</ul>

<h2>2. Estabilidade acidentária</h2>

<p><strong>Base legal:</strong> Art. 118 da Lei 8.213/91</p>

<p><strong>Período:</strong> 12 meses após a cessação do auxílio-doença acidentário</p>

<p>Requisitos:</p>

<ul>
<li>Afastamento por acidente de trabalho ou doença ocupacional</li>
<li>Recebimento de auxílio-doença acidentário (B91) por pelo menos 1 dia</li>
<li>A estabilidade começa após a alta médica do INSS</li>
</ul>

<p><strong>Atenção:</strong> se a empresa não emitiu a CAT e o benefício foi classificado como B31 (doença comum), é possível converter judicialmente para B91 e garantir a estabilidade retroativa.</p>

<h2>3. Estabilidade do membro da CIPA</h2>

<p><strong>Base legal:</strong> Art. 10, II, a, do ADCT e art. 165 da CLT</p>

<p><strong>Período:</strong> do registro da candidatura até 1 ano após o fim do mandato</p>

<p>A estabilidade se aplica apenas ao <strong>representante eleito pelos empregados</strong> (titular e suplente). O representante indicado pelo empregador não tem estabilidade.</p>

<h2>4. Estabilidade do dirigente sindical</h2>

<p><strong>Base legal:</strong> Art. 8º, VIII da Constituição Federal e art. 543, §3º da CLT</p>

<p><strong>Período:</strong> do registro da candidatura até 1 ano após o término do mandato</p>

<p>Limite: até 7 dirigentes sindicais por sindicato têm direito à estabilidade.</p>

<h2>5. Estabilidade pré-aposentadoria</h2>

<p><strong>Base legal:</strong> Convenções e acordos coletivos de trabalho</p>

<p><strong>Período:</strong> geralmente 12 a 24 meses antes de completar os requisitos para aposentadoria</p>

<p>Essa estabilidade <strong>não está na CLT</strong> — é garantida por norma coletiva. Verifique a convenção da sua categoria.</p>

<h2>6. Estabilidade do trabalhador reabilitado</h2>

<p><strong>Base legal:</strong> Art. 93, §1º da Lei 8.213/91</p>

<p>Empresas com 100 ou mais empregados são obrigadas a preencher cotas para reabilitados e pessoas com deficiência. A demissão só é possível se outro trabalhador em condição semelhante for contratado no lugar.</p>

<h2>7. Estabilidade por norma coletiva</h2>

<p>Convenções coletivas podem criar estabilidades adicionais, como:</p>

<ul>
<li>Estabilidade após retorno de férias (30 dias)</li>
<li>Estabilidade pós-cirurgia</li>
<li>Estabilidade do trabalhador com doença grave</li>
</ul>

<p>Consulte sempre a convenção coletiva da sua categoria.</p>

<h2>O que acontece se a empresa demitir durante a estabilidade?</h2>

<p>A demissão durante o período de estabilidade é <strong>nula</strong>. O trabalhador pode pedir:</p>

<ul>
<li><strong>Reintegração:</strong> retorno ao emprego nas mesmas condições</li>
<li><strong>Indenização substitutiva:</strong> pagamento de todos os salários e direitos do período de estabilidade restante (quando a reintegração não é viável)</li>
</ul>

<h2>Exceção: justa causa</h2>

<p>A estabilidade <strong>não protege</strong> contra demissão por justa causa. Se o trabalhador cometer falta grave (art. 482, CLT), pode ser demitido mesmo durante o período de estabilidade. Porém, no caso do dirigente sindical, é necessário <strong>inquérito judicial para apuração de falta grave</strong> (art. 853, CLT).</p>

<h2>O que fazer agora</h2>

<p>Se você está em alguma das situações de estabilidade e foi demitido ou está sendo ameaçado de demissão, não aceite passivamente. A lei está do seu lado.</p>

<p><strong>Foi demitido durante período de estabilidade?</strong> <a href="/contato">Fale com a nossa equipe</a>. Analisamos seu caso e buscamos a reintegração ou indenização devida.</p>
`,
  },

  // ── 23. Auxílio-Doença vs Aposentadoria por Invalidez ────────────────
  {
    slug: "diferenca-auxilio-doenca-aposentadoria-invalidez",
    title: "Diferença Entre Auxílio-Doença e Aposentadoria por Invalidez",
    metaTitle: "Auxílio-Doença vs Aposentadoria por Invalidez: Diferenças 2026",
    metaDescription:
      "Entenda as diferenças entre auxílio-doença e aposentadoria por invalidez: requisitos, valores, duração e quando um pode virar o outro.",
    excerpt:
      "Incapacidade temporária ou permanente? A diferença define qual benefício do INSS você recebe. Entenda de forma clara quando cada um se aplica.",
    category: "Previdenciário",
    date: "2026-03-24",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?w=800&q=80",
    content: `
<p>Muita gente confunde o <strong>auxílio-doença</strong> (hoje chamado de auxílio por incapacidade temporária) com a <strong>aposentadoria por invalidez</strong> (aposentadoria por incapacidade permanente). Embora ambos sejam benefícios por incapacidade, as diferenças são significativas. Veja quando cada um se aplica.</p>

<h2>Visão geral comparativa</h2>

<table>
<thead>
<tr><th>Critério</th><th>Auxílio-doença</th><th>Aposentadoria por invalidez</th></tr>
</thead>
<tbody>
<tr><td><strong>Incapacidade</strong></td><td>Temporária</td><td>Permanente (total e para qualquer trabalho)</td></tr>
<tr><td><strong>Nome atual</strong></td><td>Auxílio por incapacidade temporária</td><td>Aposentadoria por incapacidade permanente</td></tr>
<tr><td><strong>Duração</strong></td><td>Enquanto durar a incapacidade</td><td>Indefinida (mas pode ser reavaliada)</td></tr>
<tr><td><strong>Carência</strong></td><td>12 contribuições (exceto acidente e doenças graves)</td><td>12 contribuições (mesmas exceções)</td></tr>
<tr><td><strong>Valor</strong></td><td>91% do salário de benefício</td><td>60% + 2% por ano acima de 15/20 anos</td></tr>
<tr><td><strong>Pode trabalhar?</strong></td><td>Não (enquanto receber)</td><td>Não (perda do benefício se voltar)</td></tr>
<tr><td><strong>Adicional 25%</strong></td><td>Não se aplica</td><td>Sim (se precisar de acompanhante)</td></tr>
</tbody>
</table>

<h2>Auxílio-doença: quando se aplica</h2>

<p>O auxílio-doença é concedido quando o segurado está <strong>temporariamente incapacitado</strong> para exercer sua atividade habitual. A expectativa é que, com tratamento, ele se recupere e retorne ao trabalho.</p>

<p>Exemplos comuns:</p>

<ul>
<li>Fratura que exige repouso de 3 meses</li>
<li>Cirurgia com período de recuperação</li>
<li>Transtorno psiquiátrico agudo com tratamento em andamento</li>
<li>Doença que responde bem ao tratamento médico</li>
</ul>

<h2>Aposentadoria por invalidez: quando se aplica</h2>

<p>A aposentadoria por invalidez é concedida quando o segurado está <strong>total e permanentemente incapacitado</strong> para qualquer atividade laborativa, sem possibilidade de reabilitação profissional.</p>

<p>Exemplos comuns:</p>

<ul>
<li>Doença degenerativa em estágio avançado</li>
<li>Sequelas graves de acidente (paraplegia, amputação)</li>
<li>Cegueira total bilateral</li>
<li>Doença psiquiátrica crônica grave</li>
<li>Câncer em estágio terminal ou com sequelas permanentes</li>
</ul>

<h2>Como o auxílio-doença vira aposentadoria por invalidez</h2>

<p>Na prática, é comum o seguinte fluxo:</p>

<ol>
<li>Trabalhador se afasta e recebe <strong>auxílio-doença</strong></li>
<li>Após tratamento prolongado, a perícia do INSS constata que <strong>não houve melhora</strong></li>
<li>O perito conclui que a incapacidade é <strong>permanente</strong></li>
<li>O INSS converte o auxílio-doença em <strong>aposentadoria por invalidez</strong></li>
</ol>

<p>Essa conversão pode ser feita administrativamente (pelo próprio INSS) ou judicialmente (por determinação de um juiz).</p>

<h2>Valor dos benefícios: diferenças importantes</h2>

<h3>Auxílio-doença</h3>

<p>O valor é de <strong>91% do salário de benefício</strong> (média de todos os salários desde julho/1994). Não pode ser inferior ao salário mínimo.</p>

<h3>Aposentadoria por invalidez</h3>

<p>Após a reforma de 2019, o cálculo mudou: <strong>60% da média + 2% por ano acima de 15 anos (mulheres) ou 20 anos (homens)</strong>. Exceção: se a incapacidade decorrer de acidente de trabalho, o valor é de 100% da média.</p>

<p>Isso significa que, em muitos casos, o auxílio-doença (91%) tem <strong>valor maior</strong> que a aposentadoria por invalidez. Parece contraditório, mas é a regra atual.</p>

<h2>Adicional de 25% (grande invalidez)</h2>

<p>Se o aposentado por invalidez precisa de <strong>assistência permanente de outra pessoa</strong> (para se vestir, alimentar, higienizar etc.), tem direito ao adicional de 25% sobre o valor do benefício, mesmo que ultrapasse o teto do INSS.</p>

<h2>Revisão periódica: o INSS pode cancelar?</h2>

<p>Sim. O INSS pode convocar o aposentado por invalidez para <strong>perícia de revisão</strong> a qualquer tempo. Se o perito considerar que houve recuperação, o benefício pode ser:</p>

<ul>
<li><strong>Cancelado imediatamente</strong> (se a recuperação for total)</li>
<li><strong>Convertido em auxílio-doença</strong> (se a incapacidade ainda for parcial)</li>
<li><strong>Mantido com redução gradual</strong> (se o segurado está em processo de readaptação)</li>
</ul>

<p>Exceção: aposentados por invalidez há mais de 15 anos ou com mais de 60 anos de idade estão isentos da revisão periódica.</p>

<h2>O que fazer agora</h2>

<p>Se você está recebendo auxílio-doença e sua condição não melhora, pode ser hora de pedir a conversão em aposentadoria por invalidez. Se já foi aposentado por invalidez e o INSS está convocando para revisão, prepare sua documentação médica atualizada.</p>

<p><strong>Precisa converter auxílio-doença em aposentadoria ou recorrer de uma revisão?</strong> <a href="/contato">Fale com a nossa equipe</a>. Orientamos todo o processo e protegemos seu benefício.</p>
`,
  },

  // ── 24. Como Pedir BPC/LOAS ──────────────────────────────────────────
  {
    slug: "como-pedir-bpc-loas-documentos-requisitos-passo-a-passo",
    title: "Como Pedir BPC/LOAS: Documentos, Requisitos e Passo a Passo",
    metaTitle: "BPC/LOAS 2026: Como Pedir, Requisitos e Documentos",
    metaDescription:
      "Guia completo para pedir o BPC/LOAS em 2026: quem tem direito, documentos necessários, como se inscrever no CadÚnico e passo a passo pelo Meu INSS.",
    excerpt:
      "O BPC é um salário mínimo mensal para idosos e pessoas com deficiência de baixa renda. Saiba se você tem direito e como pedir.",
    category: "Previdenciário",
    date: "2026-03-28",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=800&q=80",
    content: `
<p>O <strong>BPC (Benefício de Prestação Continuada)</strong>, previsto na LOAS (Lei Orgânica da Assistência Social), é um benefício assistencial que garante <strong>1 salário mínimo mensal</strong> (R$1.518 em 2026) para idosos com 65 anos ou mais e pessoas com deficiência de longa duração, desde que comprovem baixa renda. Não é aposentadoria e não exige contribuição ao INSS.</p>

<h2>Quem tem direito ao BPC</h2>

<h3>Idoso</h3>

<ul>
<li>Idade: <strong>65 anos ou mais</strong></li>
<li>Renda familiar per capita: até <strong>1/4 do salário mínimo</strong> (R$379,50 em 2026)</li>
<li>Inscrição no <strong>CadÚnico</strong> atualizada</li>
</ul>

<h3>Pessoa com deficiência</h3>

<ul>
<li>Deficiência de <strong>natureza física, mental, intelectual ou sensorial de longo prazo</strong> (pelo menos 2 anos)</li>
<li>Impedimento que dificulte a participação plena na sociedade</li>
<li>Renda familiar per capita: até <strong>1/4 do salário mínimo</strong></li>
<li>Inscrição no <strong>CadÚnico</strong> atualizada</li>
</ul>

<h2>Como calcular a renda per capita</h2>

<p>A renda per capita é calculada dividindo a <strong>renda bruta total da família</strong> pelo <strong>número de membros</strong> que moram na mesma casa. O BPC de outro membro idoso da família <strong>não entra no cálculo</strong>.</p>

<p>Exemplo: família de 4 pessoas com renda total de R$1.518 (1 salário mínimo). Per capita: R$1.518 ÷ 4 = R$379,50. Atinge o limite exato de 1/4 do salário mínimo.</p>

<p><strong>Atenção:</strong> a Justiça tem flexibilizado esse critério. Decisões judiciais aceitam renda per capita de até <strong>1/2 salário mínimo</strong> quando comprovada a vulnerabilidade social. Se sua renda ultrapassa levemente o limite, vale buscar orientação jurídica.</p>

<h2>Passo a passo para pedir o BPC</h2>

<h3>1. Inscrição no CadÚnico</h3>

<p>Antes de pedir o BPC, toda a família precisa estar inscrita no <strong>CadÚnico</strong>:</p>

<ol>
<li>Procure o <strong>CRAS (Centro de Referência de Assistência Social)</strong> mais próximo</li>
<li>Leve documentos de todos os membros da família (RG, CPF, comprovante de residência, comprovante de renda)</li>
<li>Após o cadastro, aguarde a atualização no sistema (pode levar até 45 dias)</li>
</ol>

<h3>2. Pedido pelo Meu INSS</h3>

<ol>
<li>Acesse o <strong>Meu INSS</strong> ou ligue para o <strong>135</strong></li>
<li>Clique em <strong>"Novo Pedido"</strong></li>
<li>Busque por <strong>"Benefício Assistencial à Pessoa com Deficiência"</strong> ou <strong>"Benefício Assistencial ao Idoso"</strong></li>
<li>Preencha os dados solicitados</li>
<li>Anexe documentos médicos (se for pessoa com deficiência)</li>
<li>Protocole o pedido</li>
</ol>

<h3>3. Avaliação (somente para pessoa com deficiência)</h3>

<p>Se o pedido é para pessoa com deficiência, haverá duas avaliações:</p>

<ul>
<li><strong>Avaliação médica:</strong> perícia do INSS para verificar a deficiência</li>
<li><strong>Avaliação social:</strong> feita por assistente social para verificar as condições de vida</li>
</ul>

<h2>Documentos necessários</h2>

<ul>
<li>Documento de identidade e CPF de todos os membros da família</li>
<li>Comprovante de residência atualizado</li>
<li>Comprovante de renda de todos (contracheques, declaração de renda, extrato bancário)</li>
<li>Número do NIS (Cadastro Social) — gerado no CadÚnico</li>
<li><strong>Para pessoa com deficiência:</strong> laudos médicos, exames, relatórios de tratamento</li>
</ul>

<h2>Características importantes do BPC</h2>

<ul>
<li><strong>Não é aposentadoria:</strong> é benefício assistencial, sem necessidade de contribuição</li>
<li><strong>Não dá direito a 13º salário</strong></li>
<li><strong>Não é transferível:</strong> não gera pensão por morte</li>
<li><strong>Revisão a cada 2 anos:</strong> o INSS verifica se os requisitos continuam sendo atendidos</li>
<li><strong>Pode ser acumulado:</strong> dois idosos na mesma família podem receber BPC cada um (e o benefício de um não conta na renda para o do outro)</li>
</ul>

<h2>Quanto tempo demora?</h2>

<p>O prazo médio de análise do BPC é de <strong>90 a 180 dias</strong>. Se incluir perícia médica e avaliação social, pode levar mais. Se ultrapassar 90 dias, cabe mandado de segurança.</p>

<h2>E se for negado?</h2>

<p>As opções são as mesmas dos demais benefícios do INSS:</p>

<ul>
<li><strong>Recurso administrativo:</strong> 30 dias</li>
<li><strong>Ação judicial:</strong> a Justiça tem sido mais flexível com o critério de renda</li>
</ul>

<h2>O que fazer agora</h2>

<p>Se você ou alguém da sua família é idoso (65+) ou pessoa com deficiência e a renda familiar é baixa, verifique se o CadÚnico está atualizado e dê entrada no BPC pelo Meu INSS.</p>

<p><strong>Precisa de ajuda para pedir o BPC ou teve o pedido negado?</strong> <a href="/contato">Fale com a nossa equipe</a>. Orientamos todo o processo e, se necessário, recorremos judicialmente.</p>
`,
  },

  // ── 25. Calendário de Pagamentos INSS 2026 ───────────────────────────
  {
    slug: "calendario-pagamentos-inss-2026-datas-final-beneficio",
    title: "Calendário de Pagamentos INSS 2026: Datas por Final do Benefício",
    metaTitle: "Calendário INSS 2026: Datas de Pagamento Por Final do Benefício",
    metaDescription:
      "Consulte o calendário completo de pagamentos do INSS em 2026. Datas organizadas por final do número do benefício. Saiba quando cai seu pagamento.",
    excerpt:
      "Não sabe quando cai o pagamento do INSS? Consulte o calendário completo de 2026 com datas organizadas pelo final do número do seu benefício.",
    category: "Previdenciário",
    date: "2026-04-01",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?w=800&q=80",
    content: `
<p>O INSS paga os benefícios seguindo um <strong>calendário mensal</strong> organizado pelo <strong>último dígito do número do benefício</strong> (sem considerar o dígito verificador). Se você recebe aposentadoria, pensão, auxílio-doença ou BPC, consulte abaixo quando cai o pagamento em 2026.</p>

<h2>Como funciona o calendário</h2>

<p>O INSS divide os pagamentos em dois grupos:</p>

<ul>
<li><strong>Benefícios de até 1 salário mínimo:</strong> pagos primeiro (geralmente entre os dias 24 e 7 do mês seguinte)</li>
<li><strong>Benefícios acima de 1 salário mínimo:</strong> pagos depois (geralmente entre os dias 1 e 7 do mês seguinte)</li>
</ul>

<p>A ordem é determinada pelo <strong>último dígito do número do benefício</strong> (NB). O número do benefício está no cartão de pagamento, no extrato do INSS ou no aplicativo Meu INSS.</p>

<h2>Onde encontrar o número do benefício</h2>

<ol>
<li>Acesse o <strong>Meu INSS</strong></li>
<li>Na tela inicial, seu benefício aparece com o número (ex.: 123.456.789-0)</li>
<li>O <strong>último dígito antes do hífen</strong> é o que define a data de pagamento (no exemplo, seria o dígito 9)</li>
</ol>

<h2>Calendário geral de pagamentos 2026</h2>

<p>O calendário abaixo mostra a <strong>ordem de pagamento</strong> por último dígito. As datas exatas variam mês a mês e são publicadas pelo INSS no início de cada ano:</p>

<table>
<thead>
<tr><th>Final do benefício</th><th>Ordem de pagamento</th><th>Dia aproximado (até 1 SM)</th><th>Dia aproximado (acima de 1 SM)</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>1º a receber</td><td>25 do mês</td><td>1º do mês seguinte</td></tr>
<tr><td>2</td><td>2º</td><td>26 do mês</td><td>2 do mês seguinte</td></tr>
<tr><td>3</td><td>3º</td><td>27 do mês</td><td>3 do mês seguinte</td></tr>
<tr><td>4</td><td>4º</td><td>28 do mês</td><td>4 do mês seguinte</td></tr>
<tr><td>5</td><td>5º</td><td>29 do mês</td><td>5 do mês seguinte</td></tr>
<tr><td>6</td><td>6º</td><td>1º do mês seguinte</td><td>6 do mês seguinte</td></tr>
<tr><td>7</td><td>7º</td><td>2 do mês seguinte</td><td>7 do mês seguinte</td></tr>
<tr><td>8</td><td>8º</td><td>3 do mês seguinte</td><td>1º dia útil seguinte</td></tr>
<tr><td>9</td><td>9º</td><td>4 do mês seguinte</td><td>1º dia útil seguinte</td></tr>
<tr><td>0</td><td>10º (último)</td><td>5 do mês seguinte</td><td>1º dia útil seguinte</td></tr>
</tbody>
</table>

<p><strong>Obs.:</strong> quando a data cai em final de semana ou feriado, o pagamento é antecipado para o último dia útil anterior.</p>

<h2>Calendário mês a mês — 1º semestre 2026</h2>

<h3>Janeiro 2026 (referente a dezembro 2025)</h3>

<p>Pagamentos de 26/01 a 07/02 (até 1 SM) e de 01/02 a 07/02 (acima de 1 SM).</p>

<h3>Fevereiro 2026</h3>

<p>Pagamentos de 24/02 a 07/03. Atenção ao Carnaval: datas podem ser antecipadas.</p>

<h3>Março 2026</h3>

<p>Pagamentos de 25/03 a 07/04.</p>

<h3>Abril 2026</h3>

<p>Pagamentos de 24/04 a 07/05. Atenção ao feriado de Tiradentes (21/04).</p>

<h3>Maio 2026</h3>

<p>Pagamentos de 25/05 a 05/06.</p>

<h3>Junho 2026</h3>

<p>Pagamentos de 24/06 a 07/07. Atenção ao feriado de Corpus Christi.</p>

<h2>Como consultar o calendário atualizado</h2>

<p>O calendário oficial completo é publicado pelo INSS através de <strong>portaria</strong> no início de cada ano. Para consultar:</p>

<ol>
<li>Acesse o <strong>Meu INSS</strong></li>
<li>Vá em <strong>"Consultar Calendário de Pagamentos"</strong></li>
<li>Ou acesse o site gov.br/inss e busque por "calendário de pagamentos 2026"</li>
</ol>

<h2>Formas de receber o benefício</h2>

<ul>
<li><strong>Conta bancária:</strong> o benefício é depositado na conta indicada no cadastro</li>
<li><strong>Cartão magnético:</strong> para saque em terminais e agências</li>
<li><strong>Conta poupança social digital (Caixa Tem):</strong> opção mais moderna, sem necessidade de ir ao banco</li>
</ul>

<h2>Dicas importantes</h2>

<ul>
<li><strong>Mantenha dados bancários atualizados:</strong> se mudar de banco, atualize pelo Meu INSS ou pelo 135</li>
<li><strong>Cuidado com empréstimos consignados:</strong> o desconto é feito diretamente no benefício</li>
<li><strong>Prova de vida:</strong> faça anualmente pelo app Gov.br (biometria facial) ou presencialmente no banco. Se não fizer, o benefício pode ser suspenso</li>
</ul>

<h2>O que fazer agora</h2>

<p>Identifique o último dígito do seu benefício e consulte o calendário para saber exatamente quando cai seu pagamento. Se houver atraso, entre em contato pelo 135 ou vá à agência do INSS.</p>

<p><strong>Seu benefício está atrasado ou foi suspenso?</strong> <a href="/contato">Fale com a nossa equipe</a>. Verificamos a situação e tomamos as providências para regularizar seu pagamento.</p>
`,
  },
];
