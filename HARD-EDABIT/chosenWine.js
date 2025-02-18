// The Frugal Gentleman

function chosenWine(wines) {
  if (wines.length === 0) return null
  if (wines.length === 1) return Object.values(wines)[0].name
  return wines.sort((a, b) => a.price - b.price)[1].name
}
console.log(
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 },
  ])
)
console.log(chosenWine([{ name: "Wine A", price: 8.99 }]))
console.log(chosenWine([]))
