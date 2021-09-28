import { changeCaseObject } from '~/utils'
import { Case } from '~/types'

const capitalCase = <T extends object>(x: T) => changeCaseObject(Case.capital, x)

export default capitalCase
