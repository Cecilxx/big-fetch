export default function(url, options = {}) {
  var _abortFn = null
  var _bigFetchPromise = null

  // fetch请求promise
  var _fetch = new Promise(function(resolve, reject) {
    fetch(url, options)
      .then(function(response) {
        if (!response.ok) {
          reject('The api request is not ok, please check it')
        } else {
          resolve(response)
        }
      })
      .catch(function(err) {
        reject(err)
      })
  })

  // 取消请求promise
  var _abort = new Promise(function(resolve, reject) {
    _abortFn = function() {
      reject('The api request is canceled')
    }
  })

  var _promises = [_fetch, _abort]

  var _timeout = null

  if (options.timeout) {
    // 超时请求promise
    _timeout = new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject('The api request is timeout')
      }, options.timeout)
    })
    _promises.push(_timeout)
  }

  _bigFetchPromise = Promise.race(_promises)
  _bigFetchPromise.abort = _abortFn

  return _bigFetchPromise
}
