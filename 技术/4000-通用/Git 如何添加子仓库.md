---
aliases: [Git 如何添加子仓库, git 如何添加子仓库, 添加子仓库]
tags: []
title: Git 如何添加子仓库
date created: 2022-12-22 15:24:12
date updated: 2023-02-05 00:22:57
---

# Git 如何添加子仓库

## 简介

目前 Git 添加子仓库的方式有两种

- [Git Submodule](https://link.juejin.cn?target=http%3A%2F%2Fgit-scm.com%2Fdocs%2Fgit-submodule "http://git-scm.com/docs/git-submodule")：这是Git官方以前的推荐方案
- [Git Subtree](https://link.juejin.cn?target=https%3A%2F%2Fmedium.com%2F%40porteneuve%2Fmastering-git-Subtrees-943d29a798ec "https://medium.com/@porteneuve/mastering-git-Subtrees-943d29a798ec")：从 [Git 1.5.2](https://link.juejin.cn?target=http%3A%2F%2Flwn.net%2FArticles%2F235109%2F "http://lwn.net/Articles/235109/") 开始，Git 新增并推荐使用这个功能来管理子项目

![[Pasted image 20230204210622.png]]

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

## 新版本推荐使用Git Subtree

### 建立关联

**第一步**：添加子库远程连接到主库

```shell
git 
```

## 关联

- [Git子库：submodule与subtree](https://juejin.cn/post/7077775905888124941)
- [用 Git Subtree 在多个 Git 项目间双向同步子项目 - 掘金](https://juejin.cn/post/6844903762176262157)
- [git subtree教程 - 简书](https://www.jianshu.com/p/d42d330bfead)
