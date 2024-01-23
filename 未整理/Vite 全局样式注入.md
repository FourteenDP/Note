---
标题: Vite 全局样式注入
描述:
封面:
uid: "20230507140131194"
aliases: []
tags:
  - 计算机/前端/工程化
cssclasses:
创建时间: 2023-05-07 14:01:31
更新时间: 2024-01-22 16:57:40
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
