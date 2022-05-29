export class OlimCommand {
  constructor(public readonly id: string) {}
}

export interface CommandTarget {
  execute(command: OlimCommand): this;
}
