# SEO Autopilot - Especificacao Completa da Plataforma

**Nome do Produto:** SEO Autopilot (nome de trabalho)
**Data:** 2026-03-07
**Tipo:** SaaS B2B - Automacao de SEO com IA

---

## 1) VISAO DO PRODUTO

### Proposta de Valor

> "Descubra keywords lucrativas, gere artigos otimizados com IA e publique automaticamente no seu blog - tudo em um clique."

SEO Autopilot transforma a producao de conteudo SEO de um processo manual de horas/dias em um pipeline automatizado de minutos. O usuario conecta seu site, descobre oportunidades de keyword, e a plataforma gera, otimiza e publica artigos completos com imagens, links internos e schema markup.

**Diferencial:** pipeline end-to-end (discovery -> write -> publish -> track) com qualidade superior via scraping de fontes reais + gerador multi-modelo.

### Personas

**Persona 1: Afiliado Solo ("Lucas")**
- Tem 3-10 sites de nicho, monetiza com AdSense/afiliados
- Job: "Preciso publicar 50+ artigos/mes sem contratar redatores"
- Dor: custo de redacao, inconsistencia de qualidade, demora
- Willingness to pay: $49-99/mes

**Persona 2: Dono de SaaS B2B ("Marina")**
- Tem um SaaS e precisa de blog para aquisicao organica
- Job: "Preciso ranquear para keywords do meu nicho sem equipe de conteudo"
- Dor: nao tem time de marketing, nao sabe SEO tecnico
- Willingness to pay: $99-199/mes

**Persona 3: Agencia Digital ("Carlos")**
- Gerencia SEO para 10-50 clientes
- Job: "Preciso escalar producao de conteudo para todos os clientes"
- Dor: margem apertada, processo manual repetitivo, controle de qualidade
- Willingness to pay: $199-499/mes (multi-site)

### Metricas

| Metrica | Tipo | Definicao |
|---------|------|-----------|
| Artigos publicados/semana | North Star | Total de artigos publicados via plataforma |
| Time-to-first-publish | Ativacao | Tempo entre signup e primeiro artigo publicado |
| WAU (Weekly Active Users) | Engajamento | Usuarios que geraram ou publicaram na semana |
| Retencao D30 | Retencao | % usuarios ativos 30 dias apos signup |
| MRR | Receita | Receita recorrente mensal |
| NPS | Satisfacao | Net Promoter Score trimestral |

**Ativacao:** Usuario publica primeiro artigo em < 24h apos signup.

---

## 2) MVP E ROADMAP

### Features MVP (Semanas 1-4)

| Feature | Prioridade (MoSCoW) | Justificativa |
|---------|---------------------|---------------|
| Auth + Onboarding | Must | Base para tudo |
| Conectar site (WordPress) | Must | Core da proposta |
| Keyword Discovery (via API) | Must | Inicio do funil |
| Gerador de artigos (pipeline IA) | Must | Core da proposta |
| Editor de revisao | Must | Qualidade minima |
| Publicacao no WordPress | Must | Fecha o loop |
| Billing (Stripe) | Must | Monetizacao |
| Dashboard basico | Must | Visibilidade |
| Gerador de imagens | Should | Diferencial |
| Links internos automaticos | Should | SEO value |
| Emails transacionais | Should | Retencao basica |

### Features Pos-MVP

| Feature | Prioridade | Timeline |
|---------|-----------|----------|
| Google Search Console integration | Should | Mes 2 |
| Bulk generation (10+ artigos) | Should | Mes 2 |
| Multi-idioma | Could | Mes 2-3 |
| CMS proprio (sem WordPress) | Could | Mes 3 |
| Team/workspace collaboration | Could | Mes 3 |
| API publica | Won't (agora) | Mes 4+ |
| White-label para agencias | Won't (agora) | Mes 5+ |
| A/B testing de titulos | Won't (agora) | Mes 6+ |

### Priorizacao RICE (Top 5 pos-MVP)

| Feature | Reach | Impact | Confidence | Effort | Score |
|---------|-------|--------|------------|--------|-------|
| GSC Integration | 8 | 8 | 9 | 3 | 192 |
| Bulk generation | 7 | 9 | 8 | 4 | 126 |
| Multi-idioma | 6 | 7 | 7 | 5 | 59 |
| Team workspaces | 5 | 6 | 8 | 6 | 40 |
| CMS proprio | 4 | 7 | 6 | 8 | 21 |

---

## 3) FLUXOS DE USUARIO

### 3.1 Onboarding

```
1. Signup (email/Google OAuth)
2. Tela "Welcome" -> "Vamos configurar seu primeiro site"
3. Conectar WordPress:
   a. Inserir URL do site
   b. Gerar Application Password no WP (guia passo-a-passo)
   c. Testar conexao (POST de rascunho -> deletar)
   d. Sucesso: "Site conectado!"
4. Configurar perfil do site:
   a. Nicho/categoria (dropdown + texto livre)
   b. Idioma principal
   c. Tom de voz (formal, casual, tecnico, conversacional)
   d. Publico-alvo (texto livre)
   e. Instrucoes extras (opcional)
5. Redirect para Discovery
6. Checklist de onboarding visivel no dashboard:
   [ ] Conectar site
   [ ] Configurar perfil
   [ ] Descobrir primeira keyword
   [ ] Gerar primeiro artigo
   [ ] Publicar primeiro artigo
```

### 3.2 Discover (Descoberta de Keywords)

```
1. Usuario acessa aba "Discover"
2. Insere seed keyword OU seleciona sugestoes do nicho
3. Sistema busca via API (DataForSEO / KeywordsEverywhere / ValueSERP):
   - Keywords relacionadas
   - Volume de busca mensal
   - Keyword Difficulty (KD)
   - CPC
   - Intencao de busca (informacional, transacional, navegacional)
4. Resultados em tabela filtravel:
   - Filtros: volume min/max, KD min/max, intencao, idioma
   - Ordenacao por qualquer coluna
   - Checkbox para selecionar multiplas
5. Cada keyword tem botao "Write this" (CTA principal)
6. Selecao multipla -> "Write all selected" (bulk)
7. Keywords salvas em lista "Saved Keywords" para uso futuro
```

### 3.3 Write This (Geracao com Um Clique)

```
1. Usuario clica "Write this" em uma keyword
2. Modal/tela pre-preenchida:
   - Keyword principal (preenchido)
   - Keywords secundarias (sugeridas automaticamente)
   - Tipo de post (how-to, listicle, guia, review, comparacao)
   - Tamanho alvo (1500, 2500, 3500 palavras)
   - Tom (herdado do perfil do site, editavel)
   - Incluir imagens? (toggle, default: sim)
   - Incluir FAQ/schema? (toggle, default: sim)
   - Fontes para scraping (auto-detectadas do SERP, editaveis)
3. Usuario clica "Generate" -> artigo entra na fila
4. Status em tempo real:
   - "Pesquisando fontes..." (scraping SERP)
   - "Extraindo informacoes..." (parsing)
   - "Gerando outline..." (estrutura)
   - "Escrevendo secoes..." (1/5, 2/5...)
   - "Otimizando SEO..." (meta, links, schema)
   - "Gerando imagens..." (se habilitado)
   - "Pronto para revisao!"
5. Notificacao quando pronto (in-app + email opcional)
```

