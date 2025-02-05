// Number Split

function numberSplit(n) {
  let arr = [Math.floor(n / 2)]
  let num = Math.ceil(n / 2)
  let newArr = [...arr, num]
  //   console.log(newArr)
  return newArr
}
console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))
