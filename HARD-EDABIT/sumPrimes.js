// Sum of Prime Numbers

function isPrime(num) {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

function sumPrimes(arr) {
  return arr.filter(isPrime).reduce((sum, num) => sum + num, 0)
}

// Example usage:
console.log(sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(sumPrimes([2, 3, 4, 11, 20, 50, 71]))
console.log(sumPrimes([]))