### 3.4 Review / Edit / Publish

```
1. Artigo aberto no editor (rich text, estilo Notion/Medium)
2. Painel lateral com:
   - SEO Score (checklist on-page)
   - Meta title (editavel, com contador de chars)
   - Meta description (editavel, com contador)
   - Slug (editavel)
   - Schema markup (preview JSON-LD)
   - Links internos sugeridos (do mesmo site)
   - Imagens (preview + alt text editavel)
   - Fontes usadas (lista com links)
3. Acoes:
   - "Save Draft" -> salva localmente
   - "Publish" -> envia para WordPress como publicado
   - "Schedule" -> envia como agendado com data/hora
   - "Export" -> baixar como HTML/Markdown
4. Apos publicar:
   - Confirmacao com link para o post publicado
   - Indexacao automatica (ping Google via API)
```

### 3.5 Historico / Articles

```
1. Lista de todos os artigos gerados
2. Colunas: titulo, keyword, status, data, site, custo (creditos)
3. Status: gerando | revisao | publicado | erro | rascunho
4. Filtros por site, status, data
5. Click para abrir no editor
6. Metricas (pos-GSC): impressoes, cliques, posicao media
```

### 3.6 Billing

```
1. Plano atual + uso do periodo
2. Planos disponiveis:
   - Starter: $49/mes - 15 artigos, 1 site
   - Growth: $99/mes - 50 artigos, 3 sites
   - Agency: $249/mes - 150 artigos, 10 sites
   - Enterprise: custom
3. Top-up de creditos extras ($5 por artigo avulso)
4. Historico de faturas (Stripe Customer Portal)
5. Upgrade/downgrade com pro-rata
6. Emails: confirmacao de compra, recibo, aviso de renovacao
```

---

## 4) ARQUITETURA TECNICA

### Stack Escolhida

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Frontend | **Next.js 15 (App Router)** | SSR, RSC, excelente DX, deploy Vercel |
| UI | **Tailwind + shadcn/ui** | Rapido de prototipar, consistente |
| Backend | **Next.js API Routes + tRPC** | Type-safe, co-locado com frontend |
| Banco | **PostgreSQL (Supabase)** | Relacional, RLS, real-time, auth built-in |
| ORM | **Drizzle ORM** | Type-safe, leve, migrations simples |
| Fila/Jobs | **Trigger.dev** | Jobs duradouros, retry, dashboard, free tier |
| Auth | **Clerk** | Multi-tenant, OAuth, webhooks, rapido |
| Pagamentos | **Stripe** | Padrao da industria |
| Email | **Resend** | API simples, React Email templates |
| Analytics | **PostHog** | Product analytics + feature flags |
| Storage | **Supabase Storage** | Imagens geradas |
| Deploy | **Vercel** | Zero-config para Next.js |
| Monitoramento | **Sentry** | Erros + performance |

**Trade-offs considerados:**
- Convex vs Supabase: Convex e mais opinionated e real-time nativo, mas Supabase tem ecossistema maior, SQL puro, e mais flexibilidade para queries complexas de SEO. Supabase vence para este caso.
- Firebase: descartado por vendor lock-in e query limitations.
- Separar backend (Fastify/Express): desnecessario para MVP; tRPC no Next.js cobre bem. Migrar se necessario pos-MVP.

### Schema do Banco de Dados

```sql
-- Usuarios (gerenciado pelo Clerk, sync via webhook)
CREATE TABLE users (
  id            TEXT PRIMARY KEY,        -- Clerk user ID
  email         TEXT NOT NULL UNIQUE,
  name          TEXT,
  avatar_url    TEXT,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- Workspaces (multi-tenant)
CREATE TABLE workspaces (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  owner_id      TEXT REFERENCES users(id),
  plan          TEXT DEFAULT 'starter',  -- starter | growth | agency | enterprise
  stripe_customer_id    TEXT,
  stripe_subscription_id TEXT,
  credits_remaining     INT DEFAULT 0,
  credits_monthly       INT DEFAULT 15,
  billing_cycle_start   TIMESTAMPTZ,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- Membros do workspace
CREATE TABLE workspace_members (
  workspace_id  UUID REFERENCES workspaces(id),
  user_id       TEXT REFERENCES users(id),
  role          TEXT DEFAULT 'member',   -- owner | admin | member
  PRIMARY KEY (workspace_id, user_id)
);

-- Sites conectados
CREATE TABLE sites (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id  UUID REFERENCES workspaces(id),
  name          TEXT NOT NULL,
  url           TEXT NOT NULL,
  platform      TEXT DEFAULT 'wordpress', -- wordpress | custom
  wp_username   TEXT,
  wp_app_password TEXT,                   -- encrypted
  wp_rest_url   TEXT,
  language      TEXT DEFAULT 'pt-BR',
  tone          TEXT DEFAULT 'conversational',
  niche         TEXT,
  target_audience TEXT,
  extra_instructions TEXT,
  gsc_connected BOOLEAN DEFAULT false,
  gsc_property  TEXT,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- Keywords descobertas/salvas
CREATE TABLE keywords (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id  UUID REFERENCES workspaces(id),
  site_id       UUID REFERENCES sites(id),
  keyword       TEXT NOT NULL,
  volume        INT,
  difficulty    INT,            -- 0-100
  cpc           DECIMAL(10,2),
  intent        TEXT,           -- informational | transactional | navigational | commercial
  language      TEXT,
  source        TEXT,           -- dataforseo | manual | gsc
  saved         BOOLEAN DEFAULT false,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- Artigos gerados
CREATE TABLE articles (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id  UUID REFERENCES workspaces(id),
  site_id       UUID REFERENCES sites(id),
  keyword_id    UUID REFERENCES keywords(id),

  -- Configuracao de geracao
  primary_keyword     TEXT NOT NULL,
  secondary_keywords  TEXT[],
  post_type           TEXT DEFAULT 'guide',  -- guide | howto | listicle | review | comparison
  target_length       INT DEFAULT 2500,
  tone                TEXT,
  include_images      BOOLEAN DEFAULT true,
  include_faq         BOOLEAN DEFAULT true,

  -- Conteudo gerado
  title               TEXT,
  slug                TEXT,
  meta_title          TEXT,
  meta_description    TEXT,
  content_html        TEXT,
  content_markdown    TEXT,
  outline             JSONB,          -- estrutura do artigo
  faq_schema          JSONB,          -- FAQ JSON-LD
  article_schema      JSONB,          -- Article JSON-LD

  -- SEO
  seo_score           INT,            -- 0-100
  word_count          INT,
  readability_score   DECIMAL(5,2),
  internal_links      JSONB,          -- [{url, anchor, paragraph}]
  external_links      JSONB,

  -- Status e publicacao
  status              TEXT DEFAULT 'queued',  -- queued | researching | generating | reviewing | published | error | draft
  error_message       TEXT,
  wp_post_id          INT,
  published_url       TEXT,
  published_at        TIMESTAMPTZ,
  scheduled_at        TIMESTAMPTZ,

  -- Custos
  credits_used        INT DEFAULT 1,
  tokens_input        INT,
  tokens_output       INT,
  generation_cost_usd DECIMAL(10,4),

  -- Metricas (via GSC)
  impressions         INT DEFAULT 0,
  clicks              INT DEFAULT 0,
  avg_position        DECIMAL(5,1),

  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

-- Imagens geradas
CREATE TABLE article_images (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id    UUID REFERENCES articles(id),
  prompt        TEXT,
  image_url     TEXT,           -- Supabase Storage URL
  alt_text      TEXT,
  caption       TEXT,
  position      INT,           -- ordem no artigo
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- Fontes usadas (scraping)
CREATE TABLE article_sources (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id    UUID REFERENCES articles(id),
  url           TEXT NOT NULL,
  title         TEXT,
  domain        TEXT,
  scraped_text  TEXT,
  summary       TEXT,
  facts_extracted JSONB,
  scraped_at    TIMESTAMPTZ DEFAULT now()
);

-- Logs de geracao (auditoria)
CREATE TABLE generation_logs (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id    UUID REFERENCES articles(id),
  step          TEXT,            -- research | outline | section_1 | seo_optimize | image_gen
  status        TEXT,            -- started | completed | error
  model_used    TEXT,            -- claude-sonnet-4-6 | gpt-4o-mini | flux-schnell
  tokens_in     INT,
  tokens_out    INT,
  duration_ms   INT,
  error_detail  TEXT,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- Onboarding checklist
CREATE TABLE onboarding_progress (
  workspace_id     UUID PRIMARY KEY REFERENCES workspaces(id),
  site_connected   BOOLEAN DEFAULT false,
  profile_set      BOOLEAN DEFAULT false,
  first_keyword    BOOLEAN DEFAULT false,
  first_article    BOOLEAN DEFAULT false,
  first_publish    BOOLEAN DEFAULT false,
  completed_at     TIMESTAMPTZ
);
```

