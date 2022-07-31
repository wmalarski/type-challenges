type MyAwaitedAux<T> = T extends Promise<infer A> ? MyAwaitedAux<A> : T

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer A>
  ? MyAwaitedAux<A>
  : never
