import { z } from 'zod';
import { NoInline } from '../util/type.js';
import { AlterSchemaOutput, nanoid10 } from '../util/zod.js';
import { OlimNode } from './node.js';

const _OlimTextChunk = z.strictObject({
  id: nanoid10(),
  nodeList: z.array(OlimNode).default([]),
});
export type OlimTextChunk = NoInline<z.infer<typeof _OlimTextChunk>>;
export const OlimTextChunk: AlterSchemaOutput<
  typeof _OlimTextChunk,
  OlimTextChunk
> = _OlimTextChunk;
