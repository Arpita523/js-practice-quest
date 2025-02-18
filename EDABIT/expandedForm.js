// Expand a Number I

function expandedForm(num) {
  let len = String(num).length
  let arr = String(num).split("")
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + "0".repeat(len - 1)
    len -= 1
  }
  return arr
    .filter(
      (x) =>
        x !== "0" &&
        x !== "00" &&
        x !== "000" &&
        x !== "0000" &&
        x !== "00000" &&
        x !== "000000"
    )
    .join(" + ")
}
console.log(expandedForm(70304))
console.log(expandedForm(1037903))
console.log(expandedForm(802539))
