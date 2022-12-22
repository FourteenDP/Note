---
title: 工具类型Record
aliases: []
tags: []
date created: 2022-12-13 14:23:47
date updated: 2022-12-13 14:24:23
---

## 工具类型Record

作用：将一个类型的所有属性转换为另一个类型

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
