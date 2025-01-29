// Meme Sum :)

function memeSum(a, b) {
  let aStr = a
    .toString()
    .padStart(Math.max(a.toString().length, b.toString().length), "0")
  let bStr = b.toString().padStart(aStr.length, "0")

  return parseInt(
    [...aStr].reduce(
      (sum, _, i) => sum + (parseInt(aStr[i]) + parseInt(bStr[i])),
      ""
    )
  )
}

// ========= SOLUTION =========

// function memeSum(a, b) {
//   let sum = ""
//   let aStr = a.toString()
//   let bStr = b.toString()
//   //   console.log(aStr, bStr)

//   let maxLength = Math.max(aStr.length, bStr.length)
//   //   console.log(maxLength)
//   aStr = aStr.padStart(maxLength, "0")
//   //   console.log(aStr)
//   bStr = bStr.padStart(maxLength, "0")
//   //   console.log(bStr)

//   for (let i = 0; i < maxLength; i++) {
//     let digitSum = parseInt(aStr[i]) + parseInt(bStr[i])
//     sum += digitSum
//     // console.log(sum)
//   }
//   return parseInt(sum)
// }
console.log(memeSum(26, 39))
console.log(memeSum(122, 81))
console.log(memeSum(1222, 30277))
