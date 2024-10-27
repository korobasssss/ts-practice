export type MyConstructorParameters<T extends new (...args: any[]) => unknown> = 
    T extends new (...args: infer K) => unknown ? K : never;