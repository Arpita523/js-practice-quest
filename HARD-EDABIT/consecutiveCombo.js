// Combined Consecutive Sequence

function consecutiveCombo(a1, a2) {
  const res = a1.concat(a2)
  //   console.log(res)
  const sorted = res.sort()
  //   console.log(sorted)
  const min = Math.min(...sorted)
  const max = Math.max(...sorted)
  for (let i = min; i <= max; i++) {
    if (!sorted.includes(i)) return false
  }

  return true
}
console.log(consecutiveCombo([7, 4, 5, 1], [2, 3, 6]))
console.log(consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9]))
console.log(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]))
console.log(consecutiveCombo([44, 46], [45]))
