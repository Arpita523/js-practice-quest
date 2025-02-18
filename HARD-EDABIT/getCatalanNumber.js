// Catalan Number

function getCatalanNumber(n) {
  if (n === 0) return 1

  let CatalanNumber = (2 * (2 * n - 1) * getCatalanNumber(n - 1)) / (n + 1)
  return CatalanNumber
}
console.log(getCatalanNumber(0))
console.log(getCatalanNumber(6))
console.log(getCatalanNumber(8))
