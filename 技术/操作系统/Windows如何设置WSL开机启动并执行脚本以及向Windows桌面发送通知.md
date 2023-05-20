---
title: Windows如何设置WSL开机启动并执行脚本以及向Windows桌面发送通知
aliases: [Windows如何设置WSL开机启动并执行脚本以及向Windows桌面发送通知]
tags: []
date created: 2023-05-20 21:32:20
date updated: 2023-05-20 21:53:55
---

# Windows如何设置WSL开机启动并执行脚本以及向Windows桌面发送通知

## 首先设置 WSL 在 Windows 开机时启动

- 打开 Windows 开机启动执行目录 `Win` + `R` 输入 `shell:startup`,新建一个 `vbs` 脚本

![[../../-附件-/Pasted image 20230520213714.png]]

## 编写 WSL 启动脚本

- 下面是脚本代码
```vbs
' 获取执行对象
Set ws = CreateObject("Wscript.Shell")
' 执行命令 
' 直接使用执行对象执行命令有权限限制，所以这里使用powershell执行wsl命令
' -d 指定wsl发行版本 -u 指定登录执行的账户, 账户后面可以直接添加需要执行的命令
' 如：wsl -d Debian -u root /etc/init.d/wsl [start|stop|status]
' 应为我这里的是admin, 可以直接把需要开机启动的脚本放在.bashrc或者.zshrc等根据自己的使用的终端设置终端的配置文件会在登录后执行
' 把执行脚本放在终端配置文件有问题就是每次登录的时候这里都会执行一次，可以自行做服务是否已启动判断
ws.Run "powershell.exe -Command ""wsl -d Debian -u admin""", vbhide
```

这个时候就可以在 Windows 开机的时候启动 WSL 并执行需要的服务脚本啦

## 