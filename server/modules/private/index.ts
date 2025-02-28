import { Hono } from "hono";
import { auth } from "@/server/lib/auth";
import privateRoutesMiddleware from "@/server/middleware";

const privateRoutes = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>()
  .use(privateRoutesMiddleware)
  .get("/", (c) => {
    return c.json({ message: "Private route", user: c.get("user") });
  });

export default privateRoutes;
