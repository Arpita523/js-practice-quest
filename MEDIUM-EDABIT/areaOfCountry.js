// Get the Area of a Country

function areaOfCountry(name, area) {
  let landmass = Number.parseFloat((area / 148940000) * 100).toFixed(2)
  //   console.log(landmass)
  return `${name} is ${landmass}% of the total world's landmass`
}
console.log(areaOfCountry("Russia", 17098242))
console.log(areaOfCountry("USA", 9372610))
console.log(areaOfCountry("Iran", 1648195))
