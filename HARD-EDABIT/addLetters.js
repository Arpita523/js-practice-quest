// Adding Up Letters

function addLetters(a) {
  const sum = a.reduce((a, c) => a + c.charCodeAt() - 96, 0)
  return String.fromCharCode(
    sum === 0 ? 122 : sum <= 26 ? sum + 96 : (sum % 26) + 96
  )
}
console.log(addLetters(["a"]))
console.log(addLetters(["a", "b"]))
console.log(addLetters(["a", "b", "c"]))
console.log(addLetters(["a", "b", "c", "d", "e", "f"]))
console.log(addLetters(["y", "a"]))
console.log(addLetters(["y", "c"]))
console.log(addLetters(["z", "a"]))
console.log(addLetters(["x", "y", "z"]))
console.log(addLetters([]))
