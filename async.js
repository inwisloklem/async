const makePromise = require('./make-promise')

const output = (async function () {
  try {
    const result1 = await makePromise('some text N1', 100)
    const result2 = await makePromise(result1 + ' + some text N2', 200)
    return result2 // ?
  } catch (err) {
    console.info(`Error: ${err.message}`)
  }
})()

Object.prototype.toString.call(output) // ?

console.info(output.toString())
output.then(console.info)
