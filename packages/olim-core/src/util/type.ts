declare const NeverExist: unique symbol;
export type NoInline<T> = Omit<T, typeof NeverExist>;

export declare const Tag: unique symbol;
export type Tagged<T, U> = T & { __tag__: U };
