// Index Multiplier

// ============= OPTIMIZED SOLUTION ============

function indexMultiplier(arr) {
  return arr.map((el, index) => el * index).reduce((curr, sum) => curr + sum, 0)
}

// ============ SOLUTION ================
// function indexMultiplier(arr) {
//   let res
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     res = arr[i] * i
//     // console.log(res)
//     sum += res
//     // console.log(sum)
//   }
//   return sum
// }
console.log(indexMultiplier([1, 2, 3, 4, 5]))
console.log(indexMultiplier([-3, 0, 8, -6]))
