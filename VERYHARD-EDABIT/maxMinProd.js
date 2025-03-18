function maxProduct(arr) {
  arr.sort((a, b) => a - b)
  const n = arr.length

  return Math.max(
    arr[n - 1] * arr[n - 2] * arr[n - 3],
    arr[0] * arr[1] * arr[n - 1]
  )
}

function minProduct(arr) {
  arr.sort((a, b) => a - b)
  const n = arr.length

  return Math.min(arr[0] * arr[1] * arr[2], arr[0] * arr[n - 1] * arr[n - 2])
}

console.log(maxProduct([-8, -9, 1, 2, 7]))
console.log(maxProduct([-8, 1, 2, 7, 9]))
console.log(minProduct([1, -1, 1, 1]))
console.log(minProduct([-5, -3, -1, 0, 4]))
