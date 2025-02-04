// Changing a String into camelCase

function camelCasing(str) {
  return str
    .split(/[\s_]+/)
    .map((w, i) =>
      i === 0 ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1).toLowerCase()
    )
    .join("")
}

console.log(camelCasing("Hello World")) // ➞ "helloWorld"
console.log(camelCasing("snake_case")) // ➞ "snakeCase"
console.log(camelCasing("low high_HIGH")) // ➞ "lowHighHigh"
