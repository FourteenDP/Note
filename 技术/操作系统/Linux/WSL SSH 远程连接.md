---
title: WSL SSH 远程连接
tags: 
    - WSL
    - Linux
    - SSH
    - 远程连接
    - 服务安装
    - 配置信息
uid: 1683439291256
date created: 2023-05-07 14:01:31
date updated: 2023-11-28 11:27:40
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
