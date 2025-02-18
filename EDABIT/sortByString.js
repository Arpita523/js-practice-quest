// Sort Words by a String

function sortByString(arr, str) {
  return arr.sort((a, b) => str.indexOf(a[0]) - str.indexOf(b[0]))
  //   console.log(sorted)
  return
}
console.log(sortByString(["apple", "banana", "cherry", "date"], "dbca"))
console.log(sortByString(["small", "big", "medium"], "sazymtb"))
console.log(sortByString(["poof", "floof", "loop"], "flatp"))
