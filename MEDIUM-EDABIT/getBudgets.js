// Get Sum of People's Budget

function getBudgets(arr) {
  let sum = arr.reduce((curr, next) => curr + next.budget, 0)
  console.log(sum)
  return sum 
}
console.log(
  getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
)
console.log(
  getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ])
)
