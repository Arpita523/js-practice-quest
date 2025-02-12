// Mubashir's Mystery Challenge

function mubashirFunction(a, b) {
  return (
    a
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, val) => acc + val) *
    b
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, val) => acc + val)
  )
}
console.log(mubashirFunction(0, 1))
console.log(mubashirFunction(1, 2))
console.log(mubashirFunction(10, 10))
