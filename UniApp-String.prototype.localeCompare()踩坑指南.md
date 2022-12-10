---
title: UniApp-String.prototype.localeCompare()踩坑指南
aliases:
tags:
date created: 2022-12-10 16:09:21
date updated: 2022-12-10 17:11:13
---

# UniApp-String.prototype.localeCompare()踩坑指南

## 起因

  - 一维数组转通讯录列表
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
```js
```
