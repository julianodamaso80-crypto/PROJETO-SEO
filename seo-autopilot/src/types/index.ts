// Workspace
export interface Workspace {
  id: string;
  clerk_org_id: string;
  name: string;
  plan: "free" | "starter" | "pro" | "agency";
  credits_remaining: number;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  created_at: string;
}

// Site
export interface Site {
  id: string;
  workspace_id: string;
  url: string;
  name: string | null;
  language: string;
  tone: string;
  niche: string | null;
  wp_url: string | null;
  wp_user: string | null;
  wp_app_password: string | null;
  gsc_connected: boolean;
  created_at: string;
}

// Keyword
export interface Keyword {
  id: string;
  workspace_id: string;
  site_id: string;
  keyword: string;
  volume: number | null;
  difficulty: number | null;
  intent: "informacional" | "navegacional" | "transacional" | "comercial" | null;
  status: "discovered" | "queued" | "writing" | "done";
  created_at: string;
}

// Article
export interface Article {
  id: string;
  workspace_id: string;
  site_id: string;
  keyword_id: string | null;
  title: string | null;
  slug: string | null;
  content: string | null;
  meta_title: string | null;
  meta_description: string | null;
  status: "generating" | "draft" | "reviewing" | "published" | "failed";
  wp_post_id: number | null;
  tokens_used: number;
  cost_usd: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

// Generation Job
export interface GenerationJob {
  id: string;
  workspace_id: string;
  article_id: string;
  trigger_job_id: string | null;
  status: "pending" | "running" | "completed" | "failed";
  error_message: string | null;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
}
