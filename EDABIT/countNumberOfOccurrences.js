// Burglary Series (15): Number of Occurrences

function countNumberOfOccurrences(obj) {
  console.log(values)

  let count = {}
  for (let i = 0; i < values.length; i++) {
    let num = values[i]
    count[num] = count[num] ? count[num] + 1 : 1
  }
  return count
}
console.log(
  countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot",
  })
)
console.log(
  countNumberOfOccurrences({
    a: "moron",
    b: "moron",
    c: "moron",
  })
)
console.log(
  countNumberOfOccurrences({
    a: "idiot",
    b: "scumbag",
  })
)
