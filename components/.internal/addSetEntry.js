
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value)
  return set
}

export default addSetEntry
