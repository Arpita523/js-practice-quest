// Bitwise Operator to Check Odd, Regular Expression to Check Even

// Use Bitwise Operator (% operator disallowed)
function isOdd(number) {
  if (number & 1) return "YES"
  return "NO"
}

// Use Regular Expression (% operator disallowed)
function isEven(number) {
  if (number % 2 === 0) return "YES"
  return "NO"
}
console.log(isOdd(3))
console.log(isOdd(58))
console.log(isEven("0"))
console.log(isEven("-99"))
