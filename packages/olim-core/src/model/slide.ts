import { z } from 'zod';
import { NoInline } from '../util/type.js';
import { AlterSchemaOutput } from '../util/zod.js';
import { OlimConducting } from './conducting.js';
import { OlimTextChunk } from './text-chunk.js';

const _OlimSlide = z.strictObject({
  conductingList: z.array(OlimConducting),
  chunk: OlimTextChunk,
});
export type OlimSlide = NoInline<z.infer<typeof _OlimSlide>>;
export const OlimSlide: AlterSchemaOutput<typeof _OlimSlide, OlimSlide> =
  _OlimSlide;
