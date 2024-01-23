---
标题: image 标签图片的白边
描述:
封面:
uid: 20,230,507,140,131,110
aliases:
tags:
  - 计算机/前端/HTML
  - 计算机/前端/CSS
cssclasses:
创建时间: 2023-05-07 14:01:31
更新时间: 2024-01-22 16:57:43
---

# image 标签图片的白边

## 为什么 image 标签会有白边

image 标签的默认样式是 `display: inline-block;`，这个样式会导致图片有白边。

## 解决方法

### 1. 设置 `display: block;`

```css
img {
  display: block;
}
```

### 2. 设置 `vertical-align: top;`

```css
img {
  vertical-align: top;
}
```

### 3. 设置 `line-height: 0;`

```css
img {
  line-height: 0;
}
```

### 4. 设置 `font-size: 0;`

```css
img {
  font-size: 0;
}
```
