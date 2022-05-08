import { nanoid } from 'nanoid';
import { NoInline, Tagged } from './type.js';

export type NanoId10 = NoInline<Tagged<string, 'NanoId10'>>;

export function generateNanoid10(): NanoId10 {
  return nanoid(10) as unknown as NanoId10;
}
