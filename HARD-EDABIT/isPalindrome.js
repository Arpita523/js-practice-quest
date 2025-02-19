// Recursion: Palindrome Word

// function isPalindrome(wrd) {
//   let res = wrd.split("").reverse().join("")
//   console.log(res)

//   return res === wrd
// }

function isPalindrome(word) {
  if (word.length <= 1) {
    return true
  }
  if (word[0] !== word[word.length - 1]) {
    return false
  }
  return isPalindrome(word.slice(1, -1))
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("adieu"))
console.log(isPalindrome("rotor"))
