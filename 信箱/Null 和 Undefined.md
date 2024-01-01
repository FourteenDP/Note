---
标题: Null 和 Undefined
描述: null
封面: null
uid: '20230507140132107'
aliases: []
tags:
  - 技术
  - 语言
  - 计算机/前端开发/JavaScript
  - "Null"
  - Undefined
cssclasses: null
创建时间: 2023-05-07 14:01:32
更新时间: 2023-12-31 03:07:34
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

JavaScript 诞生之初，最初像 Java 一样，只设置了 null 作为表示 " 无 " 的值。根据 C 语言的传统，null 被设计成可以自动转为 0

但是，JavaScript 的设计者 Brendan Eich，觉得这样做还不够，有两个原因。首先，null 像在 Java 里一样，被当成一个对象。但是，JavaScript 的值分成原始类型和对象类型两大类，Brendan Eich 觉得表示 " 无 " 的值最好不是对象。其次，JavaScript 的最初版本没有包括错误处理机制，发生数据类型不匹配时，往往是自动转换类型或者默默地失败。Brendan Eich 觉得，如果 null 自动转为 0，很不容易发现错误

因此，Brendan Eich 又设计了一个 undefined。他是这样区分的：null 是一个表示 " 无 " 的对象，转为数值时为 0；undefined 是一个表示 " 无 " 的原始值，转为数值时为 NaN
