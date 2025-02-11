// Algebra Sequence — Boxes

function boxSeq(step) {
  if (step === 0) return 0
  else if (step % 2 === 1) return step + 2
  else return step
}
console.log(boxSeq(0))
console.log(boxSeq(1))
console.log(boxSeq(2))
