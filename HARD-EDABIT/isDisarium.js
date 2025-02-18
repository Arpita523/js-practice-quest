// Disarium Number

function isDisarium(n) {
  let sum = 0
  let numStr = String(n)

  for (let i = 0; i < numStr.length; i++) {
    let count = Math.pow(Number(numStr[i]), i + 1)
    sum += count
  }
  return sum === n
}

console.log(isDisarium(75))
console.log(isDisarium(135))
console.log(isDisarium(544))
console.log(isDisarium(518))
console.log(isDisarium(8))
console.log(isDisarium(466))
