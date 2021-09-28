import { changeCaseObject } from '~/utils'
import { Case } from '~/types'

const dotCase = <T extends object>(x: T) => changeCaseObject(Case.dot, x)

export default dotCase
