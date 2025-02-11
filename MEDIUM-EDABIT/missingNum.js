// Find the Missing Number

function missingNum(arr) {
  let n = arr.length + 1
  let expectedSum = (n * (n + 1)) / 2
  let actualSum = arr.reduce((sum, num) => sum + num, 0)
  return expectedSum - actualSum
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]))
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]))
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]))
