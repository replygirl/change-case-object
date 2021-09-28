import { changeCaseObject } from '~/utils'
import { Case } from '~/types'

const paramCase = <T extends object>(x: T) => changeCaseObject(Case.param, x)

export default paramCase
