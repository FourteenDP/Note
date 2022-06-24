---
aliases: BFC
tags:
  - BFC
date created: 2022-06-20 21:19
date updated: 2022-06-22 10:53:28
title: BFC
---

# BFC

## 作用

- 形成独立空间作用域不影像外部布局

## 触发

- float 不为 none
- position 不为 relative 和 static
- overflow 不为 auto、scroll 和 hidden
- display 值为 table-cell 或 inline-block

tips: 触发 BFC 可以解决大部分的脱离文档流、高度塌陷

## 解决高度塌陷

- 给父元素触发 BFC
- 添加固定高度
- 给最后一个标签添加 clear: both 清除浮动属性
