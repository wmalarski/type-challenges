type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
    ? [T, ...Permutation<Exclude<U, T>>]
    : []

// type A = Permutation<'A' | 'B' | 'C'>
