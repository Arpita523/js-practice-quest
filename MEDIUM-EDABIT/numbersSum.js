// Sum of Number Elements in an Array

function numbersSum(arr) {
  return arr
    .filter((el) => typeof el === "number")
    .reduce((curr, next) => curr + next, 0)
}
console.log(numbersSum([1, 2, "13", "4", "645"]))
console.log(numbersSum([true, false, "123", "75"]))
console.log(numbersSum([1, 2, 3, 4, 5, true]))