### Diagrama de Arquitetura (textual)

```
[Browser / Next.js Frontend]
       |
       | tRPC (type-safe)
       v
[Next.js API Routes / tRPC Router]
       |
       |--- [Clerk] (auth)
       |--- [Stripe] (billing)
       |--- [Supabase/Postgres] (data)
       |--- [Trigger.dev] (jobs queue)
       |          |
       |          |--- Job: ArticleGeneration
       |          |      |-- Step 1: SERP Research
       |          |      |-- Step 2: Scraping (Jina Reader)
       |          |      |-- Step 3: Extraction (Claude Haiku)
       |          |      |-- Step 4: Outline (Claude Sonnet)
       |          |      |-- Step 5: Write Sections (Claude Sonnet)
       |          |      |-- Step 6: SEO Optimize (Claude Haiku)
       |          |      |-- Step 7: Generate Images (FLUX)
       |          |      |-- Step 8: Publish to WP
       |          |
       |          |--- Job: KeywordDiscovery
       |          |--- Job: GSCSync
       |          |--- Job: CreditReset (cron mensal)
       |
       |--- [Resend] (emails)
       |--- [PostHog] (analytics)
       |--- [Sentry] (errors)
       v
[WordPress REST API] (publicacao)
[Google Search Console API] (metricas)
[DataForSEO API] (keywords)
[Jina Reader API] (scraping)
[Anthropic API / OpenAI API] (IA)
[Replicate / Together AI] (imagens)
```

---

## 5) PIPELINE DE CONTEUDO (DETALHADO)

### Visao Geral do Pipeline

```
Input -> Research -> Extract -> Outline -> Write -> Optimize -> Images -> Output
```

### Step 1: Input (Configuracao)

```json
{
  "primary_keyword": "como criar landing page",
  "secondary_keywords": ["landing page exemplos", "ferramentas landing page"],
  "site_url": "https://meusite.com.br",
  "language": "pt-BR",
  "tone": "conversacional",
  "target_audience": "empreendedores digitais",
  "post_type": "guide",
  "target_length": 2500,
  "include_images": true,
  "include_faq": true,
  "extra_instructions": "Mencionar nosso produto XYZ como solucao"
}
```

### Step 2: SERP Research

**Acao:** Buscar top 10 resultados do Google para a keyword principal.

**Implementacao:**
- API: ValueSERP ou SerpAPI (Google SERP)
- Extrair: titulo, URL, snippet, posicao
- Filtrar: remover YouTube, Reddit, forums (manter blogs/sites)
- Selecionar top 5 para scraping

```json
// Exemplo de resultado
{
  "serp_results": [
    {"position": 1, "title": "Como Criar Landing Page em 2026", "url": "https://exemplo.com/landing-page", "snippet": "..."},
    {"position": 2, "title": "10 Passos para Landing Page Perfeita", "url": "https://outro.com/landing", "snippet": "..."}
  ],
  "people_also_ask": [
    "O que e uma landing page?",
    "Quanto custa criar uma landing page?",
    "Qual melhor ferramenta para landing page?"
  ]
}
```

### Step 3: Scraping + Extracao

**Acao:** Fazer scraping das top 5 paginas e extrair informacoes uteis.

**Implementacao:**
- Scraping via Jina Reader API (`https://r.jina.ai/{url}`) - retorna Markdown limpo
- Fallback: Bright Data ou Playwright se Jina falhar
- Cache: salvar scraping por 24h para evitar re-requests

**Prompt de extracao (Claude Haiku - barato e rapido):**

```
SYSTEM:
Voce e um extrator de informacoes para SEO. Analise o conteudo abaixo
e extraia as informacoes mais relevantes de forma estruturada.

USER:
Conteudo da pagina: {scraped_content}

Keyword alvo: {primary_keyword}

Extraia:
1. FATOS PRINCIPAIS: lista dos fatos/dados/estatisticas mais importantes (com fonte)
2. TOPICOS COBERTOS: lista dos subtopicos abordados
3. ESTRUTURA: headings (H2/H3) usados
4. GAPS: o que esta FALTANDO neste conteudo que poderiamos cobrir melhor
5. CTAs: quais calls-to-action sao usados

Responda em JSON.
```

