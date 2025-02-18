// Recursion: Left Shift by Powers of Two

function shiftToLeft(x, y) {
  if (y === 0) {
    return x
  } else {
    return shiftToLeft(x * 2, y - 1)
  }
}

console.log(shiftToLeft(5, 2))
console.log(shiftToLeft(10, 3))
console.log(shiftToLeft(-32, 2))
console.log(shiftToLeft(-6, 5))
console.log(shiftToLeft(12, 4))
console.log(shiftToLeft(46, 6))

// ========== SOLUTION 1 ===========

// return x * Math.pow(2, y)
