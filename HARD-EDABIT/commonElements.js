// Finding Common Elements

function commonElements(arr1, arr2) {
  let a1 = arr1.sort((a, b) => a - b)
  //   console.log(a1)
  let a2 = arr2.sort((a, b) => a - b)
  //   console.log(a2)
  let res = new Set(a1.filter((el) => a2.includes(el)))

  return [...res]
}
console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]))
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]))
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]))
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]))
