---
title: Vue Router
---

## setup中使用router

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

## mete
