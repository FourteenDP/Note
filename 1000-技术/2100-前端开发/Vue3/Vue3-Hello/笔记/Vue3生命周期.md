---
aliases:
tags:
title: 什么是生命周期
date created: 2022-12-15 20:05:25
date updated: 2022-12-15 20:14:23
---

## 什么是生命周期

- Vue 实例从创建到销毁的过程, 就是生命周期
- Vue3中没有了beforeCreate和created生命周期钩子

## Vue2和Vue3生命周期的对比

| Vue2 | Vue3 | 说明 |
| --- | --- | --- |
| beforeCreate | setup |  组件实例化之前 |
| created | setup | 组件实例化之后 |
| beforeMount | beforeMount | 挂载之前 |
| mounted | mounted | 挂载之后 |
| beforeUpdate | beforeUpdate | 更新之前 |
| updated | updated | 更新之后 |
| beforeDestroy | beforeUnmount | 销毁之前 |
| destroyed | unmounted | 销毁之后 |
| errorCaptured | errorCaptured | 错误捕获 |



## 生命周期图示

![[Pasted image 20221215201422.png]]