### Step 4: Outline (Estrutura)

**Acao:** Criar outline detalhado baseado na pesquisa.

**Prompt de outline (Claude Sonnet):**

```
SYSTEM:
Voce e um estrategista de conteudo SEO senior. Crie outlines de artigos
que ranqueiam no Google. Use dados reais das fontes fornecidas. O outline
deve ser melhor e mais completo que os concorrentes.

USER:
## Contexto
- Keyword principal: {primary_keyword}
- Keywords secundarias: {secondary_keywords}
- Idioma: {language}
- Tom: {tone}
- Publico: {target_audience}
- Tipo de post: {post_type}
- Tamanho alvo: {target_length} palavras

## Pesquisa dos Concorrentes
{extracted_data_from_all_sources}

## People Also Ask
{people_also_ask}

## Instrucoes
Crie um outline detalhado com:
1. Titulo H1 (otimizado para SEO, com keyword, max 60 chars)
2. Meta description (155 chars, com keyword, CTA implicito)
3. Introducao (hook + o que o leitor vai aprender)
4. Secoes H2 (5-8 secoes) cada uma com:
   - Titulo H2
   - Subtopicos H3 (2-4 por H2)
   - Pontos-chave a cobrir em cada subsecao
   - Dados/fatos a incluir (das fontes)
5. FAQ (5-7 perguntas baseadas no PAA + pesquisa)
6. Conclusao (resumo + CTA)

Responda em JSON com a estrutura do outline.
{extra_instructions}
```

### Step 5: Escrita Secao por Secao

**Acao:** Gerar cada secao individualmente para manter qualidade e coerencia.

**Prompt de escrita (Claude Sonnet - por secao):**

```
SYSTEM:
Voce e um redator de conteudo SEO especialista. Escreva conteudo que:
- Seja factualmente correto (use apenas dados das fontes fornecidas)
- Tenha tom {tone} e seja adequado para {target_audience}
- Inclua a keyword "{primary_keyword}" naturalmente (sem keyword stuffing)
- Use frases curtas, paragrafos de 2-3 frases
- Inclua exemplos praticos e acionaveis
- Idioma: {language}
- NAO invente dados ou estatisticas
- NAO use cliches como "no mundo digital de hoje" ou "e importante notar"
- Use transicoes naturais entre paragrafos

USER:
## Artigo em andamento
Titulo: {title}
Secoes ja escritas (para contexto e coerencia):
{previous_sections_summary}

## Secao a escrever agora
{current_section_from_outline}

## Dados disponiveis das fontes
{relevant_extracted_facts}

Escreva esta secao em Markdown. Inclua H2, H3 conforme o outline.
Tamanho: aproximadamente {section_word_count} palavras.
```

**Estrategia:** Gerar secoes sequencialmente, passando resumo das anteriores para manter coerencia. Cada secao e um request separado para melhor controle.

### Step 6: Otimizacao SEO On-Page

**Acao:** Revisar e otimizar o artigo completo.

**Prompt de otimizacao (Claude Haiku):**

```
SYSTEM:
Voce e um especialista em SEO on-page. Otimize o artigo fornecido.

USER:
## Artigo
{full_article_markdown}

## Keyword principal: {primary_keyword}
## Keywords secundarias: {secondary_keywords}

Faca estas otimizacoes:
1. KEYWORD DENSITY: verifique se keyword principal aparece no H1, primeiro paragrafo,
   pelo menos 1 H2, e ultimo paragrafo. Densidade ideal: 1-2%.
2. LINKS INTERNOS: sugira onde inserir links internos para estas URLs do mesmo site:
   {existing_site_urls}
3. META TITLE: otimize para CTR (max 60 chars, keyword no inicio)
4. META DESCRIPTION: otimize para CTR (max 155 chars, keyword, CTA)
5. FAQ SCHEMA: gere JSON-LD para as FAQs
6. ARTICLE SCHEMA: gere JSON-LD do tipo Article
7. SEO SCORE: de uma nota 0-100 com checklist do que esta bom/ruim

Retorne JSON com:
{
  "optimized_content": "...",
  "meta_title": "...",
  "meta_description": "...",
  "slug": "...",
  "faq_schema": {...},
  "article_schema": {...},
  "seo_score": 85,
  "seo_checklist": [...]
  "internal_links_added": [...]
}
```

### Step 7: Geracao de Imagens

**Acao:** Gerar imagem principal (hero) e imagens para secoes.

**Implementacao:**
- Modelo: FLUX Schnell (Replicate/Together AI) - rapido e barato
- Fallback: DALL-E 3 para qualidade premium
- 1 hero image + 1-2 imagens por secao longa

**Prompt de geracao de prompt de imagem (Claude Haiku):**

```
SYSTEM:
Gere prompts para geracao de imagens que complementem artigos de blog.
As imagens devem ser profissionais, informativas e adequadas para SEO.

USER:
Artigo: {article_title}
Secao: {section_title}
Contexto: {section_summary}

Gere:
1. Prompt para imagem (em ingles, detalhado, estilo: clean, modern, professional)
2. Alt text (em {language}, descritivo, com keyword se natural)
3. Caption (em {language}, complementar ao texto)
```

### Step 8: Output Final

```json
{
  "title": "Como Criar Landing Page: Guia Completo 2026",
  "slug": "como-criar-landing-page",
  "meta_title": "Como Criar Landing Page em 2026 | Guia Passo a Passo",
  "meta_description": "Aprenda como criar landing page que converte. Veja exemplos, ferramentas e dicas praticas para criar sua landing page hoje.",
  "content_html": "<h1>Como Criar Landing Page...</h1>...",
  "content_markdown": "# Como Criar Landing Page...",
  "word_count": 2650,
  "seo_score": 88,
  "faq_schema": { "@context": "https://schema.org", "@type": "FAQPage", ... },
  "article_schema": { "@context": "https://schema.org", "@type": "Article", ... },
  "images": [
    { "url": "https://storage.../hero.png", "alt": "...", "caption": "..." }
  ],
  "internal_links": [
    { "url": "/ferramentas-marketing", "anchor": "ferramentas de marketing", "position": "secao_3" }
  ],
  "sources_used": [
    { "url": "https://exemplo.com/...", "title": "...", "facts_used": 3 }
  ],
  "generation_stats": {
    "total_tokens_in": 45000,
    "total_tokens_out": 8500,
    "total_cost_usd": 0.12,
    "duration_seconds": 95,
    "models_used": ["claude-sonnet-4-6", "claude-haiku-4-5", "flux-schnell"]
  }
}
```

### Anti-Plagio e Qualidade

