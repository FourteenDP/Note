---
aliases: null
tags:
  - CSS
date created: 2022-06-20 19:58:18
date modified: 2022-04-19T20:21:03.000Z
date updated: 2022-12-01 17:55:25
title: CSS 实现文本超出显示省略号
---


## CSS

### 单行

```css
overflow: hidden; //超出的文本隐藏
text-overflow: ellipsis; //溢出用省略号显示
white-space: nowrap; //溢出不换行
```

### 多行

```css
display: -webkit-box;
overflow: hidden;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

## 无固定宽度省略号的显示

- 在需要文本超出显示省略号盒子上添加 `width: fit-content` 属性
- 在 `flex` 盒子等较复杂的布局下，可以尝试在需超出显示省略号的元素盒子上添加 `min-width:0` 属性，并且在 dom 结构树当前最外的盒子添加 `width:100%` 属性
