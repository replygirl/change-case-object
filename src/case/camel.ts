import { changeCaseObject } from '~/utils'
import { Case } from '~/types'

const camelCase = <T extends object>(x: T) => changeCaseObject(Case.camel, x)

export default camelCase
