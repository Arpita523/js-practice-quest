// Temperature Converter

function convert(deg) {
  if (deg.endsWith("°F")) {
    let num = Number(deg.slice(0, -2))
    return Math.round(((num - 32) * 5) / 9) + "°C"
  } else if (deg.endsWith("°C")) {
    let num = Number(deg.slice(0, -2))
    return Math.round((num * 9) / 5 + 32) + "°F"
  } else {
    return "Error"
  }
}
console.log(convert("35°C"))
console.log(convert("19°F"))
console.log(convert("33"))
