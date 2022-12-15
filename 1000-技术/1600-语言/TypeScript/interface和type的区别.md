---
aliases: []
tags: []
title: Interface和type的区别
date created: 2022-12-12 15:48:54
date updated: 2022-12-13 14:23:06
---

## Interface和type的区别

### 不同点

- 扩展语法： interface使用extends，type使用‘&’
- 同名合并：interface 支持，type 不支持。
- 描述类型：对象、函数两者都适用，但是 type 可以用于基础类型、联合类型、元祖。
- 计算属性：type 支持计算属性，生成映射类型,interface 不支持。

### 相同点

- 两者都可以用来描述对象或函数的类型
- 两者都可以实现继承

总的来说，公共的用 interface 实现，不能用 interface 实现的再用 type 实现。主要是一个项目最好保持一致。

### type计算属性

```ts
type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = {
  readonly [P in keyof Person]: Person[P];
};

type PartialPerson = {
  [P in keyof Person]?: Person[P];
};

type PickPerson = {
  [P in 'name' | 'age']: Person[P];
};
```
