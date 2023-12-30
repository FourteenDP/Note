---
标题: interface 和 type 的区别
笔记ID: 1683439292210
aliases: []
tags:
  - 技术
  - 语言
  - TypeScript
  - interface
  - type
cssclasses: 
描述: 
创建时间: 2023-05-07 14:01:32
更新时间: 2023-12-31 01:09:56
---

# interface 和 type 的区别

## Interface 和 type 的区别

### 不同点

- 扩展语法：interface 使用 extends，type 使用 '&'
- 同名合并：interface 支持，type 不支持。
- 描述类型：对象、函数两者都适用，但是 type 可以用于基础类型、联合类型、元祖。
- 计算属性：type 支持计算属性，生成映射类型,interface 不支持。

### 相同点

- 两者都可以用来描述对象或函数的类型
- 两者都可以实现继承

总的来说，公共的用 interface 实现，不能用 interface 实现的再用 type 实现。主要是一个项目最好保持一致。

### Type 支持计算属性，生成映射类型,interface 不支持

```ts
// type 支持计算属性，生成映射类型
type Keys = 'a' | 'b';

type Obj = {
  [p in Keys]: any;
};

const obj: Obj = {
  a: 1,
  b: 2,
};

// interface 不支持
interface Obj2 {
  [p in Keys]: any;
}

const obj2: Obj2 = {
  a: 1,
  b: 2,
};
```
