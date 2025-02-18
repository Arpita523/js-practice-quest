// Frequency Distribution

function getFrequencies(arr) {
  const res = {}
  for (let i = 0; i < arr.length; i++) {
    let count = 1
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++
      }
    }
    if (!res.hasOwnProperty(arr[i])) {
      res[arr[i]] = count
    }
  }
  return res
}
console.log(getFrequencies(["A", "B", "A", "A", "A"]))
console.log(getFrequencies([1, 2, 3, 3, 2]))
console.log(getFrequencies([true, false, true, false, false]))
console.log(getFrequencies([]))
