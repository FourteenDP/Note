---
标题: 通过 CLI 构建 UniApp 项目
笔记ID: 1684032009204
描述: 
封面: 
aliases: []
tags:
  - CLI
  - UniApp
  - 项目构建
  - Vue2
  - Vue3
  - npm
cssclasses: 
创建时间: 2023-05-14 10:40:09
更新时间: 2023-12-31 01:17:23
---

# 通过 CLI 构建 UniApp 项目

## Vue 2

环境安装

```
npm install -g @vue/cli
```

创建应用

```
vue create -p dcloudio/uni-preset-vue my-project
```

![[Pasted image 20230508183251.png]]

## Vue 3

创建以 javascript 开发的工程（如命令行创建失败，请直接访问 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip) 下载模板）

```
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
```

创建以 typescript 开发的工程（如命令行创建失败，请直接访问 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip) 下载模板）

```
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```

**注意**: Vue3/Vite 版要求 node 版本 `^14.18.0 || >=16.0.0`

## 更新

> [!warning]
> 不要自己手动更新 `uni-app` 相关依赖,,依赖有最高版本限制,详细请查看官网文档

更新到最新正式版

```
npx @dcloudio/uvm
```

更新到正式版指定版本

```
npx @dcloudio/uvm 3.2.0
```

## 参考

- [uni-app官网](https://uniapp.dcloud.net.cn/quickstart-cli.html#install-vue-cli)
