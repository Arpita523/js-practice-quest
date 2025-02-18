// Concatenate to Form Target Array

function canConcatenate(arr, target) {
  let joinedArr = arr.flat()
  console.log(joinedArr)

  if (joinedArr.length != target.length) {
    return false
  }

  joinedArr.sort((a, b) => a - b)
  target.sort((a, b) => a - b)

  for (let i = 0; i < joinedArr.length; i++) {
    if (joinedArr[i] !== target[i]) {
      return false
    }
  }
  return true
}
console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]))
console.log(
  canConcatenate(
    [
      [2, 1, 3],
      [5, 4, 7, 6],
    ],
    [7, 6, 5, 4, 3, 2, 1]
  )
)
console.log(
  canConcatenate(
    [
      [2, 1, 3],
      [5, 4, 7, 6, 7],
    ],
    [1, 2, 3, 4, 5, 6, 7]
  )
)
console.log(
  canConcatenate(
    [
      [2, 1, 3],
      [5, 4, 7],
    ],
    [1, 2, 3, 4, 5, 6, 7]
  )
)
