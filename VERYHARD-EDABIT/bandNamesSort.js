// Sorting Band Names without Articles

function bandNamesSort(bands) {
  const remove = (b) => b.replace(/^(the|a|an) /i, "")
  return bands.sort((a, b) => remove(a).localeCompare(remove(b)))
}
console.log(
  bandNamesSort([
    "The New Yardbirds",
    "The Beatles",
    "The Square Roots",
    "On A Friday",
    "An Irony",
  ])
)
console.log(
  bandNamesSort([
    "The Platters",
    "A Yard of Yarn",
    "The Everly Brothers",
    "A Monster Effect",
    "The Sex Maggots",
  ])
)
console.log(
  bandNamesSort([
    "But Myth",
    "An Old Dog",
    "Def Leppard",
    "The Any Glitters",
    "The Dawn",
  ])
)
