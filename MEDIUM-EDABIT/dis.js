// Find the Discount

function dis(price, discount) {
  return Number((price - (price * discount) / 100).toFixed(2))
}
console.log(dis(1500, 50))
console.log(dis(89, 20))
console.log(dis(100, 75))
