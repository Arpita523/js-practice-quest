// Balanced Words

function balanced(word) {
  let left = 0
  let right = 0
  let i = 0
  let j = word.length - 1
  while (i < j) {
    left += word[i].charCodeAt(0) - 97 + 1
    right += word[j].charCodeAt(0) - 97 + 1
    i++
    j--
  }
  return left === right
}

console.log(balanced("zips"))
console.log(balanced("brake"))

// =========== second solution ===========

// function balanced(word) {
//   let mid = Math.floor(word.length / 2)
//   // console.log(mid)
//   let left = word.slice(0, mid)
//   // console.log("left ===== ", left)
//   let right = word.slice(-mid)
//   // console.log("right ====== ", right)
//   let splitLeft = left.split("")
//   //   console.log("splitLeft ====== ", splitLeft)
//   let splitRight = right.split("")
//   //   console.log("splitRight ====== ", splitRight)

//   const alphaValLeft = splitLeft.map(
//     (el) => el.toLowerCase().charCodeAt(0) - 97 + 1
//   )
//   //   console.log(alphaValLeft)

//   const alphaValRight = splitRight.map(
//     (el) => el.toLowerCase().charCodeAt(0) - 97 + 1
//   )
//   //   console.log(alphaValRight)

//   let sumLeft = alphaValLeft.reduce((a, b) => a + b, 0)
//   //   console.log(sumLeft)

//   let sumRight = alphaValRight.reduce((a, b) => a + b, 0)
//   //   console.log(sumRight)

//   if (sumLeft === sumRight) return true
//   else return false
// }
// console.log(balanced("zips"))
// console.log(balanced("brake"))
// console.log(balanced("anesthesiologies"))
