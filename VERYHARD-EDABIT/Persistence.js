// Persistence

/// =========== Multiplicative Persistence ===============

function multiplicativePersistence(n) {
  if (n < 10) return 0
  let count = 0
  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .reduce((a, b) => a * parseInt(b), 1)
    count++
  }
  return count
}

console.log(multiplicativePersistence(77))
console.log(multiplicativePersistence(123456))
console.log(multiplicativePersistence(4))

/// =========== Additive Persistence ==============
function additivePersistence(n) {
  if (n < 10) return 0
  let count = 0
  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0)
    count++
  }
  return count
}
console.log(additivePersistence(1679583))
console.log(additivePersistence(123456))
console.log(additivePersistence(6))
