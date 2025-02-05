// What's Hiding Amongst the Crowd?

function detectWord(str) {
  const regex = /[a-z]/g
  const found = str.match(regex).join("")
  //   console.log(found)
  return found
}
console.log(detectWord("UcUNFYGaFYFYGtNUH"))
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"))
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"))
