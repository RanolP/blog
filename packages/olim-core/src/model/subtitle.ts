import cjkSlug from 'cjk-slug';
import { z } from 'zod';
import { NoInline } from '../util/type.js';
import { AlterSchemaOutput, nanoid10 } from '../util/zod.js';

const _OlimSubtitle = z
  .strictObject({
    insertBefore: z.number(),
    text: z.string(),
    slug: z.string().optional(),
    level: z.number().int().min(2).max(6),
  })
  .transform(({ text, slug, ...rest }) => ({
    text,
    slug: slug ?? cjkSlug(text),
    ...rest,
  }));
export type OlimSubtitle = NoInline<z.infer<typeof _OlimSubtitle>>;
export const OlimSubtitle: AlterSchemaOutput<
  typeof _OlimSubtitle,
  OlimSubtitle
> = _OlimSubtitle;
