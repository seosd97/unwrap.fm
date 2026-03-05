import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("pages/home/ui/home-page.tsx"),
  route("account", "pages/account/ui/account-page.tsx"),
] satisfies RouteConfig;
