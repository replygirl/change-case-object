import { changeCaseObject } from '~/utils'
import { Case } from '~/types'

const constantCase = <T extends object>(x: T) => changeCaseObject(Case.constant, x)

export default constantCase
