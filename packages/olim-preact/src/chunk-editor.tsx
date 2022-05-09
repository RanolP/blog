import { OlimTextChunk } from '@olim/core/dist';

export interface OlimChunkEditorProps {
  className?: string;
  chunk: OlimTextChunk;
}

export function OlimChunkEditor({ className, chunk }: OlimChunkEditorProps) {
  return (
    <section className={className} contentEditable={true}>
      {chunk.nodeList.map((node, id) => (
        <span key={id}>{node.innerContent}</span>
      ))}
    </section>
  );
}
