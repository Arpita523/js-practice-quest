// Balanced Array

function balanced(arr) {
  let midPoint = arr.length / 2
  let first = arr.slice(0, midPoint)
  let last = arr.slice(midPoint)
  let sumFirst = first.reduce((a, b) => a + b, 0)
  let lastSum = last.reduce((c, d) => c + d, 0)
  return sumFirst < lastSum
    ? last.concat(last)
    : sumFirst > lastSum
    ? first.concat(first)
    : arr
}

console.log(balanced([1, 2, 4, 6, 3, 1]))
console.log(balanced([88, 3, 27, 5, 9, 0, 13, 10]))
console.log(balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]))
