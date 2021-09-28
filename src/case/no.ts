import { changeCaseObject } from '~/utils'
import { Case } from '~/types'

const noCase = <T extends object>(x: T) => changeCaseObject(Case.no, x)

export default noCase
