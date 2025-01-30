// Imaginary Coding Interview

function interview(arr, tot) {
  let res =
    arr.length === 8 &&
    tot <= 120 &&
    arr[0] <= 5 &&
    arr[1] <= 5 &&
    arr[2] <= 10 &&
    arr[3] <= 10 &&
    arr[4] <= 15 &&
    arr[5] <= 15 &&
    arr[6] <= 20 &&
    arr[7] <= 20

  return res ? "qualified" : "disqualified"
}
console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 120))
console.log(interview([2, 3, 8, 6, 5, 12, 10, 18], 64))
console.log(interview([5, 5, 10, 10, 25, 15, 20, 20], 120))
console.log(interview([5, 5, 10, 10, 15, 15, 20], 120))
console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 130))
