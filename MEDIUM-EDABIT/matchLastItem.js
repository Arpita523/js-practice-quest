// Match the Last Item

function matchLastItem(arr) {
  let lastItem = arr.pop()
  //   console.log(lastItem)
  return arr.join("") === lastItem
}
console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]))
console.log(matchLastItem([1, 1, 1, "11"]))
console.log(matchLastItem([8, "thunder", true, "8thundertrue"]))
