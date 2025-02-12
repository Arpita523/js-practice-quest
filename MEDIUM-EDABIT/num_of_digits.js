// Find Number of Digits in Number

function num_of_digits(num) {
  let res = Math.abs(num).toString().length
  console.log(res)
}
console.log(num_of_digits(1000))
console.log(num_of_digits(12))
console.log(num_of_digits(1305981031))
console.log(num_of_digits(0))
