// LCM of Two Numbers

function lcm(n1, n2) {
  let v = n1 * n2
  for (let i = 2; i <= v; i++) {
    if (i % n1 === 0 && i % 2 === 0) {
      return i
    }
  }
}
console.log(lcm(9, 18))
console.log(lcm(8, 5))
console.log(lcm(17, 11))
