function colorPatternTimes(cols) {
  let time = 0
  for (let i = 0; i < cols.length; i++) {
    time += 2
    if (i > 0 && cols[i] !== cols[i - 1]) {
      time += 1
    }
  }
  return time
}

console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]))
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"]))
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]))
