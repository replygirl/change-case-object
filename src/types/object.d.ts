import type {
  CamelCasedPropertiesDeep,
  DelimiterCasedPropertiesDeep,
  KebabCasedPropertiesDeep,
  PascalCasedPropertiesDeep,
  ScreamingSnakeCase,
  SnakeCasedPropertiesDeep
} from 'type-fest'

type CapitalizedPropertiesDeep<Value> =
  Value extends Function
    ? Value
    : Value extends Array<infer U>
    ? Array<CapitalizedPropertiesDeep<U>>
    : Value extends Set<infer U>
    ? Set<CapitalizedPropertiesDeep<U>>
    : {
      [K in keyof Value as K extends string ? Capitalize<K> : K]: CapitalizedPropertiesDeep<Value[K]>
    }

type ConstantCasedPropertiesDeep<Value> =
  Value extends Function
  ? Value
  : Value extends Array<infer U>
  ? Array<ConstantCasedPropertiesDeep<U>>
  : Value extends Set<infer U>
  ? Set<ConstantCasedPropertiesDeep<U>>
  : {
    [K in keyof Value as ScreamingSnakeCase<K>]: ConstantCasedPropertiesDeep<Value[K]>
  }

type NoCasedPropertiesDeep<T> = DelimiterCasedPropertiesDeep<KebabCasedPropertiesDeep<T>, ' '>

export type ObjectCaseType<T extends object> = {
  camel: CamelCasedPropertiesDeep<T>
  capital: DelimiterCasedPropertiesDeep<PascalCasedPropertiesDeep<T>, ' '>
  constant: ConstantCasedPropertiesDeep<T>,
  dot: DelimiterCasedPropertiesDeep<KebabCasedPropertiesDeep<T>, '.'>
  header: DelimiterCasedPropertiesDeep<PascalCasedPropertiesDeep<T>, '-'>
  no: NoCasedPropertiesDeep<T>
  param: KebabCasedPropertiesDeep<T>
  pascal: PascalCasedPropertiesDeep<T>
  path: DelimiterCasedPropertiesDeep<KebabCasedPropertiesDeep<T>, '/'>
  sentence: CapitalizedPropertiesDeep<NoCasedPropertiesDeep<T>>
  snake: SnakeCasedPropertiesDeep<T>
}
