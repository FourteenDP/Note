---
标题: Vue Router
笔记ID: 1683439291162
aliases: []
tags:
  - Vue
  - Vue3
  - 计算机/前端开发/JavaScript
  - Vue Router
cssclasses: 
描述: 
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 01:09:57
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
