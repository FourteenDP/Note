---
title: WSL SSH 远程连接
tags: []
date created: '2022-08-09 06:00:28'
date updated: '2023-11-25 22:42:36'
uid: 1683439291256
---

# WSL SSH 远程连接

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
