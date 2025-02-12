// Rock, Paper, Scissors

// ========== OPTIMIZED CODE ==============

function rps(p1, p2) {
  let obj = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock",
  }
  return p1 === p2
    ? "It's a draw"
    : obj[p1] === p2
    ? "The winner is p1"
    : "The winner is p2"
}

// ========== SOLUTION ===============

// function rps(p1, p2) {
//   if (
//     (p1 === "Rock" && p2 === "Scissors") ||
//     (p1 === "Scissors" && p2 === "Paper") ||
//     (p1 === "Paper" && p2 === "Rock")
//   ) {
//     return "The winner is p1"
//   } else if (
//     (p1 === "Rock" && p2 === "Rock") ||
//     (p1 === "Paper" && p2 === "Paper") ||
//     (p1 === "Scissors" && p2 === "Scissors")
//   ) {
//     return "It's a draw"
//   } else {
//     return "The winner is p2"
//   }
// }
console.log(rps("Rock", "Paper"))
console.log(rps("Scissors", "Paper"))
console.log(rps("Paper", "Paper"))
