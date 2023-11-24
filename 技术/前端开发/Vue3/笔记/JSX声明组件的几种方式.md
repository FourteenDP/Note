---
title: JSX声明组件的几种方式
tags: []
date created: 2023-05-07 14:01:31
date updated: 2023-11-25 03:01:28
---

# JSX 声明组件的几种方式

## `defineComponent` 声明组件

```tsx
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup(props) {
    return () => <div>Home</div>
  },
})
```

## 箭头函数声明组件

```tsx
export default () => <div>Home</div>
```