1. **Extracao, nao copia:** O pipeline extrai FATOS e ESTRUTURA das fontes, nunca copia texto diretamente.
2. **Geracao original:** Cada secao e gerada do zero baseada em fatos extraidos.
3. **Checagem de repeticao:** Pos-geracao, verificar frases duplicadas entre secoes.
4. **Factualidade:** Cada claim com dados deve ter fonte identificavel.
5. **Guardrails:**
   - Nao gerar conteudo medico/legal com claims sem fonte
   - Nao gerar conteudo YMYL (Your Money Your Life) sem aviso
   - Filtro de conteudo inseguro (violencia, odio, etc.)
   - Aviso se keyword tem alto risco (saude, financas, juridico)

---

## 6) POLITICA DE CUSTOS E CONTROLE

### Estimativa de Custo por Artigo (2500 palavras)

| Etapa | Modelo/API | Tokens/Calls | Custo Estimado |
|-------|-----------|-------------|----------------|
| SERP Research | ValueSERP | 1 call | $0.005 |
| Scraping (5 paginas) | Jina Reader | 5 calls | $0.00 (free tier) |
| Extracao (5x) | Claude Haiku | ~25K in + 5K out | $0.008 |
| Outline | Claude Sonnet | ~10K in + 2K out | $0.04 |
| Escrita (6 secoes) | Claude Sonnet | ~60K in + 15K out | $0.30 |
| Otimizacao SEO | Claude Haiku | ~20K in + 5K out | $0.008 |
| Imagens (3x) | FLUX Schnell | 3 calls | $0.03 |
| **TOTAL** | | | **~$0.39** |

**Margem:** Cobrando $3-5 por artigo (ou incluido no plano), margem de 87-92%.

### Estrategias de Reducao de Custo

1. **Cache agressivo:**
   - Cache de SERP por 24h (mesma keyword)
   - Cache de scraping por 24h (mesma URL)
   - Cache de keywords discovery por 7 dias

2. **Modelo escalonado:**
   - Claude Haiku para extracao e otimizacao (barato)
   - Claude Sonnet para outline e escrita (qualidade)
   - Nao usar Opus a menos que usuario pague plano premium

3. **Rate limiting:**
   - Max 5 artigos simultaneos por workspace
   - Max 50 artigos/dia por workspace
   - Fila com prioridade por plano

4. **Fallback de modelos:**
   ```
   Primario: Claude Sonnet 4.6
   Fallback 1: GPT-4o-mini (se rate limited)
   Fallback 2: Claude Haiku (qualidade reduzida, aviso ao usuario)
   ```

5. **Tokens inteligentes:**
   - Resumir secoes anteriores em vez de passar texto completo
   - Limitar scraping a 3000 tokens por pagina
   - Comprimir contexto entre steps

### Guardrails de Qualidade

| Guardrail | Implementacao |
|-----------|--------------|
| Anti keyword stuffing | Verificar densidade < 3% |
| Comprimento minimo | Rejeitar secoes < 100 palavras |
| Verificacao de idioma | Confirmar idioma da saida = idioma configurado |
| Links quebrados | Verificar URLs antes de inserir |
| Conteudo duplicado | Hash de paragrafos para detectar repeticao interna |
| YMYL warning | Detectar keywords de saude/financas e exibir aviso |
| Conteudo inseguro | Usar content filter da API antes de salvar |

---

## 7) RETENCAO E GROWTH

### Emails Transacionais (Resend + React Email)

| Trigger | Email | Timing |
|---------|-------|--------|
| Signup | Welcome + guia de setup | Imediato |
| Site conectado | "Seu site esta pronto! Descubra keywords" | Imediato |
| Primeiro artigo gerado | "Seu artigo esta pronto para revisao!" | Imediato |
| Artigo publicado | "Publicado com sucesso! Veja no seu site" | Imediato |
| Compra/upgrade | Confirmacao + recibo | Imediato |
| Renovacao | Recibo mensal | No billing |
| Creditos baixos (< 20%) | "Seus creditos estao acabando" | Quando atingir |
| Sem atividade 7 dias | "Voce tem {N} keywords salvas sem artigo" | D+7 |
| Sem atividade 14 dias | "Seu concorrente publicou X artigos esta semana" | D+14 |
| Primeira impressao GSC | "Seu artigo {titulo} recebeu as primeiras impressoes!" | Quando detectar |
| Artigo rankeia top 10 | "Parabens! {titulo} esta no top 10 do Google!" | Quando detectar |

### Lifecycle Hooks (PostHog + Trigger.dev)

```
Signup -> (email welcome)
  |
  v
Site Connected -> (email setup)
  |
  v
First Keyword Discovered -> (nudge: "Write this!")
  |
  v
First Article Generated -> (email + celebration UI)
  |
  v
First Article Published -> (email + confetti) *** ATIVACAO ***
  |
  v
Weekly Active -> (dashboard value, GSC metrics)
  |
  v
Power User -> (bulk features, API access upsell)
```

### Valor Acumulado Visivel (Dashboard)

O dashboard principal mostra VALOR que o usuario perderia se cancelar:

```
+--------------------------------------------------+
| SEO Autopilot Dashboard                          |
+--------------------------------------------------+
| Seus numeros este mes:                           |
|                                                  |
| [32] Artigos    [12.5K] Impressoes   [890] Cliques |
| publicados      no Google            organicos      |
|                                                  |
| [4.2] Posicao   [15] Keywords       [$2,340]     |
| media           no top 10           valor estimado|
|                                                  |
| Streak: 12 semanas consecutivas publicando!      |
+--------------------------------------------------+
```

**Metricas de valor acumulado:**
- Total de artigos publicados (all-time)
- Impressoes e cliques acumulados (GSC)
- Keywords ranqueando (posicao media)
- Valor estimado do trafego (volume x CPC medio)
- Streak de publicacao (semanas consecutivas)

### Hook Model (Reducao de Friccao)

```
TRIGGER:    Email/notificacao "Nova keyword de oportunidade para seu nicho"
ACTION:     1 clique -> "Write this" -> artigo na fila
REWARD:     Artigo gerado em minutos, SEO score alto
INVESTMENT: Mais artigos = mais dados = melhores sugestoes
```

**"One Click from Discovery":**
- Na tela Discover, cada keyword tem botao "Write" direto
- Pre-preenche tudo baseado no perfil do site
- 1 clique = artigo na fila, sem configuracao extra
- Reducao maxima de friccao: Discovery -> Artigo em 1 clique

---

## 8) DESIGN DE TELAS (WIREFRAMES TEXTUAIS)

### 8.1 Dashboard

