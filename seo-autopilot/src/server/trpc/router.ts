import { router } from "./init";
import { workspacesRouter } from "./routers/workspaces";
import { sitesRouter } from "./routers/sites";
import { articlesRouter } from "./routers/articles";
import { keywordsRouter } from "./routers/keywords";
import { contentPlanRouter } from "./routers/contentPlan";
import { contentPageRouter } from "./routers/contentPage";
import { operatorRouter } from "./routers/operator";
import { wpConnectionRouter } from "./routers/wpConnection";
import { dashboardRouter } from "./routers/dashboard";
import { billingRouter } from "./routers/billing";

export const appRouter = router({
  workspaces: workspacesRouter,
  sites: sitesRouter,
  articles: articlesRouter,
  keywords: keywordsRouter,
  contentPlan: contentPlanRouter,
  contentPage: contentPageRouter,
  operator: operatorRouter,
  wpConnection: wpConnectionRouter,
  dashboard: dashboardRouter,
  billing: billingRouter,
});

export type AppRouter = typeof appRouter;
