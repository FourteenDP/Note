---
标题: WSL 修改默认安装目录到其他盘
笔记ID: 1683439291257
描述: null
封面: null
aliases: []
tags:
  - WSL
  - 默认安装目录
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2023-12-31T01:17:19.000Z
uid: '20230507140131257'
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