```
+------------------------------------------------------------------+
| [Logo] SEO Autopilot          [Site: meusite.com v] [Avatar]     |
+------------------------------------------------------------------+
| [Dashboard] [Discover] [Articles] [Settings] [Billing]           |
+------------------------------------------------------------------+
|                                                                  |
| Bom dia, Lucas!                              Plano: Growth       |
|                                              32/50 artigos usados|
|                                              [####------] 64%    |
|                                                                  |
| +------------+ +------------+ +------------+ +------------+      |
| | 32         | | 12.5K      | | 890        | | $2,340     |      |
| | Artigos    | | Impressoes | | Cliques    | | Valor est. |      |
| | publicados | | (30 dias)  | | (30 dias)  | | do trafego |      |
| +------------+ +------------+ +------------+ +------------+      |
|                                                                  |
| Onboarding [===========================----] 80%                 |
| [x] Site  [x] Perfil  [x] Keyword  [x] Artigo  [ ] Publicar    |
|                                                                  |
| Artigos Recentes                                                 |
| +--------------------------------------------------------------+ |
| | Titulo                  | Status     | Impressoes | Posicao  | |
| |-------------------------|------------|------------|----------| |
| | Como criar landing page | Publicado  | 1,234      | 4.2      | |
| | Melhores CRMs 2026      | Revisao    | -          | -        | |
| | SEO para ecommerce       | Gerando... | -          | -        | |
| +--------------------------------------------------------------+ |
|                                                                  |
| [+ Novo Artigo]                     [Ver Todos ->]               |
+------------------------------------------------------------------+
```

### 8.2 Discover

```
+------------------------------------------------------------------+
| Discover Keywords                                                |
+------------------------------------------------------------------+
|                                                                  |
| Buscar: [_________________landing page_______________] [Buscar]  |
|                                                                  |
| Filtros:                                                         |
| Volume: [100] - [10000]  KD: [0] - [50]  Intent: [Todos v]     |
|                                                                  |
| Sugestoes do seu nicho:          [Refresh sugestoes]             |
| +--------------------------------------------------------------+ |
| | [ ] Keyword                  | Vol   | KD | CPC  | Intent   | |
| |------------------------------|-------|----|------|----------| |
| | [ ] como criar landing page  | 8,100 | 32 | 2.40 | Info     | |
| |     [Write This ->]                                          | |
| | [ ] landing page exemplos    | 3,600 | 25 | 1.80 | Info     | |
| |     [Write This ->]                                          | |
| | [ ] melhor builder landing   | 2,900 | 45 | 4.20 | Commer.  | |
| |     [Write This ->]                                          | |
| | [ ] landing page vs site     | 1,200 | 18 | 0.90 | Info     | |
| |     [Write This ->]                                          | |
| +--------------------------------------------------------------+ |
|                                                                  |
| [3 selecionadas] [Write Selected] [Save to List]                |
|                                                                  |
| Keywords Salvas (12)                          [Ver lista ->]     |
+------------------------------------------------------------------+
```

### 8.3 Writer (Geracao)

```
+------------------------------------------------------------------+
| Write Article                                                    |
+------------------------------------------------------------------+
|                                                                  |
| Keyword principal: [como criar landing page___________]          |
|                                                                  |
| Keywords secundarias: [landing page exemplos, ferramentas...]    |
|                                                                  |
| Tipo: [Guia v]    Tamanho: [2500 palavras v]   Tom: [Casual v]  |
|                                                                  |
| [x] Incluir imagens    [x] Incluir FAQ/Schema                   |
|                                                                  |
| Instrucoes extras:                                               |
| [_Mencionar nosso produto XYZ como solucao___________________]   |
|                                                                  |
|                        [Gerar Artigo]                            |
|                                                                  |
+------------------------------------------------------------------+
| Status da Geracao:                                               |
|                                                                  |
| [=============================---------] 72%                     |
|                                                                  |
| [x] Pesquisando fontes (5 paginas)           12s                 |
| [x] Extraindo informacoes                     8s                 |
| [x] Gerando outline                           5s                 |
| [>] Escrevendo secoes (4/6)                  45s                 |
| [ ] Otimizando SEO                                              |
| [ ] Gerando imagens                                              |
|                                                                  |
| Tempo estimado restante: ~35 segundos                            |
+------------------------------------------------------------------+
```

### 8.4 Editor/Review

```
+------------------------------------------------------------------+
| Editor                                    [Save Draft] [Publish]  |
+------------------------------------------------------------------+
| +------------------------------------------+ +------------------+|
| | # Como Criar Landing Page em 2026        | | SEO Score: 88/100||
| |                                          | | [=========-] 88%  ||
| | Criar uma landing page eficiente e...    | |                  ||
| |                                          | | [x] Keyword H1   ||
| | ## O Que e Uma Landing Page?             | | [x] Keyword intro ||
| |                                          | | [x] Meta title    ||
| | Uma landing page e uma pagina...         | | [x] Meta desc     ||
| | [imagem: landing-page-hero.png]          | | [x] Alt text imgs ||
| |                                          | | [ ] 2+ links int. ||
| | ## Como Criar em 5 Passos               | | [x] FAQ schema    ||
| |                                          | | [x] H2 com kw     ||
| | ### 1. Defina o Objetivo                 | |                  ||
| | ...                                      | | Meta Title:       ||
| |                                          | | [Como Criar Land.]||
| | ## FAQ                                   | | 52/60 chars       ||
| | <details>                                | |                  ||
| |   <summary>O que e landing page?</s>    | | Meta Description: ||
| |   Uma landing page e...                  | | [Aprenda como...] ||
| | </details>                               | | 148/155 chars     ||
| |                                          | |                  ||
| |                                          | | Slug:             ||
| |                                          | | [/como-criar-land]||
| |                                          | |                  ||
| |                                          | | Links Internos:   ||
| |                                          | | + /ferramentas    ||
| |                                          | | + /marketing-dig  ||
| |                                          | |                  ||
| |                                          | | Fontes usadas: 5  ||
| |                                          | | [Ver fontes ->]   ||
| +------------------------------------------+ +------------------+|
+------------------------------------------------------------------+
```

### 8.5 Articles (Lista)

```
+------------------------------------------------------------------+
| Articles                              Filtros: [Todos v] [Todos v]|
+------------------------------------------------------------------+
|                                                                  |
| +--------------------------------------------------------------+ |
| | Titulo              | Keyword     | Status    | Data   | KPIs | |
| |---------------------|-------------|-----------|--------|------| |
| | Como criar LP       | criar lp    | Publicado | 03/01  | 1.2K | |
| | Melhores CRMs       | crm 2026    | Revisao   | 03/05  | -    | |
| | SEO ecommerce       | seo ecomm   | Gerando   | 03/07  | -    | |
| | Email marketing      | email mkt   | Erro      | 03/06  | -    | |
| |                     |             | [Retry]   |        |      | |
| +--------------------------------------------------------------+ |
|                                                                  |
| Mostrando 4 de 32 artigos            [< 1 2 3 ... 8 >]         |
+------------------------------------------------------------------+
```

