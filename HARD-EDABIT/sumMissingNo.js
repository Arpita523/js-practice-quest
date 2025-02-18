// Sum of Missing Numbers

function sumMissingNumbers(arr) {
  const sorted = arr.sort((a, b) => a - b)

  const missing = []
  for (let i = sorted[0]; i < sorted[sorted.length - 1]; i++) {
    if (!sorted.includes(i)) {
      missing.push(i)
    }
  }

  return missing.reduce((sum, num) => sum + num, 0)
}
console.log(sumMissingNumbers([1, 3, 5, 7, 10]))
console.log(sumMissingNumbers([10, 7, 5, 3, 1]))
console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]))
