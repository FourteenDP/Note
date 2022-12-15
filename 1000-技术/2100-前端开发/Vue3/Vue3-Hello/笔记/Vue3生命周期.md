---
title: Vue3生命周期
---
## 什么是生命周期

- Vue 实例从创建到销毁的过程, 就是生命周期
- Vue3中没有了beforeCreate和created生命周期钩子

## Vue2和Vue3生命周期的对比

| Vue2 | Vue3 |
| --- | --- |
| beforeCreate | setup |
| created | setup |
| beforeMount | beforeMount |
| mounted | mounted |
| beforeUpdate | beforeUpdate |
| updated | updated |
| beforeDestroy | beforeUnmount |
| destroyed | unmounted |
| errorCaptured | errorCaptured |
