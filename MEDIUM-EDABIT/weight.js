// How Heavy Is It?

function weight(r, h) {
  let volume = Number(((Math.PI * Math.pow(r, 2) * h) / 1000).toFixed(2))
  console.log(volume)
  return volume
}
console.log(weight(4, 10))
console.log(weight(30, 60))
console.log(weight(15, 10))
