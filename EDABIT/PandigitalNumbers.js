// Pandigital Numbers

function isPandigital(num) {
  return new Set(num.toString()).size === 10
}
console.log(isPandigital(98140723568910))
console.log(isPandigital(90864523148909))
console.log(isPandigital(112233445566778899))
