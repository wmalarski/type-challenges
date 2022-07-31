type Prom<T> = T extends Promise<infer A> ? A : T
type PromList<T> = T extends [infer F, ...infer R]
  ? [Prom<F>, ...PromList<R>]
  : never

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [key in keyof T]: T[key] extends Promise<infer V> ? V : T[key]
}>
