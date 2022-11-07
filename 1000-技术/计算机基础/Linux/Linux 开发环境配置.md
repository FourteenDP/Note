---
title: Linux 开发环境配置
aliases: 
tags: 
date created: 2022-11-07 21:15:40
date updated: 2022-11-07 21:28:42
---

# Linux 开发环境配置

## 系统镜像源和更新

### 教程
一般情况下，源地址在 `/etc/apt/sources.list`

```shell
# 备份源文件
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
# 复制镜像源到文件头部
sudo vi /etc/apt/sources.list
# 防止运营商劫持
sudo apt install apt-transport-https ca-certificates
# 更新地址源索引
sudo apt update
# 更新系统
sudo apt upgrade
# 删除未使用的依赖项
sudo apt --purge autoremove
```
### 相关连接

- [Debian 源使用帮助 — USTC Mirror Help 文档](https://mirrors.ustc.edu.cn/help/debian.html)
- [清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/)
- [USTC Open Source Software Mirror](https://mirrors.ustc.edu.cn/)
