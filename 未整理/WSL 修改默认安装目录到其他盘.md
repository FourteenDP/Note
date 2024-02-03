---
标题: WSL 修改默认安装目录到其他盘
描述: null
封面: null
uid: 20240123112807156
aliases: []
tags:
  - 计算机/Linux/WSL
  - 默认安装目录
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2024-01-22T16:57:39.000Z
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
