---
aliases: [git 如何添加子仓库, 添加子仓库]
tags: []
title: git 如何添加子仓库
date created: 2022-12-22 15:24:12
date updated: 2023-01-05 15:56:35
---

# Git 如何添加子仓库

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
