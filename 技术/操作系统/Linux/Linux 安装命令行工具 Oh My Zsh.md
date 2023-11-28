---
title: Linux 安装命令行工具 Oh My Zsh
tags: []
uid: 1683439291247
date created: 2023-05-07 14:01:31
date updated: 2023-11-28 11:27:40
---

# Linux 安装命令行工具 Oh My Zsh

## 简介

- **Zsh** 是一款强大的虚拟终端，既是一个系统的虚拟终端，也可以作为一个脚本语言的交互解析器
- **Oh My Zsh** 是基于 **Zsh** 命令行的一个扩展工具集，提供了丰富的扩展功能

## Zsh

### 安装

```shell
sudo apt install zsh
```

## 设置为默认 Shell

![[Linux 常用命令#^244e71]]

## Oh My Zsh

### 安装

```shel
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
