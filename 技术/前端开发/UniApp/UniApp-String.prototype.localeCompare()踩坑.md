---
title: UniApp-String.prototype.localeCompare()踩坑
aliases:
  - UniApp-String.prototype.localeCompare()踩坑
  - 问题
tags: []
date created: 2022-12-10 16:09:21
date updated: 2023-11-22 10:40:49
---

# UniApp-String.prototype.localeCompare()踩坑

[[String.prototype.localeCompare()]]

- [[一维数组转通讯录树]]

```js
['张三','李四','王五'] => {
  'A': ['张三'],
  'L': ['李四'],
  'W': ['王五']
}
```

## 问题

- 问题一：在uniapp中使用String.localeCompare方法进行字符串比较时，发现在APP端和小程序的结果不一致。
- 问题二：~~在uniapp中数组元素String.localeCompare方法是Undefined(未复现)~~

### CODE

```js
// 在APP端和小程序的结果不一致
'张'.localeCompare('李') // MP => 1, APP => -2094
```

## 解决

- APP端使用pinyin.js进行拼音转换，再进行比较

完整代码 [[一维数组转通讯录树]]

```js
// 添加
// #ifdef APP-PLUS
let py = pinyin(v[key], { // 李世民 => [['l'],['s'],['m']]
  style: 'FIRST_LETTER',
})
// L === L
if (py[0][0].toUpperCase() == items) {
  curr.child.push(v)
}
// #endif

// 排序
// #ifdef APP-PLUS
pinyin(a[key], {
  style: 'FIRST_LETTER',
})[0][0].localeCompare(
  pinyin(b[key], {
    style: 'FIRST_LETTER',
  })[0][0],
)
// #endif
// #ifdef MP
a[key].localeCompare(b[key])
// #endif
```
