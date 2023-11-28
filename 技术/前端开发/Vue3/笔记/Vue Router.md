---
title: Vue Router
tags: []
date created: 2023-05-07 14:01:31
date updated: 2023-11-28 10:51:05
uid: 1683439291162
---

# Vue Router

## Setup 中使用 router

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
