import { changeCaseObject } from '~/utils'
import { Case } from '~/types'

const pascalCase = <T extends object>(x: T) => changeCaseObject(Case.pascal, x)

export default pascalCase
