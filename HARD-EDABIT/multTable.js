// Multiplication Table

function multTable(n) {
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
console.log(multTable(2))
console.log(multTable(3))
console.log(multTable(5))
