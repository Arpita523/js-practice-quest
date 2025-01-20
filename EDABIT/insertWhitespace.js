// White Spaces Between Lower and Uppercase Letters

function insertWhitespace(s) {
  let res = s.replace(/([A-Z])/g, " $1").trim()
  console.log(res)
}
console.log(insertWhitespace("SheWalksToTheBeach"))
console.log(insertWhitespace("MarvinTalksTooMuch"))
console.log(insertWhitespace("TheGreatestUpsetInHistory"))
