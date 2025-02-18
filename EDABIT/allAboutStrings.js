// All About Strings

function allAboutStrings(str) {
  let length = str.length
  //   console.log("length ======= ", length)
  let firstword = str[0]
  //   console.log("firstword ======== ", firstword)
  let lastword = str.slice(-1)
  //   console.log("lastword ======== ", lastword)
  let midlleWord =
    length % 2 === 0
      ? str.slice(length / 2 - 1, length / 2 + 1)
      : str.slice(Math.floor(length / 2), Math.floor(length / 2) + 1)
  //   console.log("midlleWord ======== ", midlleWord)
  let wordOccurance = str[1]
  //   console.log(wordOccurance)
  let findIndex = str.indexOf(wordOccurance, 2)
  let result = findIndex !== -1 ? `@ index ${findIndex}` : "not found"

  //   console.log(result)
  return [length, firstword, lastword, midlleWord, result]
}
console.log(allAboutStrings("LASA"))
console.log(allAboutStrings("Computer"))
console.log(allAboutStrings("Science"))

// ========== SECOND ALTERNATIVE ========= 


// const len = str.length;
// const first = str[0];
// const second = str[1];
// const midPoint = len / 2;
// const middle = Number.isInteger(midPoint)
//   ? str.slice(midPoint - 1, midPoint + 1)
//   : str[Math.floor(midPoint)];
// const last = str[len - 1];
// const indexOfSecond = str.indexOf(second, 2);
// const repeated =
//   indexOfSecond === -1 ? 'not found' : `@ index ${indexOfSecond}`;

// return [len, first, last, middle, repeated];
