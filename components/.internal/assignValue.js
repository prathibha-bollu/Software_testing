import eq from '../eq.js'
import baseAssignValue from './baseAssignValue.js'

const hasOwnProperty = Object.prototype.hasOwnProperty

function assignValue(object, key, value) {
  const objValue = object[key]

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value))) {
    if (value !== 0 || (1 / value) === (1 / objValue)) {
      baseAssignValue(object, key, value)
    }
  } else if (value === undefined && !(key in object)) {
    baseAssignValue(object, key, value)
  }
}

export default assignValue
