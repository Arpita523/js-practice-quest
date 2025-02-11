// Equality of 3 Values

function equal(a, b, c) {
  return a === b && a === c ? 3 : a === b || a === c || b === c ? 2 : 0
}
console.log(equal(3, 4, 3))
console.log(equal(1, 1, 1))
console.log(equal(3, 4, 1))
