// Function Times 3

function product(a1, a2) {
  return function (b1, b2) {
    return function (c1, c2) {
      return a1 * b1 * c1 + a2 * b2 * c2
    }
  }
}

console.log(product(1, 2)(1, 1)(2, 3))
console.log(product(10, 2)(5, 0)(2, 3))
console.log(product(1, 2)(2, 3)(3, 4))
console.log(product(1, 2)(0, 3)(3, 0))
