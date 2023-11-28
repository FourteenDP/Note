---
title: WSL 修改默认安装目录到其他盘
tags: []
uid: 1683439291257
date created: 2023-05-07 14:01:31
date updated: 2023-11-28 11:27:40
---

# WSL 修改默认安装目录到其他盘

## 导出

```shell
wsl --export Debian d:\wsl-debian.tar
```

## 注销

```shell
wsl --unregister Deabin
```

## 导入

```shell
wsl --import Debian d:\Debian d:\wsl-debian.tar --version 2
```
