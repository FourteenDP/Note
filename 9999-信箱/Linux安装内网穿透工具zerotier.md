---
title: Linux 安装内网穿透工具 Zerotier
aliases: 
tags: 
date created: 2022-08-10 00:27:09
date updated: 2022-10-29 16:57:36
---

# Linux 安装内网穿透工具 Zerotier

```shell
curl -s https://install.zerotier.com | sudo bash
```

- 提示缺少关键包

```shell
E: gnupg, gnupg2 and gnupg1 do not seem to be installed, but one of them is required for this operation
```

- 安装关键包

```shell
apt install gnupg gnupg2 gnupg1
```
