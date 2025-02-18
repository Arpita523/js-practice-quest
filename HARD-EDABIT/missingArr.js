// Who Left the Array?

function missing(arr1, arr2) {
  return arr1.sort().find((x, i) => x != arr2.sort()[i])
}

// =========== SOLUTION ============
// function missing(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     let found = false
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         found = true
//         arr2.splice(j, 1)
//         break
//       }
//     }
//     if (!found) {
//       return arr1[i]
//     }
//   }
// }
console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]))
console.log(
  missing([true, true, false, false, true], [false, true, false, true])
)
console.log(missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]))
