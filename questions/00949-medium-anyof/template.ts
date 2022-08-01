type Falsy = 0 | '' | false | [] | Record<PropertyKey, never>

type AnyOf<T extends readonly any[]> = T extends Falsy[] ? false : true
