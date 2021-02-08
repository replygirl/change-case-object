import c from './change-case'

export enum Case {
  camel = 'camel',
  capital = 'capital',
  constant = 'constant',
  dot = 'dot',
  header = 'header',
  no = 'no',
  param = 'param',
  pascal = 'pascal',
  path = 'path',
  sentence = 'sentence',
  snake = 'snake'
}

const _default = (to: Case, x: any): any =>
  Array.isArray(x)
    ? x.map(y => _default(to, y))
    : x === null || typeof x !== 'object'
    ? x
    : Object.entries(x).reduce(
        (a, [k, v]) => ({
          ...a,
          [c[`${to}Case`](k)]: _default(to, v)
        }),
        {}
      )

export default _default
