---
title: any和unknown的区别
---

## any

`any` 表示任意类型，可以是任何类型，比如：

```ts
let a: any = 1;
a = "hello";
a = true;
```

## unknown

`unknown` 表示未知类型，它是一个安全类型，比如：

```ts
let u: unknown = 1;
u = "hello";
u = true;
```

## any和unknown的区别

- `any` 是任意类型，可以赋值给任意类型
- `unknown` 是未知类型，不能赋值给任意类型，只能赋值给`unknown`和`any`类型
- `unknown` 类型的值，不能直接访问它的属性和方法，需要先判断类型，再访问
