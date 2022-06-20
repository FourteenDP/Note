---
aliases: Windows创建软连接
tags:
  - Windows创建软连接
date created: 2022-06-20 19:58
date updated: 2022-06-20 21:30
---

# Windows创建软连接

## 语法

MKLINK [/D] | [/H] | [/J] Link Target
/D 创建目录符号链接。默认为文件
符号链接。
/H 创建硬链接而非符号链接。
/J 创建目录联接。
Link 指定新的符号链接名称。
Target 指定新链接引用的路径 (相对或绝对)。

## 实例

```shell
mklink /j D:\Doc\tracking\VisualTracking_ECO\data D:\Doc\tracking\KCF\C++\data\matlab1
D:\Doc\tracking\VisualTracking_ECO\data-----目标路径
D:\Doc\tracking\KCF\C++\data\matlab1-----源路径
```

## 注意点

亲测只有 cmd 窗口下才可用，在 powershell 下不行；
目标路径文件/文件夹必须不存在才可创建
