import { OlimChunkEditor, OlimInventoryView, OlimItemView } from '@olim/preact';
import { OlimEditor } from '@olim/core';
import { useState } from 'preact/hooks';
import { styled } from '../../stitches.config';

const Container = styled('main', {
  width: '100vw',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateAreas: `
    "header    header    "
    "inventory chunk-list"
  `,
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'auto 1fr',
});

const Header = styled('header', {
  gridArea: 'header',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  height: '3rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0 1rem',
  background: 'white',
});

const StyledInventoryView = styled(OlimInventoryView, {
  gridArea: 'inventory',
  background: '#d2d2d2',
  position: 'sticky',
  top: '3rem',
  height: 'calc(100vh - 3rem)',
  alignSelf: 'start',
  boxShadow: `
    #0a0a0a44 0.5rem 0.5rem 0.5rem inset,
    #0a0a0a44 -0.5rem -0.5rem 0.5rem inset
  `,
});

const ChunkList = styled('div', {
  background: '#e9e9e9',
  gridArea: 'chunk-list',
});

const ChunkWrap = styled('div', {
  height: 'calc(100vh - 3rem)',
  display: 'grid',
  alignItems: 'center',
  justifyItems: 'center',
  scrollSnapAlign: 'end',
});

const StyledChunkEditor = styled(OlimChunkEditor, {
  padding: '1em',
  background: 'white',
  borderBottomLeftRadius: '0.5em',
  boxShadow: `
    0 0 1em 0.3em #0a0a0a44
  `,
});

export function StyledOlimEditor() {
  const [editor] = useState(new OlimEditor());

  return (
    <Container>
      <Header>
        난로 앞 / 블로그를 만들기 위한 한 걸음 / 어떤 서브타이틀의 세계 / 그 속
        서브 타이틀
      </Header>
      <StyledInventoryView>
        <OlimItemView />
        <OlimItemView />
        <OlimItemView />
      </StyledInventoryView>
      <ChunkList>
        <ChunkWrap>
          <StyledChunkEditor />
        </ChunkWrap>
        <ChunkWrap>
          <StyledChunkEditor />
        </ChunkWrap>
        <ChunkWrap>
          <StyledChunkEditor />
        </ChunkWrap>
      </ChunkList>
    </Container>
  );
}
