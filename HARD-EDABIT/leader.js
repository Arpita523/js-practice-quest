// Leader in an Array

function leader(arr) {
  let maxIndex = arr.indexOf(Math.max(...arr))
  let ele = arr.slice(maxIndex)
  let leaders = []
  let max = -Infinity
  for (let i = ele.length - 1; i >= 0; i--) {
    if (ele[i] >= max) {
      leaders.unshift(ele[i])
      max = ele[i]
    }
  }
  return leaders
}
console.log(leader([2, 3, 20, 15, 8, 3]))
console.log(leader([2, 3, 20, 15, 8, 25, 3]))
console.log(leader([1, 2, 3, 4, 5]))
console.log(leader([8, 7, 1, 2, 10, 3, 5]))

// -------------- OPTIMIZED CODE  ---------------

// return arr.filter((v, i) => v === Math.max(...arr.slice(i)))
