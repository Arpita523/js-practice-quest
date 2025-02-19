// Spaces Apart

function spaceApart(arr) {
  if (arr.some((item) => item < 0)) {
    return "invalid"
  }
  const firstOneIndex = arr.indexOf("1")
  const lastOneIndex = arr.lastIndexOf("1")

  if (firstOneIndex === -1 || firstOneIndex === lastOneIndex) {
    return "invalid"
  }

  const numbersBetween = arr.slice(firstOneIndex + 1, lastOneIndex)
  const sum = numbersBetween.reduce((acc, val) => {
    return typeof val === "number" ? acc + val : acc
  }, 0)

  return sum
}
console.log(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]))
console.log(spaceApart(["1", 9, 20, 38, "1"]))
console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]))