### 8.6 Settings

```
+------------------------------------------------------------------+
| Settings                                                         |
+------------------------------------------------------------------+
|                                                                  |
| Sites Conectados                                                 |
| +--------------------------------------+                         |
| | meusite.com.br    [WordPress]  [Edit]|                         |
| | outrosite.com     [WordPress]  [Edit]|                         |
| +--------------------------------------+                         |
| [+ Adicionar Site]                                               |
|                                                                  |
| Perfil do Site: meusite.com.br                                  |
| Nicho: [Marketing Digital_____]                                  |
| Idioma: [Portugues BR v]                                         |
| Tom: [Conversacional v]                                          |
| Publico: [Empreendedores digitais_____]                          |
| Instrucoes: [Sempre mencionar produto XYZ_____]                  |
|                                                                  |
| Integracoes                                                      |
| Google Search Console: [Conectar]                                |
| WordPress: Conectado [Testar Conexao]                            |
|                                                                  |
| [Salvar]                                                         |
+------------------------------------------------------------------+
```

### 8.7 Billing

```
+------------------------------------------------------------------+
| Billing                                                          |
+------------------------------------------------------------------+
|                                                                  |
| Plano Atual: Growth ($99/mes)          Renova em: 01/04/2026    |
| Creditos: 32/50 usados este ciclo                                |
|                                                                  |
| +------------------+ +------------------+ +------------------+   |
| | STARTER          | | GROWTH (atual)   | | AGENCY           |   |
| | $49/mes          | | $99/mes          | | $249/mes         |   |
| | 15 artigos       | | 50 artigos       | | 150 artigos      |   |
| | 1 site           | | 3 sites          | | 10 sites         |   |
| | Suporte email    | | Suporte chat     | | Suporte priorid. |   |
| | [Downgrade]      | | [Atual]          | | [Upgrade]        |   |
| +------------------+ +------------------+ +------------------+   |
|                                                                  |
| Precisa de mais? +$5 por artigo extra   [Comprar Creditos]       |
|                                                                  |
| Historico de Faturas                                             |
| +--------------------------------------------------------------+ |
| | Data       | Descricao          | Valor   | [PDF]            | |
| |------------|--------------------|---------|---------         | |
| | 01/03/2026 | Growth - mensal    | $99.00  | [Baixar]         | |
| | 15/02/2026 | 10 creditos extra  | $50.00  | [Baixar]         | |
| | 01/02/2026 | Growth - mensal    | $99.00  | [Baixar]         | |
| +--------------------------------------------------------------+ |
|                                                                  |
| [Gerenciar Pagamento (Stripe Portal)]                            |
+------------------------------------------------------------------+
```

---

## 9) SEGURANCA E CONFIABILIDADE

### Autenticacao e Autorizacao

| Componente | Solucao | Detalhes |
|-----------|---------|----------|
| Auth | Clerk | OAuth (Google, GitHub), magic link, MFA |
| Multi-tenant | RLS (Supabase) + Clerk Organizations | Cada workspace isolado |
| Roles | owner, admin, member | Permissoes por workspace |
| API keys | Gerar por workspace | Para integracao futura |
| Sessions | JWT via Clerk | Refresh automatico |

### Row Level Security (Supabase)

```sql
-- Exemplo: usuarios so veem artigos do seu workspace
CREATE POLICY "workspace_articles" ON articles
  USING (workspace_id IN (
    SELECT workspace_id FROM workspace_members
    WHERE user_id = auth.uid()
  ));
```

### Protecao de Webhooks Stripe

```typescript
// Verificacao de assinatura do webhook Stripe
import { headers } from 'next/headers';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const sig = headersList.get('stripe-signature')!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return new Response('Webhook signature verification failed', { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed':
      // Ativar plano
      break;
    case 'invoice.paid':
      // Resetar creditos mensais
      break;
    case 'customer.subscription.deleted':
      // Downgrade para free
      break;
  }

  return new Response('OK', { status: 200 });
}
```

### Exemplo Payload WordPress

```typescript
// Publicar artigo no WordPress via REST API
async function publishToWordPress(site: Site, article: Article) {
  const auth = Buffer.from(
    `${site.wp_username}:${site.wp_app_password}`
  ).toString('base64');

  const response = await fetch(`${site.wp_rest_url}/wp-json/wp/v2/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${auth}`,
    },
    body: JSON.stringify({
      title: article.title,
      content: article.content_html,
      slug: article.slug,
      status: article.scheduled_at ? 'future' : 'publish',
      date: article.scheduled_at || undefined,
      meta: {
        _yoast_wpseo_title: article.meta_title,
        _yoast_wpseo_metadesc: article.meta_description,
      },
      // Se usar RankMath:
      // rank_math_title: article.meta_title,
      // rank_math_description: article.meta_description,
    }),
  });

  const post = await response.json();
  return { wp_post_id: post.id, published_url: post.link };
}
```

### Seguranca de Scraping

- **Sanitizacao HTML:** Todo conteudo scrapado passa por DOMPurify antes de armazenar
- **Rate limiting:** Max 10 requests/segundo para scraping
- **Respeitar robots.txt:** Verificar antes de scrape (via API)
- **Timeout:** Max 10s por pagina, abort se exceder
- **Storage:** Conteudo scrapado deletado apos 7 dias (manter apenas resumos)

### Seguranca de Dados

- Credenciais WordPress criptografadas em repouso (AES-256)
- API keys em environment variables (Vercel encrypted)
- Logs de acesso para operacoes sensiveis
- CORS configurado para dominio proprio apenas
- CSP headers para prevenir XSS
- SQL injection prevenido pelo Drizzle ORM (queries parametrizadas)

### Backup e Migracoes

- Supabase: backups automaticos diarios (Point-in-Time Recovery)
- Migrations: Drizzle Kit (versionadas no repositorio)
- Imagens: Supabase Storage com CDN (backups S3)
- Disaster recovery: restore < 1 hora (Supabase managed)

---

## 10) PLANO DE IMPLEMENTACAO

### Semana 1: Fundacao

| Dia | Tarefa | Detalhes |
|-----|--------|----------|
| D1 | Setup do projeto | Next.js 15, Tailwind, shadcn/ui, tRPC, Drizzle, Supabase |
| D1 | Deploy base | Vercel + Supabase project |
| D2 | Auth | Clerk setup, middleware, sync webhook user->DB |
| D2 | DB Schema | Criar todas as tabelas, RLS policies |
| D3 | UI Base | Layout, sidebar, navigation, theme |
| D3 | Dashboard | Tela basica com cards vazios |
| D4 | Billing | Stripe Products/Prices, checkout, webhook, portal |
| D4 | Planos | Logica de creditos, upgrade/downgrade |
| D5 | Settings | CRUD de sites, formulario de perfil |
| D5 | WordPress connect | Input de credenciais, teste de conexao |

