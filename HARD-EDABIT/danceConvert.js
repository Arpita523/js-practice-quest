// Dance for Cash

const { classicNameResolver } = require("typescript")

const MOVES = [
  "Shimmy",
  "Shake",
  "Pirouette",
  "Slide",
  "Box Step",
  "Headspin",
  "Dosado",
  "Pop",
  "Lock",
  "Arabesque",
]

function danceConvert(pin) {
  let count
  let res = []
  let splittted = pin.split("")
  //   console.log(splittted)
  let convertInteger = splittted.map((num) => parseInt(num))
  //   console.log(convertInteger)

  for (let i = 0; i < convertInteger.length; i++) {
    count = convertInteger[i] + i
    // console.log(count)
    res.push(MOVES[count % 10])
  }
  return res.includes(undefined) ? "Invalid Input" : res
}
console.log(danceConvert("0000"))
console.log(danceConvert("3856"))
console.log(danceConvert("9999"))
console.log(danceConvert("32a1"))

// ======= OPTIMIZED SOLUTION ==========

// const danceConvert = async (pin) => {
//   let splittted = pin
//     .split("")
//     .map((element, index) => MOVES[(parseInt(element) + index) % 10])
//   return splittted.includes(undefined) ? "Invalid Input." : splittted
// }

// danceConvert("0000").then((e) => console.log(e))
// danceConvert("3856").then((e) => console.log(e))
// danceConvert("9999").then((e) => console.log(e))
// danceConvert("32a1").then((e) => console.log(e))
