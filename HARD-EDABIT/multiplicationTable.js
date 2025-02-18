// Multiplication Table

function multiplicationTable(n) {
  let res = []
  for (let i = 1; i <= n; i++) {
    let row = []
    for (let j = 1; j <= n; j++) {
      row.push(i * j)
    }
    res.push(row)
  }
  return res
}
console.log(multiplicationTable(1))
console.log(multiplicationTable(3))
