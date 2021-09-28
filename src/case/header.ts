import { changeCaseObject } from '~/utils'
import { Case } from '~/types'

const headerCase = <T extends object>(x: T) => changeCaseObject(Case.header, x)

export default headerCase
