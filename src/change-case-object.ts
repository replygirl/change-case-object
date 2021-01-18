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
  typeof x !== 'object' || Array.isArray(x)
    ? x
    : Object.entries(x).reduce(
        (a, [k, v]) => ({
          ...a,
          [c[`${to}Case`](k)]: typeof v === 'object'
            ? _default(to, v)
            : v
        }),
        {}
      )

export default _default
