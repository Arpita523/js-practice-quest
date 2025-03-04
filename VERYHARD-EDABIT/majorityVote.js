// Majority Vote

function majorityVote(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++
    }
    if (count > arr.length / 2) {
      return arr[i]
    }
  }
  return null
}
console.log(majorityVote(["A", "A", "B"]))
console.log(majorityVote(["A", "A", "A", "B", "C", "A"]))
console.log(majorityVote(["A", "B", "B", "A", "C", "C"]))
