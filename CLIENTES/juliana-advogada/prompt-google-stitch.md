# PROMPT PARA GOOGLE STITCH — Site Dra. Juliana Darin da Cunha

---

## CONTEXTO DO PROJETO

Crie um site completo, extremamente profissional e moderno para a **Dra. Juliana Darin da Cunha**, advogada especialista em **Direito Trabalhista e Direito Previdenciário**.

O site deve transmitir **autoridade, sofisticação e confiança** — como um escritório de advocacia premium. O público são trabalhadores que precisam de ajuda jurídica, então o design deve ser elegante mas acessível, nunca intimidador.

---

## IDENTIDADE VISUAL OBRIGATÓRIA

### Paleta de Cores (Dark Luxury)
- **Fundo principal:** Navy escuro #0A1628
- **Fundo secundário:** #111D33
- **Fundo terciário:** #1A2940
- **Dourado principal:** #C9A84C
- **Dourado claro:** #DFC06A
- **Dourado glow:** rgba(201, 168, 76, 0.15)
- **Texto primário:** #F1F1F1
- **Texto secundário:** #94A3B8
- **Texto muted:** #64748B
- **Bordas:** rgba(201, 168, 76, 0.15)
- **Branco para contraste:** #FFFFFF (usar com moderação)

### Tipografia
- **Headlines (H1, H2, H3):** Fonte serifada elegante — usar Playfair Display ou similar com serifa
- **Body text:** Fonte sans-serif clean — usar Inter, DM Sans ou similar
- **Tamanhos:** H1 = 48-60px, H2 = 32-40px, H3 = 22-28px, Body = 16-18px, Small = 13-14px
- **Line height:** Headlines = 1.1, Body = 1.7-1.8

