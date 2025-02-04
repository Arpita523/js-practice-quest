// Number of Squares in an N * N Grid

function numberSquares(n) {
  if (n === 0) return 0
  return n * n + numberSquares(n - 1)
}
// console.log(numberSquares(1))
console.log(numberSquares(2))
// console.log(numberSquares(3))
console.log(numberSquares(4))
console.log(numberSquares(5))
