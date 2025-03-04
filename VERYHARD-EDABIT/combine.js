// Combine Two Objects Into One, Summing Like Values

function combine(user1Income, user2Income) {
  return Object.fromEntries(
    Object.entries({ ...user1Income, ...user2Income })
      .map(([key, value]) => [
        key,
        (user1Income[key] || 0) + (user2Income[key] || 0),
      ])
      .sort((a, b) => b[1] - a[1])
  )
}
const user1 = {
  powerPlant: 70000,
  rental: 12000,
}

const user2 = {
  teaching: 40000,
  rental: 10000,
}

console.log(combine(user1, user2))
