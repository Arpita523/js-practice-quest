// Count Instances of a Character in a String

function charCount(myChar, str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === myChar) {
      count += 1
    }
  }
  return count
}
console.log(charCount("a", "edabit"))
console.log(charCount("c", "Chamber of secrets"))
console.log(charCount("b", "big fat bubble"))
