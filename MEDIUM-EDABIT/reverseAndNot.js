// ReverseAndNot

function reverseAndNot(i) {
  let res = parseInt(String(i).split("").reverse().join("") + i)
  console.log(res)
}
console.log(reverseAndNot(123))
console.log(reverseAndNot(152))
console.log(reverseAndNot(123456789))
