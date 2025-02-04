// Map the Letters in a String

function mapLetters(word) {
  let obj = {}
  for (let i = 0; i < word.length; i++) {
    if (!obj[word[i]]) {
      obj[word[i]] = [i]
    } else {
      obj[word[i]].push(i)
    }
  }
  return obj
}
console.log(mapLetters("dodo"))
console.log(mapLetters("froggy"))
console.log(mapLetters("grapes"))
