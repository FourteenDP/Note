---
title: 什么是 REM
aliases: []
tags: []
date created: 2022-12-12 10:52:57
date updated: 2022-12-12 11:46:45
---

## 使用rem做响应式布局

原理：rem是相对于根元素html的font-size来计算的，所以只要根元素的font-size发生变化，rem的值也会发生变化，从而达到响应式布局的目的。

## 实现一个视口宽度为 960px,设计稿宽度为 750px 的响应式布局

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>rem</title>
  <style>
    body {
      margin: auto;
    }
    .box {
      width: 7.5rem;
      height: 7.5rem;
      background-color: red;
    }

  </style>
</head>

<body>
  <div class="box"></div>
  <script>
    (function (doc, win) {
      var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window)
  </script>
</body>

</html>
```

## 相关

- [[CSS-单位]]
