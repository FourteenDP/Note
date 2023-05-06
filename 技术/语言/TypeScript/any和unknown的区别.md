---
aliases: [Any和unknown的区别, any和unknown的区别]
tags: []
title: Any和unknown的区别
date created: 2022-12-13 15:02:18
date updated: 2023-01-03 15:44:32
---

# Any和unknown的区别

- any可以赋值给任何类型，unknown只能赋值给any和unknown
- unknown类型的值不能直接使用，需要先判断类型

```ts
// any
let a: any = 1;
a = '1';
a = true;

// unknown
let b: unknown = 1;
b = '1';
b = true;

// any可以赋值给任何类型
let c: string = a;
let d: number = a;
let e: boolean = a;

// unknown只能赋值给any和unknown
let f: string = b; // error
let g: number = b; // error
let h: boolean = b; // error

let i: any = b;
let j: unknown = b;



// 使用unknown需要先判断类型
if (typeof b === 'string') {
  b.trim();
}

if (typeof b === 'number') {
  b.toFixed(2);
}

if (typeof b === 'boolean') {
  b.valueOf();
}

```
