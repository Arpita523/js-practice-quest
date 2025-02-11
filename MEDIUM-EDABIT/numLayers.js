// Folding a Piece of Paper

function numLayers(n) {
  let thickness = 0.5
  thickness *= Math.pow(2, n)
  return `${thickness / 1000}m`
}
console.log(numLayers(1))
console.log(numLayers(4))
console.log(numLayers(21))
