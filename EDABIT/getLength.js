// Length of a Nested Array

function getLength(arr) {
  return arr.flat(Infinity).length
}
console.log(getLength([1, [2, 3]]))
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]))
