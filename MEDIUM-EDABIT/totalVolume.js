// Total Volume of All Boxes

function totalVolume(...boxes) {
  let res = boxes
    .map((box) => box.reduce((a, b) => a * b, 1))
    .reduce((a, b) => a + b, 0)
  console.log(res)

  return res
}
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]))
console.log(totalVolume([2, 2, 2], [2, 1, 1]))
console.log(totalVolume([1, 1, 1]))
