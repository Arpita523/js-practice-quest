// Headline Hash Tags

function getHashTags(str) {
  let split = str.split(" ")
  let longestWord = split
    .map((word) => word.replace(/[^a-zA-Z]/g, ""))
    .sort((a, b) => b.length - a.length)
  let longest = longestWord.slice(0, 3)
  return longest.map((word) => `#${word.toLowerCase()}`)
}

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"))
console.log(
  getHashTags(
    "Why You Will Probably Pay More for Your Christmas Tree This Year"
  )
)
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"))
console.log(getHashTags("Visualizing Science"))
