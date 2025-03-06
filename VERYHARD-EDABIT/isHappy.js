// Happy Number

function isHappy(n) {
  let split = n.toString().split("")
  //   console.log(split)
  let square = split
    .map((el) => Math.pow(Number(el), 2))
    .reduce((a, b) => a + b, 0)
  //   console.log(square)
  if (square === 1) return true
  if (square === 4) return false

  return isHappy(square)
}
console.log(isHappy(67))
console.log(isHappy(89))
console.log(isHappy(139))
console.log(isHappy(1327))
console.log(isHappy(2871))
console.log(isHappy(3970))
