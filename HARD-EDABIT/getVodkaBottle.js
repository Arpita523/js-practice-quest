// Burglary Series (12): Get Vodka Bottle

function getVodkaBottle(obj, num) {
  const arrayOfObjects = Object.keys(obj)
  //   console.log(arrayOfObjects)

  const temp = arrayOfObjects.filter(
    (item) => typeof item === "string" && item.includes("Rammstein")
  )
  //   console.log(temp)

  for (let i = 0; i < temp.length; i++) {
    if (obj[temp[i]] === num) {
      return temp[i]
    }
  }
  return ""
}
console.log(
  getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 100)
)

console.log(
  getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 50)
)

console.log(
  getVodkaBottle(
    { whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 },
    70
  )
)
