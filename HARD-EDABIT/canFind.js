// Do All Bigrams Exist?

function canFind(bigrams, words) {
  return bigrams.every((el) => words.some((y) => y.includes(el)))
}

// ========== SOLUTION 2 ============

// function canFind(bigrams, words) {
//   return bigrams.every((el) => words.join("").includes(el))
// }

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]))
console.log(
  canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"])
)
console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]))
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]))
