// Instances of the Fibonacci Sequence

function fibSeq(end) {
  if (end === undefined) return undefined
  if (end === 0) return []
  let n1 = 0
  let n2 = 1
  let nextTerm
  let res = [0]

  if (end > 1) res.push(1)

  for (let i = 2; i < end; i++) {
    nextTerm = n1 + n2
    res.push(nextTerm)
    n1 = n2
    n2 = nextTerm
  }
  return res
}
console.log(fibSeq(4))
console.log(fibSeq(7))
console.log(fibSeq(0))
