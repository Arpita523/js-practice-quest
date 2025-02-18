// Algorithms: Binary Search

function isPrime(primes, num) {
  let start = 0
  let end = primes.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (primes[mid] === num) return "yes"
    else if (primes[mid] < num) start = mid + 1
    else end = mid - 1
  }

  return "no"
}

var primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
]
console.log(isPrime(primes, 3))
console.log(isPrime(primes, 4))
console.log(isPrime(primes, 67))
console.log(isPrime(primes, 36))
