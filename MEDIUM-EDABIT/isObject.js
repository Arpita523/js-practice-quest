// Is it an Object?

function isObject(value) {
  if (value === null || value === "") return false
  return typeof value === "object"
}
console.log(
  isObject(function add(x, y) {
    return x + y
  })
)
console.log(isObject(new RegExp("^[a-zA-Z0-9]+$", "g")))
console.log(isObject(null))
console.log(isObject(""))
