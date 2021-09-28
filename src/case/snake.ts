import { changeCaseObject } from '~/utils'
import { Case } from '~/types'

const snakeCase = <T extends object>(x: T) => changeCaseObject(Case.snake, x)

export default snakeCase
