export type MyOmit<T, K extends keyof any> = {
    [Property in keyof T as Property extends K ? never : Property]: T[Property]
}