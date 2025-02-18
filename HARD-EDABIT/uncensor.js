// C*ns*r*d Str*ngs -------> censored string

function uncensor(str, vowels) {
  let res = 0
  return str.replace(/\*/g, () => vowels[res++])
}
console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"))
console.log(uncensor("abcd", ""))
console.log(uncensor("*PP*RC*S*", "UEAE"))
