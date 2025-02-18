// Reversing a Binary String

function reversedBinaryInteger(num) {
  let binaryConversion = num.toString(2).split("").reverse().join("")
  console.log(binaryConversion)
  let integerConversion = parseInt(binaryConversion, 2)
  console.log(integerConversion)
}
console.log(reversedBinaryInteger(10))
console.log(reversedBinaryInteger(12))
console.log(reversedBinaryInteger(25))
console.log(reversedBinaryInteger(45))
