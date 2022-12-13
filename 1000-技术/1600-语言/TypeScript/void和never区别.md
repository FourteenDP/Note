---
title: void和never区别
---

## void和never区别

### void

`void` 表示没有任何类型，一般用于函数没有返回值的情况。

```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```

### never

`never` 表示永不存在的值的类型，一般用于函数抛出异常或无法执行到终止点（例如无限循环）的情况。

```ts
function error(message: string): never {
  throw new Error(message);
}
```

### 区别

`void` 可以赋值给任何类型，`never` 不能赋值给任何类型。

```ts
let v: void = undefined || null;
let n: never = undefined; // Error
```
