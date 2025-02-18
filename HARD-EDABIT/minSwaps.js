// Converting One Binary String to Another

function minSwaps(s1, s2) {
  let count = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      count++
    }
  }
  return count / 2
}
console.log(minSwaps("1100", "1001"))
console.log(minSwaps("110011", "010111"))
console.log(minSwaps("10011001", "01100110"))
