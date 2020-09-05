import changeCaseObject, { Case } from './change-case-object'

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

export const camelCase = (x: any) => changeCaseObject(camel, x)
export const capitalCase = (x: any) => changeCaseObject(capital, x)
export const constantCase = (x: any) => changeCaseObject(constant, x)
export const dotCase = (x: any) => changeCaseObject(dot, x)
export const headerCase = (x: any) => changeCaseObject(header, x)
export const noCase = (x: any) => changeCaseObject(no, x)
export const paramCase = (x: any) => changeCaseObject(param, x)
export const pascalCase = (x: any) => changeCaseObject(pascal, x)
export const pathCase = (x: any) => changeCaseObject(path, x)
export const sentenceCase = (x: any) => changeCaseObject(sentence, x)
export const snakeCase = (x: any) => changeCaseObject(snake, x)

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

  constructor(value: any) { Object.assign(this, { _value: value }) }

  public changeCase(to: Case): any {
    Object.assign(this, { _value: changeCaseObject(to, this._value) })
    return this._value
  }

  public get value(): any { return this._value }
  public set value(x: any) { Object.assign(this, { _value: x }) }

  public get camelCase(): any { return this.camelCase(this._value) }
  public get capitalCase(): any { return this.capitalCase(this._value) }
  public get constantCase(): any { return this.constantCase(this._value) }
  public get dotCase(): any { return this.dotCase(this._value) }
  public get headerCase(): any { return this.headerCase(this._value) }
  public get noCase(): any { return this.noCase(this._value) }
  public get paramCase(): any { return this.paramCase(this._value) }
  public get pascalCase(): any { return this.pascalCase(this._value) }
  public get pathCase(): any { return this.pathCase(this._value) }
  public get sentenceCase(): any { return this.sentenceCase(this._value) }
  public get snakeCase(): any { return this.snakeCase(this._value) }
}
