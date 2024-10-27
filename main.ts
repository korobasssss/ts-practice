import { 
            MyConstructorParameters,
            MyExclude, MyExtract, MyInstanceType, MyNonNullable, 
            MyOmit, MyParameters, MyPartial, MyPick, 
            MyReadonly, MyRecord, MyRequired,
            MyReturnType, MyThisParameterType
        } from "./types"

// 1. MyPartial
type Foo1 = {
    a: string
    b: number
    c: boolean
  }

  const b1: MyPartial<Foo1> = {
    a: 'BFE.dev'
  }
  const c1: MyPartial<Foo1> = {
    b: 123
  }
  const d1: MyPartial<Foo1> = {
    b: 123,
    c: true
  }



// 2. MyRequired
type Foo2 = {
    a?: string
    b?: number
    c?: boolean
  }
//   const a2: MyRequired<Foo2> = {}
//   // Error
//   const b2: MyRequired<Foo2> = {
//     a: 'BFE.dev'
//   }
//   // Error
//   const c2: MyRequired<Foo2> = {
//     b: 123
//   }
//   // Error
//   const d2: MyRequired<Foo2> = {
//     b: 123,
//     c: true
//   }
//  // Error
  const e2: MyRequired<Foo2> = {
    a: 'BFE.dev',
    b: 123,
    c: true
  }// valid



// 3. MyReadonly
type Foo3 = {
    a: string
  }
  const a3:Foo3 = {
    a: 'BFE.dev',
  }
  a3.a = 'bigfrontend.dev'
  // OK
  const b3:MyReadonly<Foo3> = {
    a: 'BFE.dev'
  }
//   b3.a = 'bigfrontend.dev'
//   // Error



// 4. MyRecord
type Key4 = 'a' | 'b' | 'c'
const a4: Record<Key4, string> = {
  a: 'BFE.dev',
  b: 'BFE.dev',
  c: 'BFE.dev'
}
a4.a = 'bigfrontend.dev' // OK
// a4.b = 123 // Error
// a4.d = 'BFE.dev' // Error
// type Foo4 = MyRecord<{a: string}, string> // Error



// 5. MyPick
type Foo5 = {
    a: string
    b: number
    c: boolean
  }
  type A = MyPick<Foo5, 'a' | 'b'> // {a: string, b: number}
  type B = MyPick<Foo5, 'c'> // {c: boolean}
//   type C = MyPick<Foo5, 'd'> // Error



// 6. MyOmit
type Foo6 = {
    a: string
    b: number
    c: boolean
  }
  type A6 = MyOmit<Foo6, 'a' | 'b'> // {c: boolean}
  type B6 = MyOmit<Foo6, 'c'> // {a: string, b: number}
  type C6 = MyOmit<Foo6, 'c' | 'd'>  // {a: string, b: number}
//   type D6 = MyOmit<Foo6, {c: boolean}>  // {a: string, b: number}



// 7. MyExclude
type Foo7 = 'a' | 'b' | 'c'
type A7 = MyExclude<Foo7, 'a'> // 'b' | 'c'
type B7 = MyExclude<Foo7, 'c'> // 'a' | 'b
type C7 = MyExclude<Foo7, 'c' | 'd'>  // 'a' | 'b'
type D7 = MyExclude<Foo7, 'a' | 'b' | 'c'>  // never



// 8. MyExtract
type Foo8 = 'a' | 'b' | 'c'
type A8 = MyExtract<Foo8, 'a'> // 'a'
type B8 = MyExtract<Foo8, 'a' | 'b'> // 'a' | 'b'
type C8 = MyExtract<Foo8, 'b' | 'c' | 'd' | 'e'>  // 'b' | 'c'
type D8 = MyExtract<Foo8, never>  // never



// 9. MyNonNullable
type Foo9 = 'a' | 'b' | null | undefined
type A9 = MyNonNullable<Foo9> // 'a' | 'b'



// 10. MyParameters
type Foo10 = (a: string, b: number, c: boolean) => string
type A10 = MyParameters<Foo10> // [a:string, b: number, c:boolean]
type B10 = A10[0] // string
// type C10 = MyParameters<{a: string}> // Error



// 11. MyConstructorParameters
class Foo11 {
    constructor (a: string, b: number, c: boolean) {}
  }
  type C = MyConstructorParameters<typeof Foo11>
  


// 12. MyReturnType
type Foo12 = (a: string) => {a: string}
type A12 = MyReturnType<Foo12> // {a: string}



// 13. MyInstanceType
class Foo13 {}
type A13 = MyInstanceType<typeof Foo13> // Foo
//type B13 = MyInstanceType<() => string> // Error



// 14. MyThisParameterType
function Foo14(this: {a: string}) {}
function Bar14() {}
type A14 = MyThisParameterType<typeof Foo14> // {a: string}
type B14 = MyThisParameterType<typeof Bar14> // unknown



// 15. OmitThisParameter
// function foo15(this: {a: string}) {}
// foo15() // Error
// const bar15 = foo15.bind({a: 'BFE.dev'})
// bar15() // OK
// type Foo15 = (this: {a: string}) => string
// type Bar15 = MyOmitThisParameter<Foo15> // () => string