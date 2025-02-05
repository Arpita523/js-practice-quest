// Sum of Multiplication

function multiSum(num, ten = 10) {
  let res
  let sum = 0
  for (let i = 1; i <= ten; i++) {
    res = num * i
    sum += res
    // console.log(sum)
  }
  return sum
}
console.log(multiSum(1))
console.log(multiSum(6))
console.log(multiSum(10))
console.log(multiSum(8))
console.log(multiSum(2))
