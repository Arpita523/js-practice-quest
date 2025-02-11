// Basic Calculator

function calculator(num1, operator, num2) {
  if (operator === "/" && num2 === 0) return "Can't divide by 0!"
  return eval(num1 + operator + num2)
}
console.log(calculator(2, "+", 2))
console.log(calculator(2, "*", 2))
console.log(calculator(4, "/", 2))
