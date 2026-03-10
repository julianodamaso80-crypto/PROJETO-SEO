export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: [
    "/dashboard(.*)",
    "/discover(.*)",
    "/articles(.*)",
    "/settings(.*)",
    "/billing(.*)",
    "/admin(.*)",
  ],
};
