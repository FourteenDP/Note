---
aliases:
  - Win10-VSCode - 添加至右键菜单
tags: 
title: Win10-VSCode - 添加至右键菜单
date created: 2023-05-19 23:14:34
date updated: 2023-11-22 10:40:06
---

# Win10-VSCode - 添加至右键菜单

**原文：**[Win10-VSCode - 添加至右键菜单](https://juejin.cn/post/7028823525125259272)

# Win10-VSCode - 添加至右键菜单

最近在使用 `VSCode` 时发现电脑上打开不方便，比如文件夹无法右键用 `VSCode` 打开，非常不方便，于是配置一下将 `VSCode` 添加至右键菜单【空白处右键，文件夹右键，文件右键】

## 教程

1. 新建一个后缀是 `.reg` 的文件，例如: `vs.reg`
    
2. 用记事本或 `Notepad++` 打开上述 `.reg` 文件，按照自己的需要将下面的代码复制粘贴到 `.reg` 文件中，然后根据自己 `VSCode` 的安装目录修改路径，保存后双击运行即可

## 配置

下面为 3 种配置，可根据需要选择

### （一）空白处右键菜单里显示 “Open With Code”

```
Windows Registry Editor Version 5.00
 
[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
@="Open with Code"
"Icon"="C:\\Program Files\\Microsoft VS Code\\Code.exe"
 
[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
@="\"C:\\Program Files\\Microsoft VS Code\\Code.exe\" \"%V\""


```

### （二）选中文件右键菜单里显示 “Open With Code”

```
Windows Registry Editor Version 5.00
 
[HKEY_CLASSES_ROOT\*\shell\VSCode]
@="Open with Code"
"Icon"="C:\\Program Files\\Microsoft VS Code\\Code.exe"
 
[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
@="\"C:\\Program Files\\Microsoft VS Code\\Code.exe\" \"%1\""


```

### （三）选中文件夹右键菜单里显示 “Open With Code”

```
Windows Registry Editor Version 5.00
 
[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
@="Open with Code"
"Icon"="C:\\Program Files\\Microsoft VS Code\\Code.exe"
 
[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
@="\"C:\\Program Files\\Microsoft VS Code\\Code.exe\" \"%V\""


```
