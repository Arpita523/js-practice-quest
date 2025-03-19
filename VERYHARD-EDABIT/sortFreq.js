// Sort by Frequency

function sortFreq(arr) {
  let count = {}
  for (const num of arr) {
    count[num] = (count[num] || 0) + 1
  }

  return arr.sort((a, b) => count[b] - count[a] || a - b)
}

console.log(sortFreq([2, 3, 5, 3, 7, 9, 5, 3, 7]))
console.log(sortFreq([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]))
console.log(sortFreq([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]))
