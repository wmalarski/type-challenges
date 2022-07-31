type MyReadonly2<T, K extends keyof T = keyof T> = {
  [k in Exclude<keyof T, K>]: T[k]
} & {
  readonly [k in K]: T[k]
}
