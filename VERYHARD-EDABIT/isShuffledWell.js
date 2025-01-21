// Shuffled Properly?

function isShuffledWell(arr) {
  let count = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1 || arr[i] === arr[i + 1] - 1) {
      count++
      if (count >= 3) {
        return false
      }
    } else {
      count = 1
    }
  }
  return true
}
console.log(isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]))
console.log(isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]))
console.log(isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]))
console.log(isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]))
