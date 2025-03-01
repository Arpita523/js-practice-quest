// 24-Hour Time

function convertTime(str) {
  let [h, m, s] = str.slice(0, -2).split(":")
  let period = str.slice(-2)

  if (period === "PM" && h !== "12") h = String(Number(h) + 12)
  if (period === "AM" && h === "12") h = "00"

  return `${h}:${m}:${s}`
}

// function convertTime(str) {
//   let arr = str.split(":")
//   //   console.log(arr)
//   let isAM = arr[2].includes("AM")
//   if (isAM) {
//     arr[0] = arr[0].padStart(2, "0")
//     arr[2] = arr[2].padStart("AM", "")
//     if (arr[0] === "12") arr[0] = "00"
//   } else {
//     arr[0] = (+arr[0] + 12).toString()
//     arr[2] = arr[2].replace("PM", "")
//     if (arr[0] === "24") arr[0] = "12"
//   }
//   return arr.join(":")
// }

console.log(convertTime("07:05:45PM")) // Output: 19:05:45
console.log(convertTime("12:40:22AM")) // Output: 00:40:22
console.log(convertTime("12:45:54PM")) // Output: 12:45:54
