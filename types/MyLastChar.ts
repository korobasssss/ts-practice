export type MyLastChar<T extends string> = T extends `${infer R}${infer L}` ? L extends '' ? R : MyLastChar<L> : never