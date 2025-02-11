// Which Generation Are You?

// ============== FIRST SOLUTION =============
function generation(x, y) {
  return x === -3 && y === "m"
    ? "great grandfather"
    : x === -3 && y === "f"
    ? "great grandmother"
    : x === -2 && y === "m"
    ? "grandfather"
    : x === -2 && y === "f"
    ? "grandmother"
    : x === -1 && y === "m"
    ? "father"
    : x === -1 && y === "f"
    ? "mother"
    : x === 0 && y === "m"
    ? "me!"
    : x === 0 && y === "f"
    ? "me!"
    : x === 1 && y === "m"
    ? "son"
    : x === 1 && y === "f"
    ? "daughter"
    : x === 2 && y === "m"
    ? "grandson"
    : x === 2 && y === "f"
    ? "granddaughter"
    : x === 3 && y === "m"
    ? "great grandson"
    : "great granddaughter"
}

// ============== OPTIMIZED  SOLUTION  ==============

function generation(x, y) {
  const obj = {
    "-3": { m: "great grandfather", f: "great grandmother" },
    "-2": { m: "grandfather", f: "grandmother" },
    "-1": { m: "father", f: "mother" },
    0: { m: "me!", f: "me!" },
    1: { m: "son", f: "daughter" },
    2: { m: "grandson", f: "granddaughter" },
    3: { m: "great grandson", f: "great granddaughter" },
  }
  return obj[x][y]
}

console.log(generation(2, "f"))
console.log(generation(-3, "m"))
console.log(generation(1, "f"))
