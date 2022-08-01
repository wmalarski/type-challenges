type KebabCase<S extends string> = S extends `${infer A}${infer B}`
  ? B extends Uncapitalize<B>
    ? `${Lowercase<A>}${KebabCase<B>}`
    : `${Lowercase<A>}-${KebabCase<B>}`
  : S
