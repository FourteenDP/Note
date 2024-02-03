---
标题: BFC
描述: null
封面: null
uid: 20240123112806890
aliases: []
tags:
  - BFC
  - 计算机/前端/HTML
  - 计算机/前端/CSS
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2024-01-22T16:57:44.000Z
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
