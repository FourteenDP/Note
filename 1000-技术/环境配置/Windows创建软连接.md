---
aliases: Windows创建软连接
tags:
  - Windows创建软连接
date created: 2022-06-20 19:58
date updated: 2022-07-14 00:39:33
title: Windows 创建软连接
---

# Windows 创建软连接

## 语法

**MKLINK \[/D] | \[/H] | \[/J] Link Target**

- /D 创建目录符号链接。默认为文件
符号链接。
- /H 创建硬链接而非符号链接。
- /J 创建目录联接。

Link 指定新的符号链接名称。

Target 指定新链接引用的路径 (相对或绝对)。

## 实例

```shell
mklink /J "C:\Users\用户名\AppData\Local\Google\Chrome\User Data\Default\Cache" "F:\chrome\cache"
```

## 注意

只有 cmd 窗口下才可用，在 powershell 下不行；
目标路径文件/文件夹必须不存在才可创建
