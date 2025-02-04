// Which Function Returns the Larger Number?

function whichIsLarger(f, g) {
  return f() > g() ? "f" : g() > f() ? "g" : "neither"
}

console.log(
  whichIsLarger(
    () => 5,
    () => 10
  )
)
console.log(
  whichIsLarger(
    () => 25,
    () => 25
  )
)
console.log(
  whichIsLarger(
    () => 505050,
    () => 5050
  )
)
