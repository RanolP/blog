import { z } from 'zod';
import { NoInline } from '../util/type.js';
import { AlterSchemaOutput } from '../util/zod.js';

const _OlimNode = z.strictObject({
  isBlock: z.boolean(),
  kind: z.string(),
  innerContent: z.string(),
  metadata: z.record(z.string()),
});
export type OlimNode = NoInline<z.infer<typeof _OlimNode>>;
export const OlimNode: AlterSchemaOutput<typeof _OlimNode, OlimNode> =
  _OlimNode;
