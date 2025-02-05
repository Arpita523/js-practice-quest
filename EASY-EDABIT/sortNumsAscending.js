// Sort Numbers in Ascending Order

function sortNumsAscending(arr) {
  if (arr === null || arr === undefined || arr.length === 0) return []
  return arr.sort((a, b) => a - b)
}

console.log(sortNumsAscending([1, 2, 10, 50, 5]))
console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]))
console.log(sortNumsAscending(null))
console.log(sortNumsAscending([]))
