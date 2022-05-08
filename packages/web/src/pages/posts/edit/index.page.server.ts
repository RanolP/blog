import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { OlimDocument } from '@olim/core';

const __dirname = url.fileURLToPath(import.meta.url);

export async function prerender() {
  const postsDirectory = path.join(__dirname, '../../../../../../posts');
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
  return posts.map((post) => `/posts/${post.slug}/edit`);
}
