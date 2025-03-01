// All Pairs that Sum to Target

function allPairs(arr, target) {
  let sort = arr.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < sort.length; i++) {
    for (let j = i + 1; j < sort.length; j++) {
      if (sort[i] + sort[j] === target) {
        res.push([sort[i], sort[j]])
      }
    }
  }
  return res
}

console.log(allPairs([2, 4, 5, 3], 7))
console.log(allPairs([5, 3, 9, 2, 1], 3))
console.log(allPairs([4, 5, 1, 3, 6, 8], 9))
