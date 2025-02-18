// Calculate an Earned Run Average

function era(er, ip) {
  return (Math.floor((er / ip) * 900) / 100).toFixed(2)

  // ========== SOLUTION ==========

  //   if (ip % 1 === 0.1) ip = Math.floor(ip) + 1 / 3
  //   if (ip % 1 === 0.2) ip = Math.floor(ip) + 2 / 3

  //   let result = (er / ip) * 9
  //   result = result.toFixed(2)
  //   return result
}
console.log(era(22, 99))
console.log(era(23, 99.1))
console.log(era(24, 99.2))
