import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("auth-test", "routes/auth-test.tsx"),
] satisfies RouteConfig;
