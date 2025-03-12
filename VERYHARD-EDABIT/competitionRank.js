// Standard Competition Ranking ("1224" ranking)

function competitionRank(results, person) {
  let sort = Object.values(results).sort((a, b) => b - a)
  return sort.indexOf(results[person]) + 1
}
console.log(
  competitionRank(
    {
      George: 96,
      Emily: 95,
      Susan: 93,
      Jane: 89,
      Brett: 82,
    },
    "Jane"
  )
)
console.log(
  competitionRank(
    {
      Kate: 92,
      Carol: 92,
      Jess: 87,
      Bruce: 87,
      Scott: 84,
    },
    "Bruce"
  )
)
