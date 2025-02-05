// How Many Vowels?

function countVowels(str) {
  let count = [...str].filter((el) => "aeiou".includes(el.toLowerCase())).length
  return count
  console.log(count)
}
console.log(countVowels("Celebration"))
console.log(countVowels("Palm"))
console.log(countVowels("Prediction"))
