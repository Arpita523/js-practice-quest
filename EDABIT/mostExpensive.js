// Return the Most Expensive Piece of Jewellery

function mostExpensive(obj) {
  let valueObj = Object.values(obj)
  //   console.log(valueObj)
  let keyObj = Object.keys(obj)
  //   console.log(keyObj)
  let max = Math.max(...valueObj)
  console.log(max)
  return `The most expensive one is the  ${keyObj[valueObj.indexOf(max)]}`
}
console.log(
  mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650,
  })
)
console.log(
  mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500,
  })
)
