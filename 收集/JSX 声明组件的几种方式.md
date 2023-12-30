---
标题: JSX 声明组件的几种方式
笔记ID: 1683439291159
aliases: 
tags:
  - Vue
  - Vue3
  - 计算机/前端开发/JavaScript
  - JSX
  - 组件
cssclasses: 
描述: 
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 00:38:00
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
