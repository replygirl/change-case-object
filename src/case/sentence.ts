import { changeCaseObject } from '~/utils'
import { Case } from '~/types'

const sentenceCase = <T extends object>(x: T) => changeCaseObject(Case.sentence, x)

export default sentenceCase
