---
title: WSL SSH 远程连接
aliases: 
tags: 
date created: 2022-08-08 22:00:28
date updated: 2022-08-08 22:05:36
---

# WSL SSH 远程连接
## SSH 服务安装
WSL zi'x

## 编辑配置信息

- 编辑 `/etc/ssh/sshd_config`

```shell
PasswordAuthentication yes
Port 22
PermitRootLogin yes
```
