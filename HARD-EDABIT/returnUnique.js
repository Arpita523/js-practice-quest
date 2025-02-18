// Two Distinct Elements

// ============ OPTIMIZED SOLUTION =============

function returnUnique(arr) {
  return arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el))
}

// ================  SOLUTION ================

// function returnUnique(arr) {
//   let count
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     count = 0
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++
//         // console.log(count)
//       }
//     }
//     if (count === 1) {
//       result.push(arr[i])
//     }
//   }
//   return result
// }
console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]))
console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]))
console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]))
