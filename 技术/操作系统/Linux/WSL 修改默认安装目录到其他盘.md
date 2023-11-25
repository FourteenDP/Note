---
title: WSL 修改默认安装目录到其他盘
tags: []
date created: 2022-08-12 10:37:10
date updated: 2023-11-25 13:50:52
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
