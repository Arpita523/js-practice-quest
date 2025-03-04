// Premier League Champions

function champions(teams) {
  let totalPoints = teams.map((team) => {
    let points = 3 * team.wins + 0 * team.loss + 1 * team.draws
    // console.log(points)
    return points
  })
  let maxPoints = Math.max(...totalPoints)
  //   console.log(maxPoints)

  let winners = teams.filter((team, index) => totalPoints[index] === maxPoints)
  //   console.log(winners)

  let goalDiff = winners.map((team) => {
    let goal = team.scored - team.conceded
    // console.log(goal)
    return goal
  })
  let maxGoalDiff = Math.max(...goalDiff)
  //   console.log(maxGoalDiff)

  let finalWinner = winners.find(
    (team, index) => goalDiff[index] === maxGoalDiff
  )
  return finalWinner.name
}
console.log(
  champions([
    {
      name: "Manchester United",
      wins: 30,
      loss: 3,
      draws: 5,
      scored: 88,
      conceded: 20,
    },
    {
      name: "Arsenal",
      wins: 24,
      loss: 6,
      draws: 8,
      scored: 98,
      conceded: 29,
    },
    {
      name: "Chelsea",
      wins: 22,
      loss: 8,
      draws: 8,
      scored: 98,
      conceded: 29,
    },
  ])
)
