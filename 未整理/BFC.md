---
标题: BFC
描述:
封面:
uid: "20230507140131091"
aliases: []
tags:
  - BFC
  - 计算机/前端/HTML
  - 计算机/前端/CSS
cssclasses:
创建时间: 2023-05-07 14:01:31
更新时间: 2024-01-22 16:57:44
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
