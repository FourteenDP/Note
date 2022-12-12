---
title: 什么是 REM
aliases: []
tags: []
date created: 2022-12-12 10:52:57
date updated: 2022-12-12 11:46:45
---

## 使用rem做响应式布局

原理：rem是相对于根元素html的font-size来计算的，所以只要根元素的font-size发生变化，rem的值也会发生变化，从而达到响应式布局的目的。

## 实现一个视口宽度为 750px 的设计稿 750 / 100 = 7.5px

```html
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <style>
      html {
        font-size: 7.5px;
      }
      .box {
        width: 10rem;
        height: 10rem;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
```

## 相关

- [[CSS-单位]]
