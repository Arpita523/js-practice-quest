// Automorphic Numbers

function isAutomorphic(n) {
  return Math.pow(n, 2).toString().endsWith(n)
}
console.log(isAutomorphic(5))
console.log(isAutomorphic(8))
console.log(isAutomorphic(76))
