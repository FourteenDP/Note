---
title: Vue3 JSX声明组件的几种方式
---

## 1. 函数式组件

```tsx
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(props) {
    return () => <div>{props.msg}</div>
  },
})
```
