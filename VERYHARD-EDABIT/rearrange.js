// Rearrange the Sentence

function rearrange(sentence) {
  if (sentence === " ") return ""
  else
    return sentence
      .split(" ")
      .sort((a, b) => a.match(/\d/) - b.match(/\d/))
      .map((a) => a.replace(/\d/g, ""))
      .join(" ")
}
console.log(rearrange("is2 Thi1s T4est 3a"))
console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2"))
console.log(rearrange(" "))