**Entregavel Semana 1:** Usuario pode fazer signup, conectar site WordPress, escolher plano.

### Semana 2: Pipeline de Geracao

| Dia | Tarefa | Detalhes |
|-----|--------|----------|
| D1 | Trigger.dev setup | Configurar jobs, dashboard |
| D1 | Job: SERP Research | ValueSERP API, buscar top 10 |
| D2 | Job: Scraping | Jina Reader, extrair conteudo |
| D2 | Job: Extracao | Claude Haiku, fatos + estrutura |
| D3 | Job: Outline | Claude Sonnet, gerar estrutura |
| D3 | Job: Escrita | Claude Sonnet, secao por secao |
| D4 | Job: SEO Optimize | Claude Haiku, meta tags, schema, score |
| D4 | Job: Imagens | FLUX via Replicate, upload Storage |
| D5 | Writer UI | Formulario de geracao, status real-time |
| D5 | Integracao | Writer -> Job -> atualizar status -> notificar |

**Entregavel Semana 2:** Usuario pode gerar artigo completo a partir de keyword.

### Semana 3: Editor + Publicacao + Emails

| Dia | Tarefa | Detalhes |
|-----|--------|----------|
| D1 | Editor rich text | TipTap ou Novel editor, carregar artigo gerado |
| D1 | Painel SEO | Score, meta tags editaveis, checklist |
| D2 | Links internos | Buscar URLs existentes no WP, sugerir |
| D2 | Imagens no editor | Preview, alt text editavel, reposicionar |
| D3 | Publicacao WP | Botao Publish -> WordPress REST API |
| D3 | Schedule | Agendar publicacao com data/hora |
| D4 | Lista de artigos | Tabela com filtros, status, metricas |
| D4 | Emails | Resend + React Email: welcome, artigo pronto, publicado |
| D5 | Dashboard real | Cards com dados reais, onboarding checklist |
| D5 | Testes E2E | Playwright: fluxo completo signup -> publish |

**Entregavel Semana 3:** Loop completo: gerar -> editar -> publicar -> ver no dashboard.

### Semana 4: Discovery + Analytics + Polimento

| Dia | Tarefa | Detalhes |
|-----|--------|----------|
| D1 | Keyword Discovery | DataForSEO API, tabela filtravel |
| D1 | "Write This" flow | 1-click da discovery para geracao |
| D2 | GSC Integration | OAuth, buscar metricas, sincronizar artigos |
| D2 | Dashboard metricas | Impressoes, cliques, posicao (dados GSC) |
| D3 | Emails lifecycle | Creditos baixos, inatividade, celebracao |
| D3 | PostHog | Eventos de tracking, funil de conversao |
| D4 | Sentry | Error tracking, performance monitoring |
| D4 | Polimento UI | Animacoes, loading states, empty states, toasts |
| D5 | QA + Testes | Bug fixes, edge cases, mobile responsive |
| D5 | Soft launch | Deploy producao, 10-20 beta users |

**Entregavel Semana 4:** MVP completo, pronto para beta users.

---

## RISCOS E MITIGACOES

| Risco | Impacto | Probabilidade | Mitigacao |
|-------|---------|--------------|-----------|
| Custo de IA alto demais | Alto | Media | Cache, modelo escalonado, limites de consumo |
| Qualidade de conteudo baixa | Alto | Media | Pipeline multi-step, revisao humana, guardrails |
| WordPress API instavel | Medio | Baixa | Retry com backoff, teste de conexao antes |
| Rate limits APIs (Anthropic/DataForSEO) | Medio | Media | Queue com rate limiting, fallback de modelos |
| Scraping bloqueado | Medio | Media | Jina Reader (proxy integrado), fallback Bright Data |
| Churn alto | Alto | Media | Valor acumulado, emails lifecycle, onboarding guiado |
| SERP API cara para scale | Medio | Media | Cache agressivo, batch requests, negociar pricing |

---

## DECISOES TECNICAS E TRADE-OFFS

| Decisao | Escolha | Alternativa | Razao |
|---------|---------|-------------|-------|
| Monolito vs Micro | Monolito (Next.js) | Micro com API separada | MVP rapido, migrar depois se necessario |
| ORM | Drizzle | Prisma | Mais leve, type-safe, queries SQL puras |
| Job Queue | Trigger.dev | BullMQ + Redis | Managed, dashboard, durable execution |
| Auth | Clerk | Auth.js/NextAuth | Setup rapido, multi-tenant nativo |
| Editor | TipTap | Lexical, Novel | Extensivel, markdown support, comunidade |
| Imagens | FLUX Schnell | DALL-E 3, Midjourney | Custo baixo, rapido, open-source |
| Keyword API | DataForSEO | Ahrefs, SEMrush | API acessivel, dados bons, pricing justo |
| Scraping | Jina Reader | Puppeteer, Playwright | Managed, proxy incluido, markdown output |

---

## ESTRUTURA DE PASTAS DO PROJETO

```
seo-autopilot/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Rotas autenticadas
│   │   │   ├── dashboard/
│   │   │   ├── discover/
│   │   │   ├── articles/
│   │   │   ├── writer/
│   │   │   ├── settings/
│   │   │   └── billing/
│   │   ├── (public)/           # Landing page, login
│   │   ├── api/
│   │   │   ├── trpc/           # tRPC handler
│   │   │   └── webhooks/       # Stripe, Clerk webhooks
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── dashboard/
│   │   ├── editor/
│   │   ├── discover/
│   │   └── shared/
│   ├── server/
│   │   ├── routers/            # tRPC routers
│   │   │   ├── articles.ts
│   │   │   ├── keywords.ts
│   │   │   ├── sites.ts
│   │   │   ├── billing.ts
│   │   │   └── index.ts
│   │   ├── db/
│   │   │   ├── schema.ts       # Drizzle schema
│   │   │   └── index.ts        # DB client
│   │   └── services/
│   │       ├── ai/             # Prompts e chamadas IA
│   │       ├── scraping/       # Jina Reader wrapper
│   │       ├── serp/           # SERP API wrapper
│   │       ├── wordpress/      # WP REST API client
│   │       ├── stripe/         # Billing logic
│   │       └── email/          # Resend templates
│   ├── jobs/                   # Trigger.dev jobs
│   │   ├── generate-article.ts
│   │   ├── discover-keywords.ts
│   │   ├── sync-gsc.ts
│   │   └── reset-credits.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── types.ts
│   └── emails/                 # React Email templates
│       ├── welcome.tsx
│       ├── article-ready.tsx
│       ├── published.tsx
│       └── credits-low.tsx
├── drizzle/                    # Migrations
├── public/
├── .env.local
├── drizzle.config.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

*Documento gerado em 2026-03-07. Versao 1.0.*
