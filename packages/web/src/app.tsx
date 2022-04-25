import { OlimChunkEditor, OlimInventoryView, OlimItemView } from '@olim/preact';
import { OlimEditor } from '@olim/core';
import { useState } from 'preact/hooks';
import { styled } from './stitches.config';
import { MarchingSquare } from './MarchingSquare';

const Container = styled('main', {
  width: '100vw',
  minHeight: '100vh',
  display: 'grid',
  gridTemplate: `
    "inventory chunk-list" / 1fr 1fr
  `,
});

const StyledInventoryView = styled(OlimInventoryView, {
  gridArea: 'inventory',
  background: '#d2d2d2',
  boxShadow: `
    #0a0a0a44 0.5rem 0.5rem 0.5rem inset,
    #0a0a0a44 -0.5rem -0.5rem 0.5rem inset
  `
});

const ChunkList = styled('div', {
  background: '#e9e9e9',
  gridArea: 'chunk-list',
});

const StyledChunkEditor = styled(OlimChunkEditor, {
  margin: '4em 1em',
  padding: '1em',
  background: 'white',
  borderBottomLeftRadius: '0.5em',
  boxShadow: `
    0 0 1em 0.3em #0a0a0a44
  `
})

export function App() {
  const [editor] = useState(new OlimEditor());

  return (
    <>
      <Container>
        <StyledInventoryView>
          <OlimItemView />
          <OlimItemView />
          <OlimItemView />
        </StyledInventoryView>
        <ChunkList>
          <StyledChunkEditor />
          <StyledChunkEditor />
          <StyledChunkEditor />
        </ChunkList>
      </Container>
      <MarchingSquare />
    </>
  );
}
