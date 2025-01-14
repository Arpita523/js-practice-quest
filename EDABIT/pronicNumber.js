// Pronic Number

function isHeteromecic(num) {
  for (let n = 0; n * (n + 1) <= num; n++) {
    if (n * (n + 1) === num) {
      return true
    }
  }
  return false
}
console.log(isHeteromecic(0))
console.log(isHeteromecic(2))
console.log(isHeteromecic(7))
console.log(isHeteromecic(110))
console.log(isHeteromecic(136))
console.log(isHeteromecic(156))
