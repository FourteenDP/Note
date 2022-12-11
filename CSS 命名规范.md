---
title: CSS 命名规范有哪些
aliases: []
tags: []
date created: 2022-12-12 02:32:02
date updated: 2022-12-12 02:37:37
---

## CSS 命名规范有哪些

### BEM

BEM 是 Block Element Modifier 的缩写

- Block: 一个独立的组件
- Element: 一个组件的一部分
- Modifier: 一个组件的状态

```css
.block {}
.block__element {}
.block--modifier {}
```

### OOCSS

OOCSS 是 Object Oriented CSS 的缩写

```css
.o-layout {}
.o-layout__item {}
.is-animating {}
.has-border {}
```

### SMACSS

SMACSS 是 Scalable and Modular Architecture for CSS 的缩写

```css
.l-layout {}
.l-layout__item {}
.is-animating {}
.has-border {}
```

### SUIT

SUIT 是 Scalable and Modular Architecture for CSS 的缩写

```css
.suit-layout {}
.suit-layout__item {}
.suit-layout--animating {}
.suit-layout--border {}
```

### Atomic CSS

Atomic CSS 是原子 CSS 的缩写

```css
.u-margin {}
.u-margin--small {}
.u-margin--large {}
.u-padding {}
.u-padding--small {}
.u-padding--large {}
```
