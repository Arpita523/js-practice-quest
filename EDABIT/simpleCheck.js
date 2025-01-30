// A Simple Check

function simpleCheck(a, b) {
  let count = 0
  while (a > 0 && b > 0) {
    if (a % b === 0 || b % a === 0) count++
    a--
    b--
  }
  return count
}
console.log(simpleCheck(3, 5))
console.log(simpleCheck(8, 4))
console.log(simpleCheck(54, 17))
