// Sum of Resistance in Parallel Circuits

function parallelResistance(arr) {
  return Number((1 / arr.map((x) => 1 / x).reduce((x, y) => x + y)).toFixed(1))
}
console.log(parallelResistance([6, 3]))
console.log(parallelResistance([10, 20, 10]))
console.log(parallelResistance([500, 500, 500]))
