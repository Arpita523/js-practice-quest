// Get Students with Names and Top Notes

function getStudentsWithNamesAndTopNotes(students) {
  return students.map((student) => ({
    name: student.name,
    topNote: Math.max(...student.notes, 0),
  }))
}
console.log(
  getStudentsWithNamesAndTopNotes([
    { name: "John", notes: [3, 5, 4] },
    { name: "Max", notes: [1, 4, 6] },
    { name: "Zygmund", notes: [1, 2, 3] },
  ])
)
