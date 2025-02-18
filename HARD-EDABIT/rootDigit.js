// Digits Sum Root

const rootDigit = (n) =>
  n > 9 ? rootDigit([...`${n}`].reduce((a, b) => a + +b, 0)) : n
console.log(rootDigit(123))
console.log(rootDigit(999888777))
console.log(rootDigit(1238763636555555555555n))
