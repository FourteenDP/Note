---
title: 使用vite搭建vue3项目
---
## 使用Vite创建项目

使用Vite创建项目，项目并不像Vue CLI创建的项目那样，可以选择Router、Vuex等，而是直接创建一个空项目，然后再根据需要安装依赖。

## 安装pnpm (可选) 创建vite项目

> pnpm 是一个快速、高效的包管理器，它可以在一个项目中安装多个版本的相同包。它还可以在一个项目中安装多个不同版本的相同包。

```bash
npm install -g pnpm
pnpm create vite
```

## 选择Vue和TypeScript

```bash
? Project name: Demo
? Select a framework: vue
? Select a variant: vue-ts
```

## 安装依赖启动项目

```bash
cd Demo
pnpm install
pnpm dev
```

## 添加tsx支持

```bash
pnpm add -D @vitejs/plugin-vue-jsx
```

- 在`vite.config.ts`文件`plugins.plugins`中添加`vueJsx()`。

## 参考

- [Vite 中文文档](https://cn.vitejs.dev/guide/)
