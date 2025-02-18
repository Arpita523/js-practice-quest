// Consecutive Sum Check

function consecutiveSum(n) {
  return (n & (n - 1)) !== 0
}
console.log(consecutiveSum(9))
console.log(consecutiveSum(10))
console.log(consecutiveSum(64))
