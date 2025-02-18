// Combinations

function combinations(...items) {
  let nonItemValue = items.filter((item) => item !== 0)
  let initialValue = 1
  const res = nonItemValue.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    initialValue
  )
  return res
}
console.log(combinations(2, 3))
console.log(combinations(3, 7, 4))
console.log(combinations(2, 3, 4, 5))
