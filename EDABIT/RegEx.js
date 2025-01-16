// RegEx: Character Classes X ⁠- \W

const REGEXP = /<div\W/g

const str1 = "<div>Hello.</div><div>My name is <b>George</b>.</div>"
const str2 = "<div><h1>The Word for Today</h1><div>aardvark</div></div>"
const str3 = "<div></div>"

console.log((str1.match(REGEXP) || []).length) // 2
console.log((str2.match(REGEXP) || []).length) // 2
console.log((str3.match(REGEXP) || []).length) // 1
