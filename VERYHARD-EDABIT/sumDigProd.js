// Product of Digits of Sum

function sumDigProd(...n) {
  let sum = n.reduce((a, b) => a + b, 0)
  while (sum > 9) {
    sum = sum
      .toString()
      .split("")
      .reduce((c, d) => c * parseInt(d), 1)
  }
  return sum
}

console.log(sumDigProd(16, 28))
console.log(sumDigProd(0))
console.log(sumDigProd(1, 2, 3, 4, 5, 6))
