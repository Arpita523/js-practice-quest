// Grocery Store Prices

function getPrices(arr) {
  const prices = arr.map((item) => {
    const price = item.split("$")[1].replace(")", "")
    return parseFloat(price)
  })
  return prices
}

console.log(
  getPrices([
    "ice cream ($5.99)",
    "banana ($0.20)",
    "sandwich ($8.50)",
    "soup ($1.99)",
  ])
)
console.log(getPrices(["salad ($4.99)"]))
