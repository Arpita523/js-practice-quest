// Reverse the Number

function rev(n) {
  let reversed = Math.abs(n).toString().split("").reverse().join("")
  console.log(reversed)
  return reversed
}
console.log(rev(5121))
console.log(rev(69))
console.log(rev(-122157))
