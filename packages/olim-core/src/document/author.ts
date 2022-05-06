import { z } from 'zod';
import { NoInline } from '../util/type';

const _OlimAuthorContact = z.strictObject({
  id: z.string(),
  platformId: z.string(),
});
export type OlimAuthorContact = NoInline<z.infer<typeof _OlimAuthorContact>>;
export const OlimAuthorContact: z.Schema<OlimAuthorContact> =
  _OlimAuthorContact;

export const _OlimAuthor = z.strictObject({
  id: z.string(),
  displayName: z.string(),
  profileImageUrl: z.string().url(),
  contactList: z.array(OlimAuthorContact),
});
export type OlimAuthor = NoInline<z.infer<typeof _OlimAuthor>>;
export const OlimAuthor: z.Schema<OlimAuthor> = _OlimAuthor;
