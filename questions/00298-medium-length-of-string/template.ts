type ToArray<S extends string> = S extends `${infer F}${infer R}`
  ? [F, ...ToArray<R>]
  : []

type LengthOfString<S extends string> = ToArray<S>['length']

type cases = [
  LengthOfString<''>,
  LengthOfString<'kumiko'>,
  LengthOfString<'reina'>,
  LengthOfString<'Sound! Euphonium'>,
]
