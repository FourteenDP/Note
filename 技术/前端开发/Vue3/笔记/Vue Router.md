---
aliases:
  - Vue Router
  - setup中使用router
tags: []
title: Vue Router
date created: 2022-12-16 09:42:48
date updated: 2023-11-22 10:40:49
---

# Vue Router

## Setup中使用router

```js
import { useRouter } from 'vue-router'
// cosnt router = useRouter() // 无法使用
export default {
  setup() {
    const router = useRouter()
    return {
      router
    }
  }
}
```

## 路由元信息类型提示

```js
router.d.ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    showMenu?: boolean
  }
}
```
