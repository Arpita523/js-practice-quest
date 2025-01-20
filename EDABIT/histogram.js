// Histogram Function

function histogram(arr, char) {
  return arr.map((el) => char.repeat(el)).join("\n")
}
console.log(histogram([1, 3, 4], "#"))
console.log(histogram([6, 2, 15, 3], "="))
console.log(histogram([1, 10], "+"))
