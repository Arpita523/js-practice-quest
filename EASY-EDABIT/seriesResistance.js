// Sum of Resistance in Series Circuits

function seriesResistance(arr) {
  let rt = arr.reduce((curr, next) => curr + next, 0)

  if (rt <= 1) return rt + " " + "ohm"
  else return rt + " " + "ohms"
  //   console.log(rt)
}
console.log(seriesResistance([1, 5, 6, 3]))
console.log(seriesResistance([16, 3.5, 6]))
console.log(seriesResistance([0.5, 0.5]))
