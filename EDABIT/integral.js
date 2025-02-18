// Integral of a Function

function integral(b, m, n) {
  return Math.pow(n, b + 1) - Math.pow(m, b + 1)
}
console.log(integral(0, 2, 5))
console.log(integral(2, 4, 7))
console.log(integral(5, 9, 3))
