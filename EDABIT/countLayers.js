// Layers in a Rug

function countLayers(rug) {
  const uniqueLayers = new Set(rug)
  return uniqueLayers.size
}

console.log(countLayers(["AAAA", "ABBA", "AAAA"]))
console.log(
  countLayers(["AAAAAAAAA", "ABBBBBBBA", "ABBAAABBA", "ABBBBBBBA", "AAAAAAAAA"])
)
console.log(
  countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA",
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA",
  ])
)
