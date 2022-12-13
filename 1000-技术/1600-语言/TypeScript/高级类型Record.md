---
title: 什么是Record类型
aliases: []
tags: []
date created: 2022-12-13 14:23:47
date updated: 2022-12-13 14:24:23
---

## 什么是Record类型

Record类型是一个映射类型，它将所有属性的值设置为同一种类型。

```ts
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

## 例子

```ts
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const x: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
```

## 参考

[Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype)
