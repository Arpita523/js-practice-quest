// Multiplying Numbers in a String

function multiplyNums(nums) {
  return nums.split(", ").reduce((curr, next) => curr * next, 1)
}
console.log(multiplyNums("2, 3"))
console.log(multiplyNums("1, 2, 3, 4"))
console.log(multiplyNums("54, 75, 453, 0"))
console.log(multiplyNums("10, -2"))
