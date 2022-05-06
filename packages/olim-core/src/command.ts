export class OlimCommand {
  constructor(public readonly id: string) {}
}

export interface CommandTarget<NextState> {
  execute(command: OlimCommand): NextState;
}
