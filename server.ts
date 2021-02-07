import { Application } from 'https://deno.land/x/oak/mod.ts';
// files
import router from './router.ts';

const app = new Application(); // initiate Oak App

// Logger middleware
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Routes middleware
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8888 }); // run server
