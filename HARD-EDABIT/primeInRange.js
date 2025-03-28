// Any Prime Number in Range

function primeInRange(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    let isPrime = true
    for (let j = 2; j < Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) return true
  }
  return false
}
console.log(primeInRange(10, 15))
console.log(primeInRange(62, 66))
console.log(primeInRange(3, 5))
