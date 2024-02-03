---
标题: UniApp-String.prototype.localeCompare() 踩坑
描述: null
封面: null
uid: 20240123112807080
aliases: []
tags:
  - 计算机/前端/uni-app
  - 计算机/前端/JavaScript
  - 计算机/语言/String
  - localeCompare
  - 踩坑
  - 纸板
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2024-01-22T16:57:39.000Z
---

# UniApp-String.prototype.localeCompare() 踩坑

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

- 问题一：在 uniapp 中使用 String.localeCompare 方法进行字符串比较时，发现在 APP 端和小程序的结果不一致。
- 问题二：~~在 uniapp 中数组元素 String.localeCompare 方法是 Undefined(未复现)~~

### CODE

```js
// 在APP端和小程序的结果不一致
'张'.localeCompare('李') // MP => 1, APP => -2094
```

## 解决

- APP 端使用 pinyin.js 进行拼音转换，再进行比较

完整代码 [[一维数组转通讯录树]]

```js
// 添加
// [[ifdef]] APP-PLUS
let py = pinyin(v[key], { // 李世民 => [['l'],['s'],['m']]
  style: 'FIRST_LETTER',
})
// L === L
if (py[0][0].toUpperCase() == items) {
  curr.child.push(v)
}
// [[endif]]

// 排序
// [[ifdef]] APP-PLUS
pinyin(a[key], {
  style: 'FIRST_LETTER',
})[0][0].localeCompare(
  pinyin(b[key], {
    style: 'FIRST_LETTER',
  })[0][0],
)
// [[endif]]
// [[ifdef]] MP
a[key].localeCompare(b[key])
// [[endif]]
```
