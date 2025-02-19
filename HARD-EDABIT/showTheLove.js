// Sharing is Caring

function showTheLove(arr) {
  let minimum = Math.min(...arr)
  let totalRemoved = 0
  let updatedArray = arr.map((num) => {
    if (num !== minimum) {
      let removedAmount = num * 0.25
      totalRemoved += removedAmount

      return num - removedAmount
    }
    return num
  })

  updatedArray[updatedArray.indexOf(minimum)] += totalRemoved

  return updatedArray
}
console.log(showTheLove([4, 1, 4]))
console.log(showTheLove([16, 10, 8]))
console.log(showTheLove([2, 100]))
