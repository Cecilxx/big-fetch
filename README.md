## Browser Support

IE8+, Chrome, Firefox, IOS 4+, Safari 5+, Opera

### NPM Use

```
npm install big-fetch --save-exact
```

### Example

```js
import bigFetch from 'big-fetch'

let request = bigFecth(url, options)

request
  .then(data => {
    // 请求成功回调
    console.log(data)
  })
  .catch(error => {
    // 请求失败回调
    console.error(error)
  })

// 手动取消请求
request.abort()
```
