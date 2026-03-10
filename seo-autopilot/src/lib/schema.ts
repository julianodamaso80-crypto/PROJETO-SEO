import {
  pgTable,
  uuid,
  text,
  serial,
  varchar,
  integer,
  boolean,
  timestamp,
  decimal,
  jsonb,
} from "drizzle-orm/pg-core";

// ─── Users ────────────────────────────────────────────────────
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  whatsapp: varchar("whatsapp", { length: 20 }),
  password: varchar("password", { length: 255 }).notNull(),
  role: varchar("role", { length: 20 }).default("user"),
  createdAt: timestamp("created_at").defaultNow(),
});

// ─── Workspaces ────────────────────────────────────────────────
export const workspaces = pgTable("workspaces", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  ownerId: text("owner_id").notNull(), // Clerk user ID
  plan: text("plan").default("starter").notNull(), // starter | growth | agency
  stripeCustomerId: text("stripe_customer_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  creditsRemaining: integer("credits_remaining").default(0).notNull(),
  creditsMonthly: integer("credits_monthly").default(15).notNull(),
  billingCycleStart: timestamp("billing_cycle_start", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Sites ─────────────────────────────────────────────────────
export const sites = pgTable("sites", {
  id: uuid("id").primaryKey().defaultRandom(),
  workspaceId: uuid("workspace_id")
    .references(() => workspaces.id, { onDelete: "cascade" })
    .notNull(),
  name: text("name").notNull(),
  url: text("url").notNull(),
  platform: text("platform").default("wordpress").notNull(),
  wpUsername: text("wp_username"),
  wpAppPassword: text("wp_app_password"),
  wpRestUrl: text("wp_rest_url"),
  language: text("language").default("pt-BR").notNull(),
  tone: text("tone").default("conversational").notNull(),
  niche: text("niche"),
  targetAudience: text("target_audience"),
  extraInstructions: text("extra_instructions"),
  gscConnected: boolean("gsc_connected").default(false).notNull(),
  gscProperty: text("gsc_property"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Keywords ──────────────────────────────────────────────────
export const keywords = pgTable("keywords", {
  id: uuid("id").primaryKey().defaultRandom(),
  workspaceId: uuid("workspace_id")
    .references(() => workspaces.id, { onDelete: "cascade" })
    .notNull(),
  siteId: uuid("site_id").references(() => sites.id, { onDelete: "set null" }),
  keyword: text("keyword").notNull(),
  volume: integer("volume"),
  difficulty: integer("difficulty"),
  cpc: decimal("cpc", { precision: 10, scale: 2 }),
  intent: text("intent"),
  language: text("language"),
  source: text("source"),
  saved: boolean("saved").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Articles ──────────────────────────────────────────────────
export const articles = pgTable("articles", {
  id: uuid("id").primaryKey().defaultRandom(),
  workspaceId: uuid("workspace_id")
    .references(() => workspaces.id, { onDelete: "cascade" })
    .notNull(),
  siteId: uuid("site_id").references(() => sites.id, { onDelete: "set null" }),
  keywordId: uuid("keyword_id").references(() => keywords.id, { onDelete: "set null" }),

  // Generation config
  primaryKeyword: text("primary_keyword").notNull(),
  secondaryKeywords: text("secondary_keywords").array(),
  postType: text("post_type").default("guide").notNull(),
  targetLength: integer("target_length").default(2500).notNull(),
  tone: text("tone"),
  includeImages: boolean("include_images").default(true).notNull(),
  includeFaq: boolean("include_faq").default(true).notNull(),

  // Generated content
  title: text("title"),
  slug: text("slug"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  contentHtml: text("content_html"),
  contentMarkdown: text("content_markdown"),
  outline: jsonb("outline"),
  faqSchema: jsonb("faq_schema"),
  articleSchema: jsonb("article_schema"),

  // SEO metrics
  seoScore: integer("seo_score"),
  wordCount: integer("word_count"),
  readabilityScore: decimal("readability_score", { precision: 5, scale: 2 }),
  internalLinks: jsonb("internal_links"),
  externalLinks: jsonb("external_links"),

  // Status & publishing
  status: text("status").default("queued").notNull(),
  errorMessage: text("error_message"),
  wpPostId: integer("wp_post_id"),
  publishedUrl: text("published_url"),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  scheduledAt: timestamp("scheduled_at", { withTimezone: true }),

  // Costs
  creditsUsed: integer("credits_used").default(1).notNull(),
  tokensInput: integer("tokens_input"),
  tokensOutput: integer("tokens_output"),
  generationCostUsd: decimal("generation_cost_usd", { precision: 10, scale: 4 }),

  // GSC metrics
  impressions: integer("impressions").default(0).notNull(),
  clicks: integer("clicks").default(0).notNull(),
  avgPosition: decimal("avg_position", { precision: 5, scale: 1 }),

  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Client Onboarding ────────────────────────────────────────
export const clientOnboarding = pgTable("client_onboarding", {
  id: serial("id").primaryKey(),
  token: varchar("token", { length: 64 }).notNull().unique(),
  createdBy: integer("created_by").references(() => users.id),
  clientName: varchar("client_name", { length: 255 }),
  clientEmail: varchar("client_email", { length: 255 }),
  siteUrl: varchar("site_url", { length: 500 }),
  hasSite: boolean("has_site").default(false),
  businessName: varchar("business_name", { length: 255 }),
  businessDescription: text("business_description"),
  mainProduct: text("main_product"),
  targetAudience: text("target_audience"),
  location: varchar("location", { length: 255 }),
  competitors: text("competitors"),
  competitorUrls: text("competitor_urls"),
  keywords: text("keywords"),
  contentGoal: varchar("content_goal", { length: 100 }),
  tone: varchar("tone", { length: 100 }),
  differentials: text("differentials"),
  monthlyBudget: varchar("monthly_budget", { length: 100 }),
  extraInfo: text("extra_info"),
  b2bOrB2c: varchar("b2b_or_b2c", { length: 10 }),
  yearsInBusiness: varchar("years_in_business", { length: 50 }),
  clientsServed: varchar("clients_served", { length: 100 }),
  hasBlog: boolean("has_blog").default(false),
  clientProblem: text("client_problem"),
  certifications: text("certifications"),
  contactMethod: varchar("contact_method", { length: 100 }),
  seasonality: text("seasonality"),
  clientQuestions: text("client_questions"),
  status: varchar("status", { length: 20 }).default("pending"),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

// ─── Jobs (generation pipeline tracking) ───────────────────────
export const jobs = pgTable("jobs", {
  id: uuid("id").primaryKey().defaultRandom(),
  workspaceId: uuid("workspace_id")
    .references(() => workspaces.id, { onDelete: "cascade" })
    .notNull(),
  articleId: uuid("article_id").references(() => articles.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  status: text("status").default("pending").notNull(),
  step: text("step"),
  progress: integer("progress").default(0).notNull(),
  modelUsed: text("model_used"),
  tokensIn: integer("tokens_in"),
  tokensOut: integer("tokens_out"),
  durationMs: integer("duration_ms"),
  errorDetail: text("error_detail"),
  metadata: jsonb("metadata"),
  startedAt: timestamp("started_at", { withTimezone: true }),
  completedAt: timestamp("completed_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
