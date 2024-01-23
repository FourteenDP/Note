---
标题: REM 兼容适配解决方案
描述:
封面:
uid: "20230507140131108"
aliases: []
tags:
  - 计算机/前端/CSS
  - 计算机/前端/HTML
  - REM
  - 兼容适配
  - 计算机/前端/解决方案
cssclasses:
创建时间: 2023-05-07 14:01:31
更新时间: 2024-01-22 16:57:42
---

# REM 兼容适配解决方案

## 使用 rem 做响应式布局

原理：rem 是相对于根元素 html 的 font-size 来计算的，所以只要根元素的 font-size 发生变化，rem 的值也会发生变化，从而达到响应式布局的目的。

## 实现 750px 设计稿的响应式布局

动态 root 字体大小公式: 1rem = clientWidth / 750 * 100

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

- [[CSS- 单位]]
