// routes/index.ts
import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import webhookRoutes from "./webhookRoutes.ts";

const router = new Router();

router.use(
    webhookRoutes.routes(),
    webhookRoutes.allowedMethods()
);

export default router;
