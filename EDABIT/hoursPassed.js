// Hours Passed

function hoursPassed(t1, t2) {
  t1 = eval(t1.replace("AM", "").replace("PM", "+12").replace(":00", ""))
  t2 = eval(t2.replace("AM", "").replace("PM", "+12").replace(":00", ""))
  if (t1 === t2) t1 = 0
  return t1 != t2 ? Math.abs(t1 - t2) + "hours" : "No time has passed."
}
console.log(hoursPassed("3:00 AM", "9:00 AM"))
console.log(hoursPassed("2:00 PM", "4:00 PM"))
console.log(hoursPassed("1:00 AM", "3:00 PM"))
