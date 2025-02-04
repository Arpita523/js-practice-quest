// Promises III: Native Promise, Introducing the Executor

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("edabit")
  }, 1000)
})
console.log(promise)
