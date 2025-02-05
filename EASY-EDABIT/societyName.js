// Secret Society
function societyName(friends) {
  let extractFirstChar = friends
    .map((friend) => friend[0])
    .sort()
    .join("")
  return extractFirstChar
  console.log(extractFirstChar)
}
console.log(societyName(["Adam", "Sarah", "Malcolm"]))
console.log(societyName(["Harry", "Newt", "Luna", "Cho"]))
console.log(
  societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])
)
