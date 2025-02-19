// Filter Primes from an Array

function filterPrimes(num) {
  const isPrime = (n) => {
    for (let i = 2; i < n; i++) if (n % i === 0) return false
    return n > 1
  }
  return num.filter((number) => isPrime(number))
}
console.log(filterPrimes([7, 9, 3, 9, 10, 11, 27]))
console.log(filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]))
console.log(
  filterPrimes([
    1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097,
  ])
)
