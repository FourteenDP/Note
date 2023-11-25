---
title: Vite 全局样式注入
tags:
  - Vite
  - Vue
  - CSS
date created: 2022-12-12 02:18:30
date updated: 2023-11-25 14:29:35
---

# Vite 全局样式注入

## Vite 全局样式注入

### 问题

在使用 Vite 开发 Vue 项目时，如果需要在全局注入样式，可以在 `index.html` 中引入样式文件，但是这样做的话，每次修改样式文件都需要重新启动项目，这样就很麻烦了。

### 解决方案

在 `vite.config.js` 中配置 `css.preprocessorOptions`，如下：

```js
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@import "./src/assets/styles/global.scss";`
    }
  }
}
```


