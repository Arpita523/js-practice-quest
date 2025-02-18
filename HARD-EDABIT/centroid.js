// Centroid of a Triangle

function centroid(x1, y1, x2, y2, x3, y3) {
  if (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) === 0) {
    return false
  }
  let x = parseFloat(((x1 + x2 + x3) / 3).toFixed(2))
  let y = parseFloat(((y1 + y2 + y3) / 3).toFixed(2))

  return [x, y]
}
console.log(centroid(0, 0, 3, 0, 3, 3))
console.log(centroid(2, 2, 8, -2, 0, -3))
console.log(centroid(1, 1, 2, 2, 3, 3))
