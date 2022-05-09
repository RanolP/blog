import { OlimDocument } from '@olim/core/dist';
import { StyledOlimEditor } from '../../../components/olim/StyledEditor';
import { usePageContext } from '../../../renderer/usePageContext';

export function Page(): JSX.Element {
  const context = usePageContext();

  const { id } = context.routeParams ?? {};
  const document = context.pageProps['document'] as OlimDocument;

  return (
    <>
      <StyledOlimEditor initialDocument={document} />
    </>
  );
}
