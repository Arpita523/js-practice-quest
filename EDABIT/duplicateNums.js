// Return Duplicate Numbers

function duplicateNums(nums) {
  let sortedNums = nums.sort((a, b) => a - b)
  //   console.log(sortedNums)
  let duplicateNum = sortedNums.filter(
    (el) => nums.indexOf(el) !== nums.lastIndexOf(el)
  )
  //   console.log(duplicateNum)
  let res = [...new Set(duplicateNum)]
  //   console.log(res)
  return res.length > 0 ? res : null
}
console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6]))
console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]))
console.log(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
