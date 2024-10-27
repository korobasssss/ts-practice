export type MyRecord<T extends number | string | symbol, K> = {
    [key in T]: K
}