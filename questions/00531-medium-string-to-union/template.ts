// type StringToArray<T extends string> = T extends `${infer L}${infer R}` ? [L]

type StringToUnion<T extends string> = T extends `${infer L}${infer R}`
  ? L | StringToUnion<R>
  : never
