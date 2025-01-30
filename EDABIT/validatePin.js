// RegExp: Validate Pin

const myRegExp = /^[0-9]{4}$|^[0-9]{6}$/

console.log(myRegExp.test("1234"))
console.log(myRegExp.test("45135"))
console.log(myRegExp.test("89abc1"))
console.log(myRegExp.test("900876"))
console.log(myRegExp.test(" 4983"))
