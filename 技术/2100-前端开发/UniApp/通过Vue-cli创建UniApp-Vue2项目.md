---
title: 通过Vue-cli创建UniApp-Vue2项目
aliases: [通过Vue-cli创建UniApp-Vue2项目, 安装 Vue-cli]
tags: [前端, Vue2, UniApp, 项目构建]
date created: 2022-07-08 13:32:41
date updated: 2023-01-30 12:30:21
---

# 通过Vue-cli创建UniApp-Vue2项目

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

![[gitignore#常用]]
