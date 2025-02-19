// Array Chunking

function chunk(array, size) {
  let res = []
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size)
    // console.log(chunk)
    res.push(chunk)
  }
  return res
}
console.log(chunk([1, 2, 3, 4], 2))
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3))
console.log(chunk([1, 2, 3, 4, 5], 10))
