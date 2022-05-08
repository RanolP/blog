import { PageContextProvider } from './usePageContext';
import type { PageContext } from './types';
import { Link } from './Link';

export function PageShell({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) {
  return (
    <PageContextProvider pageContext={pageContext}>
      {children}
    </PageContextProvider>
  );
}
