// Combine Two Objects Into One, Summing Like Values

function combine(user1Income, user2Income) {
  // Merge and sum the values
  const combined = {};

  for (const key in user1Income) {
    combined[key] = (combined[key] || 0) + user1Income[key];
  }

  for (const key in user2Income) {
    combined[key] = (combined[key] || 0) + user2Income[key];
  }

  // Sort first by value (ascending), then by key name (alphabetically)
  return Object.fromEntries(
    Object.entries(combined).sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
  );
}

const user1 = { powerPlant: 70000, rental: 12000 };
const user2 = { teaching: 40000, rental: 10000 };

console.log(combine(user1, user2));
