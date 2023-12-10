import baseAssignValue from './.internal/baseAssignValue.js'
import reduce from './reduce.js'

function countBy(collection, iteratee) {
  return reduce(collection, (result, value, key) => {
    key = iteratee(value)
    if (hasOwnProperty.call(result, key)) {
      ++result[key]
    } else {
      baseAssignValue(result, key, 0)
    }
    return result
  }, {})
}

export default countBy
