// One Plus One

function wordedMath(expr) {
  let mapping = { zero: 0, one: 1, two: 2 }
  //   console.log(mapping)
  let returnValue = { 0: "Zero", 1: "One", 2: "Two" }
  let values = expr.split(" ").map((el) => el.toLowerCase())
  //   console.log(values)
  let res =
    values[1] === "minus"
      ? mapping[values[0]] - mapping[values[2]]
      : mapping[values[0]] + mapping[values[2]]

  //   console.log(res)
  return returnValue[res]
}
console.log(wordedMath("One plus one"))
console.log(wordedMath("zero Plus one"))
console.log(wordedMath("one minus one"))
