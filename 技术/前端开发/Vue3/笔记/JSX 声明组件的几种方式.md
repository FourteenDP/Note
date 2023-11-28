---
title: JSX 声明组件的几种方式
tags: null
date created: '2023-05-07 22:01:31'
date updated: '2023-11-25 22:42:37'
uid: 1683439291159
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
