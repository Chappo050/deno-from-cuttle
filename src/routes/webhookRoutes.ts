// routes/webhookRoutes.ts
import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import * as webhookController from "../controllers/webhook.controller.ts"
const router = new Router();
router.prefix('/webhooks');

router
    .post('/', webhookController.healthCheck);

export default router;
