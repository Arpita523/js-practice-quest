// Positive Dominant

function isPositiveDominant(a) {
  const uniqueValue = [...new Set(a)]
  const uniquepositive = uniqueValue.filter((num) => num > 0)
  const uniquenegative = uniqueValue.filter((num) => num < 0)

  return uniquepositive.length > uniquenegative.length
}
console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]))
console.log(isPositiveDominant([(5, 99, 832, -3, -4)]))
console.log(isPositiveDominant([(5, 0)]))
