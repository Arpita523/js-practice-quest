// Bridge Shuffle

function bridgeShuffle(arr1, arr2) {
  let shuffled = []
  let length = Math.min(arr1.length, arr2.length)

  for (let i = 0; i < length; i++) {
    shuffled.push(arr1[i])
    shuffled.push(arr2[i])
  }

  // Spread the remaining elements instead of nesting them
  shuffled.push(...arr1.slice(length))
  shuffled.push(...arr2.slice(length))

  return shuffled
}

console.log(bridgeShuffle(["A", "A", "A"], ["B", "B", "B"]))
console.log(bridgeShuffle(["C", "C", "C", "C"], ["D"]))
console.log(bridgeShuffle([1, 3, 5, 7], [2, 4, 6]))
