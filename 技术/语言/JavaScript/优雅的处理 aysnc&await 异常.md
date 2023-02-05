---
title: 优雅的处理 aysnc&await 异常
aliases: [优雅的处理 aysnc&await 异常, 优雅的处理 aysnc/await 异常]
tags: []
date created: 2023-02-06 02:54:19
date updated: 2023-02-06 02:58:19
---

# 优雅的处理 aysnc&await 异常

```javascript
async function errorCaptured(asyncFunc){
  try{
    let res = await asyncFunc()
    return [null, res]
  }catch(e){
    return [e, null]
  }
}
```

## 使用

```javascript
let [err, res] = await errorCaptured(asyncFunc)
```

## 关联

- [一个合格的中级前端工程师需要掌握的 28 个 JavaScript 技巧 - 掘金](https://juejin.cn/post/6844903856489365518#heading-27)
