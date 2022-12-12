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

### 2. 设置`vertical-align: top;`

```css
img {
  vertical-align: top;
}
```

### 3. 设置`vertical-align: middle;`

```css
img {
  vertical-align: middle;
}
```

### 4. 设置`vertical-align: bottom;`

```css
img {
  vertical-align: bottom;
}
```

### 5. 设置`vertical-align: baseline;`

```css
img {
  vertical-align: baseline;
}
```

### 6. 设置`vertical-align: text-top;`

```css
img {
  vertical-align: text-top;
}
```

### 7. 设置`vertical-align: text-bottom;`

```css
img {
  vertical-align: text-bottom;
}
```

### 8. 设置`vertical-align: sub;`

```css
img {
  vertical-align: sub;
}
```

### 9. 设置`vertical-align: super;`

```css
img {
  vertical-align: super;
}
```

### 10. 设置`vertical-align: top;`和`line-height: 0;`

```css
img {
  vertical-align: top;
  line-height: 0;
}
```
