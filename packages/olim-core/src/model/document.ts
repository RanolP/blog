import cjkSlug from 'cjk-slug';
import { z } from 'zod';
import { NoInline } from '../util/type.js';
import { AlterSchemaOutput, nanoid10 } from '../util/zod.js';
import { OlimAuthor } from './author.js';
import { OlimSlide } from './slide.js';
import { OlimSubtitle } from './subtitle.js';

const _OlimDocument = z
  .strictObject({
    author: OlimAuthor,
    id: nanoid10(),
    title: z.string(),
    slug: z.string().optional(),
    slides: z.array(OlimSlide).default([]),
    subtitles: z.array(OlimSubtitle).default([]),
  })
  .transform(({ title, slug, ...rest }) => ({
    title,
    slug: slug ?? cjkSlug(title),
    ...rest,
  }));
export type OlimDocument = NoInline<z.infer<typeof _OlimDocument>>;
export const OlimDocument: AlterSchemaOutput<
  typeof _OlimDocument,
  OlimDocument
> = _OlimDocument;
