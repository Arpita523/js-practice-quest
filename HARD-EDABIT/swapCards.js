// Swapping Cards

function swapCards(n1, n2) {
  let a = n1.toString()
  let b = n2.toString()

  if (a[0] == a[1]) {
    return b[0] + a[1] > a[0] + b[1]
  } else if (a[0] < a[1]) {
    return b[0] + a[1] > a[0] + b[1]
  } else {
    return a[0] + b[0] > a[1] + b[1]
  }
}
console.log(swapCards(41, 98))
console.log(swapCards(12, 28))
console.log(swapCards(67, 53))
console.log(swapCards(77, 54))
