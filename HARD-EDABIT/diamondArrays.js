// Diamond Shaped Array

function diamondArrays(x) {
  let res = []
  for (let i = 1; i <= x; i++) {
    res.push(new Array(i).fill(i))
  }
  return res.concat(res.slice(0 - 1).reverse())
}
console.log(diamondArrays(1))
console.log(diamondArrays(2))
console.log(diamondArrays(5))
