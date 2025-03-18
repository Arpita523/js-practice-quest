// Find the Most Frequent Element in an Array

function findFrequent(arr) {
  let ans = arr.filter((el) => arr.indexOf(el) !== arr.lastIndexOf(el))
  //   console.log(ans)
  return ans[0]
}
console.log(findFrequent([3, 7, 3]))
console.log(findFrequent([null, "hello", true, null]))
console.log(findFrequent([false, "up", "down", "left", "right", true, false]))
