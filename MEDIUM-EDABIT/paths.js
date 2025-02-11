// Travelling Salesman Problem

function paths(n) {
  if (n < 0) return -1
  else if (n == 0) return 1
  else return n * paths(n - 1)
}
console.log(paths(4))
console.log(paths(1))
console.log(paths(9))
