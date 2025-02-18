// Triple Letter Groupings

function threeLetterCollection(s) {
  let words = []
w  for (let i = 0; i < s.length - 2; i++) {
    words.push(s.slice(i, i + 3))
  }
  return words.sort()
}
console.log(threeLetterCollection("slap"))
console.log(threeLetterCollection("click"))
console.log(threeLetterCollection("cat"))
console.log(threeLetterCollection("hi"))
