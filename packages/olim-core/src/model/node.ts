import { z } from 'zod';
import { NanoId10 } from '../util/nanoid.js';
import { nanoid10 } from '../util/zod.js';

export interface OlimNodeInput {
  id: NanoId10;
  kind: string;
  innerContent: string;
  children?: OlimNodeInput[] | undefined;
  props?: Record<string, string> | undefined;
}
export interface OlimNode {
  id: NanoId10;
  kind: string;
  innerContent: string;
  children: OlimNode[];
  props: Record<string, string>;
}

export const OlimNode: z.ZodType<OlimNode, z.ZodTypeDef, OlimNodeInput> =
  z.lazy(() =>
    z.strictObject({
      id: nanoid10(),
      kind: z.string(),
      innerContent: z.string(),
      children: z.array(OlimNode).default([]),
      props: z.record(z.string()).default({}),
    }),
  );
