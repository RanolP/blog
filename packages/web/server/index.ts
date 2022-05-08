import fastify from 'fastify';
import fastifyCompress from '@fastify/compress';
import fastifyStatic from '@fastify/static';
import { renderPage } from 'vite-plugin-ssr';
import { ViteDevServer } from 'vite';
import * as path from 'path';
import * as url from 'url';

const isProduction = process.env.NODE_ENV === 'production';
const root = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  '..',
);

startServer();

async function startServer() {
  const app = fastify();

  await app.register(fastifyCompress);

  let viteDevServer: ViteDevServer | null = null;
  if (isProduction) {
    await app.register(fastifyStatic, { root: `${root}/dist/client` });
  } else {
    const vite = await import('vite');
    const server = await vite.createServer({
      root,
      server: { middlewareMode: 'ssr' },
    });
    app.addHook('onRequest', (request, reply, done) => {
      server.middlewares(request.raw, reply.raw, done);
    });
    viteDevServer = server;
  }

  app.setNotFoundHandler(async (request, reply) => {
    const url = request.url;
    const pageContextInit = {
      url,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) return;
    const { body, statusCode, contentType } = httpResponse;
    reply.status(statusCode).type(contentType).send(body);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
