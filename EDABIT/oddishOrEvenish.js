function oddishOrEvenish(num) {
  let sum = 0
  let res = num.toString().split("")
  for (let i = 0; i < res.length; i++) {
    sum += parseInt(res[i])
  }
  if (sum % 2 === 0) {
    return "Evenish"
  } else {
    return "Oddish"
  }
}
console.log(oddishOrEvenish(43))
console.log(oddishOrEvenish(11))
console.log(oddishOrEvenish(373))
console.log(oddishOrEvenish(4433))

// 2 solution ===>>>> ternary operator

function oddishOrEvenish(num) {
  let sum = 0
  let res = num.toString().split("")
  for (let i = 0; i < res.length; i++) {
    sum += parseInt(res[i])
  }
  return sum % 2 === 0 ? "Evenish" : "Oddish"
}
