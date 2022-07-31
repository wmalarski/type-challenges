type Space = " " | "\n" | "\t"

type TrimLeft2<S extends string> = S extends `${Space}${infer R}`
  ? TrimLeft2<R>
  : S

type TrimRight2<S extends string> = S extends `${infer F}${Space}`
  ? TrimRight2<F>
  : S

type Trim<S extends string> = TrimLeft2<TrimRight2<S>>
