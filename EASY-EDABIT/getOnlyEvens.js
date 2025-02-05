// Even All the Way

function getOnlyEvens(nums) {
  return nums.filter((el, index) => el % 2 === 0 && index % 2 === 0)
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]))
console.log(getOnlyEvens([0, 1, 2, 3, 4]))
console.log(getOnlyEvens([1, 2, 3, 4, 5]))
