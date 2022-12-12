---
aliases:
tags:
title: 新特性
date created: 2022-12-12 14:41:36
date updated: 2022-12-12 14:55:52
---

## 新特性

- 更好的 TypeScript 支持

### Composition API(组合式 API)

- 相比于 Options API，Composition API 更加灵活，更加符合函数式编程的思想。万物皆是函数，函数是一等公民。

```html
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 更改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`计数器初始值为 ${count.value}。`)
})
</script>

<template>
  <button @click="increment">点击了：{{ count }} 次</button>
</template>

```

![[Pasted image 20221212145551.png]]
