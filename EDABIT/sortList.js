// Burglary Series (13): Sort That List

function sortList(obj) {
  return Object.fromEntries(Object.entries(obj).sort().reverse())
}
console.log(sortList({ c: 100, a: 50, b: 10, d: 50 }))
console.log(sortList({ ab: 10, ac: 10, ad: 10 }))
console.log(sortList({ piano: 5, stereo: 10, suitcase: 1 }))
