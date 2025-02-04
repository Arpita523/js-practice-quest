// Is it Time for Milk and Cookies?

function timeForMilkAndCookies(date) {
  const getDate = date.getDate()
  //   console.log(getDate)
  const getMonth = date.getMonth()
  //   console.log(getMonth)

  return getDate === 24 && getMonth === 11 ? true : false
}
console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))
console.log(timeForMilkAndCookies(new Date(2013, 0, 23)))
console.log(timeForMilkAndCookies(new Date(3000, 11, 24)))
