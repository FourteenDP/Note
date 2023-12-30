---
标题: Vue3 生命周期
笔记ID: 1683439291166
描述: null
封面: null
aliases: []
tags:
  - Vue
  - Vue3
  - 生命周期
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2023-12-31T01:17:19.000Z
uid: '20230507140131166'
---

# Vue3 生命周期

## 什么是生命周期

- Vue 实例从创建到销毁的过程, 就是生命周期
- Vue3 中没有了 beforeCreate 和 created 生命周期钩子

## Vue2 和 Vue3 生命周期的对比

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

## 开发模式钩子

| 钩子 | 说明 |
| --- | --- |
| renderTracked | 跟踪响应式数据的变化 |
| renderTriggered | 触发响应式数据的变化 |

## 页面路由钩子

| 钩子 | 说明 |
| --- | --- |
| onActivated | 路由激活时 |
| onDeactivated | 路由失活时 |

## 服务端渲染钩子

| 钩子 | 说明 |
| --- | --- |
| onServerPrefetch | 服务端预取数据 |

## 生命周期图示

![[Pasted image 20221215201422.png]]
