// Secret Function

function secret(num) {
  let tens = Math.floor(num / 10)
  let ones = num % 10
  return Math.pow(tens, ones) - tens * ones
}

console.log(secret(24))
console.log(secret(42))
console.log(secret(15))
console.log(secret(52))
