import { changeCaseObject } from '~/utils'
import { Case } from '~/types'

const pathCase = <T extends object>(x: T) => changeCaseObject(Case.path, x)

export default pathCase
