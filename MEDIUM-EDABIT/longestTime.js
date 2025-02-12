// A Long Long Time

function longestTime(h, m, s) {
  let hoursInSec = h * 3600
  let minsInSec = m * 60

  if (hoursInSec > minsInSec && hoursInSec > s) return h
  if (minsInSec > hoursInSec && minsInSec > s) return m
  return s
}

console.log(longestTime(1, 59, 3598))
console.log(longestTime(2, 300, 15000))
console.log(longestTime(15, 955, 59400))
