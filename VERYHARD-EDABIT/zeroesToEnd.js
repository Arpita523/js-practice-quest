// Mutations Only: Zeroes to the End

function zeroesToEnd(a) {
  let zeroes = []
  let ele = []
  for (let i = 0; i < a.length; i++) {
    a[i] === 0 ? zeroes.push(a[i]) : ele.push(a[i])
  }
  return ele.concat(zeroes)
}
console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]))
console.log(zeroesToEnd([0, 0, 2, 0, 5]))
console.log(zeroesToEnd([4, 4, 5]))
console.log(zeroesToEnd([0, 0]))
