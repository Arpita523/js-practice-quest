// Instant JAZZ

function jazzify(arr) {
  return arr.map((el) => {
    if (el.endsWith("7") === false) {
      return el + "7"
    } else {
      return el
    }
  })
}

// =============  OPTIMIZED CODE   ==============

const jazzify = (arr) => arr.map((i) => (i.endsWith("7") ? i : i + "7"))

console.log(jazzify(["G", "F", "C"]))
console.log(jazzify(["Dm", "G", "E", "A"]))
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]))
console.log(jazzify([]))
