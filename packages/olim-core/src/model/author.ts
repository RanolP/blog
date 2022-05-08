import { z } from 'zod';
import { NoInline } from '../util/type.js';
import { AlterSchemaOutput } from '../util/zod.js';

const _OlimAuthorContact = z.strictObject({
  platformId: z.string(),
  username: z.string(),
});
export type OlimAuthorContact = NoInline<z.infer<typeof _OlimAuthorContact>>;
export const OlimAuthorContact: AlterSchemaOutput<
  typeof _OlimAuthorContact,
  OlimAuthorContact
> = _OlimAuthorContact;

export const _OlimAuthor = z
  .strictObject({
    id: z.string(),
    displayName: z.string().optional(),
    profileImageUrl: z.string().url().optional(),
    contactList: z.array(OlimAuthorContact).default([]),
  })
  .transform(({ id, displayName, ...obj }) => ({
    id,
    displayName: displayName ?? id,
    ...obj,
  }));
export type OlimAuthor = NoInline<z.infer<typeof _OlimAuthor>>;
export const OlimAuthor: AlterSchemaOutput<typeof _OlimAuthor, OlimAuthor> =
  _OlimAuthor;
