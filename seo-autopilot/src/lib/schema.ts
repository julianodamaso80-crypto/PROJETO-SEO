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
  numeric,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

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
  subscriptionStatus: text("subscription_status").default("none").notNull(), // none | active | past_due | canceled
  notificationPrefs: jsonb("notification_prefs").$type<{
    emailOnOnboardingComplete?: boolean;
    emailOnPlanGenerated?: boolean;
    emailOnProductionComplete?: boolean;
    emailOnPublicationComplete?: boolean;
  }>(),
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

  // ─── v2 expanded fields ───
  // Etapa 1: Negócio (expandido)
  segment: varchar("segment", { length: 255 }),
  subNiche: varchar("sub_niche", { length: 255 }),
  mainCity: varchar("main_city", { length: 255 }),
  state: varchar("state", { length: 100 }),
  serviceAreas: text("service_areas"),
  hasPhysicalLocation: boolean("has_physical_location").default(false),
  fullAddress: text("full_address"),
  businessHours: varchar("business_hours", { length: 255 }),

  // Etapa 2: Público e Mercado (expandido)
  highestRevenueService: text("highest_revenue_service"),
  averageTicket: varchar("average_ticket", { length: 100 }),

  // Etapa 3: Presença Digital (expandido)
  hasGoogleBusinessProfile: boolean("has_google_business_profile").default(false),
  googleBusinessUrl: varchar("google_business_url", { length: 500 }),
  socialMediaUrls: text("social_media_urls"),
  currentSeoInvestment: text("current_seo_investment"),
  blogPostCount: varchar("blog_post_count", { length: 50 }),
  usesWordPress: boolean("uses_wordpress").default(false),
  wordPressVersion: varchar("wordpress_version", { length: 50 }),
  hasWpAdminAccess: boolean("has_wp_admin_access").default(false),
  hasSearchConsole: boolean("has_search_console").default(false),
  hasGoogleAnalytics: boolean("has_google_analytics").default(false),

  // Etapa 4: Conteúdo e Voz (expandido)
  styleReference: text("style_reference"),
  hasCaseStudies: boolean("has_case_studies").default(false),
  caseStudiesDetails: text("case_studies_details"),
  hasTestimonials: boolean("has_testimonials").default(false),
  hasTeamPhotos: boolean("has_team_photos").default(false),
  hasOwnData: boolean("has_own_data").default(false),
  ownDataDetails: text("own_data_details"),
  sensitiveTopics: text("sensitive_topics"),

  // Etapa 5: Objetivos (expandido)
  priorityRegions: text("priority_regions"),
  priorityServices: text("priority_services"),
  timeline: varchar("timeline", { length: 100 }),

  // Etapa 6: Referências e Inspiração (NOVA)
  competitorSitesAdmired: text("competitor_sites_admired"),
  referenceSites: text("reference_sites"),
  contentConsumption: text("content_consumption"),
  desiredKeywords: text("desired_keywords"),
  additionalNotes: text("additional_notes"),

  // Etapa 4: Paleta de cores e imagens
  colorPaletteId: text("color_palette_id"),
  colorPrimary: text("color_primary"),
  colorSecondary: text("color_secondary"),
  colorAccent: text("color_accent"),
  logoUrl: text("logo_url"),
  teamPhotos: jsonb("team_photos").$type<{ url: string; filename: string }[]>(),
  referenceImages: jsonb("reference_images").$type<{ url: string; filename: string }[]>(),

  // Perguntas dinâmicas por nicho
  nicheSpecificData: jsonb("niche_specific_data").$type<Record<string, string | boolean>>(),

  // Etapa 7: Acesso Técnico (NOVA)
  wpAdminUrl: varchar("wp_admin_url", { length: 500 }),
  wpUsername: varchar("wp_username", { length: 255 }),
  wpAppPassword: text("wp_app_password"),
  gscAuthorizedEmail: varchar("gsc_authorized_email", { length: 255 }),
  gaAuthorizedEmail: varchar("ga_authorized_email", { length: 255 }),
  domainRegistrar: varchar("domain_registrar", { length: 255 }),
  hostingProvider: varchar("hosting_provider", { length: 255 }),
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

