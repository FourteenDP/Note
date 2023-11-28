---
title: Vue Router
tags: []
date created: '2022-12-16 17:42:48'
date updated: '2023-11-25 22:42:38'
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
