// Number to Reversed Array
function reverseArr(num) {
  let res = num.toString().split("").reverse().map(Number)
  console.log(res)
  return res
}
console.log(reverseArr(1485979))
console.log(reverseArr(623478))
console.log(reverseArr(12345))
