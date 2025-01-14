// Check If the Brick Fits through the Hole
// (a,b,c) -- dimensions of the brick
// (w,h) -- dimensions of the hole
function doesBrickFit(a, b, c, w, h) {
  return (
    (a <= w && b <= h) ||
    (a <= h && b <= w) ||
    (a <= w && c <= h) ||
    (a <= h && c <= w) ||
    (b <= w && c <= h) ||
    (b <= h && c <= w)
  )
}
console.log(doesBrickFit(1, 1, 1, 1, 1))
console.log(doesBrickFit(1, 2, 1, 1, 1))
console.log(doesBrickFit(1, 2, 2, 1, 1))
