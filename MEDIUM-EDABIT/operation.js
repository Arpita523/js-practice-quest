// Basic Arithmetic Operations

function operation(a, b, op) {
  a = parseInt(a)
  b = parseInt(b)
  if (b === 0 && op === "divide") return "undefined"
  return Math.floor(
    op === "add"
      ? a + b
      : op === "subtract"
      ? a - b
      : op === "divide"
      ? a / b
      : op === "multiply"
      ? a * b
      : 0
  )
}
console.log(operation("1", "2", "add"))
console.log(operation("4", "5", "subtract"))
console.log(operation("6", "3", "divide"))
