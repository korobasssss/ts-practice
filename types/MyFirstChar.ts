export type MyFirstChar<T extends string> = T extends `${infer F}${infer R}` ? F : never