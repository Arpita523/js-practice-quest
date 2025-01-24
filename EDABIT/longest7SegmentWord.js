function longest7SegmentWord(arr) {
  return (
    arr
      .sort((a, b) => b.length - a.length)
      .filter((wrd) => !/[kmvwx]/gi.test(wrd))[0] || ""
  )
  //  ====== solution ========
  //   const invalidLetters = ["k", "m", "v", "w", "x"]
  //   const filteredWords = arr.filter((word) => {
  //     return !invalidLetters.some((letter) => word.includes(letter))
  //   })
  //   if (filteredWords.length === 0) {
  //     return ""
  //   }
  //   let longest = ""
  //   for (let word of filteredWords) {
  //     if (word.length > longest.length) {
  //       longest = word
  //     }
  //   }
  //   return longest
}

// Test cases
console.log(
  longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"])
) // "parental"
console.log(
  longest7SegmentWord(["coding", "crackers", "edabit", "celebration"])
) // "celebration"
console.log(longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"])) // ""
console.log(longest7SegmentWord(["front", "fair", "sector", "thoughtful"])) // "thoughtful"
console.log(longest7SegmentWord(["accessible", "institution", "preoccupation"])) // "preoccupation"
