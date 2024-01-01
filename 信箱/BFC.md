---
标题: BFC
描述: null
封面: null
uid: '20230507140131091'
aliases: []
tags:
  - BFC
  - HTML
  - CSS
cssclasses: null
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 03:07:35
---

# BFC

## 作用

- 形成独立空间作用域不影像外部布局

## 触发

- float 不为 none
- position 不为 relative 和 static
- overflow 不为 auto、scroll 和 hidden
- display 值为 table-cell 或 inline-block

## 解决高度塌陷

- 给父元素触发 BFC
- 添加固定高度
- 给最后一个标签添加 clear: both 清除浮动属性
