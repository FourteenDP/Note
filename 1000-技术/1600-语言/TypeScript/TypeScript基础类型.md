---
aliases:
tags:
title: TypeScript 基础类型有哪些
date created: 2022-12-13 14:33:29
date updated: 2022-12-13 14:49:30
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

```ts
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
```

## 枚举

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

## 任意类型

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

## 空类型

```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```

## Null 和 Undefined

```ts
let u: undefined = undefined;
let n: null = null;
```

## 永不存在的值的类型

```ts
function error(message: string): never {
  throw new Error(message);
}
```

## 非原始类型

```ts
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```

## 未知类型

```ts
let notSure: unknown = 4;
notSure.ifItExists(); // Error: Object is of type 'unknown'.
notSure.toFixed(); // Error: Object is of type 'unknown'.

let value: unknown;
if (typeof value === "string") {
  value; // string
} else {
  value; // unknown
}
```
