import { createElement } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { SyntheticEvent } from 'react';
import { Link } from '../../renderer/Link';
import { styled } from '../../stitches.config';

export function Page(): JSX.Element {
  return (
    <>
      <Link href="/posts/블로그를-만들기-위한-한-걸음/edit">여기</Link>에서
      에디터를 구경하세요 아직 아무것도 안 됨
      <Editor />
    </>
  );
}

interface OlimNode {
  kind: string;
  props: Record<string, unknown>;
}
interface OlimSelection {
  begin: number;
  end: number;
}
const Container = styled('div', {
  border: '0.2em solid #d2d2d2',
  borderRadius: '0.4em',
  width: '40em',
  minHeight: '8em',
  padding: '0.2em',
  margin: '0.5em',
  outline: 'none',
  '&:focus': {
    borderColor: '#73a3d2',
  },
});
export function Editor(): JSX.Element {
  const [children, setChildren] = useState<OlimNode[]>([]);
  const [selection, setSelection] = useState<OlimSelection | null>({
    begin: 0,
    end: 0,
  });
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onSelectionChange() {
      const domSelection = document.getSelection();
      if (!domSelection) {
        setSelection(null);
        return;
      }
      if (!wrapper.current) {
        return;
      }
      if (!wrapper.current.contains(domSelection.anchorNode)) {
        return;
      }
      if (!wrapper.current.contains(domSelection.focusNode)) {
        return;
      }
      console.log(domSelection);
      setSelection({
        begin: 0,
        end: 0,
      });
    }
    document.addEventListener('selectionchange', onSelectionChange);

    return () => {
      document.removeEventListener('selectionchange', onSelectionChange);
    };
  }, [selection]);

  return (
    <>
      <h2>만들고 부숴야지 그냥은 못 만들겠다</h2>

      <Container contentEditable={true} ref={wrapper}>
        {children.map((child) => (
          <OlimNodeView node={child} />
        ))}
      </Container>
    </>
  );
}
export function OlimNodeView({ node }: { node: OlimNode }): JSX.Element {
  return createElement(node.kind, node.props);
}
