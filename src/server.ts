// server.ts
import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import router from './routes/index.ts';

const port = 8000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is running on port ${port}`);

await app.listen({ port });
