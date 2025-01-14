function countBoomerangs(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] === arr[i + 2]) {
      count++
    }
  }
  return count
}
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]))
