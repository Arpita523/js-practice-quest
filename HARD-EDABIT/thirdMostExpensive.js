// Burglary Series (05): Third Most Expensive

function thirdMostExpensive(obj) {
  let values = Object.entries(obj)

  let sortedArr = values.sort((a, b) => b[1] - a[1])

  return sortedArr.length < 3 ? false : sortedArr[2][0]
}
console.log(thirdMostExpensive({}))
console.log(thirdMostExpensive({ piano: 100, tv: 200 }))
console.log(thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 }))
console.log(thirdMostExpensive({ piano: 1000, tv: 500, ball: 10, mirror: 200 }))
