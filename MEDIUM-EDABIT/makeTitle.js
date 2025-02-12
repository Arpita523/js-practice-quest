// Capitalize the First Letter of Each Word

function makeTitle(str) {
  return str
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ")
}
console.log(makeTitle("This is a title"))
console.log(makeTitle("capitalize every word"))
console.log(makeTitle("I Like Pizza"))
console.log(makeTitle("PIZZA PIZZA PIZZA"))
