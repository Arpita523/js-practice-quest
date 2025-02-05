// Drink Sorting

function sortDrinkByPrice(drinks) {
  return drinks.sort((a, b) => a.price - b.price)
}
console.log(
  sortDrinkByPrice(
    (drinks = [
      { name: "lemonade", price: 50 },
      { name: "lime", price: 10 },
    ])
  )
)
