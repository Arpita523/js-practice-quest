// List Up an Array of Strings in a Proper Way

function sentence(words) {
  const formattedWords = words.map((word) =>
    ["a", "e", "i", "o", "u"].includes(word[0].toLowerCase())
      ? "an " + word
      : "a " + word
  )

  const lastWord = formattedWords.pop()
  const result =
    formattedWords.length > 0
      ? formattedWords.join(", ") + " and " + lastWord
      : lastWord

  return result.charAt(0).toUpperCase() + result.slice(1) + "."
}
console.log(sentence(["orange", "apple", "pear"]))
console.log(sentence(["keyboard", "mouse"]))
console.log(sentence(["car", "plane", "truck", "boat"]))
