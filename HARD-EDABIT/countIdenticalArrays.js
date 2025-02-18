// Count Number of Identical Arrays

function countIdenticalArrays(arr1, arr2, arr3, arr4) {
  let originalArr = [arr1, arr2, arr3, arr4].map((x) => x.toString())
  //   console.log("originalArr ==============>>>>>>", originalArr)
  let compArr = [...new Set(originalArr)]
  //   console.log("compArr ----------------->>>>.", compArr)

  let diff = originalArr.length - compArr.length
  //   console.log("diff ****************>>>>>>", diff)

  return diff === 0 ? 0 : diff + 1
}
// Test cases
console.log(countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0])) // 2
console.log(countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0])) // 0
console.log(countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0])) // 3
