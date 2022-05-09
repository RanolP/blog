import { z } from 'zod';

export interface OlimNodeInput {
  kind: string;
  innerContent: string;
  children?: OlimNodeInput[] | undefined;
  metadata?: Record<string, string> | undefined;
}
export interface OlimNode {
  kind: string;
  innerContent: string;
  children: OlimNode[];
  metadata: Record<string, string>;
}

export const OlimNode: z.ZodType<OlimNode, z.ZodTypeDef, OlimNodeInput> =
  z.lazy(() =>
    z.strictObject({
      kind: z.string(),
      innerContent: z.string(),
      children: z.array(OlimNode).default([]),
      metadata: z.record(z.string()).default({}),
    }),
  );
