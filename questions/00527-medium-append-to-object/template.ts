type AppendToObject<T, U extends string, V> = {
  [key in U | keyof T]: key extends keyof T ? T[key] : V
}
