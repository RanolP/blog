import { usePageContext } from './usePageContext';

const BaseUrl = 'https://ranolp.github.io/blog/';

export function Link({ href, children }: { href: string; children: string }) {
  const pageContext = usePageContext();
  const className = [
    'navigation-link',
    pageContext.urlPathname === href && 'is-active',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <a href={new URL(href, BaseUrl).pathname} className={className}>
      {children}
    </a>
  );
}
