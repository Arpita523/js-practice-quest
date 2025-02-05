// Calculate the Mean

function mean(arr) {
  let sum = arr.reduce((a, b) => a + b, 0)
  //   console.log(sum)
  let length = arr.length
  //   console.log(length)
  let mean = parseFloat((sum / length).toFixed(2))
  return mean
}
console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]))
console.log(mean([2, 3, 2, 3]))
console.log(mean([3, 3, 3, 3, 3]))
