function makePromise (value, delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), delay)
  })
}

function async (fn) {
  const it = fn()

  function handle (value) {
    const next = it.next(value)
    return next.done
      ? next.value
      : next.value instanceof Promise && next.value.then(handle, err => it.throw(err))
  }
  return handle()
}

const output = async(function * () {
  try {
    const result1 = yield makePromise('some text N1', 100) // ?
    const result2 = yield makePromise(result1 + ' + some text N2', 200) // ?
    return result2 // ?
  } catch (err) {
    console.info(`Error: ${err.message}`) // ?
  }
})

console.info(output.toString())
output.then(console.info)
