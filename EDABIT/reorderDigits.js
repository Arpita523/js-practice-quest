// Reorder Digits

function reorderDigits(arr, direction) {
  let res = arr.map((num) => num.toString().split(""))
  //   console.log(res)
  return res.map((el) =>
    direction === "asc"
      ? parseInt(el.sort((a, b) => a - b).join(""))
      : parseInt(el.sort((a, b) => b - a).join(""))
  )
}
console.log(reorderDigits([515, 341, 98, 44, 211], "asc"))
console.log(reorderDigits([515, 341, 98, 44, 211], "desc"))
console.log(reorderDigits([63251, 78221], "asc"))
console.log(reorderDigits([63251, 78221], "desc"))
console.log(reorderDigits([1, 2, 3, 4], "asc"))
console.log(reorderDigits([1, 2, 3, 4], "desc"))
