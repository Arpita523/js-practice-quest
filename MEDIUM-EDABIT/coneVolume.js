// Volume of a Cone

function coneVolume(h, r) {
  let volume = (Math.PI * (Math.pow(r, 2) * h)) / 3
  return Number(volume.toFixed(2))
}
console.log(coneVolume(3, 2))
console.log(coneVolume(15, 6))
console.log(coneVolume(18, 0))
