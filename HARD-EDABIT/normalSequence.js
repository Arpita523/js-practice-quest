// A Normal Sequence

function normalSequence(n) {
  const a = 0
  //   console.log(a)
  const b = 1
  //   console.log(b)
  const c = (a + b) % 3
  //   console.log(c)
  const d = (b + c) % 3
  //   console.log(d)
  const e = (c + d) % 3
  //   console.log(e)
  const f = (d + e) % 3
  //   console.log(f)
  const g = (f + e) % 3
  //   console.log(g)
  const h = (f + g) % 3
  //   console.log(h)

  let x
  x = n % 8
  //   console.log(x)
  const values = [0, 1, 1, 2, 0, 2, 2, 1]
  return values[x === 0 ? 7 : x - 1]

  //   return (n + (n + 1)) % 3
}
console.log(normalSequence(1))
console.log(normalSequence(2))
console.log(normalSequence(3))
console.log(normalSequence(20))
