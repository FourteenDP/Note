---
title: REM 兼容适配解决方案
aliases:
  - REM 兼容适配解决方案
  - 使用rem做响应式布局
tags: []
date created: 2022-12-12 10:52:57
date updated: 2023-11-22 10:40:49
---

# REM 兼容适配解决方案

## 使用rem做响应式布局

原理：rem是相对于根元素html的font-size来计算的，所以只要根元素的font-size发生变化，rem的值也会发生变化，从而达到响应式布局的目的。

## 实现750px设计稿的响应式布局

动态root字体大小公式 : 1rem = clientWidth / 750 * 100

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

## 参考

- [[CSS-单位]]
