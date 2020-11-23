import changeCase, { Case } from './change-case-object'

export { Case, changeCase }

const {
  camel,
  capital,
  constant,
  dot,
  header,
  no,
  param,
  pascal,
  path,
  sentence,
  snake
} = Case

export const camelCase = (x: any) => changeCase(camel, x)
export const capitalCase = (x: any) => changeCase(capital, x)
export const constantCase = (x: any) => changeCase(constant, x)
export const dotCase = (x: any) => changeCase(dot, x)
export const headerCase = (x: any) => changeCase(header, x)
export const noCase = (x: any) => changeCase(no, x)
export const paramCase = (x: any) => changeCase(param, x)
export const pascalCase = (x: any) => changeCase(pascal, x)
export const pathCase = (x: any) => changeCase(path, x)
export const sentenceCase = (x: any) => changeCase(sentence, x)
export const snakeCase = (x: any) => changeCase(snake, x)

export interface CasedObjectOptions {
  case?: Case
}

export class CasedObject {
  static camelCase = camelCase
  static capitalCase = capitalCase
  static constantCase = constantCase
  static dotCase = dotCase
  static headerCase = headerCase
  static noCase = noCase
  static paramCase = paramCase
  static pascalCase = pascalCase
  static pathCase = pathCase
  static sentenceCase = sentenceCase
  static snakeCase = snakeCase

  _value: any = {}

  constructor(value: any, { case: c }: CasedObjectOptions = {}) {
    Object.assign(this, { _value: !!c ? changeCase(c, value) : value })
  }

  public changeCase(to: Case): any {
    Object.assign(this, { _value: changeCase(to, this._value) })
    return this._value
  }

  public get value(): any {
    return this._value
  }
  public set value(x: any) {
    Object.assign(this, { _value: x })
  }

  public get camelCase(): any {
    return this.camelCase(this._value)
  }
  public get capitalCase(): any {
    return this.capitalCase(this._value)
  }
  public get constantCase(): any {
    return this.constantCase(this._value)
  }
  public get dotCase(): any {
    return this.dotCase(this._value)
  }
  public get headerCase(): any {
    return this.headerCase(this._value)
  }
  public get noCase(): any {
    return this.noCase(this._value)
  }
  public get paramCase(): any {
    return this.paramCase(this._value)
  }
  public get pascalCase(): any {
    return this.pascalCase(this._value)
  }
  public get pathCase(): any {
    return this.pathCase(this._value)
  }
  public get sentenceCase(): any {
    return this.sentenceCase(this._value)
  }
  public get snakeCase(): any {
    return this.snakeCase(this._value)
  }
}

export default {
  Case,
  changeCase,
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
  CasedObject
}
