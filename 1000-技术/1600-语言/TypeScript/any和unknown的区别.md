---
aliases: []
tags: []
title: Any和unknown的区别
date created: 2022-12-13 15:02:18
date updated: 2022-12-15 09:45:18
---

## any和unknown的区别

- `any` 是任意类型，可以赋值给任意类型
- `unknown` 是未知类型，不能赋值给任意类型，只能赋值给`unknown`和`any`类型
- `unknown` 类型的值，不能直接访问它的属性和方法，需要先判断类型，再访问

## Any

```js
let a: any = 1;
a = '1';
a = true;
```

## Unknown

```js
let a: unknown = 1;
a = '1';
a = true;
```
