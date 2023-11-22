---
aliases:
  - JSX声明组件的几种方式
tags: []
title: JSX声明组件的几种方式
date created: 2023-05-07 14:01:31
date updated: 2023-11-22 10:40:49
---

# JSX声明组件的几种方式

## `defineComponent`声明组件

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
