// Check if All Values Are True
function allTruthy(...args) {
  return args.every((el) => (el ? true : false))
}

console.log(allTruthy(true, true, true))
console.log(allTruthy(true, false, true))
console.log(allTruthy(5, 4, 3, 2, 1, 0))
