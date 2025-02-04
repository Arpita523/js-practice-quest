// Check if One Array can be Nested in Another

function canNest(arr1, arr2) {
  return Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
    ? true
    : false
  //   return arr1 > arr2 && arr1 < arr2 ? true : false
}
console.log(canNest([1, 2, 3, 4], [0, 6]))
console.log(canNest([3, 1], [4, 0]))
console.log(canNest([9, 9, 8], [8, 9]))
console.log(canNest([1, 2, 3, 4], [2, 3]))
