import { z } from 'zod';
import { NoInline } from '../util/type';
import { nanoid10 } from '../util/zod';
import { OlimAuthor } from './author';

const _OlimDocument = z.strictObject({
  author: OlimAuthor,
  id: nanoid10(),
});
export type OlimDocument = NoInline<z.infer<typeof _OlimDocument>>;
export const OlimDocument: z.Schema<OlimDocument> = _OlimDocument;
