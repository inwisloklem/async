function makePromise (value, ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms, value)
  })
}

module.exports = makePromise