### Efeitos Visuais (USAR EM TODO O SITE)
- **Glassmorphism** nos cards: background rgba(255,255,255,0.03), backdrop-filter blur(12px), border 1px solid rgba(201,168,76,0.15), border-radius 16px
- **Gradiente dourado** em textos de destaque: linear-gradient(135deg, #C9A84C, #DFC06A, #C9A84C) como background-clip text
- **Orbs de luz** decorativos: círculos gigantes (400-500px) com blur(120px) e opacity 0.03-0.04 em dourado e azul, espalhados pelo fundo
- **Grid de pontos** sutil no fundo: radial-gradient com pontos dourados opacity 0.06
- **Hover nos cards:** borda fica mais dourada, leve transform scale(1.02)
- **Barras douradas verticais** (4px) como detalhe em listas e cards de serviço
- **Section dividers:** linha de 60px com gradiente dourado que vai do opaco ao transparente
- **Sombras douradas** nos botões: box-shadow 0 0 30px rgba(201,168,76,0.3)
- **Scrollbar customizada:** fina, com thumb na cor navy-lighter

### Imagens (GERE TODAS COM IA)
- **Hero:** Imagem de fundo sutil de escritório de advocacia moderno (mesa escura, livros jurídicos, iluminação quente). Aplique overlay escuro para manter a legibilidade
- **Seção Trabalhista:** Imagem atmosférica de ambiente de trabalho (capacete de segurança, mãos de trabalhador) com tom quente
- **Seção Previdenciária:** Imagem de pessoa idosa serena ou família (transmitir proteção), tom azulado
- **Seção Sobre:** Placeholder elegante com iniciais "JD" em monograma dourado dentro de círculo com borda dourada (120px)
- **Blog cards:** Cada card com ícone ou ilustração sutil relacionada ao tema
- **Background textures:** Mármol escuro sutil ou textura de couro em algumas seções para sofisticação

---

## ESTRUTURA DO SITE (6 PÁGINAS)

---

### PÁGINA 1: HOME (Landing Page Principal)

#### Seção 1: HERO (Full viewport, impacto máximo)
- Ocupa 100vh (tela inteira)
- Imagem de fundo: escritório de advocacia escuro e elegante com overlay navy
- Grid de pontos sutil no fundo
- Orbs de luz dourada e azul nos cantos (decorativos, desfocados)

**Conteúdo:**
- Badge no topo: pílula com borda dourada, texto "DIREITO TRABALHISTA & PREVIDENCIÁRIO" em dourado, letras maiúsculas, tracking largo
- H1 grande e impactante (48-60px):
  ```
  Seus direitos não esperam.
  Sua defesa também não.
  ```
  A segunda linha em gradiente dourado
- Subtítulo (18px, cor secundária, max-width 560px):
  ```
  Empresa violou seus direitos? INSS negou seu benefício? Cada dia sem ação é um dia de prejuízo. Consulta inicial gratuita com advogada especialista.
  ```
- 2 botões lado a lado:
  - Botão primário: "Consulta Gratuita →" (fundo dourado, texto navy, sombra glow dourada, border-radius 10px)
  - Botão secundário: "Conheça meus serviços" (fundo transparente, borda fina, texto branco)
- 3 estatísticas embaixo (com delay de animação):
  - "500+" — Clientes atendidos
  - "93%" — Taxa de êxito
  - "R$0" — Custo inicial
  Os números em dourado grande (32px, fonte display), labels em cinza pequeno (13px)

#### Seção 2: DIFERENCIAIS (fundo navy-light)
- Título centralizado: "Por que escolher a **Dra. Juliana**" (Dra. Juliana em gradiente dourado)
- Subtítulo: "Atendimento especializado para quem precisa de justiça — sem burocracia, sem custo inicial."
- Section divider dourada centralizada acima do título
- 4 cards em grid (glassmorphism):
  1. ⚖️ "Especialista de Verdade" — "Foco exclusivo em Trabalhista e Previdenciário. Não sou generalista."
  2. 🤝 "Sem Custo Inicial" — "Honorários de êxito — você só paga se ganhar a causa."
  3. 💬 "Sem Juridiquês" — "Cada etapa explicada em linguagem que você entende."
  4. 📱 "Atendimento Online" — "Consulta por videochamada. Sem sair de casa, sem perder tempo."

#### Seção 3: SERVIÇOS TRABALHISTAS (fundo navy principal)
- Layout: título à esquerda + link "Ver todos →" à direita
- Título: "Direito **Trabalhista**" (Trabalhista em dourado)
- Subtítulo: "Defesa completa dos seus direitos como trabalhador"
- 6 cards em grid 2 colunas (glass, com barra dourada vertical de 4px à esquerda):
  1. "Acidente de Trabalho" — "Indenização, estabilidade e benefícios para quem sofreu acidente ou doença no trabalho."
  2. "Vínculo Empregatício" — "Reconhecimento de vínculo para quem trabalhou sem carteira assinada."
  3. "Horas Extras" — "Cálculo e cobrança de horas extras não pagas — retroativo até 5 anos."
  4. "Rescisão Indireta" — "Quando você pode 'demitir' a empresa e receber todos os direitos."
  5. "Periculosidade" — "Adicional de 30% para quem trabalha em condições de risco."
  6. "Insalubridade" — "Adicional de 10% a 40% para exposição a agentes nocivos."

#### Seção 4: SERVIÇOS PREVIDENCIÁRIOS (fundo navy-light)
- Mesmo layout da seção 3, mas com:
- Título: "Direito **Previdenciário**" (Previdenciário em dourado)
- Subtítulo: "INSS negou? A Justiça pode reverter."
- 6 cards:
  1. "Auxílio-Acidente" — "Benefício mensal para quem ficou com sequela de acidente."
  2. "Aposentadoria por Invalidez" — "Benefício para incapacidade permanente total."
  3. "Aposentadoria Negada" — "Recursos e ações judiciais contra negativas do INSS."
  4. "Pensão por Morte" — "Proteção financeira para dependentes do segurado falecido."
  5. "BPC/LOAS" — "1 salário mínimo para idosos e deficientes em vulnerabilidade."
  6. "Planejamento Previdenciário" — "Análise da melhor regra para sua aposentadoria."

#### Seção 5: BLOG RECENTES (fundo navy)
- Título: "Blog **Jurídico**" (Jurídico em dourado)
- 3 cards em grid (glass), cada um com:
  - Tag de categoria (dourado para Trabalhista, azul #60a5fa para Previdenciário)
  - Título do artigo (fonte display, 18px)
  - Excerpt (14px, cor secundária)
  - "Ler artigo →" em dourado
- Os 3 posts:
  1. [Trabalhista] "Sofreu Acidente de Trabalho? Os 5 Direitos Que Sua Empresa Vai Tentar Esconder"
  2. [Trabalhista] "Trabalhou Sem Carteira Assinada? A Empresa Deve Cada Centavo"
  3. [Trabalhista] "Horas Extras Não Pagas? Veja Quanto a Empresa Deve"

#### Seção 6: CTA FINAL (fundo navy-light)
- Card centralizado com borda dourada sutil e gradiente dourado dim no fundo
- H2: "Não deixe seus direitos **prescreverem**" (prescreverem em dourado)
- Texto: "A prescrição trabalhista é de 2 anos. A previdenciária pode significar meses de benefício perdido. Cada dia conta."
- Botão grande: "Fale Agora Com a Dra. Juliana →" (dourado, glow, impactante)

---

### PÁGINA 2: DIREITO TRABALHISTA

#### Hero
- H1: "Seus Direitos Trabalhistas Foram Violados? **Descubra Como Reagir**" (parte dourada)
- Texto: "Um trabalhador brasileiro perde, em média, R$47 mil em direitos não cobrados ao longo da carreira. A maioria nem desconfia."
- Botão: "Analisar Meu Caso Gratuitamente →"

#### Cards de Serviço (6 cards com ícone, título, descrição detalhada):
1. 🏥 Acidente de Trabalho — "Estabilidade de 12 meses, indenização de R$15 mil a R$200 mil, pensão vitalícia. A empresa responde se foi negligente."
2. 📋 Vínculo Empregatício — "Trabalhou sem carteira? A empresa deve FGTS, INSS, férias, 13º — tudo retroativo. Prints de WhatsApp são prova."
3. ⏰ Horas Extras — "2h extras/dia com salário de R$2.500 valem R$51 mil em 5 anos. Banco de horas informal é nulo."
4. 🚪 Rescisão Indireta — "Empresa atrasa salário ou pratica assédio? Você pode sair com todos os direitos da demissão sem justa causa."
5. ⚡ Periculosidade — "30% sobre o salário base para quem trabalha com eletricidade, inflamáveis, explosivos ou segurança."
6. 🧪 Insalubridade — "10% a 40% sobre o salário mínimo para exposição a ruído, calor, frio, produtos químicos ou agentes biológicos."

#### Seção de Urgência
- Texto centralizado: "Você tem **2 anos** após sair da empresa para entrar com ação trabalhista. A ação cobre os **últimos 5 anos** de direitos não pagos."
- Botão CTA grande

#### Artigos Relacionados (3 blog posts trabalhistas)

---

### PÁGINA 3: DIREITO PREVIDENCIÁRIO

#### Hero
- H1: "INSS Negou Seu Benefício? **41% São Revertidos na Justiça**"
- Texto: "Você contribuiu por anos. Quando mais precisou, recebeu um 'indeferido'. O INSS erra — e conta com o fato de que a maioria não vai recorrer."
- Botão: "Analisar Meu Caso Gratuitamente →"

#### Cards de Serviço (7 cards):
1. 🩹 Auxílio-Acidente — "50% do salário de benefício pago JUNTO com o salário. Para quem ficou com sequela de acidente."
2. 🏠 Aposentadoria por Invalidez — "Renda para quem não consegue mais trabalhar. O valor depende da causa e do tempo de contribuição."
3. ❌ Aposentadoria Negada — "41% das negativas do INSS são revertidas na Justiça. Recurso ou ação judicial com retroativo."
4. 🖤 Pensão por Morte — "Proteção para dependentes do segurado falecido. Prazo de 180 dias afeta o valor retroativo."
5. 📋 Auxílio-Doença Negado — "Perícia do INSS durou 15 minutos? Perícia judicial é mais detalhada e independente."
6. 🤝 BPC/LOAS — "R$1.518/mês para idosos 65+ e deficientes em baixa renda. Sem contribuição. 47% dos pedidos são negados."
7. 📊 Planejamento Previdenciário — "7 regras de transição ativas. A escolha errada pode custar R$100 mil ao longo da aposentadoria."

#### CTA: "O INSS disse **não**. A Justiça pode dizer **sim**."

---

### PÁGINA 4: SOBRE A DRA. JULIANA

#### Bio com foto/monograma
- Monograma "JD" dentro de círculo dourado (120px), elegante
- Nome: "Dra. Juliana Darin da Cunha"
- Subtítulo em dourado: "ADVOGADA TRABALHISTA E PREVIDENCIÁRIA"
- Bio em 3 parágrafos:
  ```
  Sou advogada especialista em Direito do Trabalho e Direito Previdenciário. Escolhi essas áreas por um motivo simples: são as que mais impactam a vida de quem vive do próprio trabalho.

  Quando um trabalhador perde o emprego injustamente, quando o INSS nega um benefício a quem mais precisa, quando uma família fica desamparada — é nesses momentos que o Direito precisa funcionar. E é exatamente aí que eu atuo.

  Acredito que o acesso à Justiça não pode ser privilégio. Por isso, trabalho com honorários de êxito na maioria dos casos — você só paga se ganhar.
  ```

#### 3 Valores (cards com barra dourada):
1. "Sem juridiquês" — "Você entende cada passo do processo, cada documento e cada decisão."
2. "Sem promessas vazias" — "Se você não tem direito, eu digo. Se tem, mostro exatamente o caminho."
3. "Sem você ser um número" — "Cada processo tem nome, história e atenção dedicada."

#### CTA: "Primeiro passo: uma conversa" com botão WhatsApp

---

### PÁGINA 5: BLOG (Listagem)

#### Header
- H1: "Blog **Jurídico**" (Jurídico em dourado)
- Subtítulo: "Conteúdo prático sobre seus direitos trabalhistas e previdenciários. Sem juridiquês, com dados concretos."

#### Grid de 10 cards (3 colunas no desktop):
Cada card tem:
- Tag colorida (dourado = Trabalhista, azul = Previdenciário)
- Tempo de leitura
- Título (fonte display, 18px)
- Excerpt (14px)
- "Ler artigo completo →" em dourado

Os 10 posts:
1. [Trabalhista] "Sofreu Acidente de Trabalho? Os 5 Direitos Que Sua Empresa Vai Tentar Esconder"
2. [Trabalhista] "Trabalhou Sem Carteira Assinada? A Empresa Deve Cada Centavo"
3. [Trabalhista] "Horas Extras Não Pagas? Veja Quanto a Empresa Deve"
4. [Trabalhista] "Rescisão Indireta: Você Pode 'Demitir' a Empresa e Receber Todos os Seus Direitos"
5. [Previdenciário] "Auxílio-Acidente: O Benefício do INSS Que Você Pode Receber Junto Com o Salário"
6. [Previdenciário] "Aposentadoria por Invalidez: O Guia Definitivo Para Quem Não Consegue Mais Trabalhar"
7. [Previdenciário] "Aposentadoria Negada Pelo INSS? O Que Fazer Nos Próximos 30 Dias"
8. [Previdenciário] "Pensão por Morte: O Prazo de 180 Dias Pode Custar Milhares de Reais"
9. [Trabalhista] "Adicional de Periculosidade e Insalubridade: O Dinheiro Que Pode Estar Faltando"
10. [Previdenciário] "BPC/LOAS: Como Receber 1 Salário Mínimo do INSS Sem Nunca Ter Contribuído"

---

### PÁGINA 6: POST DE BLOG (Template)

Criar UM post completo como exemplo: **"Sofreu Acidente de Trabalho? Os 5 Direitos Que Sua Empresa Vai Tentar Esconder"**

#### Layout do artigo:
- Header com breadcrumb: Blog › Trabalhista
- Tag de categoria colorida
- H1 grande (fonte display, 36-42px)
- Metadados: "Dra. Juliana Darin da Cunha • 20 de março de 2026 • 8 min de leitura"
- Conteúdo max-width 780px centralizado

#### Conteúdo completo do post:

**Primeiro parágrafo (HOOK — máximo 2 frases, impactante):**
Na semana passada, um operador de empilhadeira me ligou desesperado. Fraturou o pé no galpão, a empresa disse que "foi descuido dele" e se recusou a emitir a CAT.

**H2: O Que Conta Como Acidente de Trabalho**
Acidente de trabalho não é só queda ou corte na fábrica. A lei brasileira (art. 19-21 da Lei 8.213/91) considera:
- Acidente típico: o evento súbito no local de trabalho
- Doença ocupacional: LER/DORT, perda auditiva, problemas na coluna
- Acidente de trajeto: no caminho casa-trabalho-casa
- Concausa: doença que você já tinha, mas o trabalho agravou

Cerca de 612 mil acidentes foram registrados no Brasil em 2023. O número real é estimado em 3x mais.

**H2: Direito 1 — A Empresa É Obrigada a Emitir a CAT em 24 Horas**
A CAT formaliza o acidente. Sem ela, o INSS trata como doença comum e você perde a estabilidade de 12 meses.
Se a empresa não emitir: o sindicato, o médico ou você mesmo pode emitir pelo meu.inss.gov.br.

**H2: Direito 2 — Estabilidade de 12 Meses Após o Retorno**
Após auxílio-doença acidentário (B91), a empresa não pode demitir por 12 meses. Se demitir, a demissão é nula.

**H2: Direito 3 — Indenização Por Danos Morais e Materiais**
Valores médios (dados TST):
- Acidente leve: R$5 mil a R$15 mil
- Moderado com sequela: R$15 mil a R$50 mil
- Grave com incapacidade: R$50 mil a R$200 mil
- Morte: R$100 mil a R$500 mil

**H2: Direito 4 — Pensão Mensal Vitalícia**
Se ficou com sequela que reduz capacidade: pensão mensal paga pela empresa (não INSS).

**H2: Direito 5 — Manutenção do Plano de Saúde**
Empresa não pode cancelar plano durante afastamento pelo INSS.

**H2: O Que Fazer Nas Primeiras 48 Horas**
Lista de 6 passos práticos.

**Box CTA dourado no meio do artigo:**
"📞 Precisa de orientação? A Dra. Juliana oferece consulta inicial gratuita. Fale agora pelo WhatsApp."

**FAQ (4 perguntas em accordion ou lista):**
1. "A empresa não emitiu a CAT. O que faço?"
2. "Acidente no home office conta?"
3. "Doença causada pelo trabalho dá os mesmos direitos?"
4. "Posso ser demitido durante o tratamento?"

**Artigos relacionados** (3 cards no final)

#### Estilização do conteúdo do blog:
- H2: fonte display, 28px, borda inferior dourada sutil, margem superior grande
- H3: fonte display, 20px, cor dourada clara
- Parágrafos: 16-18px, cor secundária, line-height 1.8
- Bold: cor branca (destaque)
- Listas: bullets customizados, espaçamento generoso
- Tabelas: header com fundo navy-lighter e texto dourado, rows com hover sutil
- Blockquotes/CTAs: background dourado dim, borda esquerda dourada, padding generoso

---

## COMPONENTES GLOBAIS

### Header (fixo no topo)
- Fundo: navy com blur e transparência (glassmorphism)
- Borda inferior dourada sutil
- Logo à esquerda: quadrado com borda dourada, iniciais "JD" em dourado + "Dra. Juliana Darin" + "ADVOCACIA" em dourado uppercase
- Menu à direita: Home, Trabalhista, Previdenciário, Blog, Sobre
- Botão "Consulta Gratuita" dourado
- Mobile: hamburger menu elegante

### Footer
- Fundo navy-light, borda superior dourada
- 4 colunas: Brand / Áreas de Atuação / Institucional / Contato
- Botão WhatsApp verde no contato
- Bottom: copyright + disclaimer jurídico
- "© 2026 Dra. Juliana Darin da Cunha — OAB [número]"

### Botão WhatsApp Flutuante
- Canto inferior direito, fixo
- Círculo verde (#25D366) com ícone WhatsApp branco
- Sombra verde glow
- Hover: scale(1.1) + sombra mais forte
- Tamanho: 60px

---

## REGRAS DE DESIGN INEGOCIÁVEIS

1. **NUNCA usar fundo branco.** Todo o site é dark mode (navy escuro)
2. **NUNCA usar texto branco puro em parágrafos.** Usar #94A3B8 para body text
3. **DOURADO é a cor de destaque.** Botões, bordas ativas, gradientes em texto
4. **Espaçamento generoso.** Padding de 100px entre seções no desktop
5. **Cards sempre com glassmorphism.** Nunca cards com fundo sólido
6. **Tipografia serifada nos títulos.** Transmite tradição e autoridade jurídica
7. **Animações sutis.** Fade-up nos elementos ao scroll, transições suaves nos hovers
8. **Mobile-first.** Tudo responsivo, menu hamburger, cards em 1 coluna no mobile
9. **Imagens com overlay escuro.** Nunca imagem clara que quebre o tema dark
10. **Cada seção tem propósito.** Nada decorativo sem função — tudo leva ao WhatsApp/CTA

---

## TOM DO CONTEÚDO

- Profissional mas humano
- Empático com o trabalhador (público vulnerável)
- Dados concretos (R$ valores, percentuais, prazos)
- Zero juridiquês pesado
- Autoridade sem arrogância
- Urgência sem desespero
- NUNCA usar: "neste artigo", "é fundamental", "no mundo atual", "em conclusão"

---

## RESULTADO ESPERADO

Um site que quando qualquer advogado vir, vai pensar: "Quem fez isso?". O nível de sofisticação visual deve ser equivalente a sites como:
- law.com (sofisticação)
- ingracio.adv.br (conteúdo jurídico)
- Apple.com (espaçamento e elegância)
- Linear.app (glassmorphism e dark mode)

O site deve ser entregue como HTML/CSS completo, com todas as páginas navegáveis, imagens geradas, efeitos visuais implementados e 100% responsivo.
