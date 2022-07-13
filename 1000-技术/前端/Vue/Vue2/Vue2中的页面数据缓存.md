---
aliases: 
tags: 
date created: 2022-06-11 14:39:00
date updated: 2022-07-14 00:07:47
title: Vue2 中的页面数据缓存
---

# Vue2 中的页面数据缓存

## 使用场景

在使用 Vue 开发单页面应用事，经常会遇到表单页需要显示上次输入的数据，这就需要将整个页面数据的存储下来

## 三种方式

### 全局状态管理

将数据保存到全局状态管理工具如 Vuex，关闭页面时数据丢失

### [[Vue路由Keep-alive实现原理|Keep-alive]]

### 本地缓存

将数据保存到浏览器缓存，只要不主动清理缓存，数据不丢失

## 全局状态管理

- [ ] 全局状态管理页面缓存

## [[Vue路由Keep-alive实现原理|Keep-alive]] 缓存

- 缓存页面实例，不销毁实例，关闭页面时数据丢失



## 本地缓存

- 通过 `vm.$data` 获取当前 `vm` 数据，缓存到本地
- 读取数据时因 `vm.$data` 是个只读属性，无法直接把缓存中的数据直接赋值到 `vm.$data`
- vm 中的 data 属性是个方法，可以将读取赋值缓存数据写道 data 方法里通过 `Object.assign(target, …sources)` 方法克隆合并的对象作为 data 方法的返回值完成，缓存中的数据读取

### 实例

```javascript
export default {
  data() {
    const dataStr = localStorage.getItem('data');
    const data = JSON.parse(dataStr) || {}
    return Object.assign(
      {
        text: '',
      },
      data,
    )
  },
  methods: {
    cache() {
      localStorage.setItem('data', JSON.stringify(this.$data))
    }
  },
}
```
