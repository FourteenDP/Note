---
title: void和never区别
aliases:
  - Void和never区别
tags: []
date created: 2022-12-13 14:45:27
date updated: 2023-11-25 03:01:21
---

# Void 和 never 区别

## Void 和 never 区别

- void 表示没有任何类型，一般用于函数没有返回值的情况
  - viod 只能赋值为 undefined ~~和 null~~
  - null 在严格模式下是不能赋值给 void 的
  - null 转换成 `0`
- never 表示永远不会有返回值的类型，一般用于函数抛出异常或者无限循环
  - never 是真的永远不会有返回值，所以不能赋值给其他类型

## CODE

```ts
let unusable: void = undefined;
// let unusable: void = null; // Error
// let unusable: void = 0; // Error

let ner: never
// ner = 0; // Error
// ner = undefined; // Error
// ner = null; // Error

function add(a: number, b: number): void {
  if(!a || !b) return undefined;
}

function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```
