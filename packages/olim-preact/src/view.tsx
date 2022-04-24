export interface OlimViewProps {
  canEdit: boolean;
}

export function OlimView({ canEdit }: OlimViewProps): JSX.Element {
  return (
    <main>
      <section></section>
      <section>
        <div contentEditable={canEdit}>이게 되네</div>
        <div contentEditable={canEdit}>이게 되네</div>
        <div contentEditable={canEdit}>이게 되네</div>
      </section>
    </main>
  );
}
