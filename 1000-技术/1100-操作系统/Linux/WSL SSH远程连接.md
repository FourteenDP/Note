---
title: WSL SSH 远程连接
aliases: 
tags: 
  - WSL
date created: 2022-08-08 22:00:28
date updated: 2022-12-01 17:55:24
---


## SSH 服务安装

WSL 子系统的 SSH 服务无法连接，需要重新安装

```shell
apt remove openssh-server
apt install openssh-server
```

## 编辑配置信息

- 编辑 `/etc/ssh/sshd_config`

```shell
PasswordAuthentication yes
Port 22
PermitRootLogin yes
```

- 开启服务
`service ssh start`
- 查看状态
`service ssh status`
