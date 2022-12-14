---
title: ref和reactive
---

## ref和reactive作用

ref和reactive都是用来创建响应式对象的，但是有一些区别

- ref创建的是一个响应式对象，而reactive创建的是一个响应式对象的代理
- ref创建的对象是不可变的，而reactive创建的对象是可变的
- ref创建的对象是浅层响应式的，而reactive创建的对象是深层响应式的

## ref

ref是一个函数，用来创建一个响应式对象，这个对象是不可变的，也就是说这个对象的属性是不可变的，但是这个对象的属性的值是可以改变的
**注意**:要加.value

```js
import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
```

## reactive

reactive是一个函数，用来创建一个响应式对象，这个对象是可变的，也就是说这个对象的属性是可变的，但是这个对象的属性的值是可以改变的

**注意**: 不能解构，否则会丢失响应性

```js
import { reactive } from 'vue'

const obj = reactive({ count: 0 })
console.log(obj.count) // 0
obj.count++
console.log(obj.count) // 1

obj.name = 'xiaoming'
console.log(obj.name) // xiaoming
```
