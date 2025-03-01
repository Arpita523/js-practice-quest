// Words With Duplicate Letters

function noDuplicateLetters(phrase) {
  let words = phrase
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(" ")
  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
        return false
      }
    }
  }
  return true
}

console.log(noDuplicateLetters("Fortune favours the bold."))
console.log(
  noDuplicateLetters(
    "You can lead a horse to water, but you can't make him drink."
  )
)
console.log(noDuplicateLetters("Look before you leap."))
console.log(noDuplicateLetters("An apple a day keeps the doctor away."))
