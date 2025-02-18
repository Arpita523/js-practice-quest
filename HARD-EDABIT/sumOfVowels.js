// Sum of v0w3ls

function sumOfVowels(str) {
  let obj = {
    a: 4,
    e: 3,
    i: 1,
    o: 0,
  }
  let filtered = [...str].filter((el) => "aeiou".includes(el.toLowerCase()))
  let sum = filtered.reduce(
    (acc, curr) => acc + (obj[curr.toLowerCase()] || 0),
    0
  )
  console.log(sum)
  return sum
}
console.log(sumOfVowels("Let's test this function."))
console.log(sumOfVowels("Do I get the correct output?"))
console.log(sumOfVowels("I love edabit!"))
