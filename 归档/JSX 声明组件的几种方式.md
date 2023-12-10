---
title: JSX 声明组件的几种方式
tags: 
  - Vue
  - Vue3
  - JavaScript
  - JSX
  - 组件
uid: 1683439291159
date created: 2023-05-07 14:01:31
date updated: 2023-11-28 11:27:42
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
