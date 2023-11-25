---
title: 响应式语法糖 $ref
tags: []
date created: 2022-12-16 09:42:48
date updated: 2023-11-25 14:11:56
---

# 响应式语法糖 $ref

## $ref

自从引入组合式 API 的概念以来，一个主要的未解决的问题就是 ref 和响应式对象到底用哪个。响应式对象存在解构丢失响应性的问题，而 ref 需要到处使用.value 则感觉很繁琐，并且在没有类型系统的帮助时很容易漏掉.value。

## Vite 开启响应式语法糖

  ```js
  // vite.config.js
  export default {
    plugins: [vue({
      reactivityTransform: true
    })],
  }
  ```

## 参考

- [响应式语法糖$ref](https://cn.vuejs.org/guide/extras/reactivity-transform.html#refs-vs-reactive-variables)


