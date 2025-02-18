// Pluralize!

function pluralize(arr) {
  let res = [...new Set(arr)]
  //   console.log(res)
  return res.map((el) =>
    arr.indexOf(el) !== arr.lastIndexOf(el) ? el + "s" : el
  )
}

console.log(pluralize(["cow", "pig", "cow", "cow"])) // Expected: ["cows", "pig"]
console.log(pluralize(["table", "table", "table"])) // Expected: ["tables"]
console.log(pluralize(["chair", "pencil", "arm"])) // Expected: ["chair", "pencil", "arm"]
