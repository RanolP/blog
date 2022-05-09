import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { OlimDocument } from '@olim/core';
import { PageContextBuiltIn } from 'vite-plugin-ssr';

export async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const posts = findPosts();
  return {
    pageContext: {
      pageProps: {
        document: posts.find(
          (post) => post.slug === pageContext.routeParams['id'],
        ),
      },
    },
  };
}

export async function prerender() {
  const posts = findPosts();
  return posts.map((post) => `/posts/${post.slug}/edit`);
}

const __dirname = url.fileURLToPath(import.meta.url);
function findPosts(): OlimDocument[] {
  const postsDirectory = path.join(__dirname, '../../../../../../../posts');
  const posts = [];
  for (const file of fs.readdirSync(postsDirectory)) {
    posts.push(
      OlimDocument.parse(
        JSON.parse(
          fs.readFileSync(path.join(postsDirectory, file), {
            encoding: 'utf-8',
          }),
        ),
      ),
    );
  }
  return posts;
}
