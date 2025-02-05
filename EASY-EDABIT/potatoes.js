// Find the Amount of Potatoes

function potatoes(str) {
  const regex = /(potato)/g
  const found = str.match(regex)
  //   console.log(found.length)
  return found.length
}
console.log(potatoes("potato"))
console.log(potatoes("potatopotato"))
console.log(potatoes("potatoapple"))
