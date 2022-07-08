---
title: 通过 Vue-cli 创建 UniApp-Vue2 项目
aliases: 
tags: 
  - 前端 
  - Vue2
  - UniApp
  - 项目构建
date created: 2022-07-08 13:32:41
date updated: 2022-07-08 15:06:29
---

# 通过 Vue-cli 创建 UniApp-Vue2 项目

## 安装 Vue-cli

```` shell
npm install -g @vue/cli@4
````

## 创建 UniApp

```shell
vue create -p dcloudio/uni-preset-vue uniapp-vue2-template
```

- 选择模板，看个人需求选择这里选择 **默认模板**
- 这里应为网络问题下载可能比较慢，耐性等待

![[Pasted image 20220708135633.png]]

## 更新

- 将 Uniapp 更新到最新

```sehll
npx @dcloudio/uvm
```

- 更新到指定版本

```shell
npx @dcloudio/uvm 3.2.12.20211029
```

## 运行

```shell
npm run serve
```

## 完善 `.gitignore`

![[gitignore#COMMON]]

## 目录结构

```shell
┌─uniCloud              云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─hybrid                App端存放本地html文件的目录，详见
├─platforms             存放各平台专用页面的目录，详见
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─uni_modules           存放[uni_module](/uni_modules)。
├─wxcomponents          存放小程序组件的目录，详见
├─nativeplugins         App原生插件 详见
├─unpackage             非工程代码，一般存放运行或发行的编译结果
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
├─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见
└─uni.scss              这里是uni-app内置的常用样式变量 
```
