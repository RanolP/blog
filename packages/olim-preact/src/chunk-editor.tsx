export interface OlimChunkEditorProps {
  className?: string;
}

export function OlimChunkEditor({ className }: OlimChunkEditorProps) {
  return (
    <section className={className} contentEditable={true}>
      이게 되네
    </section>
  );
}
