// Reverse the Odd Length Words

function reverseOdd(str) {
  return str
    .split(" ")
    .map((word) =>
      word.length % 2 !== 0 ? word.split("").reverse().join("") : word
    )
    .join(" ")
}
console.log(reverseOdd("Bananas"))
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"))
