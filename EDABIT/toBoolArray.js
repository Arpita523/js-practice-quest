// Word to Bitstring to Boolean Array

function toBoolArray(word) {
  return word.split("").map((el) => (el.charCodeAt() - 96) % 2 !== 0)
}
console.log(toBoolArray("deep"))
console.log(toBoolArray("loves"))
console.log(toBoolArray("tesh"))
