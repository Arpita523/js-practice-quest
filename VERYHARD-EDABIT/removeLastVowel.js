// Remove the Last Vowel

function removeLastVowel(arr) {
  let ans = arr.split(" ")
  for (i = 0; i < ans.length; i++) {
    for (j = ans[i].length - 1; j >= 0; j--) {
      if (
        ans[i][j].toLowerCase() == "a" ||
        ans[i][j].toLowerCase() == "e" ||
        ans[i][j].toLowerCase() == "i" ||
        ans[i][j].toLowerCase() == "o" ||
        ans[i][j].toLowerCase() == "u"
      ) {
        ans[i] = ans[i].slice(0, j) + ans[i].slice(j + 1)
        break
      }
    }
  }
  return ans.join(" ")
}

// ============ OPTIMIZED CODE ==============
// function removeLastVowel(str) {
//   return str.replace(/[aeiou]([^aeiou]*?)(?= |$)/gi, "$1")
// }
console.log(
  removeLastVowel("Those who dare to fail miserably can achieve greatly.")
)
console.log(removeLastVowel("Love is a serious mental disease."))
console.log(removeLastVowel("Get busy living or get busy dying."))
