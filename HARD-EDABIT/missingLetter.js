// What's the Missing Letter?

function missingLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const curr = str[i].charCodeAt()
    // console.log("curr ============> ", curr)
    const next = str[i + 1].charCodeAt()
    // console.log("next ============> ", next)
    const diff = Math.abs(curr - next)
    // console.log("diff ============> ", diff)
    if (diff !== 1) return String.fromCharCode(curr + 1)
  }
  return "No Missing Letter"
}
console.log(missingLetter("abdefg"))
console.log(missingLetter("mnopqs"))
console.log(missingLetter("tuvxyz"))
console.log(missingLetter("ghijklmno"))