// ─── Content Plans ──────────────────────────────────────────────
export const contentPlans = pgTable("content_plans", {
  id: uuid("id").primaryKey().defaultRandom(),
  siteId: uuid("site_id").references(() => sites.id, { onDelete: "cascade" }),
  onboardingId: integer("onboarding_id").references(() => clientOnboarding.id, { onDelete: "set null" }),
  status: text("status").default("draft").notNull(), // draft | generating | review | approved | in_production | completed
  totalPages: integer("total_pages").default(0),
  pillarPages: integer("pillar_pages").default(0),
  clusterPages: integer("cluster_pages").default(0),
  serviceAreaPages: integer("service_area_pages").default(0),
  blogPages: integer("blog_pages").default(0),
  faqPages: integer("faq_pages").default(0),
  topicalMap: jsonb("topical_map"),
  clusters: jsonb("clusters"),
  internalLinkingPlan: jsonb("internal_linking_plan"),
  operatorConfig: jsonb("operator_config"),
  generationCost: numeric("generation_cost", { precision: 10, scale: 4 }).default("0"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  approvedAt: timestamp("approved_at", { withTimezone: true }),
  approvedBy: text("approved_by"),
});

// ─── Content Pages ──────────────────────────────────────────────
export const contentPages = pgTable("content_pages", {
  id: uuid("id").primaryKey().defaultRandom(),
  planId: uuid("plan_id").references(() => contentPlans.id, { onDelete: "cascade" }).notNull(),
  siteId: uuid("site_id").references(() => sites.id, { onDelete: "cascade" }),
  type: text("type").notNull(), // pillar | cluster | service_area | blog | faq | landing
  clusterId: text("cluster_id"),
  parentPillarId: text("parent_pillar_id"),
  title: text("title").notNull(),
  slug: text("slug").notNull(),
  targetKeyword: text("target_keyword").notNull(),
  secondaryKeywords: jsonb("secondary_keywords"),
  contentHtml: text("content_html"),
  contentMarkdown: text("content_markdown"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  schemaJson: jsonb("schema_json"),
  faqJson: jsonb("faq_json"),
  internalLinks: jsonb("internal_links"),
  wordCount: integer("word_count").default(0),
  uniquenessScore: numeric("uniqueness_score", { precision: 5, scale: 2 }),
  status: text("status").default("pending").notNull(),
  wpPostId: integer("wp_post_id"),
  wpUrl: text("wp_url"),
  generationCost: numeric("generation_cost", { precision: 10, scale: 4 }).default("0"),
  featuredImageUrl: text("featured_image_url"),
  featuredImageAlt: text("featured_image_alt"),
  featuredImageSource: text("featured_image_source"),
  generationModel: text("generation_model"),
  errorMessage: text("error_message"),
  displayOrder: integer("display_order").default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  publishedAt: timestamp("published_at", { withTimezone: true }),
});

// ─── WP Connections ─────────────────────────────────────────────
export const wpConnections = pgTable("wp_connections", {
  id: uuid("id").primaryKey().defaultRandom(),
  siteId: uuid("site_id").references(() => sites.id, { onDelete: "cascade" }).notNull(),
  wpUrl: text("wp_url").notNull(),
  wpUser: text("wp_user").notNull(),
  wpAppPassword: text("wp_app_password").notNull(),
  wpVersion: text("wp_version"),
  connectionStatus: text("connection_status").default("untested").notNull(),
  lastTestedAt: timestamp("last_tested_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Operator Notes ─────────────────────────────────────────────
export const operatorNotes = pgTable("operator_notes", {
  id: uuid("id").primaryKey().defaultRandom(),
  onboardingId: integer("onboarding_id").references(() => clientOnboarding.id, { onDelete: "cascade" }).notNull(),
  fieldPath: text("field_path"),
  noteType: text("note_type").default("info").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Keyword Research ───────────────────────────────────────────
export const keywordResearch = pgTable("keyword_research", {
  id: uuid("id").primaryKey().defaultRandom(),
  siteId: uuid("site_id").references(() => sites.id, { onDelete: "cascade" }).notNull(),
  planId: uuid("plan_id").references(() => contentPlans.id, { onDelete: "set null" }),
  keyword: text("keyword").notNull(),
  searchVolume: integer("search_volume"),
  difficulty: integer("difficulty"),
  cpc: numeric("cpc", { precision: 10, scale: 2 }),
  intent: text("intent"),
  serpFeatures: jsonb("serp_features"),
  source: text("source").default("manual").notNull(),
  clusterId: text("cluster_id"),
  isSelected: boolean("is_selected").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Relations ──────────────────────────────────────────────────
export const contentPlansRelations = relations(contentPlans, ({ one, many }) => ({
  site: one(sites, { fields: [contentPlans.siteId], references: [sites.id] }),
  onboarding: one(clientOnboarding, { fields: [contentPlans.onboardingId], references: [clientOnboarding.id] }),
  pages: many(contentPages),
  keywords: many(keywordResearch),
}));

export const contentPagesRelations = relations(contentPages, ({ one }) => ({
  plan: one(contentPlans, { fields: [contentPages.planId], references: [contentPlans.id] }),
  site: one(sites, { fields: [contentPages.siteId], references: [sites.id] }),
}));

export const wpConnectionsRelations = relations(wpConnections, ({ one }) => ({
  site: one(sites, { fields: [wpConnections.siteId], references: [sites.id] }),
}));

export const operatorNotesRelations = relations(operatorNotes, ({ one }) => ({
  onboarding: one(clientOnboarding, { fields: [operatorNotes.onboardingId], references: [clientOnboarding.id] }),
}));

export const keywordResearchRelations = relations(keywordResearch, ({ one }) => ({
  site: one(sites, { fields: [keywordResearch.siteId], references: [sites.id] }),
  plan: one(contentPlans, { fields: [keywordResearch.planId], references: [contentPlans.id] }),
}));
