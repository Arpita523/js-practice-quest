// Case and Index Inverter

function invert(s) {
  let len = s.length
  let s1 = ""
  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === "") s1 += s[i]
    else if (s[i] === s[i].toLowerCase()) s1 += s[i].toUpperCase()
    else s1 += s[i].toLowerCase()
  }
  return s1
}

console.log(invert("dLROW YM sI HsEt"))
console.log(invert("ytInIUgAsnOc"))
console.log(invert("step on NO PETS"))
