// Highest Pair

function highestPair(cards) {
  let res = cards.filter((el) => cards.indexOf(el) !== cards.lastIndexOf(el))
  //   console.log(res)
  if (res.length === 0) return false
  if (res.includes("A")) return [true, "A"]
  if (res.includes("K")) return [true, "K"]
  if (res.includes("Q")) return [true, "Q"]
  if (res.includes("J")) return [true, "J"]
  return [true, "" + Math.max(...res)]
}

// ======== second code ==========

// function highestPair(cards) {
//   let count = {}
//   let highest = null
//   let max = 0
//   let order = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"] // Card rank order

//   for (let card of cards) {
//     count[card] = (count[card] || 0) + 1
//   }

//   for (let i = 0; i < cards.length; i++) {
//     if (
//       count[cards[i]] >= 2 &&
//       (count[cards[i]] > max ||
//         (count[cards[i]] === max &&
//           order.indexOf(cards[i]) > order.indexOf(highest)))
//     ) {
//       max = count[cards[i]]
//       highest = cards[i]
//     }
//   }
//   return highest ? [true, highest] : false
// }

console.log(highestPair(["A", "A", "Q", "Q", "6"]))
console.log(highestPair(["J", "6", "3", "10", "8"]))
console.log(highestPair(["K", "7", "3", "9", "3"]))
console.log(highestPair(["K", "9", "10", "J", "Q"]))
console.log(highestPair(["3", "5", "5", "5", "5"]))
