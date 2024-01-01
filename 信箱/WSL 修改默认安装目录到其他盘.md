---
标题: WSL 修改默认安装目录到其他盘
描述: null
封面: null
uid: '20230507140131257'
aliases: []
tags:
  - WSL
  - 默认安装目录
cssclasses: null
创建时间: 2023-05-07 14:01:31
更新时间: 2023-12-31 03:07:34
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
