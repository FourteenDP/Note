## JSONP

JSONP 是 JSON with Padding 的缩写，它是一种跨域通信的方式。JSONP 的原理是利用 `<script>` 标签没有跨域限制的漏洞，通过 `<script>` 标签指向一个需要访问的地址并提供一个回调函数来接收数据。

```html
// index.html
<script>
  function callback(data) {
    console.log(data);
  }
</script>
<script src="http://localhost:3000/api?callback=callback"></script>
```

```ts
// server.ts
import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  const { callback } = req.query;
  res.send(`${callback}({ name: 'JSONP' })`);
});

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
```