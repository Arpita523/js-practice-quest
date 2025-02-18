// Find First Character That Repeats

function firstRepeat(chars) {
  for (let i = 0; i < chars.length; i++) {
    if (chars.indexOf(chars[i]) !== chars.lastIndexOf(chars[i])) {
      return chars[i]
    }
  }
  return "-1"
}
console.log(firstRepeat("legolas"))
console.log(firstRepeat("Gandalf"))
console.log(firstRepeat("Balrog"))
console.log(firstRepeat("Isildur"))
