import { z } from 'zod';
import { NoInline } from '../util/type.js';
import { AlterSchemaOutput, nanoid10 } from '../util/zod.js';

const _OlimConducting = z.strictObject({
  id: nanoid10(),
  kind: z.string(),
  metadata: z.record(z.string()),
});
export type OlimConducting = NoInline<z.infer<typeof _OlimConducting>>;
export const OlimConducting: AlterSchemaOutput<
  typeof _OlimConducting,
  OlimConducting
> = _OlimConducting;
