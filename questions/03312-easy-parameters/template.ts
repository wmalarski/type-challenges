type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer B
) => any
  ? B
  : never
