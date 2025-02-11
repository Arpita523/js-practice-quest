// Finding Nemo

function findNemo(sentence) {
  const index = sentence.split(" ").findIndex((e) => e === "Nemo")
  return index >= 0 ? `I found Nemo at ${index + 1}!` : "I can't find Nemo :("
}

console.log(findNemo("I am finding Nemo !"))
console.log(findNemo("Nemo is me"))
console.log(findNemo("I Nemo am"))
