import { VNode } from "preact";

export interface OlimInventoryViewProps {
  className?: string;
  children: VNode[];
}

export function OlimInventoryView({
  className,
  children,
}: OlimInventoryViewProps): JSX.Element {
  return (
    <div className={className}>
      <h3>보관함</h3>
      {children}
    </div>
  );
}
