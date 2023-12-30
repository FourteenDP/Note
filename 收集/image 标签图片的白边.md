---
标题: image 标签图片的白边
笔记ID: 1683439291110
描述: 
封面: 
aliases: []
tags:
  - HTML
  - CSS
  - Image
  - 图片
  - 标签
cssclasses: 
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 01:17:17
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
