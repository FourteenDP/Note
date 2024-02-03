---
标题: WSL 系统代理
描述: null
封面: null
uid: 20240123112807156
aliases: []
tags:
  - 计算机/Linux/WSL
  - 计算机/Linux/系统代理
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2024-01-22T16:57:39.000Z
---

# WSL 系统代理

## WSL1

 WSL1 的 Linux 子系统和 Windows 共享了网络端口

```sh

export ALL_PROXY="http://127.0.0.1:10808"

```
