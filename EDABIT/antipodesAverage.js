// The Antipodes Average

function antipodesAverage(arr) {
  let length = arr.length / 2
  //   console.log("length ====== ", length)
  let a = arr.slice(0, length)
  //   console.log("a ======== ", a)
  let b = arr.slice(-length)
  //   console.log("b ========= ", b)
  let reversedB = b.reverse()
  //   console.log("reversedB ======= ", reversedB)
  let sum = []
  for (let i = 0; i < a.length; i++) {
    sum.push((a[i] + reversedB[i]) / 2)
  }
  return sum
}
console.log(antipodesAverage([1, 2, 3, 4]))
console.log(antipodesAverage([1, 2, 3, 4, 5]))
console.log(antipodesAverage([-1, -2]))
