// Return the Sum of the Two Smallest Numbers

function sumTwoSmallestNums(arr) {
  let positiveArr = arr.filter((num) => num > 0)
  //   console.log(positiveArr)
  let sortedArr = positiveArr.sort((a, b) => a - b)
  //   console.log(sortedArr)
  let sum = sortedArr[0] + sortedArr[1]
  //   console.log(sum)
  return sum
}
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]))
console.log(sumTwoSmallestNums([2, 9, 6, -1]))
console.log(
  sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])
)
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]))
