// Reverse Words in a String

function reverseWords(string) {
  let res = string.trim("").split(" ").reverse().join(" ")
  return res
  console.log(res)
}
console.log(reverseWords(" the sky is blue"))
console.log(reverseWords("hello   world!  "))
console.log(reverseWords("a good example"))
