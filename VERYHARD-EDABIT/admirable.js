// Not Quite Perfect

function admirable(n) {
  let sum = 0
  let divisors = []
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      divisors.push(i)
      sum += i
    }
    if (sum === n) return "Perfect"

    for (let divisor of divisors) {
      if (sum - 2 * divisor === n) return divisor
    }
  }
  return "Neither"
}
console.log(admirable(6))
console.log(admirable(12))
console.log(admirable(18))
