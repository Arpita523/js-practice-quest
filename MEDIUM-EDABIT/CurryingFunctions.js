// Currying Functions

function multiply(arr) {
  return function curringFunction(num) {
    return arr.map((el) => el * num)
  }
}
console.log(multiply([1, 2, 3])(2))
console.log(multiply([4, 6, 5])(10))
console.log(multiply([1, 2, 3])(0))
