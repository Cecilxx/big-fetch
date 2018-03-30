import 'whatwg-fetch'
import Promise from 'promise-polyfill'

if (!window.Promise) {
  window.Promise = Promise
}

export default function(url, options = {}) {
  var _abortFn = null
  var _bigFetchPromise = null

  // fetch请求promise
  var _fetch = new Promise(function(resolve, reject) {
    fetch(url, options)
      .then(function(data) {
        resolve(data)
      })
      .catch(function(err) {
        reject('请求失败')
      })
  })

  // 超时请求promise
  var _timeout = new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject('请求超时')
    }, timeout)
  })

  // 取消请求promise
  var _abort = new Promise(function(resolve, reject) {
    _abortFn = function() {
      reject('请求取消')
    }
  })

  var _promises = [_fetch, _abort]

  if (options.timeout) {
    _promises.push(_timeout)
    _bigFetchPromise = Promise.race(_promises)
  }

  _bigFetchPromise.abort = _abort

  return _bigFetchPromise
}
