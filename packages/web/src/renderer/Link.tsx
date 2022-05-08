import { usePageContext } from './usePageContext';

export function Link({ href, children }: { href: string; children: string }) {
  if (!href.startsWith('/')) throw new Error('Link href should start with /');
  href = href.slice(1); // We remove the leading '/'

  const pageContext = usePageContext();
  const className = [
    'navigation-link',
    pageContext.urlPathname === href && 'is-active',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a href={import.meta.env.BASE_URL + href} className={className}>
      {children}
    </a>
  );
}
