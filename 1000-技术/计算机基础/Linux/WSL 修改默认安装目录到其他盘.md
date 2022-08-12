---
title: WSL 修改默认安装目录到其他盘
aliases: 
tags: 
date created: 2022-08-12 10:37:10
date updated: 2022-08-12 10:38:56
---

# WSL 修改默认安装目录到其他盘

## 导出

```shell
wsl --export Debian d:wsl-debian.tar
```

## 注销

```shell
wsl --unregister Deabin
```

## 导入
```shell
wsl --import Debian d
```