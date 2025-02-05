// Emotify the Sentence
function emotify(str) {
  return str === "Make me smile"
    ? "Make me :D"
    : str === "Make me grin"
    ? "Make me :)"
    : str === "Make me sad"
    ? "Make me :("
    : "Make me :P"
}
console.log(emotify("Make me smile"))
console.log(emotify("Make me grin"))
console.log(emotify("Make me sad"))
