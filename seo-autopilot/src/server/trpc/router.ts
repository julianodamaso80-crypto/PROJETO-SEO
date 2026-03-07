import { router } from "./init";
import { workspacesRouter } from "./routers/workspaces";
import { sitesRouter } from "./routers/sites";
import { articlesRouter } from "./routers/articles";
import { keywordsRouter } from "./routers/keywords";

export const appRouter = router({
  workspaces: workspacesRouter,
  sites: sitesRouter,
  articles: articlesRouter,
  keywords: keywordsRouter,
});

export type AppRouter = typeof appRouter;
