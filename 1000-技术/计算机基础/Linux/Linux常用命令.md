---
title: Linux 常用命令
aliases: 
tags: 
date created: 2022-08-09 22:13:35
date updated: 2022-08-10 00:46:00
---

# Linux 常用命令

- 查看已安装的软件包:`apt list --installed`
- 查看当前使用的 `shell` : `echo $SHELL`
- 查看系统中的所有 `shell`:`cat /etc/shells`
- 重命名文件夹和文件:`mv oldFileName newFileName`
- 新建文件夹: `mkdir folderName`
- 递归创建文件夹: `mkdir -p folderName/folderName1/folderName2`
- 更新已安装的软件包: `apt upgrade`
- 设置默认 shell: `chsh -s /bin/zsh` ^244e71
- 删除包并且删除包的配置文件:`apt remove --purge packageName`
