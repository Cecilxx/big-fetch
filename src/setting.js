const TIMEOUT = 15000

export default function(url, options = {}, msg) {
  let current = 0

  return new Promise((resolve, reject) => {
    const fetchPromise = fetch(url, options)
      .then()
      .catch()

    const runner = () => {
      // const parseUrl = getLastName(url);
      console.time(`request: ${msg}`)
      Promise.race([delay(), fetchPromise])
        .then(json => {
          console.timeEnd(`request: ${msg}`)
          resolve(json)
        })
        .catch()
    }

    runner()
  })
}

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('服务超时！')
    }, TIMEOUT)
  })
}
