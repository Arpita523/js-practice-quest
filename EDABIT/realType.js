// Get Real Type

function realType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}
console.log(realType(1))
console.log(realType("a"))
console.log(realType(true))
console.log(realType([]))
console.log(realType(null))
