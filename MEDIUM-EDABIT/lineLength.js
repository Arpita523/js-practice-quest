// Geometry 1: Length of Line Segment

function lineLength([x1, y1], [x2, y2]) {
  return parseFloat(Math.hypot(x2 - x1, y2 - y1).toFixed(2))
}
console.log(lineLength([15, 7], [22, 11]))
console.log(lineLength([0, 0], [0, 0]))
console.log(lineLength([0, 0], [1, 1]))
