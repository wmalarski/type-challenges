type Last<T> = T extends [...any, infer L] ? L : never
