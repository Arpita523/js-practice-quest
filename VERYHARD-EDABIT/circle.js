// Squaring the Circle

function circle(n) {
  const radius = 50 / Math.PI
  const sideLength = 2 * radius * Math.sin(Math.PI / n)
  const perimeter = n * sideLength
  return Number(perimeter.toFixed(3))
}
console.log(circle(3))
console.log(circle(12))
console.log(circle(100))
console.log(circle(1000))
