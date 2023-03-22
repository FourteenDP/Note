---
title: Debian 中文环境
aliases: [Debian 中文环境]
tags: []
date created: 2023-03-22 13:38:09
date updated: 2023-03-22 22:56:38
---

# Debian 中文环境

```shell
# 安装
apt install locales
# 配置
sudo dpkg-reconfigure locales
# 查看当前语言
locale
# 设置失败执行以下
export LANG=zh_CN.UTF-8
# 重启终端
```
