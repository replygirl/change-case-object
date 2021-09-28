import { changeCase } from '~/vendor'

import { Case } from '~/types'
import type { ObjectCaseType } from '~/types'

const _default = <T extends object, K extends Case>(to: K, x: T): ObjectCaseType<T>[K] =>
  Array.isArray(x)
    ? x.map(y => _default(to, y))
    : x === null || typeof x !== 'object'
    ? x
    : Object.entries(x).reduce(
        (acc, [k, v]) => ({
          ...acc,
          [changeCase[`${to}Case`](k)]: _default(to, v)
        }),
        {} as any
      )

export default _default
