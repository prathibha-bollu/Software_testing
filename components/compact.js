
function compact(array) {
  let resIndex = -1
  const result = []

  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

export default compact
