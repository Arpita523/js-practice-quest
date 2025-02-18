// Numbers in Strings
function numInStr(arr) {
  return arr.filter((el) => el.match(/\d/))
  // return arr.filter((el) => /\d/.test(el))
}
console.log(numInStr(["1a", "a", "2b", "b"]))
console.log(numInStr(["abc", "abc10"]))
console.log(numInStr(["this is a test", "test1"]))
