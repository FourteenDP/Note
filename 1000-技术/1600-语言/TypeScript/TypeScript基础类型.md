---
title: TypeScript基础类型
---

## TypeScript 基础类型有哪些

- `boolean` 布尔值
- `number` 数字
- `string` 字符串
- `array` 数组
- `tuple` 元组
- `enum` 枚举
- `any` 任意类型
- `void` 空类型
- `null` 和 `undefined`
- `never` 永不存在的值的类型
- `object` 非原始类型
- `unknown` 未知类型

## 布尔值

```ts
let isDone: boolean = false;
```

## 数字

```ts
let decLiteral: number = 6; // 十进制
let hexLiteral: number = 0xf00d; // 十六进制
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
```

## 字符串

```ts
let name: string = "bob";
name = "smith";
```

## 数组

```ts
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

## 元组

什么是元组？元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。比如，你可以定义一对值分别为 string 和 number 类型的元组。

```ts
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
```

## 枚举

```ts
