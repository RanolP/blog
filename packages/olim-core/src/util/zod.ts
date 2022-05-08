import { z } from 'zod';
import { NanoId10 } from './nanoid.js';
import { NoInline, Tagged } from './type.js';

export type AlterSchemaOutput<Schema extends z.Schema, NewOutput> = z.Schema<
  NewOutput,
  Schema['_def'],
  Schema['_input']
>;

export type ZodTaggedString<
  TaggedString extends NoInline<Tagged<string, unknown>>,
> = z.ZodType<TaggedString, z.ZodStringDef> & {
  [K in Exclude<keyof z.ZodString, keyof z.ZodType>]: z.ZodString[K] extends (
    ...params: infer Params
  ) => z.ZodString
    ? (...params: Params) => ZodTaggedString<TaggedString>
    : z.ZodString[K];
};

export function taggedString<
  TaggedString extends NoInline<Tagged<string, unknown>>,
>(): ZodTaggedString<TaggedString> {
  return z.string() as unknown as ZodTaggedString<TaggedString>;
}

export function nanoid10(): ZodTaggedString<NanoId10> {
  return taggedString<NanoId10>().length(10);
}

export function fallback<T>(value: T): z.ZodSchema<T> {
  return z.any().transform(() => value);
}
