---
title: 为什么image标签会有白边
aliases: [为什么image标签会有白边]
tags: []
date created: 2022-06-28 10:54:26
date updated: 2022-12-29 16:12:46
---

# image标签图片的白边

## 为什么image标签会有白边

image标签的默认样式是`display: inline-block;`，这个样式会导致图片有白边。

## 解决方法

### 1. 设置`display: block;`

```css
img {
  display: block;
}
```

### 2. 设置`vertical-align: top;`

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

### 4. 设置`font-size: 0;`

```css
img {
  font-size: 0;
}
```
