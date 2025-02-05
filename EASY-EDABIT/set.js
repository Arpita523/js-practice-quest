// Transform into an Array with No Duplicates
function set(arr) {
  return [...new Set(arr)]
}

console.log(set([1, 3, 3, 5, 5]))
console.log(set([4, 4, 4, 4]))
console.log(set([5, 7, 8, 9, 10, 15]))
console.log(set([3, 3, 3, 2, 1]))
