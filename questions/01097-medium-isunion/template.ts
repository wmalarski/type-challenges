type IsUnion<T, S = T> = [S] extends [never]
  ? T extends S
    ? false
    : true
  : true
