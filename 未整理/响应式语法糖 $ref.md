---
标题: 响应式语法糖 $ref
描述: null
封面: null
uid: 20240123112807330
aliases: []
tags:
  - 计算机/前端/Vue
  - 计算机/前端/Vue3
  - 计算机/前端/JavaScript
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2024-01-22T16:57:35.000Z
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
