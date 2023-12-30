---
标题: Pinia 与 Vuex
描述: null
封面: null
aliases: []
tags:
  - Vue
  - Vue3
  - Vuex
  - Pinia
  - 状态管理
  - 计算机/前端开发/JavaScript
cssclasses: null
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 02:46:52
uid: '20230507140131160'
---

# Pinia 与 Vuex

## 优缺点

Vuex 的优点

- 支持调试功能，如时间旅行和编辑
- 适用于大型、高复杂度的 Vue.js 项目

Vuex 的缺点

- 从 Vue 3 开始，getter 的结果不会像计算属性那样缓存
- Vuex 4 有一些与类型安全相关的问题
- mutation 繁琐，需要使用 `commit` 方法或 `MapMutation` 辅助函数

Pinia 的优点

- 完整的 TypeScript 支持：与在 Vuex 中添加 TypeScript 相比，添加 TypeScript 更容易
- 极其轻巧（体积约 1KB）
- store 的 action 被调度为常规的函数调用，而不是使用 `dispatch` 方法或 `MapAction` 辅助函数，这在 Vuex 中很常见
- 支持多个 Store
- 支持 Vue devtools、SSR 和 webpack 代码拆分

Pinia 的缺点

- ~~不支持时间旅行和编辑等调试功能~~（已支持）
![[Pasted image 20230310191049.png]] ![[Pasted image 20230310191054.png]]


