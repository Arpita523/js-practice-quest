// Up the Hill, Down the Hill

function aveSpd(upTime, upSpd, downSpd) {
  let time = upTime / 60
  //   console.log(time)
  let distance = upSpd * time
  //   console.log(distance)
  let totalDistance = distance * 2
  //   console.log(totalDistance)
  let downTime = distance / downSpd
  //   console.log(downTime)
  let totalTime = time + downTime
  //   console.log(totalTime)
  let averageSpeed = totalDistance / totalTime
  return averageSpeed
}
console.log(aveSpd(18, 20, 60))
console.log(aveSpd(30, 10, 30))
console.log(aveSpd(30, 8, 24))

// ========== solution 1  ==========>

// return (upTime * upSpd) / 30 / (upTime / 60 + ((upTime / 60) * upSpd) / downSpd)
