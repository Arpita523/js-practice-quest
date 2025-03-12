// Know Your Neighbor

function plusSign(str) {
  return [...str].every((c, i) =>
    /[a-z]/gi.test(c) ? str[i - 1] == "+" && str[i + 1] == "+" : true
  )
}
console.log(plusSign("+f+d+c+#+f+"))
console.log(plusSign("+d+=3=+s+"))
console.log(plusSign("f++d+g+8+"))
console.log(plusSign("+s+7+fg+r+8+"))
