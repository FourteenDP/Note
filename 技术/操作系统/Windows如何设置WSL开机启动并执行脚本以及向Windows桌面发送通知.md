---
title: Windows如何设置WSL开机启动并执行脚本以及向Windows桌面发送通知
aliases: [Windows如何设置WSL开机启动并执行脚本以及向Windows桌面发送通知]
tags: []
date created: 2023-05-20 21:32:20
date updated: 2023-05-20 21:38:12
---

# Windows如何设置WSL开机启动并执行脚本以及向Windows桌面发送通知

## 首先设置 WSL 在 Windows 开机时启动

- 打开 Windows 开机启动执行目录 `Win` + `R` 输入 `shell:startup`,新建一个 `vbs` 脚本

![[../../-附件-/Pasted image 20230520213714.png]]

- 下面是脚本代码
```vbs

Set ws = CreateObject("Wscript.Shell")

ws.Run "powershell.exe -Command ""wsl -d Debian -u admin""", vbhide
```
