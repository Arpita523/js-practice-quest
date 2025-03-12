// Get Notes Distribution
function getNotesDistribution(students) {
  const obj = students.reduce((acc, { notes }) => {
    notes.forEach((note) => {
      // if(note < 1 || note > 5) return;
      if (!acc[note]) acc[note] = 0
      acc[note]++
    })

    return acc
  }, {})

  console.log("obj was", obj)

  return obj
}
console.log(
  getNotesDistribution([
    {
      name: "Steve",
      notes: [5, 5, 3, -1, 6],
    },
    {
      name: "John",
      notes: [3, 2, 5, 0, -3],
    },
  ])
)
