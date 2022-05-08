import { hydrate, render as renderPreact } from 'preact';
import { PageShell } from './PageShell.js';
import { getPageTitle } from './getPageTitle.js';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router';
import type { PageContext } from './types.js';

export const clientRouting = true;
export { render };
export { onHydrationEnd };
export { onPageTransitionStart };
export { onPageTransitionEnd };

async function render(pageContext: PageContextBuiltInClient & PageContext) {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );
  const container = document.getElementById('app')!;
  if (pageContext.isHydration) {
    hydrate(page, container);
  } else {
    renderPreact(page, container);
  }
  document.title = getPageTitle(pageContext);
}

function onHydrationEnd() {
  console.log('Hydration finished; page is now interactive.');
}
function onPageTransitionStart() {
  console.log('Page transition start');
  document.getElementById('app')!.classList.add('page-transition');
}
function onPageTransitionEnd() {
  console.log('Page transition end');
  document.getElementById('app')!.classList.remove('page-transition');
}
