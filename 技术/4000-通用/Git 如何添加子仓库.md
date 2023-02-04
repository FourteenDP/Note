---
aliases: [Git 如何添加子仓库, git 如何添加子仓库, 添加子仓库]
tags: []
title: Git 如何添加子仓库
date created: 2022-12-22 15:24:12
date updated: 2023-02-04 21:05:09
---

# Git 如何添加子仓库

## 简介

目前 Git 添加子仓库的方式有两种

## 1. 添加子仓库

```bash
git submodule add <url> <path>
```

## 2. 更新子仓库

```bash
git submodule update --init --recursive
```

## 3. 删除子仓库

```bash
git submodule deinit <path>
git rm <path>

# 删除 .gitmodules 文件中的子仓库信息
git config -f .gitmodules --remove-section submodule.<path>
```

## 最新版本推荐使用Git Subtree

## 1. 添加子仓库

```bash
git subtree add --prefix=<path> <url> <branch> --squash
```

## 2. 更新子仓库

```bash
git subtree pull --prefix=<path> <url> <branch> --squash
```

## 3. 删除子仓库

```bash
git rm -r <path>
```

## 关联

- [Git子库：submodule与subtree](https://juejin.cn/post/7077775905888124941)
- [用 Git Subtree 在多个 Git 项目间双向同步子项目 - 掘金](https://juejin.cn/post/6844903762176262157)
- [Fetching Title#w953](https://www.jianshu.com/p/d42d330bfead)
