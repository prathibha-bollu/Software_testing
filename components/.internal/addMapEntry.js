
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1])
  return map
}

export default addMapEntry
