// Function Function

function factory(num) {
  return function first(arr) {
    return arr.map((el) => el / num)
  }
}
const first = factory(15)
const arr = [30, 45, 60]

console.log(first(arr))

const second = factory(2)
const arr2 = [2, 4, 6]

console.log(second(arr2))
