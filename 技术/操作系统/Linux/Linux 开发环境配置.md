---
title: Linux 开发环境配置
aliases: [Linux 开发环境配置]
tags: []
date created: 2022-11-07 21:15:40
date updated: 2023-01-08 04:55:27
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

### 国内镜像

1、阿里云镜像站

```sh
deb https://mirrors.aliyun.com/debian/ bullseye main non-free contribdeb-src https://mirrors.aliyun.com/debian/ bullseye main non-free contrib deb https://mirrors.aliyun.com/debian-security/ bullseye-security maindeb-src https://mirrors.aliyun.com/debian-security/ bullseye-security main deb https://mirrors.aliyun.com/debian/ bullseye-updates main non-free contribdeb-src https://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib deb https://mirrors.aliyun.com/debian/ bullseye-backports main non-free contribdeb-src https://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
```

2、腾讯云镜像站

```sh
deb https://mirrors.tencent.com/debian/ bullseye main non-free contribdeb-src https://mirrors.tencent.com/debian/ bullseye main non-free contrib deb https://mirrors.tencent.com/debian-security/ bullseye-security maindeb-src https://mirrors.tencent.com/debian-security/ bullseye-security main deb https://mirrors.tencent.com/debian/ bullseye-updates main non-free contribdeb-src https://mirrors.tencent.com/debian/ bullseye-updates main non-free contrib deb https://mirrors.tencent.com/debian/ bullseye-backports main non-free contribdeb-src https://mirrors.tencent.com/debian/ bullseye-backports main non-free contrib
```

3、网易云镜像站

```sh
deb https://mirrors.163.com/debian/ bullseye main non-free contribdeb-src https://mirrors.163.com/debian/ bullseye main non-free contrib deb https://mirrors.163.com/debian-security/ bullseye-security maindeb-src https://mirrors.163.com/debian-security/ bullseye-security main deb https://mirrors.163.com/debian/ bullseye-updates main non-free contribdeb-src https://mirrors.163.com/debian/ bullseye-updates main non-free contrib deb https://mirrors.163.com/debian/ bullseye-backports main non-free contribdeb-src https://mirrors.163.com/debian/ bullseye-backports main non-free contrib
```

4、华为镜像站

```sh
deb https://mirrors.huaweicloud.com/debian/ bullseye main non-free contribdeb-src https://mirrors.huaweicloud.com/debian/ bullseye main non-free contrib deb https://mirrors.huaweicloud.com/debian-security/ bullseye-security maindeb-src https://mirrors.huaweicloud.com/debian-security/ bullseye-security main deb https://mirrors.huaweicloud.com/debian/ bullseye-updates main non-free contribdeb-src https://mirrors.huaweicloud.com/debian/ bullseye-updates main non-free contrib deb https://mirrors.huaweicloud.com/debian/ bullseye-backports main non-free contribdeb-src https://mirrors.huaweicloud.com/debian/ bullseye-backports main non-free contrib
```

5、清华镜像站

```sh
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-freedeb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-freedeb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-freedeb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-freedeb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
```

6、中科大镜像站

```sh
deb https://mirrors.ustc.edu.cn/debian/ bullseye main contrib non-freedeb-src https://mirrors.ustc.edu.cn/debian/ bullseye main contrib non-free deb https://mirrors.ustc.edu.cn/debian/ bullseye-updates main contrib non-freedeb-src https://mirrors.ustc.edu.cn/debian/ bullseye-updates main contrib non-free deb https://mirrors.ustc.edu.cn/debian/ bullseye-backports main contrib non-freedeb-src https://mirrors.ustc.edu.cn/debian/ bullseye-backports main contrib non-free deb https://mirrors.ustc.edu.cn/debian-security/ bullseye-security main contrib non-freedeb-src https://mirrors.ustc.edu.cn/debian-security/ bullseye-security main contrib non-free
```

### 参考

- [Debian 源使用帮助 — USTC Mirror Help 文档](https://mirrors.ustc.edu.cn/help/debian.html)
- [清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/)
- [USTC Open Source Software Mirror](https://mirrors.ustc.edu.cn/)

## 设置代理

![[WSL 系统代理]]

## 中文环境

```shell
# 安装
apt install locales
# 配置
dpkg-reconfigure locales
# 查看当前语言
locale
# 设置失败执行以下
export LANG=zh_CN.UTF-8
```

## 常用下载器

```sh
sudo apt install curl wget axel git
```

## zsh和Oh My Zsh

![[Linux安装命令行工具Oh My Zsh]]

## Homebrew包管理器

### 参考

- [The Missing Package Manager for macOS (or Linux) — Homebrew](https://brew.sh/)
- [HomebrewCN: Homebrew 国内安装脚本](https://gitee.com/cunkai/HomebrewCN)
