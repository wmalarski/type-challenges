type TrimLeft<S extends string> = S extends `${infer F}${infer R}`
  ? F extends ' ' | '\n' | '\t'
    ? TrimLeft<R>
    : S
  : S

type C = TrimLeft<'str'>

type B = TrimLeft<' str'>

type A = TrimLeft<'     str     '>
