import { StyledOlimEditor } from '../../../components/olim/StyledEditor';
import { usePageContext } from '../../../renderer/usePageContext';

export function Page(): JSX.Element {
  const context = usePageContext();

  const { id } = context.routeParams ?? {};

  return (
    <>
      <StyledOlimEditor />
    </>
  );
}
