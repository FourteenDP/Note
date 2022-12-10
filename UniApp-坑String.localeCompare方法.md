---
title: UniApp-坑String.localeCompare方法
aliases:
tags:
date created: 2022-12-10 16:09:21
date updated: 2022-12-10 16:12:14
---

# UniApp-坑String.localeCompare方法

## String.localeCompare 方法
  - 用于比较两个字符串，返回一个数字，表示比较结果。
  - 该方法的返回值如下：
    - 如果字符串在字母表中应该排在字符串参数之前，则该方法返回一个负数。
    - 如果字符串等于字符串参数，则该方法返回 0。
    - 如果字符串在字母表中应该排在字符串参数之后，则该方法返回一个正数。
  - 语法：`str.localeCompare(compareString[, locales[, options]])`
  - 参数：
    - compareString：必需。一个字符串，用来比较 str。
    - locales：可选。一个字符串或字符串数组，包含用来比较的语言环境。
    - options：可选。一个对象，包含以下属性：
      - usage：一个字符串，指定比较字符串的用途。可能的值有 "sort"、"search" 或 "match"。默认为 "sort"。
      - sensitivity：一个字符串，指定比较时大小写和重音的敏感性。可能的值有 "base"、"accent"、"case"、"variant"。默认为 "variant"。
      - ignorePunctuation：一个布尔值，指定是否忽略标点符号。默认为 false。
      - numeric：一个布尔值，指定是否按照数字顺序比较字符串。默认为 false。
      - caseFirst：一个字符串，指定是否区分大小写。可能的值有 "upper"、"lower" 或 "false"。默认为 "false"。
  - 返回值：一个数字，表示比较结果。

## 起因
  - 一维数组转通讯录列表
```js
['张三','李四','王五'] => {
  'A': ['张三'],
  'L': ['李四'],
  'W': ['王五']
}
```

## 问题
  - 问题一：在uniapp中使用String.localeCompare方法进行字符串比较时，发现在APP端和小程序的结果不一致。
  - 问题二：在uniapp中数组元素String.localeCompare方法是Undefined
### CODE
```js
// 1.在APP端和小程序的结果不一致
'张'.localeCompare('李') // MP => 1, APP => -2094
// 2.在uniapp中数组元素String.localeCompare方法是Undefined
```
