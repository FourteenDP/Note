---
title: Image 标签图片的白边
aliases:
tags:
date created: 2022-06-28 10:54:26
date updated: 2022-12-01 17:53:00
---

## 为什么image标签会有白边

image标签的默认样式是`display: inline-block;`，这个样式会导致图片有白边。

## 解决方法

### 1. 设置`display: block;`

```css
img {
  display: block;
}
```

### 2. 设置`vertical-align`

```css
img {
  vertical-align: top;
}
```

### 3. 设置`line-height: 0;`

```css
img {
  line-height: 0;
}
```
