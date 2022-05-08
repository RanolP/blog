import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr';
import { PageShell } from './PageShell';
import type { PageContext } from './types.js';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';
import { render as renderToString } from 'preact-render-to-string';
import { getCssText } from '../stitches.config.js';
import { installResetStyle } from '../styles/reset';
import { installTypographyStyle } from '../styles/typography';

export const passToClient = [
  'pageProps',
  'documentProps',
  'someAsyncProps',
  'routeParams',
];

export async function render(pageContext: PageContextBuiltIn & PageContext) {
  installResetStyle();
  installTypographyStyle();

  const { Page, pageProps } = pageContext;
  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || 'Vite SSR app';
  const desc =
    (documentProps && documentProps.description) ||
    'App using Vite + vite-plugin-ssr';

  const documentHtml = escapeInject`
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="${import.meta.env.BASE_URL}src/favicon.svg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css" />
        <style id="stitches">
          ${dangerouslySkipEscape(getCssText())}
        </style>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>
  `;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}
