// Calculate the Total Price of Groceries

function getTotalPrice(groceries) {
  let totalPriceOfProduct = 0
  for (let i = 0; i < groceries.length; i++) {
    groceries[i].total = groceries[i].quantity * groceries[i].price
    // console.log(groceries[i].total)
    totalPriceOfProduct += groceries[i].total
    // console.log(totalPriceOfProduct)
  }
  return Number(totalPriceOfProduct.toFixed(2))
}
console.log(
  getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.1 },
    { product: "Lollipop", quantity: 1, price: 0.2 },
  ])
)
console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ])
)
