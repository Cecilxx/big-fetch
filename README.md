## Big Fetch

The [big-fetch](https://www.npmjs.com/package/big-fetch) is a wrapper based on fetch and promise, adding abort and timeout functions

### Features

* [x] **abort()**: Set the current promise to rejected
* [x] **timeout**: Increase timeout for current request

### Browser Support

The big-fetch is a wrapper based on [fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch) and [promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise), If your browser does not support fetch and promise you need to install [whatwg-fetch](https://github.com/github/fetch) and [promise-polyfill](https://github.com/taylorhakes/promise-polyfill)

### NPM Install

```
npm install big-fetch --save-exact
```

### Example

A basic fetch request is really simple to set up. Have a look at the following code:

```js
import bigFetch from 'big-fetch'

bigFetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
    console.log(myJson)
  })
```

Instead of passing a path to the resource you want to request into the fetch() call, you can create a request object using the Request() constructor, and pass that in as a fetch() method argument:

```js
import bigFetch from 'big-fetch'

var myHeaders = new Headers()

var myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
  timeout: 10000 // set 10000ms timeout
}

var request = bigFecth('flowers.jpg', options)

request
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })

// cancel
request.abort()
```
