export enum OlimEditorSelectionKind {
  Slide,
  Chunk,
  TextRange,
  Inventory,
  Item,
}

export abstract class OlimEditorSelection {
  abstract readonly kind: OlimEditorSelectionKind;
}
