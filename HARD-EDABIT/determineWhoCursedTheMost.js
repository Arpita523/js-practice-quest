//  Burglary Series (16): Nested objects

function determineWhoCursedTheMost(obj) {
  let me = 0
  let spouse = 0

  let rounds = Object.values(obj) // Extracts the round objects as an array

  for (let i = 0; i < rounds.length; i++) {
    me += rounds[i].me
    spouse += rounds[i].spouse
  }

  return me > spouse ? "ME!" : spouse > me ? "SPOUSE!" : "DRAW!"
}
console.log(
  determineWhoCursedTheMost({
    round1: {
      me: 10,
      spouse: 5,
    },
    round2: {
      me: 5,
      spouse: 10,
    },
    round3: {
      me: 10,
      spouse: 10,
    },
  })
)
console.log(
  determineWhoCursedTheMost({
    round1: {
      me: 40,
      spouse: 5,
    },
    round2: {
      me: 9,
      spouse: 10,
    },
    round3: {
      me: 9,
      spouse: 10,
    },
  })
)
console.log(
  determineWhoCursedTheMost({
    round1: {
      me: 10,
      spouse: 5,
    },
    round2: {
      me: 9,
      spouse: 44,
    },
    round3: {
      me: 10,
      spouse: 55,
    },
  })
)
