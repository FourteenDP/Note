---
aliases:
  - Null 和 Undefined
  - Null和 Undefined
  - Null和Undefined
  - Null和Undefined的区别
tags: []
title: Null 和 Undefined
date created: 2022-12-13 14:54:20
date updated: 2023-11-22 10:40:47
---

# Null 和 Undefined

## Null 和 Undefined 的区别

### Null

`null` 表示一个空值，它是一个特殊的值，表示一个空对象指针。

```ts
let n: null = null;
```

### Undefined

`undefined` 表示一个未定义的值，它是一个特殊的值，表示一个未初始化的变量。

```ts
let u: undefined = undefined;
```

## Null 和 Undefined 的关系

JavaScript诞生之初，最初像Java一样，只设置了null作为表示”无”的值。根据C语言的传统，null被设计成可以自动转为0

但是，JavaScript的设计者Brendan Eich，觉得这样做还不够，有两个原因。首先，null像在Java里一样，被当成一个对象。但是，JavaScript的值分成原始类型和对象类型两大类，Brendan Eich觉得表示”无”的值最好不是对象。其次，JavaScript的最初版本没有包括错误处理机制，发生数据类型不匹配时，往往是自动转换类型或者默默地失败。Brendan Eich觉得，如果null自动转为0，很不容易发现错误

因此，Brendan Eich又设计了一个undefined。他是这样区分的：null是一个表示”无”的对象，转为数值时为0；undefined是一个表示”无”的原始值，转为数值时为NaN
