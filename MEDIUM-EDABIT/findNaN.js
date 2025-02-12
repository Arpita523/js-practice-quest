// Find NaN in an Array

function findNaN(number) {
  return number.findIndex((el) => isNaN(el))
}

// const findNaN = arr => arr.findIndex(isNaN);
console.log(findNaN([1, 2, NaN]))
console.log(findNaN([NaN, 1, 2, 3, 4]))
console.log(findNaN([0, 1, 2, 3, 4]))
